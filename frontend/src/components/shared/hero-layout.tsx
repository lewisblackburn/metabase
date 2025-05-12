'use client';

import { ReactNode } from 'react';

import ImageWithSkeleton from '@/components/shared/image-with-skeleton';

interface HeroCardLayoutProps {
    backdropImage: string;
    backdropAlt: string;
    avatarImage: string;
    avatarAlt: string;
    children: ReactNode;
}

const Backdrop = ({ image, alt }: { image: string; alt: string }) => (
    <div className='relative h-28 w-full sm:h-36 md:h-64 lg:h-96'>
        <ImageWithSkeleton
            src={image}
            alt={alt}
            fill
            wrapperClassName='absolute inset-0'
            imageClassName='object-cover object-center rounded-md'
        />
        <div className='absolute inset-0 rounded-md bg-gradient-to-t from-black/30 to-transparent'></div>
    </div>
);

const Avatar = ({ image, alt }: { image: string; alt: string }) => (
    <div className='relative aspect-square h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32'>
        <ImageWithSkeleton
            src={image}
            alt={alt}
            fill
            wrapperClassName='absolute inset-0'
            imageClassName='object-cover object-center border-2 border-white rounded-md'
        />
    </div>
);

export default function HeroCardLayout({
    backdropImage,
    backdropAlt,
    avatarImage,
    avatarAlt,
    children
}: HeroCardLayoutProps) {
    return (
        <div className='relative'>
            <Backdrop image={backdropImage} alt={backdropAlt} />

            <div className='px-3 sm:px-6 lg:px-12'>
                <div className='relative -mt-8 mb-3 inline-block sm:-mt-10 md:-mt-12 lg:-mt-16'>
                    <Avatar image={avatarImage} alt={avatarAlt} />
                </div>

                {children}
            </div>
        </div>
    );
}
