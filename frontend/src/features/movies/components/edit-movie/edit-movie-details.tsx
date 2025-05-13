'use client';

import BaseFormLayout from '@/components/form/base-form-layout';
import DatePickerField from '@/components/form/date-picker';
import InputField from '@/components/form/input';
import SelectField from '@/components/form/select';
import TextareaField from '@/components/form/textarea';
import { LANGUAGES } from '@/constants/languages.constant';
import {
    Keywords_Constraint,
    Keywords_Update_Column,
    Movie_Availabilities_Constraint,
    Movie_Availabilities_Update_Column,
    Movie_Genres_Constraint,
    Movie_Keywords_Constraint,
    Movie_Keywords_Update_Column,
    Movies_Constraint,
    Movies_Update_Column,
    useDeleteMovieAvailabilitiesMutation,
    useDeleteMovieGenresMutation,
    useDeleteMovieKeywordsMutation,
    useGetMovieQuery,
    useInsertMovieMutation
} from '@/generated/graphql';
import { queryClient } from '@/lib/query-client';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import MultipleSelector from '@/registry/new-york-v4/ui/multiselect';
import { zodResolver } from '@hookform/resolvers/zod';

import {
    movieAvailabilityOptions,
    movieCertificationOptions,
    movieGenresOptions,
    movieReleaseStatusOptions
} from '../../constants/movie-enums';
import { EditMovieSchemaType, editMovieSchema } from '../../schemas/edit-movie.schema';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface EditMovieDetailsProps {
    movieId: string;
}

export default function EditMovieDetails({ movieId }: EditMovieDetailsProps) {
    const { data } = useGetMovieQuery(
        { id: movieId },
        {
            queryKey: ['movie', movieId]
        }
    );

    const { mutateAsync: insertMovie } = useInsertMovieMutation({
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const { mutateAsync: deleteMovieGenres } = useDeleteMovieGenresMutation({
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const { mutateAsync: deleteMovieAvailabilities } = useDeleteMovieAvailabilitiesMutation({
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const { mutateAsync: deleteMovieKeywords } = useDeleteMovieKeywordsMutation({
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const movie = data?.movies_by_pk;

    if (!movie) return null;

    const form = useForm<EditMovieSchemaType>({
        resolver: zodResolver(editMovieSchema),
        defaultValues: {
            title: movie.title,
            tagline: movie.tagline ?? '',
            overview: movie.overview ?? '',
            releaseDate: new Date(movie.release_date) ?? undefined,
            runtime: movie.runtime ?? 0,
            budget: movie.budget ?? 0,
            revenue: movie.revenue ?? 0,
            language: movie.language ?? '',
            status: movie.status ?? undefined,
            certification: movie.certification ?? undefined,
            genres: movie.movie_genres.map((genre) => ({
                value: genre.genre,
                label: movieGenresOptions.find((option) => option.value === genre.genre)?.label ?? ''
            })),
            availabilities: movie.movie_availabilities.map((availability) => ({
                value: availability.availability,
                label:
                    movieAvailabilityOptions.find((option) => option.value === availability.availability)?.label ?? ''
            })),
            keywords: movie.movie_keywords.map((keyword) => ({
                value: keyword.keyword.keyword,
                label: keyword.keyword.keyword
            })),
            imdbId: movie.imdb_id ?? '',
            tmdbId: movie.tmdb_id ?? '',
            homepage: movie.homepage ?? ''
        }
    });

    async function onSubmit(values: EditMovieSchemaType) {
        if (!movie) return;

        const currentGenres = movie.movie_genres.map((genre) => genre.genre);
        const newGenres = values.genres?.map((genre) => genre.value) ?? [];

        const currentAvailabilities = movie.movie_availabilities.map((avail) => avail.availability);
        const newAvailabilities = values.availabilities?.map((avail) => avail.value) ?? [];

        const currentKeywords = movie.movie_keywords.map((keyword) => keyword.keyword.keyword);
        const newKeywords = values.keywords?.map((keyword) => keyword.value) ?? [];

        if (JSON.stringify(currentGenres) !== JSON.stringify(newGenres)) {
            await deleteMovieGenres({
                where: {
                    movie_id: {
                        _eq: movieId
                    }
                }
            });
        }

        if (JSON.stringify(currentAvailabilities) !== JSON.stringify(newAvailabilities)) {
            await deleteMovieAvailabilities({
                where: {
                    movie_id: {
                        _eq: movieId
                    }
                }
            });
        }

        if (JSON.stringify(currentKeywords) !== JSON.stringify(newKeywords)) {
            await deleteMovieKeywords({
                where: { movie_id: { _eq: movieId } }
            });
        }

        await insertMovie(
            {
                object: {
                    id: movieId,
                    title: values.title,
                    tagline: values.tagline,
                    overview: values.overview,
                    release_date: values.releaseDate,
                    runtime: values.runtime,
                    budget: values.budget,
                    revenue: values.revenue,
                    language: values.language,
                    status: values.status,
                    certification: values.certification,
                    imdb_id: values.imdbId,
                    tmdb_id: values.tmdbId,
                    homepage: values.homepage,
                    movie_genres: {
                        data:
                            values.genres?.map((genre) => ({
                                genre: genre.value
                            })) ?? [],
                        on_conflict: {
                            constraint: Movie_Genres_Constraint.MovieGenresPkey
                        }
                    },
                    movie_availabilities: {
                        data:
                            values.availabilities?.map((availability) => ({
                                availability: availability.value
                            })) ?? [],
                        on_conflict: {
                            constraint: Movie_Availabilities_Constraint.MovieAvailabilitiesPkey
                        }
                    },
                    movie_keywords: {
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
                            constraint: Movie_Keywords_Constraint.MovieKeywordsPkey,
                            update_columns: [Movie_Keywords_Update_Column.KeywordId]
                        }
                    }
                },
                on_conflict: {
                    constraint: Movies_Constraint.MoviesPkey,
                    update_columns: [
                        Movies_Update_Column.Title,
                        Movies_Update_Column.Tagline,
                        Movies_Update_Column.Overview,
                        Movies_Update_Column.ReleaseDate,
                        Movies_Update_Column.Runtime,
                        Movies_Update_Column.Budget,
                        Movies_Update_Column.Revenue,
                        Movies_Update_Column.Language,
                        Movies_Update_Column.Status,
                        Movies_Update_Column.Certification,
                        Movies_Update_Column.ImdbId,
                        Movies_Update_Column.TmdbId,
                        Movies_Update_Column.Homepage
                    ]
                }
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ['movie', movieId] });
                    toast.success('Movie updated successfully');
                }
            }
        );
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {
                        e.preventDefault();
                    }
                }}>
                <FormField
                    control={form.control}
                    name='title'
                    render={({ field }) => (
                        <BaseFormLayout label='Title'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
                    name='tagline'
                    render={({ field }) => (
                        <BaseFormLayout label='Tagline'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
                    name='overview'
                    render={({ field }) => (
                        <BaseFormLayout label='Overview'>
                            <TextareaField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
                    name='releaseDate'
                    render={({ field }) => (
                        <BaseFormLayout label='Release Date'>
                            <DatePickerField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
                    name='runtime'
                    render={({ field }) => (
                        <BaseFormLayout label='Runtime'>
                            <InputField type='number' {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
                    name='budget'
                    render={({ field }) => (
                        <BaseFormLayout label='Budget'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
                    name='revenue'
                    render={({ field }) => (
                        <BaseFormLayout label='Revenue'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
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
                    control={form.control}
                    name='status'
                    render={({ field }) => (
                        <BaseFormLayout label='Status'>
                            <SelectField options={movieReleaseStatusOptions} modal {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
                    name='certification'
                    render={({ field }) => (
                        <BaseFormLayout label='Age Certification'>
                            <SelectField options={movieCertificationOptions} modal {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
                    name='genres'
                    render={({ field }) => (
                        <BaseFormLayout label='Genres'>
                            <MultipleSelector
                                commandProps={{
                                    label: 'Select Genres'
                                }}
                                defaultOptions={movieGenresOptions.map((option) => ({
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
                    control={form.control}
                    name='availabilities'
                    render={({ field }) => (
                        <BaseFormLayout label='Availabilities'>
                            <MultipleSelector
                                commandProps={{
                                    label: 'Select Availabilities'
                                }}
                                defaultOptions={movieAvailabilityOptions.map((option) => ({
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
                    control={form.control}
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
                    control={form.control}
                    name='imdbId'
                    render={({ field }) => (
                        <BaseFormLayout label='IMDB ID'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
                    name='tmdbId'
                    render={({ field }) => (
                        <BaseFormLayout label='TMDB ID'>
                            <InputField type='number' {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
                    name='homepage'
                    render={({ field }) => (
                        <BaseFormLayout label='Homepage'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <div className='flex justify-end gap-2'>
                    <Button variant='outline' type='button' onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type='submit'>Save</Button>
                </div>
            </form>
        </Form>
    );
}
