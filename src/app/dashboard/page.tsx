'use client';

import { tmdbMovieImporterService } from '@/services/tmdb/tmdb-movie-importer.service';

export default function DashboardPage() {
    const test = async () => {
        const result = await tmdbMovieImporterService.import('123');
        console.log(result);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={test}>Test</button>
        </div>
    );
}
