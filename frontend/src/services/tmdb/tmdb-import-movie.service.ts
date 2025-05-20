import { BUCKET } from '@/constants/media.constant';
import { TMDB_GENDER_MAP } from '@/constants/tmdb.constant';
import { nhost } from '@/lib/nhost';
import { fuzzyEnumMap } from '@/lib/utils';

import {
    Credit_Types_Enum,
    Credits_Constraint,
    Credits_Insert_Input,
    Department_Types_Enum,
    GetMovieByTmdb_IdDocument,
    GetMovieByTmdb_IdQuery,
    GetMovieByTmdb_IdQueryVariables,
    InsertMovieDocument,
    InsertMovieMutation,
    InsertMovieMutationVariables,
    Job_Types_Enum,
    Keywords_Constraint,
    Keywords_Update_Column,
    Movie_Alternative_Titles_Constraint,
    Movie_Alternative_Titles_Insert_Input,
    Movie_Alternative_Titles_Update_Column,
    Movie_Genre_Types_Enum,
    Movie_Genres_Insert_Input,
    Movie_Keywords_Insert_Input,
    Movie_Media_Constraint,
    Movie_Media_Update_Column,
    Movie_Production_Companies_Constraint,
    Movie_Production_Companies_Insert_Input,
    Movie_Production_Companies_Update_Column,
    Movie_Production_Countries_Constraint,
    Movie_Production_Countries_Insert_Input,
    Movie_Production_Countries_Update_Column,
    Movie_Release_Status_Types_Enum,
    Movies_Constraint,
    Movies_Insert_Input,
    Object_Types_Enum,
    People_Constraint,
    People_Update_Column,
    Person_Media_Constraint,
    Person_Media_Update_Column
} from '../../generated/graphql';
import { fetcher } from '../../lib/graphql-client';
import { TmdbMovieDetails } from '../../types/tmdb.types';
import { FileService } from '../file.service';
import { tmdbService } from './tmdb.service';

export async function importMovieFromTmdb(
    tmdbId: number
): Promise<InsertMovieMutation['insert_movies_one'] | { message: string }> {
    const fileService = new FileService();

    try {
        const existingMovie = await fetcher<GetMovieByTmdb_IdQuery, GetMovieByTmdb_IdQueryVariables>(
            GetMovieByTmdb_IdDocument,
            { tmdb_id: String(tmdbId) }
        )();

        if (existingMovie?.movies && existingMovie.movies.length > 0) {
            console.log(`Movie with TMDB ID ${tmdbId} already exists.`);
            return { message: `Movie with TMDB ID ${tmdbId} already exists.` };
        }
    } catch (error) {
        console.error('Error checking for existing movie:', error);
        return { message: 'Error checking for existing movie.' };
    }

    let tmdbMovieData: TmdbMovieDetails;
    try {
        const appendToResponse = 'credits,keywords,images,release_dates,alternative_titles';
        tmdbMovieData = await tmdbService.getEntity<TmdbMovieDetails>('movie', tmdbId, appendToResponse);
    } catch (error) {
        console.error('Error fetching movie details from TMDB:', error);
        return { message: `Error fetching movie details for TMDB ID ${tmdbId}.` };
    }

    const backdropUrl = tmdbMovieData.backdrop_path
        ? tmdbService.getBackdropImage(tmdbMovieData.backdrop_path)
        : undefined;
    const posterUrl = tmdbMovieData.poster_path ? tmdbService.getPosterImage(tmdbMovieData.poster_path) : undefined;

    let backdrop;
    let poster;

    if (backdropUrl) {
        backdrop = await fileService.uploadFileFromUrl(backdropUrl, BUCKET.BACKDROP);
    }
    if (posterUrl) {
        poster = await fileService.uploadFileFromUrl(posterUrl, BUCKET.POSTER);
    }

    const castCredits: Promise<Credits_Insert_Input[]> = Promise.all(
        tmdbMovieData.credits?.cast?.map(async (cast, index) => {
            const headshotFile = cast.profile_path
                ? await fileService.uploadFileFromUrl(tmdbService.getProfileImage(cast.profile_path), BUCKET.HEADSHOT)
                : undefined;

            return {
                object_type: Object_Types_Enum.Movie,
                character: cast.character,
                department: Department_Types_Enum.Acting,
                job: Job_Types_Enum.Actor,
                credit_type: Credit_Types_Enum.Cast,
                order: index + 1,
                person: {
                    data: {
                        tmdb_id: String(cast.id),
                        name: cast.name,
                        gender: TMDB_GENDER_MAP[cast.gender as keyof typeof TMDB_GENDER_MAP],
                        headshot: headshotFile ? headshotFile.fileUrl : undefined,
                        person_media: headshotFile
                            ? {
                                  data: [
                                      {
                                          file_id: headshotFile?.fileId
                                      }
                                  ],
                                  on_conflict: {
                                      constraint: Person_Media_Constraint.PersonMediaPkey,
                                      update_columns: [Person_Media_Update_Column.FileId]
                                  }
                              }
                            : undefined
                    },
                    on_conflict: {
                        constraint: People_Constraint.PeopleTmdbIdKey,
                        update_columns: [
                            People_Update_Column.Name,
                            People_Update_Column.Gender,
                            People_Update_Column.Headshot
                        ]
                    }
                }
            } as Credits_Insert_Input;
        }) ?? []
    );

    const crewCredits: Promise<Credits_Insert_Input[]> = Promise.all(
        tmdbMovieData.credits?.crew?.map(async (crew, index) => {
            const headshotFile = crew.profile_path
                ? await fileService.uploadFileFromUrl(tmdbService.getProfileImage(crew.profile_path), BUCKET.HEADSHOT)
                : undefined;

            return {
                object_type: Object_Types_Enum.Movie,
                department: fuzzyEnumMap(crew.department, Department_Types_Enum, {
                    fallback: Department_Types_Enum.Crew,
                    threshold: 0.3
                }),
                job: fuzzyEnumMap(crew.job, Job_Types_Enum, {
                    fallback: Job_Types_Enum.Other,
                    threshold: 0.3
                }),
                credit_type: Credit_Types_Enum.Crew,
                order: index + 1,
                person: {
                    data: {
                        tmdb_id: String(crew.id),
                        name: crew.name,
                        gender: TMDB_GENDER_MAP[crew.gender as keyof typeof TMDB_GENDER_MAP],
                        headshot: headshotFile ? headshotFile.fileUrl : undefined,
                        person_media: headshotFile
                            ? {
                                  data: [
                                      {
                                          file_id: headshotFile?.fileId
                                      }
                                  ],
                                  on_conflict: {
                                      constraint: Person_Media_Constraint.PersonMediaPkey,
                                      update_columns: [Person_Media_Update_Column.FileId]
                                  }
                              }
                            : undefined
                    },
                    on_conflict: {
                        constraint: People_Constraint.PeopleTmdbIdKey,
                        update_columns: [
                            People_Update_Column.Name,
                            People_Update_Column.Gender,
                            People_Update_Column.Headshot
                        ]
                    }
                }
            } as Credits_Insert_Input;
        }) ?? []
    );

    const [castCreditsResult, crewCreditsResult] = await Promise.all([castCredits, crewCredits]);
    const credits = [...castCreditsResult, ...crewCreditsResult];

    try {
        const movieInsertInput: Movies_Insert_Input = {
            title: tmdbMovieData.title,
            tmdb_id: String(tmdbMovieData.id),
            imdb_id: tmdbMovieData.imdb_id,
            overview: tmdbMovieData.overview,
            tagline: tmdbMovieData.tagline,
            release_date: tmdbMovieData.release_date || undefined,
            runtime: tmdbMovieData.runtime,
            budget: tmdbMovieData.budget,
            revenue: tmdbMovieData.revenue,
            homepage: tmdbMovieData.homepage,
            status: fuzzyEnumMap(tmdbMovieData.status, Movie_Release_Status_Types_Enum, {
                fallback: Movie_Release_Status_Types_Enum.Released,
                threshold: 0.3
            }),
            language: tmdbMovieData.original_language,
            backdrop: backdrop ? backdrop.fileUrl : undefined,
            poster: poster ? poster.fileUrl : undefined,
            movie_media: {
                data: [
                    {
                        file_id: backdrop?.fileId
                    },
                    {
                        file_id: poster?.fileId
                    }
                ],
                on_conflict: {
                    constraint: Movie_Media_Constraint.MovieMediaPkey,
                    update_columns: [Movie_Media_Update_Column.FileId]
                }
            },
            movie_genres: {
                data:
                    tmdbMovieData.genres?.map(
                        (genre): Movie_Genres_Insert_Input => ({
                            genre: fuzzyEnumMap(genre.name, Movie_Genre_Types_Enum, {
                                fallback: undefined,
                                threshold: 0.3
                            })
                        })
                    ) || []
            },
            movie_keywords: {
                data:
                    tmdbMovieData.keywords?.keywords.map(
                        (keyword): Movie_Keywords_Insert_Input => ({
                            keyword: {
                                data: {
                                    keyword: keyword.name
                                },
                                on_conflict: {
                                    constraint: Keywords_Constraint.KeywordsKeywordKey,
                                    update_columns: [Keywords_Update_Column.Keyword]
                                }
                            }
                        })
                    ) || []
            },
            movie_production_companies: {
                data:
                    tmdbMovieData.production_companies?.map(
                        (company): Movie_Production_Companies_Insert_Input => ({
                            company_name: company.name
                        })
                    ) || [],
                on_conflict: {
                    constraint: Movie_Production_Companies_Constraint.MovieProductionCompaniesMovieIdCompanyNameKey,
                    update_columns: [Movie_Production_Companies_Update_Column.CompanyName]
                }
            },
            movie_production_countries: {
                data:
                    tmdbMovieData.production_countries?.map(
                        (country): Movie_Production_Countries_Insert_Input => ({
                            country: country.name
                        })
                    ) || [],
                on_conflict: {
                    constraint: Movie_Production_Countries_Constraint.MovieProductionCountriesPkey,
                    update_columns: [Movie_Production_Countries_Update_Column.Country]
                }
            },
            movie_alternative_titles: {
                data:
                    tmdbMovieData.alternative_titles?.titles.map(
                        (altTitle): Movie_Alternative_Titles_Insert_Input => ({
                            alternative_title: altTitle.title,
                            country: altTitle.iso_3166_1,
                            type: altTitle.type
                        })
                    ) || [],
                on_conflict: {
                    constraint: Movie_Alternative_Titles_Constraint.MovieAlternativeTitlesPkey,
                    update_columns: [Movie_Alternative_Titles_Update_Column.AlternativeTitle]
                }
            },
            credits: {
                data: credits,
                on_conflict: {
                    constraint: Credits_Constraint.CreditsPkey,
                    update_columns: []
                }
            }
        };

        const result = await fetcher<InsertMovieMutation, InsertMovieMutationVariables>(InsertMovieDocument, {
            object: movieInsertInput,
            on_conflict: {
                constraint: Movies_Constraint.MoviesTmdbIdKey
            }
        })();

        console.log(`Successfully imported movie: ${result.insert_movies_one?.title}`);
        return result.insert_movies_one || { message: 'Import successful but no data returned.' };
    } catch (error) {
        console.error(`Error mapping TMDB data or inserting movie (TMDB ID: ${tmdbId}):`, error);
        if (error instanceof Error) {
            console.error('Detailed Error:', error.message, error.stack);
        }
        return { message: `Error importing movie with TMDB ID ${tmdbId}. Check server logs.` };
    }
}
