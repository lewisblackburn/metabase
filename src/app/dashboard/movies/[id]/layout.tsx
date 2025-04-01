'use client';

import { Fragment, ReactNode, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import InformationItem from '@/components/shared/information-item';
import { InnerSidebarTrigger } from '@/components/shared/inner-sidebar-trigger';
import ProgressItem from '@/components/shared/progress-item';
import { Container } from '@/components/ui/container';
import { MOVIE_DATA } from '@/constants/fakedb.constant';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Sidebar, SidebarContent, SidebarMenu, SidebarProvider, useSidebar } from '@/registry/new-york-v4/ui/sidebar';
import isLastIndex from '@/utils/isLastIndex';

import { Calendar, CreditCard, Info, Play, Tags, Timer, TrendingUp, User } from 'lucide-react';

const Information = [
    {
        icon: Calendar,
        badges: MOVIE_DATA.releaseDate,
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
                            {Information.map((item, index) => (
                                <Fragment key={index}>
                                    <InformationItem key={index} {...item} />
                                    {isLastIndex(index, Information) ? null : <Separator />}
                                </Fragment>
                            ))}
                        </div>
                        <Separator />
                        <ProgressItem icon={TrendingUp} label='Content Score' score={MOVIE_DATA.contentScore} />
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
                    layout='responsive'
                    width={1920}
                    height={1080}
                    quality={100}
                    className='!h-1/5 object-cover object-top'
                />
                <Container>{children}</Container>
            </main>
        </SidebarProvider>
    );
};

export default MovieLayout;
