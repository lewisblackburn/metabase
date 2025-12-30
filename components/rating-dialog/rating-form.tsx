'use client'

import { useForm } from '@tanstack/react-form'
import { useQueryClient } from '@tanstack/react-query'
import { TrashIcon } from 'lucide-react'
import { toast } from 'sonner'

import LoadingButton from '@/components/loading-button'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'
import {
    MovieQuery,
    useInsertUserMovieWatchesMutation,
    User_Movie_Activities_Constraint,
    User_Movie_Activities_Update_Column,
    User_Movie_Statuses_Enum,
    User_Movie_Watches_Constraint,
    useUpsertUserMovieActivityMutation,
} from '@/generated/graphql'
import { CACHE_TAGS } from '@/lib/utils/cache'
import { ratingSchema } from '@/lib/validations/ratings/rating.schema'

import { RatingSelector } from './rating-selector'

interface RatingFormProps {
    movie: MovieQuery['movies_by_pk']
    onOpenChange: (open: boolean) => void
}

export function RatingForm({ movie, onOpenChange }: RatingFormProps) {
    const queryClient = useQueryClient()
    const userMovieActivity = movie?.user_movie_activity?.[0]
    const isRated = userMovieActivity?.rating && userMovieActivity.rating > 0
    const rating = userMovieActivity?.rating ?? 0
    const comment = userMovieActivity?.comment ?? null
    const status = userMovieActivity?.status

    const { mutateAsync: upsertUserMovieActivity, isPending } = useUpsertUserMovieActivityMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [CACHE_TAGS.MOVIE, { id: movie?.id }] })
            toast.success('Rating updated')
        },
        onError: (error: Error) => {
            toast.error('Failed to update rating', {
                description: error.message,
            })
        },
    })

    const { mutateAsync: insertUserMovieWatches } = useInsertUserMovieWatchesMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [CACHE_TAGS.MOVIE, { id: movie?.id }] })
        },
        onError: (error: Error) => {
            toast.error('Failed to mark as watched', {
                description: error.message,
            })
        },
    })

    const form = useForm({
        defaultValues: {
            rating,
            comment,
        },
        validators: {
            onSubmit: ratingSchema,
        },
        onSubmit: async ({ value }) => {
            if (!movie?.id) return

            try {
                await upsertUserMovieActivity({
                    object: {
                        movie_id: movie.id,
                        rating: value.rating,
                        comment: value.comment || null,
                        // NOTE: Set the status to WATCHED as they must have watched the movie to rate it
                        status: User_Movie_Statuses_Enum.Watched,
                    },
                    on_conflict: {
                        constraint: User_Movie_Activities_Constraint.UserMovieActivitiesPkey,
                        update_columns: [
                            User_Movie_Activities_Update_Column.Rating,
                            User_Movie_Activities_Update_Column.Comment,
                        ],
                    },
                })

                // Track first watch if rating and no watches yet
                const currentWatches = movie?.user_movie_watches_aggregate?.aggregate?.count
                const isFirstWatch = currentWatches === 0

                if (isFirstWatch) {
                    await insertUserMovieWatches({
                        object: {
                            movie_id: movie.id,
                        },
                        on_conflict: {
                            constraint: User_Movie_Watches_Constraint.UserMovieWatchesPkey,
                            update_columns: [],
                        },
                    })
                }

                onOpenChange(false)
            } catch (error) {
                // Error already handled in onError
                console.error(error)
            }
        },
    })

    const handleDeleteRating = async () => {
        if (!movie?.id) return

        try {
            await upsertUserMovieActivity({
                object: {
                    movie_id: movie.id,
                    rating: null,
                    comment: null,
                    status: status || null, // Keep existing status
                },
                on_conflict: {
                    constraint: User_Movie_Activities_Constraint.UserMovieActivitiesPkey,
                    update_columns: [
                        User_Movie_Activities_Update_Column.Rating,
                        User_Movie_Activities_Update_Column.Comment,
                    ],
                },
            })

            toast.success('Rating removed')
            onOpenChange(false)
        } catch (error) {
            toast.error('Failed to remove rating', {
                description: error instanceof Error ? error.message : 'Unknown error',
            })
        }
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
                                <p className="text-muted-foreground text-sm">
                                    {500 - (field.state.value?.length ?? 0)}/500 characters left
                                </p>
                                {isInvalid && <FieldError errors={field.state.meta.errors} />}
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
                                disabled={isSubmitting || isPending}
                            >
                                <TrashIcon className="size-4" />
                            </Button>
                        )}
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => form.reset()}
                            disabled={isSubmitting || isPending}
                        >
                            Reset
                        </Button>
                        <LoadingButton loading={isSubmitting || isPending}>
                            {isSubmitting || isPending ? 'Submitting...' : 'Submit'}
                        </LoadingButton>
                    </div>
                )}
            </form.Subscribe>
        </form>
    )
}
