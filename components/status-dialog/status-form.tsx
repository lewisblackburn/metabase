'use client'

import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'

import { UserMovieStatus } from '@/lib/enums'
import { userMovieStatusSchema } from '@/lib/validations/movies/user-movie-status.schema'

import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface StatusFormProps {
    onOpenChange: (open: boolean) => void
}

export function StatusForm({ onOpenChange }: StatusFormProps) {
    const form = useForm({
        defaultValues: {
            status: UserMovieStatus.WATCHING,
        },
        validators: {
            onChange: userMovieStatusSchema,
        },
        onSubmit: async ({ value }) => {
            await new Promise(res => setTimeout(res, 1000))
            toast.success(`Submitted status: ${value.status}`)
            onOpenChange(false)
        },
    })

    return (
        <form
            id="status-form"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
            }}
            className="flex flex-col gap-4 pt-4"
        >
            <FieldGroup>
                <form.Field name="status">
                    {field => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <Field data-invalid={isInvalid}>
                                <fieldset>
                                    <RadioGroup
                                        onValueChange={(value: UserMovieStatus) => {
                                            field.handleChange(value)

                                            // submit the form
                                            form.handleSubmit()
                                        }}
                                    >
                                        {Object.values(UserMovieStatus).map(status => (
                                            <Field orientation="horizontal" key={status}>
                                                <RadioGroupItem value={status} id={status} />
                                                <FieldLabel htmlFor={status}>{status}</FieldLabel>
                                            </Field>
                                        ))}
                                    </RadioGroup>
                                </fieldset>
                                {isInvalid && <FieldError errors={field.state.meta.errors} />}
                            </Field>
                        )
                    }}
                </form.Field>
            </FieldGroup>
        </form>
    )
}
