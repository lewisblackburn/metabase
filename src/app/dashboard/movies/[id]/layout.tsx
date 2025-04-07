'use client';

import { Fragment, ReactNode, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import FavouriteButton from '@/components/shared/action-button';
import ActionButton from '@/components/shared/action-button';
import InformationItem from '@/components/shared/information-item';
import { InnerSidebarTrigger } from '@/components/shared/inner-sidebar-trigger';
import ProgressItem from '@/components/shared/progress-item';
import { Container } from '@/components/ui/container';
import { MOVIE_DATA } from '@/constants/fakedb.constant';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Sidebar, SidebarContent, SidebarMenu, SidebarProvider } from '@/registry/new-york-v4/ui/sidebar';
import isLastIndex from '@/utils/is-last-index';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { Bookmark, Calendar, Clock, CreditCard, Heart, Info, Play, Tags, Timer, TrendingUp, User } from 'lucide-react';

dayjs.extend(advancedFormat);

const INFORMATION = [
    {
        icon: Calendar,
        badges: dayjs(MOVIE_DATA.releaseDate).format('MMMM Do, YYYY'),
        label: 'Release Date'
    },
    {
        icon: Tags,
        badges: MOVIE_DATA.genre,
        label: 'Genre'
    },
    {
        icon: Timer,
        badges: MOVIE_DATA.duration,
        label: 'Duration'
    },
    {
        icon: Info,
        badges: MOVIE_DATA.status,
        label: 'Status'
    },
    {
        icon: User,
        badges: MOVIE_DATA.director,
        label: 'Director'
    },
    {
        icon: TrendingUp,
        badges: MOVIE_DATA.revenue,
        label: 'Revenue'
    },
    {
        icon: CreditCard,
        badges: MOVIE_DATA.budget,
        label: 'Budget'
    }
];

const MovieLayout = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(true);
    const [isFavourite, setIsFavourite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);

    return (
        <SidebarProvider
            style={
                {
                    '--sidebar-width': '300px'
                } as React.CSSProperties
            }
            className='relative z-0 h-[calc(100vh-4rem)] min-h-0 overflow-hidden'
            open={open}>
            <Sidebar className='absolute'>
                <SidebarContent className='bg-white p-5'>
                    <SidebarMenu className='flex flex-col gap-5'>
                        <Image
                            src={MOVIE_DATA.poster}
                            alt={MOVIE_DATA.title}
                            width={200}
                            height={300}
                            className='size-full rounded'
                            quality={100}
                        />
                        <Link href={MOVIE_DATA.trailer}>
                            <Button variant='secondary' className='w-full cursor-pointer'>
                                <Play />
                                Play Trailer
                            </Button>
                        </Link>

                        <div className='mt-5 flex flex-col gap-5'>
                            {INFORMATION.map((item, index) => (
                                <Fragment key={index}>
                                    <InformationItem key={index} {...item} />
                                    {isLastIndex(index, INFORMATION) ? null : <Separator />}
                                </Fragment>
                            ))}
                        </div>
                        <Separator />
                        <ProgressItem icon={TrendingUp} label='Content Score' score={MOVIE_DATA.contentScore} />
                        <Separator />
                        <div className='grid grid-cols-2 gap-2'>
                            <ActionButton
                                icon={Heart}
                                label='Favourite'
                                iconClassName={cn({ 'fill-red-500 text-red-500': isFavourite })}
                                onClick={() => setIsFavourite((prev) => !prev)}
                            />
                            <ActionButton
                                icon={Bookmark}
                                label='Watch Later'
                                iconClassName={cn({ 'fill-blue-500 text-blue-500': isWatchLater })}
                                onClick={() => setIsWatchLater((prev) => !prev)}
                            />
                        </div>
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>
            <main className='h-[calc(100vh-4rem)] w-full overflow-auto'>
                <InnerSidebarTrigger
                    onClick={() => setOpen((prev) => !prev)}
                    className='absolute m-2 cursor-pointer bg-white'
                />
                <Image
                    src={MOVIE_DATA.backdrop}
                    alt={MOVIE_DATA.title}
                    width={1920}
                    height={1080}
                    quality={100}
                    className='!h-1/5 w-full object-cover object-top'
                />
                <Container>{children}</Container>
            </main>
        </SidebarProvider>
    );
};

export default MovieLayout;
