import * as React from 'react';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Calendar } from '@/registry/new-york-v4/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

interface DatePickerFieldProps {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    modal?: boolean;
}

export function DatePickerField({
    value,
    onChange,
    placeholder = 'Select a date',
    className,
    disabled = false,
    modal = false
}: DatePickerFieldProps) {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);

    useEffect(() => {
        setSelectedDate(value);
    }, [value]);

    const handleDateChange = (date: Date | undefined) => {
        setSelectedDate(date);
        onChange?.(date);
    };

    return (
        <Popover modal={modal}>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    disabled={disabled}
                    className={cn(
                        'w-full justify-start text-left font-normal',
                        !selectedDate && 'text-muted-foreground',
                        className
                    )}>
                    <CalendarIcon className='size-4' />
                    {selectedDate ? format(selectedDate, 'LLL dd, y') : placeholder}
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
                <Calendar
                    initialFocus
                    mode='single'
                    selected={selectedDate}
                    onSelect={handleDateChange}
                    numberOfMonths={1}
                />
            </PopoverContent>
        </Popover>
    );
}
