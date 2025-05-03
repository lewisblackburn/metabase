import {
    Movie_Availability_Types_Enum,
    Movie_Certification_Types_Enum,
    Movie_Release_Status_Types_Enum,
    User_Movie_Status_Types_Enum
} from '@/generated/graphql';
import { buildEnumOptions, createOptionSchema } from '@/utils/enum-to-options';

import { CheckCircle, List, Loader, LucideIcon, X } from 'lucide-react';

// Movie Release Status
export const movieReleaseStatusLabels: Record<Movie_Release_Status_Types_Enum, string> = {
    [Movie_Release_Status_Types_Enum.InProduction]: 'In Production',
    [Movie_Release_Status_Types_Enum.Rumoured]: 'Rumoured',
    [Movie_Release_Status_Types_Enum.Cancelled]: 'Cancelled',
    [Movie_Release_Status_Types_Enum.Released]: 'Released',
    [Movie_Release_Status_Types_Enum.PostProduction]: 'Post Production',
    [Movie_Release_Status_Types_Enum.Planned]: 'Planned'
};
export const movieReleaseStatusOptions = buildEnumOptions(Movie_Release_Status_Types_Enum, movieReleaseStatusLabels);

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

export const userMovieStatusLabels: Record<User_Movie_Status_Types_Enum, string> = {
    [User_Movie_Status_Types_Enum.Watched]: 'Watched',
    [User_Movie_Status_Types_Enum.Watching]: 'Watching',
    [User_Movie_Status_Types_Enum.Watchlist]: 'Watchlist',
    [User_Movie_Status_Types_Enum.Dropped]: 'Dropped'
};
export const userMovieStatusIcons: Record<User_Movie_Status_Types_Enum, LucideIcon> = {
    [User_Movie_Status_Types_Enum.Watched]: CheckCircle,
    [User_Movie_Status_Types_Enum.Watching]: Loader,
    [User_Movie_Status_Types_Enum.Watchlist]: List,
    [User_Movie_Status_Types_Enum.Dropped]: X
};
export const userMovieStatusOptions = buildEnumOptions(
    User_Movie_Status_Types_Enum,
    userMovieStatusLabels,
    userMovieStatusIcons
);
