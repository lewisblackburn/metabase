import MovieSkeleton from "./compoents/movie-skeleton";
import { Suspense } from "react";
import Movie from "./compoents/movie";

export default async function MoviePage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return (
		<div>
			<Suspense fallback={<MovieSkeleton />}>
				<Movie id={id} />
			</Suspense>
		</div>
	);
}