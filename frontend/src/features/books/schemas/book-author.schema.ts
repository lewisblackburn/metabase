import { z } from 'zod';

export const addBookAuthorSchema = z.object({
    person: z.string().uuid()
});

export const editBookAuthorSchema = addBookAuthorSchema.omit({ person: true });

export type AddBookAuthorSchemaType = z.infer<typeof addBookAuthorSchema>;
export type EditBookAuthorSchemaType = z.infer<typeof editBookAuthorSchema>;
