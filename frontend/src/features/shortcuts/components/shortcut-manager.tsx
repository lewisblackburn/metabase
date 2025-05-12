'use client';

import { useEffect, useRef } from 'react';

import { usePathname } from 'next/navigation';

import { OBJECT_TYPE, ObjectTypeKey } from '@/constants/objects.constant';
import { toggleCommandPanelOpenState } from '@/features/command-panel/store/command-panel.slice';
import { toggleEditDialogOpenState } from '@/features/edit-dailog/store/edit-dialog.slice';
import { toggleSettingsDialogOpenState } from '@/features/settings/store/settings.slice';
import { RootState } from '@/store/store';

import hotkeys from 'hotkeys-js';
import { useDispatch, useSelector } from 'react-redux';

export default function ShortcutManager() {
    const dispatch = useDispatch();
    const shortcuts = useSelector((state: RootState) => state.shortcuts.shortcuts);
    const pathname = usePathname();
    const pathnameRef = useRef(pathname);

    useEffect(() => {
        pathnameRef.current = pathname;
        // NOTE: Update hotkeys scope based on current path
        const segments = pathnameRef.current ? pathnameRef.current.split('/').filter(Boolean) : [];

        const registeredKeys: string[] = [];

        Object.values(shortcuts).forEach((shortcut) => {
            if (!shortcut.enabled || !shortcut.key) return;

            const handler = (e: KeyboardEvent) => {
                e.preventDefault();

                switch (shortcut.id) {
                    case 'openCommandPanel':
                        dispatch(toggleCommandPanelOpenState());
                        break;

                    case 'toggleSettings':
                        dispatch(toggleSettingsDialogOpenState());
                        break;

                    case 'navigateUp':
                        break;

                    case 'navigateDown':
                        break;

                    case 'toggleEditDialog': {
                        const matchedEntry = Object.entries(OBJECT_TYPE).find(([_, obj]) => {
                            const idx = segments.indexOf(obj.path);

                            return idx !== -1 && segments.length > idx + 1;
                        });

                        if (!matchedEntry) return;
                        const [key, object] = matchedEntry;
                        const objectId = segments[segments.indexOf(object.path) + 1];

                        dispatch(toggleEditDialogOpenState({ objectType: key as ObjectTypeKey, objectId }));
                        break;
                    }
                }
            };

            hotkeys(shortcut.key, { scope: 'all' }, handler);
            registeredKeys.push(shortcut.key);
        });

        return () => {
            registeredKeys.forEach((key) => {
                hotkeys.unbind(key);
            });
        };
    }, [shortcuts, dispatch, pathname]);

    return null;
}
