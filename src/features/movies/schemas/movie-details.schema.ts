import { Movie_Certification_Types_Enum, Movie_Release_Status_Types_Enum } from '@/generated/graphql';

import { movieAvailabilityOptionsSchema } from '../constants/movie-enums';
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
    status: z.nativeEnum(Movie_Release_Status_Types_Enum).optional(),
    certification: z.nativeEnum(Movie_Certification_Types_Enum).optional(),
    availabilities: z.array(movieAvailabilityOptionsSchema).optional(),
    imdbId: z.string().optional(),
    tmdbId: z.string().optional(),
    homepage: z.string().url().optional().or(z.literal(''))
});

export type MovieDetails = z.infer<typeof movieDetailsSchema>;
