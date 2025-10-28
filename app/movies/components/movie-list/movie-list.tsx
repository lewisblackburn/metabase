'use client'

import { Fragment } from 'react/jsx-runtime'

import MediaGrid from '@/components/media-grid'
import { useInfiniteMovies } from '@/hooks/use-infinite-movies'
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll'

import { MovieCard } from '../movie-card/movie-card'
import MovieListError from './movie-list-error'
import MovieListSkeleton from './movie-list-skeleton'

const ITEMS_PER_PAGE = 50

export default function MovieList() {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } =
        useInfiniteMovies({ itemsPerPage: ITEMS_PER_PAGE })

    const loadMoreRef = useInfiniteScroll({
        enabled: hasNextPage && !isFetchingNextPage,
        onLoadMore: fetchNextPage,
    })

    if (isLoading) return <MovieListSkeleton itemsPerPage={ITEMS_PER_PAGE} />
    if (isError) return <MovieListError />

    const movies = data?.pages.flat() || []

    return (
        <Fragment>
            <MediaGrid>
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </MediaGrid>
            <div ref={loadMoreRef}>
                {isFetchingNextPage && <MovieListSkeleton itemsPerPage={ITEMS_PER_PAGE} />}
            </div>
        </Fragment>
    )
}
