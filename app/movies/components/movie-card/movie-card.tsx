import Link from 'next/link'

import type { MoviesQuery } from '@/generated/graphql'

import MoviePoster from '../movie-poster/movie-poster'

interface MovieCardProps {
    movie: NonNullable<MoviesQuery['movies']>[number]
}

export function MovieCard({ movie }: MovieCardProps) {
    return (
        <Link href={`/movies/${movie.id}`} className="block w-full">
            <MoviePoster posterId={movie.poster_id} />
        </Link>
    )
}
