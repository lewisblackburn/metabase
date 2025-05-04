'use server';

import { NhostClient } from '@nhost/nhost-js';

export const nhostAdmin = async () => {
    return new NhostClient({
        subdomain: process.env.NHOST_SUBDOMAIN || process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
        region: process.env.NHOST_REGION || process.env.NEXT_PUBLIC_NHOST_REGION || '',
        adminSecret: process.env.NHOST_ADMIN_SECRET || ''
    });
};
