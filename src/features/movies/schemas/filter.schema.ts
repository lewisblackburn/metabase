import { AVAILABILITIES } from '@/constants/availabilities.constant';
import { CERTIFICATIONS } from '@/constants/certifications.constant';
import { GENRES } from '@/constants/genres.constant';

import * as z from 'zod';

const availabilityArray = AVAILABILITIES.common.concat(AVAILABILITIES.films);
const genresArray = GENRES.common.concat(GENRES.films);
const certificationArray = CERTIFICATIONS.common.concat(CERTIFICATIONS.films);

export const movieFilterSchema = z.object({
    orderBy: z.object({
        orderBy: z.enum(['popularity', 'release-date', 'rating']),
        order: z.enum(['asc', 'desc'])
    }),
    search: z.string().optional(),
    showMe: z.enum(['everything', 'not-seen', 'seen'], {
        required_error: 'Please select a view preference'
    }),
    availabilities: z.array(z.enum(availabilityArray as [string, ...string[]])).optional(),
    releaseDates: z
        .object({
            from: z.date().optional(),
            to: z.date().optional()
        })
        .optional(),
    genres: z.array(z.enum(genresArray as [string, ...string[]])).optional(),
    certifications: z.array(z.enum(certificationArray as [string, ...string[]])).optional(),
    // TODO : This needs to match the language code
    language: z.string().optional(),
    userScore: z.tuple([z.number(), z.number()]).optional(),
    minVotes: z.array(z.number()).optional(),
    runtime: z.tuple([z.number(), z.number()]).optional(),
    keywords: z.string().optional()
});
