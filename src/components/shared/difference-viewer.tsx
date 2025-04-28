import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar';

import { UserIcon } from 'lucide-react';

interface DifferenceViewerProps {
    diff: Record<string, [string, string]>;
    avatarUrl?: string;
    displayName?: string;
}

const DifferenceViewer: React.FC<DifferenceViewerProps> = ({ diff, avatarUrl, displayName }) => {
    const formattedDiff = Object.entries(diff).reduce(
        (acc, [field, [oldVal, newVal]]) => {
            acc[field] = {
                removed: oldVal,
                added: newVal
            };
            return acc;
        },
        {} as Record<string, { removed: string; added: string }>
    );

    const formatJsonWithHighlights = () => {
        const jsonString = JSON.stringify(formattedDiff, null, 2);

        const withRemovedHighlighted = jsonString.replace(
            /"removed": "(.*?)"/g,
            '"removed": "<span class="text-red-600 line-through">$1</span>"'
        );

        const withAddedHighlighted = withRemovedHighlighted.replace(
            /"added": "(.*?)"/g,
            '"added": "<span class="text-green-600">$1</span>"'
        );

        return withAddedHighlighted;
    };

    return (
        <div className='w-full'>
            <div className='overflow-hidden rounded-md border border-gray-200'>
                <div className='flex items-center border-b border-gray-200 bg-gray-50 p-2'>
                    <span className='text-xs font-medium text-gray-500'>Changes</span>
                </div>

                <pre className='m-0 overflow-x-auto bg-gray-50 p-4 text-sm'>
                    <code
                        className='font-mono text-gray-800'
                        dangerouslySetInnerHTML={{ __html: formatJsonWithHighlights() }}
                    />
                </pre>
                <div className='flex items-center gap-1 border-t border-gray-200 bg-gray-50 p-2'>
                    <Avatar className='size-5 shrink-0 cursor-pointer border'>
                        <AvatarImage src={avatarUrl} alt={`@${displayName}`} />
                        <AvatarFallback>
                            <UserIcon className='size-3' />
                            <span className='sr-only'>@{displayName}</span>
                        </AvatarFallback>
                    </Avatar>
                    <span className='text-xs text-gray-500'>
                        Modified by <span className='font-medium text-gray-700'>{displayName}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DifferenceViewer;
