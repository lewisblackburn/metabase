'use client';

import { EditBookDialog } from '@/features/books/components/edit-book/edit-book-dialog';
import { EditMovieDialog } from '@/features/movies/components/edit-movie/edit-movie-dialog';
import { EditPersonDialog } from '@/features/people/components/edit-person.dialog';
import { EditSongDialog } from '@/features/songs/components/edit-song/edit-song-dialog';
import { Object_Types_Enum } from '@/generated/graphql';
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
        case Object_Types_Enum.Movie:
            return <EditMovieDialog {...commonProps} />;
        case Object_Types_Enum.Song:
            return <EditSongDialog {...commonProps} />;
        case Object_Types_Enum.Book:
            return <EditBookDialog {...commonProps} />;
        case Object_Types_Enum.Person:
            return <EditPersonDialog {...commonProps} />;
        default:
            return null;
    }
}
