import { AddToListButton } from '@/components/buttons/add-to-list-button'
import { PlayTrailerButton } from '@/components/buttons/play-trailer-button'
import { ReWatchedButton } from '@/components/buttons/re-watched-button'
import StatusDialog from '@/components/status-dailog'
import { MovieQuery } from '@/generated/graphql'
import { insertUserMovieWatches } from '@/lib/actions/movies/insert-user-movie-watches'
import { UserMovieStatus } from '@/lib/enums'

import RatingDialog from '../../../../components/rating-dialog/rating-dialog'

interface MovieActionsProps {
    movie: MovieQuery['movies_by_pk']
}

export function MovieActions({ movie }: MovieActionsProps) {
    const timesWatched = movie?.user_movie_watches_aggregate?.aggregate?.count ?? 1
    const showButton = movie?.user_movie_activity?.[0]?.status === UserMovieStatus.WATCHED

    return (
        <div className="flex flex-wrap items-center gap-1">
            <RatingDialog movie={movie} />
            <AddToListButton />
            <StatusDialog movie={movie} />
            <ReWatchedButton
                timesWatched={timesWatched}
                showButton={showButton}
                onClick={async () => await insertUserMovieWatches({ id: movie?.id })}
            />
            <PlayTrailerButton />
        </div>
    )
}
