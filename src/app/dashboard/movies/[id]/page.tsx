'use client';

import Link from 'next/link';

import ImageSlider from '@/components/image-slider';
import { CustomBadge } from '@/components/ui/custom-badge';
import { OBJECT_TYPE } from '@/constants/media';
import SoundtrackTable from '@/features/movies/components/SoundtrackTable';
import Review from '@/features/reviews/components/Review';
import { Separator } from '@/registry/new-york-v4/ui/separator';

import { MOVIE_DATA } from './layout';
import { Layers2, Lightbulb } from 'lucide-react';

export default function MoviePage() {
    const castImages = MOVIE_DATA.cast.map((actor) => ({
        id: actor.name,
        src: actor.headshot,
        alt: actor.character,
        title: actor.name,
        description: actor.character
    }));

    // NOTE: This is not in the MOVIE_DATA as it will be dynamically fetched based on user and movie id from a custom NHost runner
    const recommendations = [
        {
            id: 'recomendation-1',
            src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg',
            alt: 'The Notebook',
            title: 'The Notebook'
        },
        {
            id: 'recomendation-2',
            src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/y5GUXzTvt7kSQbdQrSvbYNoa8HB.jpg',
            alt: 'The Vow',
            title: 'The Vow'
        },
        {
            id: 'recomendation-3',
            src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg',
            alt: 'Her',
            title: 'Her '
        },
        {
            id: 'recomendation-4',
            src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aKCvdFFF5n80P2VdS7d8YBwbCjh.jpg',
            alt: 'The Perks of Being a Wallflower',
            title: 'The Perks of Being a Wallflower'
        },
        {
            id: 'recomendation-5',
            src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qx4HXHXt528hS4rwePZbZo20xqZ.jpg',
            alt: 'Begin Again',
            title: 'Begin Again'
        }
    ];

    const MOST_POPULAR_REVIEW = MOVIE_DATA.reviews[0];

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
                <h2 className=''>{MOVIE_DATA.title}</h2>
                <p className='text-muted-foreground'>{MOVIE_DATA.tagline}</p>
                <p className=''>{MOVIE_DATA.overview}</p>
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
                        user={MOST_POPULAR_REVIEW.user}
                        content={MOST_POPULAR_REVIEW.content}
                        votes={MOST_POPULAR_REVIEW.votes}
                        voteStatus={MOST_POPULAR_REVIEW.voteStatus}
                        rating={MOST_POPULAR_REVIEW.rating}
                        createdAt={MOST_POPULAR_REVIEW.createdAt}
                    />
                </div>
                <Separator />
                {/* <div className='flex flex-col gap-2'> */}
                {/*     <CustomBadge */}
                {/*         icon={OBJECT_TYPE.MEDIUM.icon} */}
                {/*         background={OBJECT_TYPE.MEDIUM.background} */}
                {/*         foreground={OBJECT_TYPE.MEDIUM.foreground} */}
                {/*         border={OBJECT_TYPE.MEDIUM.border}> */}
                {/*         {OBJECT_TYPE.MEDIUM.plural} */}
                {/*     </CustomBadge> */}
                {/* </div> */}
                {/* <Separator /> */}
                <div className='flex flex-col gap-2'>
                    <CustomBadge
                        icon={Lightbulb}
                        background='bg-blue-300/20'
                        foreground='text-blue-800'
                        border='border-blue-400/60'>
                        Recommendations
                    </CustomBadge>
                    <ImageSlider images={recommendations} width={150} height={250} />
                </div>
            </div>
        </div>
    );
}
