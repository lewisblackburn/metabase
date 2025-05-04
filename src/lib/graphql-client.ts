import { useNhostClient } from '@nhost/nextjs';

import { nhostPublic } from './nhost-public';
import { ClientError, GraphQLClient } from 'graphql-request';

export const fetcher = <TData, TVariables>(
    query: string,
    variables?: TVariables,
    customHeaders?: Record<string, string>
): (() => Promise<TData>) => {
    return async () => {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...customHeaders
        };

        if (nhostPublic.auth.isAuthenticated()) {
            headers['Authorization'] = `Bearer ${nhostPublic.auth.getAccessToken()}`;
        }

        const client = new GraphQLClient(nhostPublic.graphql.httpUrl, { headers });
        try {
            const data = await client.request<TData>(query, variables || {});
            return data;
        } catch (error: unknown) {
            if (error instanceof ClientError) {
                throw new Error(error.response?.errors?.[0]?.message || 'GraphQL fetching error');
            }
            throw error;
        }
    };
};
