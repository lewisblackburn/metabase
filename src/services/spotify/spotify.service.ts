import { SingleArtistResponse, SingleTrackResponse } from '@/types/spotify.type';

export class SpotifyService {
    private readonly SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
    private readonly SPOTIFY_URL = 'https://api.spotify.com/v1';
    private readonly SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    private readonly SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

    protected accessToken: string | null = null;
    private accessTokenExpiresAt: number | null = null;

    constructor() {}

    protected SPOTIFY_ENTITY_URL(type: string, id: string): string {
        return `${this.SPOTIFY_URL}/${type}/${id}`;
    }

    protected SPOTIFY_SEARCH_URL(query: string, pageIndex: number, type: string): string {
        const offset = (pageIndex - 1) * 20;
        const limit = 20;

        return `${this.SPOTIFY_URL}/search?q=${query}&type=${type}&offset=${offset}&limit=${limit}`;
    }

    protected async getAccessToken(): Promise<string | null> {
        const now = Date.now() / 1000;

        // NOTE: If the token is still valid, don't request a new one
        if (this.accessToken && this.accessTokenExpiresAt && this.accessTokenExpiresAt > now) {
            return this.accessToken;
        }

        const response = await fetch(this.SPOTIFY_TOKEN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${btoa(`${this.SPOTIFY_CLIENT_ID}:${this.SPOTIFY_CLIENT_SECRET}`)}`
            },
            body: 'grant_type=client_credentials'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        this.accessToken = data.access_token;
        this.accessTokenExpiresAt = now + data.expires_in;

        return this.accessToken;
    }

    public async fetcher<T>(url: string, options: RequestInit = {}): Promise<T> {
        const accessToken = await this.getAccessToken();

        const response = await fetch(url, {
            ...options,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                ...options.headers
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    }

    public async getArtist(id: string): Promise<SingleArtistResponse> {
        const url = this.SPOTIFY_ENTITY_URL('artists', id);
        return this.fetcher(url);
    }

    public async getTrack(id: string): Promise<SingleTrackResponse> {
        const url = this.SPOTIFY_ENTITY_URL('tracks', id);
        return this.fetcher<SingleTrackResponse>(url);
    }

    public async search<T>(query: string, pageIndex: number, type: 'track' | 'artist' | 'album') {
        const url = this.SPOTIFY_SEARCH_URL(query, pageIndex, type);
        const response = await this.fetcher<T>(url);

        return response;
    }
}

export const spotifyService = new SpotifyService();
