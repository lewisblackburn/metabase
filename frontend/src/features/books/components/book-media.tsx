'use client';

import { useParams } from 'next/navigation';

import MediaGrid from '@/components/shared/media-grid';
import { useGetBookMediaQuery, useGetMovieMediaQuery } from '@/generated/graphql';

export default function BookMedia() {
    const params = useParams<{ id: string }>();
    const { data: media, isLoading } = useGetBookMediaQuery(
        {
            where: {
                book_id: {
                    _eq: params?.id
                }
            }
        },
        {
            queryKey: ['book-media', params?.id],
            enabled: !!params?.id
        }
    );

    if (isLoading) return null;

    const bookMedia =
        media?.book_media?.map((m) => ({
            id: m.file.id,
            name: m.file.name || 'Book Media',
            size: m.file.size || 0,
            createdAt: m.file.createdAt,
            mimeType: m.file.mimeType || 'Unknown type',
            bucketId: m.file.bucketId
        })) ?? [];

    return (
        <div className='space-y-4'>
            <MediaGrid media={bookMedia} title='Book Media' />
        </div>
    );
}
