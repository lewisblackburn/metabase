'use client';

import * as React from 'react';

import { useRouter } from 'next/navigation';

import BaseFormLayout from '@/components/form/base-form-layout';
import InputField from '@/components/form/input';
import AppleIcon from '@/components/icons/apple.icon';
import GoogleIcon from '@/components/icons/google.icon';
import MetaIcon from '@/components/icons/meta.icon';
import { nhost } from '@/lib/nhost';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent } from '@/registry/new-york-v4/ui/card';
import { Form, FormField } from '@/registry/new-york-v4/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthenticationStatus, useSignInEmailPassword } from '@nhost/nextjs';

import { LoginSchemaType, loginSchema } from '../schemas/login.schema';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export function LoginForm() {
    const { isLoading, signInEmailPassword } = useSignInEmailPassword();
    const { isAuthenticated } = useAuthenticationStatus();
    const router = useRouter();
    const form = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = async (data: LoginSchemaType) => {
        const { error, needsEmailVerification } = await signInEmailPassword(data.email, data.password);
        if (error) {
            toast.error(error.message);
        } else if (needsEmailVerification) {
            toast.info('Please check your email for verification.');
            router.push('/authentication/login');
        }
    };

    React.useEffect(() => {
        if (isAuthenticated) {
            router.push('/dashboard');
        }
    }, [isAuthenticated, router]);

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
                            <BaseFormLayout label='Email'>
                                <InputField {...field} />
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

                    <div className='flex justify-end'>
                        <a href='#' className='text-sm underline-offset-2 hover:underline'>
                            Forgot your password?
                        </a>
                    </div>

                    <Button type='submit' className='w-full' disabled={isLoading || isAuthenticated}>
                        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
                        {isLoading ? 'Logging in...' : 'Login'}
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
                        Don't have an account?{' '}
                        <a href='/authentication/register' className='underline underline-offset-4'>
                            Sign up
                        </a>
                    </div>
                </div>
            </form>
        </Form>
    );
}
