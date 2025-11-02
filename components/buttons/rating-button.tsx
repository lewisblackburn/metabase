import { Star } from 'lucide-react'

import { Button } from '../ui/button'

export function RatingButton() {
    return (
        <Button aria-label="Rating" variant="outline" size="sm" className="text-xs">
            <Star className="size-4" />
            Rate
        </Button>
    )
}
