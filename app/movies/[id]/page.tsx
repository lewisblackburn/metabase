import { MovieDocument, MovieQuery, MovieQueryVariables } from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'

import Movie from './components/movie'

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const nhost = await createNhostClient()
    const {
        body: { data },
    } = await nhost.graphql.request<MovieQuery, MovieQueryVariables>(MovieDocument, { id })
    const movie = data?.movies_by_pk

    return <Movie movie={movie} />
}
