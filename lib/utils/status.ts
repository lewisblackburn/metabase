import type { SiteStatusIndicator } from '@/lib/types/status'

/**
 * Site system status utility functions and constants
 *
 * These utilities are for monitoring backend service health (auth, graphQL, storage, functions)
 * and are separate from user movie status functionality.
 */

/**
 * Determines the site status indicator based on service health
 *
 * @param services - Array of boolean values representing service health states
 * @returns Status indicator with color, glow, and text properties
 */
export function getSiteStatusIndicator(services: boolean[]): SiteStatusIndicator {
    const allUp = services.every(Boolean)
    const noneUp = services.every(v => !v)

    if (allUp) {
        return {
            color: 'bg-green-500',
            glow: 'bg-green-400/50',
            text: 'All systems operational',
        }
    }

    if (noneUp) {
        return {
            color: 'bg-red-500',
            glow: 'bg-red-400/50',
            text: 'All systems down',
        }
    }

    return {
        color: 'bg-yellow-500',
        glow: 'bg-yellow-400/50',
        text: 'Some systems experiencing issues',
    }
}

/**
 * Site status revalidation time in seconds (5 minutes)
 */
export const SITE_STATUS_REVALIDATE_TIME = 300
