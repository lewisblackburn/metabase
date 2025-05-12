'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Switch } from '@/registry/new-york-v4/ui/switch';

interface SwitchFieldProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
}

const SwitchField = ({ checked = false, onChange, disabled = false, className }: SwitchFieldProps) => {
    return <Switch checked={checked} onCheckedChange={onChange} disabled={disabled} className={cn(className)} />;
};

SwitchField.displayName = 'SwitchField';

export default SwitchField;
