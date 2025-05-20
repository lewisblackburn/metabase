import { Book_Release_Status_Types_Enum } from '@/generated/graphql';
import { selectSchema } from '@/schemas/select.schema';

import { bookAvailabilityOptionsSchema, bookGenresOptionsSchema } from '../constants/book-enums';
import { z } from 'zod';

export const editBookSchema = z.object({
    title: z.string().min(1, 'The title is required'),
    overview: z.string().max(1000, 'The overview must be less than 1000 characters'),
    published_date: z.date().optional(),
    reading_time: z.number().optional(),
    language: z.string().optional(),
    status: z.nativeEnum(Book_Release_Status_Types_Enum).optional(),
    genres: z.array(bookGenresOptionsSchema).optional(),
    availabilities: z.array(bookAvailabilityOptionsSchema).optional(),
    keywords: z.array(selectSchema).optional(),
    googlebooks_id: z.string().optional()
});

export type EditBookSchemaType = z.infer<typeof editBookSchema>;
