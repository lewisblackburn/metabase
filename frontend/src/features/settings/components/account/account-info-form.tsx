import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import TextareaField from '@/components/form/textarea';
import { useUpdateUserMutation } from '@/generated/graphql';
import { nhost } from '@/lib/nhost';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Label } from '@/registry/new-york-v4/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserData, useUserId } from '@nhost/nextjs';
import { useQueryClient } from '@tanstack/react-query';

import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const accountInfoSchema = z.object({
    displayName: z.string().min(1, 'Display name is required').max(50, 'Display name must be less than 50 characters'),
    metadata: z.object({
        bio: z.string().max(200, 'Bio must be less than 200 characters')
    })
});

type AccountInfoFormValues = z.infer<typeof accountInfoSchema>;

export default function AccountInfoForm() {
    const user = useUserData();
    const queryClient = useQueryClient();

    const { mutateAsync: updateUser } = useUpdateUserMutation();

    const form = useForm({
        resolver: zodResolver(accountInfoSchema),
        defaultValues: {
            displayName: user?.displayName || '',
            metadata: {
                bio: user?.metadata?.bio || ''
            }
        } as AccountInfoFormValues
    });

    async function onSubmit(values: AccountInfoFormValues) {
        if (!user?.id) return;

        await updateUser(
            {
                id: user.id,
                set: {
                    displayName: values.displayName,
                    metadata: values.metadata
                }
            },
            {
                onSuccess: () => {
                    toast.success('Account info updated successfully');
                    nhost.auth.refreshSession();
                    queryClient.invalidateQueries({ queryKey: ['user', user.id] });
                },
                onError: (error) => {
                    toast.error((error as Error).message);
                }
            }
        );
    }

    return (
        <Form<AccountInfoFormValues> {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                <FormField
                    control={form.control}
                    name='displayName'
                    render={({ field }) => (
                        <BaseFormLayout label='Display Name'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
                    name='metadata.bio'
                    render={({ field }) => (
                        <BaseFormLayout label='Bio'>
                            <TextareaField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <div className='flex justify-end'>
                    <Button type='submit' disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
                        Save Changes
                    </Button>
                </div>
            </form>
        </Form>
    );
}
