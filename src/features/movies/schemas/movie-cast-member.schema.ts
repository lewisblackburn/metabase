import { selectSchema } from '@/schemas/select.schema';

import { z } from 'zod';

export const addCastMemberSchema = z.object({
    person: selectSchema,
    character: z.string().min(1)
});

export const editCastMemberSchema = addCastMemberSchema.omit({ person: true });

export type AddCastMemberSchema = z.infer<typeof addCastMemberSchema>;
export type EditCastMemberSchema = z.infer<typeof editCastMemberSchema>;
