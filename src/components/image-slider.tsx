import Image from 'next/image';

import { ScrollArea, ScrollBar } from '@/registry/new-york-v4/ui/scroll-area';

export type ImageSliderProps = {
    images: Array<{
        id: string;
        src: string;
        alt: string;
        title?: string;
        description?: string;
    }>;
};

export default function ImageSlider({ images }: ImageSliderProps) {
    return (
        <ScrollArea className='rounded-md whitespace-nowrap'>
            <div className='flex w-max space-x-4'>
                {images.map((image) => (
                    <figure key={image.id} className='shrink-0'>
                        <div className='overflow-hidden rounded-md'>
                            <Image
                                src={image.src}
                                alt={`Photo by ${image.alt}`}
                                className='aspect-[3/4] h-fit w-fit object-cover'
                                width={100}
                                height={200}
                            />
                        </div>
                        <figcaption className='text-muted-foreground pt-2 text-xs'>
                            <span className='text-foreground font-semibold'>{image?.title}</span>
                            <span className='block'>{image?.description}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <ScrollBar orientation='horizontal' />
        </ScrollArea>
    );
}
