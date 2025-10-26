"use client"

import { createNhostClientSingleton } from "@/lib/nhost/client";
import { posterSizeClasses, useLayoutStore } from "@/lib/stores/layout.store";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MoviePosterProps {
	posterId: string | null;
	posterSize?: "sm" | "md" | "lg";
}

export default function MoviePoster({ posterId, posterSize }: MoviePosterProps) {
	const { posterSize: currentPosterSize } = useLayoutStore();
	const nhost = createNhostClientSingleton();
	const url = `${nhost.storage.baseURL}/${posterId}`;

	// if posterSize is not provided, use the current poster size
	const size = posterSize ?? currentPosterSize;

	return (
		<div className={cn("relative", posterSizeClasses[size])}>
			<Image src={url} alt="Movie Poster" fill className="aspect-poster object-cover bg-muted rounded-md" loading="eager" />
		</div>
	);
}