import { BUCKET } from '@/constants/media.constant';
import {
    Album_Media_Constraint,
    Album_Media_Update_Column,
    Albums_Constraint,
    Albums_Update_Column,
    Credit_Types_Enum,
    Credits_Constraint,
    Credits_Insert_Input,
    GetSongBySpotifyIdDocument,
    GetSongBySpotifyIdQuery,
    GetSongBySpotifyIdQueryVariables,
    InsertSongDocument,
    InsertSongMutation,
    InsertSongMutationVariables,
    Object_Types_Enum,
    People_Constraint,
    People_Update_Column,
    Person_Media_Constraint,
    Person_Media_Update_Column,
    Songs_Insert_Input
} from '@/generated/graphql';
import { fetcher } from '@/lib/graphql-client';
import { nhost } from '@/lib/nhost';
import { SpotifyTrack } from '@/types/spotify.types';

import { uploadFile } from '../file.service';
import { spotifyService } from './spotify.service';

export async function importSongFromSpotify(
    spotifyId: string
): Promise<InsertSongMutation['insert_songs_one'] | { message: string }> {
    try {
        const existingSong = await fetcher<GetSongBySpotifyIdQuery, GetSongBySpotifyIdQueryVariables>(
            GetSongBySpotifyIdDocument,
            { spotify_id: spotifyId }
        )();

        if (existingSong?.songs && existingSong.songs.length > 0) {
            console.log(`Song with Spotify ID ${spotifyId} already exists.`);
            return { message: `Song with Spotify ID ${spotifyId} already exists.` };
        }
    } catch (error) {
        console.error('Error checking for existing song:', error);
        return { message: 'Error checking for existing song.' };
    }

    let songData: SpotifyTrack;
    try {
        songData = await spotifyService.getTrack(spotifyId);
    } catch (error) {
        console.error('Error fetching song details from Spotify:', error);
        return { message: `Error fetching song details for Spotify ID ${spotifyId}.` };
    }

    let artworkFile;
    if (songData.album.images && songData.album.images.length > 0) {
        try {
            artworkFile = await uploadFile({
                url: songData.album.images[0].url,
                bucketId: BUCKET.ARTWORK
            });
        } catch (error) {
            console.error('Error uploading artwork:', error);
        }
    }

    const songCredits: Promise<Credits_Insert_Input[]> = Promise.all(
        songData.artists?.map(async (artist, index) => {
            const headshotFile = artist.images?.[0]?.url
                ? await uploadFile({ url: artist.images[0].url, bucketId: BUCKET.HEADSHOT })
                : undefined;

            return {
                object_type: Object_Types_Enum.Song,
                details: { department: 'Singing', job: 'Singer' },
                credit_type: Credit_Types_Enum.Artist,
                order: index + 1,
                person: {
                    data: {
                        spotify_id: artist.id,
                        name: artist.name,
                        headshot: headshotFile ? nhost.storage.getPublicUrl({ fileId: headshotFile.id }) : undefined,
                        person_media: headshotFile
                            ? {
                                  data: [
                                      {
                                          file_id: headshotFile?.id
                                      }
                                  ],
                                  on_conflict: {
                                      constraint: Person_Media_Constraint.PersonMediaPkey,
                                      update_columns: [Person_Media_Update_Column.FileId]
                                  }
                              }
                            : undefined
                    },
                    on_conflict: {
                        constraint: People_Constraint.PeopleSpotifyIdKey,
                        update_columns: [People_Update_Column.Name, People_Update_Column.Headshot]
                    }
                }
            } as Credits_Insert_Input;
        }) ?? []
    );

    const albumCredits: Promise<Credits_Insert_Input[]> = Promise.all(
        songData.album.artists?.map(async (artist, index) => {
            const headshotFile = artist.images?.[0]?.url
                ? await uploadFile({ url: artist.images[0].url, bucketId: BUCKET.HEADSHOT })
                : undefined;

            return {
                object_type: Object_Types_Enum.Album,
                details: { department: 'Singing', job: 'Singer' },
                credit_type: Credit_Types_Enum.Artist,
                order: index + 1,
                person: {
                    data: {
                        spotify_id: artist.id,
                        name: artist.name,
                        headshot: headshotFile ? nhost.storage.getPublicUrl({ fileId: headshotFile.id }) : undefined,
                        person_media: headshotFile
                            ? {
                                  data: [
                                      {
                                          file_id: headshotFile?.id
                                      }
                                  ],
                                  on_conflict: {
                                      constraint: Person_Media_Constraint.PersonMediaPkey,
                                      update_columns: [Person_Media_Update_Column.FileId]
                                  }
                              }
                            : undefined
                    },
                    on_conflict: {
                        constraint: People_Constraint.PeopleSpotifyIdKey,
                        update_columns: [People_Update_Column.Name, People_Update_Column.Headshot]
                    }
                }
            } as Credits_Insert_Input;
        }) ?? []
    );

    try {
        const songInsertInput: Songs_Insert_Input = {
            name: songData.name,
            spotify_id: songData.id.toString(),
            duration: `${songData.duration_ms.toString()} milliseconds`,
            credits: {
                data: await songCredits,
                on_conflict: {
                    constraint: Credits_Constraint.CreditsPkey,
                    update_columns: []
                }
            },
            spotify_uri: songData.external_urls.spotify,
            track_number: songData.album.total_tracks,
            disc_number: 1,
            explicit: songData.explicit,
            type: songData.album.album_type,
            album: {
                data: {
                    name: songData.album.name,
                    release_date: songData.album.release_date,
                    artwork: artworkFile ? nhost.storage.getPublicUrl({ fileId: artworkFile.id }) : undefined,
                    type: songData.album.album_type,
                    spotify_id: songData.album.id.toString(),
                    spotify_uri: songData.album.external_urls.spotify,
                    credits: {
                        data: await albumCredits,
                        on_conflict: {
                            constraint: Credits_Constraint.CreditsPkey,
                            update_columns: []
                        }
                    },
                    album_media: {
                        data: [
                            {
                                file_id: artworkFile.id
                            }
                        ],
                        on_conflict: {
                            constraint: Album_Media_Constraint.AlbumMediaPkey,
                            update_columns: [Album_Media_Update_Column.FileId]
                        }
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
        };

        const result = await fetcher<InsertSongMutation, InsertSongMutationVariables>(InsertSongDocument, {
            object: songInsertInput
        })();

        if (!result.insert_songs_one) {
            return { message: 'Failed to insert song into database.' };
        }

        return result.insert_songs_one;
    } catch (error) {}
}
