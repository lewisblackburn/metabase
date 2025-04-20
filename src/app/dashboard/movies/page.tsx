'use client';

import { useEffect, useMemo } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Grid from '@/components/shared/grid';
import Poster from '@/components/shared/poster';
import { Container } from '@/components/ui/container';
import { MAX_LIMIT } from '@/constants/api.constant';
import MoviesSidebar from '@/features/movies/components/movies-sidebar';
import MoviesSkeleton from '@/features/movies/components/movies-skeleton';
import { useIncrementMovieViews } from '@/features/movies/hooks/useIncrementMovieViews';
import { useMovieFilters } from '@/features/movies/hooks/useMovieFilters';
import { GetMoviesQuery, useInfiniteGetMoviesQuery } from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';

import { useInView } from 'react-intersection-observer';

function MovieCard({ movie }: { movie: GetMoviesQuery['movies'][number] }) {
    const router = useRouter();
    const { mutate: bumpViews } = useIncrementMovieViews(movie.id);

    if (!movie) return null;

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        bumpViews({ id: movie.id });
        router.push(`movies/${movie.id}`);
    };

    return (
        <Link key={movie.id} href={`movies/${movie.id}`} onClick={handleClick}>
            <Poster title={movie.title} image={movie.poster} />
        </Link>
    );
}

export default function MoviePage() {
    const { where, order_by } = useMovieFilters();

    const vars = useMemo(
        () => ({
            where,
            order_by,
            limit: MAX_LIMIT
        }),
        [where, order_by]
    );

    const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteGetMoviesQuery(vars, {
        initialPageParam: { offset: 0 },
        getPreviousPageParam: (_firstPage, pages) => {
            const prevPage = pages.length - 1;
            const hasPrevious = prevPage > 0;
            return hasPrevious ? { offset: prevPage * MAX_LIMIT } : undefined;
        },
        getNextPageParam: (lastPage, pages) => {
            const nextPage = pages.length * MAX_LIMIT;
            const hasMore = lastPage.movies.length === MAX_LIMIT;
            return hasMore ? { offset: nextPage } : undefined;
        },
        gcTime: 0,
        staleTime: 0
    });

    const { ref: loadMoreRef, inView } = useInView({ threshold: 0.5 });

    const handleLoadMore = () => {
        if (hasNextPage) fetchNextPage();
    };

    useEffect(() => {
        if (inView) handleLoadMore();
    }, [inView]);

    if (isLoading)
        return (
            <MoviesSidebar>
                <MoviesSkeleton />
            </MoviesSidebar>
        );

    return (
        <MoviesSidebar>
            <Container size='full'>
                <Grid>
                    {data?.pages?.flatMap((page) =>
                        page.movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                    )}
                </Grid>
                {/* NOTE: load more films when in view */}
                <Button
                    ref={loadMoreRef}
                    onClick={handleLoadMore}
                    className='mt-5 w-full'
                    size='lg'
                    disabled={!hasNextPage || isFetchingNextPage}>
                    {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </Button>
            </Container>
        </MoviesSidebar>
    );
}
