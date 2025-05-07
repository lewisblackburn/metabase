'use client';

import {
    useGetNotificationsQuery,
    useMarkAllNotificationsAsReadMutation,
    useMarkNotificationAsReadMutation
} from '@/generated/graphql';
import { useNotificationsSubscription } from '@/hooks/use-notifications-subscription';
import { queryClient } from '@/lib/query-client';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york-v4/ui/popover';
import { Skeleton } from '@/registry/new-york-v4/ui/skeleton';
import { useUserId } from '@nhost/nextjs';

import Notification from './notification';
import { BellIcon } from 'lucide-react';
import { toast } from 'sonner';

export default function Notifications() {
    const userId = useUserId();
    useNotificationsSubscription();
    const { data, isLoading } = useGetNotificationsQuery(
        {
            user_id: userId
        },
        {
            queryKey: ['notifications', userId]
        }
    );

    const notifications = data?.notifications;
    const unreadCount = notifications?.filter((n) => n.is_read === false).length ?? 0;

    const { mutateAsync: markAllAsRead } = useMarkAllNotificationsAsReadMutation();
    const { mutateAsync: markAsRead } = useMarkNotificationAsReadMutation();

    const handleMarkAllAsRead = async () => {
        await markAllAsRead(
            { user_id: userId },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ['notifications', userId] });
                },
                onError: () => {
                    toast.error('Failed to mark all notifications as read');
                }
            }
        );
    };

    const handleNotificationClick = async (id: string) => {
        await markAsRead(
            { id, recipient_id: userId },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ['notifications', userId] });
                },
                onError: () => {
                    toast.error('Failed to mark notification as read');
                }
            }
        );
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button size='icon' variant='outline' className='relative' aria-label='Open notifications'>
                    <BellIcon size={16} aria-hidden='true' />
                    {unreadCount > 0 && (
                        <Badge className='absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1'>
                            {unreadCount > 99 ? '99+' : unreadCount}
                        </Badge>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-80 p-1'>
                <div className='flex items-baseline justify-between gap-4 px-3 py-2'>
                    <div className='text-sm font-semibold'>Notifications</div>
                    {unreadCount > 0 && (
                        <button className='text-xs font-medium hover:underline' onClick={handleMarkAllAsRead}>
                            Mark all as read
                        </button>
                    )}
                </div>
                <div role='separator' aria-orientation='horizontal' className='bg-border -mx-1 my-1 h-px'></div>
                <div className='max-h-[300px] overflow-y-auto'>
                    {isLoading
                        ? Array.from({ length: 3 }).map((_, i) => (
                              <div key={i} className='px-3 py-2'>
                                  <div className='flex items-start gap-3'>
                                      <Skeleton className='size-9 rounded-md' />
                                      <div className='flex-1 space-y-2'>
                                          <Skeleton className='h-4 w-3/4' />
                                          <Skeleton className='h-3 w-1/2' />
                                      </div>
                                  </div>
                              </div>
                          ))
                        : notifications?.map((notification) => (
                              <Notification
                                  key={notification.id}
                                  notification={notification}
                                  onClick={() => handleNotificationClick(notification.id)}
                              />
                          ))}
                    {!isLoading && (!notifications || notifications.length === 0) && (
                        <div className='text-muted-foreground px-3 py-4 text-center text-sm'>No notifications yet</div>
                    )}
                </div>
            </PopoverContent>
        </Popover>
    );
}
