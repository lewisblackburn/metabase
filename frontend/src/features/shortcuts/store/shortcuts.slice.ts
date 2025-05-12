import { SHORTCUTS, Shortcut } from '@/constants/shortcuts.constant';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ShortcutsState = {
    shortcuts: Record<string, Shortcut>;
};

const initialState: ShortcutsState = {
    shortcuts: SHORTCUTS
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
