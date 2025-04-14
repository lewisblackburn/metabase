'use client';

import { ReactNode, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import DefaultLoading from '@/components/shared/default-loading';
import NotFound from '@/components/shared/default-not-found';
import InformationItem from '@/components/shared/information-item';
import { InnerSidebarTrigger } from '@/components/shared/inner-sidebar-trigger';
import Poster from '@/components/shared/poster';
import ProgressItem from '@/components/shared/progress-item';
import { Container } from '@/components/ui/container';
import { MOVIE_DATA } from '@/constants/fakedb.constant';
import { LANGUAGES } from '@/constants/languages.constant';
import { useBreadCrumbs } from '@/features/dashboard/components/breadcrumbs';
import { toggleEditDialogOpenState } from '@/features/edit-dailog/store/edit-dialog.slice';
import MovieFavouriteButton from '@/features/movies/components/movie-favourite-button';
import { MovieProvider, useMovie } from '@/features/movies/components/movie-provider';
import MovieWatchlistButton from '@/features/movies/components/movie-watchlist-button';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { Sidebar, SidebarContent, SidebarMenu, SidebarProvider } from '@/registry/new-york-v4/ui/sidebar';
import isLastIndex from '@/utils/is-last-index';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { Calendar, CreditCard, Info, Languages, Play, Tags, Timer, TrendingUp, User } from 'lucide-react';
import { useDispatch } from 'react-redux';

dayjs.extend(advancedFormat);

export default function MovieLayout({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(true);

    return (
        <MovieProvider>
            <MovieLayoutContent open={open} setOpen={setOpen}>
                {children}
            </MovieLayoutContent>
        </MovieProvider>
    );
}

function MovieLayoutContent({
    children,
    open,
    setOpen
}: {
    children: ReactNode;
    open: boolean;
    setOpen: (prev: boolean) => void;
}) {
    const dispatch = useDispatch();
    const { movie, isLoading } = useMovie();

    useBreadCrumbs(movie?.title || '');

    if (isLoading) return <DefaultLoading />;
    if (!movie) return <NotFound />;

    const information = [
        {
            id: 'release-date',
            icon: Calendar,
            badges: dayjs(movie.release_date).format('MMMM Do, YYYY'),
            label: 'Release Date'
        },
        {
            id: 'genre',
            icon: Tags,
            badges: movie.movie_genres.map((genre) => genre.genre.name),
            label: 'Genre'
        },
        {
            id: 'duration',
            icon: Timer,
            badges: movie.formatted_runtime,
            label: 'Duration'
        },
        {
            id: 'status',
            icon: Info,
            badges: movie.status,
            label: 'Status'
        },
        {
            id: 'language',
            icon: Languages,
            badges: LANGUAGES.find((lang) => lang.code === movie.language)?.label,
            label: 'Language'
        },
        {
            id: 'age-certification',
            icon: User,
            badges: movie.age_certification,
            label: 'Age Certification'
        },
        {
            id: 'director',
            icon: User,
            badges: MOVIE_DATA.director,
            label: 'Director'
        },
        {
            id: 'revenue',
            icon: TrendingUp,
            badges: movie.revenue,
            label: 'Revenue'
        },
        {
            id: 'budget',
            icon: CreditCard,
            badges: movie.budget,
            label: 'Budget'
        },
        {
            id: 'keywords',
            icon: Tags,
            badges: movie.movie_keywords.map((keyword) => keyword.keyword.keyword),
            label: 'Keywords'
        }
    ];

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
                        <Poster title={movie.title} image={movie.poster} />
                        {movie.trailer && (
                            <a href={movie.trailer} target='_blank' rel='noopener noreferrer' className='w-full'>
                                <Button variant='secondary' className='w-full cursor-pointer'>
                                    <Play />
                                    Play Trailer
                                </Button>
                            </a>
                        )}

                        <div className='mt-5 flex flex-col gap-5'>
                            {information.map((item, idx) => (
                                <div key={item.id}>
                                    <InformationItem {...item} />
                                    {!isLastIndex(idx, information) && <Separator className='mt-5' />}
                                </div>
                            ))}
                        </div>
                        <Separator />
                        <ProgressItem icon={TrendingUp} label='Content Score' score={movie.content_score} />
                        <Separator />
                        <div className='grid grid-cols-2 gap-2'>
                            <MovieFavouriteButton />
                            <MovieWatchlistButton />
                        </div>
                        <Separator />
                        <Button
                            variant='secondary'
                            className='w-full cursor-pointer'
                            onClick={() => {
                                dispatch(
                                    toggleEditDialogOpenState({
                                        objectType: 'MOVIE',
                                        objectId: movie.id
                                    })
                                );
                            }}>
                            Edit Movie
                        </Button>
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>
            <main className='h-[calc(100vh-4rem)] w-full overflow-auto'>
                <InnerSidebarTrigger onClick={() => setOpen(!open)} className='absolute m-2 cursor-pointer bg-white' />
                <Image
                    src={movie.backdrop}
                    alt={movie.title}
                    width={1920}
                    height={1080}
                    quality={100}
                    className='!h-1/5 w-full object-cover object-top'
                />
                <Container>{children}</Container>
            </main>
        </SidebarProvider>
    );
}
