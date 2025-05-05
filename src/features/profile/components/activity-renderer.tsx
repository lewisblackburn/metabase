import Link from 'next/link';

import Rating from '@/components/shared/rating';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { Activity_Types_Enum, GetUserActivitiesQuery } from '@/generated/graphql';

type Activity = Omit<GetUserActivitiesQuery['user_activities'][number], 'user'> & {
    user?: GetUserActivitiesQuery['user_activities'][number]['user'];
};

interface ActivityRendererProps {
    activity: Activity;
    baseLink?: React.ReactNode;
}

export function ActivityRenderer({ activity, baseLink }: ActivityRendererProps) {
    const { activity_type: type, details, object_type, object_id, object_title } = activity;

    const defaultBaseLink = (
        <Link href={`/dashboard/${OBJECT_TYPE[object_type].path}/${object_id}`} className='min-w-0 truncate'>
            <span className='truncate'>{object_title}</span>
        </Link>
    );

    const link = baseLink || defaultBaseLink;

    switch (type) {
        case Activity_Types_Enum.RatingAdded:
        case Activity_Types_Enum.RatingChanged:
            return (
                <>
                    <span className='text-muted-foreground shrink-0'>rated</span>
                    {link}
                    <div className='ml-1 shrink-0'>
                        <Rating rating={details.rating} />
                    </div>
                </>
            );
        case Activity_Types_Enum.RatingDeleted:
            return (
                <>
                    <span className='text-muted-foreground shrink-0'>removed their rating from</span>
                    {link}
                </>
            );
        case Activity_Types_Enum.ReviewAdded:
            return (
                <>
                    <span className='text-muted-foreground shrink-0'>added a review for</span>
                    {link}
                </>
            );
        case Activity_Types_Enum.ReviewChanged:
            return (
                <>
                    <span className='text-muted-foreground shrink-0'>updated their review of</span>
                    {link}
                </>
            );
        case Activity_Types_Enum.ReviewDeleted:
            return (
                <>
                    <span className='text-muted-foreground shrink-0'>deleted their review of</span>
                    {link}
                </>
            );
        case Activity_Types_Enum.StatusAdded:
        case Activity_Types_Enum.StatusChanged:
            return (
                <>
                    <span className='text-muted-foreground shrink-0'>marked</span>
                    {link}
                    <span className='text-muted-foreground shrink-0'>as {details.status}</span>
                </>
            );
        case Activity_Types_Enum.StatusDeleted:
            return (
                <>
                    <span className='text-muted-foreground shrink-0'>removed their status from</span>
                    {link}
                </>
            );
        case Activity_Types_Enum.Favourited:
            return (
                <>
                    <span className='text-muted-foreground shrink-0'>favourited</span>
                    {link}
                </>
            );
        case Activity_Types_Enum.Unfavourited:
            return (
                <>
                    <span className='text-muted-foreground shrink-0'>removed</span>
                    {link}
                    <span className='text-muted-foreground shrink-0'>from favourites</span>
                </>
            );
        default:
            return (
                <>
                    <span className='text-muted-foreground shrink-0'>did something with</span>
                    {link}
                </>
            );
    }
}
