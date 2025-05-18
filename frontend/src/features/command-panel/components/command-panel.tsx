'use client';

import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ALL_ACTIONS } from '@/constants/actions.constant';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { setQuery, toggleCommandPanelOpenState } from '@/features/command-panel/store/command-panel.slice';
import { useSearchUnifiedQuery } from '@/generated/graphql';
import { useDebounce } from '@/hooks/use-debounce';
import { Command, CommandEmpty, CommandGroup, CommandList, CommandSeparator } from '@/registry/new-york-v4/ui/command';
import { RootState } from '@/store/store';

import CommandDialog from './command-dialog';
import CommandInput from './command-input';
import CommandPanelSkeleton from './command-panel-skeleton';
import Item from './item';
import { useDispatch, useSelector } from 'react-redux';

export default function CommandPanel() {
    const { isOpen, query } = useSelector((state: RootState) => state.commandPanel);
    const dispatch = useDispatch();
    const router = useRouter();
    const isSearching = query.length > 0;
    const debouncedQuery = useDebounce(query, 300);

    const { data, isLoading } = useSearchUnifiedQuery({
        where: {
            title: {
                _ilike: `%${debouncedQuery}%`
            }
        }
    });

    const handleQueryChange = useCallback(
        (value: string) => {
            dispatch(setQuery(value));
        },
        [dispatch]
    );

    const handleSelect = useCallback(
        (item: { id?: any; type?: string | null }) => {
            if (!item.id || !item.type) return;
            const path = OBJECT_TYPE[item.type as keyof typeof OBJECT_TYPE].path;
            router.push(`/dashboard/${path}/${item.id}`);
            dispatch(toggleCommandPanelOpenState());
        },
        [dispatch, router]
    );

    const hasResults = data?.unified_search && data.unified_search.length > 0;

    return (
        <CommandDialog open={isOpen} onOpenChange={() => dispatch(toggleCommandPanelOpenState())}>
            <Command>
                <CommandInput
                    placeholder='Search for content and actions, or paste from clipboard'
                    onValueChange={handleQueryChange}
                />
                <CommandList>
                    {isSearching && (
                        <CommandGroup heading='Search results'>
                            {isLoading ? (
                                <CommandPanelSkeleton />
                            ) : hasResults ? (
                                data.unified_search.map((item) => (
                                    <Item
                                        key={`search-${item.id}`}
                                        item={{
                                            id: item.id as string,
                                            title: item.title as string,
                                            type: {
                                                type: item.type as string,
                                                name: OBJECT_TYPE[item.type as keyof typeof OBJECT_TYPE].name,
                                                background:
                                                    OBJECT_TYPE[item.type as keyof typeof OBJECT_TYPE].background,
                                                foreground:
                                                    OBJECT_TYPE[item.type as keyof typeof OBJECT_TYPE].foreground,
                                                border: OBJECT_TYPE[item.type as keyof typeof OBJECT_TYPE].border,
                                                icon: OBJECT_TYPE[item.type as keyof typeof OBJECT_TYPE].icon
                                            }
                                        }}
                                        onSelect={() => handleSelect(item)}
                                    />
                                ))
                            ) : (
                                <CommandEmpty>No results found.</CommandEmpty>
                            )}
                        </CommandGroup>
                    )}
                    <CommandSeparator />
                    {!isSearching && (
                        <CommandGroup heading='All actions' value='actions'>
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
