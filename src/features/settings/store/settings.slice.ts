import { createSlice } from '@reduxjs/toolkit';

export interface SettingsState {
    settingsDialogOpen: boolean;
}

const initialState: SettingsState = {
    settingsDialogOpen: false
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setSettingsDialogOpenState: (state, action) => {
            state.settingsDialogOpen = action.payload;
        },
        toggleSettingsDialogOpenState: (state) => {
            state.settingsDialogOpen = !state.settingsDialogOpen;
        }
    }
});

export const { setSettingsDialogOpenState, toggleSettingsDialogOpenState } = settingsSlice.actions;

export default settingsSlice.reducer;
