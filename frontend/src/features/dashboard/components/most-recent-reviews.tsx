'use client';

import Link from 'next/link';

import Artwork from '@/components/shared/artwork';
import Cover from '@/components/shared/cover';
import Poster from '@/components/shared/poster';
import { UserHoverCard } from '@/components/user-hover-card';
import Rating from '@/features/reviews/components/rating';
import { Object_Types_Enum, useGetMostRecentReviewsQuery } from '@/generated/graphql';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

import { formatDistanceToNow } from 'date-fns';
import { UserIcon } from 'lucide-react';

function MostRecentReviewsSkeleton() {
    return (
        <div className='space-y-2'>
            {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className='h-24 w-full' />
            ))}
        </div>
    );
}

export default function MostRecentReviews() {
    const { data: reviews, isLoading } = useGetMostRecentReviewsQuery({
        limit: 5
    });

    if (isLoading) return <MostRecentReviewsSkeleton />;
    if (reviews?.all_reviews.length === 0) return <div>No reviews found</div>;

    return (
        <div>
            <div className='mb-4'>
                <h2 className='text-base font-medium'>Recent Reviews</h2>
            </div>

            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                {reviews?.all_reviews.map((review) => (
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
                                <p className='text-muted-foreground line-clamp-2 text-xs'>{review.review}</p>
                            </div>
                        </Link>

                        <div className='mt-2 flex items-center gap-2 border-t pt-2'>
                            <Avatar className='size-5 cursor-pointer'>
                                <AvatarImage
                                    src={review.user?.avatarUrl}
                                    alt={`@${review.user?.displayName ?? 'user'}`}
                                />
                                <AvatarFallback>
                                    <UserIcon className='size-2.5' />
                                    <span className='sr-only'>@{review.user?.displayName}</span>
                                </AvatarFallback>
                            </Avatar>
                            <div className='flex flex-col'>
                                <UserHoverCard
                                    user={{
                                        id: review.user_id,
                                        displayName: review.user?.displayName ?? 'Unknown User',
                                        avatarUrl: review.user?.avatarUrl ?? '',
                                        createdAt: review.user?.createdAt ?? new Date().toISOString()
                                    }}>
                                    <span className='hover:text-primary text-xs font-medium'>
                                        @{review.user?.displayName}
                                    </span>
                                </UserHoverCard>
                                <p className='text-muted-foreground text-[10px]'>
                                    {formatDistanceToNow(new Date(review.updated_at), { addSuffix: true })}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
