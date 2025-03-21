'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';

import { ChevronDown, ChevronUp } from 'lucide-react';

export enum VoteStatus {
    upvoted,
    downvoted,
    none
}

interface VoteButtonsProps {
    initialVotes: number;
    initialStatus?: VoteStatus;
    onVote?: (newStatus: VoteStatus) => void;
}

export function VoteButtons({ initialVotes, initialStatus = VoteStatus.none, onVote }: VoteButtonsProps) {
    const [votes, setVotes] = useState(initialVotes);
    const [status, setStatus] = useState<VoteStatus>(initialStatus);

    const handleUpvote = () => {
        let newStatus: VoteStatus;
        if (status === VoteStatus.upvoted) {
            setVotes(votes - 1);
            newStatus = VoteStatus.none;
        } else if (status === VoteStatus.downvoted) {
            setVotes(votes + 2);
            newStatus = VoteStatus.upvoted;
        } else {
            setVotes(votes + 1);
            newStatus = VoteStatus.upvoted;
        }
        setStatus(newStatus);
        onVote?.(newStatus);
    };

    const handleDownvote = () => {
        let newStatus: VoteStatus;
        if (status === VoteStatus.downvoted) {
            setVotes(votes + 1);
            newStatus = VoteStatus.none;
        } else if (status === VoteStatus.upvoted) {
            setVotes(votes - 2);
            newStatus = VoteStatus.downvoted;
        } else {
            setVotes(votes - 1);
            newStatus = VoteStatus.downvoted;
        }
        setStatus(newStatus);
        onVote?.(newStatus);
    };

    return (
        <div className='flex h-fit w-10 flex-col items-center gap-1 rounded-md border shadow-sm'>
            <Button
                variant='ghost'
                size='icon'
                className={cn(
                    'transition-transform duration-100 hover:scale-110 hover:text-orange-500',
                    status === VoteStatus.upvoted && 'text-orange-500'
                )}
                onClick={handleUpvote}>
                <ChevronUp size={18} />
            </Button>
            <span className='text-sm font-medium'>{votes}</span>
            <Button
                variant='ghost'
                size='icon'
                className={cn(
                    'transition-transform duration-100 hover:scale-110 hover:text-blue-500',
                    status === VoteStatus.downvoted && 'text-blue-500'
                )}
                onClick={handleDownvote}>
                <ChevronDown size={18} />
            </Button>
        </div>
    );
}
