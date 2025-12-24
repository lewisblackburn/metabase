import z from 'zod'

import { EntityType, Source } from '../types/importer'

export const ExternalIdSchema = z.object({
    entity_id: z.string().uuid(),
    entity_type: z.nativeEnum(EntityType),
    source: z.nativeEnum(Source),
    external_id: z.string(),
    data: z.record(z.any(), z.any()).optional(),
})

export type ExternalId = z.infer<typeof ExternalIdSchema>
