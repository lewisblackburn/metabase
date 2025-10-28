import MovieFilterBar from './components/movie-filter-buttons/movie-filter-buttons'
import MovieList from './components/movie-list/movie-list'

export default function MoviesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <MovieFilterBar />
      </div>
      <MovieList />
    </div>
  )
}
