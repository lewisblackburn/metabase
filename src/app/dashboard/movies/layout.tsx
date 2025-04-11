import MoviesSidebar from '@/features/movies/components/movies-sidebar';

export default function MoviesPageLayout({ children }: { children: React.ReactNode }) {
    return <MoviesSidebar>{children}</MoviesSidebar>;
}
