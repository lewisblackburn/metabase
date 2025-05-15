'use client';

import { useState } from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import SelectField from '@/components/form/select';
import { COUNTRIES } from '@/constants/countries.constant';
import { Movie_Alternative_Titles_Constraint, useInsertMovieAlternativeTitleMutation } from '@/generated/graphql';
import useHydratedForm from '@/hooks/use-hydrated-form';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/registry/new-york-v4/ui/dialog';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useQueryClient } from '@tanstack/react-query';

import { MovieAlternativeTitleType, movieAlternativeTitleSchema } from '../../schemas/movie-alternative-title.schema';
import { Plus, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface AddAlternativeTitleDialogProps {
    movieId: string;
}

export default function AddAlternativeTitleDialog({ movieId }: AddAlternativeTitleDialogProps) {
    const [open, setOpen] = useState(false);
    const queryClient = useQueryClient();

    const { mutateAsync: insertMovieAlternativeTitle } = useInsertMovieAlternativeTitleMutation();

    const form = useForm({
        resolver: zodResolver(movieAlternativeTitleSchema),
        defaultValues: {
            alternative_title: '',
            country: '',
            type: ''
        }
    });

    const { handleSubmit, control, reset } = form;

    const onSubmit = async (data: MovieAlternativeTitleType) => {
        try {
            await insertMovieAlternativeTitle({
                object: {
                    movie_id: movieId,
                    alternative_title: data.alternative_title,
                    country: data.country,
                    type: data.type
                },
                on_conflict: {
                    constraint: Movie_Alternative_Titles_Constraint.MovieAlternativeTitlesPkey
                }
            });

            toast.success('Alternative title added successfully');
            queryClient.invalidateQueries({ queryKey: ['movie-alternative-titles', movieId] });
            setOpen(false);
            reset();
        } catch (error) {
            toast.error('Failed to add alternative title');
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='outline' size='sm'>
                    <Plus className='size-4' />
                    Add Alternative Title
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Alternative Title</DialogTitle>
                </DialogHeader>
                <DialogDescription>Add an alternative title for the movie.</DialogDescription>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
                        <FormField
                            control={control}
                            name='alternative_title'
                            render={({ field }) => (
                                <BaseFormLayout label='Alternative Title'>
                                    <InputField {...field} />
                                </BaseFormLayout>
                            )}
                        />

                        <FormField
                            control={control}
                            name='country'
                            render={({ field }) => (
                                <BaseFormLayout label='Country'>
                                    <SelectField
                                        options={COUNTRIES.map((country) => ({
                                            value: country.code,
                                            label: country.label,
                                            secondaryLabel: country.englishLabel
                                        }))}
                                        modal
                                        {...field}
                                    />
                                </BaseFormLayout>
                            )}
                        />

                        <FormField
                            control={control}
                            name='type'
                            render={({ field }) => (
                                <BaseFormLayout label='Type'>
                                    <SelectField
                                        options={[
                                            { value: 'original', label: 'Original' },
                                            { value: 'working', label: 'Working' },
                                            { value: 'alternative', label: 'Alternative' }
                                        ]}
                                        modal
                                        {...field}
                                    />
                                </BaseFormLayout>
                            )}
                        />

                        <div className='flex justify-end gap-2'>
                            <Button variant='outline' type='button' className='mr-2' onClick={() => setOpen(false)}>
                                <X className='size-4' />
                                Cancel
                            </Button>
                            <Button type='submit'>Add Title</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
