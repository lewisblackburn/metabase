'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/new-york-v4/ui/tooltip';
import * as SliderPrimitive from '@radix-ui/react-slider';

type OriginalSliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;
type SliderPropsWithoutOnChange = Omit<OriginalSliderProps, 'onChange' | 'value'>;

interface TooltipSliderFieldProps extends SliderPropsWithoutOnChange {
    min?: number;
    max?: number;
    value?: number[];
    onChange?: (value: number[]) => void;
    name?: string;
}

const TooltipSliderField = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, TooltipSliderFieldProps>(
    ({ className, min = 0, max = 10, value, onChange, ...props }, ref) => {
        const [isDragging, setIsDragging] = React.useState<boolean[]>(
            Array(((value as number[]) || (props.defaultValue as number[]) || [min, max]).length).fill(false)
        );

        const [localValue, setLocalValue] = React.useState<number[]>(
            (value as number[]) || (props.defaultValue as number[]) || [min, max]
        );

        const currentValue = (value as number[]) || localValue;

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

        const handleValueChange = (newValue: number[]) => {
            setLocalValue(newValue);
            if (onChange) {
                onChange(newValue);
            }
        };

        return (
            <TooltipProvider>
                <SliderPrimitive.Root
                    ref={ref}
                    data-slot='slider'
                    min={min}
                    max={max}
                    step={1}
                    value={currentValue}
                    onValueChange={handleValueChange}
                    className={cn('relative flex w-full touch-none items-center select-none', className)}
                    {...props}>
                    <SliderPrimitive.Track
                        data-slot='slider-track'
                        className='bg-muted relative h-1.5 w-full grow rounded-full'>
                        <SliderPrimitive.Range data-slot='slider-range' className='bg-primary absolute h-full' />
                    </SliderPrimitive.Track>

                    {currentValue.map((thumbValue, index) => (
                        <Tooltip key={index} open={isDragging[index]}>
                            <TooltipTrigger asChild>
                                <SliderPrimitive.Thumb
                                    data-slot='slider-thumb'
                                    className='border-primary bg-background ring-ring/50 block h-4 w-4 cursor-grab rounded-full border shadow-sm transition-all focus-visible:ring-4 focus-visible:outline-none active:cursor-grabbing disabled:pointer-events-none disabled:opacity-50'
                                    onPointerDown={() => handleDragStart(index)}
                                    onPointerUp={() => handleDragEnd(index)}
                                    onPointerLeave={() => handleDragEnd(index)}
                                />
                            </TooltipTrigger>
                            <TooltipContent>{thumbValue}</TooltipContent>
                        </Tooltip>
                    ))}
                </SliderPrimitive.Root>
            </TooltipProvider>
        );
    }
);

TooltipSliderField.displayName = 'TooltipSliderField';

export default TooltipSliderField;
