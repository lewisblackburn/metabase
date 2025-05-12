'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { FormLabel } from '@/registry/new-york-v4/ui/form';
import { RadioGroup, RadioGroupItem } from '@/registry/new-york-v4/ui/radio-group';

interface RadioOption {
    label: string;
    value: string;
}

interface RadioGroupFieldProps {
    value?: string;
    onChange?: (value: string) => void;
    options: RadioOption[];
    disabled?: boolean;
    className?: string;
}

const RadioGroupField = ({ value, onChange, options, disabled = false, className }: RadioGroupFieldProps) => {
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

RadioGroupField.displayName = 'RadioGroupField';

export default RadioGroupField;
