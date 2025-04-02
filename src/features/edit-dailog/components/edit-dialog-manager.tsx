'use client';

import { MovieEditDialog } from '@/features/movies/components/movie-edit-dialog';
import { RootState } from '@/store/store';

import { closeEditDialog } from '../store/edit-dialog.slice';
import { useDispatch, useSelector } from 'react-redux';

export default function EditDialogManager() {
    const { isOpen, objectType, objectId } = useSelector((state: RootState) => state.editDialog);

    const dispatch = useDispatch();

    if (!isOpen || !objectType || !objectId) return null;

    const commonProps = {
        id: objectId,
        isOpen,
        onClose: () => dispatch(closeEditDialog())
    };

    switch (objectType) {
        case 'MOVIE':
            return <MovieEditDialog {...commonProps} />;
        default:
            return null;
    }
}
