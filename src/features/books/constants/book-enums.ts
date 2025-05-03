import {
    Book_Availability_Types_Enum,
    Book_Release_Status_Types_Enum,
    User_Book_Status_Types_Enum
} from '@/generated/graphql';
import { buildEnumOptions, createOptionSchema } from '@/utils/enum-to-options';

import { CheckCircle, List, Loader, LucideIcon, X } from 'lucide-react';

// Book Release Status
export const bookReleaseStatusLabels: Record<Book_Release_Status_Types_Enum, string> = {
    [Book_Release_Status_Types_Enum.Announced]: 'Announced',
    [Book_Release_Status_Types_Enum.Delayed]: 'Delayed',
    [Book_Release_Status_Types_Enum.Editing]: 'Editing',
    [Book_Release_Status_Types_Enum.Cancelled]: 'Cancelled',
    [Book_Release_Status_Types_Enum.Released]: 'Released',
    [Book_Release_Status_Types_Enum.ManuscriptCompleted]: 'Manuscript Completed',
    [Book_Release_Status_Types_Enum.OutOfPrint]: 'Out of Print',
    [Book_Release_Status_Types_Enum.Proofing]: 'Proofing',
    [Book_Release_Status_Types_Enum.InProgress]: 'In Progress',
    [Book_Release_Status_Types_Enum.Published]: 'Published',
    [Book_Release_Status_Types_Enum.ReadyForPublication]: 'Ready for Publication',
    [Book_Release_Status_Types_Enum.Reissued]: 'Reissued'
};
export const bookReleaseStatusOptions = buildEnumOptions(Book_Release_Status_Types_Enum, bookReleaseStatusLabels);

// Book Availability
export const bookAvailabilityLabels: Record<Book_Availability_Types_Enum, string> = {
    [Book_Availability_Types_Enum.Download]: 'Download',
    [Book_Availability_Types_Enum.Hardback]: 'Hardback',
    [Book_Availability_Types_Enum.Paperback]: 'Paperback'
};
export const bookAvailabilityOptions = buildEnumOptions(Book_Availability_Types_Enum, bookAvailabilityLabels);
export const bookAvailabilityOptionsSchema = createOptionSchema(Book_Availability_Types_Enum);

// Book User Status
export const userBookStatusLabels: Record<User_Book_Status_Types_Enum, string> = {
    [User_Book_Status_Types_Enum.Read]: 'Read',
    [User_Book_Status_Types_Enum.Reading]: 'Reading',
    [User_Book_Status_Types_Enum.Readlist]: 'Readlist',
    [User_Book_Status_Types_Enum.Dropped]: 'Dropped'
};
export const userBookStatusIcons: Record<User_Book_Status_Types_Enum, LucideIcon> = {
    [User_Book_Status_Types_Enum.Read]: CheckCircle,
    [User_Book_Status_Types_Enum.Reading]: Loader,
    [User_Book_Status_Types_Enum.Readlist]: List,
    [User_Book_Status_Types_Enum.Dropped]: X
};
export const userBookStatusOptions = buildEnumOptions(
    User_Book_Status_Types_Enum,
    userBookStatusLabels,
    userBookStatusIcons
);
