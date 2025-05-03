export interface SpotifyUser {
    id: string;
    display_name: string;
    email: string;
    images: SpotifyImage[];
    external_urls: {
        spotify: string;
    };
}

export interface SpotifyImage {
    url: string;
    height: number;
    width: number;
}

export interface SpotifyPlaylist {
    id: string;
    name: string;
    description: string;
    images: SpotifyImage[];
    owner: {
        id: string;
        display_name: string;
    };
    tracks: {
        total: number;
    };
    external_urls: {
        spotify: string;
    };
}

export interface SpotifyTrack {
    id: string;
    name: string;
    duration_ms: number;
    explicit: boolean;
    popularity: number;
    preview_url: string | null;
    artists: SpotifyArtist[];
    album: SpotifyAlbum;
    external_urls: {
        spotify: string;
    };
}

export interface SpotifyArtist {
    id: string;
    name: string;
    images: SpotifyImage[];
    external_urls: {
        spotify: string;
    };
}

export interface SpotifyAlbum {
    id: string;
    name: string;
    album_type: string;
    images: SpotifyImage[];
    artists: SpotifyArtist[];
    release_date: string;
    total_tracks: number;
    external_urls: {
        spotify: string;
    };
}

export interface SpotifySearchResponse {
    tracks: {
        items: SpotifyTrack[];
        total: number;
        limit: number;
        offset: number;
    };
}

export interface SpotifyPlaylistTracksResponse {
    items: {
        track: SpotifyTrack;
    }[];
    total: number;
    limit: number;
    offset: number;
}
