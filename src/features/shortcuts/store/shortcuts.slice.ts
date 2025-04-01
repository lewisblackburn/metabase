import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Shortcut = {
    id: string;
    key: string;
    title: string;
    description: string;
    enabled: boolean;
    global: boolean;
};

type ShortcutsState = {
    shortcuts: Record<string, Shortcut>;
};

const initialState: ShortcutsState = {
    shortcuts: {
        openCommandPanel: {
            id: 'openCommandPanel',
            key: 'ctrl+k',
            title: 'Open Command Panel',
            description: 'Open the command panel to search for objects',
            enabled: true,
            global: true
        },
        openSettings: {
            id: 'openSettings',
            key: 'ctrl+,',
            title: 'Open Settings',
            description: 'Open the settings dialog',
            enabled: true,
            global: true
        }
    }
};

const shortcutsSlice = createSlice({
    name: 'shortcuts',
    initialState,
    reducers: {
        enableShortcut: (state, action: PayloadAction<string>) => {
            state.shortcuts[action.payload].enabled = true;
        },
        disableShortcut: (state, action: PayloadAction<string>) => {
            state.shortcuts[action.payload].enabled = false;
        },
        updateShortcut(state, action: PayloadAction<{ id: string; key: string }>) {
            state.shortcuts[action.payload.id].key = action.payload.key;
        }
    }
});

export const { enableShortcut, disableShortcut, updateShortcut } = shortcutsSlice.actions;
export default shortcutsSlice.reducer;
