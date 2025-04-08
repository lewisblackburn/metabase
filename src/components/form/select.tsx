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

import { Check, ChevronsUpDown, Loader, LucideIcon } from 'lucide-react';

export interface SelectOption {
    value: string;
    label: string;
    secondaryLabel?: string;
    prefixIcon?: string | LucideIcon;
}

interface SelectFieldProps {
    options: SelectOption[];
    value?: string | null | undefined;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
    modal?: boolean;
    loading?: boolean;
}

const SelectField = React.forwardRef<HTMLButtonElement, SelectFieldProps>(
    (
        {
            options,
            value,
            onChange,
            onBlur,
            disabled,
            placeholder = 'Select an option...',
            className,
            modal = false,
            loading = false
        },
        ref
    ) => {
        const [open, setOpen] = React.useState(false);

        const handleValueChange = (newValue: string) => {
            onChange?.(newValue);
            setOpen(false);
        };

        const selectedOption = options.find((option) => option.value === value);

        return (
            <Popover open={open} onOpenChange={setOpen} modal={modal}>
                <PopoverTrigger asChild>
                    <Button
                        ref={ref}
                        variant='outline'
                        role='combobox'
                        aria-expanded={open}
                        className={cn(
                            'flex w-full items-center justify-start',
                            { 'text-muted-foreground': !value },
                            className
                        )}
                        disabled={disabled || loading}
                        onBlur={onBlur}
                        onClick={() => {
                            if (!disabled && !loading) {
                                setOpen(!open);
                            }
                        }}>
                        {loading ? (
                            <>
                                <Loader className='size-4 animate-spin' />
                                <span>Loading...</span>
                            </>
                        ) : (
                            <>
                                {selectedOption && selectedOption.prefixIcon && (
                                    <span className='mr-2 flex items-center'>
                                        {typeof selectedOption.prefixIcon === 'string' ? (
                                            selectedOption.prefixIcon
                                        ) : (
                                            <selectedOption.prefixIcon className='size-4' />
                                        )}
                                    </span>
                                )}
                                <span className='flex-1 text-start'>
                                    {selectedOption ? selectedOption.label : placeholder}
                                </span>
                                <ChevronsUpDown className='ml-2 size-4 opacity-50' />
                            </>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='popover-content-width-full p-0'>
                    {loading ? (
                        <div className='flex items-center justify-center p-4'>
                            <Loader className='mr-2 animate-spin' size={16} />
                            <span>Loading options...</span>
                        </div>
                    ) : (
                        <Command
                            filter={(optionValue, searchQuery) => {
                                const option = options.find((opt) => opt.value === optionValue);
                                if (!option) return 0;

                                const lowerSearch = searchQuery.toLowerCase();
                                const labelMatch = option.label.toLowerCase().includes(lowerSearch);
                                const secondaryMatch = option.secondaryLabel
                                    ? option.secondaryLabel.toLowerCase().includes(lowerSearch)
                                    : false;

                                return labelMatch || secondaryMatch ? 1 : 0;
                            }}>
                            <CommandInput placeholder='Search options...' />
                            <CommandList>
                                <CommandEmpty>No options found.</CommandEmpty>
                                <CommandGroup>
                                    {options.map((option) => (
                                        <CommandItem
                                            key={option.value}
                                            value={option.value}
                                            onSelect={() => handleValueChange(option.value)}>
                                            <div className='flex items-center'>
                                                {option.prefixIcon && (
                                                    <span className='mr-2'>
                                                        {typeof option.prefixIcon === 'string' ? (
                                                            option.prefixIcon
                                                        ) : (
                                                            <option.prefixIcon className='size-4' />
                                                        )}
                                                    </span>
                                                )}
                                                <span className='flex flex-col'>
                                                    <span>{option.label}</span>
                                                    {option.secondaryLabel && (
                                                        <span className='text-muted-foreground text-xs'>
                                                            {option.secondaryLabel}
                                                        </span>
                                                    )}
                                                </span>
                                            </div>
                                            <Check
                                                className={cn(
                                                    'ml-auto',
                                                    value === option.value ? 'opacity-100' : 'opacity-0'
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    )}
                </PopoverContent>
            </Popover>
        );
    }
);

SelectField.displayName = 'SelectField';

export default SelectField;
