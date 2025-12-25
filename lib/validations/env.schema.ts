import 'dotenv/config'

import { z } from 'zod'

export const clientEnvSchema = z.object({
    NEXT_PUBLIC_BASE_URL: z.string(),
    NEXT_PUBLIC_NHOST_GRAPHQL_URL: z.string(),
    NEXT_PUBLIC_NHOST_AUTH_URL: z.string(),
    NEXT_PUBLIC_NHOST_STORAGE_URL: z.string(),
})

export const serverEnvSchema = z.object({
    NHOST_ADMIN_SECRET: z.string(),
    NHOST_SUBDOMAIN: z.string(),
    NHOST_REGION: z.string(),
    TMDB_API_KEY: z.string(),
})

export const envSchema = clientEnvSchema.merge(serverEnvSchema)
