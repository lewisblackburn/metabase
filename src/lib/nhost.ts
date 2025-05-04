import { NhostClient } from '@nhost/nextjs';

export const nhost = new NhostClient({
    subdomain: process.env.NHOST_SUBDOMAIN || '',
    region: process.env.NHOST_REGION || '',
    adminSecret: process.env.NHOST_ADMIN_SECRET || ''
});
