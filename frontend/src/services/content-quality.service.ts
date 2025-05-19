import {
    GetBookDocument,
    GetBookQuery,
    GetBookQueryVariables,
    GetMovieDocument,
    GetMovieQuery,
    GetMovieQueryVariables,
    GetSongDocument,
    GetSongQuery,
    GetSongQueryVariables
} from '@/generated/graphql';
import { nhost } from '@/lib/nhost';
import { TmdbMovieDetails } from '@/types/tmdb.types';

import { googleBooksService } from './googlebooks/googlebooks.service';
import { spotifyService } from './spotify/spotify.service';
import { tmdbService } from './tmdb/tmdb.service';

export class ContentQualityService {
    public static async checkMovieQuality(id: string): Promise<number> {
        const localMovieData = await nhost.graphql.request<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, {
            id
        });

        const localMovie = localMovieData.data?.movies_by_pk;

        if (!localMovie?.tmdb_id) return 0;

        const tmdbMovie = await tmdbService.getEntity<TmdbMovieDetails>('movie', localMovie.tmdb_id, 'credits');

        let score = 0;

        if (localMovie.title?.toLowerCase() === tmdbMovie.title?.toLowerCase()) {
            score += 30;
        }

        if (localMovie.release_date === tmdbMovie.release_date) {
            score += 20;
        }

        const localGenres = new Set(localMovie.movie_genres?.map((g) => g.genre.toLowerCase()));
        const tmdbGenres = new Set(tmdbMovie.genres.map((g) => g.name.toLowerCase()));
        if (this.areSetsEqual(localGenres, tmdbGenres)) {
            score += 20;
        }

        if (localMovie.runtime === tmdbMovie.runtime) {
            score += 15;
        }

        if (localMovie.overview?.toLowerCase() === tmdbMovie.overview?.toLowerCase()) {
            score += 15;
        }

        return score;
    }

    public static async checkSongQuality(id: string): Promise<number> {
        const localSongData = await nhost.graphql.request<GetSongQuery, GetSongQueryVariables>(GetSongDocument, {
            id
        });

        const localSong = localSongData.data?.songs_by_pk;

        if (!localSong?.spotify_id) return 0;

        const spotifyTrack = await spotifyService.getTrack(localSong.spotify_id);

        let score = 0;

        if (localSong.name?.toLowerCase() === spotifyTrack.name?.toLowerCase()) {
            score += 40;
        }

        if (localSong.album?.name?.toLowerCase() === spotifyTrack.album.name?.toLowerCase()) {
            score += 30;
        }

        if (localSong.duration === spotifyTrack.duration_ms) {
            score += 30;
        }

        return score;
    }

    public static async checkBookQuality(id: string): Promise<number> {
        const localBookData = await nhost.graphql.request<GetBookQuery, GetBookQueryVariables>(GetBookDocument, {
            id
        });

        const localBook = localBookData.data?.books_by_pk;

        if (!localBook?.googlebooks_id) return 0;

        const googleBook = await googleBooksService.getVolume(localBook.googlebooks_id);

        let score = 0;

        if (localBook.title?.toLowerCase() === googleBook?.volumeInfo.title?.toLowerCase()) {
            score += 40;
        }

        const localGenres = new Set(localBook.book_genres?.map((g) => g.genre.toLowerCase()));
        const googleGenres = new Set(googleBook.volumeInfo.categories?.map((g) => g.toLowerCase()) || []);
        if (ContentQualityService.areSetsEqual(localGenres, googleGenres)) {
            score += 30;
        }

        if (localBook.published_date === googleBook.volumeInfo.publishedDate) {
            score += 20;
        }

        if (localBook.overview?.toLowerCase() === googleBook.volumeInfo.description?.toLowerCase()) {
            score += 10;
        }

        return score;
    }

    private static areSetsEqual<T>(a: Set<T>, b: Set<T>): boolean {
        if (a.size !== b.size) return false;
        for (const item of a) {
            if (!b.has(item)) return false;
        }
        return true;
    }
}
