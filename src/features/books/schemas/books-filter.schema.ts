import {
    Book_Availability_Types_Enum,
    Book_Genre_Types_Enum,
    Book_Release_Status_Types_Enum
} from '@/generated/graphql';

import * as z from 'zod';

export const booksFilterSchema = z.object({
    orderBy: z.object({
        orderBy: z.enum(['popularity', 'publish-date', 'rating']),
        order: z.enum(['asc', 'desc'])
    }),
    search: z.string().optional(),
    showMe: z.enum(['everything', 'not-read', 'read'], {
        required_error: 'Please select a view preference'
    }),
    publishDates: z
        .object({
            from: z.date().optional(),
            to: z.date().optional()
        })
        .optional(),
    genres: z.array(z.nativeEnum(Book_Genre_Types_Enum)).optional(),
    statuses: z.array(z.nativeEnum(Book_Release_Status_Types_Enum)).optional(),
    availabilities: z.array(z.nativeEnum(Book_Availability_Types_Enum)).optional(),
    // TODO : This needs to match the language code
    language: z.string().optional(),
    userScore: z.tuple([z.number(), z.number()]).optional(),
    minVotes: z.array(z.number()).optional(),
    readingTime: z.tuple([z.number(), z.number()]).optional(),
    keywords: z.array(z.object({ id: z.string(), text: z.string() })).optional()
});

export type BooksFilter = z.infer<typeof booksFilterSchema>;
