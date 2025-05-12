'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Input } from '@/registry/new-york-v4/ui/input';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(({ className, ...props }, ref) => (
    <Input ref={ref} className={cn('w-full', className)} {...props} />
));

InputField.displayName = 'InputField';

export default InputField;
