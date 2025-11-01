'use client'
import { format } from 'date-fns'

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

    return (
        <div>
            <div className="relative h-96">
                <MovieBackdrop backdropId={movie?.backdrop_id} />
                <div className="absolute inset-0 flex items-center justify-start p-5 gap-5">
                    <MoviePoster posterId={movie?.poster_id} posterSize="full" />
                    <div className="flex flex-col gap-2 w-2/3">
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
                        <p className="text-sm text-muted-foreground">{movie?.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
