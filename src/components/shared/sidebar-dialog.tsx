import * as React from 'react';

import { IconType } from '@/constants/icons.constant';
import { cn } from '@/lib/utils';
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

import DialogContentNoClose from './dialog-content-no-close';
import { X } from 'lucide-react';

export interface SidebarItem {
    id: string;
    name: string;
    icon: IconType;
    iconColor?: string;
    description?: string;
}

interface SidebarDialogProps<T extends SidebarItem> {
    isOpen: boolean;
    onOpenChange: (state: boolean) => void;
    title: string;
    description: string;
    items: T[];
    activeItemId: string;
    onItemClick: (itemId: string) => void;
    contentMap: Record<string, (item: T) => React.ReactNode>;
    getIconComponent: (
        icon: IconType
    ) => React.ComponentType<{ className?: string }> | React.FC<{ className?: string }>;
    className?: string;
}

export function SidebarDialog<T extends SidebarItem>({
    isOpen,
    onOpenChange,
    title,
    description,
    items,
    activeItemId,
    onItemClick,
    contentMap,
    getIconComponent,
    className
}: SidebarDialogProps<T>) {
    const activeItem = items.find((item) => item.id === activeItemId) ?? items[0];
    const ActiveIcon = activeItem ? getIconComponent(activeItem.icon as IconType) : getIconComponent('CircleHelp');
    const content = contentMap[activeItem.id]?.(activeItem) ?? <div>Coming soon...</div>;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTitle className='sr-only'>{title}</DialogTitle>
            <DialogDescription className='sr-only'>{description}</DialogDescription>
            <DialogContentNoClose
                className={cn('overflow-hidden p-0 md:max-h-[1000px] md:max-w-[700px] lg:max-w-[1500px]', className)}>
                <SidebarProvider>
                    <Sidebar collapsible='none' className='border-border hidden w-64 border-r md:flex md:min-h-[600px]'>
                        <SidebarContent>
                            <div className='border-border flex h-14 items-center gap-2 border-b p-3 text-sm font-semibold'>
                                <Button variant='outline' size='icon' className='size-6' tabIndex={-1}>
                                    <ActiveIcon className='size-3.5' />
                                </Button>
                                <span>{title}</span>
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
                                                        onClick={() => onItemClick(item.id)}>
                                                        <a href='#' className='flex items-center gap-3 px-4 py-2'>
                                                            <Icon className='size-3.5' />
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
                            <span>{activeItem.name}</span>
                            <Button
                                variant='outline'
                                size='icon'
                                className='ml-auto h-8 w-8'
                                onClick={() => onOpenChange(false)}>
                                <X />
                            </Button>
                        </header>
                        <div className='border-border flex items-center gap-3 border-b p-5'>
                            <div className='border-border bg-muted/20 rounded-md border p-4'>
                                <ActiveIcon className={cn('size-6', activeItem.iconColor)} />
                            </div>
                            <div className='flex flex-col gap-0'>
                                <h5 className='text-sm font-semibold'>{activeItem.name}</h5>
                                {activeItem.description && (
                                    <span className='text-muted-foreground text-sm'>{activeItem.description}</span>
                                )}
                            </div>
                        </div>
                        <main className='max-h-[1000px] overflow-y-auto p-5 pb-48'>{content}</main>
                    </div>
                </SidebarProvider>
            </DialogContentNoClose>
        </Dialog>
    );
}
