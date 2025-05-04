'use client';

import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { toggleSettingsDialogOpenState } from '@/features/settings/store/settings.slice';
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
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from '@/registry/new-york-v4/ui/dropdown-menu';
import { User, useSignOut } from '@nhost/nextjs';

import {
    BadgeCheck,
    Bell,
    Bookmark,
    ChevronsUpDown,
    Cloud,
    CreditCard,
    Github,
    Heart,
    Keyboard,
    LifeBuoy,
    LogIn,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    Sparkles,
    Star,
    UserIcon,
    UserPlus,
    Users
} from 'lucide-react';
import { useDispatch } from 'react-redux';

export function NavUser({ user }: { user: User | null }) {
    const { signOut, isSuccess } = useSignOut();
    const dispatch = useDispatch();
    const toggleSettings = useShortcut('toggleSettings');
    const router = useRouter();
    const handleLogout = async () => {
        await signOut();
    };

    React.useEffect(() => {
        if (isSuccess) router.push('/authentication/login');
    }, [isSuccess, router]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className='size-8 cursor-pointer'>
                    <AvatarImage src={user?.avatarUrl} alt={`@${user?.displayName ?? 'user'}`} />
                    <AvatarFallback>
                        <UserIcon className='size-3.5' />
                        <span className='sr-only'>@{user?.displayName}</span>
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
                {user ? (
                    <>
                        <DropdownMenuLabel>
                            <Link href={`/dashboard/profile/${user.id}`} className='flex items-center gap-2'>
                                <Avatar className='size-6'>
                                    <AvatarImage src={user.avatarUrl} alt={`@${user.displayName ?? 'user'}`} />
                                    <AvatarFallback>
                                        <UserIcon className='size-3.5' />
                                        <span className='sr-only'>@{user.displayName}</span>
                                    </AvatarFallback>
                                </Avatar>
                                <span>{user.displayName}</span>
                            </Link>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={() => dispatch(toggleSettingsDialogOpenState())}>
                                <Settings />
                                <span>Settings</span>
                                <DropdownMenuShortcut>
                                    <ShortcutDisplay combo={toggleSettings.key} />
                                </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem disabled>
                                <Keyboard />
                                <span>Keyboard shortcuts</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem disabled>
                            <Cloud />
                            <span>API</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            <LogOut />
                            <span>Log out</span>
                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </>
                ) : (
                    <Link href='/authentication/login'>
                        <DropdownMenuItem>
                            <LogIn />
                            <span>Log In</span>
                        </DropdownMenuItem>
                    </Link>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
