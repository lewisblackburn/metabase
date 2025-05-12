import { NewMovieForm } from '@/features/movies/components/new-movie-form';

export default function NewMovie() {
    return (
        <div className='container mx-auto py-6'>
            <div className='mb-6 flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>New Movie</h1>
            </div>
            <NewMovieForm />
        </div>
    );
}
