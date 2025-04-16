import { NhostClient } from '@nhost/nextjs';

export const nhost = new NhostClient({
    subdomain: 'lwmecktyyhputyqkdigy',
    region: 'eu-west-2'
    // authUrl: 'https://auth.nhost.io',
    // storageUrl: 'https://storage.nhost.io',
    // functionsUrl: 'https://functions.nhost.io',
    // graphqlUrl: 'https://graphql.nhost.io',
    // adminSecret: process.env.NEXT_PUBLIC_NHOST_ADMIN_SECRET || ''
});
