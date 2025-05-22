import { baseEmailSchema, basePasswordSchema } from './base.schema';
import { z } from 'zod';

export const registerSchema = z
    .object({
        email: baseEmailSchema,
        password: basePasswordSchema,
        confirmPassword: z.string().min(1, 'Please confirm your password')
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword']
    });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
