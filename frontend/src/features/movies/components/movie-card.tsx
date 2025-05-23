'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Poster from '@/components/shared/poster';
import { useIncrementMovieViews } from '@/features/movies/hooks/use-increment-movie-views';
import { GetMoviesQuery } from '@/generated/graphql';

export function MovieCard({ movie, viewMode }: { movie: GetMoviesQuery['movies'][number]; viewMode: 'grid' | 'list' }) {
    const router = useRouter();
    const { mutate: bumpViews } = useIncrementMovieViews(movie.id);

    if (!movie) return null;

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        bumpViews({ id: movie.id });
        router.push(`/dashboard/movies/${movie.id}`);
    };

    if (viewMode === 'list') {
        return (
            <Link href={`/dashboard/movies/${movie.id}`} scroll={false} onClick={handleClick}>
                <div className='hover:bg-muted/50 flex items-center gap-4 rounded-lg border p-4 transition-colors'>
                    <div className='relative aspect-[2/3] w-24 shrink-0 overflow-hidden rounded-md'>
                        <Poster title={movie.title} image={movie.poster} />
                    </div>
                    <div className='min-w-0 flex-1'>
                        <h3 className='truncate text-lg font-semibold'>{movie.title}</h3>
                        {movie.overview && (
                            <p className='text-muted-foreground mt-1 line-clamp-2 text-sm'>{movie.overview}</p>
                        )}
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link href={`/dashboard/movies/${movie.id}`} scroll={false} onClick={handleClick}>
            <Poster title={movie.title} image={movie.poster} />
        </Link>
    );
}
