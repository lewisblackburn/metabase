import storage from '@/store/storage';
import { createSlice } from '@reduxjs/toolkit';

import { PeopleFilter } from '../schemas/people-filter.schema';
import { persistReducer } from 'redux-persist';

const initialState: PeopleFilter = {
    orderBy: {
        orderBy: 'popularity',
        order: 'desc'
    },
    search: '',
    age: undefined
};

const persistConfig = { key: 'peopleFilter', storage };

export const peopleFilterSlice = createSlice({
    name: 'peopleFilter',
    initialState,
    reducers: {
        setPeopleFilter: (_s, a) => a.payload,
        resetPeopleFilter: () => initialState
    }
});

export const { setPeopleFilter, resetPeopleFilter } = peopleFilterSlice.actions;

export const persistedPeopleFilterReducer = persistReducer(persistConfig, peopleFilterSlice.reducer);
