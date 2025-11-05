import { z } from 'zod'

import { UserMovieStatus } from '@/lib/enums'

export const userMovieStatusSchema = z.object({
    status: z.enum(UserMovieStatus),
})

export type UserMovieStatusValues = z.infer<typeof userMovieStatusSchema>
