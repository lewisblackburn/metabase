import { NhostClient } from '@nhost/nhost-js';

export const nhostAdmin = new NhostClient({
    subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
    region: process.env.NEXT_PUBLIC_NHOST_REGION,
    adminSecret: process.env.NHOST_ADMIN_SECRET
});
