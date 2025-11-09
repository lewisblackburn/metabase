'use client'

import { useForm } from '@tanstack/react-form'
import { Bookmark, CheckCircleIcon, Play, XCircle } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { MovieQuery } from '@/generated/graphql'
import { upsertUserMovieActivity } from '@/lib/actions/movies/update-user-movie-activity'
import { UserMovieStatus } from '@/lib/enums'
import { userMovieStatusSchema } from '@/lib/validations/movies/user-movie-status.schema'

import { Field, FieldError, FieldGroup } from './ui/field'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

interface StatusDialogProps {
    movie: MovieQuery['movies_by_pk']
}

function StatusDialog({ movie }: StatusDialogProps) {
    const [open, setOpen] = useState(false)

    const userMovieActivity = movie?.user_movie_activity?.[0]
    const status = userMovieActivity?.status as UserMovieStatus
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
            await upsertUserMovieActivity({
                id: movie?.id,
                status: value.status,
                comment,
                rating,
            })
                .then(() => {
                    toast.success('Status updated successfully')
                })
                .catch(error => {
                    toast.error('Failed to update status', {
                        description: error.message,
                    })
                })
        },
    })

    return (
        <form id="status-form" className="max-w-36 w-full">
            <FieldGroup>
                <form.Field name="status">
                    {field => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <Field data-invalid={isInvalid}>
                                <Select
                                    value={field.state.value}
                                    open={open}
                                    onOpenChange={setOpen}
                                    onValueChange={(value: UserMovieStatus) => {
                                        field.handleChange(value)
                                        form.handleSubmit()
                                    }}
                                >
                                    <SelectTrigger
                                        className="w-full [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
                                        size="sm"
                                    >
                                        <SelectValue placeholder="Update status" />
                                    </SelectTrigger>
                                    <SelectContent className="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:pr-8 [&_*[role=option]]:pl-2 [&_*[role=option]>span]:right-2 [&_*[role=option]>span]:left-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0">
                                        <SelectItem value={UserMovieStatus.WATCHED}>
                                            <span className="flex items-center gap-2">
                                                <CheckCircleIcon className="size-4 text-green-400" />
                                                <span className="truncate capitalize">
                                                    {UserMovieStatus.WATCHED.toLowerCase()}
                                                </span>
                                            </span>
                                        </SelectItem>
                                        <SelectItem value={UserMovieStatus.WATCHING}>
                                            <span className="flex items-center gap-2">
                                                <Play className="size-4 text-blue-400" />
                                                <span className="truncate capitalize">
                                                    {UserMovieStatus.WATCHING.toLowerCase()}
                                                </span>
                                            </span>
                                        </SelectItem>
                                        <SelectItem value={UserMovieStatus.WATCHLIST}>
                                            <span className="flex items-center gap-2">
                                                <Bookmark className="size-4 text-orange-400" />
                                                <span className="truncate capitalize">
                                                    {UserMovieStatus.WATCHLIST.toLowerCase()}
                                                </span>
                                            </span>
                                        </SelectItem>
                                        <SelectItem value={UserMovieStatus.DROPPED}>
                                            <span className="flex items-center gap-2">
                                                <XCircle className="size-4 text-red-400" />
                                                <span className="truncate capitalize">
                                                    {UserMovieStatus.DROPPED.toLowerCase()}
                                                </span>
                                            </span>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                {isInvalid && <FieldError errors={field.state.meta.errors} />}
                            </Field>
                        )
                    }}
                </form.Field>
            </FieldGroup>
        </form>
    )
}

export default StatusDialog
