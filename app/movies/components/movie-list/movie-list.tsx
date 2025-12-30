'use client'

import { Fragment } from 'react/jsx-runtime'

import MediaGrid from '@/components/media-grid'
import { useInfiniteMoviesQuery } from '@/generated/graphql'
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll'

import { MovieCard } from '../movie-card/movie-card'
import MovieListError from './movie-list-error'
import MovieListSkeleton from './movie-list-skeleton'

const PAGE_SIZE = 50

export default function MovieList() {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, error } =
        useInfiniteMoviesQuery(
            {
                limit: PAGE_SIZE,
            },
            {
                initialPageParam: {
                    offset: 0,
                    limit: PAGE_SIZE,
                },
                getNextPageParam: (lastPage, allPages) => {
                    const totalFetched = allPages.length * PAGE_SIZE
                    const total = lastPage.movies.length ?? 0

                    if (totalFetched >= total) return undefined

                    return {
                        offset: totalFetched,
                        limit: PAGE_SIZE,
                    }
                },
            },
        )

    const loadMoreRef = useInfiniteScroll({
        enabled: hasNextPage && !isFetchingNextPage,
        onLoadMore: fetchNextPage,
    })

    if (isError) return <MovieListError />

    const movies = data?.pages.flatMap(page => page.movies) || []

    return (
        <Fragment>
            <MediaGrid>
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </MediaGrid>
            <div ref={loadMoreRef}>
                {isFetchingNextPage && <MovieListSkeleton itemsPerPage={PAGE_SIZE} />}
            </div>
        </Fragment>
    )
}
