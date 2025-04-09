import { selectSchema } from '@/schemas/select.schema';

import { z } from 'zod';

export const addCrewMemberSchema = z.object({
    person: selectSchema,
    job: z.string().uuid(),
    role: z.string().uuid()
});

export const editCrewMemberSchema = addCrewMemberSchema.omit({ person: true });

export type AddCrewMemberSchema = z.infer<typeof addCrewMemberSchema>;
export type EditCrewMemberSchema = z.infer<typeof editCrewMemberSchema>;
