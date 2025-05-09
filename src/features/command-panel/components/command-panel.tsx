'use client';

import * as React from 'react';

import { ALL_ACTIONS } from '@/constants/actions.constant';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { setQuery, toggleCommandPanelOpenState } from '@/features/command-panel/store/command-panel.slice';
import { Command, CommandEmpty, CommandGroup, CommandList, CommandSeparator } from '@/registry/new-york-v4/ui/command';
import { RootState } from '@/store/store';

import CommandDialog from './command-dialog';
import CommandInput from './command-input';
import Item, { ItemType } from './item';
import { useDispatch, useSelector } from 'react-redux';

const ALL_ITEMS: ItemType[] = [
    {
        id: '1',
        title: 'About Time',
        description: 'A new funny film about love. With a bit of time travel.',
        type: OBJECT_TYPE.MOVIE,
        lastOpened: '2025-02-01'
    },
    {
        id: '2',
        title: 'Mid Air',
        description: 'Paul Buchanan',
        type: OBJECT_TYPE.SONG,
        lastOpened: '2024-02-01'
    },
    {
        id: '3',
        title: 'The Office',
        description: '',
        type: OBJECT_TYPE.TV,
        lastOpened: '2023-02-01'
    },
    {
        id: '4',
        title: 'The Social Network',
        description: '',
        type: OBJECT_TYPE.MOVIE,
        lastOpened: '2022-02-01'
    },
    {
        id: '5',
        title: "The Queen's Gambit",
        description: '',
        type: OBJECT_TYPE.TV,
        lastOpened: '2021-02-01'
    },
    {
        id: '6',
        title: 'The Dark Knight',
        description: '',
        type: OBJECT_TYPE.MOVIE,
        lastOpened: '2020-02-01'
    },
    {
        id: '7',
        title: "Harry Potter and the Philosopher's Stone",
        description: '',
        type: OBJECT_TYPE.MOVIE,
        lastOpened: '2019-02-01'
    },
    {
        id: '8',
        title: 'Grand Theft Auto V',
        description: '',
        type: OBJECT_TYPE.GAME,
        lastOpened: '2018-02-01'
    },
    {
        id: '9',
        title: 'About Time',
        description: '',
        type: OBJECT_TYPE.SOUNDTRACK,
        lastOpened: '2017-02-01'
    },
    {
        id: '10',
        title: 'Rachel McAdams',
        description: '',
        type: OBJECT_TYPE.PERSON,
        lastOpened: '2016-02-01'
    },
    {
        id: '11',
        title: 'Domhnall Gleeson',
        description: '',
        type: OBJECT_TYPE.PERSON,
        lastOpened: '2015-02-01'
    },
    {
        id: '12',
        title: 'Warner Bros. Pictures',
        description: '',
        type: OBJECT_TYPE.COMPANY,
        lastOpened: '2014-02-01'
    },
    {
        id: '13',
        title: 'Harry Potter',
        description: '',
        type: OBJECT_TYPE.COLLECTION,
        lastOpened: '2013-02-01'
    },
    {
        id: '14',
        title: 'The Call of the Wild',
        description: '',
        type: OBJECT_TYPE.BOOK,
        lastOpened: '2012-02-01'
    }
];

export default function CommandPanel() {
    const { isOpen, query } = useSelector((state: RootState) => state.commandPanel);
    const dispatch = useDispatch();
    const isSearching = query.length > 0;

    const filteredItems = React.useMemo(() => {
        if (!isSearching) return [];

        const items = ALL_ITEMS.concat(ALL_ACTIONS);

        return items.filter((item) => {
            return item.title.toLowerCase().includes(query.toLowerCase());
        });
    }, [isSearching, query]);

    const recentItems = React.useMemo(() => {
        return ALL_ITEMS.filter((item) => {
            return item.lastOpened && new Date(item.lastOpened) > new Date('2023-01-01'); // More robust date comparison
        });
    }, []);

    return (
        <CommandDialog open={isOpen} onOpenChange={() => dispatch(toggleCommandPanelOpenState())}>
            <Command shouldFilter={false}>
                <CommandInput
                    placeholder='Search for content and actions, or paste from clipboard'
                    onValueChange={(value) => dispatch(setQuery(value))}
                />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {isSearching && filteredItems.length > 0 && (
                        <CommandGroup heading='Search results'>
                            {filteredItems.map((item) => (
                                <Item key={`search-${item.id}`} item={item} />
                            ))}
                        </CommandGroup>
                    )}
                    {/* NOTE: Only show when not searching */}
                    {!isSearching && (
                        <CommandGroup heading='Recently opened'>
                            {recentItems.map((item) => (
                                <Item key={`recent-${item.id}`} item={item} />
                            ))}
                        </CommandGroup>
                    )}
                    <CommandSeparator />
                    {!isSearching && (
                        <CommandGroup heading='All actions'>
                            {ALL_ACTIONS.map((item, index) => (
                                <Item key={index} item={item} />
                            ))}
                        </CommandGroup>
                    )}
                </CommandList>
            </Command>
        </CommandDialog>
    );
}
