'use client';

import { useState } from 'react';

import BaseFormLayout from '@/components/form/base-form-layout';
import PersonSelect from '@/components/form/person-select';
import { AddBookAuthorSchemaType, addBookAuthorSchema } from '@/features/books/schemas/book-author.schema';
import {
    Department_Types_Enum,
    Job_Types_Enum,
    Object_Types_Enum,
    useInsertCreditsMutation
} from '@/generated/graphql';
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

interface AddBookAuthorDialogProps {
    bookId: string;
}

export default function AddBookAuthorDialog({ bookId }: AddBookAuthorDialogProps) {
    const [open, setOpen] = useState(false);
    const queryClient = useQueryClient();

    const { mutateAsync: insertCredits } = useInsertCreditsMutation();

    const form = useForm({
        resolver: zodResolver(addBookAuthorSchema),
        defaultValues: {
            person: ''
        }
    });

    const { handleSubmit, control, reset } = form;

    const onSubmit = async (data: AddBookAuthorSchemaType) => {
        try {
            await insertCredits({
                objects: [
                    {
                        object_id: bookId,
                        person_id: data.person,
                        credit_type: Credit_Types_Enum.Author,
                        object_type: Object_Types_Enum.Book,
                        department: Department_Types_Enum.Writing,
                        job: Job_Types_Enum.Writer
                    }
                ]
            });

            toast.success('Book author added successfully');
            queryClient.invalidateQueries({ queryKey: ['book-authors', bookId] });
            queryClient.invalidateQueries({ queryKey: ['book-credits', bookId] });
            queryClient.invalidateQueries({ queryKey: ['person', data.person] });
            setOpen(false);
            reset();
        } catch (error) {
            toast.error('Failed to add book author');
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='outline' size='sm'>
                    <Plus className='size-4' />
                    Add Book Author
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Book Author</DialogTitle>
                </DialogHeader>
                <DialogDescription>Add an author to the book.</DialogDescription>
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
                            <Button type='submit'>Add Book Author</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
