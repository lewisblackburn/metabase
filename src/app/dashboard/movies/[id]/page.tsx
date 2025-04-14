'use client';

import Link from 'next/link';

import AwardTable from '@/components/shared/award-table';
import ImageSlider from '@/components/shared/image-slider';
import { CustomBadge } from '@/components/ui/custom-badge';
import { MOVIE_DATA } from '@/constants/fakedb.constant';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { useMovie } from '@/features/movies/components/movie-provider';
import SoundtrackTable from '@/features/movies/components/soundtrack-table';
import Review from '@/features/reviews/components/review';
import { Separator } from '@/registry/new-york-v4/ui/separator';

import { Layers2 } from 'lucide-react';

export default function MoviePageContent() {
    const { movie } = useMovie();

    if (!movie) return null;

    const castImages = movie.movie_cast_members.map((cast_member) => ({
        id: cast_member.person.name,
        src: cast_member.person.headshot ?? '',
        alt: cast_member.character ?? '',
        title: cast_member.person.name ?? '',
        description: cast_member.character ?? ''
    }));

    const mostPopularReview = MOVIE_DATA.reviews[0];

    return (
        <div className='flex flex-col gap-5'>
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
            <div className='flex flex-col gap-2'>
                <h2>{movie.title}</h2>
                <p className='text-muted-foreground'>{movie.tagline}</p>
                <p>{movie.overview}</p>
            </div>
            <div className='flex flex-col gap-10 py-5'>
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
