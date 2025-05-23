'use client';

import React, { useEffect, useMemo } from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import Artwork from '@/components/shared/artwork';
import Cover from '@/components/shared/cover';
import Poster from '@/components/shared/poster';
import Rating from '@/components/shared/rating';
import { Object_Types_Enum, useInfiniteGetMostRecentReviewsQuery } from '@/generated/graphql';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

import { useInView } from 'react-intersection-observer';

const MAX_LIMIT = 10;

export default function UserReviews() {
    const params = useParams<{ id: string }>();
    const userId = params?.id;
    const { ref, inView } = useInView();

    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteGetMostRecentReviewsQuery(
        {
            limit: MAX_LIMIT,
            offset: 0
        },
        {
            initialPageParam: { offset: 0 },
            getNextPageParam: (lastPage, pages) => {
                const nextOffset = pages.length * MAX_LIMIT;
                return lastPage.all_reviews.length === MAX_LIMIT ? { offset: nextOffset } : undefined;
            }
        }
    );

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    const allReviews = useMemo(() => {
        return data?.pages.flatMap((page) => page.all_reviews) || [];
    }, [data]);

    const userReviews = useMemo(() => {
        return allReviews.filter((review) => review.user_id === userId);
    }, [allReviews, userId]);

    if (isLoading) return <UserReviewsSkeleton />;
    if (userReviews.length === 0) return <div>No reviews found</div>;

    return (
        <div className='space-y-4'>
            <h2 className='text-lg font-semibold'>Reviews</h2>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                {userReviews.map((review) => (
                    <div
                        key={`${review.user_id}-${review.object_id}`}
                        className='group bg-background relative overflow-hidden rounded-md border p-3 transition-all hover:shadow-sm'>
                        <Link
                            href={`/dashboard/${review.type?.toLowerCase() ?? 'movie'}s/${review.object_id}`}
                            className='flex gap-3'>
                            <div className='relative h-16 w-16 shrink-0 overflow-hidden rounded-md'>
                                {review.type === Object_Types_Enum.Movie && (
                                    <Poster title={review.title ?? ''} image={review.image ?? ''} />
                                )}
                                {review.type === Object_Types_Enum.Song && (
                                    <Artwork title={review.title ?? ''} image={review.image ?? ''} />
                                )}
                                {review.type === Object_Types_Enum.Book && (
                                    <Cover title={review.title ?? ''} image={review.image ?? ''} />
                                )}
                            </div>
                            <div className='flex flex-1 flex-col gap-1'>
                                <div className='flex items-center justify-between'>
                                    <p className='group-hover:text-primary text-sm font-medium'>{review.title}</p>
                                    <Rating rating={review.rating ?? 0} />
                                </div>
                                {review.review && (
                                    <p className='text-muted-foreground line-clamp-2 text-xs'>{review.review}</p>
                                )}
                            </div>
                        </Link>
                    </div>
                ))}
                <div ref={ref} className='h-4' />
            </div>
        </div>
    );
}

function UserReviewsSkeleton() {
    return (
        <div className='space-y-4'>
            <Skeleton className='h-6 w-32' />
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className='flex flex-col gap-3 rounded-md border p-3'>
                        <div className='flex gap-3'>
                            <Skeleton className='h-16 w-16 shrink-0' />
                            <div className='flex flex-1 flex-col gap-1'>
                                <div className='flex items-center justify-between'>
                                    <Skeleton className='h-4 w-32' />
                                    <Skeleton className='h-4 w-16' />
                                </div>
                                <Skeleton className='h-8 w-full' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2 border-t pt-2'>
                            <Skeleton className='size-5 rounded-full' />
                            <div className='flex flex-col gap-1'>
                                <Skeleton className='h-3 w-24' />
                                <Skeleton className='h-2 w-16' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
