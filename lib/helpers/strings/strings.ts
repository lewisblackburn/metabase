/**
 * Matches a URL path (e.g. /movies/123) against a pattern (e.g. /movies/:id)
 */
export function matchRoute(path: string, pattern: string): boolean {
    const regex = new RegExp('^' + pattern.replace(/:[^/]+/g, '[^/]+') + '$')
    return regex.test(path)
}

/**
 * Checks if a string is a valid UUID.
 */
export function isUuid(value: string): boolean {
    return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
        value,
    )
}

/**
 * Formats a runtime from minutes to hours and minutes.
 * @param minutes - The runtime in minutes.
 * @returns The runtime in hours and minutes.
 * @example
 * formatRuntime(120) // "2h 00m"
 */
export function formatRuntime(minutes: number): string {
    if (!Number.isInteger(minutes)) {
        return '0h 00m'
    }

    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes.toString().padStart(2, '0')}m`
}
