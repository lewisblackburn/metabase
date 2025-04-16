import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york-v4/ui/tabs';

import TMDBMovieImportTable from './tmdb-movie-import-table';

export default function Import() {
    return (
        <Tabs defaultValue='tmdb' className='w-full'>
            <TabsList>
                <TabsTrigger value='tmdb'>The Movie Database</TabsTrigger>
                <TabsTrigger value='spotify'>Spotify</TabsTrigger>
            </TabsList>
            <TabsContent value='tmdb'>
                <TMDBMovieImportTable />
            </TabsContent>
            <TabsContent value='spotify'>Change your password here.</TabsContent>
        </Tabs>
    );
}
