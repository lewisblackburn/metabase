'use client';

import { NhostClient } from '@nhost/nextjs';

export const nhost = new NhostClient({
    subdomain: process.env.NHOST_SUBDOMAIN || process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
    region: process.env.NHOST_REGION || process.env.NEXT_PUBLIC_NHOST_REGION
});
