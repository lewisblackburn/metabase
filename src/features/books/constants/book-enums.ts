import { User_Book_Status_Types_Enum } from '@/generated/graphql';
import { buildEnumOptions } from '@/utils/enum-to-options';

import { CheckCircle, List, Loader, LucideIcon, X } from 'lucide-react';

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
