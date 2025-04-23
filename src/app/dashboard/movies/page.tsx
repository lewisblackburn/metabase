'use client';

import { Fragment, useEffect, useMemo, useRef } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { BlurFade } from '@/components/magicui/blur-fade';
import Grid from '@/components/shared/grid';
import Poster from '@/components/shared/poster';
import { MAX_LIMIT } from '@/constants/api.constant';
import MoviesSidebar from '@/features/movies/components/movies-sidebar';
import { useIncrementMovieViews } from '@/features/movies/hooks/useIncrementMovieViews';
import { useMovieFilters } from '@/features/movies/hooks/useMovieFilters';
import { GetMoviesQuery, useInfiniteGetMoviesQuery } from '@/generated/graphql';

import { useInView } from 'react-intersection-observer';

function MovieCard({ movie, index }: { index: number; movie: GetMoviesQuery['movies'][number] }) {
    const router = useRouter();
    const { mutate: bumpViews } = useIncrementMovieViews(movie.id);
    const firstRender = useRef(true);
    if (!movie) return null;

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        bumpViews({ id: movie.id });
        router.push(`movies/${movie.id}`);
    };

    return (
        <Link href={`movies/${movie.id}`} scroll={false} onClick={handleClick}>
            <Poster title={movie.title} image={movie.poster} />
        </Link>
    );
}

export default function MoviesPage() {
    const { where, order_by } = useMovieFilters();

    const vars = useMemo(() => ({ where, order_by, limit: MAX_LIMIT }), [where, order_by]);

    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteGetMoviesQuery(vars, {
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

    // NOTE: This is handle by the poster component
    if (isLoading) return null;

    return (
        <Fragment>
            <div className='mb-5 flex items-center justify-between'>
                <div>
                    <h2 className='font-mono text-2xl font-bold'>Discover</h2>
                    <p>Explore a wide-range of movies with filters and sorting options.</p>
                </div>
                <MoviesSidebar />
            </div>

            <Grid>
                {data?.pages.flatMap((page) =>
                    page.movies.map((movie, index) => <MovieCard key={movie.id} movie={movie} index={index} />)
                )}
            </Grid>
            <div ref={loadMoreRef} />
        </Fragment>
    );
}
