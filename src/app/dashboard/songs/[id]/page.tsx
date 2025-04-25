'use client';

import { useState } from 'react';

import Image from 'next/image';

import ActionButton from '@/components/shared/action-button';
import Artwork from '@/components/shared/artwork';
import AwardTable from '@/components/shared/award-table';
import ProgressItem from '@/components/shared/progress-item';
import { CustomBadge } from '@/components/ui/custom-badge';
import { SONG_DATA } from '@/constants/fakedb.constant';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { cn } from '@/lib/utils';
import { Separator } from '@/registry/new-york-v4/ui/separator';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import {
    Bookmark,
    Calendar,
    Heart,
    MapPin,
    Music,
    Play,
    Skull,
    Star,
    Timer,
    TrendingUp,
    Users,
    VenusAndMars
} from 'lucide-react';

dayjs.extend(advancedFormat);

export default function SongPage() {
    const [isFavourite, setIsFavourite] = useState(false);

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-2'>
                <CustomBadge
                    icon={OBJECT_TYPE.SONG.icon}
                    background={OBJECT_TYPE.SONG.background}
                    foreground={OBJECT_TYPE.SONG.foreground}
                    border={OBJECT_TYPE.SONG.border}>
                    {OBJECT_TYPE.SONG.name}
                </CustomBadge>
                <CustomBadge
                    icon={OBJECT_TYPE.ALBUM.icon}
                    background={OBJECT_TYPE.ALBUM.background}
                    foreground={OBJECT_TYPE.ALBUM.foreground}
                    border={OBJECT_TYPE.ALBUM.border}>
                    {SONG_DATA.album}
                </CustomBadge>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-[250px_1fr]'>
                <div className='flex flex-col gap-5'>
                    <Artwork title={SONG_DATA.title} image={SONG_DATA.artwork} />
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h2 className=''>{SONG_DATA.title}</h2>
                        <p>{SONG_DATA.description}</p>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        <CustomBadge icon={Users}>{SONG_DATA.artists.join(', ')}</CustomBadge>
                        {SONG_DATA.releaseDate && (
                            <CustomBadge icon={Calendar}>
                                {dayjs(SONG_DATA.releaseDate).format('MMMM Do, YYYY')}
                            </CustomBadge>
                        )}
                        {SONG_DATA.formattedDuration && (
                            <CustomBadge icon={Timer}>{SONG_DATA.formattedDuration}</CustomBadge>
                        )}
                        {SONG_DATA.genres && <CustomBadge icon={Music}>{SONG_DATA.genres.join(', ')}</CustomBadge>}
                        <div>
                            <ProgressItem label='Content Score' score={SONG_DATA.contentScore} />
                        </div>
                    </div>
                    <Separator />
                    <div className='flex flex-wrap'>
                        <div className='grid grid-cols-2 gap-2'>
                            <ActionButton
                                icon={Heart}
                                iconClassName={cn({ 'fill-red-500 text-red-500': isFavourite })}
                                onClick={() => setIsFavourite((prev) => !prev)}>
                                Favourite
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 md:py-5'>
                <Separator />
                <div className='flex flex-col gap-2'>
                    <CustomBadge
                        icon={OBJECT_TYPE.AWARD.icon}
                        background={OBJECT_TYPE.AWARD.background}
                        foreground={OBJECT_TYPE.AWARD.foreground}
                        border={OBJECT_TYPE.AWARD.border}>
                        {OBJECT_TYPE.AWARD.plural}
                    </CustomBadge>
                    <AwardTable awards={SONG_DATA.awards} />
                </div>
            </div>
        </div>
    );
}
