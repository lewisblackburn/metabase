'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import { FormField, FormItem } from '@/registry/new-york-v4/ui/form';
import { Label } from '@/registry/new-york-v4/ui/label';

import BaseFormLayout from './base-form-layout';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

interface CheckboxGroupProps {
    value?: string[];
    onChange?: (value: string[]) => void;
    options: string[];
    className?: string;
    disabled?: boolean;
}

const CheckboxGroup = ({ value = [], onChange, options, className, disabled = false }: CheckboxGroupProps) => {
    const handleToggle = (option: string, checked: boolean) => {
        const updatedValue = checked ? [...value, option] : value.filter((val) => val !== option);
        onChange?.(updatedValue);
    };

    return (
        <div className={cn('grid grid-cols-2 gap-2', className)}>
            {options.map((option) => (
                <div key={option} className='mt-1 flex items-center space-x-2'>
                    <Checkbox
                        id={option}
                        checked={value.includes(option)}
                        onCheckedChange={(checked) => handleToggle(option, Boolean(checked))}
                        disabled={disabled}
                    />
                    <Label htmlFor={option}>{option}</Label>
                </div>
            ))}
        </div>
    );
};

CheckboxGroup.displayName = 'CheckboxGroup';

interface CheckboxGroupFormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    control: Control<TFieldValues>;
    name: TName;
    label?: string;
    description?: React.ReactNode;
    options: string[];
    className?: string;
    disabled?: boolean;
}

const CheckboxGroupFormField = <
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
}: CheckboxGroupFormFieldProps<TFieldValues, TName>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn('w-full', className)}>
                    <BaseFormLayout label={label} description={description}>
                        <CheckboxGroup
                            options={options}
                            value={field.value || []}
                            onChange={field.onChange}
                            disabled={disabled}
                        />
                    </BaseFormLayout>
                </FormItem>
            )}
        />
    );
};

export { CheckboxGroup, CheckboxGroupFormField };
