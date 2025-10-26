"use client";

import { gridColumnsMapping, useLayoutStore } from "@/lib/stores/layout.store";
import { cn } from "@/lib/utils";

interface MediaGridProps {
	children: React.ReactNode;
	className?: string;
}
export default function MediaGrid({ children, className }: MediaGridProps) {
	const { posterSize } = useLayoutStore();

	return (
		<div className={cn(`grid ${gridColumnsMapping[posterSize]} gap-4`, className)}>
			{children}
		</div>
	);
}