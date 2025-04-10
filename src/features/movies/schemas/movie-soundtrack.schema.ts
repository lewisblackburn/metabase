import { selectSchema } from '@/schemas/select.schema';

import { z } from 'zod';

export const movieSoundtrackSongSchema = z.object({
    song: selectSchema,
    timestamps: z.string().min(1).max(100)
});

export const addMovieSoundtrackSongSchema = movieSoundtrackSongSchema;

export const editMovieSoundtrackSongSchema = movieSoundtrackSongSchema.omit({
    song: true
});

export type MovieSoundtrackSong = z.infer<typeof movieSoundtrackSongSchema>;
export type AddMovieSoundtrackSong = z.infer<typeof addMovieSoundtrackSongSchema>;
export type EditMovieSoundtrackSong = z.infer<typeof editMovieSoundtrackSongSchema>;
