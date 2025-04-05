import { CERTIFICATIONS } from '@/constants/certifications.constant';
import { STATUS } from '@/constants/status.constant';

import { z } from 'zod';

const statusArray = STATUS.common.concat(STATUS.movies);
const certificationArray = CERTIFICATIONS.common.concat(CERTIFICATIONS.movies);

export const movieDetailsSchema = z.object({
    title: z.string().min(1, 'The title is required'),
    tagline: z.string().max(255, 'The tagline must be less than 255 characters'),
    overview: z.string().max(1000, 'The overview must be less than 1000 characters'),
    releaseDate: z.date().optional(),
    runtime: z.preprocess((val) => (typeof val === 'string' ? parseFloat(val) : val), z.number()).optional(),
    budget: z.preprocess((val) => (typeof val === 'string' ? parseFloat(val) : val), z.number()).optional(),
    revenue: z.preprocess((val) => (typeof val === 'string' ? parseFloat(val) : val), z.number()).optional(),
    // TODO : This needs to match the language code
    language: z.string().optional(),
    status: z.preprocess(
        (val) => (val === '' ? undefined : val),
        z
            .enum(statusArray as [string, ...string[]])
            .nullable()
            .optional()
    ),
    ageCertification: z.preprocess(
        (val) => (val === '' ? undefined : val),
        z
            .enum(certificationArray as [string, ...string[]])
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
    tmdbId: z.number().optional(),
    homepage: z.string().url().optional().or(z.literal(''))
});

export type MovieDetails = z.infer<typeof movieDetailsSchema>;
