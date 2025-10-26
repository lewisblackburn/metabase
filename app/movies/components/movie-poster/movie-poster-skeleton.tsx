"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { posterSizeClasses, useLayoutStore } from "@/lib/stores/layout.store";
import { cn } from "@/lib/utils";

interface MoviePosterSkeletonProps {
	posterSize?: "sm" | "md" | "lg";
}

export default function MoviePosterSkeleton({ posterSize }: MoviePosterSkeletonProps) {
	const { posterSize: currentPosterSize, isHydrated } = useLayoutStore();

	if (!isHydrated) return null;

	// if posterSize is not provided, use the current poster size
	const size = posterSize ?? currentPosterSize;

	return (
		<div className={cn("relative", posterSizeClasses[size])}>
			<Skeleton className="absolute inset-0 aspect-poster object-cover bg-muted rounded-md" />
		</div>
	);
}