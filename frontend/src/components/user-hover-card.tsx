import { Users } from '@/generated/graphql';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/registry/new-york-v4/ui/hover-card';

import { formatDistanceToNow } from 'date-fns';
import { CalendarDays } from 'lucide-react';

interface UserHoverCardProps {
    user: Pick<Users, 'id' | 'displayName' | 'avatarUrl' | 'createdAt' | 'email'>;
    children: React.ReactNode;
}

export function UserHoverCard({ user, children }: UserHoverCardProps) {
    const initials = user.displayName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();

    return (
        <HoverCard>
            <HoverCardTrigger asChild>{children}</HoverCardTrigger>
            <HoverCardContent className='w-80'>
                <div className='flex space-x-3'>
                    <Avatar className='h-12 w-12'>
                        <AvatarImage src={user.avatarUrl} />
                        <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                    <div className='space-y-1'>
                        <h4 className='text-sm font-semibold'>{user.displayName}</h4>
                        <p className='text-muted-foreground text-sm'>{user.email}</p>
                        <div className='flex items-center pt-1'>
                            <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
                            <span className='text-muted-foreground text-xs'>
                                Joined {formatDistanceToNow(new Date(user.createdAt))} ago
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
