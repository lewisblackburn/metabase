import { SidebarItem } from '@/components/shared/sidebar-dialog';
import { createSlice } from '@reduxjs/toolkit';

export interface SettingsState {
    isOpen: boolean;
    items: SidebarItem[];
    activeItemId: string;
}

const initialState: SettingsState = {
    isOpen: false,
    items: [
        {
            id: 'account',
            name: 'Account',
            icon: 'User',
            description: 'Manage your account settings',
            iconColor: 'text-blue-500'
        },
        {
            id: 'notifications',
            name: 'Notifications',
            icon: 'Bell',
            description: 'Manage your notification settings',
            iconColor: 'text-red-500'
        },
        {
            id: 'language',
            name: 'Language',
            icon: 'LanguagesIcon',
            description: 'Manage your language settings',
            iconColor: 'text-green-500'
        },
        {
            id: 'password_authentication',
            name: 'Password & Authentication',
            icon: 'Lock',
            description: 'Manage your password and authentication settings',
            iconColor: 'text-yellow-500'
        },
        {
            id: 'subscription_billing',
            name: 'Subscription & Billing',
            icon: 'CreditCard',
            description: 'Manage your subscription and billing settings',
            iconColor: 'text-purple-500'
        },
        {
            id: 'backup',
            name: 'Backup',
            icon: 'HardDrive',
            description: 'Manage your backup settings',
            iconColor: 'text-pink-500'
        },
        {
            id: 'api',
            name: 'Metabase API',
            icon: 'Code',
            description: 'Manage your API settings',
            iconColor: 'text-indigo-500'
        },
        {
            id: 'appearance',
            name: 'Appearance',
            icon: 'Paintbrush',
            description: 'Manage your appearance settings',
            iconColor: 'text-orange-500'
        },
        {
            id: 'integrations',
            name: 'Integrations',
            icon: 'Plug',
            description: 'Manage your integrations settings',
            iconColor: 'text-teal-500'
        }
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
