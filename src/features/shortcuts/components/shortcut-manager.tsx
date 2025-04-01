'use client';

import { useEffect } from 'react';

import { toggleCommandPanelOpenState } from '@/features/command-panel/store/command-panel.slice';
import { toggleSettingsDialogOpenState } from '@/features/settings/store/settings.slice';
import { RootState } from '@/store/store';

import hotkeys from 'hotkeys-js';
import { useDispatch, useSelector } from 'react-redux';

export default function ShortcutManager() {
    const dispatch = useDispatch();
    const shortcuts = useSelector((state: RootState) => state.shortcuts.shortcuts);

    useEffect(() => {
        Object.values(shortcuts).forEach((shortcut) => {
            if (!shortcut.enabled) return;

            hotkeys(shortcut.key, { scope: shortcut.global ? 'all' : 'app' }, (e) => {
                e.preventDefault();

                switch (shortcut.id) {
                    case 'openCommandPanel':
                        dispatch(toggleCommandPanelOpenState());
                        break;
                    case 'openSettings':
                        dispatch(toggleSettingsDialogOpenState());
                        break;
                }
            });
        });

        return () => {
            // Unbind all
            Object.values(shortcuts).forEach((s) => hotkeys.unbind(s.key));
        };
    }, [shortcuts, dispatch]);

    return null;
}
