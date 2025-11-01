'use client'

import { useState } from 'react'

import { AddToListButton } from '@/components/buttons/add-to-list-button'
import { HeartButton } from '@/components/buttons/heart-button'
import { PlayTrailerButton } from '@/components/buttons/play-trailer-button'
import { RatingButton } from '@/components/buttons/rating-button'
import { WatchLaterButton } from '@/components/buttons/watch-later-button'
import { Badge } from '@/components/ui/badge'
import { MovieQuery } from '@/generated/graphql'
import useBreadcrumbs from '@/hooks/use-breadcrumbs'
import { useFormatDate } from '@/hooks/use-format-date'
import { formatRuntime } from '@/lib/helpers/strings/strings'

import MovieBackdrop from '../../components/movie-backdrop/movie-backdrop'
import MoviePoster from '../../components/movie-poster/movie-poster'
import CertificationBadge from './certification-badge.'

export default function Movie({ movie }: { movie: MovieQuery['movies_by_pk'] }) {
    useBreadcrumbs([movie?.title ?? 'Unknown Movie'])
    const formatDate = useFormatDate()
    const [isFavorite, setIsFavorite] = useState(false)
    const [isWatchLater, setIsWatchLater] = useState(false)
    const [isListed, setIsListed] = useState(false)

    const handleSetIsFavorite = (isFavorite: boolean) => {
        setIsFavorite(isFavorite)
    }

    const handleSetIsWatchLater = (isWatchLater: boolean) => {
        setIsWatchLater(isWatchLater)
    }

    const handleSetIsListed = (isListed: boolean) => {
        setIsListed(isListed)
    }

    return (
        <div>
            <div className="relative h-96">
                <MovieBackdrop backdropId={movie?.backdrop_id} />
                <div className="absolute inset-0 flex items-center justify-start p-5 gap-5">
                    <MoviePoster posterId={movie?.poster_id} posterSize="full" />
                    <div className="flex flex-col gap-4 w-2/3">
                        <h1 className="text-4xl font-extrabold tracking-tight text-balance">
                            {movie?.title}
                        </h1>
                        <div className="flex items-center gap-2">
                            <CertificationBadge certification={movie?.certification} />
                            <time className="text-sm text-muted-foreground">
                                {formatDate(new Date(movie?.release_date), 'MMMM d, yyyy')}
                            </time>
                            <div>
                                {movie?.genres.map(({ genre }) => (
                                    <Badge key={genre?.name}>{genre?.name}</Badge>
                                ))}
                            </div>
                            <time>{formatRuntime(movie?.runtime ?? 0)}</time>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm text-muted-foreground">{movie?.tagline}</p>
                                <h4 className="text-sm font-semibold">Overview</h4>
                                <p className="text-sm text-muted-foreground">{movie?.overview}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-sm font-semibold">Richard Curtis</h4>
                                <p className="text-sm text-muted-foreground">Writer, Director</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <RatingButton />
                            <HeartButton
                                isFavorite={isFavorite}
                                setIsFavorite={handleSetIsFavorite}
                            />
                            <WatchLaterButton
                                isWatchLater={isWatchLater}
                                setIsWatchLater={handleSetIsWatchLater}
                            />
                            <AddToListButton isListed={isListed} setIsListed={handleSetIsListed} />
                            <PlayTrailerButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
