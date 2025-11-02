import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { createLogger } from '@/lib/helpers/logger'

const logger = createLogger('LayoutStore')

type PosterSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'

type LayoutStore = {
    posterSize: PosterSize
    setPosterSize: (size: PosterSize) => void
}

export const LAYOUT_STORAGE_KEY = 'layout-storage'

export const posterSizeClasses = {
    sm: 'w-20 h-30 sm:w-24 sm:h-36 md:w-28 md:h-42 lg:w-32 lg:h-48',
    md: 'w-24 h-36 sm:w-28 sm:h-42 md:w-32 md:h-48 lg:w-40 lg:h-60',
    lg: 'w-32 h-48 sm:w-36 sm:h-54 md:w-40 md:h-60 lg:w-48 lg:h-72',
    xl: 'w-40 h-60 sm:w-44 sm:h-66 md:w-48 md:h-72 lg:w-56 lg:h-84',
    '2xl': 'w-48 h-72 sm:w-56 sm:h-84 md:w-64 md:h-96 lg:w-80 lg:h-120',
    full: 'h-full',
} as const

export const useLayoutStore = create<LayoutStore>()(
    persist(
        set => ({
            posterSize: 'md',
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
                }
            },
        },
    ),
)
