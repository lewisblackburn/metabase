import { z } from 'zod';

export const addMovieSoundtrackSongSchema = z.object({
    song: z.string().uuid(),
    timestamps: z.string().min(1).max(100),
    description: z.string().optional()
});

export type AddMovieSoundtrackSongSchemaType = z.infer<typeof addMovieSoundtrackSongSchema>;
