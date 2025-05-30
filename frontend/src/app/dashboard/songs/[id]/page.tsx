'use client';

import NotFound from '@/app/not-found';
import ActionButton from '@/components/shared/action-button';
import AuditLogs from '@/components/shared/audit-logs';
import DefaultLoading from '@/components/shared/default-loading';
import ItemInformation from '@/components/shared/item-information';
import ReportObjectDialog from '@/components/shared/report-object-dialog';
import ReportsTable from '@/components/shared/reports-table';
import ResponsiveDialog from '@/components/shared/responsive-dailog';
import ScrollableTabs from '@/components/shared/scrollable-tabs';
import { LANGUAGES } from '@/constants/languages.constant';
import { toggleEditDialogOpenState } from '@/features/edit-dailog/store/edit-dialog.slice';
import ObjectOverview from '@/features/movies/components/movie-overview';
import AlbumMedia from '@/features/songs/components/album-media';
import ReviewSongDialog from '@/features/songs/components/review-song-dialog';
import SongChanges from '@/features/songs/components/song-changes';
import SongContentScore from '@/features/songs/components/song-content-score';
import SongCredits from '@/features/songs/components/song-credits';
import SongFavouriteButton from '@/features/songs/components/song-favourite-button';
import SongLayout from '@/features/songs/components/song-layout';
import { SongProvider, useSong } from '@/features/songs/components/song-provider';
import SongReviews from '@/features/songs/components/song-reviews';
import SongSoundtracks from '@/features/songs/components/song-soundtracks';
import { Object_Types_Enum } from '@/generated/graphql';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { TabsContent } from '@/registry/new-york-v4/ui/tabs';

import dayjs from 'dayjs';
import {
    Calendar,
    Edit,
    Eye,
    Flag,
    Image,
    Info,
    Layers2,
    Music,
    Star,
    Timer,
    TrendingUp,
    Trophy,
    User,
    Video
} from 'lucide-react';
import { useDispatch } from 'react-redux';

export default function SongPage() {
    return (
        <SongProvider>
            <SongPageContent />
        </SongProvider>
    );
}

const tabItems = [
    { value: 'reviews', icon: Star, label: 'Reviews' },
    { value: 'credits', icon: User, label: 'Credits' },
    { value: 'soundtracks', icon: Music, label: 'Soundtracks' },
    { value: 'awards', icon: Trophy, label: 'Awards' },
    { value: 'media', icon: Image, label: 'Media' },
    { value: 'changes', icon: Edit, label: 'Changes' },
    { value: 'reports', icon: Flag, label: 'Reports' }
];

function SongPageContent() {
    const dispatch = useDispatch();
    const { song, isLoading } = useSong();

    if (isLoading) return <DefaultLoading />;
    if (!song) return <NotFound />;

    const tabContents = {
        reviews: {
            content: <SongReviews />
        },
        credits: { content: <SongCredits /> },
        soundtracks: { content: <SongSoundtracks /> },
        awards: { content: 'No awards available' },
        media: { content: <AlbumMedia /> },
        changes: { content: <AuditLogs tableName='songs' entityId={song?.id} /> },
        reports: { content: <ReportsTable objectType={Object_Types_Enum.Song} /> }
    };

    return (
        <SongLayout artworkAlt={song.name} artworkImage={song.album?.artwork ?? 'https://placehold.co/450x450x.png'}>
            {{
                mainContent: (
                    <div className='space-y-4'>
                        <div>
                            <div className='flex items-start justify-between'>
                                <h2>{song.name}</h2>
                            </div>
                            {song.song_genres.length > 0 && (
                                <div className='mt-3 flex flex-wrap gap-2'>
                                    {song.song_genres.map((genre) => (
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
                                {dayjs(song.album?.release_date).format('MMMM Do, YYYY')}
                            </span>
                            <span className='flex items-center gap-1'>
                                <Timer className='h-4 w-4' />
                                {song.duration}
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
                                    <ItemInformation icon={Eye} label='View Count'>
                                        {song.view_count || 0}
                                    </ItemInformation>

                                    <ItemInformation icon={Star} label='Content Score'>
                                        <SongContentScore />
                                    </ItemInformation>
                                </div>
                            </ResponsiveDialog>
                        </div>

                        <div className='flex flex-wrap items-center gap-2'>
                            <SongFavouriteButton />
                            <ReviewSongDialog />
                            <ReportObjectDialog
                                objectId={song.id}
                                objectType={Object_Types_Enum.Song}
                                queryKey={['GetReports', song.id]}
                            />
                            <ActionButton
                                icon={Edit}
                                size='sm'
                                onClick={() =>
                                    dispatch(
                                        toggleEditDialogOpenState({
                                            objectType: Object_Types_Enum.Song,
                                            objectId: song.id
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
        </SongLayout>
    );
}
