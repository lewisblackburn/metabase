'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import DefaultLoading from '@/components/shared/default-loading';
import { nhost } from '@/lib/nhost';

export const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
    return function WithAuth(props: P) {
        const router = useRouter();
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const checkAuth = async () => {
                const isAuthenticated = nhost.auth.isAuthenticated();

                if (!isAuthenticated) {
                    router.push('/authentication/login');
                } else {
                    setIsLoading(false);
                }
            };

            checkAuth();
        }, [router]);

        if (isLoading) return <DefaultLoading />;

        return <Component {...props} />;
    };
};
