import { z } from 'zod';

export const addCastMemberSchema = z.object({
    name: z.string().min(1),
    character: z.string().min(1)
});

export type AddCastMemberSchema = z.infer<typeof addCastMemberSchema>;
