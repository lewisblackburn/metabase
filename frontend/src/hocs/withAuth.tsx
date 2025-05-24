'use client';

import { ComponentType, useEffect } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import DefaultLoading from '@/components/shared/default-loading';
import { useAuthenticationStatus } from '@nhost/nextjs';

export function withAuth<P extends object>(Wrapped: ComponentType<P>) {
    return function WithAuth(props: P) {
        const router = useRouter();
        const pathname = usePathname();

        const { isAuthenticated, isLoading } = useAuthenticationStatus();

        useEffect(() => {
            if (!isLoading && !isAuthenticated) {
                router.replace(`/authentication/login?redirect=${encodeURIComponent(pathname)}`);
            }
        }, [isLoading, isAuthenticated, pathname, router]);

        if (isLoading) return <DefaultLoading />;

        return <Wrapped {...props} />;
    };
}
