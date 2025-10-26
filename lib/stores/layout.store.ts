import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type PosterSize = "sm" | "md" | "lg";

type LayoutStore = {
	posterSize: PosterSize;
	setPosterSize: (size: PosterSize) => void;
};

export const posterSizeClasses = {
	sm: "w-24 h-36",
	md: "w-32 h-48",
	lg: "w-40 h-60",
} as const;

export const gridColumnsMapping: Record<PosterSize, string> = {
	sm: "grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12",
	md: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8",
	lg: "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
};

export const useLayoutStore = create<LayoutStore>()(
	persist(
		(set) => ({
			posterSize: "md",
			setPosterSize: (posterSize) => set({ posterSize }),
		}),
		{
			name: "layout-store",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
