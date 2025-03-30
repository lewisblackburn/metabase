'use client';

import { Fragment, ReactNode, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import InformationItem from '@/components/information-item';
import { InnerSidebarTrigger } from '@/components/inner-sidebar-trigger';
import { Container } from '@/components/ui/container';
import { MOVIE_DATA } from '@/constants/fakedb.constant';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Sidebar, SidebarContent, SidebarMenu, SidebarProvider, useSidebar } from '@/registry/new-york-v4/ui/sidebar';
import isLastIndex from '@/utils/isLastIndex';

import { Calendar, CreditCard, Info, Play, Tags, Timer, TrendingUp, User } from 'lucide-react';

const Information = [
    {
        icon: <Calendar size='1em' />,
        badge: MOVIE_DATA.releaseDate,
        children: 'Release Date'
    },
    {
        icon: <Tags size='1em' />,
        badge: MOVIE_DATA.genre,
        children: 'Genre'
    },
    {
        icon: <Timer size='1em' />,
        badge: MOVIE_DATA.duration,
        children: 'Duration'
    },
    {
        icon: <Info size='1em' />,
        badge: MOVIE_DATA.status,
        children: 'Status'
    },
    {
        icon: <User size='1em' />,
        badge: MOVIE_DATA.director,
        children: 'Director'
    },
    {
        icon: <TrendingUp size='1em' />,
        badge: MOVIE_DATA.revenue,
        children: 'Revenue'
    },
    {
        icon: <CreditCard size='1em' />,
        badge: MOVIE_DATA.budget,
        children: 'Budget'
    }
];

const MovieLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    const [open, setOpen] = useState(true);

    return (
        <SidebarProvider
            style={
                {
                    '--sidebar-width': '300px'
                } as React.CSSProperties
            }
            className='relative z-0 !h-[calc(100vh-4rem)] !min-h-0 overflow-hidden'
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
                        {/* BUG: Can't see the cursor icon */}
                        <Link href={MOVIE_DATA.trailer}>
                            <Button variant='secondary' className='w-full'>
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
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>
            <main className='h-[calc(100vh-4rem)] w-full overflow-auto'>
                <InnerSidebarTrigger onClick={() => setOpen((prev) => !prev)} className='absolute m-2 bg-white' />
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
