'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/registry/new-york-v4/ui/form';
import { RadioGroup, RadioGroupItem } from '@/registry/new-york-v4/ui/radio-group';

import BaseFormLayout from './base-form-layout';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

interface RadioOption {
    label: string;
    value: string;
}

interface RadioGroupComponentProps {
    value?: string;
    onChange?: (value: string) => void;
    options: RadioOption[];
    disabled?: boolean;
    className?: string;
}

const RadioGroupComponent = ({ value, onChange, options, disabled = false, className }: RadioGroupComponentProps) => {
    return (
        <RadioGroup
            value={value}
            onValueChange={onChange}
            className={cn('flex flex-col space-y-2', className)}
            disabled={disabled}>
            {options.map((option) => (
                <div key={option.value} className='flex items-center space-x-3'>
                    <RadioGroupItem id={option.value} value={option.value} />
                    <FormLabel htmlFor={option.value} className='font-normal'>
                        {option.label}
                    </FormLabel>
                </div>
            ))}
        </RadioGroup>
    );
};

RadioGroupComponent.displayName = 'RadioGroupComponent';

interface RadioGroupFormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    control: Control<TFieldValues>;
    name: TName;
    label?: string;
    description?: React.ReactNode;
    options: RadioOption[];
    className?: string;
    disabled?: boolean;
}

const RadioGroupFormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    control,
    name,
    label,
    description,
    options,
    className,
    disabled = false
}: RadioGroupFormFieldProps<TFieldValues, TName>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn('w-full', className)}>
                    <BaseFormLayout label={label} description={description}>
                        <FormControl>
                            <RadioGroupComponent
                                value={field.value}
                                onChange={field.onChange}
                                options={options}
                                disabled={disabled}
                            />
                        </FormControl>
                    </BaseFormLayout>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export { RadioGroupComponent, RadioGroupFormField };
