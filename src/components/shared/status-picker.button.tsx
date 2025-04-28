'use client';

import React, { useState } from 'react';

import { Verb_Types_Enum } from '@/generated/graphql';
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

export const VERB_TYPES_ICONS: Record<Verb_Types_Enum, LucideIcon> = {
    dropped: X,
    watchlisted: List,
    watched: CheckCircle,
    watching: Clock,
    favourited: CheckCircle,
    unfavourited: X,
    reviewed: CheckCircle,
    nulled: CircleHelp
};

interface StatusButtonProps extends ButtonProps {
    currentStatus?: Verb_Types_Enum;
    statuses?: {
        value: Verb_Types_Enum;
        label: string;
    }[];
    onStatusChange?: (value: Verb_Types_Enum | null) => void;
    defaultValue?: Verb_Types_Enum;
    statusIcons?: Record<string, LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>>;
}

export default function StatusPickerButton({
    currentStatus,
    statuses,
    onStatusChange,
    defaultValue,
    statusIcons = VERB_TYPES_ICONS,
    ...props
}: StatusButtonProps) {
    const [status, setStatus] = useState<Verb_Types_Enum | null>(defaultValue || null);

    const handleStatusClick = (value: Verb_Types_Enum) => {
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

    const currentIcon = statusIcons[status || ''] || statusIcons[defaultValue || ''] || CircleHelp;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='inline-flex'>
                    <ActionButton icon={currentIcon} {...props}>
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
