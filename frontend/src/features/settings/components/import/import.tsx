import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';

import GoogleBooksBookImportTable from './googlebooks-book-import-table';
import SpotifySongImportTable from './spotify-song-import.table';
import TMDBMovieImportTable from './tmdb-movie-import-table';

export default function Import() {
    return (
        <Tabs defaultValue='tmdb-movie' className='w-full'>
            <TabsList>
                <TabsTrigger value='tmdb-movie'>The Movie Database (Movie)</TabsTrigger>
                <TabsTrigger value='spotify-song'>Spotify (Song)</TabsTrigger>
                <TabsTrigger value='googlebooks-book'>Google Books (Book)</TabsTrigger>
            </TabsList>
            <TabsContent value='tmdb-movie'>
                <TMDBMovieImportTable />
            </TabsContent>
            <TabsContent value='spotify-song'>
                <SpotifySongImportTable />
            </TabsContent>
            <TabsContent value='googlebooks-book'>
                <GoogleBooksBookImportTable />
            </TabsContent>
        </Tabs>
    );
}
