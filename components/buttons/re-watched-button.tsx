import { RotateCcw } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

const RESET_SPIN_DELAY = 250

export function ReWatchedButton({
    timesWatched,
    showButton,
    onClick,
}: {
    timesWatched: number
    showButton: boolean
    onClick: () => void
}) {
    const [spin, setSpin] = useState(false)

    const triggerSpin = () => {
        setSpin(true)
        setTimeout(() => setSpin(false), RESET_SPIN_DELAY) // reset after animation
    }

    const handleClick = () => {
        triggerSpin()
        onClick()
    }

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
                        onClick={handleClick}
                    >
                        <RotateCcw className={cn('size-4', { 'animate-punchy-spin': spin })} />
                    </Button>
                    <Badge className="absolute -top-2.5 -right-2.5 size-5 text-xs rounded-full px-1 tabular-nums">
                        {timesWatched}
                    </Badge>
                </div>
            </TooltipTrigger>
            <TooltipContent className="[&_svg]:invisible">Mark as re-watched</TooltipContent>
        </Tooltip>
    )
}
