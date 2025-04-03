'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import { OBJECT_TYPE } from '@/constants/objects.constant';

import hotkeys from 'hotkeys-js';

export default function HotkeyScopeManager() {
    const pathname = usePathname();

    useEffect(() => {
        const objectPaths = Object.values(OBJECT_TYPE).map((obj) => obj.path);
        const segments = pathname.split('/').filter(Boolean);

        const isObjectPage = objectPaths.some((objectPath) => {
            const index = segments.indexOf(objectPath);

            return (
                // skip e.g., /movies/edit/[slug]
                (index !== -1 && segments.length > index + 1 && !segments[index + 1].startsWith('edit'))
            );
        });

        const newScope = isObjectPage ? 'object' : 'default';
        hotkeys.setScope(newScope);
    }, [pathname]);

    return null;
}
