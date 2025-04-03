import Image from 'next/image';

import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/registry/new-york-v4/ui/scroll-area';

export type ImageSliderProps = {
    images: Array<{
        id: string;
        src: string;
        alt: string;
        title?: string;
        description?: string;
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
                    <figure key={image.id} className='shrink-0' style={{ maxWidth: width }}>
                        <div className='overflow-hidden rounded-md'>
                            <Image
                                src={image.src}
                                alt={`Photo by ${image.alt}`}
                                className={cn('aspect-[3/4] h-fit w-fit object-cover', imageClassName)}
                                width={width}
                                height={Math.round(width * (4 / 3))}
                            />
                        </div>
                        <figcaption className='text-muted-foreground pt-2 text-xs text-wrap break-words'>
                            {image?.title && <span className='text-foreground block font-semibold'>{image.title}</span>}
                            {image?.description && <span className='block'>{image.description}</span>}
                        </figcaption>
                    </figure>
                ))}
            </div>
            <ScrollBar orientation='horizontal' />
        </ScrollArea>
    );
}
