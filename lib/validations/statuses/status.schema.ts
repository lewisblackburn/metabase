import { z } from 'zod'

import { UserMovieStatus } from '@/lib/types/enums'

export const statusSchema = z.object({
    status: z.enum(UserMovieStatus),
})

export type StatusValues = z.infer<typeof statusSchema>
