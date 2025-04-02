'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import { OBJECT_TYPE } from '@/constants/objects.constant';

import hotkeys from 'hotkeys-js';

export default function HotkeyScopeManager() {
    const pathname = usePathname();

    useEffect(() => {
        const objectPaths = Object.values(OBJECT_TYPE).map((obj) => obj.path);

        const segments = pathname.split('/').filter(Boolean); // Remove empty segments

        const isObjectPage = objectPaths.some((objectPath) => {
            const index = segments.indexOf(objectPath);

            // NOTE: Match only if it's like /.../movies/[slug] — i.e., object path followed by one slug
            return index !== -1 && segments.length > index + 1 && !segments[index + 1].startsWith('edit'); // Optionally skip edit pages
        });

        hotkeys.setScope(isObjectPage ? 'object' : 'default');
    }, [pathname]);

    return null;
}
