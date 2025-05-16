'use client';

import { useParams } from 'next/navigation';

import Grid from '@/components/shared/grid';
import ImageWithSkeleton from '@/components/shared/image-with-skeleton';
import { useGetMovieMediaQuery } from '@/generated/graphql';
import { formatFileSize } from '@/lib/utils';
import { useNhostClient } from '@nhost/nextjs';

import { formatDistanceToNow } from 'date-fns';

export default function MovieMedia() {
    const params = useParams<{ id: string }>();
    const nhost = useNhostClient();
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

    const images =
        media?.movie_media?.map((media) => ({
            id: media.file.id,
            src: nhost.storage.getPublicUrl({ fileId: media.file.id }),
            alt: `${media.file.name} image`,
            title: media.file.name || 'Movie Image',
            type: media.file.bucketId,
            metadata: {
                size: formatFileSize(media.file.size || 0),
                uploaded: formatDistanceToNow(new Date(media.file.createdAt), { addSuffix: true }),
                type: media.file.mimeType || 'Unknown type'
            }
        })) ?? [];

    if (isLoading) return null;

    const posters = images.filter((image) => image.type === 'poster');
    const backdrops = images.filter((image) => image.type === 'backdrop');

    return (
        <div className='space-y-4'>
            {posters.length > 0 && (
                <Grid>
                    {posters.map((image) => (
                        <div key={image.id} className='space-y-2'>
                            <a
                                href={image.src}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='relative block aspect-[2/3] w-full overflow-hidden rounded-lg'>
                                <ImageWithSkeleton
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className='object-cover'
                                    sizes='(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw'
                                />
                            </a>
                            <div className='space-y-1 text-sm'>
                                <p className='truncate font-medium' title={image.title}>
                                    {image.title}
                                </p>
                                <p className='text-muted-foreground text-xs'>{image.metadata.size}</p>
                                <p className='text-muted-foreground text-xs'>Uploaded {image.metadata.uploaded}</p>
                                <p className='text-muted-foreground text-xs'>{image.metadata.type}</p>
                            </div>
                        </div>
                    ))}
                </Grid>
            )}
            {backdrops.length > 0 && (
                <Grid>
                    {backdrops.map((image) => (
                        <div key={image.id} className='space-y-2'>
                            <a
                                href={image.src}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='relative block aspect-video w-full overflow-hidden rounded-lg'>
                                <ImageWithSkeleton
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className='object-cover'
                                    sizes='(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw'
                                />
                            </a>
                            <div className='space-y-1 text-sm'>
                                <p className='truncate font-medium' title={image.title}>
                                    {image.title}
                                </p>
                                <p className='text-muted-foreground text-xs'>{image.metadata.size}</p>
                                <p className='text-muted-foreground text-xs'>Uploaded {image.metadata.uploaded}</p>
                                <p className='text-muted-foreground text-xs'>{image.metadata.type}</p>
                            </div>
                        </div>
                    ))}
                </Grid>
            )}
        </div>
    );
}
