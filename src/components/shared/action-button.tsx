import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { ButtonProps } from '@/types/button.types';

import { LucideIcon } from 'lucide-react';

interface ActionButtonProps extends ButtonProps {
    icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
    iconClassName?: string;
}

export default function ActionButton({ icon: Icon, children, iconClassName, ...props }: ActionButtonProps) {
    return (
        <Button variant='outline' className='cursor-pointer' {...props}>
            <Icon className={cn('size-4', iconClassName)} />
            {children}
        </Button>
    );
}
