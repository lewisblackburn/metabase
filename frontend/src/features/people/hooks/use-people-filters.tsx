import { useMemo } from 'react';

import { orderEnumMap } from '@/constants/misc.constant';
import { GetPeopleQueryVariables, InputMaybe, Order_By, People_Bool_Exp } from '@/generated/graphql';
import { RootState } from '@/store/store';

import { useSelector } from 'react-redux';

const orderByFieldMap = {
    popularity: 'view_count'
} as const;

const getDateRangeFromAge = (minAge: number, maxAge: number) => {
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
    const minDate = new Date(today.getFullYear() - maxAge - 1, today.getMonth(), today.getDate() + 1);
    return { minDate, maxDate };
};

export function usePeopleFilters(): {
    where: GetPeopleQueryVariables['where'];
    order_by: NonNullable<GetPeopleQueryVariables['order_by']>;
} {
    const { orderBy, search, age } = useSelector((s: RootState) => s.peopleFilter);

    const order_by = useMemo<NonNullable<GetPeopleQueryVariables['order_by']>>(() => {
        const field = orderByFieldMap[orderBy.orderBy as keyof typeof orderByFieldMap] ?? 'view_count';
        const dir = orderEnumMap[orderBy.order as keyof typeof orderEnumMap] ?? Order_By.Desc;

        return [
            { [field]: dir },
            // NOTE: This is a tie-breaker to ensure consistent ordering
            { id: Order_By.Asc }
        ];
    }, [orderBy]);

    const where = useMemo<GetPeopleQueryVariables['where']>(() => {
        const clauses: InputMaybe<People_Bool_Exp>[] = [];

        if (search) {
            clauses.push({
                _or: [{ name: { _ilike: `%${search}%` } }]
            });
        }

        if (age) {
            const { minDate, maxDate } = getDateRangeFromAge(age[0], age[1]);
            clauses.push({
                birth_date: { _gte: minDate.toISOString(), _lte: maxDate.toISOString() }
            });
        }

        return clauses.length > 0 ? { _and: clauses as People_Bool_Exp[] } : {};
    }, [search, age]);

    return { where, order_by };
}
