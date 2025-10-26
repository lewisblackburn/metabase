import { MovieDocument, MovieQuery, MovieQueryVariables } from "@/generated/graphql";
import { createNhostClient } from "@/lib/nhost/server";

export default async function Movie({ id }: { id: string }) {
	const nhost = await createNhostClient();
	const { body: { data } } = await nhost.graphql.request<MovieQuery, MovieQueryVariables>(MovieDocument, { id });
	const movie = data?.movies_by_pk;

	return (
		<div>
			<h1>{movie?.title}</h1>
		</div>
	);
}