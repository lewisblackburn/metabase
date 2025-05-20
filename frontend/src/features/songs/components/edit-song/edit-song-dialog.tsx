'use client';

import * as React from 'react';

import { DialogConfig, DialogManager } from '@/components/shared/dialog-manager';
import { SidebarItem } from '@/components/shared/sidebar-dialog';
import { RootState } from '@/store/store';

import { setActiveItemId } from '../../store/song-edit.slice';
import EditAlbumMedia from './edit-album-media';
import EditSongArtists from './edit-song-artists';
import EditSongDangerZone from './edit-song-danger-zone';
import EditSongDetails from './edit-song-details';
import { useDispatch, useSelector } from 'react-redux';

interface EditSongDialogProps {
    id: string;
    isOpen: boolean;
    onOpenChange: (state: boolean) => void;
}

export function EditSongDialog({ id, isOpen, onOpenChange }: EditSongDialogProps) {
    const { items, activeItemId } = useSelector((state: RootState) => state.songEdit);
    const dispatch = useDispatch();

    const contentMap: Record<string, (item: SidebarItem) => React.ReactNode> = {
        details: () => <EditSongDetails songId={id} />,
        artists: () => <EditSongArtists songId={id} />,
        // awards: () => <EditSongAwards songId={id} />,
        media: () => <EditAlbumMedia songId={id} />,
        danger_zone: () => <EditSongDangerZone songId={id} />
    };

    const config: DialogConfig = {
        type: 'song-edit',
        isOpen,
        onOpenChange,
        title: 'Edit Song',
        description: 'Edit song details and metadata',
        items,
        activeItemId,
        onItemClick: (itemId) => dispatch(setActiveItemId(itemId)),
        contentMap
    };

    return <DialogManager configs={{ 'song-edit': config }} />;
}
