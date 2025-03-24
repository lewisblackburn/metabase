import React from 'react';

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

type OrderBy = {
    value: string;
    label: string;
    icon: LucideIcon;
};

const orderBys: OrderBy[] = [
    {
        value: 'popularity',
        label: 'Popularity',
        icon: Flame
    },
    {
        value: 'release-date',
        label: 'Release Date',
        icon: Calendar
    },
    {
        value: 'rating',
        label: 'Rating',
        icon: Star
    }
];

export function OrderByPopover() {
    const [open, setOpen] = React.useState(false);
    const [selectedOrderBy, setSelectedOrderBy] = React.useState<OrderBy | null>(orderBys[0]);
    const [selectedOrder, setSelectedOrder] = React.useState('asc');

    const handleOrderChange = () => setSelectedOrder(selectedOrder === 'asc' ? 'desc' : 'asc');

    return (
        <div className='flex items-center space-x-4'>
            <p className='text-muted-foreground text-sm'>Order by</p>
            <Popover open={open} onOpenChange={setOpen}>
                <div className='flex items-center gap-2'>
                    <PopoverTrigger asChild>
                        <Button variant='outline' className='w-[150px] justify-start'>
                            {selectedOrderBy ? (
                                <>
                                    <selectedOrderBy.icon className='mr-2 h-4 w-4 shrink-0' />
                                    {selectedOrderBy.label}
                                </>
                            ) : (
                                <>+ Set Order</>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <Button variant='outline' size='icon' onClick={handleOrderChange}>
                        {selectedOrder === 'asc' ? <ArrowUp /> : <ArrowDown />}
                    </Button>
                </div>
                <PopoverContent className='p-0' side='right' align='start'>
                    <Command>
                        <CommandInput placeholder='Change order by...' />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {orderBys.map((orderBy) => (
                                    <CommandItem
                                        key={orderBy.value}
                                        value={orderBy.value}
                                        onSelect={(value) => {
                                            setSelectedOrderBy(
                                                orderBys.find((priority) => priority.value === value) || null
                                            );
                                            setOpen(false);
                                        }}>
                                        <orderBy.icon
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                orderBy.value === selectedOrderBy?.value ? 'opacity-100' : 'opacity-40'
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
