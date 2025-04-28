'use client';

import { useEffect, useMemo } from 'react';

import DifferenceViewer from '@/components/shared/difference-viewer';
import { MAX_LIMIT } from '@/constants/api.constant';
import { Order_By, useInfiniteGetAuditLogsQuery } from '@/generated/graphql';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import isLastIndex from '@/utils/is-last-index';

import { useMovie } from './movie-provider';
import { useInView } from 'react-intersection-observer';

export default function MovieChanges() {
    const { movie } = useMovie();
    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteGetAuditLogsQuery(
        {
            where: {
                table_name: { _eq: 'movies' },
                pk: {
                    _eq: {
                        id: movie?.id
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
            enabled: !!movie?.id,
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

    // if (isLoading) return <ActivitySkeleton />;

    return (
        <div className='flex flex-col gap-2 text-sm'>
            {allChanges?.map((change, index) => (
                <div key={change.id} className='mb-5 flex flex-col gap-5'>
                    <DifferenceViewer
                        diff={change.diff}
                        avatarUrl={change.user.avatarUrl}
                        displayName={change.user.displayName}
                    />
                    {!isLastIndex(index, allChanges) && <Separator />}
                </div>
            ))}
            <div ref={loadMoreRef} />
        </div>
    );
}
