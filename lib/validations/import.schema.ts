import { z } from 'zod'

import { Media_Types_Enum } from '@/generated/graphql'

export const importSchema = z.object({
    mediaType: z.nativeEnum(Media_Types_Enum),
    searchQuery: z.string().min(1, 'Search query is required'),
    externalId: z.string().min(1, 'Please select a media item from the search results'),
})

export type ImportValues = z.infer<typeof importSchema>
