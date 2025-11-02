'use client'

import { formatDate } from 'date-fns'

import { MovieQuery } from '@/generated/graphql'
import useBreadcrumbs from '@/hooks/use-breadcrumbs'

import MovieBackdrop from '../../components/movie-backdrop/movie-backdrop'
import MoviePoster from '../../components/movie-poster/movie-poster'
import { MovieActions } from './movie-actions'
import { MovieMetadata } from './movie-metadata'

export default function Movie({ movie }: { movie: MovieQuery['movies_by_pk'] }) {
    useBreadcrumbs([movie?.title ?? 'Unknown Movie'])

    if (!movie) {
        return null
    }

    return (
        <>
            <MovieBackdrop backdropId={movie.backdrop_id} />

            <section className="mx-auto my-4 max-w-7xl p-5 space-y-6">
                <div className="flex flex-row items-end gap-4 md:items-start">
                    {/* Movie Poster */}
                    <aside className="-mt-20 lg:-mt-32 w-2/5 md:w-3/12 shrink-0">
                        <MoviePoster posterId={movie.poster_id} posterSize="full" />
                    </aside>

                    {/* Movie Info - Desktop */}
                    <article className="flex w-3/5 md:w-9/12 flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            {/* Release Date */}
                            <time className="text-xs text-muted-foreground">
                                {formatDate(new Date(movie.release_date), 'MMMM do, yyyy')}
                            </time>

                            {/* Title */}
                            <h1 className="text-lg font-bold leading-tight md:text-4xl">
                                {movie.title}
                            </h1>
                        </div>

                        {/* Metadata (Certification, Genres, Runtime) - Desktop Only */}
                        <div className="hidden md:block">
                            <MovieMetadata
                                certification={movie.certification}
                                genres={movie.genres}
                                runtime={movie.runtime}
                            />
                        </div>

                        {/* Overview - Desktop Only */}
                        <p className="hidden md:block text-sm leading-6 text-muted-foreground">
                            {movie.overview}
                        </p>

                        {/* Action Buttons - Desktop Only */}
                        <div className="hidden md:block">
                            <MovieActions />
                        </div>
                    </article>
                </div>

                {/* Mobile Content */}
                <div className="space-y-3 md:hidden">
                    {/* Action Buttons - Mobile */}
                    <MovieActions />

                    {/* Overview - Mobile */}
                    <p className="text-sm leading-6 text-muted-foreground">{movie.overview}</p>

                    {/* Metadata (Certification, Genres, Runtime) - Mobile */}
                    <MovieMetadata
                        certification={movie.certification}
                        genres={movie.genres}
                        runtime={movie.runtime}
                    />
                </div>
            </section>
        </>
    )
}
