import { nhost } from './nhost';
import { GraphQLClient } from 'graphql-request';

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

        headers['Authorization'] = `Bearer ${nhost.auth.getAccessToken()}`;

        const client = new GraphQLClient(nhost.graphql.httpUrl, {
            headers
        });

        try {
            const data = await client.request<TData>(query, variables || {});
            return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            throw new Error(error.response?.errors?.[0]?.message || 'GraphQL fetching error');
        }
    };
};
