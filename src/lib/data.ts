export type CastMember = {
    id: string;
    name: string;
    character: string;
    order: number;
    personId: string;
};

export const allCastMembers: CastMember[] = [
    { id: '1', name: 'John Smith', character: 'Hero', order: 1, personId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479' },
    { id: '2', name: 'Jane Doe', character: 'Sidekick', order: 2, personId: 'a0eebc3e-1b2c-4c3e-8b1e-1c3e1b2c3e4d' },
    {
        id: '3',
        name: 'Alice Johnson',
        character: 'Villain',
        order: 3,
        personId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
    },
    { id: '4', name: 'Bob Brown', character: 'Mentor', order: 4, personId: 'a0eebc3e-1b2c-4c3e-8b1e-1c3e1b2c3e4d' },
    {
        id: '5',
        name: 'Charlie Davis',
        character: 'Supporting',
        order: 5,
        personId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
    },
    { id: '6', name: 'Diana Evans', character: 'Cameo', order: 6, personId: 'a0eebc3e-1b2c-4c3e-8b1e-1c3e1b2c3e4d' },
    { id: '7', name: 'Ethan Brown', character: 'Cameo', order: 7, personId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479' },
    { id: '8', name: 'Fiona Miller', character: 'Cameo', order: 8, personId: 'a0eebc3e-1b2c-4c3e-8b1e-1c3e1b2c3e4d' },
    {
        id: '9',
        name: 'George Anderson',
        character: 'Cameo',
        order: 9,
        personId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
    },
    { id: '10', name: 'Hannah Wilson', character: 'Cameo', order: 10, personId: 'a0eebc3e-1b2c-4c3e-8b1e-1c3e1b2c3e4d' }
];

export type CrewMember = {
    id: string;
    name: string;
    job: string;
    role: string;
    order: number;
};

export const allCrewMembers: CrewMember[] = [
    { id: '1', name: 'Christopher Nolan', job: '1', role: '1', order: 1 },
    { id: '2', name: 'Emma Thomas', job: '2', role: '2', order: 2 },
    { id: '3', name: 'David S. Goyer', job: '3', role: '3', order: 3 },
    { id: '4', name: 'Lee Smith', job: '4', role: '4', order: 4 },
    { id: '5', name: 'Hans Zimmer', job: '5', role: '5', order: 5 },
    { id: '6', name: 'Roger Deakins', job: '6', role: '6', order: 6 },
    { id: '7', name: 'Greig Fraser', job: '7', role: '7', order: 7 },
    { id: '8', name: 'Rachel Morrison', job: '8', role: '8', order: 8 },
    { id: '9', name: 'Janusz Kamiński', job: '9', role: '9', order: 9 },
    { id: '10', name: 'Claudio Miranda', job: '10', role: '10', order: 10 }
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

export type Person = {
    id: string;
    name: string;
    gender: string;
    birthday: string;
};

export const allPeople: Person[] = [
    { id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', name: 'John Smith', gender: 'Male', birthday: '1990-01-01' },
    { id: 'a0eebc3e-1b2c-4c3e-8b1e-1c3e1b2c3e4d', name: 'Jane Doe', gender: 'Female', birthday: '1990-01-01' }
];

export type MovieSoundtrack = {
    id: string;
    songs: Song[];
};

export type Song = {
    id: string;
    name: string;
    artist: string;
    order: number;
};

export const movieSoundtrack: MovieSoundtrack[] = [
    {
        id: '1',
        songs: [
            { id: '1', name: 'Song 1', artist: 'Artist 1', order: 1 },
            { id: '2', name: 'Song 2', artist: 'Artist 2', order: 2 },
            { id: '3', name: 'Song 3', artist: 'Artist 3', order: 3 }
        ]
    }
];
