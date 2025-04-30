import {
    Movie_Availability_Types_Enum,
    Movie_Release_Statuses_Enum,
    User_Movie_Statuses_Types_Enum
} from '@/generated/graphql';
import { buildEnumOptions, createOptionSchema, enumToOptions } from '@/utils/enum-to-options';

const releaseLabels: Record<Movie_Release_Statuses_Enum, string> = {
    [Movie_Release_Statuses_Enum.InProduction]: 'In Production',
    [Movie_Release_Statuses_Enum.Rumoured]: 'Rumoured',
    [Movie_Release_Statuses_Enum.Cancelled]: 'Cancelled',
    [Movie_Release_Statuses_Enum.Released]: 'Released'
};
export const movieReleaseStatusOptions = buildEnumOptions(Movie_Release_Statuses_Enum, releaseLabels);

const availabilityLabels: Record<Movie_Availability_Types_Enum, string> = {
    [Movie_Availability_Types_Enum.InCinemas]: 'In Cinemas',
    [Movie_Availability_Types_Enum.BluRay]: 'Blu-Ray',
    [Movie_Availability_Types_Enum.Download]: 'Download',
    [Movie_Availability_Types_Enum.Streaming]: 'Streaming',
    [Movie_Availability_Types_Enum.Dvd]: 'DVD'
};
export const movieAvailabilityOptions = buildEnumOptions(Movie_Availability_Types_Enum, availabilityLabels);
export const movieAvailabilityOptionsSchema = createOptionSchema(Movie_Availability_Types_Enum);

export const userMovieStatusOptions = enumToOptions(User_Movie_Statuses_Types_Enum);
