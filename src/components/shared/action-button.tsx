import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';

import { LucideIcon } from 'lucide-react';

interface ActionButtonProps extends React.ComponentProps<'button'> {
    icon: LucideIcon;
    label: string;
    iconClassName?: string;
}

export default function ActionButton({ icon: Icon, label, iconClassName, ...props }: ActionButtonProps) {
    return (
        <Button variant='outline' size='lg' className='cursor-pointer' {...props}>
            <Icon className={cn('size-4', iconClassName)} />
            {label}
        </Button>
    );
}
