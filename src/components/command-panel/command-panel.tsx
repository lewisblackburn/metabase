'use client';

import * as React from 'react';

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
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';

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
                <CommandGroup heading='Suggestions'>
                    <CommandItem>
                        <Calendar />
                        <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                        <Smile />
                        <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                        <Calculator />
                        <span>Calculator</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading='Settings'>
                    <CommandItem>
                        <User />
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <CreditCard />
                        <span>Billing</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <Settings />
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
