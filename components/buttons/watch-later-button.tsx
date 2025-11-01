import { ClockIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

interface WatchLaterButtonProps {
    isWatchLater: boolean
    setIsWatchLater: (isWatchLater: boolean) => void
}

export function WatchLaterButton({ isWatchLater, setIsWatchLater }: WatchLaterButtonProps) {
    return (
        <Button
            aria-label={isWatchLater ? 'Remove from Watch Later' : 'Add to Watch Later'}
            size="icon"
            variant="outline"
            onClick={() => setIsWatchLater(!isWatchLater)}
            className={cn(
                'relative transition-colors duration-300',
                isWatchLater
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-muted-foreground hover:text-blue-400',
            )}
        >
            <ClockIcon
                className={cn(
                    'size-4 transition-all duration-300',
                    isWatchLater ? 'text-blue-500 stroke-blue-500' : 'stroke-current',
                )}
            />
            <span className="sr-only">
                {isWatchLater ? 'Remove from Watch Later' : 'Add to Watch Later'}
            </span>
        </Button>
    )
}
