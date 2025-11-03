import { AddToListButton } from '@/components/buttons/add-to-list-button'
import { PlayTrailerButton } from '@/components/buttons/play-trailer-button'
import { UpdateStatusButton } from '@/components/buttons/update-status-button'

import RatingDialog from '../../../../components/ratings/rating-dialog'

export function MovieActions() {
    return (
        <div className="flex flex-wrap items-center gap-1">
            <RatingDialog />
            <AddToListButton />
            <UpdateStatusButton />
            <PlayTrailerButton />
        </div>
    )
}
