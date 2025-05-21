import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';

import ImageWithSkeleton from './image-with-skeleton';

type BackdropProps = {
    title: string;
    image: string;
};

export default function Backdrop({ title, image }: BackdropProps) {
    return (
        <ImageWithSkeleton
            src={image}
            alt={title}
            width={300}
            height={450}
            priority
            wrapperClassName='relative aspect-video '
            imageClassName='aspect-video rounded-md object-cover border'
        />
    );
}
export function BackdropSkeleton() {
    return (
        <div className='aspect-video w-full'>
            <Skeleton className='h-full w-full rounded-lg' />
        </div>
    );
}
