import { Gender_Types_Enum } from '@/generated/graphql';

import { z } from 'zod';

export const newPersonSchema = z.object({
    name: z.string().min(1, 'The name is required'),
    gender: z.nativeEnum(Gender_Types_Enum).optional(),
    birth_date: z.date().optional(),
    death_date: z.date().optional(),
    bio: z.string().optional()
});

export type NewPersonSchemaType = z.infer<typeof newPersonSchema>;
