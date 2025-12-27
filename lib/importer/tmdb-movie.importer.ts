import {
    CreateMovieDocument,
    CreateMovieMutation,
    CreateMovieMutationVariables,
    InputMaybe,
    Movie_Credits_Arr_Rel_Insert_Input,
    Movie_Genres_Arr_Rel_Insert_Input,
    MovieQuery,
} from '@/generated/graphql'
import { NormalisedData } from '@/lib/types/importer'
import { handleGraphQLError } from '@/lib/utils/error-handler'

import { CreditType, MediaType } from '../helpers/graphql-enums'
import { TMDBCredits, TMDBGenre, TMDBMovie } from '../types/tmdb'
import { TMDBImporter } from './tmdb.importer'

type MovieEntity = MovieQuery['movies_by_pk']

export class TMDBMovieImporter extends TMDBImporter {
    mediaType = MediaType.MOVIE

    async fetch(tmdbId: string) {
        return this.fetchFromTMDB(`movie/${tmdbId}?append_to_response=keywords,credits`)
    }

    normalise(raw: TMDBMovie): NormalisedData<unknown> {
        return {
            entity: {
                title: raw.title,
                tagline: raw.tagline,
                overview: raw.overview,
                runtime: raw.runtime,
                release_date: raw.release_date,
                poster_id: raw.poster_path,
                backdrop_id: raw.backdrop_path,
                genres: this.normaliseGenres(raw.genres),
                movie_credits: this.normaliseCredits(raw.credits),
            },
        }
    }

    protected async createEntity(data: Partial<MovieEntity>): Promise<string> {
        const variables: CreateMovieMutationVariables = {
            object: {
                title: data?.title,
                tagline: data?.tagline,
                overview: data?.overview,
                runtime: data?.runtime,
                release_date: data?.release_date,
                poster_id: await this.uploadImage(data?.poster_id),
                backdrop_id: await this.uploadImage(data?.backdrop_id),
                genres: this.createGenres(data?.genres),
                keywords: data?.keywords,
                movie_credits: this.createCredits(data?.movie_credits),
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

    async search(query: string) {
        const data = (await this.fetchFromTMDB(
            `search/movie?query=${encodeURIComponent(query)}`,
        )) as { results?: unknown[] }

        return Array.isArray(data.results) ? data.results : []
    }

    // TODO: Implement similarity search
    async findSimilar(data: unknown): Promise<unknown[]> {
        return []
    }

    // TODO: Implement merge logic
    async merge(data: unknown, existing: unknown): Promise<unknown> {
        return existing
    }

    private normaliseGenres(genres: TMDBGenre[]) {
        return genres.map(genre => ({
            genre: {
                id: genre.id,
                name: genre.name,
            },
        }))
    }

    private createGenres(
        genres?: NonNullable<MovieEntity>['genres'],
    ): InputMaybe<Movie_Genres_Arr_Rel_Insert_Input> | undefined {
        return {
            data:
                genres?.map(genre => ({
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
        }
    }

    private normaliseCredits(credits?: TMDBCredits) {
        if (!credits) return undefined

        const cast =
            credits.cast?.map((credit, index) => ({
                id: index,
                person: { name: credit.name },
                character: credit.character,
                role: '',
                credit_type: CreditType.CAST,
                order: credit.order,
            })) ?? []

        const crew =
            credits.crew?.map((credit, index) => ({
                id: cast.length + index,
                person: { name: credit.name },
                character: '',
                role: credit.job,
                credit_type: CreditType.CREW,
                order: cast.length + index,
            })) ?? []

        return [...cast, ...crew]
    }

    private createCredits(
        credits?: NonNullable<MovieEntity>['movie_credits'],
    ): InputMaybe<Movie_Credits_Arr_Rel_Insert_Input> | undefined {
        return {
            data:
                credits?.map(credit => ({
                    character: credit.character,
                    order: credit.order,
                    role: credit.role,
                    credit_type: credit.credit_type,
                    person: {
                        data: {
                            name: credit.person.name,
                        },
                        // TODO: Match based on name, birthdate, gender (create a index/key for this)
                        on_conflict: {
                            constraint: 'people_pkey',
                            update_columns: [],
                        },
                    },
                })) ?? [],
            on_conflict: {
                constraint: 'movie_credits_id_order_key',
                update_columns: [],
            },
        }
    }
}
