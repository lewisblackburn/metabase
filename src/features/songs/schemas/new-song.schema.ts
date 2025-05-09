import { songGenresOptionsSchema } from '@/features/songs/constants/song-enums';

import { z } from 'zod';

export const newSongSchema = z.object({
    name: z.string().min(1, 'The title is required'),
    genres: z.array(songGenresOptionsSchema).optional(),
    duration: z.string().min(1, 'The duration is required')
});

export type NewSongSchemaType = z.infer<typeof newSongSchema>;
