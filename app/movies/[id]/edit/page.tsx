import { MovieDocument, MovieQuery, MovieQueryVariables } from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'

import { MovieBreadcrumbs } from '../components/movie-breadcrumbs'

export default async function EditMoviePage({ params }: { params: Promise<{ id: string }> }) {
    // TODO: use React's cache function to cache certain requests
    const { id } = await params
    const nhost = await createNhostClient()
    const {
        body: { data },
    } = await nhost.graphql.request<MovieQuery, MovieQueryVariables>(MovieDocument, { id })
    const movie = data?.movies_by_pk

    return (
        <>
            <MovieBreadcrumbs movieTitle={movie?.title ?? 'Unknown Movie'} />
            <div>edit movie page</div>
        </>
    )
}
