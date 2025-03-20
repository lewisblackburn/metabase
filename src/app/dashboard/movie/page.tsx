'use client';

import Link from 'next/link';

import ImageSlider from '@/components/image-slider';
import { CustomBadge } from '@/components/ui/custom-badge';
import { MEDIA_TYPE } from '@/constants/media';
import { Separator } from '@/registry/new-york-v4/ui/separator';

import { MOVIE_DATA } from './layout';
import { Layers2 } from 'lucide-react';

export default function MoviePage() {
    const castImages = MOVIE_DATA.cast.map((actor) => ({
        id: actor.name,
        src: actor.headshot,
        alt: actor.character,
        title: actor.name,
        description: actor.character
    }));

    return (
        <div className=''>
            <div className='flex flex-col gap-5'>
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
                <div className='flex flex-col gap-2'>
                    <h2 className=''>{MOVIE_DATA.title}</h2>
                    <p className='text-muted-foreground'>{MOVIE_DATA.tagline}</p>
                    <p className=''>{MOVIE_DATA.overview}</p>
                </div>
                {/* TODO: This is just temporary, I need to find a nice design */}
                <Separator />
                <div className='flex flex-col gap-2'>
                    <h3 className=''>Cast</h3>
                    <ImageSlider images={castImages} />
                </div>
            </div>
        </div>
    );
}
