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
        {label && (
            <FormLabel className='mb-2'>
                <h6>{label}</h6>
            </FormLabel>
        )}
        {description && <div className='text-muted-foreground text-sm'>{description}</div>}
        <FormControl>{children}</FormControl>
        <FormMessage />
    </>
);

export default BaseFormLayout;
