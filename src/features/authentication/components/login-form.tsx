'use client';

import * as React from 'react';

import { useRouter } from 'next/navigation';

import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import AppleIcon from '@/components/icons/apple.icon';
import GoogleIcon from '@/components/icons/google.icon';
import MetaIcon from '@/components/icons/meta.icon';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent } from '@/registry/new-york-v4/ui/card';
import { Form, FormField, FormItem } from '@/registry/new-york-v4/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignInEmailPassword } from '@nhost/nextjs';

import { loginSchema } from '../schemas/login.schema';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
    const { isSuccess, isLoading, isError, error, signInEmailPassword } = useSignInEmailPassword();
    const router = useRouter();
    const form = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = async (data: LoginValues) => {
        await signInEmailPassword(data.email, data.password);
    };

    React.useEffect(() => {
        if (isError) toast.error(error?.message);
    }, [isError, error]);

    React.useEffect(() => {
        if (isSuccess) router.push('/dashboard');
    }, [isSuccess, router]);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='p-6 md:p-8'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col items-center text-center'>
                        <h1 className='text-2xl font-bold'>Welcome back</h1>
                        <p className='text-muted-foreground text-balance'>Login to your Metabase account</p>
                    </div>

                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <BaseFormLayout label='Email'>
                                    <InputField {...field} />
                                </BaseFormLayout>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <BaseFormLayout label='Password'>
                                    <InputField type='password' {...field} />
                                </BaseFormLayout>
                            </FormItem>
                        )}
                    />

                    <div className='flex justify-end'>
                        <a href='#' className='text-sm underline-offset-2 hover:underline'>
                            Forgot your password?
                        </a>
                    </div>

                    <Button type='submit' className='w-full' disabled={isLoading}>
                        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
                        Login
                    </Button>

                    <div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
                        <span className='bg-background text-muted-foreground relative z-10 px-2'>Or continue with</span>
                    </div>

                    <div className='grid grid-cols-3 gap-4'>
                        <Button variant='outline' className='w-full' type='button'>
                            <AppleIcon />
                            <span className='sr-only'>Login with Apple</span>
                        </Button>
                        <Button variant='outline' className='w-full cursor-pointer' type='button'>
                            <GoogleIcon />
                            <span className='sr-only'>Login with Google</span>
                        </Button>
                        <Button variant='outline' className='w-full' type='button'>
                            <MetaIcon />
                        </Button>
                    </div>

                    <div className='text-center text-sm'>
                        Don’t have an account?{' '}
                        <a href='#' className='underline underline-offset-4'>
                            Sign up
                        </a>
                    </div>
                </div>
            </form>
        </Form>
    );
}
