'use client'

import { formatDate } from '@/lib/helpers/strings/date'
import { useSiteStore } from '@/lib/stores/site.store'

/**
 * React hook that returns a date formatter using the current locale from the site store
 * @returns A function to format dates with the current locale
 * @example
 * const formatDate = useFormatDate()
 * const formatted = formatDate(new Date(), 'PPP') // "January 1, 2024" or "1 janvier 2024" depending on locale
 */
export const useFormatDate = () => {
    const locale = useSiteStore(state => state.locale)

    return (date: Date, formatString: string) => {
        return formatDate(date, formatString, locale)
    }
}
