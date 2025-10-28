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
