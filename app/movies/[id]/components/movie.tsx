import { MovieQuery } from '@/generated/graphql'

import MovieBackdrop from '../../components/movie-backdrop/movie-backdrop'
import MovieContent from './movie-content'
import MovieTabsContainer from './tabs/movie-tabs-container'

interface MovieProps {
    movie: MovieQuery['movies_by_pk']
}

export default function Movie({ movie }: MovieProps) {
    return (
        <>
            <MovieBackdrop backdropId={movie?.backdrop_id} />
            <section className="mx-auto my-4 max-w-7xl p-5 space-y-6">
                <MovieContent movie={movie} />
                <MovieTabsContainer movieId={movie?.id} />
            </section>
        </>
    )
}
