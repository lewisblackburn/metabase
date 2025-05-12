import { Badge } from '@/registry/new-york-v4/ui/badge';

import { Crown } from 'lucide-react';

export default function ProBadge() {
    return (
        <Badge variant='outline' className='w-fit gap-1 px-2 py-1 transition-colors delay-0 duration-75'>
            <Crown className='mb-0.5 !size-3 text-yellow-600 sm:!size-3.5' />
            <span>PRO</span>
        </Badge>
    );
}
