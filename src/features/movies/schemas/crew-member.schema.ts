import { z } from 'zod';

export const addCrewMemberSchema = z.object({
    personId: z.string().uuid(),
    jobId: z.string().uuid(),
    roleId: z.string().uuid()
});

export type AddCrewMemberSchema = z.infer<typeof addCrewMemberSchema>;
