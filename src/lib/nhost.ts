import { NhostClient } from '@nhost/nextjs';

export const nhost = new NhostClient({
    subdomain: 'lwmecktyyhputyqkdigy',
    region: 'eu-west-2',
    adminSecret: process.env.NEXT_PUBLIC_NHOST_ADMIN_SECRET || ''
});
