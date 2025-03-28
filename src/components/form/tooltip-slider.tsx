'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/new-york-v4/ui/tooltip';
import * as SliderPrimitive from '@radix-ui/react-slider';

interface TooltipSliderProps extends Omit<React.ComponentProps<typeof SliderPrimitive.Root>, 'onChange'> {
    onChange?: (value: number[]) => void;
    onBlur?: () => void;
    value?: number[];
}

function TooltipSlider({
    className,
    defaultValue,
    value: controlledValue,
    onChange,
    onBlur,
    min = 0,
    max = 10,
    ...props
}: TooltipSliderProps) {
    const [localValue, setLocalValue] = React.useState(controlledValue ?? defaultValue ?? [min, max]);
    const [isDragging, setIsDragging] = React.useState(Array(localValue.length).fill(false));

    // Sync with controlled value if provided
    React.useEffect(() => {
        if (controlledValue !== undefined) {
            setLocalValue(controlledValue);
        }
    }, [controlledValue]);

    const handleValueChange = React.useCallback(
        (newValues: number[]) => {
            // Update local state if not controlled
            if (controlledValue === undefined) {
                setLocalValue(newValues);
            }

            // Call onChange if provided
            onChange?.(newValues);
        },
        [onChange, controlledValue]
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

        // Trigger onBlur if provided
        onBlur?.();
    };

    return (
        <SliderPrimitive.Root
            data-slot='slider'
            defaultValue={defaultValue}
            value={localValue}
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
        </SliderPrimitive.Root>
    );
}

export { TooltipSlider };
