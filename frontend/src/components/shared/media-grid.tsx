import { memo, useMemo } from 'react';

import Artwork from '@/components/shared/artwork';
import Grid from '@/components/shared/grid';
import { BUCKET } from '@/constants/media.constant';
import { formatFileSize } from '@/lib/utils';
import { useNhostClient } from '@nhost/nextjs';

import Backdrop from './backdrop';
import Cover from './cover';
import Headshot from './headshot';
import Poster from './poster';
import { formatDistanceToNow } from 'date-fns';

interface MediaFile {
    id: string;
    name?: string | null;
    bucketId: string;
    size?: number | null;
    createdAt: string;
    mimeType?: string | null;
}

interface MediaGridProps {
    media: MediaFile[];
    title: string;
}

interface TransformedImage {
    id: string;
    src: string;
    alt: string;
    title: string;
    type: string;
    metadata: {
        size: string;
        uploaded: string;
        type: string;
    };
}

const MediaMetadata = memo(({ metadata }: { metadata: TransformedImage['metadata'] }) => (
    <div className='space-y-1 text-sm'>
        <p className='text-muted-foreground text-xs'>{metadata.size}</p>
        <p className='text-muted-foreground text-xs'>Uploaded {metadata.uploaded}</p>
        <p className='text-muted-foreground text-xs'>{metadata.type}</p>
    </div>
));

MediaMetadata.displayName = 'MediaMetadata';

const MediaItem = memo(({ image }: { image: TransformedImage }) => {
    const renderMediaComponent = () => {
        switch (image.type) {
            case BUCKET.POSTER:
                return <Poster image={image.src} title={image.title} />;
            case BUCKET.BACKDROP:
                return <Backdrop image={image.src} title={image.title} />;
            case BUCKET.ARTWORK:
                return <Artwork image={image.src} title={image.title} />;
            case BUCKET.COVER:
                return <Cover image={image.src} title={image.title} />;
            case BUCKET.HEADSHOT:
                return <Headshot image={image.src} title={image.title} />;
            default:
                return null;
        }
    };

    return (
        <div className='space-y-2'>
            <a href={image.src} target='_blank' rel='noopener noreferrer'>
                {renderMediaComponent()}
            </a>
            <div className='space-y-1 pt-2'>
                <p className='truncate font-medium' title={image.title}>
                    {image.title}
                </p>
                <MediaMetadata metadata={image.metadata} />
            </div>
        </div>
    );
});

MediaItem.displayName = 'MediaItem';

export default function MediaGrid({ media, title }: MediaGridProps) {
    const nhost = useNhostClient();

    const images = useMemo(
        () =>
            media.map((item) => ({
                id: item.id,
                src: nhost.storage.getPublicUrl({ fileId: item.id }),
                alt: `${item.name} image`,
                title: item.name || title || 'Media Image',
                type: item.bucketId,
                metadata: {
                    size: formatFileSize(item.size || 0),
                    uploaded: formatDistanceToNow(new Date(item.createdAt), { addSuffix: true }),
                    type: item.mimeType || 'Unknown type'
                }
            })),
        [media, title, nhost]
    );

    return (
        <div className='space-y-4'>
            <Grid>
                {images.map((image) => (
                    <MediaItem key={image.id} image={image} />
                ))}
            </Grid>
        </div>
    );
}
