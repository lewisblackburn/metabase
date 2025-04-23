'use client';

import { useState } from 'react';

import NextImage from 'next/image';

import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

type ArtworkProps = {
    title: string;
    image: string;
};

const displayedArtworks = new Set<string>();

export default function Artwork({ title, image }: ArtworkProps) {
    const [isLoading, setIsLoading] = useState(!displayedArtworks.has(image));

    const handleLoad = () => {
        displayedArtworks.add(image);
        setIsLoading(false);
    };

    return (
        <div className='relative aspect-[1/1] w-full overflow-hidden rounded-md'>
            {isLoading && <Skeleton className='absolute inset-0 h-full w-full rounded-md' />}

            <NextImage
                src={image}
                alt={title}
                width={300}
                height={300}
                priority
                onLoad={handleLoad}
                className={`rounded-md transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} `}
            />
        </div>
    );
}

export function ArtworkSkeleton() {
    return (
        <div className='aspect-[1/1] w-full'>
            <Skeleton className='h-full w-full rounded-lg' />
        </div>
    );
}
