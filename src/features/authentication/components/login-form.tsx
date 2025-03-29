'use client';

import * as React from 'react';

import { InputFormField } from '@/components/form/input';
import AppleIcon from '@/components/icons/apple.icon';
import GoogleIcon from '@/components/icons/google.icon';
import MetaIcon from '@/components/icons/meta.icon';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent } from '@/registry/new-york-v4/ui/card';
import { Form } from '@/registry/new-york-v4/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';

import { loginSchema } from '../schemas/login.schema';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
    const form = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data: LoginValues) => {
        console.log('Login submitted:', data);
    };

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card className='overflow-hidden p-0'>
                <CardContent className='grid p-0 md:grid-cols-2'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='p-6 md:p-8'>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col items-center text-center'>
                                    <h1 className='text-2xl font-bold'>Welcome back</h1>
                                    <p className='text-muted-foreground text-balance'>Login to your Metabase account</p>
                                </div>

                                <InputFormField
                                    control={form.control}
                                    name='email'
                                    label='Email'
                                    placeholder='m@example.com'
                                    type='email'
                                />

                                <InputFormField
                                    control={form.control}
                                    name='password'
                                    label='Password'
                                    placeholder='••••••••'
                                    type='password'
                                />

                                <div className='flex justify-end'>
                                    <a href='#' className='text-sm underline-offset-2 hover:underline'>
                                        Forgot your password?
                                    </a>
                                </div>

                                <Button type='submit' className='w-full'>
                                    Login
                                </Button>

                                <div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
                                    <span className='bg-background text-muted-foreground relative z-10 px-2'>
                                        Or continue with
                                    </span>
                                </div>

                                <div className='grid grid-cols-3 gap-4'>
                                    <Button variant='outline' className='w-full' type='button'>
                                        <AppleIcon />
                                        <span className='sr-only'>Login with Apple</span>
                                    </Button>
                                    <Button variant='outline' className='w-full' type='button'>
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

                    <div className='bg-muted relative hidden md:block'>
                        <img
                            src='/images/login-form-photo.jpg'
                            alt='Image'
                            className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
                        />
                    </div>
                </CardContent>
            </Card>

            <div className='text-muted-foreground hover:[&_a]:text-primary text-center text-xs text-balance [&_a]:underline [&_a]:underline-offset-4'>
                By clicking continue, you agree to our <a href='#'>Terms of Service</a> and{' '}
                <a href='#'>Privacy Policy</a>.
            </div>
        </div>
    );
}
