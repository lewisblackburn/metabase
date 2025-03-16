import { ArrowDown, ArrowUp, Command, CornerDownLeft } from 'lucide-react';

export const SHORTCUTS = {
    COMMAND_PANEL: [
        {
            action: 'open',
            title: 'Open Command Panel',
            shortcut: 'Ctrl + K',
            description: 'Open the command panel to search for commands',
            short: 'to open',
            keys: [Command, 'K']
        },
        {
            action: 'navigate', // Fixed typo: 'aciton' -> 'action'
            title: 'Navigate Command Panel',
            shortcut: 'Arrow Up/Down',
            description: 'Navigate through the command panel',
            short: 'to navigate',
            keys: [ArrowUp, ArrowDown]
        },
        {
            action: 'select',
            title: 'Select Command',
            shortcut: 'Enter',
            description: 'Select the highlighted command',
            short: 'to select',
            keys: [CornerDownLeft]
        },
        {
            action: 'close',
            title: 'Close Command Panel',
            shortcut: 'Escape',
            description: 'Close the command panel',
            short: 'to close',
            keys: ['Esc']
        }
    ]
};
