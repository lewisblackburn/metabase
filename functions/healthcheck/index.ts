import { RootDocument } from '@/generated/graphql'
import { createNhostFunctionsClient } from '@/lib/nhost/functions'

export default async function handler(req: Request): Promise<Response> {
	const nhost = createNhostFunctionsClient()

	const status = {
		graphql: 'down',
		auth: 'down',
		storage: 'down',
		functions: 'down'
	}

	try {
		// GraphQL
		const gqlRes = await nhost.graphql.request(RootDocument)
		status.graphql = gqlRes.status !== 200 ? 'down' : 'up'

		// Auth
		const authVersion = await nhost.auth.getVersion()
		status.auth = authVersion ? 'up' : 'down'

		// Storage
		const storageVersion = await nhost.storage.getVersion()
		status.storage = storageVersion ? 'up' : 'down'

		// Functions
		status.functions = 'up'

		return new Response(JSON.stringify(status), {
			headers: { 'Content-Type': 'application/json' },
			status: 200
		})
	} catch (err) {
		return new Response(JSON.stringify(status), {
			headers: { 'Content-Type': 'application/json' },
			status: 500
		})
	}
}
