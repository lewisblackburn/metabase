import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export type ViewMode = 'grid' | 'list';

interface ViewModeState {
    mode: ViewMode;
}

const initialState: ViewModeState = {
    mode: 'grid'
};

const persistConfig = {
    key: 'viewMode',
    storage
};

const viewModeSlice = createSlice({
    name: 'viewMode',
    initialState,
    reducers: {
        setViewMode: (state, action: PayloadAction<ViewMode>) => {
            state.mode = action.payload;
        }
    }
});

export const { setViewMode } = viewModeSlice.actions;
export const persistedViewModeReducer = persistReducer(persistConfig, viewModeSlice.reducer);
export default persistedViewModeReducer;
