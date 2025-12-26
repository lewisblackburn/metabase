'use client'

import { Sources_Enum } from '@/generated/graphql'
import { Source } from '@/lib/helpers/graphql-enums'

import { Field, FieldError, FieldTitle } from '../ui/field'
import { Radio, RadioGroup } from '../ui/radio-group'

interface SourceRadioGroupProps {
    value: Sources_Enum
    onChange: (value: Sources_Enum) => void
    errors?: Array<{ message?: string } | undefined>
    isInvalid?: boolean
}

export function SourceRadioGroup({ value, onChange, errors, isInvalid }: SourceRadioGroupProps) {
    return (
        <Field data-invalid={isInvalid}>
            <FieldTitle>Source</FieldTitle>
            <RadioGroup
                value={value}
                onValueChange={(val: unknown) => {
                    if (typeof val === 'string') {
                        onChange(val as Sources_Enum)
                    }
                }}
            >
                <label className="flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50 cursor-pointer">
                    <Radio value={Source.TMDB} />
                    <div className="flex flex-col gap-1">
                        <p>{Source.TMDB}</p>
                        <p className="text-muted-foreground text-xs">
                            Import media from The Movie Database.
                        </p>
                    </div>
                </label>
                <label className="flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50 cursor-pointer">
                    <Radio value={Source.IMDB} />
                    <div className="flex flex-col gap-1">
                        <p>{Source.IMDB}</p>
                        <p className="text-muted-foreground text-xs">Import media from IMDB.</p>
                    </div>
                </label>
            </RadioGroup>
            {isInvalid && <FieldError errors={errors} />}
        </Field>
    )
}
