import { createSlice } from '@reduxjs/toolkit';

import { BooksFilterType } from '../schemas/books-filter.schema';

const initialState: BooksFilterType = {
    orderBy: {
        orderBy: 'popularity',
        order: 'desc'
    },
    search: '',
    showMe: 'everything',
    publishDates: undefined,
    genres: [],
    statuses: [],
    availabilities: [],
    language: '',
    userScore: [0, 10],
    minVotes: [0],
    readingTime: [0, 400],
    keywords: []
};

export const booksFilterSlice = createSlice({
    name: 'booksFilter',
    initialState,
    reducers: {
        setBooksFilter: (_state, action) => {
            if (action.payload.publishDates) {
                action.payload.publishDates.from = action.payload.publishDates.from?.toISOString();
                action.payload.publishDates.to = action.payload.publishDates.to?.toISOString();
            }

            return action.payload;
        },
        resetBooksFilter: () => {
            return initialState;
        }
    }
});

export const { setBooksFilter, resetBooksFilter } = booksFilterSlice.actions;

export default booksFilterSlice.reducer;
