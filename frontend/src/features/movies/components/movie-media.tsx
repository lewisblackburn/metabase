'use client';

import { useParams } from 'next/navigation';

import MediaGrid from '@/components/shared/media-grid';
import { useGetMovieMediaQuery } from '@/generated/graphql';

export default function MovieMedia() {
    const params = useParams<{ id: string }>();
    const { data: media, isLoading } = useGetMovieMediaQuery(
        {
            where: {
                movie_id: {
                    _eq: params?.id
                }
            }
        },
        {
            queryKey: ['movie-media', params?.id],
            enabled: !!params?.id
        }
    );

    if (isLoading) return null;

    const posters =
        media?.movie_media
            ?.filter((m) => m.file.bucketId === 'poster')
            .map((m) => ({
                id: m.file.id,
                name: m.file.name || 'Movie Poster',
                size: m.file.size || 0,
                createdAt: m.file.createdAt,
                mimeType: m.file.mimeType || 'Unknown type',
                bucketId: m.file.bucketId
            })) ?? [];

    const backdrops =
        media?.movie_media
            ?.filter((m) => m.file.bucketId === 'backdrop')
            .map((m) => ({
                id: m.file.id,
                name: m.file.name || 'Movie Backdrop',
                size: m.file.size || 0,
                createdAt: m.file.createdAt,
                mimeType: m.file.mimeType || 'Unknown type',
                bucketId: m.file.bucketId
            })) ?? [];

    return (
        <div className='space-y-4'>
            <MediaGrid media={posters} title='Movie Posters' />
            <MediaGrid media={backdrops} title='Movie Backdrops' />
        </div>
    );
}
