'use client';

import * as React from 'react';

import DialogContentNoClose from '@/components/shared/dialog-content-no-close';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Dialog, DialogTitle } from '@/registry/new-york-v4/ui/dialog';
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

import { toggleSettingsDialogOpenState } from '../store/settings.slice';
import {
    Bell,
    Code,
    CreditCard,
    HardDrive,
    LanguagesIcon,
    Lock,
    Paintbrush,
    Plug,
    Settings,
    User,
    X
} from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

// TODO: Move this logic to redux store
const data = {
    nav: [
        { name: 'Account', icon: User },
        {
            name: 'Notifications',
            icon: Bell
        },
        { name: 'Language', icon: LanguagesIcon },
        { name: 'Password & Authentication', icon: Lock },
        { name: 'Subscription & Billing', icon: CreditCard },
        { name: 'Backup', icon: HardDrive },
        { name: 'Metabase API', icon: Code },
        {
            name: 'Appearance',
            icon: Paintbrush
        },
        {
            name: 'Integrations',
            icon: Plug
        }
    ]
};

export function SettingsDialog() {
    const isOpen = useSelector((state: RootState) => state.settings.settingsDialogOpen);
    const dispatch = useDispatch();
    // TODO: Move this logic to redux store
    const [activeItem, setActiveItem] = React.useState('Account');

    return (
        <Dialog open={isOpen} onOpenChange={() => dispatch(toggleSettingsDialogOpenState())}>
            <DialogTitle className='sr-only'>Settings</DialogTitle>
            <DialogContentNoClose className='overflow-hidden p-0 md:max-h-[650px] md:max-w-[700px] lg:max-w-[800px]'>
                <SidebarProvider>
                    <Sidebar collapsible='none' className='border-border hidden w-64 border-r md:flex md:min-h-[600px]'>
                        <SidebarContent>
                            <div className='border-border flex h-14 items-center gap-2 border-b p-3 text-sm font-semibold'>
                                <Button variant='outline' size='icon' className='h-8 w-8'>
                                    <Settings />
                                </Button>
                                <span>Settings</span>
                            </div>
                            <SidebarGroup>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {data.nav.map((item) => (
                                            <SidebarMenuItem key={item.name}>
                                                <SidebarMenuButton
                                                    asChild
                                                    isActive={item.name === activeItem}
                                                    onClick={() => setActiveItem(item.name)}>
                                                    <a href='#' className='flex items-center gap-3 px-4 py-2'>
                                                        <item.icon className='h-4 w-4 flex-shrink-0' />
                                                        <span>{item.name}</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </SidebarContent>
                    </Sidebar>
                    <div className='w-full'>
                        <header className='border-border flex h-14 items-center gap-2 border-b p-3 text-sm font-semibold'>
                            <div>
                                {/* TODO: Icon here matching that of view */}
                                <span>{activeItem}</span>
                            </div>
                            <Button
                                variant='outline'
                                size='icon'
                                className='ml-auto h-8 w-8'
                                onClick={() => dispatch(toggleSettingsDialogOpenState())}>
                                <X />
                            </Button>
                        </header>
                        <main className='p-5'>content</main>
                    </div>
                </SidebarProvider>
            </DialogContentNoClose>
        </Dialog>
    );
}
