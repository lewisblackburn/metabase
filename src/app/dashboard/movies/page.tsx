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
        <Link key={movie.id} href={`movies/${movie.id}`} scroll={false} onClick={handleClick}>
            <Poster title={movie.title} image={movie.poster} />
        </Link>
    );
}

export default function MoviesPage() {
    const { where, order_by } = useMovieFilters();

    const vars = useMemo(() => ({ where, order_by, limit: MAX_LIMIT }), [where, order_by]);

    const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteGetMoviesQuery(vars, {
        initialPageParam: { offset: 0 },
        getPreviousPageParam: (_firstPage, pages) => {
            const prevPage = pages.length - 1;
            return prevPage > 0 ? { offset: prevPage * MAX_LIMIT } : undefined;
        },
        getNextPageParam: (lastPage, pages) => {
            const nextOffset = pages.length * MAX_LIMIT;
            return lastPage.movies.length === MAX_LIMIT ? { offset: nextOffset } : undefined;
        }
    });

    const { ref: loadMoreRef, inView } = useInView({ threshold: 0.5 });

    const handleLoadMore = () => {
        if (hasNextPage) fetchNextPage();
    };

    useEffect(() => {
        if (inView) handleLoadMore();
    }, [inView]);

    if (isLoading) {
        return (
            <div className='flex'>
                <aside className='sticky top-[4rem] h-[calc(100vh-4rem)] w-[350px] self-start overflow-auto'>
                    <MoviesSidebar />
                </aside>
                <div className='flex-1'>
                    <MoviesSkeleton />
                </div>
            </div>
        );
    }

    return (
        <div className='flex'>
            <aside className='sticky top-[4rem] h-[calc(100vh-4rem)] w-[350px] self-start overflow-auto'>
                <MoviesSidebar />
            </aside>

            <main className='flex-1'>
                <Container size='full'>
                    <Grid>
                        {data?.pages.flatMap((page) =>
                            page.movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                        )}
                    </Grid>

                    <Button
                        ref={loadMoreRef}
                        onClick={handleLoadMore}
                        className='mt-5 w-full'
                        size='lg'
                        disabled={!hasNextPage || isFetchingNextPage}>
                        {isFetchingNextPage ? 'Loading...' : 'Load More'}
                    </Button>
                </Container>
            </main>
        </div>
    );
}
