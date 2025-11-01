'use client'

import { AddToListButton } from '@/components/buttons/add-to-list-button'
import { PlayTrailerButton } from '@/components/buttons/play-trailer-button'
import { RatingButton } from '@/components/buttons/rating-button'
import { UpdateStatusButton } from '@/components/buttons/update-status-button'
import { Separator } from '@/components/ui/separator'
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

    return (
        <div>
            <div className="relative h-96">
                <MovieBackdrop backdropId={movie?.backdrop_id} />
                <div className="absolute inset-0 flex items-center justify-start p-5 gap-5">
                    <MoviePoster posterId={movie?.poster_id} posterSize="full" />
                    <div className="flex flex-col gap-4 w-2/3">
                        <h1 className="text-white text-4xl font-extrabold tracking-tight text-balance">
                            {movie?.title}
                        </h1>
                        <div className="flex items-center gap-2 text-sm text-white font-bold">
                            <CertificationBadge certification={movie?.certification} />
                            <Separator
                                orientation="vertical"
                                className="h-6! bg-muted-foreground"
                            />
                            <time>{formatDate(new Date(movie?.release_date), 'MMMM d, yyyy')}</time>
                            <Separator
                                orientation="vertical"
                                className="h-6! bg-muted-foreground"
                            />
                            <span>{movie?.genres.map(({ genre }) => genre?.name).join(', ')}</span>
                            <Separator
                                orientation="vertical"
                                className="h-6! bg-muted-foreground"
                            />
                            <time>{formatRuntime(movie?.runtime ?? 0)}</time>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm text-white/70">{movie?.tagline}</p>
                                <h4 className="text-sm font-semibold text-white">Overview</h4>
                                <p className="text-sm text-white/70">{movie?.overview}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-sm font-semibold text-white">Richard Curtis</h4>
                                <p className="text-sm text-white/70">Writer, Director</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <RatingButton />
                            <AddToListButton />
                            <UpdateStatusButton />
                            <PlayTrailerButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
