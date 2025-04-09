'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from '@/registry/new-york-v4/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';
import { ScrollArea } from '@/registry/new-york-v4/ui/scroll-area';

import { Check, ChevronsUpDown } from 'lucide-react';

export type MultiSelectOption = {
    value: string;
    label: string;
};

interface MultiSelectFieldProps {
    value?: MultiSelectOption[];
    onChange: (value: MultiSelectOption[]) => void;
    options: MultiSelectOption[];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    maxDisplayValues?: number;
    createable?: boolean;
    modal?: boolean;
}

const MultiSelectField = ({
    value = [],
    onChange,
    options,
    placeholder = 'Select options',
    disabled = false,
    className,
    searchPlaceholder = 'Search options...',
    emptyMessage = 'No options found.',
    maxDisplayValues = 2,
    createable = false,
    modal = false
}: MultiSelectFieldProps) => {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const [localOptions, setLocalOptions] = React.useState<MultiSelectOption[]>(options);

    React.useEffect(() => {
        setLocalOptions((prev) => {
            const merged = [...prev];
            options.forEach((opt) => {
                if (!merged.some((p) => p.value === opt.value)) {
                    merged.push(opt);
                }
            });

            return merged;
        });
    }, [options]);

    const filteredOptions = React.useMemo(() => {
        return localOptions.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));
    }, [localOptions, inputValue]);

    const selectedOptions = React.useMemo(() => {
        return filteredOptions.filter((option) => value.some((v) => v.value === option.value));
    }, [filteredOptions, value]);

    const unselectedOptions = React.useMemo(() => {
        return filteredOptions.filter((option) => !value.some((v) => v.value === option.value));
    }, [filteredOptions, value]);

    const handleSelect = (option: MultiSelectOption) => {
        const isSelected = value.some((v) => v.value === option.value);
        const newValue = isSelected ? value.filter((val) => val.value !== option.value) : [...value, option];
        onChange(newValue);
    };

    const handleCreateOption = (inputVal: string) => {
        const newOption = { value: inputVal, label: inputVal };
        setLocalOptions((prev) => [...prev, newOption]);
        onChange([...value, newOption]);
    };

    const selectedLabels = value
        .map((val) => {
            const option = localOptions.find((opt) => opt.value === val.value);

            return option?.label || val.label;
        })
        .filter(Boolean) as string[];

    const displaySelectedValues = () => {
        if (selectedLabels.length === 0) {
            return placeholder;
        }
        if (selectedLabels.length <= maxDisplayValues) {
            return selectedLabels.join(', ');
        }

        return `${selectedLabels.slice(0, maxDisplayValues).join(', ')} +${
            selectedLabels.length - maxDisplayValues
        } more`;
    };

    const showCreateOption =
        createable &&
        inputValue.trim() !== '' &&
        !localOptions.some((opt) => opt.value.toLowerCase() === inputValue.trim().toLowerCase());

    return (
        <Popover open={open} onOpenChange={setOpen} modal={modal}>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={open}
                    className={cn(
                        'w-full justify-between',
                        {
                            'text-muted-foreground': value.length === 0
                        },
                        className
                    )}
                    disabled={disabled}
                    onClick={() => !disabled && setOpen(!open)}>
                    <span className='truncate'>{displaySelectedValues()}</span>
                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='popover-content-width-full p-0'>
                <Command>
                    <CommandInput placeholder={searchPlaceholder} value={inputValue} onValueChange={setInputValue} />
                    <CommandGroup>
                        {selectedOptions.length > 0 && (
                            <>
                                {selectedOptions.map((option) => (
                                    <CommandItem
                                        key={option.value}
                                        value={option.value}
                                        onSelect={() => handleSelect(option)}>
                                        <div className='flex items-center gap-2'>
                                            <Checkbox checked className='pointer-events-none' />
                                            {option.label}
                                        </div>
                                        <Check className='ml-auto h-4 w-4 opacity-100' />
                                    </CommandItem>
                                ))}
                            </>
                        )}

                        <ScrollArea className='max-h-60 overflow-y-auto'>
                            <CommandList>
                                {showCreateOption && (
                                    <CommandItem
                                        value={inputValue}
                                        className='cursor-pointer'
                                        onSelect={() => {
                                            handleCreateOption(inputValue);
                                            setInputValue('');
                                        }}>
                                        Create "{inputValue}"
                                    </CommandItem>
                                )}
                                {unselectedOptions.map((option) => (
                                    <CommandItem
                                        key={option.value}
                                        value={option.value}
                                        onSelect={() => handleSelect(option)}>
                                        <div className='flex items-center gap-2'>
                                            <Checkbox checked={false} className='pointer-events-none' />
                                            {option.label}
                                        </div>
                                        <Check className='ml-auto h-4 w-4 opacity-0' />
                                    </CommandItem>
                                ))}
                            </CommandList>
                        </ScrollArea>
                        {filteredOptions.length === 0 && !showCreateOption && (
                            <CommandEmpty>{emptyMessage}</CommandEmpty>
                        )}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

MultiSelectField.displayName = 'MultiSelectField';

export default MultiSelectField;
