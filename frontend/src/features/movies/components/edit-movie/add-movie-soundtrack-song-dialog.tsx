'use client';

import { useState } from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import SongSelect from '@/components/form/song-select';
import { useInsertMovieSoundtrackMutation } from '@/generated/graphql';
import useHydratedForm from '@/hooks/use-hydrated-form';
import { Button } from '@/registry/new-york-v4/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/registry/new-york-v4/ui/dialog';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';

import { addMovieSoundtrackSongSchema } from '../../schemas/movie-soundtrack.schema';
import { AddMovieSoundtrackSongSchemaType } from '../../schemas/movie-soundtrack.schema';
import { Plus, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface AddMovieSoundtrackSongDialogProps {
    movieId: string;
}

export default function AddMovieSoundtrackSongDialog({ movieId }: AddMovieSoundtrackSongDialogProps) {
    const [open, setOpen] = useState(false);
    const queryClient = useQueryClient();

    const { mutateAsync: insertMovieSoundtrack } = useInsertMovieSoundtrackMutation();

    const form = useForm({
        resolver: zodResolver(addMovieSoundtrackSongSchema),
        defaultValues: {
            song: '',
            timestamps: '',
            description: ''
        }
    });

    const { handleSubmit, control, reset } = form;

    const onSubmit = async (data: AddMovieSoundtrackSongSchemaType) => {
        try {
            await insertMovieSoundtrack({
                object: {
                    movie_id: movieId,
                    song_id: data.song,
                    timestamps: data.timestamps.split(',').map((t) => t.trim()),
                    description: data.description || null
                }
            });

            toast.success('Song added successfully');
            queryClient.invalidateQueries({ queryKey: ['movie-soundtrack', movieId] });
            setOpen(false);
            reset();
        } catch (error) {
            toast.error('Failed to add song');
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='outline' size='sm'>
                    <Plus className='size-4' />
                    Add Song
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Song</DialogTitle>
                </DialogHeader>
                <DialogDescription>Add a song to the movie soundtrack.</DialogDescription>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
                        <FormField
                            control={control}
                            name='song'
                            render={({ field }) => (
                                <BaseFormLayout label='Song'>
                                    <SongSelect
                                        onValueChange={(value) => field.onChange(value)}
                                        defaultValue={field.value}
                                    />
                                </BaseFormLayout>
                            )}
                        />

                        <FormField
                            control={control}
                            name='timestamps'
                            render={({ field }) => (
                                <BaseFormLayout label='Timestamps'>
                                    <InputField {...field} placeholder='e.g. 0s, 1m 30s, 1h 20m 30s' />
                                </BaseFormLayout>
                            )}
                        />

                        <FormField
                            control={control}
                            name='description'
                            render={({ field }) => (
                                <BaseFormLayout label='Description'>
                                    <InputField
                                        {...field}
                                        placeholder='Optional description of when the song appears'
                                    />
                                </BaseFormLayout>
                            )}
                        />

                        <div className='flex justify-end gap-2'>
                            <Button variant='outline' type='button' className='mr-2' onClick={() => setOpen(false)}>
                                <X className='size-4' />
                                Cancel
                            </Button>
                            <Button type='submit'>Add Song</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
