'use client';

import { Fragment, useEffect, useMemo, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Grid from '@/components/shared/grid';
import Headshot from '@/components/shared/headshot';
import List from '@/components/shared/list';
import { MAX_LIMIT } from '@/constants/api.constant';
import PeopleSidebar from '@/features/people/components/people-sidebar';
import PeopleSkeleton from '@/features/people/components/people-skeleton';
import { useIncrementPersonViews } from '@/features/people/hooks/use-increment-person-views';
import { usePeopleFilters } from '@/features/people/hooks/use-people-filters';
import { GetPeopleQuery, useInfiniteGetPeopleQuery } from '@/generated/graphql';
import { Button } from '@/registry/new-york-v4/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/registry/new-york-v4/ui/toggle-group';
import { RootState } from '@/store/store';
import { setViewMode } from '@/store/view-mode.slice';

import { FlipHorizontalIcon, FlipVerticalIcon, LayoutGrid, List as ListIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';

function PersonCard({ person, viewMode }: { person: GetPeopleQuery['people'][number]; viewMode: 'grid' | 'list' }) {
    const router = useRouter();
    const { mutate: bumpViews } = useIncrementPersonViews(person.id);

    if (!person) return null;

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        bumpViews({ id: person.id });
        router.push(`people/${person.id}`);
    };

    if (viewMode === 'list') {
        return (
            <Link href={`people/${person.id}`} scroll={false} onClick={handleClick}>
                <div className='hover:bg-muted/50 flex items-center gap-4 rounded-lg border p-4 transition-colors'>
                    <div className='relative aspect-[2/3] w-24 shrink-0 overflow-hidden rounded-md'>
                        <Headshot title={person.name} image={person.headshot} />
                    </div>
                    <div className='min-w-0 flex-1'>
                        <h3 className='truncate text-lg font-semibold'>{person.name}</h3>
                        {person.bio && <p className='text-muted-foreground mt-1 line-clamp-2 text-sm'>{person.bio}</p>}
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link href={`people/${person.id}`} scroll={false} onClick={handleClick}>
            <Headshot title={person.name} image={person.headshot} />
        </Link>
    );
}

export default function PeoplePage() {
    const dispatch = useDispatch();
    const viewMode = useSelector((state: RootState) => state.viewMode.mode);
    const { where, order_by } = usePeopleFilters();

    const vars = useMemo(() => ({ where, order_by, limit: MAX_LIMIT }), [where, order_by]);

    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteGetPeopleQuery(vars, {
        initialPageParam: { offset: 0 },
        getPreviousPageParam: (_firstPage, pages) => {
            const prevPage = pages.length - 1;
            return prevPage > 0 ? { offset: prevPage * MAX_LIMIT } : undefined;
        },
        getNextPageParam: (lastPage, pages) => {
            const nextOffset = pages.length * MAX_LIMIT;
            return lastPage.people.length === MAX_LIMIT ? { offset: nextOffset } : undefined;
        }
    });

    const { ref: loadMoreRef, inView } = useInView({ threshold: 0.5 });

    const handleLoadMore = () => {
        if (hasNextPage) fetchNextPage();
    };

    useEffect(() => {
        if (inView) handleLoadMore();
    }, [inView]);

    const allPeople = useMemo(() => {
        return data?.pages.flatMap((page) => page.people) || [];
    }, [data]);

    const Container = viewMode === 'list' ? List : Grid;

    return (
        <div className='container mx-auto py-6'>
            <div className='mb-6 flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>People</h1>
                <div className='flex items-center gap-4'>
                    <ToggleGroup
                        type='single'
                        value={viewMode}
                        className='inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse'>
                        <ToggleGroupItem value='grid' asChild>
                            <Button
                                className='rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10'
                                variant='outline'
                                size='icon'
                                aria-label='Grid view'
                                onClick={() => dispatch(setViewMode('grid'))}>
                                <LayoutGrid size={16} aria-hidden='true' />
                            </Button>
                        </ToggleGroupItem>
                        <ToggleGroupItem value='list' asChild>
                            <Button
                                className='rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10'
                                variant='outline'
                                size='icon'
                                aria-label='List view'
                                onClick={() => dispatch(setViewMode('list'))}>
                                <ListIcon size={16} aria-hidden='true' />
                            </Button>
                        </ToggleGroupItem>
                    </ToggleGroup>
                    <PeopleSidebar />
                </div>
            </div>
            {isLoading ? (
                <PeopleSkeleton viewMode={viewMode} />
            ) : (
                <Container>
                    {allPeople.map((person) => (
                        <PersonCard key={person.id} person={person} viewMode={viewMode} />
                    ))}
                </Container>
            )}
            <div ref={loadMoreRef} />
        </div>
    );
}
