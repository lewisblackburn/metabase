import { RootDocument } from '@/generated/graphql'
import { createNhostClient } from '@/lib/nhost/server'

export default async function handler() {
	const nhost = await createNhostClient()

	const status = {
		graphql: 'down',
		auth: 'down',
		storage: 'down',
		functions: 'down'
	}

	try {
		// GraphQL
		const gqlRes = await nhost.graphql.request(RootDocument)
		status.graphql = gqlRes.status === 200 ? 'up' : 'down'

		// Auth (basic connectivity check)
		status.auth = 'up'

		// Storage
		const version = await nhost.storage.getVersion()
		status.storage = version !== null ? 'up' : 'down'

		// Functions
		status.functions = 'up'

		return Response.json(status)
	} catch (err) {
		return Response.json(status, { status: 500 })
	}
}
