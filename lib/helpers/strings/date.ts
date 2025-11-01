import { format } from 'date-fns'

import { type Locale, localeMap } from '@/lib/config/locales'

/**
 * Format a date with the specified format string and locale
 * @param date - The date to format
 * @param formatString - The format string (e.g., 'PPP', 'yyyy-MM-dd')
 * @param locale - The locale to use (defaults to 'en')
 * @returns Formatted date string
 */
export const formatDate = (date: Date, formatString: string, locale: Locale = 'en') => {
    return format(date, formatString, {
        locale: localeMap[locale],
    })
}
