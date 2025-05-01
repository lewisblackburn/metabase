import { LANGUAGES } from '@/constants/languages.constant';
import { BUCKET } from '@/constants/media.constant';
import { movieCertificationOptions, movieReleaseStatusOptions } from '@/features/movies/constants/movie-enums';
import {
    Credits_Arr_Rel_Insert_Input,
    Credits_Constraint,
    Credits_Insert_Input,
    Genres_Constraint,
    Genres_Update_Column,
    GetMovieByTmdb_IdDocument,
    GetMovieByTmdb_IdQuery,
    GetMovieByTmdb_IdQueryVariables,
    InputMaybe,
    InsertMovieDocument,
    InsertMovieMutation,
    InsertMovieMutationVariables,
    Keywords_Constraint,
    Keywords_Update_Column,
    Movie_Alternative_Titles_Arr_Rel_Insert_Input,
    Movie_Certification_Types_Enum,
    Movie_Genres_Arr_Rel_Insert_Input,
    Movie_Keywords_Arr_Rel_Insert_Input,
    Movie_Media_Constraint,
    Movie_Production_Companies_Arr_Rel_Insert_Input,
    Movie_Production_Companies_Constraint,
    Movie_Production_Companies_Update_Column,
    Movie_Production_Countries_Arr_Rel_Insert_Input,
    Movie_Release_Status_Types_Enum,
    Movies_Insert_Input,
    Object_Types_Enum,
    People_Constraint,
    People_Update_Column,
    Person_Media_Constraint
} from '@/generated/graphql';
import { nhost } from '@/lib/nhost';
import { TMDBMovie } from '@/types/tmdb.type';

import { FileService } from '../file.service';
import { TMDBService } from './tmdb.service';

type RawCredit = {
    id: number;
    name: string;
    profile_path: string | null | undefined;
    credit_type: 'cast' | 'crew';
    role: string;
    details: Record<string, any>;
};

export class TMDBMovieImporterService extends TMDBService {
    private buildKeywords(movie: TMDBMovie): InputMaybe<Movie_Keywords_Arr_Rel_Insert_Input> | undefined {
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

    private buildGenres(movie: TMDBMovie): InputMaybe<Movie_Genres_Arr_Rel_Insert_Input> | undefined {
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

    private async buildCredits(movie: TMDBMovie): Promise<InputMaybe<Credits_Arr_Rel_Insert_Input> | undefined> {
        const rawCredits: RawCredit[] = [
            ...movie.credits.cast.map((c) => ({
                id: c.id,
                name: c.name,
                profile_path: c.profile_path ?? null,
                credit_type: 'cast' as const,
                role: 'actor' as const,
                details: { character: c.character, department: 'acting' as const }
            })),
            ...movie.credits.crew.map((c) => ({
                id: c.id,
                name: c.name,
                profile_path: c.profile_path ?? null,
                credit_type: 'crew' as const,
                role: c.job.toLowerCase(),
                details: { department: c.department.toLowerCase(), job: c.job.toLowerCase() }
            }))
        ];

        const uploads = await Promise.all(
            rawCredits.map((rc) => FileService.uploadImage(rc.profile_path, BUCKET.HEADSHOT, this.getProfileImage))
        );

        const data: Credits_Insert_Input[] = rawCredits.map((rc, i) => {
            const file = uploads[i];
            const personMedia = file
                ? {
                      data: [
                          {
                              bucket: BUCKET.HEADSHOT,
                              file_url: file.url,
                              media_id: file.id
                          }
                      ],
                      on_conflict: {
                          constraint: Person_Media_Constraint.PersonMediaPkey
                      }
                  }
                : undefined;

            return {
                credit_type: rc.credit_type,
                object_type: Object_Types_Enum.Movie,
                role: rc.role,
                details: rc.details,
                person: {
                    data: {
                        tmdb_id: rc.id.toString(),
                        name: rc.name,
                        headshot: file?.url,
                        person_media: personMedia
                    },
                    on_conflict: {
                        constraint: People_Constraint.PeopleTmdbIdKey,
                        update_columns: [People_Update_Column.Headshot]
                    }
                }
            };
        });

        return {
            data,
            on_conflict: {
                constraint: Credits_Constraint.CreditsPkey,
                update_columns: []
            }
        };
    }

    private buildCountries(movie: TMDBMovie): InputMaybe<Movie_Production_Countries_Arr_Rel_Insert_Input> | undefined {
        return {
            data: movie.production_countries.map((c) => ({ country: c.name }))
        };
    }

    private async buildCompanies(
        movie: TMDBMovie
    ): Promise<InputMaybe<Movie_Production_Companies_Arr_Rel_Insert_Input> | undefined> {
        // const productionCompanyLogos = await Promise.all(
        //     movie.production_companies.map((company) =>
        //         FileService.uploadFile(this.getLogoImage(company.logo_path), MEDIA_TYPE.LOGO)
        //     )
        // );

        return {
            data: movie.production_companies.map((c) => ({ company_name: c.name })),
            on_conflict: {
                constraint: Movie_Production_Companies_Constraint.MovieProductionCompaniesCompanyNameKey,
                update_columns: [Movie_Production_Companies_Update_Column.CompanyName]
            }
        };
    }

    private buildAlternativeTitles(
        movie: TMDBMovie
    ): InputMaybe<Movie_Alternative_Titles_Arr_Rel_Insert_Input> | undefined {
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

    // NOTE: This only stores GB/US certification for now
    private buildCertification(movie: TMDBMovie): InputMaybe<Movie_Certification_Types_Enum> | undefined {
        const certificationName =
            (
                movie.release_dates.results.find((r) => r.iso_3166_1 === 'GB') ||
                movie.release_dates.results.find((r) => r.iso_3166_1 === 'US')
            )?.release_dates.find((d) => d.certification)?.certification ?? 'Unrated';

        const certification = movieCertificationOptions.find((s) => s.label === certificationName);
        return certification ? certification.value : undefined;
    }

    private buildStatus(movie: TMDBMovie): InputMaybe<Movie_Release_Status_Types_Enum> | undefined {
        const status = movieReleaseStatusOptions.find((s) => s.label === movie.status);
        return status ? status.value : undefined;
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
            'keywords,credits,videos,images,production_companies,production_countries,alternative_titles,release_dates'
        );
        if (!movie) return false;

        const [posterFile, backdropFile] = await Promise.all([
            FileService.uploadImage(movie.poster_path, BUCKET.POSTER, this.getPosterImage),
            FileService.uploadImage(movie.backdrop_path, BUCKET.BACKDROP, this.getBackdropImage)
        ]);

        const payload = await this.save({
            title: movie.title,
            tagline: movie.tagline,
            overview: movie.overview,
            runtime: movie.runtime,
            budget: movie.budget,
            revenue: movie.revenue,
            status: this.buildStatus(movie),
            release_date: new Date(movie.release_date),
            language: movie.original_language,
            tmdb_id: movie.id.toString(),
            imdb_id: movie.imdb_id?.toString(),
            poster: posterFile?.url,
            backdrop: backdropFile?.url,
            movie_media: {
                data: [
                    { bucket: BUCKET.POSTER, file_url: posterFile?.url, media_id: posterFile?.id },
                    { bucket: BUCKET.BACKDROP, file_url: backdropFile?.url, media_id: backdropFile?.id }
                ],
                on_conflict: { constraint: Movie_Media_Constraint.MovieMediaPkey }
            },
            movie_keywords: this.buildKeywords(movie),
            movie_genres: this.buildGenres(movie),
            credits: await this.buildCredits(movie),
            movie_production_countries: this.buildCountries(movie),
            movie_production_companies: await this.buildCompanies(movie),
            movie_alternative_titles: this.buildAlternativeTitles(movie),
            certification: this.buildCertification(movie)
        });

        return payload;
    }
}

export const tmdbMovieImporterService = new TMDBMovieImporterService();
