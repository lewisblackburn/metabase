export function MovieCardSkeleton() {
	return (
		<div className="flex items-center gap-2 p-4 bg-gray-200 animate-pulse rounded-md w-96 h-24">
			<div className="w-16 h-20 bg-gray-300 rounded-md" />
			<div className="flex flex-col gap-2 w-full">
				<div className="h-4 bg-gray-300 rounded w-3/4" />
				<div className="h-3 bg-gray-300 rounded w-1/2" />
			</div>
		</div>
	);
}
