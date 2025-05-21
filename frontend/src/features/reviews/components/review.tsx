import { UserHoverCard } from '@/components/user-hover-card';
import { Avatar, AvatarFallback } from '@/registry/new-york-v4/ui/avatar';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';
import {
    TimelineContent,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle
} from '@/registry/new-york-v4/ui/timeline';

import Rating from './rating';
import { formatDistanceToNow } from 'date-fns';

export type ReviewProps = {
    id: string;
    user: {
        id: string;
        name: string;
        initials: string;
        avatar: string;
        createdAt: Date;
    };
    rating: number;
    createdAt: Date;
    content: string;
};

export function ReviewsSkeleton() {
    return (
        <div className='space-y-4'>
            {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className='h-32 w-full' />
            ))}
        </div>
    );
}

export default function Review({ user, rating, createdAt, content }: ReviewProps) {
    return (
        <TimelineItem
            step={1}
            className='group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-8'>
            <TimelineHeader>
                <TimelineSeparator className='bg-border! group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5' />
                <TimelineTitle className='mt-0.5 flex items-center gap-1'>
                    <UserHoverCard
                        user={{
                            id: user.id,
                            displayName: user.name,
                            avatarUrl: user.avatar,
                            createdAt: user.createdAt.toISOString(),
                            email: ''
                        }}>
                        {user.name}
                    </UserHoverCard>
                    <span className='text-muted-foreground text-sm font-normal'>wrote a review</span>
                </TimelineTitle>
                <TimelineIndicator className='bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7'>
                    {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className='size-6 rounded-full' />
                    ) : (
                        <Avatar className='size-6'>
                            <AvatarFallback>{user.initials}</AvatarFallback>
                        </Avatar>
                    )}
                </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent className='text-foreground mt-2 rounded-lg border px-4 py-3'>
                <div className='flex items-start justify-between gap-2'>
                    <p className='text-sm leading-relaxed'>{content}</p>
                    <Rating rating={rating} />
                </div>
                <TimelineDate className='text-muted-foreground text-sm'>{formatDistanceToNow(createdAt)}</TimelineDate>
            </TimelineContent>
        </TimelineItem>
    );
}
