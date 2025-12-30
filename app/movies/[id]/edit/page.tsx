export default async function EditMoviePage({ params }: { params: Promise<{ id: string }> }) {
    // TODO: use React's cache function to cache certain requests
    // const { id } = await params
    // const nhost = await createNhostClient()
    // TODO: tansstack query
    // const {
    //     body: { data },
    // } = await nhost.graphql.request<MovieQuery, MovieQueryVariables>(MovieDocument, { id })
    // const movie = data?.movies_by_pk

    return (
        <>
            {/* <MovieBreadcrumbs movieTitle={movie?.title ?? 'Unknown Movie'} /> */}
            {/* <div>edit movie page</div> */}
        </>
    )
}
