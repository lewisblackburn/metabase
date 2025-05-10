'use client';

import { ReactNode } from 'react';

import Artwork from '@/components/shared/artwork';

interface SongLayoutProps {
    artworkImage: string;
    artworkAlt: string;
    children: {
        mainContent?: ReactNode;
        sideContent?: ReactNode;
        bottomContent?: ReactNode;
    };
}

export default function SongLayout({ artworkImage, artworkAlt, children }: SongLayoutProps) {
    return (
        <div className='relative'>
            {/* Mobile Layout */}
            <div className='block md:hidden'>
                <div className='mb-6 flex'>
                    <div className='w-40'>
                        <Artwork image={artworkImage} title={artworkAlt} />
                    </div>
                </div>
                <div className='mb-6'>{children.mainContent}</div>
                <div className='mt-4 mb-8'>{children.bottomContent}</div>
            </div>

            {/* Desktop Layout */}
            <div className='hidden md:block'>
                <div className='flex gap-6'>
                    <div className='w-1/3 lg:w-1/6'>
                        <Artwork image={artworkImage} title={artworkAlt} />
                    </div>
                    <div className='flex w-2/3 flex-col justify-end lg:w-5/6'>{children.mainContent}</div>
                </div>
                <div className='mt-8 mb-12'>{children.bottomContent}</div>
            </div>
        </div>
    );
}
