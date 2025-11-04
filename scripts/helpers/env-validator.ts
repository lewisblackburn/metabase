/**
 * Environment variable validation helper
 */

export interface ValidatedEnvVars {
    NHOST_ADMIN_SECRET: string
    NHOST_SUBDOMAIN: string
    NHOST_REGION: string
}

/**
 * Validates that all required environment variables are present
 * @throws {Error} Exits process if any required variable is missing
 * @returns {ValidatedEnvVars} Object containing validated environment variables
 */
export function validateEnvironment(): ValidatedEnvVars {
    const requiredEnvVars = {
        NHOST_ADMIN_SECRET: process.env.NHOST_ADMIN_SECRET,
        NHOST_SUBDOMAIN: process.env.NHOST_SUBDOMAIN || process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
        NHOST_REGION: process.env.NHOST_REGION || process.env.NEXT_PUBLIC_NHOST_REGION,
    }

    for (const [key, value] of Object.entries(requiredEnvVars)) {
        if (!value) {
            console.error(`❌ Missing required environment variable: ${key}`)
            process.exit(1)
        }
    }

    return requiredEnvVars as ValidatedEnvVars
}
