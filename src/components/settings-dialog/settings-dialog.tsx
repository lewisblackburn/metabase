'use client';

import * as React from 'react';

import { Button } from '@/registry/new-york-v4/ui/button';
import { Dialog, DialogContent } from '@/registry/new-york-v4/ui/dialog';
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

import {
    Bell,
    Check,
    Globe,
    Home,
    Keyboard,
    Link,
    Lock,
    Menu,
    MessageCircle,
    Paintbrush,
    Settings,
    Video,
    X
} from 'lucide-react';

const data = {
    nav: [
        { name: 'Notifications', icon: Bell },
        { name: 'Navigation', icon: Menu },
        { name: 'Home', icon: Home },
        { name: 'Appearance', icon: Paintbrush },
        { name: 'Messages & media', icon: MessageCircle },
        { name: 'Language & region', icon: Globe },
        { name: 'Accessibility', icon: Keyboard },
        { name: 'Mark as read', icon: Check },
        { name: 'Audio & video', icon: Video },
        { name: 'Connected accounts', icon: Link },
        { name: 'Privacy & visibility', icon: Lock },
        { name: 'Advanced', icon: Settings }
    ]
};

export function SettingsDialog() {
    const [open, setOpen] = React.useState(true);
    const [activeItem, setActiveItem] = React.useState('Messages & media');

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className='overflow-hidden p-0 md:max-h-[650px] md:max-w-[700px] lg:max-w-[800px]'>
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
                            <span>{activeItem}</span>
                        </header>
                        <main className='p-5'>content</main>
                    </div>
                </SidebarProvider>
            </DialogContent>
        </Dialog>
    );
}
