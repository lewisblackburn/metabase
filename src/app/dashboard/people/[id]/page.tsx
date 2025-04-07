'use client';

import Image from 'next/image';

import AwardTable from '@/components/shared/award-table';
import ImageSlider from '@/components/shared/image-slider';
import Poster from '@/components/shared/poster';
import ProgressItem from '@/components/shared/progress-item';
import { CustomBadge } from '@/components/ui/custom-badge';
import { PERSON_DATA } from '@/constants/fakedb.constant';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { Separator } from '@/registry/new-york-v4/ui/separator';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { Calendar, MapPin, Skull, Star, TrendingUp, VenusAndMars } from 'lucide-react';

dayjs.extend(advancedFormat);

export default function PersonPage() {
    const knownForImages = PERSON_DATA.knownForTitles.map((item) => ({
        id: item.id,
        src: item.poster,
        alt: item.title,
        title: item.title
    }));

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-2'>
                <CustomBadge
                    icon={OBJECT_TYPE.PERSON.icon}
                    background={OBJECT_TYPE.PERSON.background}
                    foreground={OBJECT_TYPE.PERSON.foreground}
                    border={OBJECT_TYPE.PERSON.border}>
                    {OBJECT_TYPE.PERSON.name}
                </CustomBadge>
                <CustomBadge
                    icon={OBJECT_TYPE.ACTOR.icon}
                    background={OBJECT_TYPE.ACTOR.background}
                    foreground={OBJECT_TYPE.ACTOR.foreground}
                    border={OBJECT_TYPE.ACTOR.border}>
                    {OBJECT_TYPE.ACTOR.name}
                </CustomBadge>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-[250px_1fr]'>
                <div className='flex flex-col gap-5'>
                    <Poster title={PERSON_DATA.name} image={PERSON_DATA.headshot} />
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h2 className=''>{PERSON_DATA.name}</h2>
                        <p className='text-muted-foreground'>
                            {PERSON_DATA.knownForTitles
                                .map((item) => item.title)
                                .splice(0, 3)
                                .join(', ')}
                        </p>
                        <p>{PERSON_DATA.biography}</p>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {PERSON_DATA.birthdate && (
                            <CustomBadge icon={Calendar}>
                                {dayjs(PERSON_DATA.birthdate).format('MMMM Do, YYYY')}
                            </CustomBadge>
                        )}
                        {PERSON_DATA.birthplace && <CustomBadge icon={MapPin}>{PERSON_DATA.birthplace}</CustomBadge>}
                        {PERSON_DATA.gender && <CustomBadge icon={VenusAndMars}>{PERSON_DATA.gender}</CustomBadge>}
                        {PERSON_DATA.deathdate && <CustomBadge icon={Skull}>{PERSON_DATA.deathdate}</CustomBadge>}
                        <div>
                            <ProgressItem label='Content Score' score={PERSON_DATA.contentScore} variant='labelled' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 md:py-5'>
                <Separator />
                <div className='flex flex-col gap-2'>
                    <CustomBadge
                        icon={Star}
                        background='bg-orange-300/20'
                        foreground='text-orange-800'
                        border='border-orange-400/60'>
                        Known For
                    </CustomBadge>
                    <ImageSlider images={knownForImages} />
                </div>
                <Separator />
                <div className='flex flex-col gap-2'>
                    <CustomBadge
                        icon={OBJECT_TYPE.AWARD.icon}
                        background={OBJECT_TYPE.AWARD.background}
                        foreground={OBJECT_TYPE.AWARD.foreground}
                        border={OBJECT_TYPE.AWARD.border}>
                        {OBJECT_TYPE.AWARD.plural}
                    </CustomBadge>
                    <AwardTable awards={PERSON_DATA.awards} />
                </div>
            </div>
        </div>
    );
}
