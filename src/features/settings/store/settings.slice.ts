import { IconType } from '@/constants/icons.constant';
import { createSlice } from '@reduxjs/toolkit';

// In settings.slice.ts

export interface SettingsState {
    isOpen: boolean;
    items: {
        id: string;
        name: string;
        icon: IconType;
    }[];
    activeItemId: string;
}

const initialState: SettingsState = {
    isOpen: false,
    items: [
        { id: 'account', name: 'Account', icon: 'User' },
        { id: 'notifications', name: 'Notifications', icon: 'Bell' },
        { id: 'language', name: 'Language', icon: 'LanguagesIcon' },
        { id: 'password_authentication', name: 'Password & Authentication', icon: 'Lock' },
        { id: 'billing_subscription', name: 'Subscription & Billing', icon: 'CreditCard' },
        { id: 'backup', name: 'Backup', icon: 'HardDrive' },
        { id: 'api', name: 'Metabase API', icon: 'Code' },
        { id: 'appearance', name: 'Appearance', icon: 'Paintbrush' },
        { id: 'integrations', name: 'Integrations', icon: 'Plug' }
    ],
    activeItemId: 'account'
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setSettingsDialogOpenState: (state, action) => {
            state.isOpen = action.payload;
        },
        toggleSettingsDialogOpenState: (state) => {
            state.isOpen = !state.isOpen;
        },
        setActiveItemId: (state, action) => {
            state.activeItemId = action.payload;
        }
    }
});

export const { setSettingsDialogOpenState, toggleSettingsDialogOpenState, setActiveItemId } = settingsSlice.actions;

export default settingsSlice.reducer;
