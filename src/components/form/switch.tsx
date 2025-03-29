'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { FormField, FormItem } from '@/registry/new-york-v4/ui/form';
import { Switch } from '@/registry/new-york-v4/ui/switch';

import BaseFormLayout from './base-form-layout';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

interface SwitchComponentProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
}

const SwitchComponent = ({ checked = false, onChange, disabled = false, className }: SwitchComponentProps) => {
    return <Switch checked={checked} onCheckedChange={onChange} disabled={disabled} className={cn(className)} />;
};

SwitchComponent.displayName = 'SwitchComponent';

interface SwitchFormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    control: Control<TFieldValues>;
    name: TName;
    label?: string;
    description?: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

const SwitchFormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    control,
    name,
    label,
    description,
    disabled = false,
    className
}: SwitchFormFieldProps<TFieldValues, TName>) => {
    return (
        <FormField
            control={control}
            name={name}
            defaultValue={false as any}
            render={({ field }) => (
                <FormItem className={cn('flex items-center justify-between', className)}>
                    <BaseFormLayout label={label} description={description}>
                        <SwitchComponent checked={field.value} onChange={field.onChange} disabled={disabled} />
                    </BaseFormLayout>
                </FormItem>
            )}
        />
    );
};

export { SwitchComponent, SwitchFormField };
