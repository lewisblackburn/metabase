'use client';

import { useState } from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import PersonSelect from '@/components/form/person-select';
import { AddCrewMemberSchemaType, addCrewMemberSchema } from '@/features/movies/schemas/movie-crew-member.schema';
import { Object_Types_Enum, useInsertCreditsMutation } from '@/generated/graphql';
import { Credit_Types_Enum } from '@/generated/graphql';
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

import { Plus, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface AddCrewMemberDialogProps {
    movieId: string;
}

export default function AddCrewMemberDialog({ movieId }: AddCrewMemberDialogProps) {
    const [open, setOpen] = useState(false);
    const queryClient = useQueryClient();

    const { mutateAsync: insertCredits } = useInsertCreditsMutation();

    const form = useForm({
        resolver: zodResolver(addCrewMemberSchema),
        defaultValues: {
            person: '',
            department: '',
            job: ''
        }
    });

    const { handleSubmit, control, reset } = form;

    const onSubmit = async (data: AddCrewMemberSchemaType) => {
        try {
            await insertCredits({
                objects: [
                    {
                        object_id: movieId,
                        person_id: data.person,
                        details: {
                            department: data.department,
                            job: data.job
                        },
                        credit_type: Credit_Types_Enum.Crew,
                        object_type: Object_Types_Enum.Movie
                    }
                ]
            });

            toast.success('Crew member added successfully');
            queryClient.invalidateQueries({ queryKey: ['movie-crew', movieId] });
            setOpen(false);
            reset();
        } catch (error) {
            toast.error('Failed to add crew member');
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='outline' size='sm'>
                    <Plus className='size-4' />
                    Add Crew Member
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Crew Member</DialogTitle>
                </DialogHeader>
                <DialogDescription>Add a crew member to the movie.</DialogDescription>
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

                        <FormField
                            control={control}
                            name='department'
                            render={({ field }) => (
                                <BaseFormLayout label='Department'>
                                    <InputField {...field} />
                                </BaseFormLayout>
                            )}
                        />

                        <FormField
                            control={control}
                            name='job'
                            render={({ field }) => (
                                <BaseFormLayout label='Job'>
                                    <InputField {...field} />
                                </BaseFormLayout>
                            )}
                        />

                        <div className='flex justify-end gap-2'>
                            <Button variant='outline' type='button' className='mr-2' onClick={() => setOpen(false)}>
                                <X className='size-4' />
                                Cancel
                            </Button>
                            <Button type='submit'>Add Crew Member</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
