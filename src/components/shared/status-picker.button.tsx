'use client';

import React, { useEffect, useState } from 'react';

import { User_Movie_Statuses_Types_Enum } from '@/generated/graphql';
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
import { Check, CheckCircle, CircleHelp, Clock, List, LucideIcon, X } from 'lucide-react';

type STATUS_TYPES = User_Movie_Statuses_Types_Enum;

export const STATUS_TYPES_ICONS: Record<STATUS_TYPES, LucideIcon> = {
    dropped: X,
    watchlist: List,
    watched: CheckCircle,
    watching: Clock
};

interface StatusButtonProps<T extends string | number> {
    currentStatus?: T;
    statuses?: {
        value: T;
        label: string;
    }[];
    onStatusChange?: (value: T | null) => void;
    defaultStatus?: T;
    statusIcons?: Record<string, LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>>;
}

export default function StatusPickerButton<T extends string | number>({
    currentStatus,
    statuses,
    onStatusChange,
    defaultStatus,
    statusIcons = STATUS_TYPES_ICONS as unknown as Record<string, LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>>,
    ...props
}: StatusButtonProps<T> & ButtonProps) {
    // Use currentStatus from props if available, otherwise use defaultStatus
    const [status, setStatus] = useState<T | null>(currentStatus || defaultStatus || null);

    // Update local state when currentStatus prop changes
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

    // NOTE: Find the label for the current status, not the default value
    const statusLabel = status ? statuses?.find((s) => s.value === status)?.label : null;

    // NOTE: Get the icon for this status option if available
    const statusKey = status as unknown as string;
    const CurrentIcon = status && statusKey in statusIcons ? statusIcons[statusKey] : CircleHelp;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='inline-flex'>
                    <ActionButton icon={CurrentIcon} {...props}>
                        {statusLabel || 'Update Status'}
                    </ActionButton>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-48 max-w-[90vw]' align='end' sideOffset={5}>
                <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {statuses?.map((statusOption) => {
                        // NOTE: Get the icon for this status option if available
                        const optionKey = statusOption.value as unknown as string;
                        const StatusIcon = optionKey in statusIcons ? statusIcons[optionKey] : undefined;

                        return (
                            <DropdownMenuItem
                                key={String(statusOption.value)}
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
