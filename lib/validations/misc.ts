import z from 'zod'

import { Media_Types_Enum, Sources_Enum } from '@/generated/graphql'

export const ExternalIdSchema = z.object({
    entity_id: z.string().uuid(),
    mediia_type: z.nativeEnum(Media_Types_Enum),
    source: z.nativeEnum(Sources_Enum),
    external_id: z.string(),
    data: z.record(z.any(), z.any()).optional(),
})

export type ExternalId = z.infer<typeof ExternalIdSchema>
