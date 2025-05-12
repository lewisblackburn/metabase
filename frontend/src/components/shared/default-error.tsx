'use client';

import { Alert, AlertDescription, AlertTitle } from '@/registry/new-york-v4/ui/alert';
import { Button } from '@/registry/new-york-v4/ui/button';

interface DefaultErrorProps {
    error: Error;
    resetErrorBoundary?: () => void;
}

export default function DefaultError({ error, resetErrorBoundary }: DefaultErrorProps) {
    return (
        <div className='flex flex-col items-center justify-center p-6'>
            <Alert variant='destructive' className='w-full max-w-md'>
                <AlertTitle>Something went wrong</AlertTitle>
                <AlertDescription>
                    {error.message || 'An unexpected error occurred. Please try again.'}
                </AlertDescription>
            </Alert>
            {resetErrorBoundary && (
                <div className='mt-4'>
                    <Button onClick={resetErrorBoundary} variant='outline'>
                        Try again
                    </Button>
                </div>
            )}
        </div>
    );
}
