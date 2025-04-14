import { METABASE_BOT_ID } from '@/constants/api.constant';
import { LANGUAGES } from '@/constants/languages.constant';
import { MEDIA_TYPE } from '@/constants/media.constant';
import {
    Genres_Constraint,
    Genres_Update_Column,
    GetMovieByTmdb_IdDocument,
    InsertMovieDocument,
    Keywords_Constraint,
    Keywords_Update_Column,
    Movie_Media_Constraint,
    Movie_Production_Companies_Constraint,
    Movie_Production_Companies_Update_Column,
    Movies,
    Movies_Insert_Input,
    People_Constraint,
    People_Update_Column,
    Person_Media_Constraint
} from '@/generated/graphql';
import { nhost } from '@/lib/nhost';
import { TMDBMovie } from '@/types/tmdb.type';

import { FileService } from '../file.service';
import { TMDBService } from './tmdb.service';

export class TMDBMovieImporterService extends TMDBService {
    async isExistingMovie(tmdbMovieId: string): Promise<any> {
        // NOTE: Remove all non-numeric characters from the string
        const nhostId = tmdbMovieId.replace(/[^0-9]/g, '');

        return nhost.graphql.request(GetMovieByTmdb_IdDocument, {
            tmdb_id: nhostId
        });
    }

    async saveMovie(data: Movies_Insert_Input): Promise<any> {
        return nhost.graphql.request(
            InsertMovieDocument,
            { object: data },
            {
                headers: {
                    'x-hasura-role': 'admin'
                }
            }
        );
    }

    async import(tmdbMovieId: string): Promise<Movies | false> {
        const existingMovie = await this.isExistingMovie(tmdbMovieId);
        if (existingMovie.data.movies.length > 0) return existingMovie;

        const movie = await this.getEntity<TMDBMovie>(
            'movie',
            tmdbMovieId,
            'keywords,credits,videos,images,production_companies,production_countries,alternative_titles'
        );

        if (!movie) return false;

        // BUG: These will not rollback if the movie import fails
        const poster = await FileService.uploadFile(this.getPosterImage(movie.poster_path), MEDIA_TYPE.POSTER);
        const backdrop = await FileService.uploadFile(this.getBackdropImage(movie.backdrop_path), MEDIA_TYPE.BACKDROP);
        const castHeadshots = await Promise.all(
            movie.credits.cast.map((castMember) =>
                FileService.uploadFile(this.getProfileImage(castMember.profile_path), MEDIA_TYPE.HEADSHOT)
            )
        );
        const crewHeadshots = await Promise.all(
            movie.credits.crew.map((crewMember) =>
                FileService.uploadFile(this.getProfileImage(crewMember.profile_path), MEDIA_TYPE.HEADSHOT)
            )
        );
        // const productionCompanyLogos = await Promise.all(
        //     movie.production_companies.map((company) =>
        //         FileService.uploadFile(this.getLogoImage(company.logo_path), MEDIA_TYPE.LOGO)
        //     )
        // );

        const importedMovie = await this.saveMovie({
            title: movie.title,
            tagline: movie.tagline,
            overview: movie.overview,
            runtime: movie.runtime,
            budget: movie.budget,
            revenue: movie.revenue,
            status: movie.status,
            release_date: new Date(movie.release_date),
            poster: poster?.url,
            backdrop: backdrop?.url,
            language: movie.original_language,
            tmdb_id: movie.id.toString(),
            imdb_id: movie.imdb_id.toString(),
            movie_media: {
                data: [
                    {
                        media_type: MEDIA_TYPE.POSTER,
                        media_url: poster?.url,
                        media_id: poster?.id,
                        uploaded_by: METABASE_BOT_ID
                    },
                    {
                        media_type: MEDIA_TYPE.BACKDROP,
                        media_url: backdrop?.url,
                        media_id: backdrop?.id,
                        uploaded_by: METABASE_BOT_ID
                    }
                ],
                on_conflict: {
                    constraint: Movie_Media_Constraint.MovieMediaPkey
                }
            },
            movie_keywords: {
                data: movie.keywords.keywords.map((keyword) => ({
                    keyword: {
                        data: { keyword: keyword.name },
                        on_conflict: {
                            constraint: Keywords_Constraint.KeywordsKeywordKey,
                            update_columns: [Keywords_Update_Column.Keyword]
                        }
                    }
                }))
            },
            movie_genres: {
                data: movie.genres.map((genre, index) => ({
                    genre: {
                        data: { name: genre.name },
                        on_conflict: {
                            constraint: Genres_Constraint.GenresNameKey,
                            update_columns: [Genres_Update_Column.Name]
                        }
                    },
                    order: index
                }))
            },
            movie_cast_members: {
                data: movie.credits.cast.map((castMember, index) => ({
                    character: castMember.character,
                    order: index + 1,
                    person: {
                        data: {
                            tmdb_id: castMember.id.toString(),
                            name: castMember.name,
                            headshot: castHeadshots[index]?.url || undefined,
                            person_media: castHeadshots[index]?.id
                                ? {
                                      data: [
                                          {
                                              media_type: MEDIA_TYPE.HEADSHOT,
                                              media_url: castHeadshots[index]?.url,
                                              media_id: castHeadshots[index]?.id,
                                              uploaded_by: METABASE_BOT_ID
                                          }
                                      ],
                                      on_conflict: {
                                          constraint: Person_Media_Constraint.PersonMediaPkey
                                      }
                                  }
                                : undefined
                        },
                        on_conflict: {
                            constraint: People_Constraint.PeopleTmdbIdKey,
                            update_columns: [People_Update_Column.Headshot]
                        }
                    }
                }))
            },
            movie_crew_members: {
                data: movie.credits.crew.map((crewMember, index) => ({
                    job: crewMember.job,
                    department: crewMember.department,
                    person: {
                        data: {
                            tmdb_id: crewMember.id.toString(),
                            name: crewMember.name,
                            headshot: crewHeadshots[index]?.url,
                            person_media: crewHeadshots[index]?.id
                                ? {
                                      data: [
                                          {
                                              media_type: MEDIA_TYPE.HEADSHOT,
                                              media_url: crewHeadshots[index]?.url,
                                              media_id: crewHeadshots[index]?.id,
                                              uploaded_by: METABASE_BOT_ID
                                          }
                                      ],
                                      on_conflict: {
                                          constraint: Person_Media_Constraint.PersonMediaPkey
                                      }
                                  }
                                : undefined
                        },
                        on_conflict: {
                            constraint: People_Constraint.PeopleTmdbIdKey,
                            update_columns: [People_Update_Column.Headshot]
                        }
                    }
                }))
            },
            movie_production_countries: {
                data: movie.production_countries.map((country) => ({
                    country: country.name
                }))
            },
            movie_production_companies: {
                data: movie.production_companies.map((company, index) => ({
                    company_name: company.name
                }))
            },
            movie_alternative_titles: {
                data: movie.alternative_titles.titles
                    .filter((title) => LANGUAGES.some((language) => language.code === title.iso_3166_1.toLowerCase()))
                    .map((title) => ({
                        alternative_title: title.title,
                        type: title.type,
                        language: title.iso_3166_1.toLowerCase()
                    }))
            }
        });

        return importedMovie;
    }
}

export const tmdbMovieImporterService = new TMDBMovieImporterService();
