'use client';

import { ReactNode, createContext, useContext } from 'react';

import { useParams } from 'next/navigation';

import { GetPersonQuery, GetPersonQueryVariables, useGetPersonQuery } from '@/generated/graphql';

interface PersonContextType {
    person: GetPersonQuery['people_by_pk'] | undefined;
    isLoading: boolean;
}

const PersonContext = createContext<PersonContextType | undefined>(undefined);

export function PersonProvider({
    children,
    id,
    variables
}: {
    children: ReactNode;
    id?: string;
    variables?: GetPersonQueryVariables;
}) {
    const params = useParams<{ id: string }>();
    const queryVariables: GetPersonQueryVariables = variables ?? { id: id ?? params?.id! };

    const { data, isLoading } = useGetPersonQuery(queryVariables, {
        queryKey: variables ? ['person', queryVariables] : ['person', queryVariables.id],
        enabled: !!queryVariables
    });

    const person = data?.people_by_pk;
    return <PersonContext.Provider value={{ person, isLoading }}>{children}</PersonContext.Provider>;
}

export function usePerson(variables?: GetPersonQueryVariables): PersonContextType {
    if (variables) {
        const { data, isLoading } = useGetPersonQuery(variables, {
            queryKey: ['person', variables],
            enabled: !!variables
        });
        return { person: data?.people_by_pk, isLoading };
    }

    const context = useContext(PersonContext);
    if (!context) {
        throw new Error('usePerson must be used within a PersonProvider or provided with variables');
    }
    return context;
}
