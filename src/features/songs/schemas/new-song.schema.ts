import { z } from 'zod';

export const newSongSchema = z.object({
    title: z.string().min(1, 'The title is required'),
    overview: z.string().min(10, 'The overview must be at least 10 characters long')
    // publishedDate: z.date().optional(),
    // genres: z.array(songGenresOptionsSchema).optional()
});

export type NewSongSchema = z.infer<typeof newSongSchema>;
