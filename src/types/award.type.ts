import { ObjectType } from '@/constants/objects.constant';

// TODO: Remove this type and use the one from the API
export interface AwardType {
    id: string;
    title: string;
    award: string;
    year: number;
    event: string;
    type: ObjectType;
}
