import 'dotenv/config'

import { enumConfigs } from './enum-config'
import { generateEnumDefinition, generateFileHeader } from './helpers/enum-generator'
import { validateEnvironment } from './helpers/env-validator'
import { writeFile } from './helpers/file-writer'
import { fetchEnumValues } from './helpers/graphql-fetcher'
import { createScriptNhostClient } from './helpers/nhost-client'

/**
 * Script to generate TypeScript enum types from database values
 *
 * This script is configuration-driven - add new enum types in enum-config.ts
 * to automatically generate them alongside existing ones.
 *
 * Environment variables are loaded from .env file automatically.
 */

/**
 * Main execution function
 */
async function main() {
    console.log('🔍 Starting enum generation...\n')

    // Validate environment and create client
    const envVars = validateEnvironment()
    const nhost = createScriptNhostClient(envVars.NHOST_SUBDOMAIN, envVars.NHOST_REGION)

    const generatedTypes: string[] = []
    const results: Array<{ config: (typeof enumConfigs)[0]; values: string[] }> = []

    // Fetch all enum values
    for (const config of enumConfigs) {
        try {
            console.log(`📥 Fetching ${config.typeName}...`)
            const values = await fetchEnumValues(nhost, config, envVars.NHOST_ADMIN_SECRET)
            results.push({ config, values })
            console.log(`   ✓ Found ${values.length} value(s): ${values.join(', ')}`)
        } catch (error) {
            console.error(`   ✗ Failed to fetch ${config.typeName}:`, error)
            throw error
        }
    }

    console.log('')

    // Generate type definitions
    for (const { config, values } of results) {
        const typeDef = generateEnumDefinition(config, values)
        generatedTypes.push(typeDef)
    }

    // Combine all type definitions with a header
    const fileContent = generateFileHeader() + generatedTypes.join('\n')

    // Write to the output file
    const outputPath = writeFile(fileContent, ['lib', 'types', 'enums.ts'])

    console.log(`✅ Successfully generated ${outputPath}`)
    console.log(`📝 Generated ${results.length} enum type(s)\n`)
}

main().catch(err => {
    console.error('\n❌ Error generating enums:', err)
    process.exit(1)
})
