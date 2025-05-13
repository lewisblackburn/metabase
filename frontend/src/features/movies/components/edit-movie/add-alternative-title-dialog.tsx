'use client';

import { useState } from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import SelectField from '@/components/form/select';
import { COUNTRIES } from '@/constants/countries.constant';
import { Movie_Alternative_Titles_Constraint, useInsertMovieAlternativeTitleMutation } from '@/generated/graphql';
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
    const form = useForm<MovieAlternativeTitleType>({
        resolver: zodResolver(movieAlternativeTitleSchema),
        defaultValues: {
            alternative_title: '',
            country: '',
            type: ''
        }
    });

    const { mutateAsync: insertMovieAlternativeTitle } = useInsertMovieAlternativeTitleMutation({
        onSuccess: () => {
            toast.success('Alternative title added successfully');
            form.reset();
            queryClient.invalidateQueries({ queryKey: ['movie-alternative-titles', movieId] });
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const onSubmit = async (values: MovieAlternativeTitleType) => {
        await insertMovieAlternativeTitle({
            object: {
                alternative_title: values.alternative_title,
                country: values.country,
                type: values.type,
                movie_id: movieId
            },
            on_conflict: {
                constraint: Movie_Alternative_Titles_Constraint.MovieAlternativeTitlesPkey
            }
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='outline' size='sm'>
                    <Plus className='size-4' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Alternative Title</DialogTitle>
                </DialogHeader>
                <DialogDescription>Add a new alternative title to the movie.</DialogDescription>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <FormField
                            control={form.control}
                            name='alternative_title'
                            render={({ field }) => (
                                <BaseFormLayout label='Alternative Title'>
                                    <InputField {...field} />
                                </BaseFormLayout>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='country'
                            render={({ field }) => (
                                <BaseFormLayout label='Country'>
                                    <SelectField
                                        {...field}
                                        options={COUNTRIES.map((country) => ({
                                            value: country.code,
                                            label: country.englishLabel
                                        }))}
                                    />
                                </BaseFormLayout>
                            )}
                        />

                        <div className='flex justify-end gap-2'>
                            <Button variant='outline' type='button' className='mr-2' onClick={() => setOpen(false)}>
                                <X className='size-4' />
                                Cancel
                            </Button>
                            <Button type='submit'>Add Alternative Title</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
