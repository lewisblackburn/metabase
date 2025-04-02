'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import { OBJECT_TYPE, ObjectTypeKey } from '@/constants/objects.constant';
import { toggleCommandPanelOpenState } from '@/features/command-panel/store/command-panel.slice';
import { toggleEditDialog } from '@/features/edit-dailog/store/edit-dialog.slice';
import { toggleSettingsDialogOpenState } from '@/features/settings/store/settings.slice';
import { RootState } from '@/store/store';

import hotkeys from 'hotkeys-js';
import { useDispatch, useSelector } from 'react-redux';

export default function ShortcutManager() {
    const dispatch = useDispatch();
    const shortcuts = useSelector((state: RootState) => state.shortcuts.shortcuts);
    const pathname = usePathname();

    useEffect(() => {
        const segments = pathname.split('/').filter(Boolean);

        const matchedEntry = Object.entries(OBJECT_TYPE).find(([_, obj]) => {
            const idx = segments.indexOf(obj.path);

            return idx !== -1 && segments.length > idx + 1;
        });

        Object.values(shortcuts).forEach((shortcut) => {
            if (!shortcut.enabled) return;

            const scope = shortcut.global ? 'all' : shortcut.scope || 'default';

            hotkeys(shortcut.key, { scope }, (e) => {
                e.preventDefault();

                switch (shortcut.id) {
                    case 'openCommandPanel':
                        dispatch(toggleCommandPanelOpenState());
                        break;

                    case 'toggleSettings':
                        dispatch(toggleSettingsDialogOpenState());
                        break;

                    case 'navigateUp':
                        // Add navigation logic
                        break;

                    case 'navigateDown':
                        // Add navigation logic
                        break;

                    case 'toggleEditDialog': {
                        console.log('running');
                        if (!matchedEntry) return;

                        const [key, object] = matchedEntry;
                        const objectId = segments[segments.indexOf(object.path) + 1];

                        dispatch(
                            toggleEditDialog({
                                objectType: key as ObjectTypeKey,
                                objectId
                            })
                        );
                        break;
                    }
                }
            });
        });

        return () => {
            Object.values(shortcuts).forEach((s) => hotkeys.unbind(s.key));
        };
    }, []);

    return null;
}
