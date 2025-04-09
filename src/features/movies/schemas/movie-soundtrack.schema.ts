import { selectSchema } from '@/schemas/select.schema';

import { z } from 'zod';

export const addSongToMovieSoundtrackSchema = z.object({
    song: selectSchema
});

export type AddSongToMovieSoundtrackSchema = z.infer<typeof addSongToMovieSoundtrackSchema>;
