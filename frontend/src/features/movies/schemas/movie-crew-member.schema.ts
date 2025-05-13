import { z } from 'zod';

export const addCrewMemberSchema = z.object({
    person: z.string().uuid(),
    department: z.string(),
    job: z.string()
});

export const editCrewMemberSchema = addCrewMemberSchema.omit({ person: true });

export type AddCrewMemberSchemaType = z.infer<typeof addCrewMemberSchema>;
export type EditCrewMemberSchemaType = z.infer<typeof editCrewMemberSchema>;
