import { ItemType } from '@/components/command-panel/item';

import { MEDIA_TYPE } from './media';
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
            name: MEDIA_TYPE.MOVIE.name,
            background: MEDIA_TYPE.MOVIE.background,
            foreground: MEDIA_TYPE.MOVIE.foreground,
            border: MEDIA_TYPE.MOVIE.border,
            icon: MEDIA_TYPE.MOVIE.icon
        }
    },
    {
        id: 'create-tv',
        title: 'Create new "TV Show"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: MEDIA_TYPE.TV.name,
            background: MEDIA_TYPE.TV.background,
            foreground: MEDIA_TYPE.TV.foreground,
            border: MEDIA_TYPE.TV.border,
            icon: MEDIA_TYPE.TV.icon
        }
    },
    {
        id: 'create-person',
        title: 'Create new "Person"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: MEDIA_TYPE.PERSON.name,
            background: MEDIA_TYPE.PERSON.background,
            foreground: MEDIA_TYPE.PERSON.foreground,
            border: MEDIA_TYPE.PERSON.border,
            icon: MEDIA_TYPE.PERSON.icon
        }
    },
    {
        id: 'create-song',
        title: 'Create new "Song"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: MEDIA_TYPE.SONG.name,
            background: MEDIA_TYPE.SONG.background,
            foreground: MEDIA_TYPE.SONG.foreground,
            border: MEDIA_TYPE.SONG.border,
            icon: MEDIA_TYPE.SONG.icon
        }
    },
    {
        id: 'create-book',
        title: 'Create new "Book"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: MEDIA_TYPE.BOOK.name,
            background: MEDIA_TYPE.BOOK.background,
            foreground: MEDIA_TYPE.BOOK.foreground,
            border: MEDIA_TYPE.BOOK.border,
            icon: MEDIA_TYPE.BOOK.icon
        }
    },
    {
        id: 'create-game',
        title: 'Create new "Game"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: MEDIA_TYPE.GAME.name,
            background: MEDIA_TYPE.GAME.background,
            foreground: MEDIA_TYPE.GAME.foreground,
            border: MEDIA_TYPE.GAME.border,
            icon: MEDIA_TYPE.GAME.icon
        }
    },
    {
        id: 'create-collection',
        title: 'Create new "Collection"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: MEDIA_TYPE.COLLECTION.name,
            background: MEDIA_TYPE.COLLECTION.background,
            foreground: MEDIA_TYPE.COLLECTION.foreground,
            border: MEDIA_TYPE.COLLECTION.border,
            icon: MEDIA_TYPE.COLLECTION.icon
        }
    },
    {
        id: 'create-company',
        title: 'Create new "Company"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: MEDIA_TYPE.COMPANY.name,
            background: MEDIA_TYPE.COMPANY.background,
            foreground: MEDIA_TYPE.COMPANY.foreground,
            border: MEDIA_TYPE.COMPANY.border,
            icon: MEDIA_TYPE.COMPANY.icon
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
        shortcut: 'Ctrl ,'
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
