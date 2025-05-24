'use client';

import { ReactNode } from 'react';

import { withAuth } from '@/hocs/withAuth';

function DashboardLayout({ children }: Readonly<{ children: ReactNode }>) {
    return <>{children}</>;
}

export default withAuth(DashboardLayout);
