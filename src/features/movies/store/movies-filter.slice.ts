import { createSlice } from '@reduxjs/toolkit';

import { MoviesFilter } from '../schemas/movies-filter.schema';

const initialState: MoviesFilter = {
    orderBy: {
        orderBy: 'popularity',
        order: 'asc'
    },
    search: '',
    showMe: 'everything',
    releaseDates: undefined,
    genres: [],
    certifications: [],
    availabilities: [],
    statuses: [],
    language: '',
    userScore: [0, 10],
    minVotes: [0],
    runtime: [0, 400],
    keywords: []
};

export const moviesFilterSlice = createSlice({
    name: 'moviesFilter',
    initialState,
    reducers: {
        setMoviesFilter: (_state, action) => {
            if (action.payload.releaseDates) {
                action.payload.releaseDates.from = action.payload.releaseDates.from?.toISOString();
                action.payload.releaseDates.to = action.payload.releaseDates.to?.toISOString();
            }

            return action.payload;
        },
        resetMoviesFilter: () => {
            return initialState;
        }
    }
});

export const { setMoviesFilter, resetMoviesFilter } = moviesFilterSlice.actions;

export default moviesFilterSlice.reducer;
