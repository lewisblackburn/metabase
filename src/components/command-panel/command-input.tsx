import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/registry/new-york-v4/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/new-york-v4/ui/tooltip';

import { Command as CommandPrimitive } from 'cmdk';
import { ArrowBigUp, Info, Maximize, SearchIcon } from 'lucide-react';

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
            <div className='flex items-center gap-2'>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href='#'>
                            <div className={cn(buttonVariants({ size: 'icon', variant: 'ghost' }), 'h-7 w-7')}>
                                <Info />
                            </div>
                            <span className='sr-only'>Information</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side='top'>Learn more</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href='#'>
                            <div className={cn(buttonVariants({ size: 'icon', variant: 'ghost' }), 'h-7 w-7')}>
                                <Maximize />
                            </div>
                            <span className='sr-only'>Extended Search</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side='top'>
                        <p>Open extended search</p>
                        <p className='flex items-center justify-center'>
                            <span>CTRL</span>
                            <ArrowBigUp className='!size-3.5' />
                            <span>P</span>
                        </p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    );
}
