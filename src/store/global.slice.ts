import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface GlobalState {
    language: string;
}

const initialState: GlobalState = {
    language: 'en'
};

const persistConfig = {
    key: 'global',
    storage
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload;
        }
    }
});

export const { setLanguage } = globalSlice.actions;
export const persistedGlobalReducer = persistReducer(persistConfig, globalSlice.reducer);
export default persistedGlobalReducer;
