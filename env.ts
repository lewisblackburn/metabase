import { z } from 'zod'

import { logger } from './lib/helpers/logger'
import { clientEnvSchema, envSchema, serverEnvSchema } from './lib/validations/env.schema'

const isServer = typeof window === 'undefined'
const clientEnv = clientEnvSchema.safeParse(process.env)
const serverEnv = isServer
    ? serverEnvSchema.safeParse(process.env)
    : { success: true as const, data: {} as z.infer<typeof serverEnvSchema> }

if (!clientEnv.success) {
    if (isServer) {
        logger.error('Invalid client env vars:', clientEnv.error)
        process.exit(1)
    }
    logger.warn('Missing client env vars')
}

if (!serverEnv.success) {
    logger.error('Invalid server env vars:', serverEnv.error)
    process.exit(1)
}

export const env = {
    ...(clientEnv.success
        ? clientEnv.data
        : {
              NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL ?? '',
              NEXT_PUBLIC_NHOST_GRAPHQL_URL: process.env.NEXT_PUBLIC_NHOST_GRAPHQL_URL ?? '',
              NEXT_PUBLIC_NHOST_AUTH_URL: process.env.NEXT_PUBLIC_NHOST_AUTH_URL ?? '',
              NEXT_PUBLIC_NHOST_STORAGE_URL: process.env.NEXT_PUBLIC_NHOST_STORAGE_URL ?? '',
          }),
    ...serverEnv.data,
} as z.infer<typeof envSchema>
