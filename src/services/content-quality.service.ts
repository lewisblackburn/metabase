import { OBJECT_TYPE, ObjectType } from '@/constants/objects.constant';
import { GetMovieDocument, GetPersonDocument, GetSongDocument, Movies, People, Songs } from '@/generated/graphql';
import { nhost } from '@/lib/nhost';
import { TMDBMovie, TMDBPerson } from '@/types/tmdb.type';

import { SpotifyService, spotifyService } from './spotify/spotify.service';
import { TMDBService, tmdbService } from './tmdb/tmdb.service';

class ContentQualityService {
    private tmdb: TMDBService;
    private spotify: SpotifyService;

    constructor() {
        this.tmdb = tmdbService;
        this.spotify = spotifyService;
    }

    public async check(objectType: ObjectType, localId: string, externalId: string) {
        switch (objectType) {
            case OBJECT_TYPE.MOVIE:
                return this.checkMovieQuality(localId, externalId);
            case OBJECT_TYPE.SONG:
                return this.checkSongQuality(localId, externalId);
            case OBJECT_TYPE.PERSON:
                return this.checkPersonQuality(localId, externalId);
            default:
                return 0;
        }
    }

    private async checkMovieQuality(localId: string, tmdbId: string) {
        const tmdbMovie = await this.tmdb.getEntity<TMDBMovie>('movie', tmdbId, 'credits');
        const localMovie = await nhost.graphql.request<{
            movies_by_pk: Movies;
        }>(GetMovieDocument, {
            id: localId
        });

        if (!tmdbMovie || !localMovie.data?.movies_by_pk) return 0;

        const formattedTmdbMovie = {
            title: tmdbMovie.title,
            tagline: tmdbMovie.tagline,
            overview: tmdbMovie.overview,
            budget: tmdbMovie.budget,
            runtime: tmdbMovie.runtime,
            release_date: tmdbMovie.release_date,
            cast: tmdbMovie.credits.cast.map((cast) => cast.name)
        };

        const formattedLocalMovie = {
            title: localMovie.data.movies_by_pk.title,
            tagline: localMovie.data.movies_by_pk.tagline,
            overview: localMovie.data.movies_by_pk.overview,
            budget: localMovie.data.movies_by_pk.budget,
            runtime: localMovie.data.movies_by_pk.runtime,
            release_date: localMovie.data.movies_by_pk.release_date,
            cast: localMovie.data.movies_by_pk.movie_cast_members.map((cast_member) => cast_member.person.name)
        };

        const score = this.compareObjects(formattedTmdbMovie, formattedLocalMovie);

        return Math.floor(score);
    }

    private async checkSongQuality(localId: string, spotifyId: string) {
        const spotifySong = await this.spotify.getTrack(spotifyId);
        const localSong = await nhost.graphql.request<{
            songs_by_pk: Songs;
        }>(GetSongDocument, {
            id: localId
        });

        if (!spotifySong || !localSong.data?.songs_by_pk) return 0;

        const formattedSpotifySong = {
            title: spotifySong.name,
            length: spotifySong.duration_ms,
            artists: spotifySong.artists.map((artist) => artist.name)
        };

        const formattedLocalSong = {
            title: localSong.data.songs_by_pk.title,
            length: localSong.data.songs_by_pk.duration,
            artists: localSong.data.songs_by_pk.song_artists.map((artist) => artist.person.name)
        };

        const score = this.compareObjects(formattedSpotifySong, formattedLocalSong);

        return Math.floor(score);
    }

    private async checkPersonQuality(localId: string, tmdbId: string) {
        const tmdbPerson = await this.tmdb.getEntity<TMDBPerson>('person', tmdbId);
        const localPerson = await nhost.graphql.request<{
            people_by_pk: People;
        }>(GetPersonDocument, {
            id: localId
        });

        if (!tmdbPerson || !localPerson.data?.people_by_pk) return 0;

        const formattedTmdbPerson = {
            name: tmdbPerson.name,
            birthday: tmdbPerson.birthday,
            deathday: tmdbPerson.deathday,
            biography: tmdbPerson.biography
            // place_of_birth: tmdbPerson.place_of_birth
        };

        const formattedLocalPerson = {
            name: localPerson.data.people_by_pk.name,
            birthday: localPerson.data.people_by_pk.birth_date,
            deathday: localPerson.data.people_by_pk.death_date,
            biography: localPerson.data.people_by_pk.bio
            // place_of_birth: localPerson.data.people_by_pk.birth
        };

        const score = this.compareObjects(formattedTmdbPerson, formattedLocalPerson);

        return Math.floor(score);
    }

    // NOTE: Function to compare objects and nested objects against
    // each other and returns a match score value.
    private compareObjects(obj1: any, obj2: any): number {
        const { matches, total } = this.compareNestedObjects(obj1, obj2);
        return total === 0 ? 0 : (matches / total) * 100;
    }

    private compareNestedObjects(obj1: any, obj2: any): { matches: number; total: number } {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        const commonKeys = keys1.filter((key) => keys2.includes(key));

        let matches = 0;
        let total = 0;

        commonKeys.forEach((key) => {
            // NOTE: If the value is an object, compare recursively
            if (
                obj1[key] !== null &&
                typeof obj1[key] === 'object' &&
                obj2[key] !== null &&
                typeof obj2[key] === 'object'
            ) {
                const result = this.compareNestedObjects(obj1[key], obj2[key]);
                matches += result.matches;
                total += result.total;
            } else {
                total++;
                if (obj1[key] === obj2[key]) {
                    matches++;
                }
            }
        });

        return { matches, total };
    }
}

export const contentQualityService = new ContentQualityService();
