import { z } from 'zod'

import { User_Movie_Statuses_Enum } from '@/generated/graphql'

export const userMovieStatusSchema = z.object({
    status: z.custom<User_Movie_Statuses_Enum>(
        val => ['DROPPED', 'WATCHED', 'WATCHING', 'WATCHLIST'].includes(val as string),
        { message: 'Invalid status' },
    ),
})

export type UserMovieStatusValues = z.infer<typeof userMovieStatusSchema>
