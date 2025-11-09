'use client'

import { Star } from 'lucide-react'
import { useState } from 'react'

import { MovieQuery } from '@/generated/graphql'
import { useDeviceDetection } from '@/hooks/use-device-detection'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../ui/sheet'
import { RatingForm } from './rating-form'

interface RatingDialogContainerProps {
    movie: MovieQuery['movies_by_pk']
    open: boolean
    onOpenChange: (open: boolean) => void
}

function DesktopRatingDialog({ movie, open, onOpenChange }: RatingDialogContainerProps) {
    const isRated = movie?.user_movie_activity?.[0]?.rating && movie.user_movie_activity[0].rating

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button aria-label="Rating" variant="outline" size="sm" className="text-xs">
                    <Star
                        className={cn('size-4', {
                            'text-yellow-500 fill-yellow-500': isRated,
                        })}
                    />
                    {isRated ? 'Rated' : 'Rate'}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl">Rating</DialogTitle>
                </DialogHeader>
                <RatingForm movie={movie} onOpenChange={onOpenChange} />
            </DialogContent>
        </Dialog>
    )
}

function MobileRatingDialog({ movie, open, onOpenChange }: RatingDialogContainerProps) {
    const isRated = movie?.user_movie_activity?.[0]?.rating && movie.user_movie_activity[0].rating

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetTrigger asChild>
                <Button aria-label="Rating" variant="outline" size="sm" className="text-xs">
                    <Star
                        className={cn('size-4', {
                            'text-yellow-500 fill-yellow-500': isRated,
                        })}
                    />
                    {isRated ? 'Rated' : 'Rate'}
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
                <SheetHeader>
                    <SheetTitle className="text-xl">Rating</SheetTitle>
                    <SheetDescription>How would you like to rate this?</SheetDescription>
                </SheetHeader>
                <div className="px-4 py-2">
                    <RatingForm movie={movie} onOpenChange={onOpenChange} />
                </div>
            </SheetContent>
        </Sheet>
    )
}

interface RatingDialogProps {
    movie: MovieQuery['movies_by_pk']
}

export default function RatingDialog({ movie }: RatingDialogProps) {
    const { device } = useDeviceDetection()
    const [open, setOpen] = useState(false)

    switch (device) {
        case 'mobile':
            return <MobileRatingDialog movie={movie} open={open} onOpenChange={setOpen} />
        default:
            return <DesktopRatingDialog movie={movie} open={open} onOpenChange={setOpen} />
    }
}
