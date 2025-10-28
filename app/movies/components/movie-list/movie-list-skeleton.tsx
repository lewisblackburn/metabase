import MediaGrid from '@/components/media-grid'

import MoviePosterSkeleton from '../movie-poster/movie-poster-skeleton'

interface MovieListSkeletonProps {
    itemsPerPage: number
}

export default function MovieListSkeleton({ itemsPerPage }: MovieListSkeletonProps) {
    return (
        <MediaGrid>
            {[...Array(itemsPerPage)].map((_, i) => (
                <MoviePosterSkeleton key={`movie-poster-skeleton-${i}`} />
            ))}
        </MediaGrid>
    )
}
