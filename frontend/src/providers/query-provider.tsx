'use client';

import React from 'react';

import { queryClient } from '@/lib/query-client';
import { QueryClientProvider } from '@tanstack/react-query';

export default function QueryProvider({ children }: { children: React.ReactNode }) {
    // NOTE: This is so the query client is not recreated on every render
    const [queryClientInstance] = React.useState(() => queryClient);

    return <QueryClientProvider client={queryClientInstance}>{children}</QueryClientProvider>;
}
