import { MEDIA_TYPE } from './media';
import { Edit, ExternalLink, Plus, Trash } from 'lucide-react';

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
