'use client';

import { useParams } from 'next/navigation';

import DefaultLoading from '@/components/shared/default-loading';
import MediaGrid from '@/components/shared/media-grid';
import { useGetAlbumMediaQuery, useGetSongQuery } from '@/generated/graphql';

export default function AlbumMedia() {
    const params = useParams<{ id: string }>();
    const { data: song, isLoading: isSongLoading } = useGetSongQuery(
        {
            id: {
                _eq: params?.id
            }
        },
        {
            queryKey: ['song', params?.id],
            enabled: !!params?.id
        }
    );

    const { data: media, isLoading: isMediaLoading } = useGetAlbumMediaQuery(
        {
            where: {
                album_id: {
                    _eq: song?.songs_by_pk?.album?.id
                }
            }
        },
        {
            queryKey: ['album-media', song?.songs_by_pk?.album?.id],
            enabled: !!song?.songs_by_pk?.album?.id
        }
    );

    if (isSongLoading || isMediaLoading) return <DefaultLoading />;

    const albumMedia =
        media?.album_media?.map((m) => ({
            id: m.file.id,
            name: m.file.name || 'Album Image',
            size: m.file.size || 0,
            createdAt: m.file.createdAt,
            mimeType: m.file.mimeType || 'Unknown type',
            bucketId: m.file.bucketId
        })) ?? [];

    return <MediaGrid media={albumMedia} title='Album Images' />;
}
