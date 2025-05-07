import { LucideIconOrFC } from '@/constants/icons.constant';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { ButtonProps } from '@/types/button.types';

interface ActionButtonProps extends ButtonProps {
    icon: LucideIconOrFC;
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
