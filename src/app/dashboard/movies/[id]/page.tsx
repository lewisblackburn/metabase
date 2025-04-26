'use client';

import Link from 'next/link';

import AwardTable from '@/components/shared/award-table';
import ImageSlider from '@/components/shared/image-slider';
import ImageWithSkeleton from '@/components/shared/image-with-skeleton';
import ScrollableTabs from '@/components/shared/scrollable-tabs';
import StatusPickerButton from '@/components/shared/status-picker.button';
import { CustomBadge } from '@/components/ui/custom-badge';
import { MOVIE_DATA } from '@/constants/fakedb.constant';
import { LANGUAGES } from '@/constants/languages.constant';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import MovieContentScore from '@/features/movies/components/movie-content-score';
import MovieFavouriteButton from '@/features/movies/components/movie-favourite-button';
import { MovieProvider, useMovie } from '@/features/movies/components/movie-provider';
import MovieStatusPicker from '@/features/movies/components/movie-status-picker';
import MovieWatchlistButton from '@/features/movies/components/movie-watchlist-button';
import ReviewMovieDialog from '@/features/movies/components/review-movie-dialog';
import SoundtrackTable from '@/features/movies/components/soundtrack-table';
import Review from '@/features/reviews/components/review';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { TabsContent } from '@/registry/new-york-v4/ui/tabs';

import dayjs from 'dayjs';
import {
    Calendar,
    CreditCard,
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

const Poster = ({ image, title }: { image: string; title: string }) => (
    <div className='relative aspect-[2/3] h-42 lg:h-96'>
        <ImageWithSkeleton
            src={image}
            alt={title}
            fill
            wrapperClassName='absolute inset-0'
            imageClassName='object-cover object-center border rounded-md'
        />
    </div>
);

const Backdrop = ({ image, title }: { image: string; title: string }) => (
    <div className='relative h-42 flex-1 lg:h-96'>
        <ImageWithSkeleton
            src={image}
            alt={title}
            fill
            wrapperClassName='absolute inset-0'
            imageClassName='object-cover object-top border rounded-md'
        />
    </div>
);

export default function MoviePage() {
    return (
        <MovieProvider>
            <MoviePageContent />
        </MovieProvider>
    );
}

const tabItems = [
    { value: 'reviews', icon: Star, label: 'Reviews' },
    {
        value: 'where-to-watch',
        icon: Layers2,
        label: 'Where to Watch'
    },
    {
        value: 'credits',
        icon: User,
        label: 'Credits'
    },
    {
        value: 'soundtrack',
        icon: Music,
        label: 'Soundtrack'
    },
    {
        value: 'awards',
        icon: Trophy,
        label: 'Awards'
    },
    {
        value: 'images',
        icon: Image,
        label: 'Images'
    },
    {
        value: 'videos',
        icon: Video,
        label: 'Videos'
    }
];

function MoviePageContent() {
    const { movie } = useMovie();

    if (!movie) return null;

    const castImages = movie.movie_cast_members.map((cast_member) => ({
        id: cast_member.person.name,
        src: cast_member.person.headshot ?? '',
        alt: cast_member.character ?? '',
        title: cast_member.person.name ?? '',
        description: cast_member.character ?? '',
        href: `/dashboard/${OBJECT_TYPE.PERSON.path}/${cast_member.person.id}`
    }));

    const mostPopularReview = MOVIE_DATA.reviews[0];
    const tabContents = {
        reviews: {
            content: (
                <Review
                    id='review-1'
                    user={mostPopularReview.user}
                    content={mostPopularReview.content}
                    votes={mostPopularReview.votes}
                    voteStatus={mostPopularReview.voteStatus}
                    rating={mostPopularReview.rating}
                    createdAt={mostPopularReview.createdAt}
                />
            )
        },
        'where-to-watch': { content: 'No where to watch information available.' },
        credits: { content: <ImageSlider images={castImages} /> },
        soundtrack: { content: <SoundtrackTable /> },
        awards: { content: <AwardTable awards={MOVIE_DATA.awards} /> },
        images: { content: 'No images available.' },
        videos: { content: 'No videos available.' }
    };

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex gap-2'>
                <Poster image={movie.poster} title={movie.title} />
                <Backdrop image={movie.backdrop} title={movie.title} />
            </div>
            <div className='flex flex-col gap-10 py-5'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-0'>
                        <div className='flex items-center gap-2'>
                            <CustomBadge
                                icon={OBJECT_TYPE.MOVIE.icon}
                                background={OBJECT_TYPE.MOVIE.background}
                                foreground={OBJECT_TYPE.MOVIE.foreground}
                                border={OBJECT_TYPE.MOVIE.border}>
                                {OBJECT_TYPE.MOVIE.name}
                            </CustomBadge>
                            <Link href=''>
                                <CustomBadge icon={Layers2}>Collections</CustomBadge>
                            </Link>
                        </div>

                        <div className='flex flex-wrap gap-2'>
                            <MovieFavouriteButton />
                            {movie.trailer && (
                                <Link href={movie.trailer ?? ''} target='_blank'>
                                    <Button variant='outline' size='sm'>
                                        <Play />
                                        Play Trailer
                                    </Button>
                                </Link>
                            )}
                            <ReviewMovieDialog />
                            <MovieStatusPicker />
                            {/* <Button
                                variant='outline'
                                size='sm'
                                onClick={() => {
                                    dispatch(
                                        toggleEditDialogOpenState({
                                            objectType: 'MOVIE',
                                            objectId: movie.id
                                        })
                                    );
                                }}>
                                <Edit2 className='size-3.5' />
                                Edit Movie
                            </Button> */}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2>{movie.title}</h2>
                        <p className='text-muted-foreground'>{movie.tagline}</p>
                        <p>{movie.overview}</p>
                    </div>
                </div>
                <Separator />
                <div className='flex flex-wrap gap-2'>
                    <CustomBadge icon={Calendar}>{dayjs(movie.release_date).format('MMMM Do, YYYY')}</CustomBadge>
                    {/* <CustomBadge icon={MapPin}>{movie.production_countries.join(', ')}</CustomBadge> */}
                    <CustomBadge icon={Timer}>{movie.formatted_runtime}</CustomBadge>
                    <CustomBadge icon={Languages}>
                        {LANGUAGES.find((lang) => lang.code === movie.language)?.label}
                    </CustomBadge>
                    <CustomBadge icon={Tags}>
                        {movie.movie_genres.map((genre) => genre.genre.name).join(', ')}
                    </CustomBadge>
                    <CustomBadge icon={Info}>{movie.status?.name ?? 'Unknown'}</CustomBadge>
                    <CustomBadge icon={Eye}>{movie.view_count}</CustomBadge>
                    <CustomBadge icon={CreditCard}>{movie.budget}</CustomBadge>
                    <CustomBadge icon={TrendingUp}>{movie.revenue}</CustomBadge>
                    <CustomBadge icon={User}>{movie.certification?.name ?? 'Unknown'}</CustomBadge>
                    {/* <CustomBadge icon={Tags}>{movie.movie_keywords.map((keyword) => keyword.keyword.keyword)}</CustomBadge> */}
                    <MovieContentScore />
                </div>
                <Separator />

                <ScrollableTabs defaultValue='reviews' tabs={tabItems}>
                    {Object.entries(tabContents).map(([key, { title, content }]) => (
                        <TabsContent key={key} value={key} className='mt-3 sm:mt-4'>
                            {content}
                        </TabsContent>
                    ))}
                </ScrollableTabs>
            </div>
        </div>
    );
}
