'use client';

import { useState } from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import PersonSelect from '@/components/form/person-select';
import { Object_Types_Enum, useInsertCreditsMutation } from '@/generated/graphql';
import { Credit_Types_Enum } from '@/generated/graphql';
import { Avatar, AvatarImage } from '@/registry/new-york-v4/ui/avatar';
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
import MultipleSelector from '@/registry/new-york-v4/ui/multiselect';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';

import { AddCastMemberSchemaType, addCastMemberSchema } from '../../schemas/movie-cast-member.schema';
import { Plus, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface AddCastMemberDialogProps {
    movieId: string;
}

export default function AddCastMemberDialog({ movieId }: AddCastMemberDialogProps) {
    const [open, setOpen] = useState(false);
    const [resetKey, setResetKey] = useState(0);
    const queryClient = useQueryClient();
    const { mutateAsync: addCredit } = useInsertCreditsMutation({
        onSuccess: () => {
            toast.success('Cast member added successfully');
            queryClient.invalidateQueries({ queryKey: ['movie-cast', movieId] });
            form.reset();
            setResetKey((prev) => prev + 1);
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const form = useForm<AddCastMemberSchemaType>({
        resolver: zodResolver(addCastMemberSchema),
        defaultValues: {
            person: '',
            character: ''
        }
    });

    const onSubmit = async (data: AddCastMemberSchemaType) => {
        await addCredit({
            objects: [
                {
                    object_id: movieId,
                    credit_type: Credit_Types_Enum.Cast,
                    object_type: Object_Types_Enum.Movie,
                    person_id: data.person,
                    details: {
                        character: data.character
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
                    <DialogTitle>Add Cast Member</DialogTitle>
                </DialogHeader>
                <DialogDescription>Add a new cast member to the movie.</DialogDescription>
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
                            name='character'
                            render={({ field }) => (
                                <BaseFormLayout label='Character'>
                                    <InputField {...field} />
                                </BaseFormLayout>
                            )}
                        />

                        <div className='flex justify-end gap-2'>
                            <Button variant='outline' type='button' className='mr-2' onClick={() => setOpen(false)}>
                                <X className='size-4' />
                                Cancel
                            </Button>
                            <Button type='submit'>Add Cast Member</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
