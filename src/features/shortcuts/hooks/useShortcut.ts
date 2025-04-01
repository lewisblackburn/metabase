import { RootState } from '@/store/store';

import { useSelector } from 'react-redux';

export const useShortcut = (id: string) => {
    const shortcut = useSelector((state: RootState) => state.shortcuts.shortcuts[id]);

    return shortcut;
};
