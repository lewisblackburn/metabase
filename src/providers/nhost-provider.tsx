'use client';

import { ReactNode } from 'react';

import { nhost } from '@/lib/nhost';
import { NhostProvider } from '@nhost/nextjs';

export default function CustomNhostProvider({ children }: { children: ReactNode }) {
    return <NhostProvider nhost={nhost}>{children}</NhostProvider>;
}
