'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';

export type SelectOption = {
    value: string;
    label: string;
};

interface SelectFieldProps {
    value?: string | null;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

const SelectField = ({
    value,
    onChange,
    options,
    placeholder = 'Select an option',
    disabled = false,
    className
}: SelectFieldProps) => {
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

SelectField.displayName = 'SelectField';

export default SelectField;
