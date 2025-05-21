'use client';

import BaseFormLayout from '@/components/form/base-form-layout';
import DatePickerField from '@/components/form/date-picker';
import InputField from '@/components/form/input';
import SelectField from '@/components/form/select';
import TextareaField from '@/components/form/textarea';
import { genderOptions } from '@/constants/misc.constant';
import { Gender_Types_Enum, useGetPersonQuery, useUpdatePersonMutation } from '@/generated/graphql';
import { queryClient } from '@/lib/query-client';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';

import { EditPersonSchemaType, editPersonSchema } from '../../schemas/edit-person.schema';
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
            name: person.name,
            bio: person.bio ?? undefined,
            birth_date: person.birth_date ? new Date(person.birth_date) : undefined,
            death_date: person.death_date ? new Date(person.death_date) : undefined,
            gender: person.gender ?? undefined,
            tmdb_id: person.tmdb_id ?? undefined,
            spotify_id: person.spotify_id ?? undefined
        }
    });

    async function onSubmit(values: EditPersonSchemaType) {
        await updatePerson(
            {
                id: personId,
                set: {
                    name: values.name,
                    bio: values.bio,
                    birth_date: values.birth_date,
                    death_date: values.death_date,
                    gender: values.gender,
                    tmdb_id: values.tmdb_id,
                    spotify_id: values.spotify_id
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

                <FormField
                    control={form.control}
                    name='bio'
                    render={({ field }) => (
                        <BaseFormLayout label='Bio'>
                            <TextareaField {...field} />
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

                <FormField
                    control={form.control}
                    name='gender'
                    render={({ field }) => (
                        <BaseFormLayout label='Gender'>
                            <SelectField options={genderOptions} {...field} />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={form.control}
                    name='tmdb_id'
                    render={({ field }) => (
                        <BaseFormLayout label='TMDB ID'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={form.control}
                    name='spotify_id'
                    render={({ field }) => (
                        <BaseFormLayout label='Spotify ID'>
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
