import { ItemType } from '@/features/command-panel/components/item';

import { OBJECT_TYPE } from './objects.constant';
import { SHORTCUTS } from './shortcuts.constant';
import { Edit, ExternalLink, Hand, Inbox, LibraryBig, Plus, Settings, Trash } from 'lucide-react';

export const ACTION_TYPE = {
    CREATE: {
        type: 'create',
        icon: Plus
    },
    DELETE: {
        type: 'delete',
        icon: Trash
    },
    UPDATE: {
        type: 'update',
        icon: Edit
    },
    OPEN: {
        type: 'open',
        icon: ExternalLink
    }
};

export const ALL_ACTIONS: ItemType[] = [
    {
        id: 'create-movie',
        title: 'Create new "Movie"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: OBJECT_TYPE.movie.name,
            background: OBJECT_TYPE.movie.background,
            foreground: OBJECT_TYPE.movie.foreground,
            border: OBJECT_TYPE.movie.border,
            icon: OBJECT_TYPE.movie.icon
        }
    },
    {
        id: 'create-tv',
        title: 'Create new "TV Show"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: OBJECT_TYPE.tv.name,
            background: OBJECT_TYPE.tv.background,
            foreground: OBJECT_TYPE.tv.foreground,
            border: OBJECT_TYPE.tv.border,
            icon: OBJECT_TYPE.tv.icon
        }
    },
    {
        id: 'create-person',
        title: 'Create new "Person"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: OBJECT_TYPE.person.name,
            background: OBJECT_TYPE.person.background,
            foreground: OBJECT_TYPE.person.foreground,
            border: OBJECT_TYPE.person.border,
            icon: OBJECT_TYPE.person.icon
        }
    },
    {
        id: 'create-song',
        title: 'Create new "Song"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: OBJECT_TYPE.song.name,
            background: OBJECT_TYPE.song.background,
            foreground: OBJECT_TYPE.song.foreground,
            border: OBJECT_TYPE.song.border,
            icon: OBJECT_TYPE.song.icon
        }
    },
    {
        id: 'create-book',
        title: 'Create new "Book"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: OBJECT_TYPE.book.name,
            background: OBJECT_TYPE.book.background,
            foreground: OBJECT_TYPE.book.foreground,
            border: OBJECT_TYPE.book.border,
            icon: OBJECT_TYPE.book.icon
        }
    },
    {
        id: 'create-game',
        title: 'Create new "Game"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: OBJECT_TYPE.game.name,
            background: OBJECT_TYPE.game.background,
            foreground: OBJECT_TYPE.game.foreground,
            border: OBJECT_TYPE.game.border,
            icon: OBJECT_TYPE.game.icon
        }
    },
    {
        id: 'open-settings',
        title: 'Open Settings',
        type: {
            type: ACTION_TYPE.OPEN.type,
            name: 'Settings',
            background: 'bg-gray-300/20',
            foreground: 'text-gray-800',
            border: 'border-gray-400/60',
            icon: Settings
        },
        shortcut: SHORTCUTS.toggleSettings.key
    },
    {
        id: 'open-documentation',
        title: 'Help: Open Metabase documentation',
        type: {
            type: ACTION_TYPE.OPEN.type,
            name: 'Documentation',
            background: 'bg-yellow-300/20',
            foreground: 'text-yellow-800',
            border: 'border-yellow-400/60',
            icon: LibraryBig
        }
    },
    {
        id: 'open-feedback',
        title: 'Send feedback or share a bug',
        type: {
            type: ACTION_TYPE.OPEN.type,
            name: 'Feedback',
            background: 'bg-blue-300/20',
            foreground: 'text-blue-800',
            border: 'border-blue-400/60',
            icon: Inbox
        }
    },
    {
        id: 'open-discord',
        title: 'Questions: Open our Discord community',
        type: {
            type: ACTION_TYPE.OPEN.type,
            name: 'Community',
            background: 'bg-purple-300/20',
            foreground: 'text-purple-800',
            border: 'border-purple-400/60',
            icon: Hand
        }
    }
];
