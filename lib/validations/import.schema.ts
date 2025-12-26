import { z } from 'zod'

import { MediaType, Source } from '../helpers/graphql-enums'

export const importSchema = z.object({
    source: z.nativeEnum(Source),
    mediaType: z.nativeEnum(MediaType),
    searchQuery: z.string().min(1, 'Search query is required'),
    externalId: z.string().min(1, 'Please select a media item from the search results'),
})

export type ImportValues = z.infer<typeof importSchema>
