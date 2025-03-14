'use client';

import Link from 'next/link';

import { CustomBadge } from '@/components/custom-badge';

import { FILM_DATA } from './layout';
import { FileStack, Layers, Layers2, SquareStack, Video } from 'lucide-react';

export default function FilmPage() {
    return (
        <div className=''>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <CustomBadge icon={Video} colour='green'>
                        Film
                    </CustomBadge>
                    <Link href=''>
                        <CustomBadge icon={Layers2} colour='transparent'>
                            Collections
                        </CustomBadge>
                    </Link>
                </div>
                <h2 className=''>{FILM_DATA.title}</h2>
            </div>
        </div>
    );
}
