import { z } from 'zod';

export const personDetailsSchema = z.object({
    name: z.string().min(1, 'The name is required')
});

export type PersonDetails = z.infer<typeof personDetailsSchema>;
