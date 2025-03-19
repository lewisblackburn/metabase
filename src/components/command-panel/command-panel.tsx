'use client';

import * as React from 'react';

import { ALL_ACTIONS } from '@/constants/actions';
import { MEDIA_TYPE } from '@/constants/media';
import { CommandEmpty, CommandGroup, CommandList, CommandSeparator } from '@/registry/new-york-v4/ui/command';

import CommandDialog from './command-dialog';
import CommandInput from './command-input';
import Item, { ItemType } from './item';
import { CommandLoading } from 'cmdk';

const ALL_ITEMS: ItemType[] = [
    {
        id: '1',
        title: 'About Time',
        description: 'A new funny film about love. With a bit of time travel.',
        type: MEDIA_TYPE.MOVIE,
        lastOpened: '2025-02-01'
    },
    {
        id: '2',
        title: 'Mid Air',
        description: 'Paul Buchanan',
        type: MEDIA_TYPE.SONG,
        lastOpened: '2024-02-01'
    },
    {
        id: '3',
        title: 'The Office',
        description: '',
        type: MEDIA_TYPE.TV,
        lastOpened: '2023-02-01'
    },
    {
        id: '4',
        title: 'The Social Network',
        description: '',
        type: MEDIA_TYPE.MOVIE,
        lastOpened: '2022-02-01'
    },
    {
        id: '5',
        title: "The Queen's Gambit",
        description: '',
        type: MEDIA_TYPE.TV,
        lastOpened: '2021-02-01'
    },
    {
        id: '6',
        title: 'The Dark Knight',
        description: '',
        type: MEDIA_TYPE.MOVIE,
        lastOpened: '2020-02-01'
    },
    {
        id: '7',
        title: "Harry Potter and the Philosopher's Stone",
        description: '',
        type: MEDIA_TYPE.MOVIE,
        lastOpened: '2019-02-01'
    },
    {
        id: '8',
        title: 'Grand Theft Auto V',
        description: '',
        type: MEDIA_TYPE.GAME,
        lastOpened: '2018-02-01'
    },
    {
        id: '9',
        title: 'About Time',
        description: '',
        type: MEDIA_TYPE.SOUNDTRACK,
        lastOpened: '2017-02-01'
    },
    {
        id: '10',
        title: 'Rachel McAdams',
        description: '',
        type: MEDIA_TYPE.PERSON,
        lastOpened: '2016-02-01'
    },
    {
        id: '11',
        title: 'Domhnall Gleeson',
        description: '',
        type: MEDIA_TYPE.PERSON,
        lastOpened: '2015-02-01'
    },
    {
        id: '12',
        title: 'Warner Bros. Pictures',
        description: '',
        type: MEDIA_TYPE.COMPANY,
        lastOpened: '2014-02-01'
    },
    {
        id: '13',
        title: 'Harry Potter',
        description: '',
        type: MEDIA_TYPE.COLLECTION,
        lastOpened: '2013-02-01'
    },
    {
        id: '14',
        title: 'The Call of the Wild',
        description: '',
        type: MEDIA_TYPE.BOOK,
        lastOpened: '2012-02-01'
    }
];

export default function CommandPanel() {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [items, setItems] = React.useState<ItemType[]>([]);
    const isSearching = query.length > 0;

    React.useEffect(() => {
        setLoading(true);
        const filteredItems: ItemType[] = ALL_ITEMS.filter((item) => {
            if (isSearching) {
                return item.title.toLowerCase().includes(query.toLowerCase());
            }

            return true;
        });
        if (isSearching) setItems(filteredItems);
        setLoading(false);
    }, [query]);

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
            <CommandInput
                placeholder='Search for content and actions, or paste from clipboard'
                onValueChange={setQuery}
            />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {loading && <CommandLoading>loading...</CommandLoading>}
                <CommandGroup heading='All items'>
                    {items.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading='All actions'>
                    {ALL_ACTIONS.map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
