'use client'

import { useForm } from '@tanstack/react-form'
import { Bookmark, CheckCircleIcon, LucideIcon, Play, XCircle } from 'lucide-react'
import { toast } from 'sonner'

import { MovieQuery, User_Movie_Statuses_Enum } from '@/generated/graphql'
import { insertUserMovieWatches } from '@/lib/actions/movies/insert-user-movie-watches'
import { upsertUserMovieActivity } from '@/lib/actions/movies/upsert-user-movie-activity'
import { UserMovieStatus } from '@/lib/helpers/graphql-enums'
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
    { value: UserMovieStatus.WATCHED, label: 'Watched', icon: CheckCircleIcon },
    { value: UserMovieStatus.WATCHING, label: 'Watching', icon: Play },
    { value: UserMovieStatus.WATCHLIST, label: 'Watchlist', icon: Bookmark },
    { value: UserMovieStatus.DROPPED, label: 'Dropped', icon: XCircle },
]

export default function StatusDialog({ movie }: StatusDialogProps) {
    const userMovieActivity = movie?.user_movie_activity?.[0]
    const status = userMovieActivity?.status
    const comment = userMovieActivity?.comment
    const rating = userMovieActivity?.rating

    const form = useForm({
        defaultValues: {
            status,
        },
        validators: {
            onChange: userMovieStatusSchema,
        },
        onSubmit: async ({ value }) => {
            const result = await upsertUserMovieActivity({
                id: movie?.id,
                status: value.status,
                comment,
                rating,
                ...(movie?.title && { meta: { title: movie.title } }),
            }).catch(error => {
                toast.error('Failed to update status', {
                    description: error.message,
                })
                return null
            })

            if (!result) return

            const updatedStatus = result.body.data?.insert_user_movie_activities_one?.status
            const currentWatches = movie?.user_movie_watches_aggregate?.aggregate?.count
            const isFirstWatch = updatedStatus === 'WATCHED' && currentWatches === 0

            if (isFirstWatch) {
                await insertUserMovieWatches({ id: movie?.id }).catch(error => {
                    toast.error('Failed to update user movie watched count', {
                        description: error.message,
                    })
                })
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
