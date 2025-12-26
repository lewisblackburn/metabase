'use client'

import { useId } from 'react'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface RatingSelectorProps {
    value: number
    onChange: (value: number) => void
}

export function RatingSelector({ value, onChange }: RatingSelectorProps) {
    const id = useId()
    const ratings = [
        { value: 1, label: 'Angry', icon: '😡' },
        { value: 2, label: 'Sad', icon: '🙁' },
        { value: 3, label: 'Neutral', icon: '🙂' },
        { value: 4, label: 'Happy', icon: '😁' },
        { value: 5, label: 'Laughing', icon: '🤩' },
    ]

    return (
        <fieldset className="space-y-4">
            <RadioGroup
                className="flex flex-row gap-1.5"
                value={value.toString()}
                onValueChange={val => onChange(Number(val as string))}
            >
                {ratings.map(rating => (
                    <label
                        key={`${id}-${rating.value}`}
                        className="border-input relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border text-center text-xl shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:border-sky-600 has-focus-visible:ring-[3px] has-focus-visible:ring-sky-600/50 has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-[state=checked]:border-sky-600 has-data-[state=checked]:bg-sky-600/10 dark:has-focus-visible:border-sky-400 dark:has-focus-visible:ring-sky-600/50 dark:has-data-[state=checked]:border-sky-400 dark:has-data-[state=checked]:bg-sky-400/10"
                    >
                        <RadioGroupItem
                            id={`${id}-${rating.value}`}
                            value={rating.value.toString()}
                            className="sr-only after:absolute after:inset-0"
                        />
                        {rating.icon}
                    </label>
                ))}
            </RadioGroup>
        </fieldset>
    )
}
