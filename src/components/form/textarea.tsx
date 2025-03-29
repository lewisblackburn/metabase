'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { FormControl, FormField, FormItem, FormMessage } from '@/registry/new-york-v4/ui/form';
import { Textarea } from '@/registry/new-york-v4/ui/textarea';

import BaseFormLayout from './base-form-layout';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

interface TextareaComponentProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

const TextareaComponent = React.forwardRef<HTMLTextAreaElement, TextareaComponentProps>(
    ({ className, ...props }, ref) => (
        <Textarea ref={ref} className={cn('min-h-[100px] w-full', className)} {...props} />
    )
);

TextareaComponent.displayName = 'TextareaComponent';

interface TextareaFormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    control: Control<TFieldValues>;
    name: TName;
    label?: string;
    description?: React.ReactNode;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    rows?: number;
}

const TextareaFormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    control,
    name,
    label,
    description,
    placeholder,
    className,
    disabled = false,
    rows = 4
}: TextareaFormFieldProps<TFieldValues, TName>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn('w-full', className)}>
                    <BaseFormLayout label={label} description={description}>
                        <FormControl>
                            <TextareaComponent {...field} placeholder={placeholder} disabled={disabled} rows={rows} />
                        </FormControl>
                    </BaseFormLayout>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export { TextareaComponent, TextareaFormField };
