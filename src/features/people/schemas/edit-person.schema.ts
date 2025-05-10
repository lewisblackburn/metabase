import { z } from 'zod';

export const editPersonSchema = z.object({
    name: z.string().min(1, 'The name is required')
});

export type EditPersonSchemaType = z.infer<typeof editPersonSchema>;
