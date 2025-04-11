'use client';

import Link from 'next/link';

import Grid from '@/components/shared/grid';
import Poster from '@/components/shared/poster';
import { Container } from '@/components/ui/container';
import { MAX_LIMIT } from '@/constants/api.constant';
import MoviesSkeleton from '@/features/movies/components/movies-skeleton';
import { useInfiniteGetMoviesQuery } from '@/generated/graphql';

export default function MoviePage() {
    const { data, isLoading } = useInfiniteGetMoviesQuery(
        { limit: MAX_LIMIT },
        {
            queryKey: ['movies'],
            initialPageParam: { offset: 0 },
            // NOTE: If the last page has fewer movies than the limit, there are no more pages
            getNextPageParam: (lastPage, pages) =>
                lastPage.movies.length === MAX_LIMIT ? { offset: pages.length * MAX_LIMIT } : undefined
        }
    );

    if (isLoading) return <MoviesSkeleton />;

    return (
        <Container size='full'>
            <Grid>
                {data?.pages?.flatMap((page) =>
                    page.movies.map((movie) => (
                        <Link key={movie.id} href={`movies/${movie.id}`}>
                            <Poster title={movie.title} image={movie.poster} />
                        </Link>
                    ))
                )}
            </Grid>
        </Container>
    );
}
