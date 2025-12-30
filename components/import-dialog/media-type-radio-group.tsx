'use client'

import { Media_Types_Enum } from '@/generated/graphql'

import { Field, FieldError, FieldTitle } from '../ui/field'
import { Radio, RadioGroup } from '../ui/radio-group'

interface MediaTypeRadioGroupProps {
    value: Media_Types_Enum
    onChange: (value: Media_Types_Enum) => void
    errors?: Array<{ message?: string } | undefined>
    isInvalid?: boolean
}

const mediaTypeDescriptions: Record<string, string> = {
    BOOK: 'Import books and literary works.',
    EPISODE: 'Import individual TV episodes.',
    GAME: 'Import video games.',
    MOVIE: 'Import movies and films.',
    PERSON: 'Import people and celebrities.',
    SONG: 'Import songs and music tracks.',
    TV_SHOW: 'Import TV shows and series.',
}

// Order: MOVIE, TV_SHOW, EPISODE, PERSON, SONG, BOOK, GAME
const mediaTypeOrder: Media_Types_Enum[] = [
    'MOVIE',
    'TV_SHOW',
    'EPISODE',
    'PERSON',
    'SONG',
    'BOOK',
    'GAME',
] as Media_Types_Enum[]

export function MediaTypeRadioGroup({
    value,
    onChange,
    errors,
    isInvalid,
}: MediaTypeRadioGroupProps) {
    const mediaTypeValues = Object.values(Media_Types_Enum) as string[]
    const orderedMediaTypes = mediaTypeOrder.filter(type => mediaTypeValues.includes(type))

    return (
        <Field data-invalid={isInvalid}>
            <FieldTitle>Media Type</FieldTitle>
            <RadioGroup
                value={value}
                onValueChange={(val: unknown) => {
                    if (typeof val === 'string') {
                        onChange(val as Media_Types_Enum)
                    }
                }}
            >
                {orderedMediaTypes.map(mediaType => (
                    <label
                        key={mediaType}
                        className="flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50 cursor-pointer"
                    >
                        <Radio value={mediaType} />
                        <div className="flex flex-col gap-1">
                            <p>{mediaType}</p>
                            <p className="text-muted-foreground text-xs">
                                {mediaTypeDescriptions[mediaType] ||
                                    `Import ${mediaType.toLowerCase()}.`}
                            </p>
                        </div>
                    </label>
                ))}
            </RadioGroup>
            {isInvalid && <FieldError errors={errors} />}
        </Field>
    )
}
