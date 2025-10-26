import { createClient, type NhostClient } from "@nhost/nhost-js";

let nhostClient: NhostClient | null = null;

/**
 * Creates an Nhost client for use in client components.
 * This is a singleton to ensure we only create one instance.
 */
export function createNhostClientSingleton(): NhostClient {
	if (!nhostClient) {
		nhostClient = createClient({
			region: process.env.NEXT_PUBLIC_NHOST_REGION,
			subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
			graphqlUrl: process.env.NEXT_PUBLIC_NHOST_GRAPHQL_URL,
			storageUrl: process.env.NEXT_PUBLIC_NHOST_STORAGE_URL,
		});
	}

	return nhostClient;
}

