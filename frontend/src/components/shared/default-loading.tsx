import { Loader2 } from 'lucide-react';

interface DefaultLoadingProps {
    customSkeleton?: React.ReactNode;
}

export default function DefaultLoading({ customSkeleton }: DefaultLoadingProps) {
    return (
        <>
            {customSkeleton || (
                <div className='flex h-full min-h-96 w-full items-center justify-center'>
                    <Loader2 className='animate-spin' />
                </div>
            )}
        </>
    );
}
