import { z } from 'zod';

export const songSchema = z.object({
    id: z.string(),
    name: z.string(),
    artist: z.string()
});

export const createSongSchema = songSchema.omit({ id: true });
export const editSongSchema = songSchema.omit({ id: true });

export type SongSchema = z.infer<typeof songSchema>;
export type CreateSongSchema = z.infer<typeof createSongSchema>;
export type EditSongSchema = z.infer<typeof editSongSchema>;
