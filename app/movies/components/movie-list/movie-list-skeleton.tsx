import MediaGrid from '@/components/media-grid'

import MoviePosterSkeleton from '../movie-poster/movie-poster-skeleton'

interface MovieListSkeletonProps {
    itemsPerPage: number
}

export default function MovieListSkeleton({ itemsPerPage }: MovieListSkeletonProps) {
    return (
        <MediaGrid>
            {[...Array(itemsPerPage)].map((_, i) => (
                <div key={`movie-poster-skeleton-${i}`} className="relative w-full aspect-poster">
                    <MoviePosterSkeleton />
                </div>
            ))}
        </MediaGrid>
    )
}
