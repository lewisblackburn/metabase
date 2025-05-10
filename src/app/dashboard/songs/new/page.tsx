import { NewSongForm } from '@/features/songs/components/new-song-form';

export default function NewSong() {
    return (
        <div className='container mx-auto py-6'>
            <div className='mb-6 flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>New Song</h1>
            </div>
            <NewSongForm />
        </div>
    );
}
