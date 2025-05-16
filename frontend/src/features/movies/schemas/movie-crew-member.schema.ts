import { Department_Types_Enum, Job_Types_Enum } from '@/generated/graphql';

import { z } from 'zod';

export const addCrewMemberSchema = z.object({
    person: z.string().uuid(),
    department: z.nativeEnum(Department_Types_Enum),
    job: z.nativeEnum(Job_Types_Enum)
});

export const editCrewMemberSchema = addCrewMemberSchema.omit({ person: true });

export type AddCrewMemberSchemaType = z.infer<typeof addCrewMemberSchema>;
export type EditCrewMemberSchemaType = z.infer<typeof editCrewMemberSchema>;
