'use client';

import { useState } from 'react';

import NextImage from 'next/image';

import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

import ImageWithSkeleton from './image-with-skeleton';

type ArtworkProps = {
    title: string;
    image: string;
};

export default function Artwork({ title, image }: ArtworkProps) {
    return (
        <ImageWithSkeleton
            src={image}
            alt={title}
            width={300}
            height={450}
            priority
            wrapperClassName='relative aspect-[1/1] w-full overflow-hidden rounded-md'
            imageClassName='aspect-[1/1] rounded-md object-cover'
        />
    );
}

export function ArtworkSkeleton() {
    return (
        <div className='aspect-[1/1] w-full'>
            <Skeleton className='h-full w-full rounded-lg' />
        </div>
    );
}
