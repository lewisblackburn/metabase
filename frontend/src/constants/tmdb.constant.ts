import { Gender_Types_Enum } from '../generated/graphql';

export const TMDB_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
export const TMDB_BACKDROP_URL = 'https://image.tmdb.org/t/p/original';
export const TMDB_PROFILE_URL = 'https://image.tmdb.org/t/p/w185';
export const TMDB_LOGO_URL = 'https://image.tmdb.org/t/p/original';

export const TMDB_GENDER_MAP = {
    0: Gender_Types_Enum.Other,
    1: Gender_Types_Enum.Female,
    2: Gender_Types_Enum.Male
} as const;
