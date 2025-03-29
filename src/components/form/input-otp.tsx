'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { FormField, FormItem } from '@/registry/new-york-v4/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/registry/new-york-v4/ui/input-otp';

import BaseFormLayout from './base-form-layout';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

interface OTPInputComponentProps {
    value?: string;
    onChange?: (val: string) => void;
    disabled?: boolean;
    length?: number;
    className?: string;
}

const OTPInputComponent = ({
    value = '',
    onChange,
    disabled = false,
    length = 6,
    className
}: OTPInputComponentProps) => {
    return (
        <InputOTP
            maxLength={length}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={cn('flex gap-2', className)}>
            <InputOTPGroup>
                {Array.from({ length }).map((_, i) => (
                    <InputOTPSlot key={i} index={i} />
                ))}
            </InputOTPGroup>
        </InputOTP>
    );
};

OTPInputComponent.displayName = 'OTPInputComponent';

interface OTPInputFormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    control: Control<TFieldValues>;
    name: TName;
    label?: string;
    description?: React.ReactNode;
    className?: string;
    length?: number;
    disabled?: boolean;
}

const OTPInputFormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    control,
    name,
    label,
    description,
    className,
    length = 6,
    disabled = false
}: OTPInputFormFieldProps<TFieldValues, TName>) => {
    return (
        <FormField
            control={control}
            name={name}
            defaultValue={'' as any}
            render={({ field }) => (
                <FormItem className={className}>
                    <BaseFormLayout label={label} description={description}>
                        <OTPInputComponent
                            value={field.value}
                            onChange={field.onChange}
                            length={length}
                            disabled={disabled}
                        />
                    </BaseFormLayout>
                </FormItem>
            )}
        />
    );
};

export { OTPInputComponent, OTPInputFormField };
