import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'


type LayoutStore = {
	posterSize: "sm" | "md" | "lg";
	setPosterSize: (size: "sm" | "md" | "lg") => void;
};

export const posterSizeClasses = {
	sm: "w-24 h-36",
	md: "w-32 h-48",
	lg: "w-40 h-60",
} as const;

export const useLayoutStore = create<LayoutStore>()(persist((set) => ({
	posterSize: "md",
	setPosterSize: (posterSize) => set({ posterSize }),
}), {
	name: "layout-store",
	storage: createJSONStorage(() => localStorage),
}));
