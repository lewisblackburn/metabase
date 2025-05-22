import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import { resetPasswordSchema } from '@/features/authentication/schemas/reset-password.schema';
import { ResetPasswordFormValues } from '@/features/authentication/schemas/reset-password.schema';
import { nhost } from '@/lib/nhost';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function ResetPassword() {
    const form = useForm<ResetPasswordFormValues>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    });

    async function onSubmit(values: ResetPasswordFormValues) {
        try {
            await nhost.auth.changePassword({
                newPassword: values.newPassword
            });

            toast.success('Password updated successfully');
            form.reset();
        } catch (error) {
            toast.error((error as Error).message);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                <FormField
                    control={form.control}
                    name='currentPassword'
                    render={({ field }) => (
                        <BaseFormLayout label='Current Password'>
                            <InputField type='password' {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
                    name='newPassword'
                    render={({ field }) => (
                        <BaseFormLayout label='New Password'>
                            <InputField type='password' {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={form.control}
                    name='confirmPassword'
                    render={({ field }) => (
                        <BaseFormLayout label='Confirm New Password'>
                            <InputField type='password' {...field} />
                        </BaseFormLayout>
                    )}
                />
                <div className='flex justify-end'>
                    <Button type='submit' disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
                        Update Password
                    </Button>
                </div>
            </form>
        </Form>
    );
}
