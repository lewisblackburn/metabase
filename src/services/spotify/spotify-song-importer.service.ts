import {
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

import { SpotifyService } from './spotify.service';

export class SpotifySongImporterService extends SpotifyService {
    private buildArtists(track: SingleTrackResponse): InputMaybe<Song_Artists_Arr_Rel_Insert_Input> | undefined {
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
                            update_columns: [People_Update_Column.Headshot]
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

        // TODO: Artwork, Album, Release Date are all tied to the album e.g. name

        const payload = await this.save({
            title: song.name,
            spotify_id: song.id.toString(),
            // NOTE: The postgresql database uses an interval type to convert this automatically
            duration: `${song.duration_ms.toString()} milliseconds`,
            song_artists: this.buildArtists(song)
        });

        return payload;
    }
}

export const spotifySongImporterService = new SpotifySongImporterService();
