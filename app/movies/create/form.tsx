'use client'

import { useForm } from '@tanstack/react-form'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import LoadingButton from '@/components/loading-button'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Movies_Constraint, useCreateMovieMutation } from '@/generated/graphql'
import { createMovieSchema } from '@/lib/validations/movies/create.schema'

export default function CreateMovieForm() {
    const { mutateAsync: createMovie } = useCreateMovieMutation({
        onSuccess: body => {
            const resolvedTitle = body.insert_movies_one?.title
            const resolvedId = body?.insert_movies_one?.id

            toast.success(`Movie "${resolvedTitle}" created successfully`)
            router.push(`/movies/${resolvedId}`)
        },
        onError: (error: Error) => {
            toast.error('Failed to create movie', {
                description: error.message,
            })
        },
    })

    const router = useRouter()
    const form = useForm({
        defaultValues: {
            title: '',
        },
        validators: {
            onSubmit: createMovieSchema,
        },
        onSubmit: async ({ value: { title } }) => {
            await createMovie({
                object: { title },
                on_conflict: {
                    constraint: Movies_Constraint.MoviesPkey,
                    update_columns: [],
                },
            })
        },
    })

    return (
        <form
            id="create-movie-form"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
            }}
            className="flex flex-col gap-4 min-w-96"
        >
            <FieldGroup>
                <form.Field name="title">
                    {field => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <Field data-invalid={isInvalid}>
                                <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={e => field.handleChange(e.target.value)}
                                    aria-invalid={isInvalid}
                                    placeholder="Enter the movie title"
                                    autoComplete="off"
                                />
                                {isInvalid && <FieldError errors={field.state.meta.errors} />}
                            </Field>
                        )
                    }}
                </form.Field>
            </FieldGroup>
            <form.Subscribe selector={state => [state.isSubmitting]}>
                {([isSubmitting]) => (
                    <>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => form.reset()}
                            disabled={isSubmitting}
                        >
                            Reset
                        </Button>
                        <LoadingButton loading={isSubmitting}>
                            {isSubmitting ? 'Creating movie...' : 'Create movie'}
                        </LoadingButton>
                    </>
                )}
            </form.Subscribe>
        </form>
    )
}
