'use client';

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

    const { data, isLoading } = useInfiniteGetMoviesQuery(
        {
            where,
            order_by,
            limit: MAX_LIMIT
        },
        {
            initialPageParam: { offset: 0 },
            // NOTE: If the last page has fewer movies than the limit, there are no more pages
            getNextPageParam: (lastPage, pages) =>
                lastPage.movies.length === MAX_LIMIT ? { offset: pages.length * MAX_LIMIT } : undefined,
            gcTime: 0,
            staleTime: 0
        }
    );
    //   const loadMoreRef = useIntersectionObserver(
    //     () => hasNextPage && fetchNextPage(),
    //     { rootMargin: '200px' }
    //   );

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
                {/* <div ref={loadMoreRef} /> */}
            </Container>
        </MoviesSidebar>
    );
}
