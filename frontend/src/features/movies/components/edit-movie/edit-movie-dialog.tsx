'use client';

import * as React from 'react';

import { DialogConfig, DialogManager } from '@/components/shared/dialog-manager';
import { SidebarItem } from '@/components/shared/sidebar-dialog';
import { RootState } from '@/store/store';

import { setActiveItemId } from '../../store/movie-edit.slice';
import EditMovieAlternativeTitles from './edit-movie-alternative-titles';
import EditMovieCast from './edit-movie-cast';
import EditMovieCrew from './edit-movie-crew';
import EditMovieDetails from './edit-movie-details';
import EditMovieGallery from './edit-movie-gallery';
import EditMovieProductionInformation from './edit-movie-production-information';
import EditMovieSoundtrack from './edit-movie-soundtrack';
import { useDispatch, useSelector } from 'react-redux';

interface EditMovieDialogProps {
    id: string;
    isOpen: boolean;
    onOpenChange: (state: boolean) => void;
}

export function EditMovieDialog({ id, isOpen, onOpenChange }: EditMovieDialogProps) {
    const { items, activeItemId } = useSelector((state: RootState) => state.movieEdit);
    const dispatch = useDispatch();

    const contentMap: Record<string, (item: SidebarItem) => React.ReactNode> = {
        details: () => <EditMovieDetails movieId={id} />,
        alternative_titles: () => <EditMovieAlternativeTitles movieId={id} />,
        cast: () => <EditMovieCast movieId={id} />,
        crew: () => <EditMovieCrew movieId={id} />,
        soundtrack: () => <EditMovieSoundtrack movieId={id} />,
        production_information: () => <EditMovieProductionInformation movieId={id} />,
        gallery: () => <EditMovieGallery movieId={id} />
    };

    const config: DialogConfig = {
        type: 'movie-edit',
        isOpen,
        onOpenChange,
        title: 'Edit Movie',
        description: 'Edit movie details and metadata',
        items,
        activeItemId,
        onItemClick: (itemId) => dispatch(setActiveItemId(itemId)),
        contentMap
    };

    return <DialogManager configs={{ 'movie-edit': config }} />;
}
