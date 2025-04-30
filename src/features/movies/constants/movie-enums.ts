import {
    Movie_Availability_Types_Enum,
    Movie_Certification_Types_Enum,
    Movie_Release_Statuses_Enum,
    User_Movie_Statuses_Types_Enum
} from '@/generated/graphql';
import { buildEnumOptions, createOptionSchema, enumToOptions } from '@/utils/enum-to-options';

// Movie Release Status
export const movieReleaseStatusLabels: Record<Movie_Release_Statuses_Enum, string> = {
    [Movie_Release_Statuses_Enum.InProduction]: 'In Production',
    [Movie_Release_Statuses_Enum.Rumoured]: 'Rumoured',
    [Movie_Release_Statuses_Enum.Cancelled]: 'Cancelled',
    [Movie_Release_Statuses_Enum.Released]: 'Released'
};
export const movieReleaseStatusOptions = buildEnumOptions(Movie_Release_Statuses_Enum, movieReleaseStatusLabels);

// Movie Availability
export const movieAvailabilityLabels: Record<Movie_Availability_Types_Enum, string> = {
    [Movie_Availability_Types_Enum.InCinemas]: 'In Cinemas',
    [Movie_Availability_Types_Enum.BluRay]: 'Blu-Ray',
    [Movie_Availability_Types_Enum.Download]: 'Download',
    [Movie_Availability_Types_Enum.Streaming]: 'Streaming',
    [Movie_Availability_Types_Enum.Dvd]: 'DVD'
};
export const movieAvailabilityOptions = buildEnumOptions(Movie_Availability_Types_Enum, movieAvailabilityLabels);
export const movieAvailabilityOptionsSchema = createOptionSchema(Movie_Availability_Types_Enum);

// Movie Certification
export const movieCertificationLabels: Record<Movie_Certification_Types_Enum, string> = {
    [Movie_Certification_Types_Enum.G]: 'G',
    [Movie_Certification_Types_Enum.Pg]: 'PG',
    [Movie_Certification_Types_Enum.Twelve]: '12',
    [Movie_Certification_Types_Enum.TwelveA]: '12A',
    [Movie_Certification_Types_Enum.PgThirteen]: 'PG-13',
    [Movie_Certification_Types_Enum.Fifteen]: '15',
    [Movie_Certification_Types_Enum.NcSeventeen]: 'NC-17',
    [Movie_Certification_Types_Enum.Eighteen]: '18',
    [Movie_Certification_Types_Enum.R]: 'R',
    [Movie_Certification_Types_Enum.Unrated]: 'Unrated'
};
export const movieCertificationOptions = buildEnumOptions(Movie_Certification_Types_Enum, movieCertificationLabels);
export const movieCertificationOptionsSchema = createOptionSchema(Movie_Certification_Types_Enum);

// Movie User Status
export const userMovieStatusOptions = enumToOptions(User_Movie_Statuses_Types_Enum);
