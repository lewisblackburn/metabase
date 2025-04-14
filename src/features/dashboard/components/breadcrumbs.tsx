'use client';

import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/registry/new-york-v4/ui/breadcrumb';

type BreadCrumbsContextType = {
    trailingPath: string;
    setTrailingPath: (path: string) => void;
};

const BreadCrumbsContext = createContext<BreadCrumbsContextType>({
    trailingPath: '',
    setTrailingPath: () => {}
});

export const useBreadCrumbs = (trailingPath?: string) => {
    const context = useContext(BreadCrumbsContext);
    if (!context) {
        throw new Error('useBreadCrumbs must be used within a BreadCrumbsProvider');
    }
    useEffect(() => {
        if (trailingPath) {
            context.setTrailingPath(trailingPath);
        }
        return () => {
            if (trailingPath) {
                context.setTrailingPath('');
            }
        };
    }, [trailingPath, context]);
    return context;
};

export const BreadCrumbsProvider = ({ children }: { children: ReactNode }) => {
    const [trailingPath, setTrailingPath] = useState('');
    const value = useMemo(() => ({ trailingPath, setTrailingPath }), [trailingPath]);
    return <BreadCrumbsContext.Provider value={value}>{children}</BreadCrumbsContext.Provider>;
};

function BreadcrumbsContent() {
    const pathname = usePathname();
    const { trailingPath } = useContext(BreadCrumbsContext);

    function generateBreadcrumbs() {
        const pathWithoutQuery = pathname.split('?')[0];
        const pathSegments = pathWithoutQuery.split('/').filter(Boolean);
        const breadcrumbs = pathSegments.map((segment, index) => {
            const href = '/' + pathSegments.slice(0, index + 1).join('/');
            const title = decodeURIComponent(segment);
            return { href, title };
        });
        return breadcrumbs;
    }

    const breadcrumbs = useMemo(() => {
        const generatedBreadcrumbs = generateBreadcrumbs();
        if (
            trailingPath &&
            generatedBreadcrumbs.length > 0 &&
            trailingPath !== generatedBreadcrumbs[generatedBreadcrumbs.length - 1].title
        ) {
            const updatedBreadcrumbs = [...generatedBreadcrumbs];
            updatedBreadcrumbs[updatedBreadcrumbs.length - 1] = {
                ...updatedBreadcrumbs[updatedBreadcrumbs.length - 1],
                title: trailingPath
            };
            return updatedBreadcrumbs;
        }
        return generatedBreadcrumbs;
    }, [pathname, trailingPath]);

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs.map(({ href, title }, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                        <BreadcrumbItem key={href}>
                            {isLast ? (
                                <BreadcrumbPage className='capitalize'>{title}</BreadcrumbPage>
                            ) : (
                                <>
                                    {/* NOTE: This is a workaround to avoid the breadcrumb link resetting the cache */}
                                    <Link href={href} className='capitalize'>
                                        {title}
                                    </Link>
                                    <BreadcrumbSeparator />
                                </>
                            )}
                        </BreadcrumbItem>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

export default function Breadcrumbs() {
    return <BreadcrumbsContent />;
}
