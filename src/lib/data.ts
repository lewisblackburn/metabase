export type CastMember = {
    id: string;
    name: string;
    character: string;
    order: number;
};

export const allCastMembers: CastMember[] = [
    { id: '1', name: 'John Smith', character: 'Hero', order: 1 },
    { id: '2', name: 'Jane Doe', character: 'Sidekick', order: 2 },
    { id: '3', name: 'Alice Johnson', character: 'Villain', order: 3 },
    { id: '4', name: 'Bob Brown', character: 'Mentor', order: 4 },
    { id: '5', name: 'Charlie Davis', character: 'Supporting', order: 5 },
    { id: '6', name: 'Diana Evans', character: 'Cameo', order: 6 },
    { id: '7', name: 'Ethan Brown', character: 'Cameo', order: 7 },
    { id: '8', name: 'Fiona Miller', character: 'Cameo', order: 8 },
    { id: '9', name: 'George Anderson', character: 'Cameo', order: 9 },
    { id: '10', name: 'Hannah Wilson', character: 'Cameo', order: 10 }
];
