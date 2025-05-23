'use client';

import { Fragment, useEffect, useMemo } from 'react';

import Grid from '@/components/shared/grid';
import List from '@/components/shared/list';
import { MAX_LIMIT } from '@/constants/api.constant';
import { MovieCard } from '@/features/movies/components/movie-card';
import MoviesSidebar from '@/features/movies/components/movies-sidebar';
import MoviesSkeleton from '@/features/movies/components/movies-skeleton';
import { useMovieFilters } from '@/features/movies/hooks/use-movie-filters';
import { useInfiniteGetMoviesQuery } from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/registry/new-york-v4/ui/toggle-group';
import { RootState } from '@/store/store';
import { setViewMode } from '@/store/view-mode.slice';
import { useQueryClient } from '@tanstack/react-query';

import { LayoutGrid, List as ListIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';

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
                        className='inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
                        <ToggleGroupItem value='grid' asChild>
                            <Button
                                className='rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10'
                                variant='outline'
                                size='icon'
                                aria-label='Grid view'
                                onClick={() => dispatch(setViewMode('grid'))}>
                                <LayoutGrid size={16} aria-hidden='true' />
                            </Button>
                        </ToggleGroupItem>
                        <ToggleGroupItem value='list' asChild>
                            <Button
                                className='rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10'
                                variant='outline'
                                size='icon'
                                aria-label='List view'
                                onClick={() => dispatch(setViewMode('list'))}>
                                <ListIcon size={16} aria-hidden='true' />
                            </Button>
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
