import z from 'zod'

import { MediaType, Source } from '../helpers/graphql-enums'

export const ExternalIdSchema = z.object({
    entity_id: z.string().uuid(),
    mediia_type: z.nativeEnum(MediaType),
    source: z.nativeEnum(Source),
    external_id: z.string(),
    data: z.record(z.any(), z.any()).optional(),
})

export type ExternalId = z.infer<typeof ExternalIdSchema>
