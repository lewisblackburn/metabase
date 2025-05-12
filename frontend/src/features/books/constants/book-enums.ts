import { LucideIconOrFC } from '@/constants/icons.constant';
import {
    Book_Availability_Types_Enum,
    Book_Genre_Types_Enum,
    Book_Release_Status_Types_Enum,
    User_Book_Status_Types_Enum
} from '@/generated/graphql';
import { buildEnumOptions, createOptionSchema } from '@/utils/enum-to-options';

import { CheckCircle, List, Loader, X } from 'lucide-react';

// Book Release Status
export const bookReleaseStatusLabels: Record<Book_Release_Status_Types_Enum, string> = {
    [Book_Release_Status_Types_Enum.Announced]: 'Announced',
    [Book_Release_Status_Types_Enum.Delayed]: 'Delayed',
    [Book_Release_Status_Types_Enum.Editing]: 'Editing',
    [Book_Release_Status_Types_Enum.Cancelled]: 'Cancelled',
    [Book_Release_Status_Types_Enum.Released]: 'Released',
    [Book_Release_Status_Types_Enum.ManuscriptCompleted]: 'Manuscript Completed',
    [Book_Release_Status_Types_Enum.OutOfPrint]: 'Out of Print',
    [Book_Release_Status_Types_Enum.Proofing]: 'Proofing',
    [Book_Release_Status_Types_Enum.InProgress]: 'In Progress',
    [Book_Release_Status_Types_Enum.Published]: 'Published',
    [Book_Release_Status_Types_Enum.ReadyForPublication]: 'Ready for Publication',
    [Book_Release_Status_Types_Enum.Reissued]: 'Reissued'
};
export const bookReleaseStatusOptions = buildEnumOptions(Book_Release_Status_Types_Enum, bookReleaseStatusLabels);

// Book Availability
export const bookAvailabilityLabels: Record<Book_Availability_Types_Enum, string> = {
    [Book_Availability_Types_Enum.Download]: 'Download',
    [Book_Availability_Types_Enum.Hardback]: 'Hardback',
    [Book_Availability_Types_Enum.Paperback]: 'Paperback',
    [Book_Availability_Types_Enum.Audiobook]: 'Audiobook',
    [Book_Availability_Types_Enum.EBook]: 'E-Book'
};
export const bookAvailabilityOptions = buildEnumOptions(Book_Availability_Types_Enum, bookAvailabilityLabels);
export const bookAvailabilityOptionsSchema = createOptionSchema(Book_Availability_Types_Enum);

// Book User Status
export const userBookStatusLabels: Record<User_Book_Status_Types_Enum, string> = {
    [User_Book_Status_Types_Enum.Read]: 'Read',
    [User_Book_Status_Types_Enum.Reading]: 'Reading',
    [User_Book_Status_Types_Enum.Readlist]: 'Readlist',
    [User_Book_Status_Types_Enum.Dropped]: 'Dropped'
};
export const userBookStatusIcons: Record<User_Book_Status_Types_Enum, LucideIconOrFC> = {
    [User_Book_Status_Types_Enum.Read]: CheckCircle,
    [User_Book_Status_Types_Enum.Reading]: Loader,
    [User_Book_Status_Types_Enum.Readlist]: List,
    [User_Book_Status_Types_Enum.Dropped]: X
};
export const userBookStatusOptions = buildEnumOptions(
    User_Book_Status_Types_Enum,
    userBookStatusLabels,
    userBookStatusIcons
);

// Book Genres
export const bookGenresLabels: Record<Book_Genre_Types_Enum, string> = {
    [Book_Genre_Types_Enum.Action]: 'Action',
    [Book_Genre_Types_Enum.Adventure]: 'Adventure',
    [Book_Genre_Types_Enum.ArtPhotography]: 'Art Photography',
    [Book_Genre_Types_Enum.Autobiography]: 'Autobiography',
    [Book_Genre_Types_Enum.Biography]: 'Biography',
    [Book_Genre_Types_Enum.BusinessEconomics]: 'Business Economics',
    [Book_Genre_Types_Enum.ChildrenSfiction]: 'Childrens Fiction',
    [Book_Genre_Types_Enum.Classicfiction]: 'Classic Fiction',
    [Book_Genre_Types_Enum.Contemporaryfiction]: 'Contemporary Fiction',
    [Book_Genre_Types_Enum.CookeryFoodDrink]: 'Cookery Food Drink',
    [Book_Genre_Types_Enum.CraftsHobbies]: 'Crafts Hobbies',
    [Book_Genre_Types_Enum.Crimefiction]: 'Crime Fiction',
    [Book_Genre_Types_Enum.Detectivefiction]: 'Detective Fiction',
    [Book_Genre_Types_Enum.DiariesJournals]: 'Diaries Journals',
    [Book_Genre_Types_Enum.Dystopian]: 'Dystopian',
    [Book_Genre_Types_Enum.Education]: 'Education',
    [Book_Genre_Types_Enum.EsotericaOccult]: 'Esoterica Occult',
    [Book_Genre_Types_Enum.FairytalesFolktales]: 'Fairytales Folk Tales',
    [Book_Genre_Types_Enum.Fantasy]: 'Fantasy',
    [Book_Genre_Types_Enum.FinancePersonalfinance]: 'Finance Personal Finance',
    [Book_Genre_Types_Enum.Gothicfiction]: 'Gothic Fiction',
    [Book_Genre_Types_Enum.HealthFitness]: 'Health Fitness',
    [Book_Genre_Types_Enum.Historicalfiction]: 'Historical Fiction',
    [Book_Genre_Types_Enum.History]: 'History',
    [Book_Genre_Types_Enum.Horror]: 'Horror',
    [Book_Genre_Types_Enum.Humour]: 'Humour',
    [Book_Genre_Types_Enum.LanguageLinguistics]: 'Language Linguistics',
    [Book_Genre_Types_Enum.Law]: 'Law',
    [Book_Genre_Types_Enum.Legalthriller]: 'Legal Thriller',
    [Book_Genre_Types_Enum.Literaryfiction]: 'Literary Fiction',
    [Book_Genre_Types_Enum.Magicalrealism]: 'Magical Realism',
    [Book_Genre_Types_Enum.Memoir]: 'Memoir',
    [Book_Genre_Types_Enum.Music]: 'Music',
    [Book_Genre_Types_Enum.Mystery]: 'Mystery',
    [Book_Genre_Types_Enum.MythologyLegends]: 'Mythology Legends',
    [Book_Genre_Types_Enum.NatureEnvironment]: 'Nature Environment',
    [Book_Genre_Types_Enum.Newadult]: 'New Adult',
    [Book_Genre_Types_Enum.Paranormal]: 'Paranormal',
    [Book_Genre_Types_Enum.Parenting]: 'Parenting',
    [Book_Genre_Types_Enum.Personaldevelopment]: 'Personal Development',
    [Book_Genre_Types_Enum.Philosophy]: 'Philosophy',
    [Book_Genre_Types_Enum.Policeprocedural]: 'Police Procedural',
    [Book_Genre_Types_Enum.Politics]: 'Politics',
    [Book_Genre_Types_Enum.Popularscience]: 'Popular Science',
    [Book_Genre_Types_Enum.PostApocalyptic]: 'Post Apocalyptic',
    [Book_Genre_Types_Enum.Psychologicalthriller]: 'Psychological Thriller',
    [Book_Genre_Types_Enum.Psychology]: 'Psychology',
    [Book_Genre_Types_Enum.Reference]: 'Reference',
    [Book_Genre_Types_Enum.ReligionSpirituality]: 'Religion Spirituality',
    [Book_Genre_Types_Enum.Romance]: 'Romance',
    [Book_Genre_Types_Enum.Satire]: 'Satire',
    [Book_Genre_Types_Enum.Science]: 'Science',
    [Book_Genre_Types_Enum.Sciencefiction]: 'Science Fiction',
    [Book_Genre_Types_Enum.SelfHelp]: 'Self Help',
    [Book_Genre_Types_Enum.Sociology]: 'Sociology',
    [Book_Genre_Types_Enum.Speculativefiction]: 'Speculative Fiction',
    [Book_Genre_Types_Enum.SportsLeisure]: 'Sports Leisure',
    [Book_Genre_Types_Enum.Suspense]: 'Suspense',
    [Book_Genre_Types_Enum.Technology]: 'Technology',
    [Book_Genre_Types_Enum.Thriller]: 'Thriller',
    [Book_Genre_Types_Enum.Timetravelfiction]: 'Time Travel Fiction',
    [Book_Genre_Types_Enum.Travelwriting]: 'Travel Writing',
    [Book_Genre_Types_Enum.Truecrime]: 'True Crime',
    [Book_Genre_Types_Enum.WarMilitaryfiction]: 'War Military Fiction',
    [Book_Genre_Types_Enum.Western]: 'Western',
    [Book_Genre_Types_Enum.Youngadult]: 'Young Adult'
};

export const bookGenresOptions = buildEnumOptions(Book_Genre_Types_Enum, bookGenresLabels);
export const bookGenresOptionsSchema = createOptionSchema(Book_Genre_Types_Enum);
