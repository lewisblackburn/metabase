import * as React from 'react';

import ScrollableTabs from '@/components/shared/scrollable-tabs';
import { OBJECT_TYPE } from '@/constants/objects.constant';
import { userBookStatusOptions } from '@/features/books/constants/book-enums';
import { userMovieStatusOptions } from '@/features/movies/constants/movie-enums';
import { Object_Types_Enum, User_Book_Status_Types_Enum, User_Movie_Status_Types_Enum } from '@/generated/graphql';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/new-york-v4/ui/select';
import { TabsContent } from '@/registry/new-york-v4/ui/tabs';

import UserBooksList from './user-books-list';
import UserMoviesList from './user-movies-list';
import { ListIcon } from 'lucide-react';

const ObjectTypeButtons = {
    [Object_Types_Enum.Movie]: [
        {
            value: 'all',
            label: 'All',
            icon: ListIcon
        },
        ...userMovieStatusOptions
    ],
    [Object_Types_Enum.Book]: [
        {
            value: 'all',
            label: 'All',
            icon: ListIcon
        },
        ...userBookStatusOptions
    ]
} as const;

export default function Collections() {
    const [selectedCollection, setSelectedCollection] = React.useState<Object_Types_Enum>(Object_Types_Enum.Movie);
    const [selectedValue, setSelectedValue] = React.useState<string>('all');

    const buttons = ObjectTypeButtons[selectedCollection as keyof typeof ObjectTypeButtons] ?? [];

    const statusTabs = buttons.map(({ value, label, icon: Icon }) => ({
        value,
        label,
        icon: Icon
    }));

    const handleCollectionChange = (value: string) => {
        setSelectedCollection(value as Object_Types_Enum);
        setSelectedValue('all');
    };

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-start gap-2'>
                <div className='flex-shrink-0'>
                    <Select value={selectedCollection} onValueChange={handleCollectionChange}>
                        <SelectTrigger>
                            <SelectValue placeholder='Select a collection' />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.keys(ObjectTypeButtons).map((type) => (
                                <SelectItem key={type} value={type}>
                                    {OBJECT_TYPE[type as Object_Types_Enum].plural}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className='min-w-0 flex-1'>
                    <ScrollableTabs
                        key={selectedCollection}
                        defaultValue={selectedValue}
                        tabs={statusTabs}
                        onChange={(value) => setSelectedValue(value)}
                        className='w-full'>
                        {statusTabs.map((tab) => (
                            <TabsContent key={tab.value} value={tab.value}>
                                {selectedCollection === Object_Types_Enum.Movie ? (
                                    <UserMoviesList status={tab.value as User_Movie_Status_Types_Enum | 'all'} />
                                ) : (
                                    <UserBooksList status={tab.value as User_Book_Status_Types_Enum | 'all'} />
                                )}
                            </TabsContent>
                        ))}
                    </ScrollableTabs>
                </div>
            </div>
        </div>
    );
}
