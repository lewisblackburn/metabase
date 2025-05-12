import { cn } from '@/lib/utils';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/registry/new-york-v4/ui/form';

const BaseFormLayout = ({
    label,
    description,
    children,
    className
}: {
    label?: string;
    description?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}) => (
    <FormItem className={cn('flex flex-col gap-2', className)}>
        {label && <FormLabel className='font-semibold'>{label}</FormLabel>}
        {description && <div className='text-muted-foreground text-xs'>{description}</div>}
        <FormControl>{children}</FormControl>
        <FormMessage />
    </FormItem>
);

export default BaseFormLayout;
