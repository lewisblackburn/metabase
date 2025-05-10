'use client';

import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import { useInsertSongMutation } from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import MultipleSelector from '@/registry/new-york-v4/ui/multiselect';
import { zodResolver } from '@hookform/resolvers/zod';

import { songGenresOptions } from '../constants/song-enums';
import { NewSongSchemaType, newSongSchema } from '../schemas/new-song.schema';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export function NewSongForm() {
    const form = useForm<NewSongSchemaType>({
        resolver: zodResolver(newSongSchema),
        defaultValues: {
            name: '',
            genres: []
        }
    });
    const { mutateAsync: insertSong, isPending } = useInsertSongMutation();

    async function onSubmit(values: NewSongSchemaType) {
        await insertSong(
            {
                object: {
                    name: values.name,
                    song_genres: {
                        data:
                            values.genres?.map((genre) => ({
                                genre: genre.value
                            })) ?? []
                    }
                }
            },
            {
                onSuccess: () => {
                    toast.success('Song created successfully');
                    form.reset();
                },
                onError: (error) => {
                    toast.error((error as Error).message);
                }
            }
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <BaseFormLayout label='Name'>
                            <InputField placeholder='Enter song name' {...field} />
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
                                defaultOptions={songGenresOptions.map((genre) => ({
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
                    <Button type='submit' disabled={isPending}>
                        {isPending ? (
                            <>
                                <Loader2 className='h-4 w-4 animate-spin' />
                                Submitting...
                            </>
                        ) : (
                            'Submit'
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
