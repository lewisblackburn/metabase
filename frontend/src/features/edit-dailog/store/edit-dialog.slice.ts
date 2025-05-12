import { ObjectType, ObjectTypeKey } from '@/constants/objects.constant';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface EditDialogState {
    isOpen: boolean;
    objectType: ObjectTypeKey | null;
    objectId: string | null;
}

const initialState: EditDialogState = {
    isOpen: false,
    objectType: null,
    objectId: null
};

export const editDialogSlice = createSlice({
    name: 'editDialog',
    initialState,
    reducers: {
        setEditDialogOpenState: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        toggleEditDialogOpenState: (state, action: PayloadAction<{ objectType: ObjectTypeKey; objectId: string }>) => {
            const { objectType, objectId } = action.payload;

            const isSameDialog = state.isOpen && state.objectType === objectType && state.objectId === objectId;

            if (isSameDialog) {
                state.isOpen = false;
                state.objectType = null;
                state.objectId = null;
            } else {
                state.isOpen = true;
                state.objectType = objectType;
                state.objectId = objectId;
            }
        }
    }
});

export const { setEditDialogOpenState, toggleEditDialogOpenState } = editDialogSlice.actions;
export default editDialogSlice.reducer;
