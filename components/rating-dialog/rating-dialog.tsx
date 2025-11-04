'use client'

import { createFormHook, useForm } from '@tanstack/react-form'
import { Star } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { useDeviceDetection } from '@/hooks/use-device-detection'
import { ratingSchema } from '@/lib/validations/ratings/rating.schema'

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
    open: boolean
    onOpenChange: (open: boolean) => void
}

function DesktopRatingDialog({ open, onOpenChange }: RatingDialogContainerProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button aria-label="Rating" variant="outline" size="sm" className="text-xs">
                    <Star className="size-4" />
                    Rate
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl">Rating</DialogTitle>
                </DialogHeader>
                <RatingForm onOpenChange={onOpenChange} onCancel={() => onOpenChange(false)} />
            </DialogContent>
        </Dialog>
    )
}

function MobileRatingDialog({ open, onOpenChange }: RatingDialogContainerProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetTrigger asChild>
                <Button aria-label="Rating" variant="outline" size="sm" className="text-xs">
                    <Star className="size-4" />
                    Rate
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
                <SheetHeader>
                    <SheetTitle className="text-xl">Rating</SheetTitle>
                    <SheetDescription>How would you like to rate this?</SheetDescription>
                </SheetHeader>
                <div className="px-4 py-2">
                    <RatingForm onOpenChange={onOpenChange} onCancel={() => onOpenChange(false)} />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default function RatingDialog() {
    const { device } = useDeviceDetection()
    const [open, setOpen] = useState(false)

    return device === 'mobile' ? (
        <MobileRatingDialog open={open} onOpenChange={setOpen} />
    ) : (
        <DesktopRatingDialog open={open} onOpenChange={setOpen} />
    )
}
