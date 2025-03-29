'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { FormControl, FormField, FormItem, FormMessage } from '@/registry/new-york-v4/ui/form';
import { Input } from '@/registry/new-york-v4/ui/input';

import BaseFormLayout from './base-form-layout';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

interface InputComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const InputComponent = React.forwardRef<HTMLInputElement, InputComponentProps>(({ className, ...props }, ref) => (
    <Input ref={ref} className={cn('w-full', className)} {...props} />
));

InputComponent.displayName = 'InputComponent';

interface InputFormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    control: Control<TFieldValues>;
    name: TName;
    label?: string;
    description?: React.ReactNode;
    placeholder?: string;
    className?: string;
    type?: string;
    disabled?: boolean;
}

const InputFormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    control,
    name,
    label,
    description,
    placeholder,
    className,
    type = 'text',
    disabled = false
}: InputFormFieldProps<TFieldValues, TName>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn('w-full', className)}>
                    <BaseFormLayout label={label} description={description}>
                        <FormControl>
                            <InputComponent {...field} type={type} placeholder={placeholder} disabled={disabled} />
                        </FormControl>
                    </BaseFormLayout>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export { InputComponent, InputFormField };
