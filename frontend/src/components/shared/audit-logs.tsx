'use client';

import { useEffect, useMemo } from 'react';

import DifferenceViewer from '@/components/shared/difference-viewer';
import { MAX_LIMIT } from '@/constants/api.constant';
import { Order_By, useInfiniteGetAuditLogsQuery } from '@/generated/graphql';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';
import isLastIndex from '@/utils/is-last-index';

import { useInView } from 'react-intersection-observer';

function ChangesSkeleton() {
    return (
        <div className='flex flex-col gap-4'>
            {Array(3)
                .fill(0)
                .map((_, i) => (
                    <div key={i} className='flex flex-col gap-2'>
                        <div className='overflow-hidden rounded-md border border-gray-200'>
                            <div className='flex items-center border-b border-gray-200 bg-gray-50 p-2'>
                                <Skeleton className='h-4 w-24' />
                            </div>
                            <div className='bg-gray-50 p-4'>
                                <Skeleton className='h-20 w-full' />
                            </div>
                            <div className='flex items-center gap-2 border-t border-gray-200 bg-gray-50 p-2'>
                                <Skeleton className='h-5 w-5 rounded-full' />
                                <Skeleton className='h-4 w-32' />
                            </div>
                        </div>
                        {!isLastIndex(i, Array(3)) && <Separator />}
                    </div>
                ))}
        </div>
    );
}

interface AuditLogsProps {
    tableName: string;
    entityId: string | undefined;
}

export default function AuditLogs({ tableName, entityId }: AuditLogsProps) {
    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteGetAuditLogsQuery(
        {
            where: {
                table_name: { _eq: tableName },
                pk: {
                    _eq: {
                        id: entityId
                    }
                }
            },
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
                return lastPage.audit_logs.length === MAX_LIMIT ? { offset: nextOffset } : undefined;
            },
            enabled: !!entityId,
            staleTime: 0,
            gcTime: 0
        }
    );

    const { ref: loadMoreRef, inView } = useInView({ threshold: 0.5 });

    const handleLoadMore = () => {
        if (hasNextPage) fetchNextPage();
    };

    useEffect(() => {
        if (inView) handleLoadMore();
    }, [inView]);

    const allChanges = useMemo(() => {
        return data?.pages.flatMap((page) => page.audit_logs) || [];
    }, [data]);

    if (isLoading) return <ChangesSkeleton />;

    return (
        <div className='flex flex-col gap-2 text-sm'>
            {allChanges?.map((change, index) => (
                <div key={change.id} className='mb-5 flex flex-col gap-5'>
                    <DifferenceViewer
                        diff={change.diff}
                        avatarUrl={change.user.avatarUrl}
                        displayName={change.user.displayName}
                        userId={change.user.id}
                        createdAt={change.created_at}
                    />
                    {!isLastIndex(index, allChanges) && <Separator />}
                </div>
            ))}
            {allChanges.length === 0 && <p className='text-muted-foreground'>No changes available</p>}
            <div ref={loadMoreRef} />
        </div>
    );
}
