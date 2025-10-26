import { MovieCardSkeleton } from "../movie-card/movie-card-skeleton";

interface MovieListSkeletonProps {
	itemsPerPage: number;
}

export default function MovieListSkeleton({ itemsPerPage }: MovieListSkeletonProps) {
	return (
		<div className="flex flex-col gap-2">
			{[...Array(itemsPerPage)].map((_, i) => (
				<MovieCardSkeleton key={`movie-card-skeleton-${i}`} />
			))}
		</div>
	);
}