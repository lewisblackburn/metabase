'use client';

import BaseFormLayout from '@/components/form/base-form-layout';
import CheckboxField from '@/components/form/checkbox';
import InputField from '@/components/form/input';
import {
    Keywords_Constraint,
    Keywords_Update_Column,
    Song_Availabilities_Constraint,
    Song_Genres_Constraint,
    Song_Keywords_Constraint,
    Song_Keywords_Update_Column,
    Songs_Constraint,
    Songs_Update_Column,
    useDeleteSongAvailabilitiesMutation,
    useDeleteSongGenresMutation,
    useDeleteSongKeywordsMutation,
    useGetSongQuery,
    useInsertSongMutation
} from '@/generated/graphql';
import useHydratedForm from '@/hooks/use-hydrated-form';
import { queryClient } from '@/lib/query-client';
import { Button } from '@/registry/new-york-v4/ui/button';
import { FormField } from '@/registry/new-york-v4/ui/form';
import { Form } from '@/registry/new-york-v4/ui/form';
import { Label } from '@/registry/new-york-v4/ui/label';
import MultipleSelector from '@/registry/new-york-v4/ui/multiselect';

import { songAvailabilityOptions, songGenresOptions } from '../../constants/song-enums';
import { EditSongSchemaType, editSongSchema } from '../../schemas/edit-song.schema';
import { toast } from 'sonner';

interface EditSongDetailsProps {
    songId: string;
}

export default function EditSongDetails({ songId }: EditSongDetailsProps) {
    const { data, isLoading } = useGetSongQuery(
        { id: songId },
        {
            queryKey: ['song', songId]
        }
    );

    const form = useHydratedForm(editSongSchema, data, (d) => ({
        name: d.songs_by_pk?.name ?? '',
        track_number: d.songs_by_pk?.track_number ?? undefined,
        disc_number: d.songs_by_pk?.disc_number ?? undefined,
        explicit: d.songs_by_pk?.explicit ?? false,
        duration: d.songs_by_pk?.duration ?? '',
        genres:
            d.songs_by_pk?.song_genres.map((genre) => ({
                value: genre.genre,
                label: songGenresOptions.find((option) => option.value === genre.genre)?.label ?? ''
            })) ?? [],
        availabilities:
            d.songs_by_pk?.song_availabilities.map((availability) => ({
                value: availability.availability,
                label: songAvailabilityOptions.find((option) => option.value === availability.availability)?.label ?? ''
            })) ?? [],
        keywords:
            d.songs_by_pk?.song_keywords.map((keyword) => ({
                value: keyword.keyword.keyword,
                label: keyword.keyword.keyword
            })) ?? [],
        spotify_id: d.songs_by_pk?.spotify_id ?? '',
        apple_music_id: d.songs_by_pk?.apple_music_id ?? ''
    }));

    const { handleSubmit, control, reset } = form;

    const { mutateAsync: insertSong } = useInsertSongMutation({
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const { mutateAsync: deleteSongGenres } = useDeleteSongGenresMutation({
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const { mutateAsync: deleteSongAvailabilities } = useDeleteSongAvailabilitiesMutation({
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const { mutateAsync: deleteSongKeywords } = useDeleteSongKeywordsMutation({
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    const song = data?.songs_by_pk;

    if (isLoading || !song) return null;

    async function onSubmit(values: EditSongSchemaType) {
        const currentGenres = song?.song_genres.map((genre) => genre.genre);
        const newGenres = values.genres?.map((genre) => genre.value) ?? [];

        const currentAvailabilities = song?.song_availabilities.map((avail) => avail.availability);
        const newAvailabilities = values.availabilities?.map((avail) => avail.value) ?? [];

        const currentKeywords = song?.song_keywords.map((keyword) => keyword.keyword.keyword);
        const newKeywords = values.keywords?.map((keyword) => keyword.value) ?? [];

        if (JSON.stringify(currentGenres) !== JSON.stringify(newGenres)) {
            await deleteSongGenres({
                where: {
                    song_id: {
                        _eq: songId
                    }
                }
            });
        }

        if (JSON.stringify(currentAvailabilities) !== JSON.stringify(newAvailabilities)) {
            await deleteSongAvailabilities({
                where: {
                    song_id: {
                        _eq: songId
                    }
                }
            });
        }

        if (JSON.stringify(currentKeywords) !== JSON.stringify(newKeywords)) {
            await deleteSongKeywords({
                where: { song_id: { _eq: songId } }
            });
        }

        await insertSong(
            {
                object: {
                    id: songId,
                    name: values.name,
                    duration: values.duration,
                    track_number: values.track_number,
                    disc_number: values.disc_number,
                    explicit: values.explicit,
                    spotify_id: values.spotify_id,
                    apple_music_id: values.apple_music_id,
                    song_genres: {
                        data:
                            values.genres?.map((genre) => ({
                                genre: genre.value
                            })) ?? [],
                        on_conflict: {
                            constraint: Song_Genres_Constraint.SongGenresPkey
                        }
                    },
                    song_availabilities: {
                        data:
                            values.availabilities?.map((availability) => ({
                                availability: availability.value
                            })) ?? [],
                        on_conflict: {
                            constraint: Song_Availabilities_Constraint.SongAvailabilitiesPkey
                        }
                    },
                    song_keywords: {
                        data:
                            values.keywords?.map((keyword) => ({
                                keyword: {
                                    data: {
                                        keyword: keyword.value
                                    },
                                    on_conflict: {
                                        constraint: Keywords_Constraint.KeywordsKeywordKey,
                                        update_columns: [Keywords_Update_Column.Keyword]
                                    }
                                }
                            })) ?? [],
                        on_conflict: {
                            constraint: Song_Keywords_Constraint.SongKeywordsPkey,
                            update_columns: [Song_Keywords_Update_Column.KeywordId]
                        }
                    }
                },
                on_conflict: {
                    constraint: Songs_Constraint.SongsPkey,
                    update_columns: [
                        Songs_Update_Column.Name,
                        Songs_Update_Column.Duration,
                        Songs_Update_Column.TrackNumber,
                        Songs_Update_Column.DiscNumber,
                        Songs_Update_Column.Explicit,
                        Songs_Update_Column.SpotifyId,
                        Songs_Update_Column.AppleMusicId
                    ]
                }
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ['song', songId] });
                    toast.success('Song updated successfully');
                }
            }
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()} className='space-y-8'>
                <FormField
                    control={control}
                    name='name'
                    render={({ field }) => (
                        <BaseFormLayout label='Name'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={control}
                    name='duration'
                    render={({ field }) => (
                        <BaseFormLayout label='Duration'>
                            <InputField placeholder='e.g. 1m 30s' {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={control}
                    name='track_number'
                    render={({ field: { value, onChange, ...field } }) => (
                        <BaseFormLayout label='Track Number'>
                            <InputField
                                type='number'
                                value={value || ''}
                                onChange={(e) => onChange(e.target.value ? Number(e.target.value) : null)}
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={control}
                    name='disc_number'
                    render={({ field: { value, onChange, ...field } }) => (
                        <BaseFormLayout label='Disc Number'>
                            <InputField
                                type='number'
                                value={value || ''}
                                onChange={(e) => onChange(e.target.value ? Number(e.target.value) : null)}
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={control}
                    name='explicit'
                    render={({ field: { value, onChange, ...field } }) => (
                        <BaseFormLayout label='Explicit'>
                            <CheckboxField
                                label='The song contains explicit content'
                                checked={value}
                                onCheckedChange={onChange}
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={control}
                    name='genres'
                    render={({ field }) => (
                        <BaseFormLayout label='Genres'>
                            <MultipleSelector
                                commandProps={{
                                    label: 'Select Genres'
                                }}
                                defaultOptions={songGenresOptions.map((option) => ({
                                    label: option.label,
                                    value: option.value
                                }))}
                                placeholder='Select Genres'
                                emptyIndicator='No genres found'
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={control}
                    name='availabilities'
                    render={({ field }) => (
                        <BaseFormLayout label='Availabilities'>
                            <MultipleSelector
                                commandProps={{
                                    label: 'Select Availabilities'
                                }}
                                defaultOptions={songAvailabilityOptions.map((option) => ({
                                    label: option.label,
                                    value: option.value
                                }))}
                                placeholder='Select Availabilities'
                                emptyIndicator='No availabilities found'
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={control}
                    name='keywords'
                    render={({ field }) => (
                        <BaseFormLayout label='Keywords'>
                            <MultipleSelector
                                creatable
                                commandProps={{
                                    label: 'Select Keywords'
                                }}
                                placeholder='Select Keywords'
                                emptyIndicator='No keywords found'
                                {...field}
                            />
                        </BaseFormLayout>
                    )}
                />

                <FormField
                    control={control}
                    name='spotify_id'
                    render={({ field }) => (
                        <BaseFormLayout label='Spotify ID'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />
                <FormField
                    control={control}
                    name='apple_music_id'
                    render={({ field }) => (
                        <BaseFormLayout label='Apple Music ID'>
                            <InputField {...field} />
                        </BaseFormLayout>
                    )}
                />

                <div className='flex justify-end gap-2'>
                    <Button variant='outline' type='button' size='sm'>
                        Reset
                    </Button>
                    <Button type='submit' size='sm'>
                        Save Changes
                    </Button>
                </div>
            </form>
        </Form>
    );
}
