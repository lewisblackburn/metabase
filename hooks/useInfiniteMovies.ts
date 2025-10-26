import { useInfiniteQuery } from "@tanstack/react-query";
import { MoviesQuery, MoviesQueryVariables, MoviesDocument } from "@/generated/graphql";
import { createNhostClientSingleton } from "@/lib/nhost/client";

interface UseInfiniteMoviesOptions {
	itemsPerPage: number;
}

export function useInfiniteMovies({ itemsPerPage }: UseInfiniteMoviesOptions) {
	const nhost = createNhostClientSingleton();

	return useInfiniteQuery({
		queryKey: ["movies", itemsPerPage],
		queryFn: async ({ pageParam = 0 }) => {
			const {
				body: { data },
			} = await nhost.graphql.request<MoviesQuery, MoviesQueryVariables>(
				MoviesDocument,
				{
					limit: itemsPerPage,
					offset: pageParam,
				},
			);
			return data?.movies || [];
		},
		getNextPageParam: (lastPage, allPages) =>
			lastPage.length < itemsPerPage ? undefined : allPages.length * itemsPerPage,
		initialPageParam: 0,
	});
}
