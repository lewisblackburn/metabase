import { ItemType } from '@/features/command-panel/components/item';
import { toggleCommandPanelOpenState } from '@/features/command-panel/store/command-panel.slice';

import { OBJECT_TYPE } from './objects.constant';
import { SHORTCUTS } from './shortcuts.constant';
import { Edit, ExternalLink, Hand, Inbox, LibraryBig, Plus, Settings, Trash } from 'lucide-react';
import { useDispatch } from 'react-redux';

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
            name: OBJECT_TYPE.MOVIE.name,
            background: OBJECT_TYPE.MOVIE.background,
            foreground: OBJECT_TYPE.MOVIE.foreground,
            border: OBJECT_TYPE.MOVIE.border,
            icon: OBJECT_TYPE.MOVIE.icon
        },
        href: `/dashboard/${OBJECT_TYPE.MOVIE.path}/new`
    },
    {
        id: 'create-tv',
        title: 'Create new "TV Show"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: OBJECT_TYPE.TV.name,
            background: OBJECT_TYPE.TV.background,
            foreground: OBJECT_TYPE.TV.foreground,
            border: OBJECT_TYPE.TV.border,
            icon: OBJECT_TYPE.TV.icon
        },
        href: `#`
    },
    {
        id: 'create-person',
        title: 'Create new "Person"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: OBJECT_TYPE.PERSON.name,
            background: OBJECT_TYPE.PERSON.background,
            foreground: OBJECT_TYPE.PERSON.foreground,
            border: OBJECT_TYPE.PERSON.border,
            icon: OBJECT_TYPE.PERSON.icon
        },
        href: `/dashboard/${OBJECT_TYPE.PERSON.path}/new`
    },
    {
        id: 'create-song',
        title: 'Create new "Song"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: OBJECT_TYPE.SONG.name,
            background: OBJECT_TYPE.SONG.background,
            foreground: OBJECT_TYPE.SONG.foreground,
            border: OBJECT_TYPE.SONG.border,
            icon: OBJECT_TYPE.SONG.icon
        },
        href: `/dashboard/${OBJECT_TYPE.SONG.path}/new`
    },
    {
        id: 'create-book',
        title: 'Create new "Book"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: OBJECT_TYPE.BOOK.name,
            background: OBJECT_TYPE.BOOK.background,
            foreground: OBJECT_TYPE.BOOK.foreground,
            border: OBJECT_TYPE.BOOK.border,
            icon: OBJECT_TYPE.BOOK.icon
        },
        href: `/dashboard/${OBJECT_TYPE.BOOK.path}/new`
    },
    {
        id: 'create-game',
        title: 'Create new "Game"',
        type: {
            type: ACTION_TYPE.CREATE.type,
            name: OBJECT_TYPE.GAME.name,
            background: OBJECT_TYPE.GAME.background,
            foreground: OBJECT_TYPE.GAME.foreground,
            border: OBJECT_TYPE.GAME.border,
            icon: OBJECT_TYPE.GAME.icon
        },
        href: '#'
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
        },
        href: '#'
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
        },
        href: '#'
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
        },
        href: '#'
    }
];
