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
        openEditDialog: (state, action: PayloadAction<{ objectType: ObjectTypeKey; objectId: string }>) => {
            state.isOpen = true;
            state.objectType = action.payload.objectType;
            state.objectId = action.payload.objectId;
        },
        closeEditDialog: (state) => {
            state.isOpen = false;
            state.objectType = null;
            state.objectId = null;
        },
        toggleEditDialog: (state, action: PayloadAction<{ objectType: ObjectTypeKey; objectId: string }>) => {
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

export const { openEditDialog, closeEditDialog, toggleEditDialog } = editDialogSlice.actions;
export default editDialogSlice.reducer;
