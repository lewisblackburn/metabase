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
import { FormField, FormItem } from '@/registry/new-york-v4/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';

import BaseFormLayout from './base-form-layout';
import { ArrowDown, ArrowUp, LucideIcon } from 'lucide-react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

export type OrderOption = {
    value: string;
    label: string;
    icon?: LucideIcon;
};

interface OrderSelectProps {
    options: OrderOption[];
    value: { orderBy: string; order: 'asc' | 'desc' };
    onChange: (value: { orderBy: string; order: 'asc' | 'desc' }) => void;
    className?: string;
}

const OrderSelect = ({ options, value, onChange, className }: OrderSelectProps) => {
    const [open, setOpen] = React.useState(false);

    const current = options.find((opt) => opt.value === value.orderBy) ?? options[0];

    const toggleDirection = () => {
        const newDir = value.order === 'asc' ? 'desc' : 'asc';
        onChange({ orderBy: value.orderBy, order: newDir });
    };

    return (
        <div className={cn('flex items-center space-x-4', className)}>
            <p className='text-muted-foreground text-sm'>Order by</p>
            <Popover open={open} onOpenChange={setOpen}>
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
                <PopoverContent className='p-0' side='right' align='start'>
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

OrderSelect.displayName = 'OrderSelect';

interface OrderSelectFormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    control: Control<TFieldValues>;
    name: TName;
    options: OrderOption[];
    className?: string;
    label?: string;
    description?: React.ReactNode;
}

const OrderSelectFormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    control,
    name,
    options,
    className,
    description
}: OrderSelectFormFieldProps<TFieldValues, TName>) => {
    const defaultOption = options[0];

    return (
        <FormField
            control={control}
            name={name}
            defaultValue={{ orderBy: defaultOption.value, order: 'desc' } as any}
            render={({ field }) => (
                <FormItem className={className}>
                    <BaseFormLayout description={description}>
                        <OrderSelect
                            options={options}
                            value={field.value ?? { orderBy: defaultOption.value, order: 'desc' }}
                            onChange={field.onChange}
                        />
                    </BaseFormLayout>
                </FormItem>
            )}
        />
    );
};

export { OrderSelect, OrderSelectFormField };
