import 'dotenv/config'

import graphql from '@/generated/graphql'
import { logger } from '@/lib/helpers/logger'

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

    // 1. Initialize arrays for results
    const generatedEnums: string[] = []
    const graphqlEnums: Record<string, string[]> = {}

    // 2. Fetch all enum values
    for (const config of enumConfigs) {
        try {
            logger.info(`Fetching ${config.typeName}...`)
            const values = await fetchEnumValues(config)
            graphqlEnums[config.typeName] = values
            logger.info(`Found ${values.length} value(s): ${values.join(', ')}`)
        } catch (error) {
            logger.error(`Failed to fetch ${config.typeName}: ${error}`)
            throw error
        }
    }

    // 3. Generate enum definitions
    for (const config of enumConfigs) {
        const values = graphqlEnums[config.typeName]
        const enumDef = generateEnumDefinition(config, values)
        generatedEnums.push(enumDef)
    }

    // 4. Combine all enum definitions with header
    const fileContent = generateFileHeader() + generatedEnums.join('\n')

    // 5. Write to the output file
    const outputPath = writeFile(fileContent, ['lib', 'enums.ts'])

    logger.info(`Successfully generated ${outputPath}`)
    logger.info(`Generated ${generatedEnums.length} enum(s)`)
}

main().catch(err => {
    logger.error('Error generating enums:', err)
    process.exit(1)
})
