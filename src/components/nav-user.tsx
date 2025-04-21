'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { setSettingsDialogOpenState } from '@/features/settings/store/settings.slice';
import { ShortcutDisplay } from '@/features/shortcuts/components/shortcut-display';
import { useShortcut } from '@/features/shortcuts/hooks/useShortcut';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/registry/new-york-v4/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/registry/new-york-v4/ui/sidebar';
import { User, useSignOut } from '@nhost/nextjs';

import { BadgeCheck, Bell, Bookmark, ChevronsUpDown, CreditCard, Heart, LogOut, Settings, Sparkles, Star, User, User, UserIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

export function NavUser({ user }: { user: User }) {
    const { signOut, isSuccess } = useSignOut();
    const dispatch = useDispatch();
    const toggleSettings = useShortcut('toggleSettings');
    const { isMobile } = useSidebar();
    const router = useRouter();
    const handleLogout = async () => {
        await signOut();
    };

    React.useEffect(() => {
        if (isSuccess) router.push('/authentication/login');
    }, [isSuccess, router]);

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size='lg'
                            className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground md:h-8 md:p-0'>
                            <Avatar className='h-8 w-8 rounded-lg'>
                                <AvatarImage src={user.avatarUrl} alt={user.displayName} />
                                <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                            </Avatar>
                            <div className='grid flex-1 text-left text-sm leading-tight'>
                                <span className='truncate font-medium'>{user.displayName}</span>
                                <span className='truncate text-xs'>{user.email}</span>
                            </div>
                            <ChevronsUpDown className='ml-auto size-4' />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
                        side={isMobile ? 'bottom' : 'right'}
                        align='end'
                        sideOffset={4}>
                        <DropdownMenuLabel className='p-0 font-normal'>
                            <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                                <Avatar className='h-8 w-8 rounded-lg'>
                                    <AvatarImage src={user.avatarUrl} alt={user.displayName} />
                                    <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                                </Avatar>
                                <div className='grid flex-1 text-left text-sm leading-tight'>
                                    <span className='truncate font-medium'>{user.displayName}</span>
                                    <span className='truncate text-xs'>{user.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
     <DropdownMenuItem>
                                <Sparkles />
                                Recommendations
                            </DropdownMenuItem>
     <DropdownMenuItem>
                                <Star />
                                Ratings
                            </DropdownMenuItem>
     <DropdownMenuItem>
                                <Bookmark />
                                Lists
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Heart />
                                Favourites
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <Link href='/dashboard/profile' >
                            <DropdownMenuItem>
                                <UserIcon />
                                Profile
                            </DropdownMenuItem>
                            </Link>
                       
                            <DropdownMenuItem>
                                <Bell />
                                Notifications
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => dispatch(setSettingsDialogOpenState(true))}>
                                <Settings />
                                <span>Settings</span>
                                <div className='ml-auto'>
                                    {toggleSettings && <ShortcutDisplay combo={toggleSettings.key} />}
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleLogout()}>
                            <LogOut />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
