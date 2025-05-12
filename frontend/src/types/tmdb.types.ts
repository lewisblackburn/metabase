export interface TmdbGenre {
    id: number;
    name: string;
}

export interface TmdbProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

export interface TmdbProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface TmdbSpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface TmdbMovieDetails {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string | null;
        backdrop_path: string | null;
    } | null;
    budget: number;
    genres: TmdbGenre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: TmdbProductionCompany[];
    production_countries: TmdbProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: TmdbSpokenLanguage[];
    status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    credits?: TmdbCredits;
    keywords?: TmdbKeywords;
    images?: TmdbImages;
    release_dates?: TmdbReleaseDates;
    alternative_titles?: TmdbAlternativeTitles;
}

export interface TmdbCastMember {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export interface TmdbCrewMember {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
}

export interface TmdbCredits {
    cast: TmdbCastMember[];
    crew: TmdbCrewMember[];
}

export interface TmdbKeyword {
    id: number;
    name: string;
}

export interface TmdbKeywords {
    keywords: TmdbKeyword[];
}

export interface TmdbImage {
    aspect_ratio: number;
    height: number;
    iso_639_1: string | null;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface TmdbImages {
    backdrops: TmdbImage[];
    logos: TmdbImage[];
    posters: TmdbImage[];
}

export interface TmdbReleaseDateInfo {
    certification: string;
    descriptors: string[];
    iso_639_1: string;
    note: string;
    release_date: string;
    type: number;
}

export interface TmdbReleaseDateResult {
    iso_3166_1: string;
    release_dates: TmdbReleaseDateInfo[];
}

export interface TmdbReleaseDates {
    results: TmdbReleaseDateResult[];
}

export interface TmdbAlternativeTitle {
    iso_3166_1: string;
    title: string;
    type: string;
}

export interface TmdbAlternativeTitles {
    titles: TmdbAlternativeTitle[];
}

interface TMDBSearchResult {
    id: number;
    title: string;
    original_title: string;
    release_date: string;
    poster_path: string | null;
}

interface TMDBSearchResponse {
    results: TMDBSearchResult[];
    total_results: number;
}

export interface TmdbPersonDetails {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string | null;
    deathday: string | null;
    gender: number;
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    known_for_department: string;
    name: string;
    place_of_birth: string | null;
    popularity: number;
    profile_path: string | null;
    movie_credits?: {
        cast: TmdbCastMember[];
        crew: TmdbCrewMember[];
    };
    tv_credits?: {
        cast: TmdbCastMember[];
        crew: TmdbCrewMember[];
    };
    images?: {
        profiles: TmdbImage[];
    };
}
