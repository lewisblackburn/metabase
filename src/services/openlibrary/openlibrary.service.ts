import {
    OPENLIBRARY_API_AUTHOR,
    OPENLIBRARY_API_SEARCH,
    OPENLIBRARY_API_WORK,
    OPENLIBRARY_COVER_URL
} from '@/constants/openlibrary.constant';
import { OpenLibraryAuthor, OpenLibrarySearchResponse, OpenLibraryWork } from '@/types/openlibrary.type';

export class OpenLibraryService {
    public getCoverImage(coverId?: string | number, size: 'S' | 'M' | 'L' = 'M'): string {
        if (!coverId) return '';
        return `${OPENLIBRARY_COVER_URL}/b/id/${coverId}-${size}.jpg`;
    }

    private async fetcher<T>(url: string, options: RequestInit = {}): Promise<T> {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json() as Promise<T>;
    }

    public async searchBooks(query: string, page: number = 1): Promise<OpenLibrarySearchResponse> {
        const url = `${OPENLIBRARY_API_SEARCH}?q=${encodeURIComponent(query)}&page=${page}`;
        return this.fetcher<OpenLibrarySearchResponse>(url);
    }

    public async getWork(workId: string): Promise<OpenLibraryWork> {
        const url = `${OPENLIBRARY_API_WORK}?id=${workId}`;
        return this.fetcher<any>(url);
    }

    public async getAuthor(authorId: string): Promise<OpenLibraryAuthor> {
        const url = `${OPENLIBRARY_API_AUTHOR}?id=${authorId}`;
        return this.fetcher<OpenLibraryAuthor>(url);
    }
}

export const openLibraryService = new OpenLibraryService();
