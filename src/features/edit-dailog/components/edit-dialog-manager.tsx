'use client';

import { EditMovieDialog } from '@/features/movies/components/edit-movie-dialog';
import { EditPersonDialog } from '@/features/people/components/edit-person.dialog';
import { RootState } from '@/store/store';

import { setEditDialogOpenState } from '../store/edit-dialog.slice';
import { useDispatch, useSelector } from 'react-redux';

export default function EditDialogManager() {
    const { isOpen, objectType, objectId } = useSelector((state: RootState) => state.editDialog);

    const dispatch = useDispatch();

    if (!isOpen || !objectType || !objectId) return null;

    const commonProps = {
        id: objectId,
        isOpen,
        onOpenChange: () => dispatch(setEditDialogOpenState(!isOpen))
    };

    switch (objectType) {
        case 'MOVIE':
            return <EditMovieDialog {...commonProps} />;
        case 'PERSON':
            return <EditPersonDialog {...commonProps} />;
        default:
            return null;
    }
}
