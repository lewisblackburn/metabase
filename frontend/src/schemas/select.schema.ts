import { z } from 'zod';

export const selectSchema = z.object({
    label: z.string().nonempty({ message: 'Label is required' }),
    value: z.string().nonempty({ message: 'Value is required' })
});
