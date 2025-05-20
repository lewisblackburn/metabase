import { SidebarItem } from '@/components/shared/sidebar-dialog';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface BookEditState {
    activeItemId: string;
    items: SidebarItem[];
}

const initialState: BookEditState = {
    activeItemId: 'details',
    items: [
        {
            id: 'details',
            name: 'Details',
            icon: 'FileText',
            description: 'Edit basic book information like title, overview and release date',
            iconColor: 'text-blue-500'
        },
        {
            id: 'authors',
            name: 'Authors',
            icon: 'Users',
            description: 'Manage the authors of the book',
            iconColor: 'text-purple-500'
        },
        {
            id: 'awards',
            name: 'Awards',
            icon: 'Trophy',
            description: 'Edit the awards of the book',
            iconColor: 'text-yellow-500'
        },
        {
            id: 'media',
            name: 'Media',
            icon: 'Image',
            description: 'Edit the media of the book',
            iconColor: 'text-pink-500'
        },
        {
            id: 'danger_zone',
            name: 'Danger Zone',
            icon: 'CircleHelp',
            description: 'Dangerous operations that cannot be undone',
            iconColor: 'text-destructive'
        }
    ]
};

export const bookEditSlice = createSlice({
    name: 'bookEdit',
    initialState,
    reducers: {
        setActiveItemId: (state, action: PayloadAction<string>) => {
            state.activeItemId = action.payload;
        }
    }
});

export const { setActiveItemId } = bookEditSlice.actions;
export default bookEditSlice.reducer;
