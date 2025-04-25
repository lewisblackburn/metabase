import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/registry/new-york-v4/ui/scroll-area';

import ImageWithSkeleton from './image-with-skeleton';

export type ImageSliderProps = {
    images: Array<{
        id: string;
        src: string;
        alt: string;
        title?: string;
        description?: string;
        href?: string;
    }>;
    width?: number;
    height?: number;
    imageClassName?: string;
};

export default function ImageSlider({ images, width = 100, height = 200, imageClassName }: ImageSliderProps) {
    return (
        <ScrollArea className='rounded-md whitespace-nowrap'>
            <div className='flex w-max space-x-4'>
                {images.map((image) => (
                    <Link key={image.id} href={image.href ?? ''}>
                        <figure className='shrink-0' style={{ maxWidth: width }}>
                            <div className='overflow-hidden rounded-md'>
                                <ImageWithSkeleton
                                    src={image.src}
                                    alt={`Photo by ${image.alt}`}
                                    wrapperClassName='relative h-full w-full'
                                    imageClassName={cn('h-full w-full  object-cover aspect-[3/4]', imageClassName)}
                                    width={width}
                                    height={Math.round(width * (4 / 3))}
                                />
                            </div>
                            <figcaption className='text-muted-foreground pt-2 text-xs text-wrap break-words'>
                                {image?.title && (
                                    <span className='text-foreground block font-semibold'>{image.title}</span>
                                )}
                                {image?.description && <span className='block'>{image.description}</span>}
                            </figcaption>
                        </figure>
                    </Link>
                ))}
            </div>
            <ScrollBar orientation='horizontal' />
        </ScrollArea>
    );
}
