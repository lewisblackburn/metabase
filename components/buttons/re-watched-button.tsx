import { RotateCcw } from 'lucide-react'
import { useState } from 'react'

import { MovieQuery } from '@/generated/graphql'
import { UserMovieStatus } from '@/lib/enums'
import { cn } from '@/lib/utils'

import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

const RESET_SPIN_DELAY = 250

export function ReWatchedButton({ movie }: { movie: MovieQuery['movies_by_pk'] }) {
    const [spin, setSpin] = useState(false)

    const triggerSpin = () => {
        setSpin(true)
        setTimeout(() => setSpin(false), RESET_SPIN_DELAY) // reset after animation
    }

    const userMovieActivity = movie?.user_movie_activity?.[0]
    const status = userMovieActivity?.status
    const timesWatched = 1
    const showButton = status === UserMovieStatus.WATCHED

    if (!showButton) return null

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div className="relative w-fit animate-slide-in-left">
                    <Button
                        aria-label="Re-watched"
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={triggerSpin}
                    >
                        <RotateCcw className={cn('size-4', { 'animate-punchy-spin': spin })} />
                    </Button>
                    <Badge className="absolute -top-2 -right-2 size-4 text-xs rounded-full px-1 tabular-nums">
                        {timesWatched}
                    </Badge>
                </div>
            </TooltipTrigger>
            <TooltipContent className="[&_svg]:invisible">Mark as re-watched</TooltipContent>
        </Tooltip>
    )
}
