import type { Locale as DateFnsLocale } from 'date-fns/locale'
import { de, enUS, es, fr } from 'date-fns/locale'

/**
 * Centralized locale configuration
 * Add new locales here and they'll be available throughout the app
 */
export const localeMap = {
    en: enUS,
    fr: fr,
    es: es,
    de: de,
} as const satisfies Record<string, DateFnsLocale>

/**
 * Supported locale codes
 */
export type Locale = keyof typeof localeMap

/**
 * Get all available locale codes
 */
export const locales = Object.keys(localeMap) as Locale[]
