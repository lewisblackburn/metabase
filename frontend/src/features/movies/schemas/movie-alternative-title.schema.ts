import { z } from 'zod';

export const movieAlternativeTitleSchema = z.object({
    alternative_title: z.string().min(1, 'The alternative title is required'),
    country: z.string().optional(),
    type: z.string().optional()
});

export type MovieAlternativeTitleType = z.infer<typeof movieAlternativeTitleSchema>;
