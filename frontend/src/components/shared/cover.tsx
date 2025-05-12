import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

import ImageWithSkeleton from './image-with-skeleton';

type CoverProps = {
    title: string;
    image: string;
};

export default function Cover({ title, image }: CoverProps) {
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
export function CoverSkeleton() {
    return (
        <div className='aspect-[2/3] w-full'>
            <Skeleton className='h-full w-full rounded-lg' />
        </div>
    );
}
