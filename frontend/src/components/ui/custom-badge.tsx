import { ReactNode } from 'react';

import { LucideIconOrFC } from '@/constants/icons.constant';
import { cn } from '@/lib/utils';
import { Badge } from '@/registry/new-york-v4/ui/badge';

export const CustomBadge = ({
    icon: Icon,
    children,
    background,
    foreground,
    border,
    className
}: {
    icon: LucideIconOrFC;
    children: ReactNode;
    background?: string;
    foreground?: string;
    border?: string;
    className?: string;
}) => {
    return (
        <Badge
            variant='outline'
            className={cn(
                'gap-2 py-1 transition-colors delay-0 duration-75',
                background,
                foreground,
                border,
                className
            )}>
            <Icon className='!size-3.5' />
            <span>{children}</span>
        </Badge>
    );
};
