'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { createLogger } from '@/lib/helpers/logger'

const logger = createLogger('SiteStore')

export type Locale = 'en' | 'fr' | 'es' | 'de' // extend as needed

interface SiteState {
    locale: Locale
    setLocale: (locale: Locale) => void
    reset: () => void
}

export const SITE_STORAGE_KEY = 'site-storage'

export const useSiteStore = create<SiteState>()(
    persist(
        set => ({
            locale: 'en',

            setLocale: locale => set({ locale }),
            reset: () => set({ locale: 'en' }),
        }),
        {
            name: SITE_STORAGE_KEY,
            version: 1,
            onRehydrateStorage: () => (state, error) => {
                if (error) {
                    logger.error('Failed to rehydrate store', error)
                } else {
                    logger.debug('Store rehydrated', state)
                }
            },
            partialize: state => ({
                locale: state.locale,
            }),
        },
    ),
)
