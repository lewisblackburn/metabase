import { SidebarItem } from '@/components/shared/sidebar-dialog';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MovieEditState {
    isOpen: boolean;
    movieId: string | null;
    activeItemId: string;
    items: SidebarItem[];
}

// TODO: Look at metabase and add the items from that
const initialState: MovieEditState = {
    isOpen: false,
    movieId: null,
    activeItemId: 'details',
    items: [
        {
            id: 'details',
            name: 'Details',
            icon: 'CircleHelp',
            description: 'Edit basic movie information like title, overview and release date',
            iconColor: 'text-blue-500'
        },
        {
            id: 'cast',
            name: 'Cast',
            icon: 'CircleHelp',
            description: 'Manage the cast members and their roles',
            iconColor: 'text-purple-500'
        },
        {
            id: 'crew',
            name: 'Crew',
            icon: 'CircleHelp',
            description: 'Edit crew members and their positions',
            iconColor: 'text-green-500'
        },
        {
            id: 'reviews',
            name: 'Reviews',
            icon: 'CircleHelp',
            description: 'Moderate user reviews and ratings',
            iconColor: 'text-orange-500'
        },
        {
            id: 'metadata',
            name: 'Metadata',
            icon: 'CircleHelp',
            description: 'Edit technical details and additional information',
            iconColor: 'text-red-500'
        }
    ]
};

export const movieEditSlice = createSlice({
    name: 'movieEdit',
    initialState,
    reducers: {
        setMovieEditOpenState: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
            if (!action.payload) {
                state.movieId = null;
            }
        },
        setActiveItemId: (state, action: PayloadAction<string>) => {
            state.activeItemId = action.payload;
        },
        openMovieEdit: (state, action: PayloadAction<string>) => {
            state.isOpen = true;
            state.movieId = action.payload;
        }
    }
});

export const { setMovieEditOpenState, setActiveItemId, openMovieEdit } = movieEditSlice.actions;
export default movieEditSlice.reducer;
