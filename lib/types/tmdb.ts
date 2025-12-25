export interface TMDBMovie {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: TMDBBelongsToCollection
    budget: number
    genres: TMDBGenre[]
    homepage: string
    id: number
    imdb_id: string
    origin_country: string[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: TMDBProductionCompany[]
    production_countries: TMDBProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: TMDBSpokenLanguage[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface TMDBBelongsToCollection {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
}

export interface TMDBGenre {
    id: number
    name: string
}

export interface TMDBProductionCompany {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export interface TMDBProductionCountry {
    iso_3166_1: string
    name: string
}

export interface TMDBSpokenLanguage {
    english_name: string
    iso_639_1: string
    name: string
}
