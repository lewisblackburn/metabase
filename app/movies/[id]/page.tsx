'use client'
import { use } from 'react'

import { useMovieQuery } from '@/generated/graphql'
import { CACHE_TAGS } from '@/lib/utils/cache'

import Movie from './components/movie'
import { MovieBreadcrumbs } from './components/movie-breadcrumbs'

// meta data for title and description

export default function MoviePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)

    const { data } = useMovieQuery({ id }, { enabled: true, queryKey: [CACHE_TAGS.MOVIE, { id }] })
    const movie = data?.movies_by_pk

    return (
        <>
            <MovieBreadcrumbs movieTitle={movie?.title ?? 'Unknown Movie'} />
            <Movie movie={movie} />
        </>
    )
}
