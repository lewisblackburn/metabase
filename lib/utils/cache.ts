/**
 * Cache configuration and utilities
 */

/**
 * Cache revalidation times in seconds
 */
export const CACHE_TIMES = {
    /**
     * Movie data cache time (1 minute)
     * Movies don't change frequently, but we want reasonably fresh data
     */
    MOVIE: 60,

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
    movie: (id: string) => `movie-${id}`,
    userLists: (userId: string) => `user-lists-${userId}`,
    movieActivity: (movieId: string) => `movie-activity-${movieId}`,
    movieWatches: (movieId: string) => `movie-watches-${movieId}`,
} as const
