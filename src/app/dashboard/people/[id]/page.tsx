'use client';

import Image from 'next/image';

import { AwardCard } from '@/components/shared/award-card';
import ImageSlider from '@/components/shared/image-slider';
import { CustomBadge } from '@/components/ui/custom-badge';
import { PERSON_DATA } from '@/constants/fakedb.constant';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Progress } from '@/registry/new-york-v4/ui/progress';
import { Separator } from '@/registry/new-york-v4/ui/separator';

import { Calendar, MapPin, Pin, Skull, Star, VenusAndMars } from 'lucide-react';

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
                    <Image
                        src={PERSON_DATA.headshot}
                        alt={PERSON_DATA.name}
                        width={250}
                        height={350}
                        className='max-h-[350px] min-w-[250px] rounded'
                        quality={100}
                    />
                    <Card>
                        <CardHeader>
                            <CardTitle className='flex items-center justify-between'>
                                <span>Content Score</span>
                                <span>17%</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Progress value={Math.floor(PERSON_DATA.contentScore * 100)} />
                        </CardContent>
                    </Card>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className=''>{PERSON_DATA.name}</h2>
                    <p className='text-muted-foreground'>
                        {PERSON_DATA.knownForTitles
                            .map((item) => item.title)
                            .splice(0, 3)
                            .join(', ')}
                    </p>
                    <p>{PERSON_DATA.biography}</p>
                    <div className='flex items-center gap-2'>
                        <Calendar className='h-4 w-4' />
                        <span>{PERSON_DATA.birthdate}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MapPin className='h-4 w-4' />
                        <span>{PERSON_DATA.birthplace}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <VenusAndMars className='h-4 w-4' />
                        <span>{PERSON_DATA.gender}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Skull className='h-4 w-4' />
                        <span>{PERSON_DATA.deathdate}</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 py-5'>
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

                    <div className='flex flex-wrap gap-4'>
                        {PERSON_DATA.awards.map((item, index) => (
                            <AwardCard key={index} award={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
