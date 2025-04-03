import * as React from 'react';

import { getIconComponent } from '@/constants/icons.constant';

import { SidebarDialog, SidebarItem } from './sidebar-dialog';

export interface DialogConfig<T extends SidebarItem = SidebarItem> {
    type: string;
    isOpen: boolean;
    onOpenChange: (state: boolean) => void;
    title: string;
    description: string;
    items: T[];
    activeItemId: string;
    onItemClick: (itemId: string) => void;
    contentMap: Record<string, (item: T) => React.ReactNode>;
}

interface DialogManagerProps {
    configs: Record<string, DialogConfig>;
}

export function DialogManager({ configs }: DialogManagerProps) {
    const activeConfig = Object.values(configs).find((config) => config.isOpen);

    if (!activeConfig) return null;

    return <SidebarDialog {...activeConfig} getIconComponent={getIconComponent} />;
}
