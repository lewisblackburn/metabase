'use client';

import BaseFormLayout from '@/components/form/base-form-layout';
import { DatePickerField } from '@/components/form/date-picker';
import InputField from '@/components/form/input';
import LanguageSelectField from '@/components/form/language-select';
import MultiSelectField from '@/components/form/multi-select';
import SelectField, { SelectOption } from '@/components/form/select';
import TextareaField from '@/components/form/textarea';
import { MOVIE_CERTIFICATION_OPTIONS } from '@/constants/certifications.constant';
import { MOVIE_STATUS_OPTIONS } from '@/constants/status.constant';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField, FormItem } from '@/registry/new-york-v4/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';

import { MovieDetails, movieDetailsSchema } from '../schemas/movie-details.schema';
import { useForm } from 'react-hook-form';

interface EditMovieDetailsProps {
    movieId: string;
}

export default function EditMovieDetails({ movieId }: EditMovieDetailsProps) {
    const form = useForm<MovieDetails>({
        resolver: zodResolver(movieDetailsSchema),
        defaultValues: {
            title: '',
            tagline: '',
            overview: '',
            releaseDate: undefined,
            runtime: 0,
            budget: 0,
            revenue: 0,
            language: '',
            status: undefined,
            ageCertification: undefined,
            alternativeTitles: [],
            imdbId: '',
            tmdbId: 0,
            homepage: ''
        }
    });

    function onSubmit(values: MovieDetails) {
        console.log(values);
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
                                <InputField type='number' {...field} />
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
                                <InputField type='number' {...field} />
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
                                <LanguageSelectField {...field} />
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
                                <SelectField options={MOVIE_STATUS_OPTIONS as SelectOption[]} {...field} />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='ageCertification'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Age Certification'>
                                <SelectField options={MOVIE_CERTIFICATION_OPTIONS as SelectOption[]} {...field} />
                            </BaseFormLayout>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='alternativeTitles'
                    render={({ field }) => (
                        <FormItem>
                            <BaseFormLayout label='Alternative Titles'>
                                <MultiSelectField options={[]} createable {...field} />
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
