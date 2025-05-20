'use client';

import * as React from 'react';

import { Checkbox } from '@/registry/new-york-v4/ui/checkbox';
import { Label } from '@/registry/new-york-v4/ui/label';

interface CheckboxFieldProps extends React.ComponentPropsWithoutRef<typeof Checkbox> {
    className?: string;
    label: string;
}

const CheckboxField = React.forwardRef<HTMLButtonElement, CheckboxFieldProps>(({ className, ...props }, ref) => (
    <div className='flex items-center gap-2'>
        <Checkbox id={props.id} checked={props.checked} onCheckedChange={props.onCheckedChange} />
        <Label htmlFor={props.id} className='text-muted-foreground text-xs'>
            {props.label}
        </Label>
    </div>
));

CheckboxField.displayName = 'CheckboxField';

export default CheckboxField;
