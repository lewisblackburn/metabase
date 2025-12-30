import gql from 'graphql-tag'

import {
    Certifications_Enum,
    CreateMovieDocument,
    CreateMovieMutation,
    CreateMovieMutationVariables,
    Credit_Types_Enum,
    Genres_Constraint,
    Genres_Update_Column,
    InputMaybe,
    Languages_Constraint,
    Languages_Obj_Rel_Insert_Input,
    Media_Statuses_Enum,
    Media_Types_Enum,
    Movie_Credits_Arr_Rel_Insert_Input,
    Movie_Credits_Constraint,
    Movie_Credits_Insert_Input,
    Movie_Genres_Arr_Rel_Insert_Input,
    Movie_Genres_Constraint,
    MovieQuery,
    Movies_Constraint,
    People_Constraint,
} from '@/generated/graphql'
import { handleGraphQLError } from '@/lib/utils/error-handler'

import { TMDBMovie } from '../types/tmdb'
import { TMDBImporter } from './tmdb.importer'

export class TMDBMovieImporter extends TMDBImporter {
    mediaType = Media_Types_Enum.Movie

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
                keywords: this.transformKeywords(data?.keywords),
                movie_credits: this.createCredits(data?.credits),
                budget: data?.budget,
                revenue: data?.revenue,
                status: this.transformStatus(data?.status),
                certification: this.getCertification(data?.release_dates),
                language: this.createLanguage(data?.original_language),
            },
            on_conflict: {
                constraint: Movies_Constraint.MoviesPkey,
                update_columns: [],
            },
        }

        const result = await this.nhost.graphql
            .request<
                CreateMovieMutation,
                CreateMovieMutationVariables
            >(gql(CreateMovieDocument), variables)
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
                            constraint: Genres_Constraint.GenresNameKey,
                            update_columns: [Genres_Update_Column.Name],
                        },
                    },
                })) ?? [],
            on_conflict: {
                constraint: Movie_Genres_Constraint.MovieGenresPkey,
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
                // TODO: create an enum table?
                department: 'Acting',
                order: credit.order,
                credit_type: Credit_Types_Enum.Cast,
                person: {
                    data: {
                        name: credit.name,
                    },
                    on_conflict: {
                        constraint: People_Constraint.PeoplePkey,
                        update_columns: [],
                    },
                },
            })) ?? []

        const crewCredits: Movie_Credits_Insert_Input[] =
            credits?.crew?.map((credit, index) => ({
                role: credit.job,
                department: credit.department,
                credit_type: Credit_Types_Enum.Crew,
                order: index,
                person: {
                    data: {
                        name: credit.name,
                    },
                    on_conflict: {
                        constraint: People_Constraint.PeoplePkey,
                        update_columns: [],
                    },
                },
            })) ?? []
        const combinedCredits = [...castCredits, ...crewCredits]

        return {
            data: combinedCredits,
            on_conflict: {
                constraint: Movie_Credits_Constraint.MovieCreditsIdOrderKey,
                update_columns: [],
            },
        }
    }

    private createLanguage(
        language?: TMDBMovie['original_language'],
    ): InputMaybe<Languages_Obj_Rel_Insert_Input> | undefined {
        return {
            data: {
                code: language,
            },
            on_conflict: {
                constraint: Languages_Constraint.LanguagesPkey,
                update_columns: [],
            },
        }
    }

    // All the tansforms can probably be moved to helpers
    private transformKeywords(
        keywords?: TMDBMovie['keywords'],
    ): NonNullable<MovieQuery['movies_by_pk']>['keywords'] | undefined {
        return keywords?.keywords.map(keyword => keyword.name)
    }

    private transformStatus(status: TMDBMovie['status']): Media_Statuses_Enum | undefined {
        switch (status) {
            case 'Released':
                return Media_Statuses_Enum.Released
            case 'Post Production':
                return Media_Statuses_Enum.PostProduction
            case 'In Production':
                return Media_Statuses_Enum.InProduction
            case 'Planned':
                return Media_Statuses_Enum.Planned
            case 'Rumored':
                return Media_Statuses_Enum.Rumoured
            case 'Canceled':
                return Media_Statuses_Enum.Cancelled
            default:
                return undefined
        }
    }

    // Always use the US iso for certification
    private getCertification(
        releaseDates: TMDBMovie['release_dates'],
        country: string = 'US',
    ): InputMaybe<Certifications_Enum> | undefined {
        const certification = releaseDates?.results
            ?.find(r => r.iso_3166_1 === country)
            ?.release_dates?.find(rd => rd.certification)?.certification
        if (!certification) return undefined
        return this.transformCertification(certification)
    }

    private transformCertification(certification: string): Certifications_Enum | undefined {
        switch (certification) {
            case 'G':
                return Certifications_Enum.G
            case 'PG':
                return Certifications_Enum.Pg
            case 'PG-13':
                return Certifications_Enum.PgThirteen
            case 'R':
                return Certifications_Enum.R
            case 'R-13':
                return Certifications_Enum.PgThirteen
            // TODO: Change this from a number
            case 'NC-17':
                return Certifications_Enum.Nc_17
            case 'UNRATED':
                return Certifications_Enum.Ur
            case 'NOT_RATED':
                return Certifications_Enum.Nr
            default:
                return undefined
        }
    }
}
