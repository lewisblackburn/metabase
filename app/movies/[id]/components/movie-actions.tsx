import { AddToListButton } from '@/components/buttons/add-to-list-button'
import { PlayTrailerButton } from '@/components/buttons/play-trailer-button'
import { RatingButton } from '@/components/buttons/rating-button'
import { UpdateStatusButton } from '@/components/buttons/update-status-button'

export function MovieActions() {
    return (
        <div className="flex flex-wrap items-center gap-1">
            <RatingButton />
            <AddToListButton />
            <UpdateStatusButton />
            <PlayTrailerButton />
        </div>
    )
}
