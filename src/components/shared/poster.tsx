import NextImage from 'next/image';

import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

type PosterProps = {
    title: string;
    image: string;
};

export default function Poster({ title, image }: PosterProps) {
    return <NextImage src={image} alt={title} width={300} height={450} className='aspect-[2/3] rounded-md' priority />;
}

export function PosterSkeleton() {
    return (
        <div className='aspect-[2/3] w-full'>
            <Skeleton className='h-full w-full rounded-lg' />
        </div>
    );
}
