import { Play } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../ui/button'

interface PlayTrailerButtonProps {
    href?: string
}

export function PlayTrailerButton({ href = '#' }: PlayTrailerButtonProps) {
    return (
        <Link href={href}>
            <Button aria-label="Play Trailer" variant="outline" className="text-xs">
                <Play className="size-4" />
                Play Trailer
            </Button>
        </Link>
    )
}
