'use client'
import { MovieQuery } from '@/generated/graphql'
import useBreadcrumbs from '@/hooks/use-breadcrumbs'

import MovieBackdrop from '../../components/movie-backdrop/movie-backdrop'
import MoviePoster from '../../components/movie-poster/movie-poster'

export default function Movie({ movie }: { movie: MovieQuery['movies_by_pk'] }) {
    useBreadcrumbs([movie?.title ?? 'Unknown Movie'])

    return (
        <div>
            <div className="relative h-96">
                <MovieBackdrop backdropId={movie?.backdrop_id} />
                <div className={'absolute inset-0 flex items-center justify-start p-5'}>
                    <MoviePoster posterId={movie?.poster_id} posterSize="full" />
                    <div>test</div>
                </div>
            </div>
            <h1>{movie?.title}</h1>
        </div>
    )
}
