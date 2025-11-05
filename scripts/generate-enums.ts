import 'dotenv/config'

import { env } from '@/env'
import { logger } from '@/lib/helpers/logger'
import { createAdminNhostClient } from '@/lib/nhost/admin-server'

import { enumConfigs } from './enum-config'
import { generateEnumDefinition, generateFileHeader } from './helpers/enum-generator'
import { writeFile } from './helpers/file-writer'
import { fetchEnumValues } from './helpers/graphql-fetcher'

/**
 * Script to generate TypeScript enums from database GraphQL enum tables
 *
 * This script is configuration-driven - add new enum in enum-config.ts
 * to automatically generate it alongside existing ones.
 */

async function main() {
    logger.info('Starting enum generation...')

    // 1. Create Nhost client with admin secret
    const nhost = createAdminNhostClient()

    // 2. Initialize arrays for results
    const generatedEnums: string[] = []
    const enumResults: Array<{ config: (typeof enumConfigs)[0]; values: string[] }> = []

    // 3. Fetch all enum values
    for (const config of enumConfigs) {
        try {
            logger.info(`Fetching ${config.typeName}...`)
            const values = await fetchEnumValues(nhost, config, env.NHOST_ADMIN_SECRET)
            enumResults.push({ config, values })
            logger.info(`Found ${values.length} value(s): ${values.join(', ')}`)
        } catch (error) {
            logger.error(`Failed to fetch ${config.typeName}: ${error}`)
            throw error
        }
    }

    // 4. Generate enum definitions
    for (const { config, values } of enumResults) {
        const enumDef = generateEnumDefinition(config, values)
        generatedEnums.push(enumDef)
    }

    // 5. Combine all enum definitions with header
    const fileContent = generateFileHeader() + generatedEnums.join('\n')

    // 6. Write to the output file
    const outputPath = writeFile(fileContent, ['lib', 'enums.ts'])

    logger.info(`Successfully generated ${outputPath}`)
    logger.info(`Generated ${enumResults.length} enum(s)`)
}

main().catch(err => {
    logger.error('Error generating enums:', err)
    process.exit(1)
})
