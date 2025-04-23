import { cn } from '@/lib/utils';

type ContainerProps = {
    children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
    return <div className='mx-auto w-full max-w-screen-xl p-5'>{children}</div>;
}
