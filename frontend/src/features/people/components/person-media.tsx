'use client';

import { useParams } from 'next/navigation';

import MediaGrid from '@/components/shared/media-grid';
import { useGetPersonMediaQuery } from '@/generated/graphql';

export default function PersonMedia() {
    const params = useParams<{ id: string }>();
    const { data: media, isLoading } = useGetPersonMediaQuery(
        {
            where: {
                person_id: {
                    _eq: params?.id
                }
            }
        },
        {
            queryKey: ['person-media', params?.id],
            enabled: !!params?.id
        }
    );

    if (isLoading) return null;

    const headshots =
        media?.person_media
            ?.filter((m) => m.file.bucketId === 'headshot')
            .map((m) => ({
                id: m.file.id,
                name: m.file.name || 'Person Headshot',
                size: m.file.size || 0,
                createdAt: m.file.createdAt,
                mimeType: m.file.mimeType || 'Unknown type',
                bucketId: m.file.bucketId
            })) ?? [];

    const backdrops =
        media?.person_media
            ?.filter((m) => m.file.bucketId === 'backdrop')
            .map((m) => ({
                id: m.file.id,
                name: m.file.name || 'Person Backdrop',
                size: m.file.size || 0,
                createdAt: m.file.createdAt,
                mimeType: m.file.mimeType || 'Unknown type',
                bucketId: m.file.bucketId
            })) ?? [];

    return (
        <div className='space-y-4'>
            <MediaGrid media={headshots} title='Headshots' />
            <MediaGrid media={backdrops} title='Person Backdrops' />
        </div>
    );
}
