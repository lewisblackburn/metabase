'use client';

import { useEffect, useMemo } from 'react';

import { useParams } from 'next/navigation';

import { MAX_LIMIT } from '@/constants/api.constant';
import Review from '@/features/reviews/components/review';
import { Order_By, useInfiniteGetMovieReviewsQuery } from '@/generated/graphql';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';
import { Timeline } from '@/registry/new-york-v4/ui/timeline';

import { useInView } from 'react-intersection-observer';

function MovieReviewsSkeleton() {
    return (
        <div className='space-y-4'>
            {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className='h-32 w-full' />
            ))}
        </div>
    );
}

export default function MovieReviews() {
    const params = useParams<{ id: string }>();
    const { ref: loadMoreRef, inView } = useInView({ threshold: 0.5 });

    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteGetMovieReviewsQuery(
        {
            where: {
                movie_id: {
                    _eq: params?.id
                },
                review: {
                    _is_null: false
                }
            },
            limit: MAX_LIMIT,
            offset: 0,
            orderBy: {
                updated_at: Order_By.Desc
            }
        },
        {
            enabled: !!params?.id,
            initialPageParam: { offset: 0 },
            getNextPageParam: (lastPage, pages) => {
                const nextOffset = pages.length * MAX_LIMIT;
                return lastPage.user_movie_statuses.length === MAX_LIMIT ? { offset: nextOffset } : undefined;
            }
        }
    );

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    const allReviews = useMemo(() => {
        return data?.pages.flatMap((page) => page.user_movie_statuses) || [];
    }, [data]);

    if (isLoading) {
        return <MovieReviewsSkeleton />;
    }

    if (allReviews.length === 0) {
        return <div>No reviews yet</div>;
    }

    return (
        <div className='space-y-4'>
            <Timeline>
                {allReviews.map((review) => (
                    <Review
                        key={`${review.user_id}-${review.updated_at}`}
                        id={review.user_id}
                        user={{
                            id: review.user_id,
                            name: review.user.displayName || 'Anonymous',
                            initials:
                                (review.user.displayName || 'A')
                                    .split(' ')
                                    .map((n) => n[0])
                                    .join('') || 'A',
                            avatar: review.user.avatarUrl || '',
                            createdAt: new Date(review.user.createdAt)
                        }}
                        rating={review.rating || 0}
                        createdAt={new Date(review.updated_at)}
                        content={review.review || ''}
                    />
                ))}
            </Timeline>
            <div ref={loadMoreRef} className='h-4 w-full' />
        </div>
    );
}
