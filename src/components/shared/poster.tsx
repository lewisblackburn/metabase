'use client';

import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

import ImageWithSkeleton from './image-with-skeleton';

type PosterProps = {
    title: string;
    image: string;
};

export default function Poster({ title, image }: PosterProps) {
    return (
        <ImageWithSkeleton
            src={image}
            alt={title}
            width={300}
            height={450}
            priority
            wrapperClassName='relative aspect-[2/3] '
            imageClassName='aspect-[2/3] rounded-md object-cover border'
        />
    );
}
export function PosterSkeleton() {
    return (
        <div className='aspect-[2/3] w-full'>
            <Skeleton className='h-full w-full rounded-lg' />
        </div>
    );
}
