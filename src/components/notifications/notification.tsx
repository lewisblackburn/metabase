import Link from 'next/link';

import { NotificationFragment } from '@/generated/graphql';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar';

import { formatDistanceToNow } from 'date-fns';
import { Dot } from 'lucide-react';

export default function Notification({
    notification,
    onClick
}: {
    notification: NotificationFragment;
    onClick: () => void;
}) {
    return (
        <Link href={`/dashboard/profile/${notification.actor.id}`}>
            <div key={notification.id} className='hover:bg-accent rounded-md px-3 py-2 text-sm transition-colors'>
                <div className='relative flex items-start gap-3 pe-3'>
                    <Avatar className='size-9 rounded-md'>
                        <AvatarImage src={notification.actor.avatarUrl} alt={notification.actor.displayName} />
                        <AvatarFallback>{notification.actor.displayName.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className='flex-1 space-y-1'>
                        <button className='text-foreground/80 text-left after:absolute after:inset-0' onClick={onClick}>
                            <span className='text-foreground font-medium hover:underline'>
                                {notification.actor.displayName}
                            </span>{' '}
                            {notification.user_activity?.activity_type}{' '}
                            <span className='text-foreground font-medium hover:underline'>
                                {notification.user_activity?.object_title}
                            </span>
                            .
                        </button>
                        <div className='text-muted-foreground text-xs'>
                            {formatDistanceToNow(new Date(notification.created_at), { addSuffix: true })}
                        </div>
                    </div>
                    {notification.is_read === false && (
                        <div className='absolute end-0 self-center'>
                            <Dot />
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
