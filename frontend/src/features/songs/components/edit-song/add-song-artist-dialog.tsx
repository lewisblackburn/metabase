'use client';

import { useState } from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import PersonSelect from '@/components/form/person-select';
import { AddSongArtistSchemaType } from '@/features/songs/schemas/song-artist.schema';
import { addSongArtistSchema } from '@/features/songs/schemas/song-artist.schema';
import { Object_Types_Enum, useInsertCreditsMutation } from '@/generated/graphql';
import { Credit_Types_Enum } from '@/generated/graphql';
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

import { Plus, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface AddSongArtistDialogProps {
    songId: string;
}

export default function AddSongArtistDialog({ songId }: AddSongArtistDialogProps) {
    const [open, setOpen] = useState(false);
    const queryClient = useQueryClient();

    const { mutateAsync: insertCredits } = useInsertCreditsMutation();

    const form = useForm({
        resolver: zodResolver(addSongArtistSchema),
        defaultValues: {
            person: ''
        }
    });

    const { handleSubmit, control, reset } = form;

    const onSubmit = async (data: AddSongArtistSchemaType) => {
        try {
            await insertCredits({
                objects: [
                    {
                        object_id: songId,
                        person_id: data.person,
                        credit_type: Credit_Types_Enum.Artist,
                        object_type: Object_Types_Enum.Song
                    }
                ]
            });

            toast.success('Song artist added successfully');
            queryClient.invalidateQueries({ queryKey: ['song-artists', songId] });
            setOpen(false);
            reset();
        } catch (error) {
            toast.error('Failed to add song artist');
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='outline' size='sm'>
                    <Plus className='size-4' />
                    Add Song Artist
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Song Artist</DialogTitle>
                </DialogHeader>
                <DialogDescription>Add an artist to the song.</DialogDescription>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
                        <FormField
                            control={control}
                            name='person'
                            render={({ field }) => (
                                <BaseFormLayout label='Person'>
                                    <PersonSelect
                                        onValueChange={(value) => field.onChange(value)}
                                        defaultValue={field.value}
                                    />
                                </BaseFormLayout>
                            )}
                        />

                        <div className='flex justify-end gap-2'>
                            <Button variant='outline' type='button' className='mr-2' onClick={() => setOpen(false)}>
                                <X className='size-4' />
                                Cancel
                            </Button>
                            <Button type='submit'>Add Song Artist</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
