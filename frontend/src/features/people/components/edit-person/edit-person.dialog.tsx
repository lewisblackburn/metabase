'use client';

import * as React from 'react';

import { DialogConfig, DialogManager } from '@/components/shared/dialog-manager';
import { SidebarItem } from '@/components/shared/sidebar-dialog';
import { RootState } from '@/store/store';

import { setActiveItemId } from '../../store/person-edit.slice';
import ImportPersonFromTMDB from '../import-person-from-tmdb';
import EditPersonDangerZone from './edit-person-danger-zone';
import EditPersonMedia from './edit-person-media';
import EditPersonDetails from './edit-person.details';
import { useDispatch, useSelector } from 'react-redux';

interface EditPersonDialogProps {
    id: string;
    isOpen: boolean;
    onOpenChange: (state: boolean) => void;
}

export function EditPersonDialog({ id, isOpen, onOpenChange }: EditPersonDialogProps) {
    const { items, activeItemId } = useSelector((state: RootState) => state.personEdit);
    const dispatch = useDispatch();

    const contentMap: Record<string, (item: SidebarItem) => React.ReactNode> = {
        details: () => <EditPersonDetails personId={id} />,
        media: () => <EditPersonMedia personId={id} />,
        import: () => <ImportPersonFromTMDB personId={id} />,
        danger: () => <EditPersonDangerZone personId={id} />
    };

    const config: DialogConfig = {
        type: 'person-edit',
        isOpen,
        onOpenChange,
        title: 'Edit Person',
        description: 'Edit person details and metadata',
        items,
        activeItemId,
        onItemClick: (itemId) => dispatch(setActiveItemId(itemId)),
        contentMap
    };

    return <DialogManager configs={{ 'person-edit': config }} />;
}
