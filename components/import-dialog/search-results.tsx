'use client'

import { SearchResult } from '@/lib/actions/import/search'
import { TMDBMovieSearchResult } from '@/lib/types/tmdb'

function isMovieResult(result: SearchResult): result is TMDBMovieSearchResult {
    return 'title' in result
}

export function SearchResults({
    results,
    onSelect,
    isLoading,
}: {
    results: SearchResult[]
    onSelect: (id: string) => void
    isLoading?: boolean
}) {
    if (isLoading) {
        return <div className="p-4 text-center text-sm text-muted-foreground">Searching...</div>
    }

    if (!results || results.length === 0) {
        return (
            <div className="p-4 text-center text-sm text-muted-foreground">No results found.</div>
        )
    }

    return (
        <div className="divide-y">
            {results.map(result => {
                const isMovie = isMovieResult(result)
                const id = String(result.id)
                const title = isMovie ? result.title : result.name
                const overview = isMovie ? result.overview : result.known_for_department
                const releaseDate = isMovie ? result.release_date : null
                const posterPath = isMovie ? result.poster_path : result.profile_path

                return (
                    <button
                        key={id}
                        type="button"
                        onClick={() => onSelect(id)}
                        className="w-full p-3 text-left hover:bg-accent transition-colors"
                    >
                        <div className="flex w-full items-center justify-between">
                            <span className="font-medium">{title || 'Unknown'}</span>
                            {releaseDate && (
                                <span className="text-muted-foreground text-xs">
                                    {new Date(releaseDate).getFullYear()}
                                </span>
                            )}
                        </div>
                        {overview && (
                            <p className="text-muted-foreground line-clamp-2 text-xs mt-1">
                                {overview}
                            </p>
                        )}
                    </button>
                )
            })}
        </div>
    )
}
