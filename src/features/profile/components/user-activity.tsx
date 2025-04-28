'use client';

import Link from 'next/link';

import Rating from '@/components/shared/rating';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { Order_By, useGetUserActivitiesQuery } from '@/generated/graphql';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';
import { useUserId } from '@nhost/nextjs';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { UserIcon } from 'lucide-react';

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
    const userId = useUserId();
    const { data: userActivity, isLoading } = useGetUserActivitiesQuery(
        {
            where: {
                user_id: { _eq: userId }
            },
            order_by: { created_at: Order_By.Desc }
        },
        {
            queryKey: ['user-activity', userId],
            enabled: !!userId
        }
    );

    if (isLoading) return <ActivitySkeleton />;

    return (
        <div className='flex flex-col gap-2 text-sm'>
            {userActivity?.user_activities.map((activity) => (
                <div key={activity.id} className='mb-3 flex flex-wrap items-start gap-1 sm:mb-2 sm:items-center'>
                    <Avatar className='size-6 shrink-0 cursor-pointer border'>
                        <AvatarImage src={activity.user.avatarUrl} alt={`@${activity.user.displayName}`} />
                        <AvatarFallback>
                            <UserIcon className='size-3' />
                            <span className='sr-only'>@{activity.user.displayName}</span>
                        </AvatarFallback>
                    </Avatar>
                    <span className='shrink-0'>{activity.user.displayName}</span>
                    <span className='text-muted-foreground shrink-0'>marked</span>
                    <Link
                        href={`/dashboard/${OBJECT_TYPE[activity.object_type].path}/${activity.object_id}`}
                        className='min-w-0 truncate'>
                        <span className='truncate'>{activity.object_title}</span>
                    </Link>
                    <span className='text-muted-foreground shrink-0'>as {activity.verb}</span>
                    {activity.verb === 'reviewed' && (
                        <div className='ml-1 shrink-0'>
                            <Rating rating={activity.payload.rating} />
                        </div>
                    )}
                    <span className='text-muted-foreground mt-1 w-full text-xs sm:mt-0 sm:ml-auto sm:w-auto'>
                        {dayjs(activity.created_at).fromNow()}
                    </span>
                </div>
            ))}
        </div>
    );
}
