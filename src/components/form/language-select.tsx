'use client';

import * as React from 'react';

import { LANGUAGES } from '@/constants/languages.constant';
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
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/registry/new-york-v4/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';

import BaseFormLayout from './base-form-layout';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

// The base LanguageSelect component
interface LanguageSelectProps {
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
}

const LanguageSelect = React.forwardRef<HTMLButtonElement, LanguageSelectProps>(
    ({ value, onChange, onBlur, disabled, placeholder = 'Select a language...', className }, ref) => {
        const [open, setOpen] = React.useState(false);

        const handleValueChange = (newValue: string) => {
            onChange?.(newValue);
            setOpen(false);
        };

        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        ref={ref}
                        variant='outline'
                        role='combobox'
                        aria-expanded={open}
                        className={cn('w-full justify-between', className)}
                        disabled={disabled}
                        onBlur={onBlur}
                        onClick={() => !disabled && setOpen(!open)}>
                        {value ? LANGUAGES.find((language) => language.code === value)?.label : placeholder}
                        <ChevronsUpDown className='ml-2 h-4 w-4 opacity-50' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='popover-content-width-full p-0'>
                    <Command
                        filter={(value, search) => {
                            const language = LANGUAGES.find((lang) => lang.code === value);
                            if (!language) return 0;
                            const nativeMatch = language.label.toLowerCase().includes(search.toLowerCase());
                            const englishMatch = language.englishLabel.toLowerCase().includes(search.toLowerCase());

                            return nativeMatch || englishMatch ? 1 : 0;
                        }}>
                        <CommandInput placeholder='Search languages...' />
                        <CommandList>
                            <CommandEmpty>No language found.</CommandEmpty>
                            <CommandGroup>
                                {LANGUAGES.map((language) => (
                                    <CommandItem
                                        key={language.code}
                                        value={language.code}
                                        onSelect={() => handleValueChange(language.code)}>
                                        <span className='flex flex-col'>
                                            <span>{language.label}</span>
                                            <span className='text-muted-foreground text-xs'>
                                                {language.englishLabel}
                                            </span>
                                        </span>
                                        <Check
                                            className={cn(
                                                'ml-auto',
                                                value === language.code ? 'opacity-100' : 'opacity-0'
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        );
    }
);
LanguageSelect.displayName = 'LanguageSelect';

interface LanguageFormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    control: Control<TFieldValues>;
    name: TName;
    label?: string;
    placeholder?: string;
    description?: React.ReactNode;
    className?: string;
}

function LanguageFormField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ control, name, label, placeholder, description, className }: LanguageFormFieldProps<TFieldValues, TName>) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    <BaseFormLayout label={label} description={description}>
                        <LanguageSelect
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            disabled={field.disabled}
                            placeholder={placeholder}
                        />
                    </BaseFormLayout>
                </FormItem>
            )}
        />
    );
}

export { LanguageSelect, LanguageFormField };
