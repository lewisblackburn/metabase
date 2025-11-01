import { HeartIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

interface HeartButtonProps {
    isFavorite: boolean
    setIsFavorite: (isFavorite: boolean) => void
}

export function HeartButton({ isFavorite, setIsFavorite }: HeartButtonProps) {
    return (
        <Button
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            size="icon"
            variant="outline"
            onClick={() => setIsFavorite(!isFavorite)}
            className={cn(
                'relative transition-colors duration-300',
                isFavorite
                    ? 'text-red-500 hover:text-red-600'
                    : 'text-muted-foreground hover:text-red-400',
            )}
        >
            <HeartIcon
                className={cn(
                    'size-4 transition-all duration-300',
                    isFavorite ? 'fill-red-500 stroke-red-500' : 'stroke-current',
                )}
            />
            <span className="sr-only">
                {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </span>
        </Button>
    )
}
