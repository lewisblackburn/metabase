import { useEffect, useRef } from "react";

interface InfiniteScrollOptions {
	enabled: boolean;
	onLoadMore: () => void;
	threshold?: number;
}

export function useInfiniteScroll({ enabled, onLoadMore, threshold = 0.5 }: InfiniteScrollOptions) {
	const loadMoreRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!enabled) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const first = entries[0];
				if (first?.isIntersecting) onLoadMore();
			},
			{ threshold },
		);

		const currentRef = loadMoreRef.current;
		if (currentRef) observer.observe(currentRef);

		return () => {
			if (currentRef) observer.unobserve(currentRef);
		};
	}, [enabled, onLoadMore, threshold]);

	return loadMoreRef;
}
