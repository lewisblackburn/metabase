import { StarIcon } from 'lucide-react'

import { Button } from '../ui/button'

export function RatingButton() {
    return (
        <Button aria-label="Rate" variant="outline">
            <StarIcon className="size-4" />
            <span className="font-medium">Rate</span>
        </Button>
    )
}
