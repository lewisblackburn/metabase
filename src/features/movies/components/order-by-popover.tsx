import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from '@/registry/new-york-v4/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';

import { ArrowDown, ArrowUp, Calendar, Flame, LucideIcon, Star } from 'lucide-react';

type OrderValue = {
    orderBy: string;
    order: 'asc' | 'desc';
};

type OrderBy = {
    value: string;
    label: string;
    icon: LucideIcon;
};

const ORDER_BYS: OrderBy[] = [
    { value: 'popularity', label: 'Popularity', icon: Flame },
    { value: 'release-date', label: 'Release Date', icon: Calendar },
    { value: 'rating', label: 'Rating', icon: Star }
];

interface OrderByPopoverProps {
    value: OrderValue;
    onChange: (value: OrderValue) => void;
    className?: string;
}

export function OrderByPopover({ value, onChange, className }: OrderByPopoverProps) {
    const [open, setOpen] = useState(false);

    const current = ORDER_BYS.find((o) => o.value === value.orderBy) ?? ORDER_BYS[0];

    const toggleOrder = () => {
        const nextOrder = value.order === 'asc' ? 'desc' : 'asc';
        onChange({ orderBy: current.value, order: nextOrder });
    };

    const selectOrderBy = (orderBy: string) => {
        if (orderBy !== current.value) {
            onChange({ orderBy, order: value.order });
        }
        setOpen(false);
    };

    return (
        <div className={cn('flex items-center space-x-4', className)}>
            <p className='text-muted-foreground text-sm'>Order by</p>
            <Popover open={open} onOpenChange={setOpen}>
                <div className='flex items-center gap-2'>
                    <PopoverTrigger asChild>
                        <Button type='button' variant='outline' className='w-[150px] justify-start'>
                            <current.icon className='mr-2 h-4 w-4 shrink-0' />
                            {current.label}
                        </Button>
                    </PopoverTrigger>
                    <Button type='button' variant='outline' size='icon' onClick={toggleOrder}>
                        {value.order === 'asc' ? <ArrowUp /> : <ArrowDown />}
                    </Button>
                </div>
                <PopoverContent className='p-0' side='right' align='start'>
                    <Command>
                        <CommandInput placeholder='Change order by...' />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {ORDER_BYS.map((orderBy) => (
                                    <CommandItem key={orderBy.value} value={orderBy.value} onSelect={selectOrderBy}>
                                        <orderBy.icon
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                orderBy.value === current.value ? 'opacity-100' : 'opacity-40'
                                            )}
                                        />
                                        <span>{orderBy.label}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
