import { Activity_Types_Enum, GetUserActivitiesQuery } from '@/generated/graphql';

type Notification = Omit<GetUserActivitiesQuery['user_activities'][number], 'user'> & {
    user?: GetUserActivitiesQuery['user_activities'][number]['user'];
};

interface NotificationRendererProps {
    notification: Notification;
    baseLink?: React.ReactNode;
}

export function NotificationRenderer({ notification, baseLink }: NotificationRendererProps) {
    const { activity_type: type } = notification;

    switch (type) {
        case Activity_Types_Enum.Follow:
            return (
                <>
                    <span className='text-muted-foreground shrink-0'>followed you</span>
                </>
            );
        default:
            return null;
    }
}
