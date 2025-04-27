'use client';

import { ReactNode } from 'react';

import ImageWithSkeleton from '@/components/shared/image-with-skeleton';
import Poster from '@/components/shared/poster';

interface MovieLayoutProps {
    backdropImage: string;
    backdropAlt: string;
    posterImage: string;
    posterAlt: string;
    children: {
        mainContent?: ReactNode;
        sideContent?: ReactNode;
        bottomContent?: ReactNode;
    };
}

const Backdrop = ({ image, alt }: { image: string; alt: string }) => (
    <div className='relative h-40 w-full sm:h-48 md:h-64 lg:h-96'>
        <ImageWithSkeleton
            src={image}
            alt={alt}
            fill
            wrapperClassName='absolute inset-0'
            imageClassName='object-cover object-center rounded-md'
        />
        <div className='absolute inset-0 rounded-md bg-gradient-to-t from-black/50 to-transparent'></div>
    </div>
);

export default function MovieLayout({
    backdropImage,
    backdropAlt,
    posterImage,
    posterAlt,
    children
}: MovieLayoutProps) {
    return (
        <div className='relative'>
            <Backdrop image={backdropImage} alt={backdropAlt} />

            {/* Mobile Layout */}
            <div className='block px-4 sm:px-6 md:hidden'>
                <div className='-mt-20 mb-6 flex'>
                    <div className='w-40'>
                        <Poster image={posterImage} title={posterAlt} />
                    </div>
                </div>
                <div className='mb-6'>{children.mainContent}</div>
                <div className='mt-4 mb-8'>{children.bottomContent}</div>
            </div>

            {/* Desktop Layout */}
            <div className='hidden md:block'>
                <div className='grid grid-cols-12 gap-6 px-6 lg:px-12'>
                    <div className='relative col-span-4 -mt-24 mb-3 lg:col-span-2'>
                        <div className='w-full'>
                            <Poster image={posterImage} title={posterAlt} />
                        </div>
                    </div>
                    <div className='col-span-6 mt-6 lg:col-span-10'>{children.mainContent}</div>
                </div>
                <div className='mt-8 mb-12 px-6 lg:px-12'>{children.bottomContent}</div>
            </div>
        </div>
    );
}
