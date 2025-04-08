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

import { Check, ChevronsUpDown, Loader2, PlusCircle } from 'lucide-react';
import type { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';

export type AsyncSelectOption = {
    value: string;
    label: string;
};

type AsyncSelectProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    field: ControllerRenderProps<TFieldValues, TName>;
    options: AsyncSelectOption[];
    isLoading?: boolean;
    error?: string | null;
    placeholder?: string;
    emptyMessage?: string;
    createMessage?: string;
    onSearch?: (query: string) => void;
    onCreate?: (value: string) => void | Promise<void>;
    disabled?: boolean;
    className?: string;
    modal?: boolean;
};

export function AsyncSelect<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    field,
    options,
    isLoading = false,
    error = null,
    placeholder = 'Select an option',
    emptyMessage = 'No results found',
    createMessage = 'Create',
    onSearch,
    onCreate,
    disabled = false,
    className,
    modal = false
}: AsyncSelectProps<TFieldValues, TName>) {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');

    // Find the selected option
    const selectedOption = React.useMemo(() => {
        return options.find((option) => option.value === field.value);
    }, [options, field.value]);

    // Handle search input change
    const handleSearchChange = (value: string) => {
        setInputValue(value);
        onSearch?.(value);
    };

    // Handle creating a new option
    const handleCreate = async () => {
        if (!inputValue.trim() || !onCreate) return;

        await onCreate(inputValue);
        setInputValue('');
    };

    // Render loading state outside of popover
    if (isLoading && !open) {
        return (
            <Button variant='outline' className={cn('w-full justify-between', className)} disabled={true}>
                {selectedOption ? selectedOption.label : placeholder}
                <Loader2 className='ml-2 h-4 w-4 shrink-0 animate-spin opacity-50' />
            </Button>
        );
    }

    // Render error state outside of popover
    if (error && !open) {
        return (
            <Button
                variant='outline'
                className={cn('text-destructive w-full justify-between', className)}
                disabled={true}>
                {error}
            </Button>
        );
    }

    return (
        <Popover open={open} onOpenChange={setOpen} modal={modal}>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={open}
                    className={cn('w-full justify-between', !field.value && 'text-muted-foreground', className)}
                    disabled={disabled}>
                    {selectedOption ? selectedOption.label : placeholder}
                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[--radix-popover-trigger-width] p-0' align='start'>
                <Command shouldFilter={false}>
                    <CommandInput
                        placeholder='Search...'
                        value={inputValue}
                        onValueChange={handleSearchChange}
                        className='border-none focus:ring-0'
                    />
                    <CommandList>
                        {isLoading ? (
                            <div className='flex items-center justify-center py-6'>
                                <Loader2 className='text-muted-foreground mr-2 h-4 w-4 animate-spin' />
                                <span className='text-muted-foreground text-sm'>Loading...</span>
                            </div>
                        ) : (
                            <>
                                <CommandEmpty>
                                    {inputValue.trim() && onCreate ? (
                                        <button
                                            type='button'
                                            className='hover:bg-accent hover:text-accent-foreground flex w-full items-center px-2 py-1.5 text-sm'
                                            onClick={handleCreate}>
                                            <PlusCircle className='mr-2 h-4 w-4' />
                                            {createMessage} "{inputValue}"
                                        </button>
                                    ) : (
                                        emptyMessage
                                    )}
                                </CommandEmpty>
                                <CommandGroup>
                                    {options.map((option) => (
                                        <CommandItem
                                            key={option.value}
                                            value={option.label}
                                            onSelect={() => {
                                                field.onChange(option.value);
                                                setInputValue('');
                                                setOpen(false);
                                            }}>
                                            <Check
                                                className={cn(
                                                    'mr-2 h-4 w-4',
                                                    option.value === field.value ? 'opacity-100' : 'opacity-0'
                                                )}
                                            />
                                            {option.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
