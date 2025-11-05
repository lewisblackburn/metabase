import { z } from 'zod'

import { envSchema } from '../validations/env.schema'

// Adjust path as necessary

declare global {
    namespace NodeJS {
        // eslint-disable-next-line @typescript-eslint/no-empty-object-type
        interface ProcessEnv extends z.infer<typeof envSchema> {}
    }
}
