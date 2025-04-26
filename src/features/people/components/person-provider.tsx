'use client';

import { ReactNode, createContext, useContext } from 'react';

import { useParams } from 'next/navigation';

import { GetPersonQuery, useGetPersonQuery } from '@/generated/graphql';

interface PersonContextType {
    person: GetPersonQuery['people_by_pk'];
    isLoading: boolean;
}

const PersonContext = createContext<PersonContextType | undefined>(undefined);

export function PersonProvider({ children }: { children: ReactNode }) {
    const params = useParams<{ id: string }>();
    const { data, isLoading } = useGetPersonQuery(
        { id: params?.id },
        {
            queryKey: ['person', params?.id],
            enabled: !!params?.id
        }
    );

    const person = data?.people_by_pk;

    return <PersonContext.Provider value={{ person, isLoading }}>{children}</PersonContext.Provider>;
}

export function usePerson() {
    const context = useContext(PersonContext);
    if (!context) {
        throw new Error('usePerson must be used within a PersonProvider');
    }
    return context;
}
