import {
    CreateMovieDocument,
    CreateMovieMutation,
    CreateMovieMutationVariables,
    InputMaybe,
    Movie_Credits_Arr_Rel_Insert_Input,
    Movie_Credits_Insert_Input,
    Movie_Genres_Arr_Rel_Insert_Input,
    MovieQuery,
} from '@/generated/graphql'
import { handleGraphQLError } from '@/lib/utils/error-handler'

import { CreditType, MediaType } from '../helpers/graphql-enums'
import { TMDBMovie } from '../types/tmdb'
import { TMDBImporter } from './tmdb.importer'

export class TMDBMovieImporter extends TMDBImporter {
    mediaType = MediaType.MOVIE

    async fetch(tmdbId: string) {
        return this.fetchFromTMDB(
            `movie/${tmdbId}?append_to_response=keywords,credits,release_dates`,
        )
    }

    protected async createEntity(data: TMDBMovie): Promise<string> {
        const variables: CreateMovieMutationVariables = {
            object: {
                title: data?.title,
                tagline: data?.tagline,
                overview: data?.overview,
                runtime: data?.runtime,
                release_date: data?.release_date,
                poster_id: await this.uploadImage(data?.poster_path),
                backdrop_id: await this.uploadImage(data?.backdrop_path),
                genres: this.createGenres(data?.genres),
                keywords: this.createKeywords(data?.keywords),
                movie_credits: this.createCredits(data?.credits),
                budget: data?.budget,
                revenue: data?.revenue,
                // TODO: Make an enum table for this
                status: data?.status,
                // TODO: Make an enum table for this
                certification: this.getCertification(data?.release_dates),
                // TODO: Make an enum table for this
                language: data?.original_language,
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

    private createGenres(
        genres?: TMDBMovie['genres'],
    ): InputMaybe<Movie_Genres_Arr_Rel_Insert_Input> | undefined {
        return {
            data:
                genres?.map(genre => ({
                    genre: {
                        data: {
                            name: genre!.name,
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

    private createCredits(
        credits?: TMDBMovie['credits'],
    ): InputMaybe<Movie_Credits_Arr_Rel_Insert_Input> | undefined {
        const castCredits: Movie_Credits_Insert_Input[] =
            credits?.cast?.map(credit => ({
                role: credit.character,
                // TODO: create a table?
                department: 'Acting',
                order: credit.order,
                credit_type: CreditType.CAST,
                person: {
                    data: {
                        name: credit.name,
                    },
                    on_conflict: {
                        constraint: 'people_pkey',
                        update_columns: [],
                    },
                },
            })) ?? []

        const crewCredits: Movie_Credits_Insert_Input[] =
            credits?.crew?.map((credit, index) => ({
                role: credit.job,
                department: credit.department,
                credit_type: CreditType.CREW,
                order: index,
                person: {
                    data: {
                        name: credit.name,
                    },
                    on_conflict: {
                        constraint: 'people_pkey',
                        update_columns: [],
                    },
                },
            })) ?? []

        const combinedCredits = [...castCredits, ...crewCredits]

        return {
            data: combinedCredits,
            on_conflict: {
                constraint: 'movie_credits_id_order_key',
                update_columns: [],
            },
        }
    }

    private createKeywords(
        keywords?: TMDBMovie['keywords'],
    ): NonNullable<MovieQuery['movies_by_pk']>['keywords'] | undefined {
        return keywords?.keywords.map(keyword => keyword.name)
    }

    // Always use the US iso for certification
    protected getCertification(
        releaseDates: TMDBMovie['release_dates'],
        country: string = 'US',
    ): string | undefined {
        return releaseDates?.results
            ?.find(r => r.iso_3166_1 === country)
            ?.release_dates?.find(rd => rd.certification)?.certification
    }
}
