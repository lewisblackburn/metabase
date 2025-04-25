'use client';

import Link from 'next/link';

import AwardTable from '@/components/shared/award-table';
import ImageSlider from '@/components/shared/image-slider';
import ImageWithSkeleton from '@/components/shared/image-with-skeleton';
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
import SoundtrackTable from '@/features/movies/components/soundtrack-table';
import Review from '@/features/reviews/components/review';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Separator } from '@/registry/new-york-v4/ui/separator';

import dayjs from 'dayjs';
import {
    Calendar,
    CreditCard,
    Eye,
    Info,
    Languages,
    Layers2,
    Play,
    Star,
    Tags,
    Timer,
    TrendingUp,
    User
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

function MoviePageContent() {
    const dispatch = useDispatch();
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
                            {/* <MovieFavouriteButton /> */}
                            {/* <MovieWatchlistButton /> */}
                            <Button variant='outline' size='sm'>
                                <Star className='size-3.5' />
                                Review
                            </Button>
                            {movie.trailer && (
                                <Link href={movie.trailer ?? ''} target='_blank'>
                                    <Button variant='outline' size='sm'>
                                        <Play />
                                        Play Trailer
                                    </Button>
                                </Link>
                            )}
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
                            {/* <MovieRatingSlider /> */}
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
                <div className='flex flex-col gap-2'>
                    <Link href='' className='w-fit'>
                        <CustomBadge
                            icon={OBJECT_TYPE.CAST.icon}
                            background={OBJECT_TYPE.CAST.background}
                            foreground={OBJECT_TYPE.CAST.foreground}
                            border={OBJECT_TYPE.CAST.border}>
                            {OBJECT_TYPE.CAST.name}
                        </CustomBadge>
                    </Link>
                    <ImageSlider images={castImages} />
                </div>
                <Separator />
                <div className='flex flex-col gap-2'>
                    <CustomBadge
                        icon={OBJECT_TYPE.SOUNDTRACK.icon}
                        background={OBJECT_TYPE.SOUNDTRACK.background}
                        foreground={OBJECT_TYPE.SOUNDTRACK.foreground}
                        border={OBJECT_TYPE.SOUNDTRACK.border}>
                        {OBJECT_TYPE.SOUNDTRACK.name}
                    </CustomBadge>
                    <SoundtrackTable />
                </div>
                <Separator />
                <div className='flex flex-col gap-2'>
                    <Link href='' className='w-fit'>
                        <CustomBadge
                            icon={OBJECT_TYPE.REVIEW.icon}
                            background={OBJECT_TYPE.REVIEW.background}
                            foreground={OBJECT_TYPE.REVIEW.foreground}
                            border={OBJECT_TYPE.REVIEW.border}>
                            {OBJECT_TYPE.REVIEW.plural}
                        </CustomBadge>
                    </Link>
                    <Review
                        id='review-1'
                        user={mostPopularReview.user}
                        content={mostPopularReview.content}
                        votes={mostPopularReview.votes}
                        voteStatus={mostPopularReview.voteStatus}
                        rating={mostPopularReview.rating}
                        createdAt={mostPopularReview.createdAt}
                    />
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
                    <AwardTable awards={MOVIE_DATA.awards} />
                </div>
            </div>
        </div>
    );
}
