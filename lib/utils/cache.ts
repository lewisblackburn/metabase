/**
 * Cache configuration and utilities
 */

/**
 * Cache revalidation times in seconds
 */
export const CACHE_TIMES = {
    /**
     * User lists cache time (30 seconds)
     * Lists may be updated more frequently by users
     */
    USER_LISTS: 30,

    /**
     * Site status cache time (5 minutes)
     * System status doesn't change often
     */
    SITE_STATUS: 300,
} as const

/**
 * Cache tag generators for targeted revalidation
 */
export const CACHE_TAGS = {
    MOVIES: 'movies',
    MOVIE: 'movie',
    USERS_LISTS: (userId: string) => `user-lists-${userId}`,
} as const
