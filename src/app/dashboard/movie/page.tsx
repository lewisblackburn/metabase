'use client';

import Image from 'next/image';
import Link from 'next/link';

import { CustomBadge } from '@/components/ui/custom-badge';
import { MEDIA_TYPE } from '@/constants/media';

import { MOVIE_DATA } from './layout';
import { Layers2 } from 'lucide-react';

export default function MoviePage() {
    return (
        <div className=''>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <CustomBadge
                        icon={MEDIA_TYPE.MOVIE.icon}
                        background={MEDIA_TYPE.MOVIE.background}
                        foreground={MEDIA_TYPE.MOVIE.foreground}
                        border={MEDIA_TYPE.MOVIE.border}>
                        Movie
                    </CustomBadge>
                    <Link href=''>
                        <CustomBadge icon={Layers2}>Collections</CustomBadge>
                    </Link>
                </div>
                <h2 className=''>{MOVIE_DATA.title}</h2>
            </div>
        </div>
    );
}
