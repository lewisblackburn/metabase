import { baseEmailSchema, basePasswordSchema } from './base.schema';
import { z } from 'zod';

export const loginSchema = z.object({
    email: baseEmailSchema,
    password: basePasswordSchema
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
