import z from 'zod'

import { Gender } from '@/lib/helpers/graphql-enums'

export const PersonSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    birthdate: z.iso.datetime(),
    gender: z.enum(Gender),
})

export type Person = z.infer<typeof PersonSchema>
