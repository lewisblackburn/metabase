import Movie from "./components/movie";

export default async function MoviePage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return (
		<Movie id={id} />
	);
}