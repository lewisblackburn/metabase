import { z } from 'zod';

export const selectSchema = z
    .object({
        label: z.string().nonempty({ message: 'Label is required' }),
        value: z.string().nonempty({ message: 'Value is required' }),
        __isNew__: z.boolean().optional()
    })
    .refine(
        ({ value, __isNew__ }) =>
            __isNew__
                ? !/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(value)
                : /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(value),
        { message: 'Invalid UUID format for value', path: ['value'] }
    );
