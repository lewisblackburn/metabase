'use client';

import { useEffect, useMemo } from 'react';

import { useParams } from 'next/navigation';

import { MAX_LIMIT } from '@/constants/api.constant';
import { Order_By, useInfiniteGetUserActivitiesQuery } from '@/generated/graphql';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

import { ActivityRenderer } from './activity-renderer';
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
            where: { user_id: { _eq: userId }, hidden: { _eq: false } },
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

                    <ActivityRenderer activity={activity} />

                    <span className='text-muted-foreground mt-1 w-full text-xs sm:mt-0 sm:ml-auto sm:w-auto'>
                        {dayjs(activity.created_at).fromNow()}
                    </span>
                </div>
            ))}
            <div ref={loadMoreRef} />
        </div>
    );
}
