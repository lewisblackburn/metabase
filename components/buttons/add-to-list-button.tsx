import { ListPlusIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

interface AddToListButtonProps {
    isListed: boolean
    setIsListed: (isListed: boolean) => void
}

export function AddToListButton({ isListed, setIsListed }: AddToListButtonProps) {
    return (
        <Button
            aria-label={isListed ? 'Remove from List' : 'Add to List'}
            size="icon"
            variant="outline"
            onClick={() => setIsListed(!isListed)}
            className={cn(
                'relative transition-colors duration-300',
                isListed
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-muted-foreground hover:text-emerald-400',
            )}
        >
            <ListPlusIcon
                className={cn(
                    'size-4 transition-all duration-300',
                    isListed ? 'fill-emerald-500 stroke-emerald-500' : 'stroke-current',
                )}
            />
            <span className="sr-only">{isListed ? 'Remove from List' : 'Add to List'}</span>
        </Button>
    )
}
