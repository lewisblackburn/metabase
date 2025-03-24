import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar';
import { Card, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';

import Rating from './rating';
import { VoteButtons, type VoteStatus } from './vote-buttons';
import dayjs from 'dayjs';

export type ReviewProps = {
    id: string;
    user: {
        name: string;
        initials: string;
        avatar: string;
    };
    rating: number;
    createdAt: Date;
    content: string;
    votes: number;
    voteStatus: VoteStatus;
};

export default function Review({ user, rating, createdAt, content, votes, voteStatus }: ReviewProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='flex items-center justify-between'>
                    <Link href='' className='flex items-center gap-2'>
                        <Avatar>
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.initials}</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col items-start gap-2 md:flex-row md:items-center'>
                            <span>{user.name}</span>
                            <span className='text-muted-foreground text-xs'>
                                {dayjs(createdAt).format('MMMM D, YYYY')}
                            </span>
                        </div>
                    </Link>
                    <div className='flex items-center gap-5'>
                        <Rating rating={rating} />
                    </div>
                </CardTitle>
                <CardDescription className='mt-2 flex gap-5'>
                    <p className='items-start'>{content}</p>
                    <VoteButtons
                        initialVotes={votes}
                        initialStatus={voteStatus}
                        onVote={(status) => console.log('Voted:', status)}
                    />
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
