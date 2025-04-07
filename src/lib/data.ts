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

export type CrewMember = {
    id: string;
    name: string;
    job: string;
    role: string;
    order: number;
};

export const allCrewMembers: CrewMember[] = [
    { id: '1', name: 'Christopher Nolan', job: 'Producer', role: 'Executive Producer', order: 1 },
    { id: '2', name: 'Emma Thomas', job: 'Director', role: 'Co-Director', order: 2 },
    { id: '3', name: 'David S. Goyer', job: 'Director', role: 'Screenwriter', order: 3 },
    { id: '4', name: 'Lee Smith', job: 'Sound Designer', role: 'Sound Editor', order: 4 },
    { id: '5', name: 'Hans Zimmer', job: 'Music Supervisor', role: 'Composer', order: 5 },
    { id: '6', name: 'Roger Deakins', job: 'Visual Effects Supervisor', role: 'Cinematographer', order: 6 },
    { id: '7', name: 'Greig Fraser', job: 'Production Designer', role: 'Cinematographer', order: 7 },
    { id: '8', name: 'Rachel Morrison', job: 'Costume Designer', role: 'Cinematographer', order: 8 },
    { id: '9', name: 'Janusz Kamiński', job: 'Art Director', role: 'Cinematographer', order: 9 },
    { id: '10', name: 'Claudio Miranda', job: 'Makeup Artist', role: 'Cinematographer', order: 10 }
];

export type Job = {
    id: string;
    name: string;
};

export const allJobs: Job[] = [
    { id: '1', name: 'Producer' },
    { id: '2', name: 'Director' },
    { id: '3', name: 'Screenwriter' }
];

export type Role = {
    id: string;
    name: string;
};

export const allRoles: Role[] = [
    { id: '1', name: 'Lead Actor' },
    { id: '2', name: 'Supporting Actor' },
    { id: '3', name: 'Lead Actress' },
    { id: '4', name: 'Supporting Actress' },
    { id: '5', name: 'Lead Director' },
    { id: '6', name: 'Supporting Director' },
    { id: '7', name: 'Lead Screenwriter' },
    { id: '8', name: 'Supporting Screenwriter' },
    { id: '9', name: 'Lead Cinematographer' },
    { id: '10', name: 'Supporting Cinematographer' },
    { id: '11', name: 'Lead Editor' },
    { id: '12', name: 'Supporting Editor' }
];
