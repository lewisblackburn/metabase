'use client';

import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import { useGetPersonQuery, useUpdatePersonMutation } from '@/generated/graphql';
import { queryClient } from '@/lib/query-client';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';

import { EditPersonSchemaType, editPersonSchema } from '../schemas/edit-person.schema';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface EditPersonDetailsProps {
    personId: string;
}

export default function EditPersonDetails({ personId }: EditPersonDetailsProps) {
    const { data } = useGetPersonQuery(
        { id: personId },
        {
            queryKey: ['person', personId]
        }
    );

    const { mutateAsync: updatePerson } = useUpdatePersonMutation();

    const person = data?.people_by_pk;

    if (!person) return null;

    const form = useForm<EditPersonSchemaType>({
        resolver: zodResolver(editPersonSchema),
        defaultValues: {
            name: person.name
        }
    });

    async function onSubmit(values: EditPersonSchemaType) {
        await updatePerson(
            {
                id: personId,
                set: {
                    name: values.name
                }
            },
            {
                onSuccess: () => {
                    toast.success('Person updated successfully');
                    queryClient.invalidateQueries({ queryKey: ['person', personId] });
                },
                onError: (error) => {
                    toast.error((error as Error).message);
                }
            }
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <BaseFormLayout label='Name'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />

                <div className='flex justify-end gap-2'>
                    <Button variant='outline' type='button' onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type='submit'>Save</Button>
                </div>
            </form>
        </Form>
    );
}
