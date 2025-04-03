'use client';

import { MovieEditDialog } from '@/features/movies/components/movie-edit-dialog';
import { RootState } from '@/store/store';

import { setEditDialogOpenState } from '../store/edit-dialog.slice';
import { useDispatch, useSelector } from 'react-redux';

export default function EditDialogManager() {
    const { isOpen, objectType, objectId } = useSelector((state: RootState) => state.editDialog);

    const dispatch = useDispatch();

    if (!isOpen || !objectType || !objectId) return null;

    const commonProps = {
        isOpen,
        onOpenChange: () => dispatch(setEditDialogOpenState(!isOpen))
    };

    // TODO: This is opening MOVIE even on the edit person page
    switch (objectType) {
        case 'MOVIE':
            return <MovieEditDialog {...commonProps} />;
        default:
            return null;
    }
}
