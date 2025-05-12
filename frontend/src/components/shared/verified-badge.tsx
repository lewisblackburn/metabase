import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/new-york-v4/ui/tooltip';

import { Verified } from 'lucide-react';

export default function VerifiedBadge() {
    return (
        <Tooltip>
            <TooltipTrigger>
                <Verified className='mt-0.5 size-4 fill-green-500 text-white sm:size-5' />
            </TooltipTrigger>
            <TooltipContent className='flex items-center gap-2 rounded-md border bg-white p-1'>
                <Verified className='size-5 fill-green-500 text-white' />
                <span className='text-sm font-semibold'>Verified</span>
            </TooltipContent>
        </Tooltip>
    );
}
