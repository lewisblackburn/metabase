"use client";

import { MoviesQuery, MoviesQueryVariables, MoviesDocument } from "@/generated/graphql";
import { createNhostClientSingleton } from "@/lib/nhost/client";
import Link from "next/link";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

const ITEMS_PER_PAGE = 5;

export default function MovieList() {
	const nhost = createNhostClientSingleton();
	const loadMoreRef = useRef<HTMLDivElement>(null);

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isError,
	} = useInfiniteQuery({
		queryKey: ["movies"],
		queryFn: async ({ pageParam = 0 }) => {
			const {
				body: { data },
			} = await nhost.graphql.request<MoviesQuery, MoviesQueryVariables>(
				MoviesDocument,
				{
					limit: ITEMS_PER_PAGE,
					offset: pageParam,
				},
			);
			return data?.movies || [];
		},
		getNextPageParam: (lastPage, allPages) => {
			// If the last page has fewer items than ITEMS_PER_PAGE, we've reached the end
			if (lastPage.length < ITEMS_PER_PAGE) return undefined;
			return allPages.length * ITEMS_PER_PAGE;
		},
		initialPageParam: 0,
	});

	// Intersection Observer for infinite scroll
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const first = entries[0];
				if (first?.isIntersecting && hasNextPage && !isFetchingNextPage) {
					fetchNextPage();
				}
			},
			{ threshold: 0.5 },
		);

		const currentRef = loadMoreRef.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [fetchNextPage, hasNextPage, isFetchingNextPage]);

	if (isLoading) {
		return <div className="text-center py-8">Loading movies...</div>;
	}

	if (isError) {
		return <div className="text-center py-8 text-red-500">Error loading movies</div>;
	}

	const movies = data?.pages.flat() || [];

	return (
		<div className="flex flex-col gap-2">
			{movies.map((movie) => (
				<Link key={movie?.id} href={`/movies/${movie?.id}`}>
					{/* <MoviePoster posterId={movie?.posterId} /> */}
					<div className="flex items-center gap-2 size-96 bg-red-500">
						{movie?.title}
					</div>
				</Link>
			))}

			{/* Loading indicator and intersection observer target */}
			<div ref={loadMoreRef} className="py-8 text-center">
				{isFetchingNextPage ? (
					<div className="text-gray-500">Loading more movies...</div>
				) : hasNextPage ? (
					<div className="text-gray-400">Scroll to load more</div>
				) : (
					<div className="text-gray-400">No more movies to load</div>
				)}
			</div>
		</div>
	);
}