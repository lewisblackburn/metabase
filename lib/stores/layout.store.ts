import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { createLogger } from '@/lib/helpers/logger'

const logger = createLogger('LayoutStore')

type PosterSize = 'sm' | 'md' | 'lg'

type LayoutStore = {
    posterSize: PosterSize
    setPosterSize: (size: PosterSize) => void
    isHydrated: boolean
}

export const LAYOUT_STORAGE_KEY = 'layout-storage'

export const posterSizeClasses = {
    sm: 'w-24 h-36',
    md: 'w-32 h-48',
    lg: 'w-40 h-60',
    full: 'h-full',
} as const

export const useLayoutStore = create<LayoutStore>()(
    persist(
        set => ({
            posterSize: 'md',
            isHydrated: false,
            setPosterSize: posterSize => set({ posterSize }),
        }),
        {
            name: LAYOUT_STORAGE_KEY,
            version: 1,
            onRehydrateStorage: () => (state, error) => {
                if (error) {
                    logger.error('Failed to rehydrate store', error)
                } else {
                    logger.debug('Store rehydrated', state)
                    // Set isHydrated after store initialization is complete
                    queueMicrotask(() => {
                        useLayoutStore.setState({ isHydrated: true })
                    })
                }
            },
        },
    ),
)
