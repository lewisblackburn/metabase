import { logger } from './lib/helpers/logger'
import { envSchema } from './lib/validations/env.schema'

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
    logger.error('Invalid environment variables:', parsedEnv.error.format())
    process.exit(1)
}

export const env = parsedEnv.data
