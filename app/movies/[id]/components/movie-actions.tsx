import { useParams } from 'next/navigation'

import { AddToListButton } from '@/components/buttons/add-to-list-button'
import { PlayTrailerButton } from '@/components/buttons/play-trailer-button'
import StatusDialog from '@/components/status-dialog/status-dailog'

import RatingDialog from '../../../../components/rating-dialog/rating-dialog'

export function MovieActions() {
    const { id } = useParams<{ id: string }>()

    return (
        <div className="flex flex-wrap items-center gap-1">
            <RatingDialog />
            <AddToListButton />
            <StatusDialog movieId={id} />
            <PlayTrailerButton />
        </div>
    )
}
