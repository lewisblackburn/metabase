'use client';

import { Fragment, ReactNode, useState } from 'react';

import Image from 'next/image';

import { Container } from '@/components/ui/container';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Sidebar, SidebarContent, SidebarMenu, SidebarProvider, useSidebar } from '@/registry/new-york-v4/ui/sidebar';
import isLastIndex from '@/utils/isLastIndex';

import { Calendar, ChevronLeft, ChevronRight, CreditCard, Info, Tags, Timer, TrendingUp, User } from 'lucide-react';

export const MOVIE_DATA = {
    title: 'About Time',
    year: 2013,
    releaseDate: '8 August 2013',
    genre: ['Romance', 'Comedy', 'Drama'],
    duration: '2h 3m',
    status: 'Released',
    director: 'Richard Curtis',
    revenue: '$87.1 million',
    budget: '$12 million',
    overview: `At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.`,
    tagline: `A new funny film about love. With a bit of time travel.`,
    poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ls6zswrOZVhCXQBh96DlbnLBajM.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/ppWSi3evUtz9YGNcmsnjmH3FARy.jpg',
    cast: [
        {
            name: 'Domhnall Gleeson',
            character: 'Tim Lake'
        },
        {
            name: 'Rachel McAdams',
            character: 'Mary'
        },
        {
            name: 'Bill Nighy',
            character: 'Dad'
        },
        {
            name: 'Lydia Wilson',
            character: 'Kit Kat'
        },
        {
            name: 'Lindsay Duncan',
            character: 'Mum'
        }
    ],
    crew: [
        {
            name: 'Richard Curtis',
            job: 'Director'
        },
        {
            name: 'Richard Curtis',
            job: 'Screenplay'
        },
        {
            name: 'John Guleserian',
            job: 'Director of Photography'
        },
        {
            name: 'Mark Day',
            job: 'Editor'
        },
        {
            name: 'Marcus Rowland',
            job: 'Production Design'
        }
    ],
    rating: 7.9,
    reviews: [
        {
            content: `About Time is a sweet FILM_DATA.that's nice to look at and easy to watch. It's a film that's easy to enjoy, but it's also a film that's easy to forget. It's a film that's easy to enjoy, but it's also a film that's easy to forget.`,
            rating: 3.5,
            user: {
                name: 'John Doe',
                avatar: 'https://randomuser.me/api/portraits'
            },
            date: '8 August 2013'
        },
        {
            content: `You can't help but be charmed by About Time. It's a FILM_DATA.that's easy to enjoy, but it's also a film that's easy to forget. It's a film that's easy to enjoy, but it's also a film that's easy to forget.`,
            rating: 4.5,
            user: {
                name: 'Jane Doe',
                avatar: 'https://randomuser.me/api/portraits'
            }
        }
    ]
};

const Information = [
    {
        icon: <Calendar size='1em' />,
        badge: MOVIE_DATA.releaseDate,
        children: 'Release Date'
    },
    {
        icon: <Tags size='1em' />,
        badge: MOVIE_DATA.genre.join(', '),
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

const InformationItem = ({
    icon,
    children,
    badge
}: Readonly<{ icon: React.ReactNode; children: React.ReactNode; badge: string }>) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2 text-sm'>
                {icon}
                <span>{children}</span>
            </div>
            <Badge variant='outline'>{badge}</Badge>
        </div>
    );
};

function SidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
    const { open, toggleSidebar } = useSidebar();
    const isMobile = useIsMobile();

    return (
        <Button
            data-sidebar='trigger'
            data-slot='sidebar-trigger'
            variant='ghost'
            size='icon'
            className={cn('text-muted-foreground h-7 w-7 cursor-pointer', className)}
            onClick={(event) => {
                onClick?.(event);
                toggleSidebar();
            }}
            {...props}>
            {!isMobile ? open ? <ChevronLeft /> : <ChevronRight /> : <Info />}
            <span className='sr-only'>Toggle Sidebar</span>
        </Button>
    );
}

const FilmLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
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
                            className='mb-5 size-full rounded'
                            quality={100}
                        />
                        {Information.map((item, index) => (
                            <Fragment key={index}>
                                <InformationItem key={index} {...item} />
                                {isLastIndex(index, Information) ? null : <Separator />}
                            </Fragment>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>
            <main className='w-full'>
                <SidebarTrigger onClick={() => setOpen((prev) => !prev)} className='absolute m-2 bg-white' />
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

export default FilmLayout;
