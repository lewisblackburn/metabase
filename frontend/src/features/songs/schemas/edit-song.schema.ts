import { selectSchema } from '@/schemas/select.schema';

import { songAvailabilityOptionsSchema, songGenresOptionsSchema } from '../constants/song-enums';
import { z } from 'zod';

export const editSongSchema = z.object({
    name: z.string().min(1, 'The name is required'),
    duration: z.string().min(1, 'The duration is required'),
    track_number: z.number().optional(),
    disc_number: z.number().optional(),
    explicit: z.boolean().optional(),
    genres: z.array(songGenresOptionsSchema).optional(),
    availabilities: z.array(songAvailabilityOptionsSchema).optional(),
    keywords: z.array(selectSchema).optional(),
    spotify_id: z.string().optional(),
    apple_music_id: z.string().optional()
});

export type EditSongSchemaType = z.infer<typeof editSongSchema>;
