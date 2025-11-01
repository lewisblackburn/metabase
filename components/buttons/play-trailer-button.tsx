import { PlayIcon } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../ui/button'

interface PlayTrailerButtonProps {
    href?: string
}

export function PlayTrailerButton({ href = '#' }: PlayTrailerButtonProps) {
    return (
        <Button aria-label="Play trailer" variant="outline" asChild>
            <Link href={href}>
                <PlayIcon className="size-4" />
                <span className="font-medium">Play Trailer</span>
            </Link>
        </Button>
    )
}
