export type Shortcut = {
    id: string;
    key: string;
    title: string;
    description: string;
    enabled: boolean;
    global: boolean;
    scope?: string;
};

export const SHORTCUTS = {
    openCommandPanel: {
        id: 'openCommandPanel',
        key: 'ctrl+k',
        title: 'Open Command Panel',
        description: 'Open the command panel to search for objects',
        enabled: true,
        global: true
    },
    toggleSettings: {
        id: 'toggleSettings',
        key: 'ctrl+,',
        title: 'Open Settings',
        description: 'Open the settings dialog',
        enabled: true,
        global: true
    },
    navigateUp: {
        id: 'navigateUp',
        key: 'up',
        title: 'Navigate Up',
        description: 'Navigate up in the list',
        // NOTE: This is automatic and does not need to be set
        enabled: false,
        global: false,
        scope: 'modal'
    },
    navigateDown: {
        id: 'navigateDown',
        key: 'down',
        title: 'Navigate Down',
        description: 'Navigate down in the list',
        enabled: false,
        global: false,
        scope: 'modal'
    },
    toggleEditDialog: {
        id: 'toggleEditDialog',
        key: 'ctrl+e',
        title: 'Toggle Edit Dialog',
        description: 'Toggle the edit dialog for the selected item',
        enabled: true,
        global: false,
        scope: 'object'
    }
};
