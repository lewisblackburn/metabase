'use client';

import { usePathname } from 'next/navigation';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/registry/new-york-v4/ui/breadcrumb';

export default function Breadcrumbs() {
    const pathname = usePathname();

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

    const breadcrumbs = generateBreadcrumbs();

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
                                    <BreadcrumbLink href={href} className='capitalize'>
                                        {title}
                                    </BreadcrumbLink>
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
