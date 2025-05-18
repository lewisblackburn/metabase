import {
    GetMovieForContentQualityCheckDocument,
    GetMovieForContentQualityCheckQuery,
    GetMovieForContentQualityCheckQueryVariables
} from '@/generated/graphql';
import { nhost } from '@/lib/nhost';
import { TmdbMovieDetails } from '@/types/tmdb.types';

import { GoogleBooksVolume } from '../types/googlebooks.types';
import { SpotifyTrack } from '../types/spotify.types';
import { tmdbService } from './tmdb/tmdb.service';

export class ContentQualityService {
    public static async checkMovieQuality(id: string): Promise<number> {
        const localMovieData = await nhost.graphql.request<
            GetMovieForContentQualityCheckQuery,
            GetMovieForContentQualityCheckQueryVariables
        >(GetMovieForContentQualityCheckDocument, {
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

    // TODO
    public static async checkSongQuality(localSong: any, spotifyTrack: SpotifyTrack): Promise<number> {
        let score = 0;

        if (localSong.title?.toLowerCase() === spotifyTrack.name?.toLowerCase()) {
            score += 40;
        }

        const localArtists = new Set(localSong.artists?.map((a: string) => a.toLowerCase()));
        const spotifyArtists = new Set(spotifyTrack.artists.map((a) => a.name.toLowerCase()));
        if (ContentQualityService.areSetsEqual(localArtists, spotifyArtists)) {
            score += 30;
        }

        if (localSong.album?.toLowerCase() === spotifyTrack.album.name?.toLowerCase()) {
            score += 30;
        }

        return score;
    }

    // TODO
    public static async checkBookQuality(localBook: any, googleBook: GoogleBooksVolume): Promise<number> {
        let score = 0;

        if (localBook.title?.toLowerCase() === googleBook.volumeInfo.title?.toLowerCase()) {
            score += 40;
        }

        const localAuthors = new Set(localBook.authors?.map((a: string) => a.toLowerCase()));
        const googleAuthors = new Set(googleBook.volumeInfo.authors?.map((a) => a.toLowerCase()) || []);
        if (ContentQualityService.areSetsEqual(localAuthors, googleAuthors)) {
            score += 30;
        }

        const localISBN = localBook.isbn;
        const googleISBN = googleBook.volumeInfo.industryIdentifiers?.find(
            (id) => id.type === 'ISBN_13' || id.type === 'ISBN_10'
        )?.identifier;

        if (localISBN === googleISBN) {
            score += 30;
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
