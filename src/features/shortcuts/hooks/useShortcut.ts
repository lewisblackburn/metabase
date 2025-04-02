import { SHORTCUTS } from '@/constants/shortcuts.constant';
import { RootState } from '@/store/store';

import { useSelector } from 'react-redux';

export const useShortcut = (id: keyof typeof SHORTCUTS) => {
    const shortcut = useSelector((state: RootState) => state.shortcuts.shortcuts[id]);

    return shortcut;
};
