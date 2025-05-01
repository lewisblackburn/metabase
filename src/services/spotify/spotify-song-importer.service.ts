import { BUCKET } from '@/constants/media.constant';
import {
    Album_Artists_Arr_Rel_Insert_Input,
    Album_Media_Constraint,
    Albums_Constraint,
    Albums_Update_Column,
    GetSongBySpotify_IdDocument,
    GetSongBySpotify_IdQuery,
    GetSongBySpotify_IdQueryVariables,
    InputMaybe,
    InsertSongDocument,
    InsertSongMutation,
    InsertSongMutationVariables,
    People_Constraint,
    People_Update_Column,
    Song_Artists_Arr_Rel_Insert_Input,
    Songs_Insert_Input
} from '@/generated/graphql';
import { nhost } from '@/lib/nhost';
import { SingleTrackResponse } from '@/types/spotify.type';

import { FileService } from '../file.service';
import { SpotifyService } from './spotify.service';

export class SpotifySongImporterService extends SpotifyService {
    private buildSongArtists(track: SingleTrackResponse): InputMaybe<Song_Artists_Arr_Rel_Insert_Input> | undefined {
        return {
            data: track.artists.map((a, index) => {
                return {
                    role: 'Artist',
                    order: index + 1,
                    person: {
                        data: {
                            spotify_id: a.id.toString(),
                            name: a.name
                        },
                        on_conflict: {
                            constraint: People_Constraint.PeopleSpotifyIdKey,
                            // NOTE: Required to prevent affected zero rows error
                            update_columns: [People_Update_Column.Id]
                        }
                    }
                };
            })
        };
    }
    // Error: Foreign key violation. update or delete on table "people" violates foreign key
    //  constraint "album_artists_person_id_fkey" on table "album_artists"

    private buildAlbumArtists(track: SingleTrackResponse): InputMaybe<Album_Artists_Arr_Rel_Insert_Input> | undefined {
        return {
            data: track.album.artists.map((a, index) => {
                return {
                    role: 'Artist',
                    order: index + 1,
                    person: {
                        data: {
                            spotify_id: a.id.toString(),
                            name: a.name
                        },
                        on_conflict: {
                            constraint: People_Constraint.PeopleSpotifyIdKey,
                            // NOTE: Required to prevent affected zero rows error
                            update_columns: [People_Update_Column.Id]
                        }
                    }
                };
            })
        };
    }

    async isExisting(spotifySongId: SingleTrackResponse['id']): Promise<GetSongBySpotify_IdQuery['songs']> {
        const { data, error } = await nhost.graphql.request<
            GetSongBySpotify_IdQuery,
            GetSongBySpotify_IdQueryVariables
        >(GetSongBySpotify_IdDocument, { spotify_id: spotifySongId });
        if (error) throw new Error(Array.isArray(error) ? error.map((e) => e.message).join('; ') : error.message);
        return data.songs;
    }

    async save(input: Songs_Insert_Input): Promise<InsertSongMutation> {
        const { data, error } = await nhost.graphql.request<InsertSongMutation, InsertSongMutationVariables>(
            InsertSongDocument,
            { object: input }
        );
        if (error) throw new Error(Array.isArray(error) ? error.map((e) => e.message).join('; ') : error.message);
        return data;
    }

    async import(spotifySongId: SingleTrackResponse['id']): Promise<InsertSongMutation | boolean> {
        const existing = await this.isExisting(spotifySongId);
        if (existing.length) return true;

        const song = await this.getTrack(spotifySongId);
        if (!song) return false;

        const artworkFile = await FileService.uploadFile(song.album.images[0].url, BUCKET.ARTWORK);

        const payload = await this.save({
            name: song.name,
            spotify_id: song.id.toString(),
            // NOTE: The postgresql database uses an interval type to convert this automatically
            duration: `${song.duration_ms.toString()} milliseconds`,
            song_artists: this.buildSongArtists(song),
            spotify_uri: song.uri,
            track_number: song.track_number,
            disc_number: song.disc_number,
            explicit: song.explicit,
            type: song.type,
            album: {
                data: {
                    name: song.album.name,
                    release_date: song.album.release_date,
                    artwork: artworkFile?.url,
                    type: song.album.type,
                    spotify_id: song.album.id.toString(),
                    spotify_uri: song.album.uri,
                    album_artists: this.buildAlbumArtists(song),
                    album_media: {
                        data: [{ media_type: BUCKET.ARTWORK, media_url: artworkFile?.url, media_id: artworkFile?.id }],
                        on_conflict: { constraint: Album_Media_Constraint.AlbumMediaPkey }
                    }
                },
                on_conflict: {
                    constraint: Albums_Constraint.AlbumsSpotifyIdKey,
                    update_columns: [
                        Albums_Update_Column.Name,
                        Albums_Update_Column.ReleaseDate,
                        Albums_Update_Column.Artwork,
                        Albums_Update_Column.Type,
                        Albums_Update_Column.SpotifyUri
                    ]
                }
            }
        });

        return payload;
    }
}

export const spotifySongImporterService = new SpotifySongImporterService();
