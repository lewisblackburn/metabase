'use client';

import React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Calendar } from '@/registry/new-york-v4/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

export interface DatePickerFieldProps {
    name: string;
    value?: Date;
    onChange: (date: Date) => void;
    onBlur?: (e: React.FocusEvent) => void;
}

const DatePickerField = React.forwardRef<HTMLDivElement, DatePickerFieldProps>(
    ({ name, value = new Date(), onChange, onBlur }, ref) => {
        const handleChange = (date: any) => {
            onChange(new Date(date.toString()));
        };

        return (
            <Popover modal>
                <PopoverTrigger asChild>
                    <Button
                        variant={'outline'}
                        className={cn('w-full justify-start text-left font-normal', !value && 'text-muted-foreground')}>
                        <CalendarIcon />
                        {value ? format(value, 'PPP') : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start' style={{ zIndex: '1000 !important' }}>
                    <Calendar
                        mode='single'
                        selected={value}
                        onSelect={handleChange}
                        initialFocus
                        defaultMonth={value || new Date()}
                    />
                </PopoverContent>
            </Popover>
        );
    }
);

export default DatePickerField;
