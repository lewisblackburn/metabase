'use client';

import * as React from 'react';

import { useRouter } from 'next/navigation';

import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignUpEmailPassword } from '@nhost/nextjs';

import { RegisterSchemaType, registerSchema } from '../schemas/register.schema';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export function RegisterForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { signUpEmailPassword, isLoading } = useSignUpEmailPassword();
    const router = useRouter();
    const form = useForm<RegisterSchemaType>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const onSubmit = async (data: RegisterSchemaType) => {
        const { error } = await signUpEmailPassword(data.email, data.password);
        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Registration successful! Please check your email for verification.');
            router.push('/authentication/login');
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='p-6 md:p-8'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col items-center text-center'>
                        <h1 className='text-2xl font-bold'>Create an account</h1>
                        <p className='text-muted-foreground text-balance'>Join Metabase and start exploring</p>
                    </div>

                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <BaseFormLayout label='Email'>
                                <InputField type='email' {...field} />
                            </BaseFormLayout>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <BaseFormLayout label='Password'>
                                <InputField type='password' {...field} />
                            </BaseFormLayout>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='confirmPassword'
                        render={({ field }) => (
                            <BaseFormLayout label='Confirm Password'>
                                <InputField type='password' {...field} />
                            </BaseFormLayout>
                        )}
                    />

                    <Button type='submit' className='w-full' disabled={isLoading}>
                        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
                        Create Account
                    </Button>

                    <div className='text-center text-sm'>
                        Already have an account?{' '}
                        <a href='/authentication/login' className='underline underline-offset-4'>
                            Sign in
                        </a>
                    </div>
                </div>
            </form>
        </Form>
    );
}
