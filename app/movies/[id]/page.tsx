import Movie from "./compoents/movie";

export default async function MoviePage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return (
		<div>
			<Movie id={id} />
		</div>
	);
}