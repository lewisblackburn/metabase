'use client';

import React, { useEffect, useState } from 'react';

import { LucideIconOrFC } from '@/constants/icons.constant';
import { cn } from '@/lib/utils';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/registry/new-york-v4/ui/dropdown-menu';
import { ButtonProps } from '@/types/button.types';

import ActionButton from './action-button';
import { Check, CircleHelp } from 'lucide-react';

interface StatusButtonProps<T extends string | number> {
    currentStatus?: T;
    statuses?: {
        value: T;
        label: string;
        icon: LucideIconOrFC | undefined;
    }[];
    onStatusChange?: (value: T | null) => void;
    defaultStatus?: T;
}

export default function StatusPickerButton<T extends string | number>({
    currentStatus,
    statuses,
    onStatusChange,
    defaultStatus,
    ...props
}: StatusButtonProps<T> & ButtonProps) {
    const [status, setStatus] = useState<T | null>(currentStatus || defaultStatus || null);

    useEffect(() => {
        if (currentStatus !== undefined) {
            setStatus(currentStatus);
        }
    }, [currentStatus]);

    const handleStatusClick = (value: T) => {
        // NOTE: If the same status is clicked, unset it
        if (value === status) {
            setStatus(null);
            onStatusChange?.(null);
        } else {
            setStatus(value);
            onStatusChange?.(value);
        }
    };

    // NOTE: Find the label and icon for the current status, not the default value
    const statusLabel = status ? statuses?.find((s) => s.value === status)?.label : null;
    const currentIcon = statuses?.find((s) => s.value === status)?.icon;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='inline-flex'>
                    <ActionButton icon={currentIcon || CircleHelp} {...props}>
                        {statusLabel || 'Update Status'}
                    </ActionButton>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-48 max-w-[90vw]' align='end' sideOffset={5}>
                <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {statuses?.map((statusOption) => {
                        return (
                            <DropdownMenuItem
                                key={String(statusOption.value)}
                                onClick={() => handleStatusClick(statusOption.value)}
                                className={cn(
                                    'flex cursor-pointer items-center justify-between py-2',
                                    status === statusOption.value ? 'font-medium' : ''
                                )}>
                                <div className='flex items-center gap-2'>
                                    {statusOption.icon && <statusOption.icon className='size-4' />}
                                    <span>{statusOption.label}</span>
                                </div>
                                {status === statusOption.value && <Check className='text-primary size-4' />}
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
