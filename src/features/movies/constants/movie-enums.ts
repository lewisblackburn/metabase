import {
    Movie_Availability_Types_Enum,
    Movie_Certification_Types_Enum,
    Movie_Genre_Types_Enum,
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

// Movie Genres

export const movieGenresLabels: Record<Movie_Genre_Types_Enum, string> = {
    [Movie_Genre_Types_Enum.Action]: 'Action',
    [Movie_Genre_Types_Enum.Adventure]: 'Adventure',
    [Movie_Genre_Types_Enum.Animation]: 'Animation',
    [Movie_Genre_Types_Enum.Comedy]: 'Comedy',
    [Movie_Genre_Types_Enum.Crime]: 'Crime',
    [Movie_Genre_Types_Enum.Documentary]: 'Documentary',
    [Movie_Genre_Types_Enum.Drama]: 'Drama',
    [Movie_Genre_Types_Enum.Family]: 'Family',
    [Movie_Genre_Types_Enum.Fantasy]: 'Fantasy',
    [Movie_Genre_Types_Enum.History]: 'History',
    [Movie_Genre_Types_Enum.Horror]: 'Horror',
    [Movie_Genre_Types_Enum.Music]: 'Music',
    [Movie_Genre_Types_Enum.Mystery]: 'Mystery',
    [Movie_Genre_Types_Enum.Romance]: 'Romance',
    [Movie_Genre_Types_Enum.ScienceFiction]: 'Science Fiction',
    [Movie_Genre_Types_Enum.TvMovie]: 'TV Movie',
    [Movie_Genre_Types_Enum.Thriller]: 'Thriller',
    [Movie_Genre_Types_Enum.War]: 'War',
    [Movie_Genre_Types_Enum.Western]: 'Western'
};
export const movieGenresOptions = buildEnumOptions(Movie_Genre_Types_Enum, movieGenresLabels);
export const movieGenresOptionsSchema = createOptionSchema(Movie_Genre_Types_Enum);
