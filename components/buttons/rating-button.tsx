import { StarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

export function RatingButton() {
    return (
        <Button
            aria-label="Rate this title"
            size="icon"
            variant="outline"
            className={cn(
                'relative transition-colors duration-300 text-muted-foreground hover:text-yellow-500 hover:border-yellow-400',
            )}
        >
            <StarIcon className="size-4 transition-all duration-300 stroke-current hover:fill-yellow-500" />
            <span className="sr-only">Rate this title</span>
        </Button>
    )
}
