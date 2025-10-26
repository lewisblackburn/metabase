import { MoviesQuery, MoviesQueryVariables, MoviesDocument } from "@/generated/graphql";
import { createNhostClient } from "@/lib/nhost/server";
import Link from "next/link";

export default async function Movies() {
	const nhost = await createNhostClient();
	const { body: { data } } = await nhost.graphql.request<MoviesQuery, MoviesQueryVariables>(MoviesDocument);
	const movies = data?.movies;

	return (
		<div className="flex flex-col gap-2">
			{movies?.map((movie) => (
				<Link key={movie?.id} href={`/movies/${movie?.id}`}>
					{/* <MoviePoster posterId={movie?.posterId} /> */}
					<div className="flex items-center gap-2 size-96 bg-red-500">
						{movie?.title}
					</div>
				</Link>
			))}
		</div>
	);
}