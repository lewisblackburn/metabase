'use client';

import { Fragment, useEffect, useMemo } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Artwork from '@/components/shared/artwork';
import Grid from '@/components/shared/grid';
import { MAX_LIMIT } from '@/constants/api.constant';
import SongsSidebar from '@/features/songs/components/songs-sidebar';
import SongsSkeleton from '@/features/songs/components/songs-skeleton';
import { useSongFilters } from '@/features/songs/hooks/use-song-filters';
import { GetSongsQuery, useIncrementSongViewsMutation, useInfiniteGetSongsQuery } from '@/generated/graphql';

import { useInView } from 'react-intersection-observer';

export function SongCard({ song }: { song: GetSongsQuery['songs'][number] }) {
    const router = useRouter();
    const { mutate: bumpViews } = useIncrementSongViewsMutation(song.id);

    if (!song) return null;

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        bumpViews({ id: song.id });
        router.push(`/dashboard/songs/${song.id}`);
    };

    return (
        <Link href={`/dashboard/songs/${song.id}`} scroll={false} onClick={handleClick}>
            <Artwork title={song.name} image={song.album?.artwork ?? 'https://placehold.co/450x450x.png'} />
        </Link>
    );
}

export default function SongsPage() {
    const { where, order_by } = useSongFilters();

    const vars = useMemo(() => ({ where, order_by, limit: MAX_LIMIT }), [where, order_by]);

    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteGetSongsQuery(vars, {
        initialPageParam: { offset: 0 },
        getPreviousPageParam: (_firstPage, pages) => {
            const prevPage = pages.length - 1;
            return prevPage > 0 ? { offset: prevPage * MAX_LIMIT } : undefined;
        },
        getNextPageParam: (lastPage, pages) => {
            const nextOffset = pages.length * MAX_LIMIT;
            return lastPage.songs.length === MAX_LIMIT ? { offset: nextOffset } : undefined;
        }
    });

    const { ref: loadMoreRef, inView } = useInView({ threshold: 0.5 });

    const handleLoadMore = () => {
        if (hasNextPage) fetchNextPage();
    };

    useEffect(() => {
        if (inView) handleLoadMore();
    }, [inView]);

    const allSongs = useMemo(() => {
        return data?.pages.flatMap((page) => page.songs) || [];
    }, [data]);

    if (isLoading) return <SongsSkeleton />;

    return (
        <Fragment>
            <div className='mb-5 flex items-center justify-between'>
                <div>
                    <h2 className='text-2xl font-bold'>Discover</h2>
                    <p>Explore a wide-range of songs with filters and sorting options.</p>
                </div>
                <SongsSidebar />
            </div>

            <Grid>
                {allSongs.map((song) => (
                    <SongCard key={song.id} song={song} />
                ))}
            </Grid>
            <div ref={loadMoreRef} />
        </Fragment>
    );
}
