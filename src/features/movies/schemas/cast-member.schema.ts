import { z } from 'zod';

export const addCastMemberSchema = z.object({
    personId: z.string().uuid(),
    character: z.string().min(1)
});

export type AddCastMemberSchema = z.infer<typeof addCastMemberSchema>;
