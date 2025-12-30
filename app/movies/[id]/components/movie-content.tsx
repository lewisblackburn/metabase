'use client'

import { formatDate } from 'date-fns'

import { MovieQuery } from '@/generated/graphql'

import MoviePoster from '../../components/movie-poster/movie-poster'
import { MovieActions } from './movie-actions'
import { MovieMetadata } from './movie-metadata'

interface MovieContentProps {
    movie: MovieQuery['movies_by_pk']
}

export default function MovieContent({ movie }: MovieContentProps) {
    if (!movie) {
        return null
    }

    return (
        <>
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
                        <MovieActions movie={movie} />
                    </div>
                </article>
            </div>

            {/* Mobile Content */}
            <div className="space-y-3 md:hidden">
                {/* Action Buttons - Mobile */}
                <MovieActions movie={movie} />

                {/* Overview - Mobile */}
                <p className="text-sm leading-6 text-muted-foreground">{movie.overview}</p>

                {/* Metadata (Certification, Genres, Runtime) - Mobile */}
                <MovieMetadata
                    certification={movie.certification}
                    genres={movie.genres}
                    runtime={movie.runtime}
                />
            </div>
        </>
    )
}
