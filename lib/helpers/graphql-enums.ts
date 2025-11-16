/**
 * Enum objects created from GraphQL union types
 * These provide a more convenient way to work with GraphQL enum values
 */

import {
    Actions_Enum,
    Credit_Types_Enum,
    Entity_Types_Enum,
    Genders_Enum,
    Media_Types_Enum,
    User_Movie_Statuses_Enum,
} from '@/generated/graphql'

import { createEnum } from './enum-helpers'

/**
 * Action enum for audit logging
 * Values: DELETE, INSERT, SELECT, UPDATE
 */
export const Action = createEnum<Actions_Enum>(['INSERT', 'SELECT', 'UPDATE', 'DELETE'] as const)

/**
 * Entity type enum for audit logging
 * Values: ACTIVITY, MOVIE, PERSON
 */
export const EntityType = createEnum<Entity_Types_Enum>(['ACTIVITY', 'MOVIE', 'PERSON'] as const)

/**
 * Credit type enum
 * Values: CAST, CREW
 */
export const CreditType = createEnum<Credit_Types_Enum>(['CAST', 'CREW'] as const)

/**
 * Gender enum
 * Values: FEMALE, MALE, OTHER
 */
export const Gender = createEnum<Genders_Enum>(['FEMALE', 'MALE', 'OTHER'] as const)

/**
 * Media type enum
 * Values: BOOK, EPISODE, GAME, MOVIE, PERSON, SONG, TV_SHOW
 */
export const MediaType = createEnum<Media_Types_Enum>([
    'BOOK',
    'EPISODE',
    'GAME',
    'MOVIE',
    'PERSON',
    'SONG',
    'TV_SHOW',
] as const)

/**
 * User movie status enum
 * Values: DROPPED, WATCHED, WATCHING, WATCHLIST
 */
export const UserMovieStatus = createEnum<User_Movie_Statuses_Enum>([
    'DROPPED',
    'WATCHED',
    'WATCHING',
    'WATCHLIST',
] as const)
