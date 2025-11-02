import { Play, PlayIcon } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../ui/button'

interface PlayTrailerButtonProps {
    href?: string
}

export function PlayTrailerButton({ href = '#' }: PlayTrailerButtonProps) {
    return (
        <Button aria-label="Rating" variant="outline" size="sm" className="text-xs" asChild>
            <Link href={href}>
                <Play className="size-4" />
                Play Trailer
            </Link>
        </Button>
    )
}
