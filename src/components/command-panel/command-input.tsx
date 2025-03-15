import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';

import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';

export default function CommandInput({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) {
    return (
        <div data-slot='command-input-wrapper' className='flex h-9 items-center gap-2 border-b px-3'>
            <Button variant='outline' size='icon' className='h-7 w-7'>
                <SearchIcon />
            </Button>
            <CommandPrimitive.Input
                data-slot='command-input'
                autoFocus
                className={cn(
                    'placeholder:text-muted-foreground/80 flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
                    className
                )}
                {...props}
            />
        </div>
    );
}
