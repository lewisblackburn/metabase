'use client'

import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { AddToListButton } from '@/components/buttons/add-to-list-button'
import { PlayTrailerButton } from '@/components/buttons/play-trailer-button'
import { ReWatchedButton } from '@/components/buttons/re-watched-button'
import StatusDialog from '@/components/status-dailog'
import {
    MovieQuery,
    useInsertUserMovieWatchesMutation,
    User_Movie_Statuses_Enum,
    User_Movie_Watches_Constraint,
} from '@/generated/graphql'
import { CACHE_TAGS } from '@/lib/utils/cache'

import RatingDialog from '../../../../components/rating-dialog'

interface MovieActionsProps {
    movie: MovieQuery['movies_by_pk']
}

export function MovieActions({ movie }: MovieActionsProps) {
    const queryClient = useQueryClient()
    const timesWatched = movie?.user_movie_watches_aggregate?.aggregate?.count ?? 0
    const showButton = movie?.user_movie_activity?.[0]?.status === User_Movie_Statuses_Enum.Watched

    const { mutateAsync: insertUserMovieWatches, isPending } = useInsertUserMovieWatchesMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [CACHE_TAGS.MOVIE, { id: movie?.id }] })
            toast.success('Marked as watched')
        },
        onError: (error: Error) => {
            toast.error('Failed to mark as watched', {
                description: error.message,
            })
        },
    })

    const handleRewatch = async () => {
        if (!movie?.id) return

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

    return (
        <div className="flex flex-wrap items-center gap-1">
            <RatingDialog movie={movie} />
            <AddToListButton movie={movie} />
            <StatusDialog movie={movie} />
            <ReWatchedButton
                timesWatched={timesWatched}
                showButton={showButton}
                onClick={handleRewatch}
                disabled={isPending}
            />
            <PlayTrailerButton />
        </div>
    )
}
