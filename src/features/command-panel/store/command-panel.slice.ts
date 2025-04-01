import { createSlice } from '@reduxjs/toolkit';

export interface CommandPanelState {
    query: string;
    commandPanelOpen: boolean;
}

const initialState: CommandPanelState = {
    query: '',
    commandPanelOpen: false
};

export const commandPanelSlice = createSlice({
    name: 'commandPanel',
    initialState,
    reducers: {
        setCommandPanelOpenState: (state, action) => {
            state.commandPanelOpen = action.payload;
            if (!action.payload) {
                state.query = '';
            }
        },
        toggleCommandPanelOpenState: (state) => {
            state.commandPanelOpen = !state.commandPanelOpen;
            if (state.commandPanelOpen) {
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
