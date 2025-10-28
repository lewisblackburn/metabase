import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type PosterSize = 'sm' | 'md' | 'lg'

type LayoutStore = {
  posterSize: PosterSize
  setPosterSize: (size: PosterSize) => void
  isHydrated: boolean
}

export const posterSizeClasses = {
  sm: 'w-24 h-36',
  md: 'w-32 h-48',
  lg: 'w-40 h-60',
} as const

export const useLayoutStore = create<LayoutStore>()(
  persist(
    set => ({
      posterSize: 'md',
      isHydrated: false,
      setPosterSize: posterSize => set({ posterSize }),
    }),
    {
      name: 'layout-store',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => error => {
        if (!error) {
          useLayoutStore.setState({ isHydrated: true })
        }
      },
    },
  ),
)
