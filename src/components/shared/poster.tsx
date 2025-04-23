'use client';

import { useState } from 'react';

import NextImage from 'next/image';

import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

type PosterProps = {
    title: string;
    image: string;
};

const displayedImages = new Set<string>();

export default function Poster({ title, image }: PosterProps) {
    const [isLoading, setIsLoading] = useState(!displayedImages.has(image));

    function handleLoad() {
        displayedImages.add(image);
        setIsLoading(false);
    }

    return (
        <div className='relative aspect-[2/3] w-full overflow-hidden rounded-md'>
            {isLoading && <Skeleton className='absolute inset-0 h-full w-full rounded-md' />}

            <NextImage
                src={image}
                alt={title}
                width={300}
                height={450}
                priority
                onLoad={handleLoad}
                className={`aspect-[2/3] rounded-md transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} `}
            />
        </div>
    );
}

export function PosterSkeleton() {
    return (
        <div className='aspect-[2/3] w-full'>
            <Skeleton className='h-full w-full rounded-lg' />
        </div>
    );
}
