'use client'

import { useForm } from '@tanstack/react-form'
import { TrashIcon } from 'lucide-react'
import { toast } from 'sonner'

import LoadingButton from '@/components/loading-button'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'
import { MovieQuery } from '@/generated/graphql'
import { upsertUserMovieActivity } from '@/lib/actions/movies/upsert-user-movie-activity'
import { ratingSchema } from '@/lib/validations/ratings/rating.schema'

import { RatingSelector } from './rating-selector'

interface RatingFormProps {
    movie: MovieQuery['movies_by_pk']
    onOpenChange: (open: boolean) => void
}

export function RatingForm({ movie, onOpenChange }: RatingFormProps) {
    const userMovieActivity = movie?.user_movie_activity?.[0]
    const isRated = userMovieActivity?.rating && userMovieActivity.rating > 0
    const rating = userMovieActivity?.rating ?? 0
    const comment = userMovieActivity?.comment ?? null

    const form = useForm({
        defaultValues: {
            rating,
            comment,
        },
        validators: {
            onSubmit: ratingSchema,
        },
        onSubmit: async ({ value }) => {
            await upsertUserMovieActivity({
                id: movie?.id,
                movieTitle: movie?.title,
                rating: value.rating,
                comment: value.comment,
            }).catch(error => {
                toast.error('Failed to update rating', {
                    description: error.message,
                })
            })
            onOpenChange(false)
        },
    })

    const handleDeleteRating = async () => {
        await upsertUserMovieActivity({
            id: movie?.id,
            movieTitle: movie?.title,
            rating: null,
            comment: null,
        }).catch(error => {
            toast.error('Failed to remove rating', {
                description: error.message,
            })
        })
        onOpenChange(false)
    }

    return (
        <form
            id="rating-form"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
            }}
            className="flex flex-col gap-4"
        >
            <FieldGroup>
                <form.Field name="rating">
                    {field => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <Field data-invalid={isInvalid}>
                                <RatingSelector
                                    value={field.state.value}
                                    onChange={field.handleChange}
                                />
                                {isInvalid && <FieldError errors={field.state.meta.errors} />}
                            </Field>
                        )
                    }}
                </form.Field>

                <form.Field name="comment">
                    {field => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <Field data-invalid={isInvalid}>
                                <FieldLabel htmlFor={field.name}>Comment</FieldLabel>
                                <Textarea
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value ?? ''}
                                    onBlur={field.handleBlur}
                                    onChange={e => field.handleChange(e.target.value)}
                                    aria-invalid={isInvalid}
                                    placeholder="Type your message here."
                                    maxLength={500}
                                />
                                {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                <p className="text-muted-foreground text-sm">
                                    {500 - (field.state.value?.length ?? 0)}/500 characters left
                                </p>
                            </Field>
                        )
                    }}
                </form.Field>
            </FieldGroup>
            <form.Subscribe selector={state => [state.isSubmitting]}>
                {([isSubmitting]) => (
                    <div className="flex justify-end gap-2">
                        {isRated && (
                            <Button
                                type="button"
                                variant="destructive"
                                onClick={handleDeleteRating}
                            >
                                <TrashIcon className="size-4" />
                            </Button>
                        )}
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => form.reset()}
                            disabled={isSubmitting}
                        >
                            Reset
                        </Button>
                        <LoadingButton loading={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </LoadingButton>
                    </div>
                )}
            </form.Subscribe>
        </form>
    )
}
