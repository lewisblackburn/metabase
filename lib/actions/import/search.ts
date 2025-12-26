'use server'

import { Media_Types_Enum, Sources_Enum } from '@/generated/graphql'
import { MediaType, Source } from '@/lib/helpers/graphql-enums'
import { TMDBMovieImporter, TMDBPersonImporter } from '@/lib/importer'
import { createNhostClient } from '@/lib/nhost/server'
import { TMDBMovieSearchResult, TMDBPersonSearchResult } from '@/lib/types/tmdb'

export type SearchResult = TMDBMovieSearchResult | TMDBPersonSearchResult

export async function searchMedia(
    query: string,
    source: Sources_Enum,
    mediaType: Media_Types_Enum,
): Promise<SearchResult[]> {
    if (!query.trim()) return []

    const nhost = await createNhostClient()

    if (source !== Source.TMDB) return []

    switch (mediaType) {
        case MediaType.MOVIE: {
            const importer = new TMDBMovieImporter(nhost)
            const rawResults = await importer.search(query)
            if (!Array.isArray(rawResults)) {
                return []
            }
            return rawResults as TMDBMovieSearchResult[]
        }
        case MediaType.PERSON: {
            const importer = new TMDBPersonImporter(nhost)
            const rawResults = await importer.search(query)
            if (!Array.isArray(rawResults)) {
                return []
            }
            return rawResults as TMDBPersonSearchResult[]
        }
        default:
            return []
    }
}
