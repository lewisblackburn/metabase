import * as z from 'zod';

export const moviesFilterSchema = z.object({
    orderBy: z.object({
        orderBy: z.enum(['popularity', 'release-date', 'rating']),
        order: z.enum(['asc', 'desc'])
    }),
    search: z.string().optional(),
    showMe: z.enum(['everything', 'not-seen', 'seen'], {
        required_error: 'Please select a view preference'
    }),
    releaseDates: z
        .object({
            from: z.date().optional(),
            to: z.date().optional()
        })
        .optional(),
    genres: z.array(z.string().uuid()).optional(),
    certifications: z.array(z.string().uuid()).optional(),
    availabilities: z.array(z.string().uuid()).optional(),
    statuses: z.array(z.string().uuid()).optional(),
    // TODO : This needs to match the language code
    language: z.string().optional(),
    userScore: z.tuple([z.number(), z.number()]).optional(),
    minVotes: z.array(z.number()).optional(),
    runtime: z.tuple([z.number(), z.number()]).optional(),
    keywords: z
        .array(
            z.object({
                value: z.string(),
                label: z.string()
            })
        )
        .optional()
});

export type MoviesFilter = z.infer<typeof moviesFilterSchema>;
