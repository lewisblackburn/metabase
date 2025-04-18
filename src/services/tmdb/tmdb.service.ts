import { MediaType } from '@/constants/media.constant';
import { TMDB_BACKDROP_URL, TMDB_LOGO_URL, TMDB_POSTER_URL, TMDB_PROFILE_URL } from '@/constants/tmdb.constant';

import { FileService } from '../file.service';

export class TMDBService {
    private readonly TMDB_URL_V3 = 'https://api.themoviedb.org/3';

    constructor(public language: string = 'en-GB') {}

    protected TMDB_ENTITY_URL(type: string, id: string | number, appendToResponse?: string): string {
        return `${this.TMDB_URL_V3}/${type}/${id}?append_to_response=${appendToResponse}&language=${this.language}`;
    }

    protected TMDB_SEARCH_URL(query: string, pageIndex: number, type: string): string {
        return `${this.TMDB_URL_V3}/search/${type}?query=${query}&language=${this.language}&page=${pageIndex}`;
    }

    protected uploadImage(path: string | null | undefined, type: MediaType, urlFn: (path: string) => string) {
        if (!path) return Promise.resolve(null);
        return FileService.uploadFile(urlFn.call(this, path), type);
    }

    public getProfileImage(profilePath?: string): string {
        if (!profilePath) return '';
        return `${TMDB_PROFILE_URL}${profilePath}`;
    }

    public getPosterImage(posterPath?: string): string {
        if (!posterPath) return '';
        return `${TMDB_POSTER_URL}${posterPath}`;
    }

    public getBackdropImage(backdropPath?: string): string {
        if (!backdropPath) return '';
        return `${TMDB_BACKDROP_URL}${backdropPath}`;
    }

    public getLogoImage(logoPath?: string): string {
        if (!logoPath) return '';
        return `${TMDB_LOGO_URL}${logoPath}`;
    }

    public async fetcher<T>(url: string, options: RequestInit = {}): Promise<T> {
        const response = await fetch(url, {
            ...options,
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
                ...options.headers
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    }

    public async getEntity<T>(type: 'movie' | 'person', id: string | number, appendToResponse = ''): Promise<T> {
        return this.fetcher<T>(this.TMDB_ENTITY_URL(type, id, appendToResponse));
    }

    public async search<T>(query: string, pageIndex: number, type: 'movie' | 'tv' | 'person'): Promise<T> {
        return this.fetcher<T>(this.TMDB_SEARCH_URL(query, pageIndex, type));
    }
}

export const tmdbService = new TMDBService();
