'use client';

import { useState } from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import SongSelect from '@/components/form/song-select';
import { useUpdateMovieSoundtrackMutation } from '@/generated/graphql';
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
import { useQueryClient } from '@tanstack/react-query';

import { addMovieSoundtrackSongSchema } from '../../schemas/movie-soundtrack.schema';
import { AddMovieSoundtrackSongSchemaType } from '../../schemas/movie-soundtrack.schema';
import { Pencil, X } from 'lucide-react';
import { toast } from 'sonner';

interface EditMovieSoundtrackSongDialogProps {
    movieId: string;
    soundtrack: {
        id: string;
        song: {
            id: string;
            name: string;
        };
        timestamps: string[];
        description: string | null;
    };
}

export default function EditMovieSoundtrackSongDialog({ movieId, soundtrack }: EditMovieSoundtrackSongDialogProps) {
    const [open, setOpen] = useState(false);
    const queryClient = useQueryClient();

    const { mutateAsync: updateMovieSoundtrack } = useUpdateMovieSoundtrackMutation();

    const form = useHydratedForm(addMovieSoundtrackSongSchema, { soundtrack }, (d) => ({
        song: d.soundtrack.song.id,
        timestamps: d.soundtrack.timestamps.join(', '),
        description: d.soundtrack.description || ''
    }));

    const { handleSubmit, control, reset } = form;

    const onSubmit = async (data: AddMovieSoundtrackSongSchemaType) => {
        try {
            await updateMovieSoundtrack({
                id: soundtrack.id,
                object: {
                    song_id: data.song,
                    timestamps: data.timestamps.split(',').map((t) => t.trim()),
                    description: data.description || null
                }
            });

            toast.success('Song updated successfully');
            queryClient.invalidateQueries({ queryKey: ['movie-soundtrack', movieId] });
            setOpen(false);
            reset();
        } catch (error) {
            toast.error('Failed to update song');
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='ghost' size='sm'>
                    <Pencil className='size-4' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Song</DialogTitle>
                </DialogHeader>
                <DialogDescription>Edit the song details in the movie soundtrack.</DialogDescription>
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
                            <Button type='submit'>Update Song</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
