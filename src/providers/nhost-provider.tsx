'use client';

import { ReactNode } from 'react';

import { nhostPublic } from '@/lib/nhost-public';
import { NhostProvider } from '@nhost/nextjs';

export default function CustomNhostProvider({ children }: { children: ReactNode }) {
    return <NhostProvider nhost={nhostPublic}>{children}</NhostProvider>;
}
