'use client';

import * as React from 'react';

import { SidebarDialog, SidebarItem } from '@/components/shared/sidebar-dialog';
import { getIconComponent } from '@/constants/icons.constant';
import { RootState } from '@/store/store';

import { setActiveItemId, setSettingsDialogOpenState } from '../store/settings.slice';
import Account from './account/account';
import Import from './import/import';
import { useDispatch, useSelector } from 'react-redux';

const contentMap: Record<string, (item: SidebarItem) => React.ReactNode> = {
    account: () => <Account />,
    notifications: (item) => <div>{item.name} settings</div>,
    language: (item) => <div>{item.name} settings</div>,
    password_authentication: (item) => <div>{item.name} settings</div>,
    subscription_billing: (item) => <div>{item.name} settings</div>,
    backup: (item) => <div>{item.name} settings</div>,
    api: (item) => <div>{item.name} settings</div>,
    appearance: (item) => <div>{item.name} settings</div>,
    integrations: (item) => <div>{item.name} settings</div>,
    import: () => <Import />
};

export function SettingsDialog() {
    const { isOpen, items, activeItemId } = useSelector((state: RootState) => state.settings);
    const dispatch = useDispatch();

    return (
        <SidebarDialog
            isOpen={isOpen}
            onOpenChange={(state) => dispatch(setSettingsDialogOpenState(state))}
            title='Settings'
            description='Configure your settings here.'
            items={items}
            activeItemId={activeItemId}
            onItemClick={(itemId) => dispatch(setActiveItemId(itemId))}
            contentMap={contentMap}
            getIconComponent={getIconComponent}
        />
    );
}
