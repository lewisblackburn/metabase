import { z } from 'zod';

export const editPersonSchema = z.object({
    name: z.string().min(1, 'The name is required'),
    bio: z.string().optional(),
    birth_date: z.date().nullable().optional(),
    death_date: z.date().nullable().optional(),
    gender: z.string().optional(),
    tmdb_id: z.string().optional(),
    spotify_id: z.string().optional()
});

export type EditPersonSchemaType = z.infer<typeof editPersonSchema>;
