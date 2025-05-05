import booksFilterReducer from '@/features/books/store/books-filter.slice';
import commandPanelReducer from '@/features/command-panel/store/command-panel.slice';
import editDialogReducer from '@/features/edit-dailog/store/edit-dialog.slice';
import movieEditReducer from '@/features/movies/store/movie-edit.slice';
import moviesFilterReducer from '@/features/movies/store/movies-filter.slice';
import viewModeReducer from '@/features/movies/store/view-mode.slice';
import personEditReducer from '@/features/people/store/person-edit.slice';
import settingsReducer from '@/features/settings/store/settings.slice';
import shortcutsReducer from '@/features/shortcuts/store/shortcuts.slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const rootReducer = combineReducers({
    commandPanel: commandPanelReducer,
    editDialog: editDialogReducer,
    movieEdit: movieEditReducer,
    personEdit: personEditReducer,
    moviesFilter: moviesFilterReducer,
    booksFilter: booksFilterReducer,
    settings: settingsReducer,
    shortcuts: shortcutsReducer,
    viewMode: viewModeReducer
});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
                }
            })
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
