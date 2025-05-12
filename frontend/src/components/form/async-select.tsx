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

import { Check, ChevronsUpDown, Loader2, Plus } from 'lucide-react';
import { FieldPath, FieldValues, useController, useFormContext } from 'react-hook-form';

export type AsyncSelectValue = {
    value: string;
    label: string;
    __isNew__?: true;
};

export type AsyncSelectOption = {
    value: string;
    label: string;
};

export type AsyncSelectProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    name: TName;
    options: AsyncSelectOption[];
    isLoading?: boolean;
    error?: string | null;
    placeholder?: string;
    emptyMessage?: string;
    onSearch?: (query: string) => void;
    createable?: boolean;
    disabled?: boolean;
    className?: string;
    modal?: boolean;
};

export function AsyncSelect<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    name,
    options,
    isLoading = false,
    error = null,
    placeholder = 'Select an option',
    emptyMessage = 'No results found',
    onSearch,
    createable = false,
    disabled = false,
    className,
    modal = false
}: AsyncSelectProps<TFieldValues, TName>) {
    const methods = useFormContext();
    const { control } = methods || {};

    const { field } = useController({
        name,
        control: control
    });

    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');

    const displayLabel = field.value?.label || placeholder;

    const handleSearchChange = (value: string) => {
        setInputValue(value);
        onSearch?.(value);
    };

    const handleCreate = async () => {
        if (!inputValue.trim() || !createable) return;

        field.onChange({ value: inputValue, label: inputValue, __isNew__: true });
        setInputValue('');
        setOpen(false);
    };

    if (isLoading && !open) {
        return (
            <Button variant='outline' className={cn('w-full justify-between', className)} disabled>
                {displayLabel}
                <Loader2 className='ml-2 h-4 w-4 shrink-0 animate-spin opacity-50' />
            </Button>
        );
    }

    if (error && !open) {
        return (
            <Button variant='outline' className={cn('text-destructive w-full justify-between', className)} disabled>
                {error}
            </Button>
        );
    }

    // NOTE: "effectiveOptions" meaning the options that are actually displayed in the dropdown.
    const effectiveOptions = React.useMemo(() => {
        if (field.value?.__isNew__ && !options.some((o) => o.value === field.value.value)) {
            return [...options, { value: field.value.value, label: field.value.label }];
        }
        return options;
    }, [field.value, options]);

    return (
        <Popover open={open} onOpenChange={setOpen} modal={modal}>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={open}
                    className={cn('w-full justify-between', !field.value && 'text-muted-foreground', className)}
                    disabled={disabled}>
                    {displayLabel}
                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='popover-content-width-full p-0' align='start'>
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
                                <CommandEmpty className='px-1 pt-2'>
                                    {inputValue.trim() && createable ? (
                                        <Button variant='ghost' onClick={handleCreate} className='w-full justify-start'>
                                            <Plus className='h-4 w-4' />"{inputValue}"
                                        </Button>
                                    ) : (
                                        <div className='flex items-center justify-center py-6'>
                                            <span className='text-muted-foreground text-sm'>{emptyMessage}</span>
                                        </div>
                                    )}
                                </CommandEmpty>
                                <CommandGroup>
                                    {effectiveOptions.map((option) => (
                                        <CommandItem
                                            key={option.value}
                                            value={option.label}
                                            onSelect={() => {
                                                field.onChange({ value: option.value, label: option.label });
                                                setInputValue('');
                                                setOpen(false);
                                            }}>
                                            {option.value === field.value?.value && (
                                                <Check
                                                    className={cn(
                                                        'size-4',
                                                        option.value === field.value?.value
                                                            ? 'opacity-100'
                                                            : 'opacity-0'
                                                    )}
                                                />
                                            )}
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
