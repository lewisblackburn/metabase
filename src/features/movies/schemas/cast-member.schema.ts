import { z } from 'zod';

export const addCastMemberSchema = z.object({
    person: z.object({
        value: z.string(),
        label: z.string(),
        __isNew__: z.boolean().optional()
    }),
    character: z.string().min(1)
});

export type AddCastMemberSchema = z.infer<typeof addCastMemberSchema>;
