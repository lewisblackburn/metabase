export interface TMDBMovie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: TMDBGenre[];
    homepage: string;
    id: number | string;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: TMDBProductionCompany[];
    production_countries: TMDBProductionCountry[];
    alternative_titles: {
        titles: TMDBAlternativeTitle[];
    };
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: TMDBSpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    keywords: TMDBKeywords;
    credits: TMDBCredits;
    videos: TMDBVideos;
    images: TMDBImages;
    release_dates: {
        results: {
            iso_3166_1: string;
            release_dates: TMDBReleaseDate[];
        }[];
    };
}

export interface TMDBGenre {
    id: number;
    name: string;
}

export interface TMDBProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface TMDBProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface TMDBAlternativeTitle {
    iso_3166_1: string;
    title: string;
    type: string;
}

export interface TMDBSpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface TMDBKeywords {
    keywords: TMDBKeyword[];
}

export interface TMDBKeyword {
    id: number;
    name: string;
}

export interface TMDBCredits {
    cast: TMDBCast[];
    crew: TMDBCrew[];
}

export interface TMDBCast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export interface TMDBCrew {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string;
    credit_id: string;
    department: string;
    job: string;
}

export interface TMDBVideos {
    results: TMDBResult[];
}

export interface TMDBResult {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

export interface TMDBImages {
    backdrops: any[];
    logos: any[];
    posters: any[];
}

export interface TMDBSearchResponse {
    page: number;
    results: TMDBSearchResult[];
    total_pages: number;
    total_results: number;
}

export interface TMDBSearchResult {
    adult: boolean;
    backdrop_path?: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface TMDBPerson {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: any;
    deathday: any;
    gender: number;
    homepage: any;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string;
}

export const TMDB_SEARCH_RESULT_TYPES = ['movie', 'tv', 'person'] as const;

export type TMDBSearchResultType = (typeof TMDB_SEARCH_RESULT_TYPES)[number];

export interface TMDBReleaseDate {
    certification: string;
    descriptors: any[];
    iso_639_1: string;
    note: string;
    release_date: string;
    type: number;
}
