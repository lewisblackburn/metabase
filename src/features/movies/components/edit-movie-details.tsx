'use client';

import BaseFormLayout from '@/components/form/base-form-layout';
import { DatePickerField } from '@/components/form/date-picker';
import InputField from '@/components/form/input';
import SelectField, { SelectOption } from '@/components/form/select';
import TextareaField from '@/components/form/textarea';
import { LANGUAGES } from '@/constants/languages.constant';
import {
    useGetCertificationsQuery,
    useGetMovieQuery,
    useGetStatusesQuery,
    useUpdateMovieMutation
} from '@/generated/graphql';
import { queryClient } from '@/lib/query-client';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField, FormItem } from '@/registry/new-york-v4/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';

import { MovieDetails, movieDetailsSchema } from '../schemas/movie-details.schema';
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

    const { data: certifications } = useGetCertificationsQuery(
        {
            where: {
                certification_types: {
                    type: {
                        _eq: 'movie'
                    }
                }
            }
        },
        {
            queryKey: ['certifications']
        }
    );

    const { data: statuses } = useGetStatusesQuery(
        {
            where: {
                status_types: {
                    type: {
                        _eq: 'movie'
                    }
                }
            }
        },
        {
            queryKey: ['statuses']
        }
    );

    const { mutateAsync: updateMovie } = useUpdateMovieMutation();

    const movie = data?.movies_by_pk;

    if (!movie) return null;

    const form = useForm<MovieDetails>({
        resolver: zodResolver(movieDetailsSchema),
        defaultValues: {
            title: movie.title,
            tagline: movie.tagline ?? '',
            overview: movie.overview ?? '',
            releaseDate: new Date(movie.release_date) ?? undefined,
            runtime: movie.runtime ?? 0,
            budget: movie.budget ?? 0,
            revenue: movie.revenue ?? 0,
            language: movie.language ?? '',
            certification: movie.certification?.id ?? undefined,
            status: movie.status?.id ?? undefined,
            imdbId: movie.imdb_id ?? '',
            tmdbId: movie.tmdb_id ?? '',
            homepage: movie.homepage ?? ''
        }
    });

    async function onSubmit(values: MovieDetails) {
        await updateMovie(
            {
                id: movieId,
                inc: {},
                set: {
                    title: values.title,
                    tagline: values.tagline,
                    overview: values.overview,
                    release_date: values.releaseDate,
                    runtime: values.runtime,
                    budget: values.budget,
                    revenue: values.revenue,
                    language: values.language,
                    certification_id: values.certification,
                    status_id: values.status,
                    imdb_id: values.imdbId,
                    tmdb_id: values.tmdbId,
                    homepage: values.homepage
                }
            },
            {
                onSuccess: () => {
                    toast.success('Movie updated successfully');
                    queryClient.invalidateQueries({ queryKey: ['movie', movieId] });
                },
                onError: (error) => {
                    toast.error((error as Error).message);
                }
            }
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='title'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Title'>
                                <InputField {...field} />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='tagline'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Tagline'>
                                <InputField {...field} />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='overview'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Overview'>
                                <TextareaField {...field} />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='releaseDate'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Release Date'>
                                <DatePickerField {...field} modal />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='runtime'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Runtime'>
                                <InputField type='number' {...field} />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='budget'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Budget'>
                                <InputField {...field} />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='revenue'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Revenue'>
                                <InputField {...field} />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='language'
                    render={({ field }) => (
                        <FormItem>
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
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='status'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Status'>
                                <SelectField
                                    options={
                                        statuses?.statuses.map((status) => ({
                                            value: status.id.toString(),
                                            label: status.name
                                        })) ?? []
                                    }
                                    modal
                                    {...field}
                                />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='certification'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Age Certification'>
                                <SelectField
                                    options={
                                        certifications?.certifications.map((certification) => ({
                                            value: certification.id.toString(),
                                            label: certification.name
                                        })) ?? []
                                    }
                                    modal
                                    {...field}
                                />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='imdbId'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='IMDB ID'>
                                <InputField {...field} />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='tmdbId'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='TMDB ID'>
                                <InputField type='number' {...field} />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='homepage'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Homepage'>
                                <InputField {...field} />
                            </BaseFormLayout>
                        </FormItem>
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
