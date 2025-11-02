import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { formatRuntime } from '@/lib/helpers/strings/strings'

interface Genre {
    genre?: {
        name?: string | null
    } | null
}

interface MovieMetadataProps {
    certification?: string | null
    genres: Genre[]
    runtime?: number | null
}

export function MovieMetadata({ certification, genres, runtime }: MovieMetadataProps) {
    return (
        <div className="flex flex-wrap items-center gap-2 whitespace-nowrap">
            <Badge
                variant="outline"
                className="whitespace-nowrap rounded-sm min-w-10 font-bold text-foreground hover:bg-accent"
            >
                {certification}
            </Badge>

            {genres.map(({ genre }) => (
                <Link
                    key={genre?.name}
                    href={`/movies/discover?genres=${genre?.name}`}
                    className="inline-flex"
                >
                    <Badge
                        variant="outline"
                        className="whitespace-nowrap rounded-sm min-w-10 font-bold text-foreground hover:bg-accent"
                    >
                        {genre?.name}
                    </Badge>
                </Link>
            ))}

            {runtime && runtime > 0 && (
                <Badge
                    variant="outline"
                    className="whitespace-nowrap rounded-sm min-w-10 font-bold text-foreground"
                >
                    {formatRuntime(runtime)}
                </Badge>
            )}
        </div>
    )
}
