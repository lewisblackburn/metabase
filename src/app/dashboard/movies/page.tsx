'use client';

import Link from 'next/link';

import Grid from '@/components/shared/grid';
import Poster from '@/components/shared/poster';
import { Container } from '@/components/ui/container';
import { GC_TIME, MAX_LIMIT, STALE_TIME } from '@/constants/api.constant';
import { MOVIES_DATA } from '@/constants/fakedb.constant';
import MoviesSidebar from '@/features/movies/components/movies-sidebar';
import { useInfiniteGetMoviesQuery } from '@/generated/graphql';

export default function MoviePage() {
    const { data, error, isLoading } = useInfiniteGetMoviesQuery(
        {
            limit: MAX_LIMIT
        },
        {
            queryKey: ['movies'],
            initialPageParam: { offset: 0 },
            getNextPageParam: (lastPage, pages) => {
                // NOTE: If the last page has fewer movies than the limit, there are no more pages
                return lastPage.movies.length === MAX_LIMIT ? { offset: pages.length * MAX_LIMIT } : undefined;
            },
            staleTime: STALE_TIME,
            gcTime: GC_TIME
        }
    );

    console.log(data, error);

    return (
        <MoviesSidebar>
            <Container size='full'>
                <Grid>
                    {MOVIES_DATA.map((movie) => (
                        <Link key={movie.id} href={`movies/${movie.id}`}>
                            <Poster title={movie.title} image={movie.poster} />
                        </Link>
                    ))}
                </Grid>
            </Container>
        </MoviesSidebar>
    );
}
