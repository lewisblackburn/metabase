'use client';

import * as React from 'react';

import { DialogConfig, DialogManager } from '@/components/shared/dialog-manager';
import { RootState } from '@/store/store';

import { setActiveItemId } from '../store/movie-edit.slice';
import { useDispatch, useSelector } from 'react-redux';

interface MovieEditDialogProps {
    isOpen: boolean;
    onOpenChange: (state: boolean) => void;
}

export function MovieEditDialog({ isOpen, onOpenChange }: MovieEditDialogProps) {
    const { items, activeItemId } = useSelector((state: RootState) => state.movieEdit);
    const dispatch = useDispatch();

    const contentMap: Record<string, (item: any) => React.ReactNode> = {
        details: (item) => <div>details</div>,
        cast: (item) => <div>cast</div>,
        crew: (item) => <div>crew</div>,
        reviews: (item) => <div>reviews</div>,
        metadata: (item) => <div>metadata</div>
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
