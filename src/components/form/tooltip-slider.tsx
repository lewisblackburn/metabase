'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/registry/new-york-v4/ui/form';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/new-york-v4/ui/tooltip';
import * as SliderPrimitive from '@radix-ui/react-slider';

import BaseFormLayout from './base-form-layout';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

interface TooltipSliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
    min?: number;
    max?: number;
}

const TooltipSlider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, TooltipSliderProps>(
    ({ className, min = 0, max = 10, ...props }, ref) => {
        const [isDragging, setIsDragging] = React.useState<boolean[]>(
            Array(((props.value as number[]) || (props.defaultValue as number[]) || [min, max]).length).fill(false)
        );

        const handleDragStart = (index: number) => {
            const newIsDragging = [...isDragging];
            newIsDragging[index] = true;
            setIsDragging(newIsDragging);
        };

        const handleDragEnd = (index: number) => {
            const newIsDragging = [...isDragging];
            newIsDragging[index] = false;
            setIsDragging(newIsDragging);
        };

        return (
            <SliderPrimitive.Root
                ref={ref}
                data-slot='slider'
                min={min}
                max={max}
                className={cn(
                    'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
                    className
                )}
                {...props}>
                <SliderPrimitive.Track
                    data-slot='slider-track'
                    className={cn(
                        'bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5'
                    )}>
                    <SliderPrimitive.Range
                        data-slot='slider-range'
                        className={cn(
                            'bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full'
                        )}
                    />
                </SliderPrimitive.Track>
                {((props.value as number[]) || (props.defaultValue as number[]) || [min, max]).map(
                    (thumbValue, index) => (
                        <Tooltip key={index} open={isDragging[index]}>
                            <TooltipTrigger
                                asChild
                                onPointerDown={() => handleDragStart(index)}
                                onPointerUp={() => handleDragEnd(index)}
                                onPointerLeave={() => handleDragEnd(index)}>
                                <SliderPrimitive.Thumb
                                    data-slot='slider-thumb'
                                    className='border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50'
                                />
                            </TooltipTrigger>
                            <TooltipContent>{thumbValue}</TooltipContent>
                        </Tooltip>
                    )
                )}
            </SliderPrimitive.Root>
        );
    }
);
TooltipSlider.displayName = 'TooltipSlider';

interface SliderFormFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    control: Control<TFieldValues>;
    name: TName;
    label?: string;
    defaultValue?: number[];
    min?: number;
    max?: number;
    className?: string;
    description?: React.ReactNode;
}

function SliderFormField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    control,
    name,
    label,
    defaultValue = [0, 10],
    min = 0,
    max = 10,
    className,
    description
}: SliderFormFieldProps<TFieldValues, TName>) {
    return (
        <FormField
            control={control}
            name={name}
            defaultValue={defaultValue as any}
            render={({ field }) => (
                <FormItem className={cn('w-full', className)}>
                    <BaseFormLayout label={label} description={description}>
                        <TooltipSlider
                            min={min}
                            max={max}
                            onValueChange={field.onChange}
                            value={field.value}
                            onBlur={field.onBlur}
                            defaultValue={defaultValue}
                            id={field.name}
                            disabled={field.disabled}
                        />
                    </BaseFormLayout>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export { TooltipSlider, SliderFormField };
