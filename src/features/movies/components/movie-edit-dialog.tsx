'use client';

import * as React from 'react';

import { DialogConfig, DialogManager } from '@/components/shared/dialog-manager';
import { SidebarItem } from '@/components/shared/sidebar-dialog';
import { RootState } from '@/store/store';

import { setActiveItemId } from '../store/movie-edit.slice';
import { useDispatch, useSelector } from 'react-redux';

interface MovieEditDialogProps {
    id: string;
    isOpen: boolean;
    onOpenChange: (state: boolean) => void;
}

export function MovieEditDialog({ id, isOpen, onOpenChange }: MovieEditDialogProps) {
    const { items, activeItemId } = useSelector((state: RootState) => state.movieEdit);
    const dispatch = useDispatch();

    // TODO: Now we can do what we want with this e.g. pass it to the components for requets
    console.log(id);

    const contentMap: Record<string, (item: SidebarItem) => React.ReactNode> = {
        details: (item) => <div>{item.name}</div>,
        alternative_titles: (item) => <div>alternative_titles</div>,
        cast: (item) => <div>cast</div>,
        crew: (item) => <div>crew</div>,
        soundtrack: (item) => <div>soundtrack</div>,
        genres: (item) => <div>genres</div>,
        keywords: (item) => <div>keywords</div>,
        production_information: (item) => <div>production_information</div>,
        gallery: (item) => <div>gallery</div>
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
