import { z } from 'zod';

export const addCrewMemberSchema = z.object({
    name: z.string().min(1),
    job: z.string().min(1),
    role: z.string().min(1)
});

export type AddCrewMemberSchema = z.infer<typeof addCrewMemberSchema>;
