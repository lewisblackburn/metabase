import { cn } from '@/lib/utils';

type ContainerProps = {
    children: React.ReactNode;
    size?: 'normal' | 'full';
};

export function Container({ children, size = 'normal' }: ContainerProps) {
    return (
        <div
            className={cn('mx-auto w-full p-5 sm:p-10', {
                'max-w-screen-xl': size === 'normal',
                'max-w-full': size === 'full'
            })}>
            {children}
        </div>
    );
}
