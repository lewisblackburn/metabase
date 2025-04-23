import NextImage from 'next/image';

import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

type ArtworkProps = {
    title: string;
    image: string;
};

export default function Artwork({ title, image }: ArtworkProps) {
    return <NextImage src={image} alt={title} width={300} height={300} className='rounded-md' priority />;
}

export function ArtworkSkeleton() {
    return (
        <div className='aspect-[1/1] w-full'>
            <Skeleton className='h-full w-full rounded-lg' />
        </div>
    );
}
