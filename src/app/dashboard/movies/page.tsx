'use client';

import Link from 'next/link';

import Grid from '@/components/shared/grid';
import Poster from '@/components/shared/poster';
import { Container } from '@/components/ui/container';
import { MAX_LIMIT } from '@/constants/api.constant';
import MoviesSidebar from '@/features/movies/components/movies-sidebar';
import MoviesSkeleton from '@/features/movies/components/movies-skeleton';
import { GetMoviesQueryVariables, Order_By, useInfiniteGetMoviesQuery } from '@/generated/graphql';
import { RootState } from '@/store/store';

import { useSelector } from 'react-redux';

export default function MoviePage() {
    const moviesFilter = useSelector((state: RootState) => state.moviesFilter);

    const orderByMap = {
        popularity: 'view_count',
        'release-date': 'release_date',
        rating: 'average_rating'
    };

    const orderMap = {
        asc: Order_By.Asc,
        desc: Order_By.Desc
    };

    const orderBy = {
        [orderByMap[moviesFilter.orderBy.orderBy]]: orderMap[moviesFilter.orderBy.order]
    };

    const titleFilter: GetMoviesQueryVariables['where'] = moviesFilter.search
        ? {
              title: {
                  _ilike: `%${moviesFilter.search}%`
              }
          }
        : {};

    const alternativeTitlesFilter: GetMoviesQueryVariables['where'] = moviesFilter.search
        ? {
              movie_alternative_titles: {
                  alternative_title: {
                      _ilike: `%${moviesFilter.search}%`
                  }
              }
          }
        : {};

    const showMeFilter: GetMoviesQueryVariables['where'] =
        moviesFilter.showMe === 'everything'
            ? {}
            : {
                  user_rating: {
                      _is_null: moviesFilter.showMe === 'seen' ? false : true
                  }
              };

    const availabilitiesFilter: GetMoviesQueryVariables['where'] =
        moviesFilter.availabilities && moviesFilter.availabilities.length > 0
            ? {
                  movie_availabilities: {
                      availability: {
                          id: {
                              _in: moviesFilter.availabilities
                          }
                      }
                  }
              }
            : {};

    const releaseDateFilter: GetMoviesQueryVariables['where'] = moviesFilter.releaseDates
        ? {
              release_date: {
                  _gte: moviesFilter.releaseDates.from,
                  _lte: moviesFilter.releaseDates.to
              }
          }
        : {};

    const genreFilter: GetMoviesQueryVariables['where'] =
        moviesFilter.genres && moviesFilter.genres.length > 0
            ? {
                  movie_genres: {
                      genre: {
                          id: {
                              _in: moviesFilter.genres
                          }
                      }
                  }
              }
            : {};

    const certificationFilter: GetMoviesQueryVariables['where'] =
        moviesFilter.certifications && moviesFilter.certifications.length > 0
            ? {
                  certification: {
                      id: {
                          _in: Array.isArray(moviesFilter.certifications)
                              ? moviesFilter.certifications
                              : [moviesFilter.certifications]
                      }
                  }
              }
            : {};

    const statusFilter: GetMoviesQueryVariables['where'] =
        moviesFilter.statuses && moviesFilter.statuses.length > 0
            ? {
                  status: {
                      id: {
                          _in: Array.isArray(moviesFilter.statuses) ? moviesFilter.statuses : [moviesFilter.statuses]
                      }
                  }
              }
            : {};

    const languageFilter: GetMoviesQueryVariables['where'] = moviesFilter.language
        ? {
              language: {
                  _ilike: `%${moviesFilter.language}%`
              }
          }
        : {};

    const userScoreFilter: GetMoviesQueryVariables['where'] = moviesFilter.userScore
        ? {
              average_rating: {
                  _gte: moviesFilter.userScore?.[0],
                  _lte: moviesFilter.userScore?.[1]
              }
          }
        : {};

    const minimumUserVotesFilter: GetMoviesQueryVariables['where'] = moviesFilter.minVotes
        ? {
              vote_count: {
                  _gte: moviesFilter.minVotes?.[0]
              }
          }
        : {};

    const runtimeFilter: GetMoviesQueryVariables['where'] = moviesFilter.runtime
        ? {
              runtime: {
                  _gte: moviesFilter.runtime?.[0],
                  _lte: moviesFilter.runtime?.[1]
              }
          }
        : {};

    const keywords = moviesFilter.keywords?.map((keyword) => keyword.value);

    const keywordFilter: GetMoviesQueryVariables['where'] =
        keywords && keywords.length > 0
            ? {
                  movie_keywords: {
                      keyword: {
                          keyword: {
                              _in: keywords
                          }
                      }
                  }
              }
            : {};

    const where: GetMoviesQueryVariables['where'] = {
        ...showMeFilter,
        _or: [
            {
                ...titleFilter
            },
            { ...alternativeTitlesFilter }
        ],
        ...availabilitiesFilter,
        ...keywordFilter,
        ...releaseDateFilter,
        ...genreFilter,
        ...certificationFilter,
        ...statusFilter,
        ...languageFilter,
        ...userScoreFilter,
        ...minimumUserVotesFilter,
        ...runtimeFilter
    };

    const { data, isLoading } = useInfiniteGetMoviesQuery(
        {
            where,
            order_by: orderBy,
            limit: MAX_LIMIT
        },
        {
            initialPageParam: { offset: 0 },
            // NOTE: If the last page has fewer movies than the limit, there are no more pages
            getNextPageParam: (lastPage, pages) =>
                lastPage.movies.length === MAX_LIMIT ? { offset: pages.length * MAX_LIMIT } : undefined,
            gcTime: 0,
            staleTime: 0
        }
    );

    if (isLoading)
        return (
            <MoviesSidebar>
                <MoviesSkeleton />
            </MoviesSidebar>
        );

    return (
        <MoviesSidebar>
            <Container size='full'>
                <Grid>
                    {data?.pages?.flatMap((page) =>
                        page.movies.map((movie) => (
                            <Link key={movie.id} href={`movies/${movie.id}`}>
                                <Poster title={movie.title} image={movie.poster} />
                            </Link>
                        ))
                    )}
                </Grid>
            </Container>
        </MoviesSidebar>
    );
}
