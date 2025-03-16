'use client';

import * as React from 'react';

import { ACTION_TYPE } from '@/constants/actions';
import { MEDIA_TYPE } from '@/constants/media';
import { cn } from '@/lib/utils';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import {
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut
} from '@/registry/new-york-v4/ui/command';

import CommandDialog from './command-dialog';
import CommandInput from './command-input';
import { Hand, Inbox, LibraryBig, Settings } from 'lucide-react';

const RECENTLY_OPENED = [
    {
        title: 'About Time',
        type: MEDIA_TYPE.MOVIE
    },
    {
        title: 'The Office',
        type: MEDIA_TYPE.TV
    },
    {
        title: 'The Social Network',
        type: MEDIA_TYPE.MOVIE
    },
    {
        title: "The Queen's Gambit",
        type: MEDIA_TYPE.TV
    },
    {
        title: 'The Dark Knight',
        type: MEDIA_TYPE.MOVIE
    },
    {
        title: 'Grand Theft Auto V',
        type: MEDIA_TYPE.GAME
    }
];
const ALL_ACTIONS = [
    {
        title: 'Create new "Movie"',
        type: ACTION_TYPE.CREATE,
        icon: MEDIA_TYPE.MOVIE.icon,
        background: MEDIA_TYPE.MOVIE.background,
        foreground: MEDIA_TYPE.MOVIE.foreground
    },
    {
        title: 'Create new "TV Show"',
        type: ACTION_TYPE.CREATE,
        icon: MEDIA_TYPE.TV.icon,
        background: MEDIA_TYPE.TV.background,
        foreground: MEDIA_TYPE.TV.foreground
    },
    {
        title: 'Create new "Person"',
        type: ACTION_TYPE.CREATE,
        icon: MEDIA_TYPE.PERSON.icon,
        background: MEDIA_TYPE.PERSON.background,
        foreground: MEDIA_TYPE.PERSON.foreground
    },
    {
        title: 'Create new "Book"',
        type: ACTION_TYPE.CREATE,
        icon: MEDIA_TYPE.BOOK.icon,
        background: MEDIA_TYPE.BOOK.background,
        foreground: MEDIA_TYPE.BOOK.foreground
    },
    {
        title: 'Create new "Game"',
        type: ACTION_TYPE.CREATE,
        icon: MEDIA_TYPE.GAME.icon,
        background: MEDIA_TYPE.GAME.background,
        foreground: MEDIA_TYPE.GAME.foreground
    },
    {
        title: 'Create new "Collection"',
        type: ACTION_TYPE.CREATE,
        icon: MEDIA_TYPE.COLLECTION.icon,
        background: MEDIA_TYPE.COLLECTION.background,
        foreground: MEDIA_TYPE.COLLECTION.foreground
    },
    {
        title: 'Create new "Company"',
        type: ACTION_TYPE.CREATE,
        icon: MEDIA_TYPE.COMPANY.icon,
        foreground: MEDIA_TYPE.COMPANY.foreground,
        background: MEDIA_TYPE.COMPANY.background
    },
    {
        title: 'Open Settings',
        type: ACTION_TYPE.OPEN.type,
        icon: Settings,
        background: 'bg-gray-300/20',
        foreground: 'text-gray-800',
        shortcut: 'Ctrl ,'
    },
    {
        title: 'Help: Open Metabase documentation',
        type: ACTION_TYPE.OPEN.type,
        icon: LibraryBig,
        background: 'bg-yellow-300/20',
        foreground: 'text-yellow-800'
    },
    {
        title: 'Send feedback or share a bug',
        type: ACTION_TYPE.OPEN.type,
        icon: Inbox,
        background: 'bg-blue-300/20',
        foreground: 'text-blue-800'
    },
    {
        title: 'Questions: Open our Discord community',
        type: ACTION_TYPE.OPEN.type,
        icon: Hand,
        background: 'bg-purple-300/20',
        foreground: 'text-purple-800'
    }
];

export default function CommandPanel() {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);

        return () => document.removeEventListener('keydown', down);
    }, []);

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder='Search for content and actions, or paste from clipboard' />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading='Recently opened'>
                    {RECENTLY_OPENED.map((item, index) => (
                        <CommandItem key={index} className='text-xs'>
                            <div className={cn(item.type.background, 'p-1')}>
                                <item.type.icon className={cn(item.type.foreground, '!size-3')} />
                            </div>
                            <span>{item.title}</span>
                            <Badge
                                className={cn(
                                    item.type.background,
                                    item.type.foreground,
                                    item.type.border,
                                    'ml-auto flex items-center rounded-sm'
                                )}>
                                <item.type.icon className={cn(item.type.foreground, '!mt-0.5 !size-2.5')} />
                                <span>{item.type.name}</span>
                            </Badge>
                        </CommandItem>
                    ))}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading='All actions'>
                    {ALL_ACTIONS.map((item, index) => (
                        <CommandItem key={index} className='text-xs'>
                            <div className={cn(item.background, 'p-1')}>
                                <item.icon className={cn(item.foreground, '!size-3')} />
                            </div>
                            <span>{item.title}</span>
                            {item.shortcut && <CommandShortcut>{item.shortcut}</CommandShortcut>}
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
