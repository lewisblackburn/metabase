'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Artwork from '@/components/shared/artwork';
import { useIncrementSongViewsMutation } from '@/generated/graphql';
import { GetSongsQuery } from '@/generated/graphql';

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
