import { nhost } from './nhost';
import { GraphQLClient } from 'graphql-request';

export const fetcher = <TData, TVariables = Record<string, any>>(
    query: string,
    variables?: TVariables,
    customHeaders?: Record<string, string>
): (() => Promise<TData>) => {
    return async () => {
        const nhostHeaders = nhost.graphql.getHeaders();
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...nhostHeaders,
            ...(customHeaders || {})
        };

        if (nhost.auth.isAuthenticated()) {
            headers['Authorization'] = `Bearer ${nhost.auth.getAccessToken()}`;
        }

        const client = new GraphQLClient(nhost.graphql.httpUrl, { headers });

        return client.request<TData>(query, variables || {});
    };
};
