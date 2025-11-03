import { z } from 'zod'

export const ratingSchema = z.object({
    rating: z.string().min(1, 'Select a rating'),
    comment: z.string().min(1, 'Please enter a comment').max(500, 'Maximum 500 characters'),
})

export type RatingValues = z.infer<typeof ratingSchema>
