import { MovieQuery } from '@/generated/graphql'

export type UserMovieActivity = NonNullable<
    NonNullable<MovieQuery['movies_by_pk']>['user_movie_activity']
>[0]
