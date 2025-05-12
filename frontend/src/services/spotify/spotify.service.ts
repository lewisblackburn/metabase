import {
    SpotifyAlbum,
    SpotifyArtist,
    SpotifyPlaylist,
    SpotifyPlaylistTracksResponse,
    SpotifySearchResponse,
    SpotifyTrack,
    SpotifyUser
} from '@/types/spotify.types';

export class SpotifyService {
    private readonly SPOTIFY_URL = 'https://api.spotify.com/v1';
    private readonly SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
    private readonly SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    private readonly SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
    private readonly READ_ONLY_METHODS = ['GET'];
    private readonly ALLOWED_ENDPOINTS = [
        '/users/{userId}/playlists',
        '/playlists/{playlistId}/tracks',
        '/search',
        '/tracks/{trackId}',
        '/albums/{albumId}',
        '/artists/{artistId}'
    ];

    protected accessToken: string | null = null;
    private accessTokenExpiresAt: number | null = null;

    public async getAccessToken(): Promise<string | null> {
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

    // private validateRequest(method: string, url: string): void {
    //     if (!this.READ_ONLY_METHODS.includes(method)) {
    //         throw new Error('This service is read-only. No modifications are allowed.');
    //     }

    //     const endpoint = url.replace(this.SPOTIFY_URL, '');
    //     const isAllowed = this.ALLOWED_ENDPOINTS.some((allowed) => {
    //         const pattern = allowed.replace(/\{.*?\}/g, '.*');
    //         return new RegExp(`^${pattern}$`).test(endpoint);
    //     });

    //     if (!isAllowed) {
    //         throw new Error(`Access to endpoint ${endpoint} is not allowed.`);
    //     }
    // }

    public async fetcher<T>(url: string, options: RequestInit = {}): Promise<T> {
        const accessToken = await this.getAccessToken();

        if (!accessToken) {
            throw new Error('Access token is required');
        }

        // NOTE: As this is my personal API key, I'm not going to validate the request
        // this.validateRequest(options.method || 'GET', url);

        const response = await fetch(url, {
            ...options,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
                'Content-Type': 'application/json',
                ...options.headers
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    }

    public async getUserPlaylists(userId: string): Promise<{ items: SpotifyPlaylist[] }> {
        return this.fetcher<{ items: SpotifyPlaylist[] }>(`${this.SPOTIFY_URL}/users/${userId}/playlists`);
    }

    public async getPlaylistTracks(playlistId: string): Promise<SpotifyPlaylistTracksResponse> {
        return this.fetcher<SpotifyPlaylistTracksResponse>(`${this.SPOTIFY_URL}/playlists/${playlistId}/tracks`);
    }

    public async searchTracks(query: string, limit: number = 20): Promise<SpotifySearchResponse> {
        return this.fetcher<SpotifySearchResponse>(
            `${this.SPOTIFY_URL}/search?q=${encodeURIComponent(query)}&type=track&limit=${limit}`
        );
    }

    public async getTrack(trackId: string): Promise<SpotifyTrack> {
        return this.fetcher<SpotifyTrack>(`${this.SPOTIFY_URL}/tracks/${trackId}`);
    }

    public async getAlbum(albumId: string): Promise<SpotifyAlbum> {
        return this.fetcher<SpotifyAlbum>(`${this.SPOTIFY_URL}/albums/${albumId}`);
    }

    public async getArtist(artistId: string): Promise<SpotifyArtist> {
        return this.fetcher<SpotifyArtist>(`${this.SPOTIFY_URL}/artists/${artistId}`);
    }
}

export const spotifyService = new SpotifyService();
