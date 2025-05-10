'use client';

import NotFound from '@/app/not-found';
import ActionButton from '@/components/shared/action-button';
import ItemInformation from '@/components/shared/item-information';
import ResponsiveDialog from '@/components/shared/responsive-dailog';
import ScrollableTabs from '@/components/shared/scrollable-tabs';
import { LANGUAGES } from '@/constants/languages.constant';
import BookChanges from '@/features/books/components/book-changes';
import BookCredits from '@/features/books/components/book-credits';
import BookFavouriteButton from '@/features/books/components/book-favourite-button';
import BookLayout from '@/features/books/components/book-layout';
import { BookProvider, useBook } from '@/features/books/components/book-provider';
import BookStatusPicker from '@/features/books/components/book-status-picker';
import ReviewBookDialog from '@/features/books/components/review-book-dialog';
import { bookReleaseStatusLabels } from '@/features/books/constants/book-enums';
import { toggleEditDialogOpenState } from '@/features/edit-dailog/store/edit-dialog.slice';
import ObjectOverview from '@/features/movies/components/movie-overview';
import { Object_Types_Enum } from '@/generated/graphql';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { TabsContent } from '@/registry/new-york-v4/ui/tabs';

import dayjs from 'dayjs';
import {
    Calendar,
    Edit,
    Eye,
    Image,
    Info,
    Languages,
    Layers2,
    Music,
    Star,
    Timer,
    Trophy,
    User,
    Video
} from 'lucide-react';
import { useDispatch } from 'react-redux';

export default function BookPage() {
    return (
        <BookProvider>
            <BookPageContent />
        </BookProvider>
    );
}

const tabItems = [
    { value: 'reviews', icon: Star, label: 'Reviews' },
    { value: 'where-to-watch', icon: Layers2, label: 'Where to Watch' },
    { value: 'credits', icon: User, label: 'Credits' },
    { value: 'awards', icon: Trophy, label: 'Awards' },
    { value: 'images', icon: Image, label: 'Images' },
    { value: 'videos', icon: Video, label: 'Videos' },
    { value: 'changes', icon: Edit, label: 'Changes' }
];

function BookPageContent() {
    const dispatch = useDispatch();
    const { book } = useBook();

    if (!book) return <NotFound />;

    const tabContents = {
        reviews: {
            content: 'No reviews available.'
        },
        'where-to-watch': { content: 'No where to watch information available.' },
        credits: { content: <BookCredits /> },
        awards: { content: 'No awards available' },
        images: { content: 'No images available.' },
        videos: { content: 'No videos available.' },
        changes: { content: <BookChanges /> }
    };

    return (
        <BookLayout coverAlt={book.title} coverImage={book.cover}>
            {{
                mainContent: (
                    <div className='space-y-4'>
                        <div>
                            <div className='flex items-start justify-between'>
                                <h2>{book.title}</h2>
                            </div>
                            {book.book_genres.length > 0 && (
                                <div className='mt-3 flex flex-wrap gap-2'>
                                    {book.book_genres.map((genre) => (
                                        <Badge key={genre.genre} variant='outline'>
                                            {genre.genre}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className='text-muted-foreground flex flex-wrap gap-x-6 gap-y-2 text-sm'>
                            <span className='flex items-center gap-1'>
                                <Calendar className='h-4 w-4' />
                                {dayjs(book.published_date).format('MMMM Do, YYYY')}
                            </span>
                            <span className='flex items-center gap-1'>
                                <Timer className='h-4 w-4' />
                                {book.reading_time}
                            </span>
                            <ResponsiveDialog
                                title='More Information'
                                hasVisibleTitle
                                trigger={
                                    <span className='flex cursor-pointer items-center gap-1'>
                                        <Info className='size-3' />
                                        View More
                                    </span>
                                }>
                                <div className='flex flex-col gap-4'>
                                    <ItemInformation icon={Languages} label='Language'>
                                        {LANGUAGES.find((lang) => lang.code === book.language)?.label || 'Unknown'}
                                    </ItemInformation>

                                    <ItemInformation icon={Info} label='Status'>
                                        {book.status && <>{bookReleaseStatusLabels[book.status] || 'Unknown'}</>}
                                    </ItemInformation>

                                    <ItemInformation icon={Eye} label='View Count'>
                                        {book.view_count || 0}
                                    </ItemInformation>

                                    {/* <ItemInformation icon={TrendingUp} label='Content Score'> */}
                                    {/* <MovieContentScore /> */}
                                    {/* </ItemInformation> */}
                                </div>
                            </ResponsiveDialog>
                        </div>

                        {book.overview && <ObjectOverview title={book.title} text={book.overview} />}

                        <div className='flex flex-wrap items-center gap-2'>
                            <BookFavouriteButton />
                            <ReviewBookDialog />
                            <BookStatusPicker />
                            <ActionButton
                                icon={Edit}
                                size='sm'
                                onClick={() =>
                                    dispatch(
                                        toggleEditDialogOpenState({
                                            objectType: Object_Types_Enum.Book,
                                            objectId: book.id
                                        })
                                    )
                                }>
                                Edit
                            </ActionButton>
                        </div>
                    </div>
                ),
                bottomContent: (
                    <ScrollableTabs defaultValue='reviews' tabs={tabItems}>
                        {Object.entries(tabContents).map(([key, { content }]) => (
                            <TabsContent key={key} value={key} className='px-1'>
                                {content}
                            </TabsContent>
                        ))}
                    </ScrollableTabs>
                )
            }}
        </BookLayout>
    );
}
