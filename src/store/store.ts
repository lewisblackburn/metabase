import commandPanelReducer from '@/features/command-panel/store/command-panel.slice';
import editDialogReducer from '@/features/edit-dailog/store/edit-dialog.slice';
import settingsReducer from '@/features/settings/store/settings.slice';
import shortcutsReducer from '@/features/shortcuts/store/shortcuts.slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        shortcuts: shortcutsReducer,
        settings: settingsReducer,
        commandPanel: commandPanelReducer,
        editDialog: editDialogReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
