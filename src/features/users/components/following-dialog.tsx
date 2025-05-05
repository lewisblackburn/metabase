'use client';

import { useEffect, useMemo } from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import ResponsiveDialog from '@/components/shared/responsive-dailog';
import { useInfiniteGetFolloweesQuery } from '@/generated/graphql';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

import { useInView } from 'react-intersection-observer';

const MAX_LIMIT = 20;

interface FollowingDialogProps {
    trigger: React.ReactNode;
}

export default function FollowingDialog({ trigger }: FollowingDialogProps) {
    const params = useParams<{ id: string }>();
    const userId = params?.id;
    const { ref: loadMoreRef, inView } = useInView({ threshold: 0.5 });

    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteGetFolloweesQuery(
        {
            user_id: userId,
            followees_limit: MAX_LIMIT
        },
        {
            initialPageParam: { followees_offset: 0 },
            getNextPageParam: (lastPage, pages) => {
                const nextOffset = pages.length * MAX_LIMIT;
                return lastPage.user?.followees.length === MAX_LIMIT ? { followees_offset: nextOffset } : undefined;
            },
            enabled: !!userId
        }
    );

    useEffect(() => {
        if (inView && hasNextPage) fetchNextPage();
    }, [inView, fetchNextPage, hasNextPage]);

    const items = useMemo(() => {
        if (!data) return [];
        return data.pages.flatMap((page) => page.user?.followees || []);
    }, [data]);

    return (
        <ResponsiveDialog title='Following' trigger={trigger} className='max-h-[80vh]' hasVisibleTitle>
            <div className='flex flex-col gap-4'>
                {isLoading ? (
                    <div className='flex flex-col gap-4'>
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className='flex items-center gap-4'>
                                <Skeleton className='size-10 rounded-full' />
                                <div className='flex flex-col gap-2'>
                                    <Skeleton className='h-4 w-32' />
                                    <Skeleton className='h-3 w-24' />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : items.length === 0 ? (
                    <p className='text-muted-foreground text-center'>No following found</p>
                ) : (
                    <div className='flex flex-col gap-4'>
                        {items.map((item) => {
                            const user = item.followee;
                            return (
                                <Link
                                    href={`/dashboard/users/${user.id}`}
                                    key={user.id}
                                    className='flex items-center gap-4'>
                                    <Avatar>
                                        <AvatarImage src={user.avatarUrl || undefined} alt={user.displayName} />
                                        <AvatarFallback>{user.displayName?.[0]?.toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                    <div className='flex flex-col'>
                                        <span className='font-semibold'>{user.displayName}</span>
                                        <span className='text-muted-foreground text-sm'>
                                            Joined {new Date(user.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                        {hasNextPage && (
                            <div ref={loadMoreRef} className='flex justify-center py-4'>
                                <Button variant='ghost' size='sm' onClick={() => fetchNextPage()}>
                                    Load more
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </ResponsiveDialog>
    );
}
