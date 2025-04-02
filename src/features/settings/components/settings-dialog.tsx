'use client';

import * as React from 'react';

import DialogContentNoClose from '@/components/shared/dialog-content-no-close';
import { getIconComponent } from '@/constants/icons.constant';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Dialog, DialogDescription, DialogTitle } from '@/registry/new-york-v4/ui/dialog';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider
} from '@/registry/new-york-v4/ui/sidebar';
import { RootState } from '@/store/store';

import { setActiveItemId, setSettingsDialogOpenState } from '../store/settings.slice';
import { Settings, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

const contentMap: Record<string, React.ReactNode> = {
    account: <div>account</div>,
    notifications: <div>notifications</div>
    // Add more as needed...
};

export function SettingsDialog() {
    const { isOpen, items, activeItemId } = useSelector((state: RootState) => state.settings);
    const dispatch = useDispatch();

    const activeItem = items.find((item) => item.id === activeItemId) ?? items[0];
    const ActiveIcon = activeItem ? getIconComponent(activeItem.icon) : getIconComponent('CircleHelp');

    const content = contentMap[activeItem.id] ?? <div>Coming soon...</div>;

    return (
        <Dialog open={isOpen} onOpenChange={(state) => dispatch(setSettingsDialogOpenState(state))}>
            <DialogTitle className='sr-only'>Settings</DialogTitle>
            <DialogDescription className='sr-only'>Configure your settings here.</DialogDescription>
            <DialogContentNoClose className='overflow-hidden p-0 md:max-h-[650px] md:max-w-[700px] lg:max-w-[800px]'>
                <SidebarProvider>
                    <Sidebar collapsible='none' className='border-border hidden w-64 border-r md:flex md:min-h-[600px]'>
                        <SidebarContent>
                            <div className='border-border flex h-14 items-center gap-2 border-b p-3 text-sm font-semibold'>
                                <Button variant='outline' size='icon' className='h-8 w-8' tabIndex={-1}>
                                    <Settings />
                                </Button>
                                <span>Settings</span>
                            </div>
                            <SidebarGroup>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {items.map((item) => {
                                            const Icon = getIconComponent(item.icon);

                                            return (
                                                <SidebarMenuItem key={item.name}>
                                                    <SidebarMenuButton
                                                        asChild
                                                        isActive={item.id === activeItemId}
                                                        onClick={() => dispatch(setActiveItemId(item.id))}>
                                                        <a href='#' className='flex items-center gap-3 px-4 py-2'>
                                                            <Icon className='size-4' />
                                                            <span>{item.name}</span>
                                                        </a>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            );
                                        })}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </SidebarContent>
                    </Sidebar>
                    <div className='w-full'>
                        <header className='border-border flex h-14 items-center gap-2 border-b p-3 text-sm font-semibold'>
                            <div className='flex items-center gap-2'>
                                <ActiveIcon className='size-4' />
                                <span>{activeItem.name}</span>
                            </div>
                            <Button
                                variant='outline'
                                size='icon'
                                className='ml-auto h-8 w-8'
                                onClick={() => dispatch(setSettingsDialogOpenState(false))}>
                                <X />
                            </Button>
                        </header>
                        <main className='p-5'>{content}</main>
                    </div>
                </SidebarProvider>
            </DialogContentNoClose>
        </Dialog>
    );
}
