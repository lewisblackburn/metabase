// import { GENRES } from '@/constants/genres.constant';
import * as z from 'zod';

// const genresArray = GENRES.common.concat(GENRES.songs);

export const songsFilterSchema = z.object({
    orderBy: z.object({
        orderBy: z.enum(['popularity', 'release-date', 'duration']),
        order: z.enum(['asc', 'desc'])
    }),
    search: z.string().optional(),
    duration: z.tuple([z.number(), z.number()]).optional(),
    // genres: z.array(z.enum(genresArray as [string, ...string[]])).optional(),
    releaseDates: z
        .object({
            from: z.date().optional(),
            to: z.date().optional()
        })
        .optional()
});

export type SongsFilter = z.infer<typeof songsFilterSchema>;
