import { createSlice } from '@reduxjs/toolkit';

export interface CommandPanelState {
    query: string;
    isOpen: boolean;
}

const initialState: CommandPanelState = {
    query: '',
    isOpen: false
};

export const commandPanelSlice = createSlice({
    name: 'commandPanel',
    initialState,
    reducers: {
        setCommandPanelOpenState: (state, action) => {
            state.isOpen = action.payload;
            if (!action.payload) {
                state.query = '';
            }
        },
        toggleCommandPanelOpenState: (state) => {
            state.isOpen = !state.isOpen;
            if (state.isOpen) {
                state.query = '';
            }
        },
        setQuery: (state, action) => {
            state.query = action.payload;
        }
    }
});

export const { setCommandPanelOpenState, toggleCommandPanelOpenState, setQuery } = commandPanelSlice.actions;

export default commandPanelSlice.reducer;
