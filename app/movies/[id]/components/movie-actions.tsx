import { AddToListButton } from '@/components/buttons/add-to-list-button'
import { PlayTrailerButton } from '@/components/buttons/play-trailer-button'
import { ReWatchedButton } from '@/components/buttons/re-watched-button'
import StatusDialog from '@/components/status-dailog'
import { MovieQuery } from '@/generated/graphql'

import RatingDialog from '../../../../components/rating-dialog/rating-dialog'

interface MovieActionsProps {
    movie: MovieQuery['movies_by_pk']
}

export function MovieActions({ movie }: MovieActionsProps) {
    return (
        <div className="flex flex-wrap items-center gap-1">
            <RatingDialog movie={movie} />
            <AddToListButton />
            <StatusDialog movie={movie} />
            <ReWatchedButton movie={movie} />
            <PlayTrailerButton />
        </div>
    )
}
