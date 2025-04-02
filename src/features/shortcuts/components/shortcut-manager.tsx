'use client';

import { useEffect } from 'react';

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

    useEffect(() => {
        const registeredKeys: string[] = [];

        Object.values(shortcuts).forEach((shortcut) => {
            if (!shortcut.enabled || !shortcut.key) return;

            const scope = shortcut.global ? 'all' : shortcut.scope || 'default';

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
                        const segments = pathname.split('/').filter(Boolean);
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

            hotkeys(shortcut.key, { scope }, handler);
            registeredKeys.push(shortcut.key);
        });

        return () => {
            registeredKeys.forEach((key) => {
                hotkeys.unbind(key);
            });
        };
    }, [shortcuts, dispatch]);

    useEffect(() => {
        const segments = pathname.split('/').filter(Boolean);

        const isObjectPage = Object.values(OBJECT_TYPE).some((obj) => {
            const idx = segments.indexOf(obj.path);

            return idx !== -1 && segments.length > idx + 1;
        });

        const newScope = isObjectPage ? 'object' : 'default';
        hotkeys.setScope(newScope);
    }, [pathname]);

    return null;
}
