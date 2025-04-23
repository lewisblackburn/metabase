'use client';

import * as React from 'react';

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

import { ArrowDown, ArrowUp, LucideIcon } from 'lucide-react';

export type OrderOption = {
    value: string;
    label: string;
    icon?: LucideIcon;
};

interface OrderSelectFieldProps {
    options: OrderOption[];
    value: { orderBy: string; order: 'asc' | 'desc' };
    onChange: (value: { orderBy: string; order: 'asc' | 'desc' }) => void;
    className?: string;
    modal?: boolean;
}

const OrderSelectField = ({ options, value, onChange, className, modal = false }: OrderSelectFieldProps) => {
    const [open, setOpen] = React.useState(false);

    const current = options.find((opt) => opt.value === value.orderBy) ?? options[0];

    const toggleDirection = () => {
        const newDir = value.order === 'asc' ? 'desc' : 'asc';
        onChange({ orderBy: value.orderBy, order: newDir });
    };

    return (
        <div className={cn('flex items-center space-x-4', className)}>
            <p className='text-muted-foreground text-sm'>Order by</p>
            <Popover open={open} onOpenChange={setOpen} modal={modal}>
                <div className='flex items-center gap-2'>
                    <PopoverTrigger asChild>
                        <Button type='button' variant='outline' className='w-[150px] justify-start'>
                            {current?.icon && <current.icon className='mr-2 h-4 w-4 shrink-0' />}
                            {current?.label}
                        </Button>
                    </PopoverTrigger>
                    <Button type='button' variant='outline' size='icon' onClick={toggleDirection}>
                        {value.order === 'asc' ? <ArrowUp className='h-4 w-4' /> : <ArrowDown className='h-4 w-4' />}
                    </Button>
                </div>
                <PopoverContent className='p-0' side='bottom' align='start'>
                    <Command>
                        <CommandInput placeholder='Change order by...' />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {options.map((opt) => (
                                    <CommandItem
                                        key={opt.value}
                                        value={opt.value}
                                        onSelect={() => {
                                            onChange({ orderBy: opt.value, order: value.order });
                                            setOpen(false);
                                        }}>
                                        {opt.icon && (
                                            <opt.icon
                                                className={cn(
                                                    'mr-2 h-4 w-4',
                                                    opt.value === value.orderBy ? 'opacity-100' : 'opacity-40'
                                                )}
                                            />
                                        )}
                                        <span>{opt.label}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
};

OrderSelectField.displayName = 'OrderSelectField';

export default OrderSelectField;
