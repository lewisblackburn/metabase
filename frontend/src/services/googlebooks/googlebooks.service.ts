import { GoogleBooksVolume } from '@/types/googlebooks.types';

export class GoogleBooksService {
    private readonly GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1';

    constructor(public language: string = 'en') {}

    protected GOOGLE_BOOKS_ENTITY_URL(volumeId: string): string {
        return `${this.GOOGLE_BOOKS_API_URL}/volumes/${volumeId}?langRestrict=${this.language}`;
    }

    protected GOOGLE_BOOKS_SEARCH_URL(query: string, pageIndex: number, maxResults: number = 10): string {
        const startIndex = (pageIndex - 1) * maxResults;
        return `${this.GOOGLE_BOOKS_API_URL}/volumes?q=${encodeURIComponent(query)}&langRestrict=${this.language}&startIndex=${startIndex}&maxResults=${maxResults}`;
    }

    public getThumbnailImage(imageLinks?: { thumbnail?: string; smallThumbnail?: string }): string {
        if (!imageLinks) return '';
        const url = imageLinks.thumbnail || imageLinks.smallThumbnail || '';
        return url ? `/api/googlebooks/download-image?url=${encodeURIComponent(url)}` : '';
    }

    public async fetcher<T>(url: string, options: RequestInit = {}): Promise<T> {
        // const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;
        // const separator = url.includes('?') ? '&' : '?';
        // const urlWithKey = `${url}${separator}key=${apiKey}`;

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

        return response.json();
    }

    public async getVolume(volumeId: string): Promise<GoogleBooksVolume> {
        return this.fetcher<GoogleBooksVolume>(this.GOOGLE_BOOKS_ENTITY_URL(volumeId));
    }

    public async search<T>(query: string, pageIndex: number, maxResults?: number): Promise<T> {
        return this.fetcher<T>(this.GOOGLE_BOOKS_SEARCH_URL(query, pageIndex, maxResults));
    }
}

export const googleBooksService = new GoogleBooksService();
