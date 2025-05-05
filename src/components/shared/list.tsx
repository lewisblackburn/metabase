import { cn } from '@/lib/utils';

type ListProps = {
    children: React.ReactNode;
    className?: string;
};

export default function List({ children, className }: ListProps) {
    return <div className={cn('flex flex-col gap-4', className)}>{children}</div>;
}
