import storage from '@/store/storage';
import { createSlice } from '@reduxjs/toolkit';

import { SongsFilterType } from '../schemas/songs-filter.schema';
import { persistReducer } from 'redux-persist';

const initialState: SongsFilterType = {
    orderBy: {
        orderBy: 'popularity',
        order: 'desc'
    },
    search: '',
    genres: [],
    availabilities: [],
    userScore: [0, 10],
    minVotes: [0],
    keywords: []
};

const persistConfig = { key: 'songsFilter', storage };

export const songsFilterSlice = createSlice({
    name: 'songsFilter',
    initialState,
    reducers: {
        setSongsFilter: (_state, action) => {
            return action.payload;
        },
        resetSongsFilter: () => {
            return initialState;
        }
    }
});

export const { setSongsFilter, resetSongsFilter } = songsFilterSlice.actions;

export const persistedSongsFilterReducer = persistReducer(persistConfig, songsFilterSlice.reducer);
