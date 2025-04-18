import { LANGUAGES } from '@/constants/languages.constant';
import { MEDIA_TYPE } from '@/constants/media.constant';
import {
    Genres_Constraint,
    Genres_Update_Column,
    GetMovieByTmdb_IdDocument,
    GetMovieByTmdb_IdQuery,
    GetMovieByTmdb_IdQueryVariables,
    InsertMovieDocument,
    InsertMovieMutation,
    InsertMovieMutationVariables,
    Keywords_Constraint,
    Keywords_Update_Column,
    Movie_Media_Constraint,
    Movie_Production_Companies_Constraint,
    Movie_Production_Companies_Update_Column,
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
    private buildKeywords(movie: TMDBMovie) {
        return {
            data: movie.keywords.keywords.map((k) => ({
                keyword: {
                    data: { keyword: k.name },
                    on_conflict: {
                        constraint: Keywords_Constraint.KeywordsKeywordKey,
                        update_columns: [Keywords_Update_Column.Keyword]
                    }
                }
            }))
        };
    }

    private buildGenres(movie: TMDBMovie) {
        return {
            data: movie.genres.map((g, idx) => ({
                genre: {
                    data: { name: g.name },
                    on_conflict: {
                        constraint: Genres_Constraint.GenresNameKey,
                        update_columns: [Genres_Update_Column.Name]
                    }
                },
                order: idx
            }))
        };
    }

    private async buildCast(movie: TMDBMovie) {
        const uploads = await Promise.all(
            movie.credits.cast.map((c) =>
                FileService.uploadImage(c.profile_path, MEDIA_TYPE.HEADSHOT, this.getProfileImage)
            )
        );
        return movie.credits.cast.map((c, idx) => {
            const file = uploads[idx];
            return {
                character: c.character,
                order: idx + 1,
                person: {
                    data: {
                        tmdb_id: c.id.toString(),
                        name: c.name,
                        headshot: file?.url,
                        person_media: file
                            ? {
                                  data: [
                                      {
                                          media_type: MEDIA_TYPE.HEADSHOT,
                                          media_url: file.url,
                                          media_id: file.id
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
            };
        });
    }

    private async buildCrew(movie: TMDBMovie) {
        const uploads = await Promise.all(
            movie.credits.crew.map((c) =>
                FileService.uploadImage(c.profile_path, MEDIA_TYPE.HEADSHOT, this.getProfileImage)
            )
        );
        return movie.credits.crew.map((c, idx) => {
            const file = uploads[idx];
            return {
                job: c.job,
                department: c.department,
                person: {
                    data: {
                        tmdb_id: c.id.toString(),
                        name: c.name,
                        headshot: file?.url,
                        person_media: file
                            ? {
                                  data: [
                                      {
                                          media_type: MEDIA_TYPE.HEADSHOT,
                                          media_url: file.url,
                                          media_id: file.id
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
            };
        });
    }

    private buildCountries(movie: TMDBMovie) {
        return {
            data: movie.production_countries.map((c) => ({ country: c.name }))
        };
    }

    private buildCompanies(movie: TMDBMovie) {
        // const productionCompanyLogos = await Promise.all(
        //     movie.production_companies.map((company) =>
        //         FileService.uploadFile(this.getLogoImage(company.logo_path), MEDIA_TYPE.LOGO)
        //     )
        // );
        return movie.production_companies.map((c) => ({ company_name: c.name }));
    }

    private buildAlternativeTitles(movie: TMDBMovie) {
        return {
            data: movie.alternative_titles.titles
                .filter((t) => LANGUAGES.some((l) => l.code === t.iso_3166_1.toLowerCase()))
                .map((t) => ({
                    alternative_title: t.title,
                    type: t.type,
                    language: t.iso_3166_1.toLowerCase()
                }))
        };
    }

    async isExisting(tmdbMovieId: TMDBMovie['id']): Promise<GetMovieByTmdb_IdQuery['movies']> {
        const { data, error } = await nhost.graphql.request<GetMovieByTmdb_IdQuery, GetMovieByTmdb_IdQueryVariables>(
            GetMovieByTmdb_IdDocument,
            { tmdb_id: tmdbMovieId.toString() }
        );
        if (error) throw new Error(Array.isArray(error) ? error.map((e) => e.message).join('; ') : error.message);
        return data.movies;
    }

    async save(input: Movies_Insert_Input): Promise<InsertMovieMutation> {
        const { data, error } = await nhost.graphql.request<InsertMovieMutation, InsertMovieMutationVariables>(
            InsertMovieDocument,
            { object: input }
        );
        if (error) throw new Error(Array.isArray(error) ? error.map((e) => e.message).join('; ') : error.message);
        return data;
    }

    async import(tmdbMovieId: TMDBMovie['id']): Promise<InsertMovieMutation | boolean> {
        const existing = await this.isExisting(tmdbMovieId);
        if (existing.length) return true;

        const movie = await this.getEntity<TMDBMovie>(
            'movie',
            tmdbMovieId,
            'keywords,credits,videos,images,production_companies,production_countries,alternative_titles'
        );
        if (!movie) return false;

        const [posterFile, backdropFile] = await Promise.all([
            FileService.uploadImage(movie.poster_path, MEDIA_TYPE.POSTER, this.getPosterImage),
            FileService.uploadImage(movie.backdrop_path, MEDIA_TYPE.BACKDROP, this.getBackdropImage)
        ]);

        const castData = await this.buildCast(movie);
        const crewData = await this.buildCrew(movie);
        const productionCompaniesData = this.buildCompanies(movie);

        const payload = await this.save({
            title: movie.title,
            tagline: movie.tagline,
            overview: movie.overview,
            runtime: movie.runtime,
            budget: movie.budget,
            revenue: movie.revenue,
            status: movie.status,
            release_date: new Date(movie.release_date),
            language: movie.original_language,
            tmdb_id: movie.id.toString(),
            imdb_id: movie.imdb_id?.toString(),
            poster: posterFile?.url,
            backdrop: backdropFile?.url,
            movie_media: {
                data: [
                    { media_type: MEDIA_TYPE.POSTER, media_url: posterFile?.url, media_id: posterFile?.id },
                    { media_type: MEDIA_TYPE.BACKDROP, media_url: backdropFile?.url, media_id: backdropFile?.id }
                ],
                on_conflict: { constraint: Movie_Media_Constraint.MovieMediaPkey }
            },
            movie_keywords: this.buildKeywords(movie),
            movie_genres: this.buildGenres(movie),
            movie_cast_members: { data: castData },
            movie_crew_members: { data: crewData },
            movie_production_countries: this.buildCountries(movie),
            movie_production_companies: {
                data: productionCompaniesData,
                on_conflict: {
                    constraint: Movie_Production_Companies_Constraint.MovieProductionCompaniesCompanyNameKey,
                    update_columns: [Movie_Production_Companies_Update_Column.CompanyName]
                }
            },
            movie_alternative_titles: this.buildAlternativeTitles(movie)
        });

        return payload;
    }
}

export const tmdbMovieImporterService = new TMDBMovieImporterService();
