import React from 'react';

import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Progress } from '@/registry/new-york-v4/ui/progress';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/new-york-v4/ui/tooltip';

import { Loader2, LucideIcon } from 'lucide-react';

type ProgressItemProps = {
    icon?: LucideIcon;
    label: string;
    score: number;
    variant?: 'standard' | 'labelled';
    onClick?: () => void;
    loading?: boolean;
};

const ProgressItem: React.FC<ProgressItemProps> = ({
    icon: Icon,
    label,
    score,
    variant = 'standard',
    onClick,
    loading
}) => {
    if (variant === 'standard') {
        return (
            <Tooltip>
                <TooltipTrigger>
                    <Badge variant='outline' className='hover:bg-accent w-full' onClick={onClick}>
                        <div className='flex w-full items-center gap-2'>
                            <span className='font-semibold'>{label}</span>
                            <Progress value={score} className='min-w-24' />
                            {loading ? <Loader2 className='size-4 animate-spin' /> : <span>{score}%</span>}
                        </div>
                    </Badge>
                </TooltipTrigger>
                <TooltipContent>Click to compute the content score</TooltipContent>
            </Tooltip>
        );
    }

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2 text-sm'>
                {Icon && <Icon size='1em' />}
                <span>{label}</span>
            </div>
            <Tooltip>
                <TooltipTrigger>
                    <Badge variant='outline' className='hover:bg-accent w-full' onClick={onClick}>
                        <div className='flex w-full items-center gap-2'>
                            <Progress value={score} className='min-w-24' />
                            {loading ? <Loader2 className='size-4 animate-spin' /> : <span>{score}%</span>}
                        </div>
                    </Badge>
                </TooltipTrigger>
                <TooltipContent>Click to compute the content score</TooltipContent>
            </Tooltip>
        </div>
    );
};

export default ProgressItem;
