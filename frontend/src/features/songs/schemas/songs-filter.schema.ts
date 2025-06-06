import { Song_Availability_Types_Enum, Song_Genre_Types_Enum } from '@/generated/graphql';

import * as z from 'zod';

export const songsFilterSchema = z.object({
    orderBy: z.object({
        orderBy: z.enum(['popularity', 'duration', 'rating']),
        order: z.enum(['asc', 'desc'])
    }),
    search: z.string().optional(),
    genres: z.array(z.nativeEnum(Song_Genre_Types_Enum)).optional(),
    availabilities: z.array(z.nativeEnum(Song_Availability_Types_Enum)).optional(),
    duration: z.tuple([z.number(), z.number()]).optional(),
    userScore: z.tuple([z.number(), z.number()]).optional(),
    minVotes: z.array(z.number()).optional(),
    keywords: z.array(z.object({ id: z.string(), text: z.string() })).optional()
});

export type SongsFilterType = z.infer<typeof songsFilterSchema>;
