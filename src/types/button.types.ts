import { buttonVariants } from '@/registry/new-york-v4/ui/button';

import { VariantProps } from 'class-variance-authority';

export type ButtonProps = React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    };
