import { TMDBImageSize } from '@/lib/types/tmdb'

/**
 * Returns a TMDB image URL
 * @param {string} imagePath - TMDB image path (e.g., "/abc123.jpg")
 * @param {TMDBImageSize} size - Image size
 * @returns {string} TMDB image URL
 */
export default async function getTMDBFile(
    imagePath: string | null | undefined,
    size: TMDBImageSize = TMDBImageSize.ORIGINAL,
): Promise<string | null> {
    if (!imagePath) return null

    // Construct TMDB image URL
    const tmdbUrl = `https://image.tmdb.org/t/p/${size}${imagePath}`

    return tmdbUrl
}
