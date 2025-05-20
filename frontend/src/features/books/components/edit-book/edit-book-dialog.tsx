'use client';

import * as React from 'react';

import { DialogConfig, DialogManager } from '@/components/shared/dialog-manager';
import { SidebarItem } from '@/components/shared/sidebar-dialog';
import { RootState } from '@/store/store';

import { setActiveItemId } from '../../store/edit-book.slice';
import EditBookAuthors from './edit-book-authors';
import EditBookDangerZone from './edit-book-danger-zone';
import EditBookDetails from './edit-book-details';
import EditBookMedia from './edit-book-media';
import { useDispatch, useSelector } from 'react-redux';

interface EditBookDialogProps {
    id: string;
    isOpen: boolean;
    onOpenChange: (state: boolean) => void;
}

export function EditBookDialog({ id, isOpen, onOpenChange }: EditBookDialogProps) {
    const { items, activeItemId } = useSelector((state: RootState) => state.bookEdit);
    const dispatch = useDispatch();

    const contentMap: Record<string, (item: SidebarItem) => React.ReactNode> = {
        details: () => <EditBookDetails bookId={id} />,
        authors: () => <EditBookAuthors bookId={id} />,
        // awards: () => <EditSongAwards songId={id} />,
        media: () => <EditBookMedia bookId={id} />,
        danger_zone: () => <EditBookDangerZone bookId={id} />
    };

    const config: DialogConfig = {
        type: 'book-edit',
        isOpen,
        onOpenChange,
        title: 'Edit Book',
        description: 'Edit book details and metadata',
        items,
        activeItemId,
        onItemClick: (itemId) => dispatch(setActiveItemId(itemId)),
        contentMap
    };

    return <DialogManager configs={{ 'book-edit': config }} />;
}
