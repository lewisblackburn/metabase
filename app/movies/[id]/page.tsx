import { getUserLists } from '@/lib/actions/lists/get-user-lists'
import { getMovie } from '@/lib/actions/movies/get-movie'

import Movie from './components/movie'
import { MovieBreadcrumbs } from './components/movie-breadcrumbs'

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const [movie, userLists] = await Promise.all([getMovie({ id }), getUserLists()])

    return (
        <>
            <MovieBreadcrumbs movieTitle={movie?.title ?? 'Unknown Movie'} />
            <Movie movie={movie} lists={userLists} />
        </>
    )
}
