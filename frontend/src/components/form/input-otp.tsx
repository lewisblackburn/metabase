'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/registry/new-york-v4/ui/input-otp';

interface OTPInputFieldProps {
    value?: string;
    onChange?: (val: string) => void;
    disabled?: boolean;
    length?: number;
    className?: string;
}

const OTPInputField = ({ value = '', onChange, disabled = false, length = 6, className }: OTPInputFieldProps) => {
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

OTPInputField.displayName = 'OTPInputField';

export default OTPInputField;
