"use client";

import { MovieCard } from "../movie-card/movie-card";
import { useInfiniteMovies } from "@/hooks/useInfiniteMovies";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import MovieListSkeleton from "./movie-list-skeleton";
import MovieListError from "./movie-list-error";
import MediaGrid from "@/components/media-grid";
import { Fragment } from "react/jsx-runtime";

const ITEMS_PER_PAGE = 50;

export default function MovieList() {
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isError,
	} = useInfiniteMovies({ itemsPerPage: ITEMS_PER_PAGE });

	const loadMoreRef = useInfiniteScroll({
		enabled: hasNextPage && !isFetchingNextPage,
		onLoadMore: fetchNextPage,
	});

	if (isLoading) return <MovieListSkeleton itemsPerPage={ITEMS_PER_PAGE} />;
	if (isError) return <MovieListError />;

	const movies = data?.pages.flat() || [];

	return (
		<Fragment>
			<MediaGrid>
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}

			</MediaGrid>
			<div ref={loadMoreRef}>
				{isFetchingNextPage && <MovieListSkeleton itemsPerPage={ITEMS_PER_PAGE} />}
			</div>
		</Fragment>
	);

}
