'use client';

import { useState } from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import PersonSelect from '@/components/form/person-select';
import { AddCrewMemberSchemaType, addCrewMemberSchema } from '@/features/movies/schemas/movie-crew-member.schema';
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

interface AddCrewMemberDialogProps {
    movieId: string;
}

export default function AddCrewMemberDialog({ movieId }: AddCrewMemberDialogProps) {
    const [open, setOpen] = useState(false);
    const [resetKey, setResetKey] = useState(0);
    const queryClient = useQueryClient();
    const { mutateAsync: addCredit } = useInsertCreditsMutation({
        onSuccess: () => {
            toast.success('Crew member added successfully');
            queryClient.invalidateQueries({ queryKey: ['movie-crew', movieId] });
            form.reset();
            setResetKey((prev) => prev + 1);
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const form = useForm<AddCrewMemberSchemaType>({
        resolver: zodResolver(addCrewMemberSchema),
        defaultValues: {
            person: '',
            job: '',
            department: ''
        }
    });

    const onSubmit = async (data: AddCrewMemberSchemaType) => {
        await addCredit({
            objects: [
                {
                    object_id: movieId,
                    credit_type: Credit_Types_Enum.Crew,
                    object_type: Object_Types_Enum.Movie,
                    person_id: data.person,
                    details: {
                        department: data.department,
                        job: data.job
                    }
                }
            ]
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
                    <DialogTitle>Add Crew Member</DialogTitle>
                </DialogHeader>
                <DialogDescription>Add a new crew member to the movie.</DialogDescription>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <FormField
                            control={form.control}
                            name='person'
                            render={({ field }) => (
                                <BaseFormLayout label='Person'>
                                    <PersonSelect
                                        key={resetKey}
                                        onValueChange={(value) => field.onChange(value)}
                                        defaultValue={field.value}
                                    />
                                </BaseFormLayout>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='department'
                            render={({ field }) => (
                                <BaseFormLayout label='Department'>
                                    <InputField {...field} placeholder='e.g. Production, Directing, etc.' />
                                </BaseFormLayout>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='job'
                            render={({ field }) => (
                                <BaseFormLayout label='Job'>
                                    <InputField {...field} placeholder='e.g. Director, Cinematographer, etc.' />
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
