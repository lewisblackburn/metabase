/**
 * Checks if a pathname matches a pattern or an array of patterns.
 * @param pathname - The pathname to check.
 * @param patterns - The pattern or array of patterns to check against.
 * @returns True if the pathname matches any of the patterns, false otherwise.
 * @example
 * matchRoute('/movies/123', '/movies/:id') // true
 * matchRoute('/movies/123', ['/movies/:id', '/movies/:id/edit']) // true
 */
export function matchRoute(pathname: string, patterns: string | string[]) {
    const cleanPath = pathname.replace(/\/+$/, '')

    const patternsArray = Array.isArray(patterns) ? patterns : [patterns]

    return patternsArray.some(pattern => {
        const cleanPattern = pattern.replace(/\/+$/, '')

        // Convert something like /movies/[id] or /movies/:id to a regex
        const regexPattern = cleanPattern
            .replace(/\[.*?\]/g, '[^/]+') // replace [param] with wildcard
            .replace(/:[\w]+/g, '[^/]+') // replace :param with wildcard
            .replace(/\//g, '\\/')

        const regex = new RegExp(`^${regexPattern}$`)
        return regex.test(cleanPath)
    })
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
