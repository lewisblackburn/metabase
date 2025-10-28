'use client'
import { MovieQuery } from '@/generated/graphql'
import useBreadcrumbs from '@/hooks/use-breadcrumbs'

import MoviePoster from '../../components/movie-poster/movie-poster'

export default function Movie({ movie }: { movie: MovieQuery['movies_by_pk'] }) {
    useBreadcrumbs([movie?.title ?? 'Unknown Movie'])

    return (
        <div>
            <MoviePoster posterId={movie?.posterId} posterSize="lg" />
            <h1>{movie?.title}</h1>
        </div>
    )
}
