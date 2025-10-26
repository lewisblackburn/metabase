import Link from "next/link";
import type { MoviesQuery } from "@/generated/graphql";
import MoviePoster from "../movie-poster/movie-poster";

interface MovieCardProps {
	movie: NonNullable<MoviesQuery["movies"]>[number];
}

export function MovieCard({ movie }: MovieCardProps) {
	return (
		<Link href={`/movies/${movie.id}`}>
			<div className="flex items-center gap-2">
				<MoviePoster posterId={movie.posterId} />
				{movie.title}
			</div>
		</Link>
	);
}
