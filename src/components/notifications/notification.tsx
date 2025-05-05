import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { NotificationRenderer } from '@/components/notifications/notification-renderer';
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
    const router = useRouter();
    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        onClick();
        router.push(`/dashboard/users/${notification.actor.id}`);
    };

    return (
        <div onClick={handleClick}>
            <div key={notification.id} className='hover:bg-accent rounded-md px-3 py-2 text-sm transition-colors'>
                <div className='relative flex items-start gap-3 pe-3'>
                    <Avatar className='size-9 rounded-md'>
                        <AvatarImage src={notification.actor.avatarUrl} alt={notification.actor.displayName} />
                        <AvatarFallback>{notification.actor.displayName.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className='flex-1'>
                        <div className='flex flex-wrap items-start space-x-1 sm:items-center'>
                            <span className='shrink-0'>{notification.actor.displayName}</span>

                            {notification.user_activity && (
                                <NotificationRenderer notification={notification.user_activity} />
                            )}

                            <span className='text-muted-foreground w-full text-xs'>
                                {formatDistanceToNow(notification.created_at)}
                            </span>
                        </div>
                    </div>
                    {notification.is_read === false && (
                        <div className='absolute end-0 self-center'>
                            <Dot />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
