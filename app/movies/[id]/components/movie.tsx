import { MovieDocument, MovieQuery, MovieQueryVariables } from "@/generated/graphql";
import { createNhostClient } from "@/lib/nhost/server";
import { Suspense } from "react";
import MoviePosterSkeleton from "../../components/movie-poster/movie-poster-skeleton";
import MoviePoster from "../../components/movie-poster/movie-poster";

export default async function Movie({ id }: { id: string }) {
	const nhost = await createNhostClient();
	const { body: { data } } = await nhost.graphql.request<MovieQuery, MovieQueryVariables>(MovieDocument, { id });
	const movie = data?.movies_by_pk;

	return (
		<div>
			<MoviePoster posterId={movie?.posterId} posterSize="lg" />
			<h1>{movie?.title}</h1>
		</div>
	);
}