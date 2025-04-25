'use client';

import React, { useState } from 'react';

import { USER_OBJECT_STATUS_ICONS } from '@/constants/user-object-statuses.constant';
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
import { Check, LucideIcon } from 'lucide-react';

interface StatusButtonProps extends ButtonProps {
    defaultIcon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
    currentStatus?: string;
    statuses?: {
        value: string;
        label: string;
    }[];
    onStatusChange?: (value: string | null) => void;
    defaultValue?: string;
    statusIcons?: Record<string, LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>>;
}

export default function StatusPickerButton({
    defaultIcon,
    currentStatus,
    statuses,
    onStatusChange,
    defaultValue,
    statusIcons = USER_OBJECT_STATUS_ICONS,
    ...props
}: StatusButtonProps) {
    const [status, setStatus] = useState<string | null>(defaultValue || null);

    const handleStatusClick = (value: string) => {
        // NOTE: If the same status is clicked, unset it
        if (value === status) {
            setStatus(null);
            onStatusChange?.(null);
        } else {
            setStatus(value);
            onStatusChange?.(value);
        }
    };

    // NOTE: Find the label for the current status, not the default value
    const statusLabel = status ? statuses?.find((s) => s.value === status)?.label : null;

    // NOTE: Find the icon to use based on the current status
    const CurrentIcon = status && statusIcons[status] ? statusIcons[status] : defaultIcon;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='inline-flex'>
                    <ActionButton icon={CurrentIcon} {...props}>
                        {statusLabel || currentStatus || 'Update Status'}
                    </ActionButton>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-48 max-w-[90vw]' align='end' sideOffset={5}>
                <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {statuses?.map((statusOption) => {
                        // NOTE: Get the icon for this status option if available
                        const StatusIcon = statusIcons[statusOption.value];

                        return (
                            <DropdownMenuItem
                                key={statusOption.value}
                                onClick={() => handleStatusClick(statusOption.value)}
                                className={cn(
                                    'flex cursor-pointer items-center justify-between py-2',
                                    status === statusOption.value ? 'font-medium' : ''
                                )}>
                                <div className='flex items-center gap-2'>
                                    {StatusIcon && <StatusIcon className='h-4 w-4' />}
                                    <span>{statusOption.label}</span>
                                </div>
                                {status === statusOption.value && <Check className='text-primary h-4 w-4' />}
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
