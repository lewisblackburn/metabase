'use client';

import { Fragment, useEffect, useMemo, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Grid from '@/components/shared/grid';
import List from '@/components/shared/list';
import Poster from '@/components/shared/poster';
import { MAX_LIMIT } from '@/constants/api.constant';
import MoviesSidebar from '@/features/movies/components/movies-sidebar';
import MoviesSkeleton from '@/features/movies/components/movies-skeleton';
import { useIncrementMovieViews } from '@/features/movies/hooks/use-increment-movie-views';
import { useMovieFilters } from '@/features/movies/hooks/use-movie-filters';
import { setViewMode } from '@/features/movies/store/view-mode.slice';
import { GetMoviesQuery, useInfiniteGetMoviesQuery } from '@/generated/graphql';
import { ToggleGroup, ToggleGroupItem } from '@/registry/new-york-v4/ui/toggle-group';
import { RootState } from '@/store/store';

import { LayoutGrid, List as ListIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';

function MovieCard({ movie, viewMode }: { movie: GetMoviesQuery['movies'][number]; viewMode: 'grid' | 'list' }) {
    const router = useRouter();
    const { mutate: bumpViews } = useIncrementMovieViews(movie.id);

    if (!movie) return null;

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        bumpViews({ id: movie.id });
        router.push(`movies/${movie.id}`);
    };

    if (viewMode === 'list') {
        return (
            <Link href={`movies/${movie.id}`} scroll={false} onClick={handleClick}>
                <div className='hover:bg-muted/50 flex items-center gap-4 rounded-lg border p-4 transition-colors'>
                    <div className='relative aspect-[2/3] w-24 shrink-0 overflow-hidden rounded-md'>
                        <Poster title={movie.title} image={movie.poster} />
                    </div>
                    <div className='min-w-0 flex-1'>
                        <h3 className='truncate text-lg font-semibold'>{movie.title}</h3>
                        {movie.overview && (
                            <p className='text-muted-foreground mt-1 line-clamp-2 text-sm'>{movie.overview}</p>
                        )}
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link href={`movies/${movie.id}`} scroll={false} onClick={handleClick}>
            <Poster title={movie.title} image={movie.poster} />
        </Link>
    );
}

export default function MoviesPage() {
    const dispatch = useDispatch();
    const viewMode = useSelector((state: RootState) => state.viewMode.mode);
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

    const allMovies = useMemo(() => {
        return data?.pages.flatMap((page) => page.movies) || [];
    }, [data]);

    const Container = viewMode === 'list' ? List : Grid;

    return (
        <div className='container mx-auto py-6'>
            <div className='mb-6 flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>Movies</h1>
                <div className='flex items-center gap-4'>
                    <ToggleGroup
                        type='single'
                        value={viewMode}
                        onValueChange={(value) => value && dispatch(setViewMode(value as 'grid' | 'list'))}
                        className='bg-muted p-1'>
                        <ToggleGroupItem value='grid' aria-label='Grid view' className='data-[state=on]:bg-background'>
                            <LayoutGrid className='h-4 w-4' />
                        </ToggleGroupItem>
                        <ToggleGroupItem value='list' aria-label='List view' className='data-[state=on]:bg-background'>
                            <ListIcon className='h-4 w-4' />
                        </ToggleGroupItem>
                    </ToggleGroup>
                    <MoviesSidebar />
                </div>
            </div>
            {isLoading ? (
                <MoviesSkeleton viewMode={viewMode} />
            ) : (
                <Container>
                    {allMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} viewMode={viewMode} />
                    ))}
                </Container>
            )}
            <div ref={loadMoreRef} />
        </div>
    );
}
