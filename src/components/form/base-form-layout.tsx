import { FormControl, FormLabel, FormMessage } from '@/registry/new-york-v4/ui/form';

const BaseFormLayout = ({
    label,
    description,
    children
}: {
    label?: string;
    description?: React.ReactNode;
    children: React.ReactNode;
}) => (
    <>
        {label && <FormLabel className='font-semibold'>{label}</FormLabel>}
        {description && <div className='text-muted-foreground text-xs'>{description}</div>}
        <FormControl className='mt-2'>{children}</FormControl>
        <FormMessage />
    </>
);

export default BaseFormLayout;
