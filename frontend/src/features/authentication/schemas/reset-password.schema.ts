import { basePasswordSchema } from './base.schema';
import { z } from 'zod';

export const resetPasswordSchema = z
    .object({
        currentPassword: z.string().min(1, 'Current password is required'),
        newPassword: basePasswordSchema,
        confirmPassword: z.string().min(1, 'Please confirm your password')
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword']
    });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
