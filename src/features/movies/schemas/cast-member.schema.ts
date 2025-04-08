import { z } from 'zod';

const baseCastMember = z.object({
    character: z.string().min(1)
});

const newCastMember = baseCastMember.extend({
    __isNew__: z.literal(true),
    personId: z.string()
});

const existingCastMember = baseCastMember.extend({
    __isNew__: z.literal(false).optional(),
    personId: z.string().uuid()
});

// NOTE: If __isNew__ is present, new cast member schema is used.
// Otherwise, existing cast member schema is used.
export const addCastMemberSchema = z.discriminatedUnion('__isNew__', [newCastMember, existingCastMember]);

export type AddCastMemberSchema = z.infer<typeof addCastMemberSchema>;
