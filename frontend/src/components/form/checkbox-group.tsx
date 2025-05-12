'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import { Label } from '@/registry/new-york-v4/ui/label';

interface CheckboxGroupFieldProps {
    value?: string[];
    onChange?: (value: string[]) => void;
    options: Array<{ value: string; label: string }>;
    className?: string;
    disabled?: boolean;
}

const CheckboxGroupField = ({
    value = [],
    onChange,
    options,
    className,
    disabled = false
}: CheckboxGroupFieldProps) => {
    const handleToggle = (optionValue: string, checked: boolean) => {
        const updatedValue = checked ? [...value, optionValue] : value.filter((val) => val !== optionValue);
        onChange?.(updatedValue);
    };

    return (
        <div className={cn('grid grid-cols-2 gap-2 space-y-1', className)}>
            {options.map(({ label, value: optionValue }) => (
                <div key={optionValue} className='flex items-center space-x-2'>
                    <Checkbox
                        id={optionValue}
                        checked={value.includes(optionValue)}
                        onCheckedChange={(checked) => handleToggle(optionValue, Boolean(checked))}
                        disabled={disabled}
                    />
                    <Label htmlFor={optionValue}>{label}</Label>
                </div>
            ))}
        </div>
    );
};

CheckboxGroupField.displayName = 'CheckboxGroupField';

export default CheckboxGroupField;
