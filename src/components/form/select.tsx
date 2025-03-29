'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { FormField, FormItem } from '@/registry/new-york-v4/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';

import BaseFormLayout from './base-form-layout';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

export type SelectOption = {
    value: string;
    label: string;
};

interface SelectComponentProps {
    value?: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

const SelectComponent = ({
    value,
    onChange,
    options,
    placeholder = 'Select an option',
    disabled = false,
    className
}: SelectComponentProps) => {
    return (
        <Select value={value} onValueChange={onChange} disabled={disabled}>
            <SelectTrigger className={cn('w-full', className)}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

SelectComponent.displayName = 'SelectComponent';

interface SelectFormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    control: Control<TFieldValues>;
    name: TName;
    label?: string;
    description?: React.ReactNode;
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

const SelectFormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    control,
    name,
    label,
    description,
    options,
    placeholder = 'Select an option',
    disabled = false,
    className
}: SelectFormFieldProps<TFieldValues, TName>) => {
    const defaultValue = options[0]?.value;

    return (
        <FormField
            control={control}
            name={name}
            defaultValue={defaultValue as any}
            render={({ field }) => (
                <FormItem className={className}>
                    <BaseFormLayout label={label} description={description}>
                        <SelectComponent
                            value={field.value}
                            onChange={field.onChange}
                            options={options}
                            placeholder={placeholder}
                            disabled={disabled}
                        />
                    </BaseFormLayout>
                </FormItem>
            )}
        />
    );
};

export { SelectComponent, SelectFormField };
