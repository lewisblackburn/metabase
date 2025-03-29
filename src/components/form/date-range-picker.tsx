'use client';

import * as React from 'react';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Calendar } from '@/registry/new-york-v4/ui/calendar';
import { FormField, FormItem } from '@/registry/new-york-v4/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';

import BaseFormLayout from './base-form-layout';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

interface DateRangePickerProps {
    value?: DateRange | { from?: Date; to?: Date };
    onChange?: (date: DateRange | undefined) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}

const DateRangePicker = ({
    value,
    onChange,
    placeholder = 'Pick a date range',
    className,
    disabled = false
}: DateRangePickerProps) => {
    const convertToDayPickerRange = (input?: DateRange | { from?: Date; to?: Date }): DateRange | undefined => {
        if (!input) return undefined;

        return { from: input.from, to: input.to };
    };

    const [internalDate, setInternalDate] = useState<DateRange | undefined>(convertToDayPickerRange(value));

    const handleDateChange = (newDate: DateRange | undefined) => {
        setInternalDate(newDate);
        onChange?.(newDate);
    };

    const currentDate = convertToDayPickerRange(value) ?? internalDate;

    return (
        <Popover>
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
            <PopoverContent className='w-auto p-0' align='start'>
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

DateRangePicker.displayName = 'DateRangePicker';

interface DateRangePickerFormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    control: Control<TFieldValues>;
    name: TName;
    label?: string;
    description?: React.ReactNode;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}

const DateRangePickerFormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    control,
    name,
    label,
    description,
    placeholder = 'Pick a date range',
    className,
    disabled = false
}: DateRangePickerFormFieldProps<TFieldValues, TName>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn('w-full', className)}>
                    <BaseFormLayout label={label} description={description}>
                        <DateRangePicker
                            value={field.value}
                            onChange={field.onChange}
                            placeholder={placeholder}
                            disabled={disabled}
                        />
                    </BaseFormLayout>
                </FormItem>
            )}
        />
    );
};

export { DateRangePicker, DateRangePickerFormField };
