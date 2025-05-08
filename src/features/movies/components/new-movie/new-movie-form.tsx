'use client';

import BaseFormLayout from '@/components/form/base-form-layout';
import DatePickerField from '@/components/form/date-picker';
import InputField from '@/components/form/input';
import TextareaField from '@/components/form/textarea';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import MultipleSelector from '@/registry/new-york-v4/ui/multiselect';
import { zodResolver } from '@hookform/resolvers/zod';

import { movieGenresOptions } from '../../constants/movie-enums';
import { NewMovieSchema, newMovieSchema } from '../../schemas/new-movie.schema';
import { useForm } from 'react-hook-form';

export function NewMovieForm() {
    const form = useForm<NewMovieSchema>({
        resolver: zodResolver(newMovieSchema),
        defaultValues: {
            title: '',
            overview: '',
            releaseDate: undefined,
            genres: []
        }
    });

    function onSubmit(values: NewMovieSchema) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <FormField
                    control={form.control}
                    name='title'
                    render={({ field }) => (
                        <BaseFormLayout label='Title'>
                            <InputField placeholder='Enter movie title' {...field} />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={form.control}
                    name='overview'
                    render={({ field }) => (
                        <BaseFormLayout label='Overview'>
                            <TextareaField placeholder='Enter movie overview' {...field} />
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
                    name='genres'
                    render={({ field }) => (
                        <BaseFormLayout label='Genres'>
                            <MultipleSelector
                                commandProps={{
                                    label: 'Select Genres'
                                }}
                                defaultOptions={movieGenresOptions.map((genre) => ({
                                    label: genre.label,
                                    value: genre.value
                                }))}
                                placeholder='Select Genres'
                                emptyIndicator='No genres found'
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />

                <div className='flex justify-end'>
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
        </Form>
    );
}
