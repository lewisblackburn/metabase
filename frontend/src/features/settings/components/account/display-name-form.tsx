import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
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

const displayNameSchema = z.object({
    displayName: z.string().min(1, 'Display name is required').max(50, 'Display name must be less than 50 characters')
});

type DisplayNameFormValues = z.infer<typeof displayNameSchema>;

export default function DisplayNameForm() {
    const user = useUserData();
    const queryClient = useQueryClient();

    const { mutateAsync: updateUser } = useUpdateUserMutation();

    const form = useForm<DisplayNameFormValues>({
        resolver: zodResolver(displayNameSchema),
        defaultValues: {
            displayName: user?.displayName || ''
        }
    });

    async function onSubmit(values: DisplayNameFormValues) {
        if (!user?.id) return;

        await updateUser(
            {
                id: user.id,
                set: {
                    displayName: values.displayName
                }
            },
            {
                onSuccess: () => {
                    toast.success('Display name updated successfully');
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
        <Form {...form}>
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
                {/* <div className='flex justify-end'>
                    <Button type='submit' disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
                        Save Changes
                    </Button>
                </div> */}
            </form>
        </Form>
    );
}
