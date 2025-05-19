import storage from '@/store/storage';
import { createSlice } from '@reduxjs/toolkit';

import { MoviesFilter } from '../schemas/movies-filter.schema';
import { persistReducer } from 'redux-persist';

const initialState: MoviesFilter = {
    orderBy: {
        orderBy: 'popularity',
        order: 'desc'
    },
    search: '',
    showMe: 'everything',
    releaseDates: undefined,
    genres: [],
    statuses: [],
    certifications: [],
    availabilities: [],
    language: '',
    userScore: [0, 10],
    minVotes: [0],
    runtime: [0, 400],
    keywords: []
};

const persistConfig = { key: 'moviesFilter', storage };

export const moviesFilterSlice = createSlice({
    name: 'moviesFilter',
    initialState,
    reducers: {
        setMoviesFilter: (_s, a) => {
            if (a.payload.releaseDates) {
                a.payload.releaseDates.from = a.payload.releaseDates.from?.toISOString();
                a.payload.releaseDates.to = a.payload.releaseDates.to?.toISOString();
            }
            return a.payload;
        },
        resetMoviesFilter: () => initialState
    }
});

export const { setMoviesFilter, resetMoviesFilter } = moviesFilterSlice.actions;

export const persistedMoviesFilterReducer = persistReducer(persistConfig, moviesFilterSlice.reducer);
