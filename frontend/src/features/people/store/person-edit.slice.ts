import { SidebarItem } from '@/components/shared/sidebar-dialog';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PersonEditState {
    activeItemId: string;
    items: SidebarItem[];
}

const initialState: PersonEditState = {
    activeItemId: 'details',
    items: [
        {
            id: 'details',
            name: 'Details',
            icon: 'FileText',
            description: 'Edit basic person information like name, biography and birth date',
            iconColor: 'text-blue-500'
        },
        {
            id: 'import',
            name: 'Import',
            icon: 'Download',
            description: 'Import person information from external sources',
            iconColor: 'text-green-500'
        }
    ]
};

export const personEditSlice = createSlice({
    name: 'personEdit',
    initialState,
    reducers: {
        setActiveItemId: (state, action: PayloadAction<string>) => {
            state.activeItemId = action.payload;
        }
    }
});

export const { setActiveItemId } = personEditSlice.actions;
export default personEditSlice.reducer;
