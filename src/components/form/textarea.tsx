'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Textarea } from '@/registry/new-york-v4/ui/textarea';

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(({ className, ...props }, ref) => (
    <Textarea ref={ref} className={cn('min-h-[100px] w-full', className)} {...props} />
));

TextareaField.displayName = 'TextareaField';

export default TextareaField;
