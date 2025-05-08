import { movieGenresOptionsSchema } from '../constants/movie-enums';
import { z } from 'zod';

export const newMovieSchema = z.object({
    title: z.string().min(1, 'The title is required'),
    overview: z.string().min(10, 'The overview must be at least 10 characters long'),
    releaseDate: z.date().optional(),
    genres: z.array(movieGenresOptionsSchema).optional()
});

export type NewMovieSchema = z.infer<typeof newMovieSchema>;
