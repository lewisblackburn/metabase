'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import { Label } from '@/registry/new-york-v4/ui/label';

interface CheckboxGroupFieldProps {
    value?: string[];
    onChange?: (value: string[]) => void;
    options: string[];
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

CheckboxGroupField.displayName = 'CheckboxGroupField';

export default CheckboxGroupField;
