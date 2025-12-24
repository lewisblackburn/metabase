import {
    CreateMovieDocument,
    CreateMovieMutation,
    CreateMovieMutationVariables,
    MovieQuery,
    Movies_Constraint,
} from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'
import { EntityType, NormalisedData } from '@/lib/types/importer'
import { handleGraphQLError } from '@/lib/utils/error-handler'

import { TMDBImporter } from './tmdb.importer'

export class TMDBMovieImporter extends TMDBImporter {
    entityType = EntityType.MOVIE

    async fetch(tmdbId: string) {
        return this.fetchFromTMDB(`movie/${tmdbId}`)
    }

    // TODO: Fix the any type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    normalise(raw: any): NormalisedData<MovieQuery['movies_by_pk']> {
        return {
            entity: {
                title: raw.title,
                overview: raw.overview ?? undefined,
                release_date: raw.release_date ?? undefined,
                runtime: raw.runtime ?? undefined,
                tagline: raw.tagline ?? undefined,
                certification:
                    raw.release_dates?.results?.[0]?.release_dates?.[0]?.certification ?? undefined,
                vote_average: raw.vote_average ?? undefined,
            },
            externalId: raw.id.toString(),
            rawData: raw,
        }
    }

    protected async createEntity(data: Partial<MovieQuery['movies_by_pk']>): Promise<string> {
        if (!data?.title) throw new Error('Title is required to create a movie')

        const nhost = await createNhostClient()
        const result = await nhost.graphql
            .request<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument, {
                object: {
                    title: data.title,
                    overview: data?.overview ?? undefined,
                    release_date: data?.release_date ?? undefined,
                    runtime: data?.runtime ?? undefined,
                    tagline: data?.tagline ?? undefined,
                    certification: data?.certification ?? undefined,
                    vote_average: data?.vote_average ?? undefined,
                },
                on_conflict: {
                    constraint: 'movies_pkey' satisfies Movies_Constraint,
                    update_columns: [],
                },
            })
            .catch(handleGraphQLError)

        const movieId = result?.body.data?.insert_movies_one?.id
        if (!movieId) throw new Error('Failed to create movie')
        return movieId
    }

    async search(query: string) {
        const data = (await this.fetchFromTMDB(
            `search/movie?query=${encodeURIComponent(query)}`,
        )) as { results?: unknown[] }
        return data.results ?? []
    }
}
