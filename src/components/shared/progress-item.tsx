import React from 'react';

import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Progress } from '@/registry/new-york-v4/ui/progress';

import { LucideIcon } from 'lucide-react';

type ProgressItemProps = {
    icon?: LucideIcon;
    label: string;
    score: number;
    variant?: 'standard' | 'labelled';
};

const ProgressItem: React.FC<ProgressItemProps> = ({ icon: Icon, label, score, variant = 'standard' }) => {
    const scorePercentage = Math.floor(score * 100);

    if (variant === 'labelled') {
        return (
            <Badge variant='outline' className='w-full'>
                <div className='flex w-full items-center gap-2'>
                    <span className='font-semibold'>{label}</span>
                    <Progress value={scorePercentage} className='min-w-24' />
                    <span>{scorePercentage}%</span>
                </div>
            </Badge>
        );
    }

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2 text-sm'>
                {Icon && <Icon size='1em' />}
                <span>{label}</span>
            </div>
            <Badge variant='outline' className='w-full'>
                <div className='flex w-full items-center gap-2'>
                    <Progress value={scorePercentage} className='min-w-24' />
                    <span>{scorePercentage}%</span>
                </div>
            </Badge>
        </div>
    );
};

export default ProgressItem;
