import { useRouter } from 'next/navigation';

import { ActivityRenderer } from '@/features/users/components/activity-renderer';
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
                    <Avatar className='size-9 shrink-0 rounded-md border'>
                        <AvatarImage src={notification.actor.avatarUrl} alt={notification.actor.displayName} />
                        <AvatarFallback>{notification.actor.displayName.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className='min-w-0 flex-1'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-wrap items-start gap-1'>
                                <span className='shrink-0 font-medium'>{notification.actor.displayName}</span>
                                {notification.user_activity && (
                                    <ActivityRenderer activity={notification.user_activity} />
                                )}
                            </div>
                            <span className='text-muted-foreground text-xs'>
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
