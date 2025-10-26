import { MovieDocument, MovieQuery, MovieQueryVariables } from "@/generated/graphql";
import { createNhostClient } from "@/lib/nhost/server";
import { Suspense } from "react";
import MoviePoster from "../../components/movie-poster";
import MoviePosterSkeleton from "../../components/movie-poster-skeleton";

export default async function Movie({ id }: { id: string }) {
	const nhost = await createNhostClient();
	const { body: { data } } = await nhost.graphql.request<MovieQuery, MovieQueryVariables>(MovieDocument, { id });
	const movie = data?.movies_by_pk;

	return (
		<div>
			<Suspense fallback={<MoviePosterSkeleton />}>
				<MoviePoster posterId={movie?.posterId} />
			</Suspense>
			<h1>{movie?.title}</h1>
		</div>
	);
}