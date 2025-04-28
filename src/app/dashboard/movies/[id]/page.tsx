'use client';

import Link from 'next/link';

import ActionButton from '@/components/shared/action-button';
import ItemInformation from '@/components/shared/item-information';
import ResponsiveDialog from '@/components/shared/responsive-dailog';
import ScrollableTabs from '@/components/shared/scrollable-tabs';
import { LANGUAGES } from '@/constants/languages.constant';
import { toggleEditDialogOpenState } from '@/features/edit-dailog/store/edit-dialog.slice';
import MovieChanges from '@/features/movies/components/movie-changes';
import MovieContentScore from '@/features/movies/components/movie-content-score';
import MovieCredits from '@/features/movies/components/movie-credits';
import MovieFavouriteButton from '@/features/movies/components/movie-favourite-button';
import MovieLayout from '@/features/movies/components/movie-layout';
import MovieOverview from '@/features/movies/components/movie-overview';
import { MovieProvider, useMovie } from '@/features/movies/components/movie-provider';
import MovieStatusPicker from '@/features/movies/components/movie-status-picker';
import ReviewMovieDialog from '@/features/movies/components/review-movie-dialog';
import SoundtrackTable from '@/features/movies/components/soundtrack-table';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { TabsContent } from '@/registry/new-york-v4/ui/tabs';

import dayjs from 'dayjs';
import { channel } from 'diagnostics_channel';
import {
    Calendar,
    CreditCard,
    Edit,
    Eye,
    Image,
    Info,
    Languages,
    Layers2,
    Music,
    Play,
    Star,
    Tags,
    Timer,
    TrendingUp,
    Trophy,
    User,
    Video
} from 'lucide-react';
import { useDispatch } from 'react-redux';

export default function MoviePage() {
    return (
        <MovieProvider>
            <MoviePageContent />
        </MovieProvider>
    );
}

const tabItems = [
    { value: 'reviews', icon: Star, label: 'Reviews' },
    { value: 'where-to-watch', icon: Layers2, label: 'Where to Watch' },
    { value: 'credits', icon: User, label: 'Credits' },
    { value: 'soundtrack', icon: Music, label: 'Soundtrack' },
    { value: 'awards', icon: Trophy, label: 'Awards' },
    { value: 'images', icon: Image, label: 'Images' },
    { value: 'videos', icon: Video, label: 'Videos' },
    { value: 'changes', icon: Edit, label: 'Changes' }
];

function MoviePageContent() {
    const dispatch = useDispatch();
    const { movie } = useMovie();

    if (!movie) return null;

    const tabContents = {
        reviews: {
            content: 'No reviews available.'
        },
        'where-to-watch': { content: 'No where to watch information available.' },
        credits: { content: <MovieCredits /> },
        soundtrack: { content: <SoundtrackTable /> },
        awards: { content: 'No awards available' },
        images: { content: 'No images available.' },
        videos: { content: 'No videos available.' },
        changes: { content: <MovieChanges /> }
    };

    return (
        <MovieLayout
            backdropAlt={movie.title}
            backdropImage={movie.backdrop}
            posterAlt={movie.title}
            posterImage={movie.poster}>
            {{
                mainContent: (
                    <div className='space-y-4'>
                        <div>
                            <div className='flex items-start justify-between'>
                                <h2>{movie.title}</h2>
                            </div>
                            {movie.tagline && (
                                <p className='text-muted-foreground mt-1 text-sm italic'>{movie.tagline}</p>
                            )}

                            <div className='mt-3 flex flex-wrap gap-2'>
                                {movie.movie_genres.map((genre) => (
                                    <Badge key={genre.genre.name} variant='outline'>
                                        {genre.genre.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className='text-muted-foreground flex flex-wrap gap-x-6 gap-y-2 text-sm'>
                            <span className='flex items-center gap-1'>
                                <Calendar className='h-4 w-4' />
                                {dayjs(movie.release_date).format('MMMM Do, YYYY')}
                            </span>
                            <span className='flex items-center gap-1'>
                                <Timer className='h-4 w-4' />
                                {movie.formatted_runtime}
                            </span>
                            {movie.certification && (
                                <span className='flex items-center gap-1'>
                                    <User className='h-4 w-4' />
                                    {movie.certification.name}
                                </span>
                            )}
                            <ResponsiveDialog
                                title='More Information'
                                hasVisibleTitle
                                trigger={
                                    <span className='flex cursor-pointer items-center gap-1'>
                                        <Info className='size-3' />
                                        View More
                                    </span>
                                }>
                                <div className='flex flex-col gap-4'>
                                    <ItemInformation icon={Languages} label='Language'>
                                        {LANGUAGES.find((lang) => lang.code === movie.language)?.label || 'Unknown'}
                                    </ItemInformation>

                                    <ItemInformation icon={Info} label='Status'>
                                        {movie.status?.name || 'Unknown'}
                                    </ItemInformation>

                                    <ItemInformation icon={CreditCard} label='Budget'>
                                        {movie.budget || 'Not available'}
                                    </ItemInformation>

                                    <ItemInformation icon={TrendingUp} label='Revenue'>
                                        {movie.revenue || 'Not available'}
                                    </ItemInformation>

                                    <ItemInformation icon={Eye} label='View Count'>
                                        {movie.view_count || 0}
                                    </ItemInformation>

                                    <ItemInformation icon={TrendingUp} label='Content Score'>
                                        <MovieContentScore />
                                    </ItemInformation>
                                </div>
                            </ResponsiveDialog>
                        </div>

                        <MovieOverview />

                        <div className='flex flex-wrap items-center gap-2'>
                            <MovieFavouriteButton />
                            {movie.trailer && (
                                <Link href={movie.trailer ?? ''} target='_blank'>
                                    <Button variant='outline' size='sm'>
                                        <Play className='mr-1 h-4 w-4' />
                                        Play Trailer
                                    </Button>
                                </Link>
                            )}
                            <ReviewMovieDialog />
                            <MovieStatusPicker />
                            <ActionButton
                                icon={Edit}
                                size='sm'
                                onClick={() =>
                                    dispatch(toggleEditDialogOpenState({ objectType: 'MOVIE', objectId: movie.id }))
                                }>
                                Edit
                            </ActionButton>
                        </div>
                    </div>
                ),
                bottomContent: (
                    <ScrollableTabs defaultValue='reviews' tabs={tabItems}>
                        {Object.entries(tabContents).map(([key, { content }]) => (
                            <TabsContent key={key} value={key} className='px-1'>
                                {content}
                            </TabsContent>
                        ))}
                    </ScrollableTabs>
                )
            }}
        </MovieLayout>
    );
}
