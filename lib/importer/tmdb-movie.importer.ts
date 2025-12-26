import {
    CreateMovieDocument,
    CreateMovieMutation,
    CreateMovieMutationVariables,
    MovieQuery,
} from '@/generated/graphql'
import { NormalisedData } from '@/lib/types/importer'
import { handleGraphQLError } from '@/lib/utils/error-handler'

import downloadAndUploadFile from '../helpers/files/download-and-upload-file'
import getTMDBFile from '../helpers/files/get-tmdb-file'
import { MediaType } from '../helpers/graphql-enums'
import { TMDBMovie } from '../types/tmdb'
import { TMDBImporter } from './tmdb.importer'

export class TMDBMovieImporter extends TMDBImporter {
    mediaType = MediaType.MOVIE

    async fetch(tmdbId: string) {
        return this.fetchFromTMDB(`movie/${tmdbId}`)
    }

    normalise(raw: TMDBMovie): NormalisedData<MovieQuery['movies_by_pk']> {
        return {
            entity: {
                title: raw.title,
                tagline: raw.tagline,
                overview: raw.overview,
                runtime: raw.runtime,
                release_date: raw.release_date,
                genres: raw.genres.map(genre => ({
                    genre: {
                        id: genre.id,
                        name: genre.name,
                    },
                })),
                poster_id: raw.poster_path,
                backdrop_id: raw.backdrop_path,
            },
        }
    }

    protected async createEntity(data: Partial<MovieQuery['movies_by_pk']>): Promise<string> {
        const variables: CreateMovieMutationVariables = {
            object: {
                title: data?.title,
                tagline: data?.tagline,
                overview: data?.overview,
                runtime: data?.runtime,
                release_date: data?.release_date,
                poster_id: await downloadAndUploadFile(this.nhost, getTMDBFile(data?.poster_id)),
                backdrop_id: await downloadAndUploadFile(
                    this.nhost,
                    getTMDBFile(data?.backdrop_id),
                ),
                genres: {
                    data:
                        data?.genres?.map(genre => ({
                            genre: {
                                data: {
                                    name: genre.genre!.name,
                                },
                                on_conflict: {
                                    constraint: 'genres_name_key',
                                    update_columns: ['name'],
                                },
                            },
                        })) ?? [],
                    on_conflict: {
                        constraint: 'movie_genres_pkey',
                        update_columns: [],
                    },
                },
            },
            on_conflict: {
                constraint: 'movies_pkey',
                update_columns: [],
            },
        }
        const result = await this.nhost.graphql
            .request<
                CreateMovieMutation,
                CreateMovieMutationVariables
            >(CreateMovieDocument, variables)
            .catch(handleGraphQLError)

        const movieId = result?.body.data?.insert_movies_one?.id
        if (!movieId) throw new Error('Failed to create movie')
        return movieId
    }

    // TODO: Implement
    async findSimilar(raw: unknown): Promise<unknown[]> {
        return []
    }

    // TODO: Implement
    async merge(raw: unknown, existing: unknown): Promise<unknown> {
        return existing
    }

    async search(query: string) {
        const data = (await this.fetchFromTMDB(
            `search/movie?query=${encodeURIComponent(query)}`,
        )) as { results?: unknown[] }
        return data.results ?? []
    }
}
