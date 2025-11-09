import { z } from 'zod'

export const ratingSchema = z.object({
    rating: z.number().min(1, 'Minimum rating is 1').max(5, 'Maximum rating is 5'),
    comment: z
        .string()
        .min(1, 'Comment is required')
        .max(500, 'Maximum comment length is 500 characters'),
})

export type RatingValues = z.infer<typeof ratingSchema>
