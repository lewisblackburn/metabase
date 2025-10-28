/**
 * Matches a URL path (e.g. /movies/123) against a pattern (e.g. /movies/:id)
 */
export function matchRoute(path: string, pattern: string): boolean {
  const regex = new RegExp('^' + pattern.replace(/:[^/]+/g, '[^/]+') + '$')
  return regex.test(path)
}
