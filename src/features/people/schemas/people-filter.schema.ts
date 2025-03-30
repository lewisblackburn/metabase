import * as z from 'zod';

export const peopleFilterSchema = z.object({
    orderBy: z.object({
        orderBy: z.enum(['popularity', 'name', 'age']),
        order: z.enum(['asc', 'desc'])
    }),
    search: z.string().optional(),
    age: z.tuple([z.number(), z.number()]).optional()
});
