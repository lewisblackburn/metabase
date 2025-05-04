'use client';

import { useEffect, useMemo } from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import Rating from '@/components/shared/rating';
import { MAX_LIMIT } from '@/constants/api.constant';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import {
    Activity_Types_Enum,
    GetUserActivitiesQuery,
    Order_By,
    useInfiniteGetUserActivitiesQuery
} from '@/generated/graphql';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';
import { useUserId } from '@nhost/nextjs';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { UserIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

dayjs.extend(relativeTime);

function ActivitySkeleton() {
    return (
        <div className='flex flex-col gap-2'>
            {Array(3)
                .fill(0)
                .map((_, i) => (
                    <div key={i} className='flex flex-wrap items-center gap-1'>
                        <Skeleton className='size-6 rounded-full' />
                        <Skeleton className='h-4 w-24' />
                        <Skeleton className='h-4 w-16' />
                        <Skeleton className='h-4 w-32' />
                        <Skeleton className='ml-auto h-3 w-20 sm:ml-auto' />
                    </div>
                ))}
        </div>
    );
}

export default function UserActivity() {
    const params = useParams<{ id: string }>();
    const userId = params?.id;
    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteGetUserActivitiesQuery(
        {
            where: { user_id: { _eq: userId } },
            order_by: { created_at: Order_By.Desc },
            limit: MAX_LIMIT
        },
        {
            initialPageParam: { offset: 0 },
            getPreviousPageParam: (_firstPage, pages) => {
                const prevPage = pages.length - 1;
                return prevPage > 0 ? { offset: prevPage * MAX_LIMIT } : undefined;
            },
            getNextPageParam: (lastPage, pages) => {
                const nextOffset = pages.length * MAX_LIMIT;
                return lastPage.user_activities.length === MAX_LIMIT ? { offset: nextOffset } : undefined;
            },
            enabled: !!userId,
            staleTime: 0,
            gcTime: 0
        }
    );

    const { ref: loadMoreRef, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView && hasNextPage) fetchNextPage();
    }, [inView, fetchNextPage, hasNextPage]);

    const allActivities = useMemo(() => data?.pages.flatMap((page) => page.user_activities) || [], [data]);

    if (isLoading) return <ActivitySkeleton />;

    const renderActivity = (activity: GetUserActivitiesQuery['user_activities'][number]) => {
        const { activity_type: type, details, object_type, object_id, object_title } = activity;
        const baseLink = (
            <Link href={`/dashboard/${OBJECT_TYPE[object_type].path}/${object_id}`} className='min-w-0 truncate'>
                <span className='truncate'>{object_title}</span>
            </Link>
        );

        switch (type) {
            case Activity_Types_Enum.RatingAdded:
            case Activity_Types_Enum.RatingChanged:
                return (
                    <>
                        <span className='text-muted-foreground shrink-0'>rated</span>
                        {baseLink}
                        <div className='ml-1 shrink-0'>
                            <Rating rating={details.to} />
                        </div>
                    </>
                );
            case Activity_Types_Enum.RatingDeleted:
                return (
                    <>
                        <span className='text-muted-foreground shrink-0'>removed their rating from</span>
                        {baseLink}
                    </>
                );
            case Activity_Types_Enum.StatusChanged:
                return (
                    <>
                        <span className='text-muted-foreground shrink-0'>marked</span>
                        {baseLink}
                        <span className='text-muted-foreground shrink-0'>as {details.to}</span>
                    </>
                );
            case Activity_Types_Enum.StatusDeleted:
                return (
                    <>
                        <span className='text-muted-foreground shrink-0'>removed their status from</span>
                        {baseLink}
                    </>
                );
            case Activity_Types_Enum.Favourited:
                return (
                    <>
                        <span className='text-muted-foreground shrink-0'>favourited</span>
                        {baseLink}
                    </>
                );
            case Activity_Types_Enum.Unfavourited:
                return (
                    <>
                        <span className='text-muted-foreground shrink-0'>removed</span>
                        {baseLink}
                        <span className='text-muted-foreground shrink-0'>from favourites</span>
                    </>
                );
            case Activity_Types_Enum.ReviewAdded:
                return (
                    <>
                        <span className='text-muted-foreground shrink-0'>added a review for</span>
                        {baseLink}
                    </>
                );
            case Activity_Types_Enum.ReviewUpdated:
                return (
                    <>
                        <span className='text-muted-foreground shrink-0'>updated their review of</span>
                        {baseLink}
                    </>
                );
            case Activity_Types_Enum.ReviewDeleted:
                return (
                    <>
                        <span className='text-muted-foreground shrink-0'>deleted their review of</span>
                        {baseLink}
                    </>
                );
            default:
                return (
                    <>
                        <span className='text-muted-foreground shrink-0'>did something with</span>
                        {baseLink}
                    </>
                );
        }
    };

    return (
        <div className='flex flex-col gap-2 text-sm'>
            {allActivities.map((activity) => (
                <div key={activity.id} className='mb-3 flex flex-wrap items-start gap-1 sm:mb-2 sm:items-center'>
                    <Avatar className='size-6 shrink-0 cursor-pointer border'>
                        <AvatarImage src={activity.user.avatarUrl} alt={`@${activity.user.displayName}`} />
                        <AvatarFallback>
                            <UserIcon className='size-3' />
                            <span className='sr-only'>@{activity.user.displayName}</span>
                        </AvatarFallback>
                    </Avatar>

                    <span className='shrink-0'>{activity.user.displayName}</span>

                    {renderActivity(activity)}

                    <span className='text-muted-foreground mt-1 w-full text-xs sm:mt-0 sm:ml-auto sm:w-auto'>
                        {dayjs(activity.created_at).fromNow()}
                    </span>
                </div>
            ))}
            <div ref={loadMoreRef} />
        </div>
    );
}
