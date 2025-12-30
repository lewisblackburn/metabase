'use client'

import { useForm } from '@tanstack/react-form'
import { useQueryClient } from '@tanstack/react-query'
import { Bookmark, CheckCircleIcon, LucideIcon, Play, XCircle } from 'lucide-react'
import { toast } from 'sonner'

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
import { userMovieStatusSchema } from '@/lib/validations/movies/user-movie-status.schema'

import { FieldError, FieldGroup } from './ui/field'
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from './ui/select'

interface StatusDialogProps {
    movie: MovieQuery['movies_by_pk']
}

type StatusItem = {
    value: User_Movie_Statuses_Enum
    label: string
    icon: LucideIcon
}

const statusItems: StatusItem[] = [
    { value: User_Movie_Statuses_Enum.Watched, label: 'Watched', icon: CheckCircleIcon },
    { value: User_Movie_Statuses_Enum.Watching, label: 'Watching', icon: Play },
    { value: User_Movie_Statuses_Enum.Watchlist, label: 'Watchlist', icon: Bookmark },
    { value: User_Movie_Statuses_Enum.Dropped, label: 'Dropped', icon: XCircle },
]

export default function StatusDialog({ movie }: StatusDialogProps) {
    const queryClient = useQueryClient()
    const userMovieActivity = movie?.user_movie_activity?.[0]
    const status = userMovieActivity?.status
    const comment = userMovieActivity?.comment
    const rating = userMovieActivity?.rating

    const { mutateAsync: upsertUserMovieActivity, isPending } = useUpsertUserMovieActivityMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [CACHE_TAGS.MOVIE, { id: movie?.id }] })
            toast.success('Status updated')
        },
        onError: (error: Error) => {
            toast.error('Failed to update status', {
                description: error.message,
            })
        },
    })

    const { mutateAsync: insertUserMovieWatches } = useInsertUserMovieWatchesMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [CACHE_TAGS.MOVIE, { id: movie?.id }] })
            toast.success('Watched')
        },
        onError: (error: Error) => {
            toast.error('Failed to mark as watched', {
                description: error.message,
            })
        },
    })

    const form = useForm({
        defaultValues: {
            status,
        },
        validators: {
            onChange: userMovieStatusSchema,
        },
        onSubmit: async ({ value }) => {
            if (!movie?.id) return

            try {
                const result = await upsertUserMovieActivity({
                    object: {
                        movie_id: movie.id,
                        status: value.status,
                        comment: comment ?? null,
                        rating: rating ?? null,
                    },
                    on_conflict: {
                        constraint: User_Movie_Activities_Constraint.UserMovieActivitiesPkey,
                        update_columns: [
                            User_Movie_Activities_Update_Column.Rating,
                            User_Movie_Activities_Update_Column.Comment,
                            User_Movie_Activities_Update_Column.Status,
                        ],
                    },
                })

                const updatedStatus = result.insert_user_movie_activities_one?.status
                const currentWatches = movie?.user_movie_watches_aggregate?.aggregate?.count
                const isFirstWatch = updatedStatus === 'WATCHED' && currentWatches === 0

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
            } catch (error) {
                // Error already handled in onError
                console.error(error)
            }
        },
    })

    return (
        <form.Field name="status">
            {field => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                const selectedItem = field.state.value
                    ? statusItems.find(item => item.value === field.state.value)
                    : null

                return (
                    <FieldGroup data-invalid={isInvalid} className="max-w-40">
                        <Select<StatusItem>
                            value={selectedItem ?? null}
                            itemToStringValue={item => item?.value ?? ''}
                            onValueChange={item => {
                                if (item) {
                                    field.handleChange(item.value)
                                    form.handleSubmit()
                                }
                            }}
                            disabled={isPending}
                        >
                            <SelectTrigger>
                                <SelectValue>
                                    {item =>
                                        item ? (
                                            <span className="flex items-center gap-2">
                                                <item.icon className="h-4 w-4" />
                                                <span className="truncate">{item.label}</span>
                                            </span>
                                        ) : (
                                            <span className="text-muted-foreground">
                                                Select status
                                            </span>
                                        )
                                    }
                                </SelectValue>
                            </SelectTrigger>
                            <SelectPopup>
                                {statusItems.map(item => (
                                    <SelectItem key={item.value} value={item}>
                                        <span className="flex items-center gap-2">
                                            <item.icon className="h-4 w-4" />
                                            <span className="truncate">{item.label}</span>
                                        </span>
                                    </SelectItem>
                                ))}
                            </SelectPopup>
                        </Select>
                        {isInvalid && <FieldError>{field.state.meta.errors.join(', ')}</FieldError>}
                    </FieldGroup>
                )
            }}
        </form.Field>
    )
}
