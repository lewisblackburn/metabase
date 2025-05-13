import { z } from 'zod';

export const addCastMemberSchema = z.object({
    person: z.string().uuid(),
    character: z.string().min(1)
});

export const editCastMemberSchema = addCastMemberSchema.omit({ person: true });

export type AddCastMemberSchemaType = z.infer<typeof addCastMemberSchema>;
export type EditCastMemberSchemaType = z.infer<typeof editCastMemberSchema>;
