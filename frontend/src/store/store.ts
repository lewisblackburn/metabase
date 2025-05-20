import booksFilterReducer from '@/features/books/store/books-filter.slice';
import bookEditReducer from '@/features/books/store/edit-book.slice';
import commandPanelReducer from '@/features/command-panel/store/command-panel.slice';
import editDialogReducer from '@/features/edit-dailog/store/edit-dialog.slice';
import movieEditReducer from '@/features/movies/store/movie-edit.slice';
import { persistedMoviesFilterReducer } from '@/features/movies/store/movies-filter.slice';
import personEditReducer from '@/features/people/store/person-edit.slice';
import settingsReducer from '@/features/settings/store/settings.slice';
import shortcutsReducer from '@/features/shortcuts/store/shortcuts.slice';
import songEditReducer from '@/features/songs/store/song-edit.slice';
import { persistedSongsFilterReducer } from '@/features/songs/store/songs-filter.slice';
import viewModeReducer from '@/store/view-mode.slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import persistedGlobalReducer from './global.slice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const rootReducer = combineReducers({
    // Global state
    global: persistedGlobalReducer,
    viewMode: viewModeReducer,

    // Feature states
    commandPanel: commandPanelReducer,
    editDialog: editDialogReducer,

    // Edit states
    movieEdit: movieEditReducer,
    songEdit: songEditReducer,
    bookEdit: bookEditReducer,
    personEdit: personEditReducer,

    // Filter states
    moviesFilter: persistedMoviesFilterReducer,
    booksFilter: booksFilterReducer,
    songsFilter: persistedSongsFilterReducer,

    // Settings and preferences
    settings: settingsReducer,
    shortcuts: shortcutsReducer
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
