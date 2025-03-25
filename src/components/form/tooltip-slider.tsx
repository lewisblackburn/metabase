'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/new-york-v4/ui/tooltip';
import * as SliderPrimitive from '@radix-ui/react-slider';

interface TooltipSliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
    onValueChange?: (values: number[]) => void;
}

function TooltipSlider({
    className,
    defaultValue,
    value,
    min = 0,
    max = 100,
    onValueChange,
    ...props
}: TooltipSliderProps) {
    const [localValue, setLocalValue] = React.useState(value ?? defaultValue ?? [min, max]);
    const [isDragging, setIsDragging] = React.useState(Array(localValue.length).fill(false));

    const handleValueChange = React.useCallback(
        (newValues: number[]) => {
            setLocalValue(newValues);
            onValueChange?.(newValues);
        },
        [onValueChange]
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
            data-slot='slider'
            defaultValue={defaultValue}
            value={value}
            onValueChange={handleValueChange}
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
            <TooltipProvider delayDuration={0} skipDelayDuration={0}>
                {localValue.map((thumbValue, index) => (
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
                ))}
            </TooltipProvider>
        </SliderPrimitive.Root>
    );
}

export { TooltipSlider };
