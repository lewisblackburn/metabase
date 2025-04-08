import { z } from 'zod';

export const addCrewMemberSchema = z.object({
    person: z.string().uuid(),
    job: z.string().uuid(),
    role: z.string().uuid()
});

export type AddCrewMemberSchema = z.infer<typeof addCrewMemberSchema>;
