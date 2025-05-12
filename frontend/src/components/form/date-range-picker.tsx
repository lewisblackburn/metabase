import * as React from 'react';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Calendar } from '@/registry/new-york-v4/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';

interface DateRangePickerFieldProps {
    value?: DateRange | { from?: Date; to?: Date };
    onChange?: (date: DateRange | undefined) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    modal?: boolean;
}

const DateRangePickerField = ({
    value,
    onChange,
    placeholder = 'Pick a date range',
    className,
    disabled = false,
    modal = false
}: DateRangePickerFieldProps) => {
    const convertToDayPickerRange = (input?: DateRange | { from?: Date; to?: Date }): DateRange | undefined => {
        if (!input) return undefined;
        return { from: input.from, to: input.to };
    };

    const [internalDate, setInternalDate] = useState<DateRange | undefined>(convertToDayPickerRange(value));

    useEffect(() => {
        setInternalDate(convertToDayPickerRange(value));
    }, [value]);

    const handleDateChange = (newDate: DateRange | undefined) => {
        setInternalDate(newDate);
        onChange?.(newDate);
    };

    const currentDate = convertToDayPickerRange(value) ?? internalDate;

    return (
        <Popover modal={modal}>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    disabled={disabled}
                    className={cn(
                        'w-full justify-start text-left font-normal',
                        !currentDate?.from && 'text-muted-foreground',
                        className
                    )}>
                    <CalendarIcon className='mr-2 h-4 w-4' />
                    {currentDate?.from ? (
                        currentDate.to ? (
                            <>
                                {format(currentDate.from, 'LLL dd, y')} – {format(currentDate.to, 'LLL dd, y')}
                            </>
                        ) : (
                            format(currentDate.from, 'LLL dd, y')
                        )
                    ) : (
                        <span>{placeholder}</span>
                    )}
                </Button>
            </PopoverTrigger>

            <PopoverContent className='w-auto p-0' align='start' style={{ zIndex: '1000 !important' }}>
                <Calendar
                    initialFocus
                    mode='range'
                    defaultMonth={currentDate?.from}
                    selected={currentDate}
                    onSelect={handleDateChange}
                    numberOfMonths={2}
                />
            </PopoverContent>
        </Popover>
    );
};

DateRangePickerField.displayName = 'DateRangePickerField';

export default DateRangePickerField;
