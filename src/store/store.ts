import commandPanelReducer from '@/features/command-panel/store/command-panel.slice';
import editDialogReducer from '@/features/edit-dailog/store/edit-dialog.slice';
import movieEditReducer from '@/features/movies/store/movie-edit.slice';
import moviesFilterReducer from '@/features/movies/store/movies-filter.slice';
import settingsReducer from '@/features/settings/store/settings.slice';
import shortcutsReducer from '@/features/shortcuts/store/shortcuts.slice';
import { configureStore } from '@reduxjs/toolkit';

import persistedGlobalReducer from './global.slice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';

export const store = configureStore({
    reducer: {
        global: persistedGlobalReducer,
        shortcuts: shortcutsReducer,
        settings: settingsReducer,
        commandPanel: commandPanelReducer,
        editDialog: editDialogReducer,
        moviesFilter: moviesFilterReducer,
        movieEdit: movieEditReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
