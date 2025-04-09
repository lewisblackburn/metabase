import { z } from 'zod';

export const personSchema = z.object({
    id: z.string(),
    name: z.string(),
    gender: z.string(),
    birthday: z.string()
});

export const createPersonSchema = personSchema.omit({ id: true });
export const editPersonSchema = personSchema.omit({ id: true });

export type PersonSchema = z.infer<typeof personSchema>;
export type CreatePersonSchema = z.infer<typeof createPersonSchema>;
export type EditPersonSchema = z.infer<typeof editPersonSchema>;
