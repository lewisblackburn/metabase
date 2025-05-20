import { z } from 'zod';

export const addSongArtistSchema = z.object({
    person: z.string().uuid()
});

export const editSongArtistSchema = addSongArtistSchema.omit({ person: true });

export type AddSongArtistSchemaType = z.infer<typeof addSongArtistSchema>;
export type EditSongArtistSchemaType = z.infer<typeof editSongArtistSchema>;
