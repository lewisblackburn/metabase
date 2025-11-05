import { env } from '@/env'
import { createAdminNhostClient } from '@/lib/nhost/admin-server'

import type { EnumConfig } from '../enum-config'

/**
 * Fetches enum values from the database using the provided GraphQL document
 *
 * @param config - Enum configuration object
 * @returns Array of enum value strings
 * @throws {Error} If GraphQL query fails or no values are found
 */
export async function fetchEnumValues(config: EnumConfig): Promise<string[]> {
    const nhost = createAdminNhostClient()

    const {
        body: { data, errors },
    } = await nhost.graphql.request(
        config.document,
        {},
        {
            headers: {
                'x-hasura-admin-secret': env.NHOST_ADMIN_SECRET,
            },
        },
    )

    if (errors && errors.length > 0) {
        throw new Error(`GraphQL errors: ${JSON.stringify(errors)}`)
    }

    // Extract values from the nested data path
    const values = data?.[config.dataPath]

    if (!values || !Array.isArray(values) || values.length === 0) {
        throw new Error(`No values found at path: ${config.dataPath}`)
    }

    // Extract the value field and optionally transform
    return values.map((item: Record<string, string>) => {
        const value = item[config.valueField]
        return config.transform ? config.transform(value) : value
    })
}
