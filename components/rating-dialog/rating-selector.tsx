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
                onValueChange={val => onChange(Number(val))}
            >
                {ratings.map(rating => (
                    <div key={`${id}-${rating.value}`} className="relative">
                        <RadioGroupItem
                            id={`${id}-${rating.value}`}
                            value={rating.value.toString()}
                            className="sr-only peer"
                        />
                        <label
                            htmlFor={`${id}-${rating.value}`}
                            className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border text-xl transition-all ${
                                value === rating.value
                                    ? 'border-sky-600 bg-sky-600/10 dark:border-sky-400 dark:bg-sky-400/10'
                                    : 'border-input hover:border-sky-600/50'
                            }`}
                        >
                            {rating.icon}
                        </label>
                    </div>
                ))}
            </RadioGroup>
        </fieldset>
    )
}
