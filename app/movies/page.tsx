import { Suspense } from "react";
import Movies from "./components/movies";

export default function MoviesPage() {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<Movies />
			</Suspense>
		</div>
	);
}