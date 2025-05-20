import { SidebarItem } from '@/components/shared/sidebar-dialog';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SongEditState {
    activeItemId: string;
    items: SidebarItem[];
}

const initialState: SongEditState = {
    activeItemId: 'details',
    items: [
        {
            id: 'details',
            name: 'Details',
            icon: 'FileText',
            description: 'Edit basic song information like title, overview and release date',
            iconColor: 'text-blue-500'
        },
        {
            id: 'artists',
            name: 'Artists',
            icon: 'Users',
            description: 'Manage the artists of the song',
            iconColor: 'text-purple-500'
        },
        {
            id: 'awards',
            name: 'Awards',
            icon: 'Trophy',
            description: 'Edit the awards of the song',
            iconColor: 'text-yellow-500'
        },
        {
            id: 'media',
            name: 'Media',
            icon: 'Image',
            description: 'Edit the media of the song',
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

export const songEditSlice = createSlice({
    name: 'songEdit',
    initialState,
    reducers: {
        setActiveItemId: (state, action: PayloadAction<string>) => {
            state.activeItemId = action.payload;
        }
    }
});

export const { setActiveItemId } = songEditSlice.actions;
export default songEditSlice.reducer;
