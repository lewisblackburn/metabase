import { SidebarItem } from '@/components/shared/sidebar-dialog';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MovieEditState {
    activeItemId: string;
    items: SidebarItem[];
}

const initialState: MovieEditState = {
    activeItemId: 'details',
    items: [
        {
            id: 'details',
            name: 'Details',
            icon: 'FileText',
            description: 'Edit basic movie information like title, overview and release date',
            iconColor: 'text-blue-500'
        },
        {
            id: 'alternative_titles',
            name: 'Alternative Titles',
            icon: 'Languages',
            description: 'Edit the alternative titles of the movie',
            iconColor: 'text-blue-500'
        },
        {
            id: 'cast',
            name: 'Cast',
            icon: 'Users',
            description: 'Manage the cast members and their roles',
            iconColor: 'text-purple-500'
        },
        {
            id: 'crew',
            name: 'Crew',
            icon: 'UserCog',
            description: 'Edit crew members and their positions',
            iconColor: 'text-green-500'
        },
        {
            id: 'soundtrack',
            name: 'Soundtrack',
            icon: 'Music',
            description: 'Edit the soundtrack of the movie',
            iconColor: 'text-blue-500'
        },
        {
            id: 'production_information',
            name: 'Production Information',
            icon: 'Clapperboard',
            description: 'Edit the production information of the movie',
            iconColor: 'text-yellow-500'
        },
        {
            id: 'media',
            name: 'Media',
            icon: 'Image',
            description: 'Edit the media of the movie',
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

export const movieEditSlice = createSlice({
    name: 'movieEdit',
    initialState,
    reducers: {
        setActiveItemId: (state, action: PayloadAction<string>) => {
            state.activeItemId = action.payload;
        }
    }
});

export const { setActiveItemId } = movieEditSlice.actions;
export default movieEditSlice.reducer;
