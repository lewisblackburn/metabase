'use client';

import BaseFormLayout from '@/components/form/base-form-layout';
import DatePickerField from '@/components/form/date-picker';
import InputField from '@/components/form/input';
import SelectField from '@/components/form/select';
import TextareaField from '@/components/form/textarea';
import { LANGUAGES } from '@/constants/languages.constant';
import {
    Book_Availabilities_Constraint,
    Book_Genres_Constraint,
    Book_Keywords_Constraint,
    Book_Keywords_Update_Column,
    Books_Constraint,
    Books_Update_Column,
    Keywords_Constraint,
    Keywords_Update_Column,
    useDeleteBookAvailabilitiesMutation,
    useDeleteBookGenresMutation,
    useDeleteBookKeywordsMutation,
    useGetBookQuery,
    useInsertBookMutation
} from '@/generated/graphql';
import useHydratedForm from '@/hooks/use-hydrated-form';
import { queryClient } from '@/lib/query-client';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import MultipleSelector from '@/registry/new-york-v4/ui/multiselect';

import { bookGenresOptions, bookReleaseStatusOptions } from '../../constants/book-enums';
import { bookAvailabilityOptions } from '../../constants/book-enums';
import { EditBookSchemaType, editBookSchema } from '../../schemas/edit-book.schema';
import { toast } from 'sonner';

interface EditBookDetailsProps {
    bookId: string;
}

export default function EditBookDetails({ bookId }: EditBookDetailsProps) {
    const { data, isLoading } = useGetBookQuery(
        { id: bookId },
        {
            queryKey: ['book', bookId]
        }
    );

    const form = useHydratedForm(editBookSchema, data, (d) => ({
        title: d.books_by_pk?.title ?? '',
        overview: d.books_by_pk?.overview ?? '',
        published_date: d.books_by_pk?.published_date ? new Date(d.books_by_pk.published_date) : undefined,
        reading_time: d.books_by_pk?.reading_time ?? 0,
        language: d.books_by_pk?.language ?? '',
        status: d.books_by_pk?.status ?? undefined,
        genres:
            d.books_by_pk?.book_genres.map((genre) => ({
                value: genre.genre,
                label: bookGenresOptions.find((option) => option.value === genre.genre)?.label ?? ''
            })) ?? [],
        availabilities:
            d.books_by_pk?.book_availabilities.map((availability) => ({
                value: availability.availability,
                label: bookAvailabilityOptions.find((option) => option.value === availability.availability)?.label ?? ''
            })) ?? [],
        keywords:
            d.books_by_pk?.book_keywords.map((keyword) => ({
                value: keyword.keyword.keyword,
                label: keyword.keyword.keyword
            })) ?? [],
        googlebooks_id: d.books_by_pk?.googlebooks_id ?? ''
    }));

    const { handleSubmit, control, reset } = form;

    const { mutateAsync: insertBook } = useInsertBookMutation({
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const { mutateAsync: deleteBookGenres } = useDeleteBookGenresMutation({
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const { mutateAsync: deleteBookAvailabilities } = useDeleteBookAvailabilitiesMutation({
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const { mutateAsync: deleteBookKeywords } = useDeleteBookKeywordsMutation({
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const book = data?.books_by_pk;

    if (isLoading || !book) return null;

    async function onSubmit(values: EditBookSchemaType) {
        const currentGenres = book?.book_genres.map((genre) => genre.genre);
        const newGenres = values.genres?.map((genre) => genre.value) ?? [];

        const currentAvailabilities = book?.book_availabilities.map((avail) => avail.availability);
        const newAvailabilities = values.availabilities?.map((avail) => avail.value) ?? [];

        const currentKeywords = book?.book_keywords.map((keyword) => keyword.keyword.keyword);
        const newKeywords = values.keywords?.map((keyword) => keyword.value) ?? [];

        if (JSON.stringify(currentGenres) !== JSON.stringify(newGenres)) {
            await deleteBookGenres({
                where: {
                    book_id: {
                        _eq: bookId
                    }
                }
            });
        }

        if (JSON.stringify(currentAvailabilities) !== JSON.stringify(newAvailabilities)) {
            await deleteBookAvailabilities({
                where: {
                    book_id: {
                        _eq: bookId
                    }
                }
            });
        }

        if (JSON.stringify(currentKeywords) !== JSON.stringify(newKeywords)) {
            await deleteBookKeywords({
                where: { book_id: { _eq: bookId } }
            });
        }

        await insertBook(
            {
                object: {
                    id: bookId,
                    title: values.title,
                    overview: values.overview,
                    published_date: values.published_date,
                    reading_time: values.reading_time,
                    language: values.language,
                    status: values.status,
                    book_genres: {
                        data:
                            values.genres?.map((genre) => ({
                                genre: genre.value
                            })) ?? [],
                        on_conflict: {
                            constraint: Book_Genres_Constraint.BookGenresPkey1
                        }
                    },
                    book_availabilities: {
                        data:
                            values.availabilities?.map((availability) => ({
                                availability: availability.value
                            })) ?? [],
                        on_conflict: {
                            constraint: Book_Availabilities_Constraint.BookAvailabilitiesPkey
                        }
                    },
                    book_keywords: {
                        data:
                            values.keywords?.map((keyword) => ({
                                keyword: {
                                    data: {
                                        keyword: keyword.value
                                    },
                                    on_conflict: {
                                        constraint: Keywords_Constraint.KeywordsKeywordKey,
                                        update_columns: [Keywords_Update_Column.Keyword]
                                    }
                                }
                            })) ?? [],
                        on_conflict: {
                            constraint: Book_Keywords_Constraint.BookKeywordsPkey,
                            update_columns: [Book_Keywords_Update_Column.KeywordId]
                        }
                    }
                },
                on_conflict: {
                    constraint: Books_Constraint.BooksPkey,
                    update_columns: [
                        Books_Update_Column.Title,
                        Books_Update_Column.Overview,
                        Books_Update_Column.PublishedDate,
                        Books_Update_Column.ReadingTime,
                        Books_Update_Column.Language,
                        Books_Update_Column.Status,
                        Books_Update_Column.GooglebooksId
                    ]
                }
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ['book', bookId] });
                    toast.success('Book updated successfully');
                }
            }
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()} className='space-y-8'>
                <FormField
                    control={control}
                    name='title'
                    render={({ field }) => (
                        <BaseFormLayout label='Title'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={control}
                    name='overview'
                    render={({ field }) => (
                        <BaseFormLayout label='Overview'>
                            <TextareaField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={control}
                    name='published_date'
                    render={({ field }) => (
                        <BaseFormLayout label='Published Date'>
                            <DatePickerField {...field} />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={control}
                    name='reading_time'
                    render={({ field: { value, onChange, ...field } }) => (
                        <BaseFormLayout label='Reading Time'>
                            <InputField
                                type='number'
                                value={value || ''}
                                onChange={(e) => onChange(e.target.value ? Number(e.target.value) : null)}
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={control}
                    name='language'
                    render={({ field }) => (
                        <BaseFormLayout label='Language'>
                            <SelectField
                                options={LANGUAGES.map((language) => ({
                                    value: language.code,
                                    label: language.label,
                                    secondaryLabel: language.englishLabel
                                }))}
                                modal
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={control}
                    name='status'
                    render={({ field }) => (
                        <BaseFormLayout label='Status'>
                            <SelectField options={bookReleaseStatusOptions} modal {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={control}
                    name='genres'
                    render={({ field }) => (
                        <BaseFormLayout label='Genres'>
                            <MultipleSelector
                                commandProps={{
                                    label: 'Select Genres'
                                }}
                                defaultOptions={bookGenresOptions.map((option) => ({
                                    label: option.label,
                                    value: option.value
                                }))}
                                placeholder='Select Genres'
                                emptyIndicator='No genres found'
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={control}
                    name='availabilities'
                    render={({ field }) => (
                        <BaseFormLayout label='Availabilities'>
                            <MultipleSelector
                                commandProps={{
                                    label: 'Select Availabilities'
                                }}
                                defaultOptions={bookAvailabilityOptions.map((option) => ({
                                    label: option.label,
                                    value: option.value
                                }))}
                                placeholder='Select Availabilities'
                                emptyIndicator='No availabilities found'
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={control}
                    name='keywords'
                    render={({ field }) => (
                        <BaseFormLayout label='Keywords'>
                            <MultipleSelector
                                creatable
                                commandProps={{
                                    label: 'Select Keywords'
                                }}
                                placeholder='Select Keywords'
                                emptyIndicator='No keywords found'
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={control}
                    name='googlebooks_id'
                    render={({ field }) => (
                        <BaseFormLayout label='Google Books ID'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />

                <div className='flex justify-end gap-2'>
                    <Button variant='outline' type='button' size='sm'>
                        Reset
                    </Button>
                    <Button type='submit' size='sm'>
                        Save Changes
                    </Button>
                </div>
            </form>
        </Form>
    );
}
