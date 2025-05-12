import { useEffect } from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import Grid from '@/components/shared/grid';
import Poster from '@/components/shared/poster';
import { MAX_LIMIT } from '@/constants/api.constant';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import MoviesSkeleton from '@/features/movies/components/movies-skeleton';
import { useInfiniteGetMoviesQuery } from '@/generated/graphql';
import { User_Movie_Status_Types_Enum } from '@/generated/graphql';
import { useUserId } from '@nhost/nextjs';

import { useInView } from 'react-intersection-observer';

interface UserMoviesListProps {
    status: User_Movie_Status_Types_Enum | 'all';
}

export default function UserMoviesList({ status }: UserMoviesListProps) {
    const params = useParams<{ id: string }>();
    const userId = params?.id;
    const { ref, inView } = useInView();

    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteGetMoviesQuery(
        {
            where: {
                user_movie_statuses: {
                    user_id: { _eq: userId },
                    ...(status !== 'all' && { status: { _eq: status } })
                }
            },
            limit: MAX_LIMIT
        },
        {
            enabled: !!userId,
            initialPageParam: 0,
            getNextPageParam: (lastPage, pages) => {
                if (lastPage.movies.length < MAX_LIMIT) return undefined;
                return pages.length * MAX_LIMIT;
            }
        }
    );

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    if (isLoading) return <MoviesSkeleton />;

    const movies = data?.pages.flatMap((page) => page.movies) || [];

    if (movies.length === 0) return <div>No movies found</div>;

    return (
        <>
            <Grid>
                {movies.map((movie) => (
                    <Link key={movie.id} href={`/dashboard/${OBJECT_TYPE.MOVIE.path}/${movie.id}`} scroll={false}>
                        <Poster image={movie.poster} title={movie.title} />
                    </Link>
                ))}
            </Grid>
            <div ref={ref} className='h-4 w-full' />
            {isFetchingNextPage && <MoviesSkeleton />}
        </>
    );
}
