import { Order_By } from '@/generated/graphql';

export const orderEnumMap = {
    asc: Order_By.Asc,
    desc: Order_By.Desc
} as const;
