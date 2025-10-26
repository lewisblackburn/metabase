export default function MovieListError() {
	return (
		<div className="flex flex-col items-center justify-center py-10">
			<p className="text-red-600 font-medium">Something went wrong loading movies.</p>
			<button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
				Retry
			</button>
		</div>
	);
}