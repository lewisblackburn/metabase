'use client';

import { useEffect, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import DefaultLoading from '@/components/shared/default-loading';
import { nhost } from '@/lib/nhost';

export const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
    return function WithAuth(props: P) {
        const router = useRouter();
        const pathname = usePathname();
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const unsubscribe = nhost.auth.onAuthStateChanged((event) => {
                if (event === 'SIGNED_IN') {
                    setIsLoading(false);
                } else if (event === 'SIGNED_OUT') {
                    router.push(`/authentication/login?redirect=${encodeURIComponent(pathname)}`);
                }
            });

            const isAuthenticated = nhost.auth.isAuthenticated();
            if (!isAuthenticated) {
                router.push(`/authentication/login?redirect=${encodeURIComponent(pathname)}`);
            } else {
                setIsLoading(false);
            }

            return () => {
                unsubscribe();
            };
        }, [router, pathname]);

        if (isLoading) return <DefaultLoading />;

        return <Component {...props} />;
    };
};
