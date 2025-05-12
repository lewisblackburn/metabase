'use client';

import BaseFormLayout from '@/components/form/base-form-layout';
import DatePickerField from '@/components/form/date-picker';
import InputField from '@/components/form/input';
import TextareaField from '@/components/form/textarea';
import { People_Constraint, useInsertPersonMutation } from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';

import { NewPersonSchemaType, newPersonSchema } from '../schemas/new-person.schema';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export function NewPersonForm() {
    const form = useForm<NewPersonSchemaType>({
        resolver: zodResolver(newPersonSchema),
        defaultValues: {
            name: '',
            gender: undefined,
            birth_date: undefined,
            death_date: undefined,
            bio: undefined
        }
    });
    const { mutateAsync: insertPerson, isPending } = useInsertPersonMutation();

    async function onSubmit(values: NewPersonSchemaType) {
        await insertPerson(
            {
                object: {
                    name: values.name,
                    gender: values.gender,
                    birth_date: values.birth_date,
                    death_date: values.death_date,
                    bio: values.bio
                },
                on_conflict: {
                    constraint: People_Constraint.PeoplePkey,
                    update_columns: []
                }
            },
            {
                onSuccess: () => {
                    toast.success('Person created successfully');
                    form.reset();
                },
                onError: (error) => {
                    toast.error((error as Error).message);
                }
            }
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <BaseFormLayout label='Name'>
                            <InputField placeholder='Enter person name' {...field} />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={form.control}
                    name='bio'
                    render={({ field }) => (
                        <BaseFormLayout label='Bio'>
                            <TextareaField placeholder='Enter person bio' {...field} />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={form.control}
                    name='birth_date'
                    render={({ field }) => (
                        <BaseFormLayout label='Birth Date'>
                            <DatePickerField {...field} />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={form.control}
                    name='death_date'
                    render={({ field }) => (
                        <BaseFormLayout label='Death Date'>
                            <DatePickerField {...field} />
                        </BaseFormLayout>
                    )}
                />

                <div className='flex justify-end'>
                    <Button type='submit' disabled={isPending}>
                        {isPending ? (
                            <>
                                <Loader2 className='h-4 w-4 animate-spin' />
                                Submitting...
                            </>
                        ) : (
                            'Submit'
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
