import { MOVIE_CERTIFICATION_OPTIONS } from '@/constants/certifications.constant';
import { MOVIE_STATUS_OPTIONS } from '@/constants/status.constant';

import { z } from 'zod';

export const movieDetailsSchema = z.object({
    title: z.string().min(1, 'The title is required'),
    tagline: z.string().max(255, 'The tagline must be less than 255 characters'),
    overview: z.string().max(1000, 'The overview must be less than 1000 characters'),
    releaseDate: z.date().optional(),
    runtime: z.preprocess((val) => (typeof val === 'string' ? parseFloat(val) : val), z.number()).optional(),
    budget: z.string().optional(),
    revenue: z.string().optional(),
    // TODO : This needs to match the language code
    language: z.string().optional(),
    status: z.preprocess(
        (val) => (val === '' ? undefined : val),
        z
            .enum(MOVIE_STATUS_OPTIONS.map((option: { value: string }) => option.value) as [string, ...string[]])
            .nullable()
            .optional()
    ),
    ageCertification: z.preprocess(
        (val) => (val === '' ? undefined : val),
        z
            .enum(MOVIE_CERTIFICATION_OPTIONS.map((option: { value: string }) => option.value) as [string, ...string[]])
            .nullable()
            .optional()
    ),
    alternativeTitles: z
        .array(
            z.object({
                value: z.string(),
                label: z.string()
            })
        )
        .optional(),
    imdbId: z.string().optional(),
    tmdbId: z.string().optional(),
    homepage: z.string().url().optional().or(z.literal(''))
});

export type MovieDetails = z.infer<typeof movieDetailsSchema>;
