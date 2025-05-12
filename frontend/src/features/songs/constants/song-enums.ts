import { Song_Availability_Types_Enum, Song_Genre_Types_Enum } from '@/generated/graphql';
import { buildEnumOptions, createOptionSchema } from '@/utils/enum-to-options';

// Song Availability
export const songAvailabilityLabels: Record<Song_Availability_Types_Enum, string> = {
    [Song_Availability_Types_Enum.Download]: 'Download',
    [Song_Availability_Types_Enum.Streaming]: 'Streaming',
    [Song_Availability_Types_Enum.Cd]: 'CD',
    [Song_Availability_Types_Enum.Vinyl]: 'Vinyl'
};
export const songAvailabilityOptions = buildEnumOptions(Song_Availability_Types_Enum, songAvailabilityLabels);
export const songAvailabilityOptionsSchema = createOptionSchema(Song_Availability_Types_Enum);

// Song Genres
export const songGenresLabels: Record<Song_Genre_Types_Enum, string> = {
    [Song_Genre_Types_Enum.Afrobeat]: 'Afrobeat',
    [Song_Genre_Types_Enum.Alternative]: 'Alternative',
    [Song_Genre_Types_Enum.AlternativeRock]: 'Alternative Rock',
    [Song_Genre_Types_Enum.Ambient]: 'Ambient',
    [Song_Genre_Types_Enum.Americana]: 'Americana',
    [Song_Genre_Types_Enum.Baroque]: 'Baroque',
    [Song_Genre_Types_Enum.Bebop]: 'Bebop',
    [Song_Genre_Types_Enum.BlackMetal]: 'Black Metal',
    [Song_Genre_Types_Enum.Bluegrass]: 'Bluegrass',
    [Song_Genre_Types_Enum.Blues]: 'Blues',
    [Song_Genre_Types_Enum.Classical]: 'Classical',
    [Song_Genre_Types_Enum.ContemporaryClassical]: 'Contemporary Classical',
    [Song_Genre_Types_Enum.Country]: 'Country',
    [Song_Genre_Types_Enum.CountryPop]: 'Country Pop',
    [Song_Genre_Types_Enum.CountryRock]: 'Country Rock',
    [Song_Genre_Types_Enum.Dancehall]: 'Dance Hall',
    [Song_Genre_Types_Enum.DeathMetal]: 'Death Metal',
    [Song_Genre_Types_Enum.Disco]: 'Disco',
    [Song_Genre_Types_Enum.DrumAndBass]: 'Drum And Bass',
    [Song_Genre_Types_Enum.Dub]: 'Dub',
    [Song_Genre_Types_Enum.Dubstep]: 'Dubstep',
    [Song_Genre_Types_Enum.Electronic]: 'Electronic',
    [Song_Genre_Types_Enum.Emo]: 'Emo',
    [Song_Genre_Types_Enum.Experimental]: 'Experimental',
    [Song_Genre_Types_Enum.Folk]: 'Folk',
    [Song_Genre_Types_Enum.FolkRock]: 'Folk Rock',
    [Song_Genre_Types_Enum.Funk]: 'Funk',
    [Song_Genre_Types_Enum.Gospel]: 'Gospel',
    [Song_Genre_Types_Enum.Grunge]: 'Grunge',
    [Song_Genre_Types_Enum.HardRock]: 'Hard Rock',
    [Song_Genre_Types_Enum.HipHop]: 'Hip Hop',
    [Song_Genre_Types_Enum.House]: 'House',
    [Song_Genre_Types_Enum.Indie]: 'Indie',
    [Song_Genre_Types_Enum.IndieRock]: 'Indie Rock',
    [Song_Genre_Types_Enum.Industrial]: 'Industrial',
    [Song_Genre_Types_Enum.Jazz]: 'Jazz',
    [Song_Genre_Types_Enum.KPop]: 'K Pop',
    [Song_Genre_Types_Enum.Latin]: 'Latin',
    [Song_Genre_Types_Enum.Metal]: 'Metal',
    [Song_Genre_Types_Enum.NewAge]: 'New Age',
    [Song_Genre_Types_Enum.NeoSoul]: 'Neo Soul',
    [Song_Genre_Types_Enum.Opera]: 'Opera',
    [Song_Genre_Types_Enum.Pop]: 'Pop',
    [Song_Genre_Types_Enum.ProgressiveHouse]: 'Progressive House',
    [Song_Genre_Types_Enum.ProgressiveRock]: 'Progressive Rock',
    [Song_Genre_Types_Enum.Punk]: 'Punk',
    [Song_Genre_Types_Enum.PunkRock]: 'Punk Rock',
    [Song_Genre_Types_Enum.Rap]: 'Rap',
    [Song_Genre_Types_Enum.Reggae]: 'Reggae',
    [Song_Genre_Types_Enum.Reggaeton]: 'Reggaeton',
    [Song_Genre_Types_Enum.Rock]: 'Rock',
    [Song_Genre_Types_Enum.RAndB]: 'R And B',
    [Song_Genre_Types_Enum.Ska]: 'Ska',
    [Song_Genre_Types_Enum.Soul]: 'Soul',
    [Song_Genre_Types_Enum.Swing]: 'Swing',
    [Song_Genre_Types_Enum.Symphonic]: 'Symphonic',
    [Song_Genre_Types_Enum.Techno]: 'Techno',
    [Song_Genre_Types_Enum.Trance]: 'Trance',
    [Song_Genre_Types_Enum.Trap]: 'Trap',
    [Song_Genre_Types_Enum.World]: 'World'
};

export const songGenresOptions = buildEnumOptions(Song_Genre_Types_Enum, songGenresLabels);
export const songGenresOptionsSchema = createOptionSchema(Song_Genre_Types_Enum);
