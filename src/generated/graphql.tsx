import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { fetcher } from '../lib/graphql-client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  bytea: { input: any; output: any; }
  citext: { input: any; output: any; }
  date: { input: any; output: any; }
  interval: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  money: { input: any; output: any; }
  smallint: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']['input']>;
  _gt?: InputMaybe<Scalars['Float']['input']>;
  _gte?: InputMaybe<Scalars['Float']['input']>;
  _in?: InputMaybe<Array<Scalars['Float']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Float']['input']>;
  _lte?: InputMaybe<Scalars['Float']['input']>;
  _neq?: InputMaybe<Scalars['Float']['input']>;
  _nin?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "album_artists" */
export type Album_Artists = {
  __typename?: 'album_artists';
  /** An object relationship */
  album: Albums;
  album_id: Scalars['uuid']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  person: People;
  person_id: Scalars['uuid']['output'];
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "album_artists" */
export type Album_Artists_Aggregate = {
  __typename?: 'album_artists_aggregate';
  aggregate?: Maybe<Album_Artists_Aggregate_Fields>;
  nodes: Array<Album_Artists>;
};

export type Album_Artists_Aggregate_Bool_Exp = {
  count?: InputMaybe<Album_Artists_Aggregate_Bool_Exp_Count>;
};

export type Album_Artists_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Album_Artists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Album_Artists_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "album_artists" */
export type Album_Artists_Aggregate_Fields = {
  __typename?: 'album_artists_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Album_Artists_Max_Fields>;
  min?: Maybe<Album_Artists_Min_Fields>;
};


/** aggregate fields of "album_artists" */
export type Album_Artists_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Album_Artists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "album_artists" */
export type Album_Artists_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Album_Artists_Max_Order_By>;
  min?: InputMaybe<Album_Artists_Min_Order_By>;
};

/** input type for inserting array relation for remote table "album_artists" */
export type Album_Artists_Arr_Rel_Insert_Input = {
  data: Array<Album_Artists_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Album_Artists_On_Conflict>;
};

/** Boolean expression to filter rows from the table "album_artists". All fields are combined with a logical 'AND'. */
export type Album_Artists_Bool_Exp = {
  _and?: InputMaybe<Array<Album_Artists_Bool_Exp>>;
  _not?: InputMaybe<Album_Artists_Bool_Exp>;
  _or?: InputMaybe<Array<Album_Artists_Bool_Exp>>;
  album?: InputMaybe<Albums_Bool_Exp>;
  album_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<People_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "album_artists" */
export enum Album_Artists_Constraint {
  /** unique or primary key constraint on columns "id" */
  AlbumArtistsPkey = 'album_artists_pkey'
}

/** input type for inserting data into table "album_artists" */
export type Album_Artists_Insert_Input = {
  album?: InputMaybe<Albums_Obj_Rel_Insert_Input>;
  album_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person?: InputMaybe<People_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Album_Artists_Max_Fields = {
  __typename?: 'album_artists_max_fields';
  album_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "album_artists" */
export type Album_Artists_Max_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Album_Artists_Min_Fields = {
  __typename?: 'album_artists_min_fields';
  album_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "album_artists" */
export type Album_Artists_Min_Order_By = {
  album_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "album_artists" */
export type Album_Artists_Mutation_Response = {
  __typename?: 'album_artists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Album_Artists>;
};

/** on_conflict condition type for table "album_artists" */
export type Album_Artists_On_Conflict = {
  constraint: Album_Artists_Constraint;
  update_columns?: Array<Album_Artists_Update_Column>;
  where?: InputMaybe<Album_Artists_Bool_Exp>;
};

/** Ordering options when selecting data from "album_artists". */
export type Album_Artists_Order_By = {
  album?: InputMaybe<Albums_Order_By>;
  album_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<People_Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: album_artists */
export type Album_Artists_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "album_artists" */
export enum Album_Artists_Select_Column {
  /** column name */
  AlbumId = 'album_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "album_artists" */
export type Album_Artists_Set_Input = {
  album_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "album_artists" */
export type Album_Artists_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Album_Artists_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Album_Artists_Stream_Cursor_Value_Input = {
  album_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "album_artists" */
export enum Album_Artists_Update_Column {
  /** column name */
  AlbumId = 'album_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  Role = 'role'
}

export type Album_Artists_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Album_Artists_Set_Input>;
  /** filter the rows which have to be updated */
  where: Album_Artists_Bool_Exp;
};

/** columns and relationships of "album_songs" */
export type Album_Songs = {
  __typename?: 'album_songs';
  /** An object relationship */
  album: Albums;
  album_id: Scalars['uuid']['output'];
  /** An object relationship */
  song: Songs;
  song_id: Scalars['uuid']['output'];
  track_number?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "album_songs" */
export type Album_Songs_Aggregate = {
  __typename?: 'album_songs_aggregate';
  aggregate?: Maybe<Album_Songs_Aggregate_Fields>;
  nodes: Array<Album_Songs>;
};

export type Album_Songs_Aggregate_Bool_Exp = {
  count?: InputMaybe<Album_Songs_Aggregate_Bool_Exp_Count>;
};

export type Album_Songs_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Album_Songs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Album_Songs_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "album_songs" */
export type Album_Songs_Aggregate_Fields = {
  __typename?: 'album_songs_aggregate_fields';
  avg?: Maybe<Album_Songs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Album_Songs_Max_Fields>;
  min?: Maybe<Album_Songs_Min_Fields>;
  stddev?: Maybe<Album_Songs_Stddev_Fields>;
  stddev_pop?: Maybe<Album_Songs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Album_Songs_Stddev_Samp_Fields>;
  sum?: Maybe<Album_Songs_Sum_Fields>;
  var_pop?: Maybe<Album_Songs_Var_Pop_Fields>;
  var_samp?: Maybe<Album_Songs_Var_Samp_Fields>;
  variance?: Maybe<Album_Songs_Variance_Fields>;
};


/** aggregate fields of "album_songs" */
export type Album_Songs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Album_Songs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "album_songs" */
export type Album_Songs_Aggregate_Order_By = {
  avg?: InputMaybe<Album_Songs_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Album_Songs_Max_Order_By>;
  min?: InputMaybe<Album_Songs_Min_Order_By>;
  stddev?: InputMaybe<Album_Songs_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Album_Songs_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Album_Songs_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Album_Songs_Sum_Order_By>;
  var_pop?: InputMaybe<Album_Songs_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Album_Songs_Var_Samp_Order_By>;
  variance?: InputMaybe<Album_Songs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "album_songs" */
export type Album_Songs_Arr_Rel_Insert_Input = {
  data: Array<Album_Songs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Album_Songs_On_Conflict>;
};

/** aggregate avg on columns */
export type Album_Songs_Avg_Fields = {
  __typename?: 'album_songs_avg_fields';
  track_number?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "album_songs" */
export type Album_Songs_Avg_Order_By = {
  track_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "album_songs". All fields are combined with a logical 'AND'. */
export type Album_Songs_Bool_Exp = {
  _and?: InputMaybe<Array<Album_Songs_Bool_Exp>>;
  _not?: InputMaybe<Album_Songs_Bool_Exp>;
  _or?: InputMaybe<Array<Album_Songs_Bool_Exp>>;
  album?: InputMaybe<Albums_Bool_Exp>;
  album_id?: InputMaybe<Uuid_Comparison_Exp>;
  song?: InputMaybe<Songs_Bool_Exp>;
  song_id?: InputMaybe<Uuid_Comparison_Exp>;
  track_number?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "album_songs" */
export enum Album_Songs_Constraint {
  /** unique or primary key constraint on columns "album_id", "song_id" */
  AlbumSongsPkey = 'album_songs_pkey'
}

/** input type for incrementing numeric columns in table "album_songs" */
export type Album_Songs_Inc_Input = {
  track_number?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "album_songs" */
export type Album_Songs_Insert_Input = {
  album?: InputMaybe<Albums_Obj_Rel_Insert_Input>;
  album_id?: InputMaybe<Scalars['uuid']['input']>;
  song?: InputMaybe<Songs_Obj_Rel_Insert_Input>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  track_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Album_Songs_Max_Fields = {
  __typename?: 'album_songs_max_fields';
  album_id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  track_number?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "album_songs" */
export type Album_Songs_Max_Order_By = {
  album_id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  track_number?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Album_Songs_Min_Fields = {
  __typename?: 'album_songs_min_fields';
  album_id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  track_number?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "album_songs" */
export type Album_Songs_Min_Order_By = {
  album_id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  track_number?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "album_songs" */
export type Album_Songs_Mutation_Response = {
  __typename?: 'album_songs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Album_Songs>;
};

/** on_conflict condition type for table "album_songs" */
export type Album_Songs_On_Conflict = {
  constraint: Album_Songs_Constraint;
  update_columns?: Array<Album_Songs_Update_Column>;
  where?: InputMaybe<Album_Songs_Bool_Exp>;
};

/** Ordering options when selecting data from "album_songs". */
export type Album_Songs_Order_By = {
  album?: InputMaybe<Albums_Order_By>;
  album_id?: InputMaybe<Order_By>;
  song?: InputMaybe<Songs_Order_By>;
  song_id?: InputMaybe<Order_By>;
  track_number?: InputMaybe<Order_By>;
};

/** primary key columns input for table: album_songs */
export type Album_Songs_Pk_Columns_Input = {
  album_id: Scalars['uuid']['input'];
  song_id: Scalars['uuid']['input'];
};

/** select columns of table "album_songs" */
export enum Album_Songs_Select_Column {
  /** column name */
  AlbumId = 'album_id',
  /** column name */
  SongId = 'song_id',
  /** column name */
  TrackNumber = 'track_number'
}

/** input type for updating data in table "album_songs" */
export type Album_Songs_Set_Input = {
  album_id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  track_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Album_Songs_Stddev_Fields = {
  __typename?: 'album_songs_stddev_fields';
  track_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "album_songs" */
export type Album_Songs_Stddev_Order_By = {
  track_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Album_Songs_Stddev_Pop_Fields = {
  __typename?: 'album_songs_stddev_pop_fields';
  track_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "album_songs" */
export type Album_Songs_Stddev_Pop_Order_By = {
  track_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Album_Songs_Stddev_Samp_Fields = {
  __typename?: 'album_songs_stddev_samp_fields';
  track_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "album_songs" */
export type Album_Songs_Stddev_Samp_Order_By = {
  track_number?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "album_songs" */
export type Album_Songs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Album_Songs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Album_Songs_Stream_Cursor_Value_Input = {
  album_id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  track_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Album_Songs_Sum_Fields = {
  __typename?: 'album_songs_sum_fields';
  track_number?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "album_songs" */
export type Album_Songs_Sum_Order_By = {
  track_number?: InputMaybe<Order_By>;
};

/** update columns of table "album_songs" */
export enum Album_Songs_Update_Column {
  /** column name */
  AlbumId = 'album_id',
  /** column name */
  SongId = 'song_id',
  /** column name */
  TrackNumber = 'track_number'
}

export type Album_Songs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Album_Songs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Album_Songs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Album_Songs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Album_Songs_Var_Pop_Fields = {
  __typename?: 'album_songs_var_pop_fields';
  track_number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "album_songs" */
export type Album_Songs_Var_Pop_Order_By = {
  track_number?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Album_Songs_Var_Samp_Fields = {
  __typename?: 'album_songs_var_samp_fields';
  track_number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "album_songs" */
export type Album_Songs_Var_Samp_Order_By = {
  track_number?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Album_Songs_Variance_Fields = {
  __typename?: 'album_songs_variance_fields';
  track_number?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "album_songs" */
export type Album_Songs_Variance_Order_By = {
  track_number?: InputMaybe<Order_By>;
};

/** columns and relationships of "albums" */
export type Albums = {
  __typename?: 'albums';
  /** An array relationship */
  album_artists: Array<Album_Artists>;
  /** An aggregate relationship */
  album_artists_aggregate: Album_Artists_Aggregate;
  /** An array relationship */
  album_songs: Array<Album_Songs>;
  /** An aggregate relationship */
  album_songs_aggregate: Album_Songs_Aggregate;
  cover_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  release_date?: Maybe<Scalars['date']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "albums" */
export type AlbumsAlbum_ArtistsArgs = {
  distinct_on?: InputMaybe<Array<Album_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Artists_Order_By>>;
  where?: InputMaybe<Album_Artists_Bool_Exp>;
};


/** columns and relationships of "albums" */
export type AlbumsAlbum_Artists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Artists_Order_By>>;
  where?: InputMaybe<Album_Artists_Bool_Exp>;
};


/** columns and relationships of "albums" */
export type AlbumsAlbum_SongsArgs = {
  distinct_on?: InputMaybe<Array<Album_Songs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Songs_Order_By>>;
  where?: InputMaybe<Album_Songs_Bool_Exp>;
};


/** columns and relationships of "albums" */
export type AlbumsAlbum_Songs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Songs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Songs_Order_By>>;
  where?: InputMaybe<Album_Songs_Bool_Exp>;
};

/** aggregated selection of "albums" */
export type Albums_Aggregate = {
  __typename?: 'albums_aggregate';
  aggregate?: Maybe<Albums_Aggregate_Fields>;
  nodes: Array<Albums>;
};

/** aggregate fields of "albums" */
export type Albums_Aggregate_Fields = {
  __typename?: 'albums_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Albums_Max_Fields>;
  min?: Maybe<Albums_Min_Fields>;
};


/** aggregate fields of "albums" */
export type Albums_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Albums_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "albums". All fields are combined with a logical 'AND'. */
export type Albums_Bool_Exp = {
  _and?: InputMaybe<Array<Albums_Bool_Exp>>;
  _not?: InputMaybe<Albums_Bool_Exp>;
  _or?: InputMaybe<Array<Albums_Bool_Exp>>;
  album_artists?: InputMaybe<Album_Artists_Bool_Exp>;
  album_artists_aggregate?: InputMaybe<Album_Artists_Aggregate_Bool_Exp>;
  album_songs?: InputMaybe<Album_Songs_Bool_Exp>;
  album_songs_aggregate?: InputMaybe<Album_Songs_Aggregate_Bool_Exp>;
  cover_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  release_date?: InputMaybe<Date_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "albums" */
export enum Albums_Constraint {
  /** unique or primary key constraint on columns "id" */
  AlbumsPkey = 'albums_pkey'
}

/** input type for inserting data into table "albums" */
export type Albums_Insert_Input = {
  album_artists?: InputMaybe<Album_Artists_Arr_Rel_Insert_Input>;
  album_songs?: InputMaybe<Album_Songs_Arr_Rel_Insert_Input>;
  cover_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Albums_Max_Fields = {
  __typename?: 'albums_max_fields';
  cover_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  release_date?: Maybe<Scalars['date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Albums_Min_Fields = {
  __typename?: 'albums_min_fields';
  cover_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  release_date?: Maybe<Scalars['date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "albums" */
export type Albums_Mutation_Response = {
  __typename?: 'albums_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Albums>;
};

/** input type for inserting object relation for remote table "albums" */
export type Albums_Obj_Rel_Insert_Input = {
  data: Albums_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Albums_On_Conflict>;
};

/** on_conflict condition type for table "albums" */
export type Albums_On_Conflict = {
  constraint: Albums_Constraint;
  update_columns?: Array<Albums_Update_Column>;
  where?: InputMaybe<Albums_Bool_Exp>;
};

/** Ordering options when selecting data from "albums". */
export type Albums_Order_By = {
  album_artists_aggregate?: InputMaybe<Album_Artists_Aggregate_Order_By>;
  album_songs_aggregate?: InputMaybe<Album_Songs_Aggregate_Order_By>;
  cover_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  release_date?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: albums */
export type Albums_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "albums" */
export enum Albums_Select_Column {
  /** column name */
  CoverUrl = 'cover_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ReleaseDate = 'release_date',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "albums" */
export type Albums_Set_Input = {
  cover_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "albums" */
export type Albums_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Albums_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Albums_Stream_Cursor_Value_Input = {
  cover_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "albums" */
export enum Albums_Update_Column {
  /** column name */
  CoverUrl = 'cover_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ReleaseDate = 'release_date',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Albums_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Albums_Set_Input>;
  /** filter the rows which have to be updated */
  where: Albums_Bool_Exp;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid']['output'];
  options?: Maybe<Scalars['jsonb']['output']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String']['output'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviders_Bool_Exp;
};

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes = {
  __typename?: 'authRefreshTokenTypes';
  comment?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** aggregated selection of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate = {
  __typename?: 'authRefreshTokenTypes_aggregate';
  aggregate?: Maybe<AuthRefreshTokenTypes_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokenTypes>;
};

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_Fields = {
  __typename?: 'authRefreshTokenTypes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRefreshTokenTypes_Max_Fields>;
  min?: Maybe<AuthRefreshTokenTypes_Min_Fields>;
};


/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokenTypes_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Constraint {
  /** unique or primary key constraint on columns "value" */
  RefreshTokenTypesPkey = 'refresh_token_types_pkey'
}

export enum AuthRefreshTokenTypes_Enum {
  /** Personal access token */
  Pat = 'pat',
  /** Regular refresh token */
  Regular = 'regular'
}

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export type AuthRefreshTokenTypes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _in?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _nin?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
};

/** input type for inserting data into table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokenTypes_Max_Fields = {
  __typename?: 'authRefreshTokenTypes_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRefreshTokenTypes_Min_Fields = {
  __typename?: 'authRefreshTokenTypes_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Mutation_Response = {
  __typename?: 'authRefreshTokenTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokenTypes>;
};

/** input type for inserting object relation for remote table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Obj_Rel_Insert_Input = {
  data: AuthRefreshTokenTypes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};

/** on_conflict condition type for table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_On_Conflict = {
  constraint: AuthRefreshTokenTypes_Constraint;
  update_columns?: Array<AuthRefreshTokenTypes_Update_Column>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_token_types". */
export type AuthRefreshTokenTypes_Order_By = {
  comment?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_token_types */
export type AuthRefreshTokenTypes_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRefreshTokenTypes" */
export type AuthRefreshTokenTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokenTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokenTypes_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type AuthRefreshTokenTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokenTypes_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz']['output'];
  expiresAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  refresh_token_type: AuthRefreshTokenTypes;
  type: AuthRefreshTokenTypes_Enum;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
  refresh_token_type?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  refresh_token_type?: InputMaybe<AuthRefreshTokenTypes_Obj_Rel_Insert_Input>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  refresh_token_type?: InputMaybe<AuthRefreshTokenTypes_Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String']['output'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String']['input'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String']['output'];
  providerUserId: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  role: Scalars['String']['output'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint']['output'];
  credentialId: Scalars['String']['output'];
  credentialPublicKey?: Maybe<Scalars['bytea']['output']>;
  id: Scalars['uuid']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  transports: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Internal table for tracking migrations. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Auth_Migrations = {
  __typename?: 'auth_migrations';
  executed_at?: Maybe<Scalars['timestamp']['output']>;
  hash: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "auth.migrations" */
export type Auth_Migrations_Aggregate = {
  __typename?: 'auth_migrations_aggregate';
  aggregate?: Maybe<Auth_Migrations_Aggregate_Fields>;
  nodes: Array<Auth_Migrations>;
};

/** aggregate fields of "auth.migrations" */
export type Auth_Migrations_Aggregate_Fields = {
  __typename?: 'auth_migrations_aggregate_fields';
  avg?: Maybe<Auth_Migrations_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Migrations_Max_Fields>;
  min?: Maybe<Auth_Migrations_Min_Fields>;
  stddev?: Maybe<Auth_Migrations_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Migrations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Migrations_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Migrations_Sum_Fields>;
  var_pop?: Maybe<Auth_Migrations_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Migrations_Var_Samp_Fields>;
  variance?: Maybe<Auth_Migrations_Variance_Fields>;
};


/** aggregate fields of "auth.migrations" */
export type Auth_Migrations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Auth_Migrations_Avg_Fields = {
  __typename?: 'auth_migrations_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "auth.migrations". All fields are combined with a logical 'AND'. */
export type Auth_Migrations_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Migrations_Bool_Exp>>;
  _not?: InputMaybe<Auth_Migrations_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Migrations_Bool_Exp>>;
  executed_at?: InputMaybe<Timestamp_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.migrations" */
export enum Auth_Migrations_Constraint {
  /** unique or primary key constraint on columns "name" */
  MigrationsNameKey = 'migrations_name_key',
  /** unique or primary key constraint on columns "id" */
  MigrationsPkey = 'migrations_pkey'
}

/** input type for incrementing numeric columns in table "auth.migrations" */
export type Auth_Migrations_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "auth.migrations" */
export type Auth_Migrations_Insert_Input = {
  executed_at?: InputMaybe<Scalars['timestamp']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Auth_Migrations_Max_Fields = {
  __typename?: 'auth_migrations_max_fields';
  executed_at?: Maybe<Scalars['timestamp']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Auth_Migrations_Min_Fields = {
  __typename?: 'auth_migrations_min_fields';
  executed_at?: Maybe<Scalars['timestamp']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.migrations" */
export type Auth_Migrations_Mutation_Response = {
  __typename?: 'auth_migrations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Migrations>;
};

/** on_conflict condition type for table "auth.migrations" */
export type Auth_Migrations_On_Conflict = {
  constraint: Auth_Migrations_Constraint;
  update_columns?: Array<Auth_Migrations_Update_Column>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.migrations". */
export type Auth_Migrations_Order_By = {
  executed_at?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.migrations */
export type Auth_Migrations_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "auth.migrations" */
export enum Auth_Migrations_Select_Column {
  /** column name */
  ExecutedAt = 'executed_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "auth.migrations" */
export type Auth_Migrations_Set_Input = {
  executed_at?: InputMaybe<Scalars['timestamp']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Auth_Migrations_Stddev_Fields = {
  __typename?: 'auth_migrations_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Migrations_Stddev_Pop_Fields = {
  __typename?: 'auth_migrations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Migrations_Stddev_Samp_Fields = {
  __typename?: 'auth_migrations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "auth_migrations" */
export type Auth_Migrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Migrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Migrations_Stream_Cursor_Value_Input = {
  executed_at?: InputMaybe<Scalars['timestamp']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Auth_Migrations_Sum_Fields = {
  __typename?: 'auth_migrations_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "auth.migrations" */
export enum Auth_Migrations_Update_Column {
  /** column name */
  ExecutedAt = 'executed_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Auth_Migrations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Auth_Migrations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Migrations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Migrations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Auth_Migrations_Var_Pop_Fields = {
  __typename?: 'auth_migrations_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Auth_Migrations_Var_Samp_Fields = {
  __typename?: 'auth_migrations_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Auth_Migrations_Variance_Fields = {
  __typename?: 'auth_migrations_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  downloadExpiration: Scalars['Int']['output'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String']['output'];
  maxUploadFileSize: Scalars['Int']['output'];
  minUploadFileSize: Scalars['Int']['output'];
  presignedUrlsEnabled: Scalars['Boolean']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']['input']>;
  _gt?: InputMaybe<Scalars['citext']['input']>;
  _gte?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>;
  _in?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>;
  _lt?: InputMaybe<Scalars['citext']['input']>;
  _lte?: InputMaybe<Scalars['citext']['input']>;
  _neq?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>;
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  etag?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  isUploaded?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  viri: Array<Virus>;
  /** An aggregate relationship */
  viri_aggregate: Virus_Aggregate;
};


/** columns and relationships of "storage.files" */
export type FilesMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "storage.files" */
export type FilesViriArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


/** columns and relationships of "storage.files" */
export type FilesViri_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

export type Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Files_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
  viri?: InputMaybe<Virus_Bool_Exp>;
  viri_aggregate?: InputMaybe<Virus_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Files_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Files_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Files_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
  viri?: InputMaybe<Virus_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  etag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  etag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
  viri_aggregate?: InputMaybe<Virus_Aggregate_Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Files_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type Files_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Files_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Files_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** columns and relationships of "genres" */
export type Genres = {
  __typename?: 'genres';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  movie_genres: Array<Movie_Genres>;
  /** An aggregate relationship */
  movie_genres_aggregate: Movie_Genres_Aggregate;
  name: Scalars['String']['output'];
  /** An array relationship */
  song_genres: Array<Song_Genres>;
  /** An aggregate relationship */
  song_genres_aggregate: Song_Genres_Aggregate;
};


/** columns and relationships of "genres" */
export type GenresMovie_GenresArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Genres_Order_By>>;
  where?: InputMaybe<Movie_Genres_Bool_Exp>;
};


/** columns and relationships of "genres" */
export type GenresMovie_Genres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Genres_Order_By>>;
  where?: InputMaybe<Movie_Genres_Bool_Exp>;
};


/** columns and relationships of "genres" */
export type GenresSong_GenresArgs = {
  distinct_on?: InputMaybe<Array<Song_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Genres_Order_By>>;
  where?: InputMaybe<Song_Genres_Bool_Exp>;
};


/** columns and relationships of "genres" */
export type GenresSong_Genres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Genres_Order_By>>;
  where?: InputMaybe<Song_Genres_Bool_Exp>;
};

/** aggregated selection of "genres" */
export type Genres_Aggregate = {
  __typename?: 'genres_aggregate';
  aggregate?: Maybe<Genres_Aggregate_Fields>;
  nodes: Array<Genres>;
};

/** aggregate fields of "genres" */
export type Genres_Aggregate_Fields = {
  __typename?: 'genres_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Genres_Max_Fields>;
  min?: Maybe<Genres_Min_Fields>;
};


/** aggregate fields of "genres" */
export type Genres_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Genres_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "genres". All fields are combined with a logical 'AND'. */
export type Genres_Bool_Exp = {
  _and?: InputMaybe<Array<Genres_Bool_Exp>>;
  _not?: InputMaybe<Genres_Bool_Exp>;
  _or?: InputMaybe<Array<Genres_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie_genres?: InputMaybe<Movie_Genres_Bool_Exp>;
  movie_genres_aggregate?: InputMaybe<Movie_Genres_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  song_genres?: InputMaybe<Song_Genres_Bool_Exp>;
  song_genres_aggregate?: InputMaybe<Song_Genres_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "genres" */
export enum Genres_Constraint {
  /** unique or primary key constraint on columns "name" */
  GenresNameKey = 'genres_name_key',
  /** unique or primary key constraint on columns "id" */
  GenresPkey = 'genres_pkey'
}

/** input type for inserting data into table "genres" */
export type Genres_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_genres?: InputMaybe<Movie_Genres_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  song_genres?: InputMaybe<Song_Genres_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Genres_Max_Fields = {
  __typename?: 'genres_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Genres_Min_Fields = {
  __typename?: 'genres_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "genres" */
export type Genres_Mutation_Response = {
  __typename?: 'genres_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Genres>;
};

/** input type for inserting object relation for remote table "genres" */
export type Genres_Obj_Rel_Insert_Input = {
  data: Genres_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Genres_On_Conflict>;
};

/** on_conflict condition type for table "genres" */
export type Genres_On_Conflict = {
  constraint: Genres_Constraint;
  update_columns?: Array<Genres_Update_Column>;
  where?: InputMaybe<Genres_Bool_Exp>;
};

/** Ordering options when selecting data from "genres". */
export type Genres_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_genres_aggregate?: InputMaybe<Movie_Genres_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  song_genres_aggregate?: InputMaybe<Song_Genres_Aggregate_Order_By>;
};

/** primary key columns input for table: genres */
export type Genres_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "genres" */
export enum Genres_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "genres" */
export type Genres_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "genres" */
export type Genres_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Genres_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Genres_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "genres" */
export enum Genres_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Genres_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Genres_Set_Input>;
  /** filter the rows which have to be updated */
  where: Genres_Bool_Exp;
};

/** Boolean expression to compare columns of type "interval". All fields are combined with logical 'AND'. */
export type Interval_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['interval']['input']>;
  _gt?: InputMaybe<Scalars['interval']['input']>;
  _gte?: InputMaybe<Scalars['interval']['input']>;
  _in?: InputMaybe<Array<Scalars['interval']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['interval']['input']>;
  _lte?: InputMaybe<Scalars['interval']['input']>;
  _neq?: InputMaybe<Scalars['interval']['input']>;
  _nin?: InputMaybe<Array<Scalars['interval']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "keywords" */
export type Keywords = {
  __typename?: 'keywords';
  id: Scalars['uuid']['output'];
  keyword: Scalars['String']['output'];
  /** An array relationship */
  movie_keywords: Array<Movie_Keywords>;
  /** An aggregate relationship */
  movie_keywords_aggregate: Movie_Keywords_Aggregate;
  /** An array relationship */
  song_keywords: Array<Song_Keywords>;
  /** An aggregate relationship */
  song_keywords_aggregate: Song_Keywords_Aggregate;
};


/** columns and relationships of "keywords" */
export type KeywordsMovie_KeywordsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Keywords_Order_By>>;
  where?: InputMaybe<Movie_Keywords_Bool_Exp>;
};


/** columns and relationships of "keywords" */
export type KeywordsMovie_Keywords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Keywords_Order_By>>;
  where?: InputMaybe<Movie_Keywords_Bool_Exp>;
};


/** columns and relationships of "keywords" */
export type KeywordsSong_KeywordsArgs = {
  distinct_on?: InputMaybe<Array<Song_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Keywords_Order_By>>;
  where?: InputMaybe<Song_Keywords_Bool_Exp>;
};


/** columns and relationships of "keywords" */
export type KeywordsSong_Keywords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Keywords_Order_By>>;
  where?: InputMaybe<Song_Keywords_Bool_Exp>;
};

/** aggregated selection of "keywords" */
export type Keywords_Aggregate = {
  __typename?: 'keywords_aggregate';
  aggregate?: Maybe<Keywords_Aggregate_Fields>;
  nodes: Array<Keywords>;
};

/** aggregate fields of "keywords" */
export type Keywords_Aggregate_Fields = {
  __typename?: 'keywords_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Keywords_Max_Fields>;
  min?: Maybe<Keywords_Min_Fields>;
};


/** aggregate fields of "keywords" */
export type Keywords_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Keywords_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "keywords". All fields are combined with a logical 'AND'. */
export type Keywords_Bool_Exp = {
  _and?: InputMaybe<Array<Keywords_Bool_Exp>>;
  _not?: InputMaybe<Keywords_Bool_Exp>;
  _or?: InputMaybe<Array<Keywords_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  keyword?: InputMaybe<String_Comparison_Exp>;
  movie_keywords?: InputMaybe<Movie_Keywords_Bool_Exp>;
  movie_keywords_aggregate?: InputMaybe<Movie_Keywords_Aggregate_Bool_Exp>;
  song_keywords?: InputMaybe<Song_Keywords_Bool_Exp>;
  song_keywords_aggregate?: InputMaybe<Song_Keywords_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "keywords" */
export enum Keywords_Constraint {
  /** unique or primary key constraint on columns "keyword" */
  KeywordsKeywordKey = 'keywords_keyword_key',
  /** unique or primary key constraint on columns "id" */
  KeywordsPkey = 'keywords_pkey'
}

/** input type for inserting data into table "keywords" */
export type Keywords_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  movie_keywords?: InputMaybe<Movie_Keywords_Arr_Rel_Insert_Input>;
  song_keywords?: InputMaybe<Song_Keywords_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Keywords_Max_Fields = {
  __typename?: 'keywords_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  keyword?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Keywords_Min_Fields = {
  __typename?: 'keywords_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  keyword?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "keywords" */
export type Keywords_Mutation_Response = {
  __typename?: 'keywords_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Keywords>;
};

/** input type for inserting object relation for remote table "keywords" */
export type Keywords_Obj_Rel_Insert_Input = {
  data: Keywords_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Keywords_On_Conflict>;
};

/** on_conflict condition type for table "keywords" */
export type Keywords_On_Conflict = {
  constraint: Keywords_Constraint;
  update_columns?: Array<Keywords_Update_Column>;
  where?: InputMaybe<Keywords_Bool_Exp>;
};

/** Ordering options when selecting data from "keywords". */
export type Keywords_Order_By = {
  id?: InputMaybe<Order_By>;
  keyword?: InputMaybe<Order_By>;
  movie_keywords_aggregate?: InputMaybe<Movie_Keywords_Aggregate_Order_By>;
  song_keywords_aggregate?: InputMaybe<Song_Keywords_Aggregate_Order_By>;
};

/** primary key columns input for table: keywords */
export type Keywords_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "keywords" */
export enum Keywords_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Keyword = 'keyword'
}

/** input type for updating data in table "keywords" */
export type Keywords_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "keywords" */
export type Keywords_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Keywords_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Keywords_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "keywords" */
export enum Keywords_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Keyword = 'keyword'
}

export type Keywords_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Keywords_Set_Input>;
  /** filter the rows which have to be updated */
  where: Keywords_Bool_Exp;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']['input']>;
  _gt?: InputMaybe<Scalars['money']['input']>;
  _gte?: InputMaybe<Scalars['money']['input']>;
  _in?: InputMaybe<Array<Scalars['money']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['money']['input']>;
  _lte?: InputMaybe<Scalars['money']['input']>;
  _neq?: InputMaybe<Scalars['money']['input']>;
  _nin?: InputMaybe<Array<Scalars['money']['input']>>;
};

/** columns and relationships of "movie_alternative_titles" */
export type Movie_Alternative_Titles = {
  __typename?: 'movie_alternative_titles';
  alternative_title: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  language?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
};

/** aggregated selection of "movie_alternative_titles" */
export type Movie_Alternative_Titles_Aggregate = {
  __typename?: 'movie_alternative_titles_aggregate';
  aggregate?: Maybe<Movie_Alternative_Titles_Aggregate_Fields>;
  nodes: Array<Movie_Alternative_Titles>;
};

export type Movie_Alternative_Titles_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Alternative_Titles_Aggregate_Bool_Exp_Count>;
};

export type Movie_Alternative_Titles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Alternative_Titles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Alternative_Titles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_alternative_titles" */
export type Movie_Alternative_Titles_Aggregate_Fields = {
  __typename?: 'movie_alternative_titles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Alternative_Titles_Max_Fields>;
  min?: Maybe<Movie_Alternative_Titles_Min_Fields>;
};


/** aggregate fields of "movie_alternative_titles" */
export type Movie_Alternative_Titles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Alternative_Titles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_alternative_titles" */
export type Movie_Alternative_Titles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Alternative_Titles_Max_Order_By>;
  min?: InputMaybe<Movie_Alternative_Titles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "movie_alternative_titles" */
export type Movie_Alternative_Titles_Arr_Rel_Insert_Input = {
  data: Array<Movie_Alternative_Titles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Alternative_Titles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "movie_alternative_titles". All fields are combined with a logical 'AND'. */
export type Movie_Alternative_Titles_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Alternative_Titles_Bool_Exp>>;
  _not?: InputMaybe<Movie_Alternative_Titles_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Alternative_Titles_Bool_Exp>>;
  alternative_title?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_alternative_titles" */
export enum Movie_Alternative_Titles_Constraint {
  /** unique or primary key constraint on columns "id" */
  MovieAlternativeTitlesPkey = 'movie_alternative_titles_pkey'
}

/** input type for inserting data into table "movie_alternative_titles" */
export type Movie_Alternative_Titles_Insert_Input = {
  alternative_title?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Alternative_Titles_Max_Fields = {
  __typename?: 'movie_alternative_titles_max_fields';
  alternative_title?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_alternative_titles" */
export type Movie_Alternative_Titles_Max_Order_By = {
  alternative_title?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Alternative_Titles_Min_Fields = {
  __typename?: 'movie_alternative_titles_min_fields';
  alternative_title?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_alternative_titles" */
export type Movie_Alternative_Titles_Min_Order_By = {
  alternative_title?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_alternative_titles" */
export type Movie_Alternative_Titles_Mutation_Response = {
  __typename?: 'movie_alternative_titles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Alternative_Titles>;
};

/** on_conflict condition type for table "movie_alternative_titles" */
export type Movie_Alternative_Titles_On_Conflict = {
  constraint: Movie_Alternative_Titles_Constraint;
  update_columns?: Array<Movie_Alternative_Titles_Update_Column>;
  where?: InputMaybe<Movie_Alternative_Titles_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_alternative_titles". */
export type Movie_Alternative_Titles_Order_By = {
  alternative_title?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_alternative_titles */
export type Movie_Alternative_Titles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movie_alternative_titles" */
export enum Movie_Alternative_Titles_Select_Column {
  /** column name */
  AlternativeTitle = 'alternative_title',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  MovieId = 'movie_id'
}

/** input type for updating data in table "movie_alternative_titles" */
export type Movie_Alternative_Titles_Set_Input = {
  alternative_title?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "movie_alternative_titles" */
export type Movie_Alternative_Titles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Alternative_Titles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Alternative_Titles_Stream_Cursor_Value_Input = {
  alternative_title?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "movie_alternative_titles" */
export enum Movie_Alternative_Titles_Update_Column {
  /** column name */
  AlternativeTitle = 'alternative_title',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  MovieId = 'movie_id'
}

export type Movie_Alternative_Titles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Alternative_Titles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Alternative_Titles_Bool_Exp;
};

/** columns and relationships of "movie_cast" */
export type Movie_Cast = {
  __typename?: 'movie_cast';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  person: People;
  person_id: Scalars['uuid']['output'];
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "movie_cast" */
export type Movie_Cast_Aggregate = {
  __typename?: 'movie_cast_aggregate';
  aggregate?: Maybe<Movie_Cast_Aggregate_Fields>;
  nodes: Array<Movie_Cast>;
};

export type Movie_Cast_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Cast_Aggregate_Bool_Exp_Count>;
};

export type Movie_Cast_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Cast_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_cast" */
export type Movie_Cast_Aggregate_Fields = {
  __typename?: 'movie_cast_aggregate_fields';
  avg?: Maybe<Movie_Cast_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Cast_Max_Fields>;
  min?: Maybe<Movie_Cast_Min_Fields>;
  stddev?: Maybe<Movie_Cast_Stddev_Fields>;
  stddev_pop?: Maybe<Movie_Cast_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Movie_Cast_Stddev_Samp_Fields>;
  sum?: Maybe<Movie_Cast_Sum_Fields>;
  var_pop?: Maybe<Movie_Cast_Var_Pop_Fields>;
  var_samp?: Maybe<Movie_Cast_Var_Samp_Fields>;
  variance?: Maybe<Movie_Cast_Variance_Fields>;
};


/** aggregate fields of "movie_cast" */
export type Movie_Cast_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_cast" */
export type Movie_Cast_Aggregate_Order_By = {
  avg?: InputMaybe<Movie_Cast_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Cast_Max_Order_By>;
  min?: InputMaybe<Movie_Cast_Min_Order_By>;
  stddev?: InputMaybe<Movie_Cast_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Movie_Cast_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Movie_Cast_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Movie_Cast_Sum_Order_By>;
  var_pop?: InputMaybe<Movie_Cast_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Movie_Cast_Var_Samp_Order_By>;
  variance?: InputMaybe<Movie_Cast_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "movie_cast" */
export type Movie_Cast_Arr_Rel_Insert_Input = {
  data: Array<Movie_Cast_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Cast_On_Conflict>;
};

/** aggregate avg on columns */
export type Movie_Cast_Avg_Fields = {
  __typename?: 'movie_cast_avg_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "movie_cast" */
export type Movie_Cast_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "movie_cast". All fields are combined with a logical 'AND'. */
export type Movie_Cast_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Cast_Bool_Exp>>;
  _not?: InputMaybe<Movie_Cast_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Cast_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  person?: InputMaybe<People_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_cast" */
export enum Movie_Cast_Constraint {
  /** unique or primary key constraint on columns "id" */
  MovieCastPkey = 'movie_cast_pkey'
}

/** input type for incrementing numeric columns in table "movie_cast" */
export type Movie_Cast_Inc_Input = {
  order?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "movie_cast" */
export type Movie_Cast_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  person?: InputMaybe<People_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Movie_Cast_Max_Fields = {
  __typename?: 'movie_cast_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "movie_cast" */
export type Movie_Cast_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Cast_Min_Fields = {
  __typename?: 'movie_cast_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "movie_cast" */
export type Movie_Cast_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_cast" */
export type Movie_Cast_Mutation_Response = {
  __typename?: 'movie_cast_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Cast>;
};

/** on_conflict condition type for table "movie_cast" */
export type Movie_Cast_On_Conflict = {
  constraint: Movie_Cast_Constraint;
  update_columns?: Array<Movie_Cast_Update_Column>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_cast". */
export type Movie_Cast_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  person?: InputMaybe<People_Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_cast */
export type Movie_Cast_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movie_cast" */
export enum Movie_Cast_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  Order = 'order',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "movie_cast" */
export type Movie_Cast_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Movie_Cast_Stddev_Fields = {
  __typename?: 'movie_cast_stddev_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "movie_cast" */
export type Movie_Cast_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Movie_Cast_Stddev_Pop_Fields = {
  __typename?: 'movie_cast_stddev_pop_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "movie_cast" */
export type Movie_Cast_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Movie_Cast_Stddev_Samp_Fields = {
  __typename?: 'movie_cast_stddev_samp_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "movie_cast" */
export type Movie_Cast_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "movie_cast" */
export type Movie_Cast_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Cast_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Cast_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Movie_Cast_Sum_Fields = {
  __typename?: 'movie_cast_sum_fields';
  order?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "movie_cast" */
export type Movie_Cast_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** update columns of table "movie_cast" */
export enum Movie_Cast_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  Order = 'order',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  Role = 'role'
}

export type Movie_Cast_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Movie_Cast_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Cast_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Cast_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Movie_Cast_Var_Pop_Fields = {
  __typename?: 'movie_cast_var_pop_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "movie_cast" */
export type Movie_Cast_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Movie_Cast_Var_Samp_Fields = {
  __typename?: 'movie_cast_var_samp_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "movie_cast" */
export type Movie_Cast_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Movie_Cast_Variance_Fields = {
  __typename?: 'movie_cast_variance_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "movie_cast" */
export type Movie_Cast_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** columns and relationships of "movie_changes" */
export type Movie_Changes = {
  __typename?: 'movie_changes';
  change_description?: Maybe<Scalars['String']['output']>;
  changed_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "movie_changes" */
export type Movie_Changes_Aggregate = {
  __typename?: 'movie_changes_aggregate';
  aggregate?: Maybe<Movie_Changes_Aggregate_Fields>;
  nodes: Array<Movie_Changes>;
};

export type Movie_Changes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Changes_Aggregate_Bool_Exp_Count>;
};

export type Movie_Changes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Changes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Changes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_changes" */
export type Movie_Changes_Aggregate_Fields = {
  __typename?: 'movie_changes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Changes_Max_Fields>;
  min?: Maybe<Movie_Changes_Min_Fields>;
};


/** aggregate fields of "movie_changes" */
export type Movie_Changes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Changes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_changes" */
export type Movie_Changes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Changes_Max_Order_By>;
  min?: InputMaybe<Movie_Changes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "movie_changes" */
export type Movie_Changes_Arr_Rel_Insert_Input = {
  data: Array<Movie_Changes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Changes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "movie_changes". All fields are combined with a logical 'AND'. */
export type Movie_Changes_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Changes_Bool_Exp>>;
  _not?: InputMaybe<Movie_Changes_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Changes_Bool_Exp>>;
  change_description?: InputMaybe<String_Comparison_Exp>;
  changed_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_changes" */
export enum Movie_Changes_Constraint {
  /** unique or primary key constraint on columns "id" */
  MovieChangesPkey = 'movie_changes_pkey'
}

/** input type for inserting data into table "movie_changes" */
export type Movie_Changes_Insert_Input = {
  change_description?: InputMaybe<Scalars['String']['input']>;
  changed_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Changes_Max_Fields = {
  __typename?: 'movie_changes_max_fields';
  change_description?: Maybe<Scalars['String']['output']>;
  changed_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_changes" */
export type Movie_Changes_Max_Order_By = {
  change_description?: InputMaybe<Order_By>;
  changed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Changes_Min_Fields = {
  __typename?: 'movie_changes_min_fields';
  change_description?: Maybe<Scalars['String']['output']>;
  changed_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_changes" */
export type Movie_Changes_Min_Order_By = {
  change_description?: InputMaybe<Order_By>;
  changed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_changes" */
export type Movie_Changes_Mutation_Response = {
  __typename?: 'movie_changes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Changes>;
};

/** on_conflict condition type for table "movie_changes" */
export type Movie_Changes_On_Conflict = {
  constraint: Movie_Changes_Constraint;
  update_columns?: Array<Movie_Changes_Update_Column>;
  where?: InputMaybe<Movie_Changes_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_changes". */
export type Movie_Changes_Order_By = {
  change_description?: InputMaybe<Order_By>;
  changed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_changes */
export type Movie_Changes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movie_changes" */
export enum Movie_Changes_Select_Column {
  /** column name */
  ChangeDescription = 'change_description',
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "movie_changes" */
export type Movie_Changes_Set_Input = {
  change_description?: InputMaybe<Scalars['String']['input']>;
  changed_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "movie_changes" */
export type Movie_Changes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Changes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Changes_Stream_Cursor_Value_Input = {
  change_description?: InputMaybe<Scalars['String']['input']>;
  changed_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "movie_changes" */
export enum Movie_Changes_Update_Column {
  /** column name */
  ChangeDescription = 'change_description',
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  UserId = 'user_id'
}

export type Movie_Changes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Changes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Changes_Bool_Exp;
};

/** columns and relationships of "movie_crew" */
export type Movie_Crew = {
  __typename?: 'movie_crew';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  job?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
  /** An object relationship */
  person: People;
  person_id: Scalars['uuid']['output'];
};

/** aggregated selection of "movie_crew" */
export type Movie_Crew_Aggregate = {
  __typename?: 'movie_crew_aggregate';
  aggregate?: Maybe<Movie_Crew_Aggregate_Fields>;
  nodes: Array<Movie_Crew>;
};

export type Movie_Crew_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Crew_Aggregate_Bool_Exp_Count>;
};

export type Movie_Crew_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Crew_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Crew_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_crew" */
export type Movie_Crew_Aggregate_Fields = {
  __typename?: 'movie_crew_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Crew_Max_Fields>;
  min?: Maybe<Movie_Crew_Min_Fields>;
};


/** aggregate fields of "movie_crew" */
export type Movie_Crew_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Crew_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_crew" */
export type Movie_Crew_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Crew_Max_Order_By>;
  min?: InputMaybe<Movie_Crew_Min_Order_By>;
};

/** input type for inserting array relation for remote table "movie_crew" */
export type Movie_Crew_Arr_Rel_Insert_Input = {
  data: Array<Movie_Crew_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Crew_On_Conflict>;
};

/** Boolean expression to filter rows from the table "movie_crew". All fields are combined with a logical 'AND'. */
export type Movie_Crew_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Crew_Bool_Exp>>;
  _not?: InputMaybe<Movie_Crew_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Crew_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  department?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  job?: InputMaybe<String_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<People_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_crew" */
export enum Movie_Crew_Constraint {
  /** unique or primary key constraint on columns "id" */
  MovieCrewPkey = 'movie_crew_pkey'
}

/** input type for inserting data into table "movie_crew" */
export type Movie_Crew_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  job?: InputMaybe<Scalars['String']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  person?: InputMaybe<People_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Crew_Max_Fields = {
  __typename?: 'movie_crew_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  job?: Maybe<Scalars['String']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_crew" */
export type Movie_Crew_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  department?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Crew_Min_Fields = {
  __typename?: 'movie_crew_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  job?: Maybe<Scalars['String']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_crew" */
export type Movie_Crew_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  department?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_crew" */
export type Movie_Crew_Mutation_Response = {
  __typename?: 'movie_crew_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Crew>;
};

/** on_conflict condition type for table "movie_crew" */
export type Movie_Crew_On_Conflict = {
  constraint: Movie_Crew_Constraint;
  update_columns?: Array<Movie_Crew_Update_Column>;
  where?: InputMaybe<Movie_Crew_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_crew". */
export type Movie_Crew_Order_By = {
  created_at?: InputMaybe<Order_By>;
  department?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
  person?: InputMaybe<People_Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_crew */
export type Movie_Crew_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movie_crew" */
export enum Movie_Crew_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Department = 'department',
  /** column name */
  Id = 'id',
  /** column name */
  Job = 'job',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  PersonId = 'person_id'
}

/** input type for updating data in table "movie_crew" */
export type Movie_Crew_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  job?: InputMaybe<Scalars['String']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "movie_crew" */
export type Movie_Crew_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Crew_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Crew_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  job?: InputMaybe<Scalars['String']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "movie_crew" */
export enum Movie_Crew_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Department = 'department',
  /** column name */
  Id = 'id',
  /** column name */
  Job = 'job',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  PersonId = 'person_id'
}

export type Movie_Crew_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Crew_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Crew_Bool_Exp;
};

/** columns and relationships of "movie_favourites" */
export type Movie_Favourites = {
  __typename?: 'movie_favourites';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "movie_favourites" */
export type Movie_Favourites_Aggregate = {
  __typename?: 'movie_favourites_aggregate';
  aggregate?: Maybe<Movie_Favourites_Aggregate_Fields>;
  nodes: Array<Movie_Favourites>;
};

export type Movie_Favourites_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Favourites_Aggregate_Bool_Exp_Count>;
};

export type Movie_Favourites_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Favourites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Favourites_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_favourites" */
export type Movie_Favourites_Aggregate_Fields = {
  __typename?: 'movie_favourites_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Favourites_Max_Fields>;
  min?: Maybe<Movie_Favourites_Min_Fields>;
};


/** aggregate fields of "movie_favourites" */
export type Movie_Favourites_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Favourites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_favourites" */
export type Movie_Favourites_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Favourites_Max_Order_By>;
  min?: InputMaybe<Movie_Favourites_Min_Order_By>;
};

/** input type for inserting array relation for remote table "movie_favourites" */
export type Movie_Favourites_Arr_Rel_Insert_Input = {
  data: Array<Movie_Favourites_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Favourites_On_Conflict>;
};

/** Boolean expression to filter rows from the table "movie_favourites". All fields are combined with a logical 'AND'. */
export type Movie_Favourites_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Favourites_Bool_Exp>>;
  _not?: InputMaybe<Movie_Favourites_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Favourites_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_favourites" */
export enum Movie_Favourites_Constraint {
  /** unique or primary key constraint on columns "user_id", "movie_id" */
  MovieFavouritesMovieIdUserIdKey = 'movie_favourites_movie_id_user_id_key',
  /** unique or primary key constraint on columns "id" */
  MovieFavouritesPkey = 'movie_favourites_pkey'
}

/** input type for inserting data into table "movie_favourites" */
export type Movie_Favourites_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Favourites_Max_Fields = {
  __typename?: 'movie_favourites_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_favourites" */
export type Movie_Favourites_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Favourites_Min_Fields = {
  __typename?: 'movie_favourites_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_favourites" */
export type Movie_Favourites_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_favourites" */
export type Movie_Favourites_Mutation_Response = {
  __typename?: 'movie_favourites_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Favourites>;
};

/** on_conflict condition type for table "movie_favourites" */
export type Movie_Favourites_On_Conflict = {
  constraint: Movie_Favourites_Constraint;
  update_columns?: Array<Movie_Favourites_Update_Column>;
  where?: InputMaybe<Movie_Favourites_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_favourites". */
export type Movie_Favourites_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_favourites */
export type Movie_Favourites_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movie_favourites" */
export enum Movie_Favourites_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "movie_favourites" */
export type Movie_Favourites_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "movie_favourites" */
export type Movie_Favourites_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Favourites_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Favourites_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "movie_favourites" */
export enum Movie_Favourites_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  UserId = 'user_id'
}

export type Movie_Favourites_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Favourites_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Favourites_Bool_Exp;
};

/** columns and relationships of "movie_genres" */
export type Movie_Genres = {
  __typename?: 'movie_genres';
  /** An object relationship */
  genre: Genres;
  genre_id: Scalars['uuid']['output'];
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
};

/** aggregated selection of "movie_genres" */
export type Movie_Genres_Aggregate = {
  __typename?: 'movie_genres_aggregate';
  aggregate?: Maybe<Movie_Genres_Aggregate_Fields>;
  nodes: Array<Movie_Genres>;
};

export type Movie_Genres_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Genres_Aggregate_Bool_Exp_Count>;
};

export type Movie_Genres_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Genres_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Genres_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_genres" */
export type Movie_Genres_Aggregate_Fields = {
  __typename?: 'movie_genres_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Genres_Max_Fields>;
  min?: Maybe<Movie_Genres_Min_Fields>;
};


/** aggregate fields of "movie_genres" */
export type Movie_Genres_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Genres_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_genres" */
export type Movie_Genres_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Genres_Max_Order_By>;
  min?: InputMaybe<Movie_Genres_Min_Order_By>;
};

/** input type for inserting array relation for remote table "movie_genres" */
export type Movie_Genres_Arr_Rel_Insert_Input = {
  data: Array<Movie_Genres_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Genres_On_Conflict>;
};

/** Boolean expression to filter rows from the table "movie_genres". All fields are combined with a logical 'AND'. */
export type Movie_Genres_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Genres_Bool_Exp>>;
  _not?: InputMaybe<Movie_Genres_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Genres_Bool_Exp>>;
  genre?: InputMaybe<Genres_Bool_Exp>;
  genre_id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_genres" */
export enum Movie_Genres_Constraint {
  /** unique or primary key constraint on columns "genre_id", "movie_id" */
  MovieGenresPkey = 'movie_genres_pkey'
}

/** input type for inserting data into table "movie_genres" */
export type Movie_Genres_Insert_Input = {
  genre?: InputMaybe<Genres_Obj_Rel_Insert_Input>;
  genre_id?: InputMaybe<Scalars['uuid']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Genres_Max_Fields = {
  __typename?: 'movie_genres_max_fields';
  genre_id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_genres" */
export type Movie_Genres_Max_Order_By = {
  genre_id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Genres_Min_Fields = {
  __typename?: 'movie_genres_min_fields';
  genre_id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_genres" */
export type Movie_Genres_Min_Order_By = {
  genre_id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_genres" */
export type Movie_Genres_Mutation_Response = {
  __typename?: 'movie_genres_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Genres>;
};

/** on_conflict condition type for table "movie_genres" */
export type Movie_Genres_On_Conflict = {
  constraint: Movie_Genres_Constraint;
  update_columns?: Array<Movie_Genres_Update_Column>;
  where?: InputMaybe<Movie_Genres_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_genres". */
export type Movie_Genres_Order_By = {
  genre?: InputMaybe<Genres_Order_By>;
  genre_id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_genres */
export type Movie_Genres_Pk_Columns_Input = {
  genre_id: Scalars['uuid']['input'];
  movie_id: Scalars['uuid']['input'];
};

/** select columns of table "movie_genres" */
export enum Movie_Genres_Select_Column {
  /** column name */
  GenreId = 'genre_id',
  /** column name */
  MovieId = 'movie_id'
}

/** input type for updating data in table "movie_genres" */
export type Movie_Genres_Set_Input = {
  genre_id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "movie_genres" */
export type Movie_Genres_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Genres_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Genres_Stream_Cursor_Value_Input = {
  genre_id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "movie_genres" */
export enum Movie_Genres_Update_Column {
  /** column name */
  GenreId = 'genre_id',
  /** column name */
  MovieId = 'movie_id'
}

export type Movie_Genres_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Genres_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Genres_Bool_Exp;
};

/** columns and relationships of "movie_keywords" */
export type Movie_Keywords = {
  __typename?: 'movie_keywords';
  /** An object relationship */
  keyword: Keywords;
  keyword_id: Scalars['uuid']['output'];
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
};

/** aggregated selection of "movie_keywords" */
export type Movie_Keywords_Aggregate = {
  __typename?: 'movie_keywords_aggregate';
  aggregate?: Maybe<Movie_Keywords_Aggregate_Fields>;
  nodes: Array<Movie_Keywords>;
};

export type Movie_Keywords_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Keywords_Aggregate_Bool_Exp_Count>;
};

export type Movie_Keywords_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Keywords_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Keywords_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_keywords" */
export type Movie_Keywords_Aggregate_Fields = {
  __typename?: 'movie_keywords_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Keywords_Max_Fields>;
  min?: Maybe<Movie_Keywords_Min_Fields>;
};


/** aggregate fields of "movie_keywords" */
export type Movie_Keywords_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Keywords_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_keywords" */
export type Movie_Keywords_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Keywords_Max_Order_By>;
  min?: InputMaybe<Movie_Keywords_Min_Order_By>;
};

/** input type for inserting array relation for remote table "movie_keywords" */
export type Movie_Keywords_Arr_Rel_Insert_Input = {
  data: Array<Movie_Keywords_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Keywords_On_Conflict>;
};

/** Boolean expression to filter rows from the table "movie_keywords". All fields are combined with a logical 'AND'. */
export type Movie_Keywords_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Keywords_Bool_Exp>>;
  _not?: InputMaybe<Movie_Keywords_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Keywords_Bool_Exp>>;
  keyword?: InputMaybe<Keywords_Bool_Exp>;
  keyword_id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_keywords" */
export enum Movie_Keywords_Constraint {
  /** unique or primary key constraint on columns "movie_id", "keyword_id" */
  MovieKeywordsPkey = 'movie_keywords_pkey'
}

/** input type for inserting data into table "movie_keywords" */
export type Movie_Keywords_Insert_Input = {
  keyword?: InputMaybe<Keywords_Obj_Rel_Insert_Input>;
  keyword_id?: InputMaybe<Scalars['uuid']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Keywords_Max_Fields = {
  __typename?: 'movie_keywords_max_fields';
  keyword_id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_keywords" */
export type Movie_Keywords_Max_Order_By = {
  keyword_id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Keywords_Min_Fields = {
  __typename?: 'movie_keywords_min_fields';
  keyword_id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_keywords" */
export type Movie_Keywords_Min_Order_By = {
  keyword_id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_keywords" */
export type Movie_Keywords_Mutation_Response = {
  __typename?: 'movie_keywords_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Keywords>;
};

/** on_conflict condition type for table "movie_keywords" */
export type Movie_Keywords_On_Conflict = {
  constraint: Movie_Keywords_Constraint;
  update_columns?: Array<Movie_Keywords_Update_Column>;
  where?: InputMaybe<Movie_Keywords_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_keywords". */
export type Movie_Keywords_Order_By = {
  keyword?: InputMaybe<Keywords_Order_By>;
  keyword_id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_keywords */
export type Movie_Keywords_Pk_Columns_Input = {
  keyword_id: Scalars['uuid']['input'];
  movie_id: Scalars['uuid']['input'];
};

/** select columns of table "movie_keywords" */
export enum Movie_Keywords_Select_Column {
  /** column name */
  KeywordId = 'keyword_id',
  /** column name */
  MovieId = 'movie_id'
}

/** input type for updating data in table "movie_keywords" */
export type Movie_Keywords_Set_Input = {
  keyword_id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "movie_keywords" */
export type Movie_Keywords_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Keywords_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Keywords_Stream_Cursor_Value_Input = {
  keyword_id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "movie_keywords" */
export enum Movie_Keywords_Update_Column {
  /** column name */
  KeywordId = 'keyword_id',
  /** column name */
  MovieId = 'movie_id'
}

export type Movie_Keywords_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Keywords_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Keywords_Bool_Exp;
};

/** columns and relationships of "movie_media" */
export type Movie_Media = {
  __typename?: 'movie_media';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  media_type?: Maybe<Scalars['String']['output']>;
  media_url: Scalars['String']['output'];
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
};

/** aggregated selection of "movie_media" */
export type Movie_Media_Aggregate = {
  __typename?: 'movie_media_aggregate';
  aggregate?: Maybe<Movie_Media_Aggregate_Fields>;
  nodes: Array<Movie_Media>;
};

export type Movie_Media_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Media_Aggregate_Bool_Exp_Count>;
};

export type Movie_Media_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Media_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_media" */
export type Movie_Media_Aggregate_Fields = {
  __typename?: 'movie_media_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Media_Max_Fields>;
  min?: Maybe<Movie_Media_Min_Fields>;
};


/** aggregate fields of "movie_media" */
export type Movie_Media_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_media" */
export type Movie_Media_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Media_Max_Order_By>;
  min?: InputMaybe<Movie_Media_Min_Order_By>;
};

/** input type for inserting array relation for remote table "movie_media" */
export type Movie_Media_Arr_Rel_Insert_Input = {
  data: Array<Movie_Media_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Media_On_Conflict>;
};

/** Boolean expression to filter rows from the table "movie_media". All fields are combined with a logical 'AND'. */
export type Movie_Media_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Media_Bool_Exp>>;
  _not?: InputMaybe<Movie_Media_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Media_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  media_type?: InputMaybe<String_Comparison_Exp>;
  media_url?: InputMaybe<String_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_media" */
export enum Movie_Media_Constraint {
  /** unique or primary key constraint on columns "id" */
  MovieMediaPkey = 'movie_media_pkey'
}

/** input type for inserting data into table "movie_media" */
export type Movie_Media_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Media_Max_Fields = {
  __typename?: 'movie_media_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  media_type?: Maybe<Scalars['String']['output']>;
  media_url?: Maybe<Scalars['String']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_media" */
export type Movie_Media_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Media_Min_Fields = {
  __typename?: 'movie_media_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  media_type?: Maybe<Scalars['String']['output']>;
  media_url?: Maybe<Scalars['String']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_media" */
export type Movie_Media_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_media" */
export type Movie_Media_Mutation_Response = {
  __typename?: 'movie_media_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Media>;
};

/** on_conflict condition type for table "movie_media" */
export type Movie_Media_On_Conflict = {
  constraint: Movie_Media_Constraint;
  update_columns?: Array<Movie_Media_Update_Column>;
  where?: InputMaybe<Movie_Media_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_media". */
export type Movie_Media_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_media */
export type Movie_Media_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movie_media" */
export enum Movie_Media_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  MediaUrl = 'media_url',
  /** column name */
  MovieId = 'movie_id'
}

/** input type for updating data in table "movie_media" */
export type Movie_Media_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "movie_media" */
export type Movie_Media_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Media_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Media_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "movie_media" */
export enum Movie_Media_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  MediaUrl = 'media_url',
  /** column name */
  MovieId = 'movie_id'
}

export type Movie_Media_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Media_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Media_Bool_Exp;
};

/** columns and relationships of "movie_production_companies" */
export type Movie_Production_Companies = {
  __typename?: 'movie_production_companies';
  company_name: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
};

/** aggregated selection of "movie_production_companies" */
export type Movie_Production_Companies_Aggregate = {
  __typename?: 'movie_production_companies_aggregate';
  aggregate?: Maybe<Movie_Production_Companies_Aggregate_Fields>;
  nodes: Array<Movie_Production_Companies>;
};

export type Movie_Production_Companies_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Production_Companies_Aggregate_Bool_Exp_Count>;
};

export type Movie_Production_Companies_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Production_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Production_Companies_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_production_companies" */
export type Movie_Production_Companies_Aggregate_Fields = {
  __typename?: 'movie_production_companies_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Production_Companies_Max_Fields>;
  min?: Maybe<Movie_Production_Companies_Min_Fields>;
};


/** aggregate fields of "movie_production_companies" */
export type Movie_Production_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Production_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_production_companies" */
export type Movie_Production_Companies_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Production_Companies_Max_Order_By>;
  min?: InputMaybe<Movie_Production_Companies_Min_Order_By>;
};

/** input type for inserting array relation for remote table "movie_production_companies" */
export type Movie_Production_Companies_Arr_Rel_Insert_Input = {
  data: Array<Movie_Production_Companies_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Production_Companies_On_Conflict>;
};

/** Boolean expression to filter rows from the table "movie_production_companies". All fields are combined with a logical 'AND'. */
export type Movie_Production_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Production_Companies_Bool_Exp>>;
  _not?: InputMaybe<Movie_Production_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Production_Companies_Bool_Exp>>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_production_companies" */
export enum Movie_Production_Companies_Constraint {
  /** unique or primary key constraint on columns "id" */
  MovieProductionCompaniesPkey = 'movie_production_companies_pkey'
}

/** input type for inserting data into table "movie_production_companies" */
export type Movie_Production_Companies_Insert_Input = {
  company_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Production_Companies_Max_Fields = {
  __typename?: 'movie_production_companies_max_fields';
  company_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_production_companies" */
export type Movie_Production_Companies_Max_Order_By = {
  company_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Production_Companies_Min_Fields = {
  __typename?: 'movie_production_companies_min_fields';
  company_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_production_companies" */
export type Movie_Production_Companies_Min_Order_By = {
  company_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_production_companies" */
export type Movie_Production_Companies_Mutation_Response = {
  __typename?: 'movie_production_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Production_Companies>;
};

/** on_conflict condition type for table "movie_production_companies" */
export type Movie_Production_Companies_On_Conflict = {
  constraint: Movie_Production_Companies_Constraint;
  update_columns?: Array<Movie_Production_Companies_Update_Column>;
  where?: InputMaybe<Movie_Production_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_production_companies". */
export type Movie_Production_Companies_Order_By = {
  company_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_production_companies */
export type Movie_Production_Companies_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movie_production_companies" */
export enum Movie_Production_Companies_Select_Column {
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id'
}

/** input type for updating data in table "movie_production_companies" */
export type Movie_Production_Companies_Set_Input = {
  company_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "movie_production_companies" */
export type Movie_Production_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Production_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Production_Companies_Stream_Cursor_Value_Input = {
  company_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "movie_production_companies" */
export enum Movie_Production_Companies_Update_Column {
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id'
}

export type Movie_Production_Companies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Production_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Production_Companies_Bool_Exp;
};

/** columns and relationships of "movie_production_countries" */
export type Movie_Production_Countries = {
  __typename?: 'movie_production_countries';
  country: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
};

/** aggregated selection of "movie_production_countries" */
export type Movie_Production_Countries_Aggregate = {
  __typename?: 'movie_production_countries_aggregate';
  aggregate?: Maybe<Movie_Production_Countries_Aggregate_Fields>;
  nodes: Array<Movie_Production_Countries>;
};

export type Movie_Production_Countries_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Production_Countries_Aggregate_Bool_Exp_Count>;
};

export type Movie_Production_Countries_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Production_Countries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Production_Countries_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_production_countries" */
export type Movie_Production_Countries_Aggregate_Fields = {
  __typename?: 'movie_production_countries_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Production_Countries_Max_Fields>;
  min?: Maybe<Movie_Production_Countries_Min_Fields>;
};


/** aggregate fields of "movie_production_countries" */
export type Movie_Production_Countries_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Production_Countries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_production_countries" */
export type Movie_Production_Countries_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Production_Countries_Max_Order_By>;
  min?: InputMaybe<Movie_Production_Countries_Min_Order_By>;
};

/** input type for inserting array relation for remote table "movie_production_countries" */
export type Movie_Production_Countries_Arr_Rel_Insert_Input = {
  data: Array<Movie_Production_Countries_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Production_Countries_On_Conflict>;
};

/** Boolean expression to filter rows from the table "movie_production_countries". All fields are combined with a logical 'AND'. */
export type Movie_Production_Countries_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Production_Countries_Bool_Exp>>;
  _not?: InputMaybe<Movie_Production_Countries_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Production_Countries_Bool_Exp>>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_production_countries" */
export enum Movie_Production_Countries_Constraint {
  /** unique or primary key constraint on columns "id" */
  MovieProductionCountriesPkey = 'movie_production_countries_pkey'
}

/** input type for inserting data into table "movie_production_countries" */
export type Movie_Production_Countries_Insert_Input = {
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Production_Countries_Max_Fields = {
  __typename?: 'movie_production_countries_max_fields';
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_production_countries" */
export type Movie_Production_Countries_Max_Order_By = {
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Production_Countries_Min_Fields = {
  __typename?: 'movie_production_countries_min_fields';
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_production_countries" */
export type Movie_Production_Countries_Min_Order_By = {
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_production_countries" */
export type Movie_Production_Countries_Mutation_Response = {
  __typename?: 'movie_production_countries_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Production_Countries>;
};

/** on_conflict condition type for table "movie_production_countries" */
export type Movie_Production_Countries_On_Conflict = {
  constraint: Movie_Production_Countries_Constraint;
  update_columns?: Array<Movie_Production_Countries_Update_Column>;
  where?: InputMaybe<Movie_Production_Countries_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_production_countries". */
export type Movie_Production_Countries_Order_By = {
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_production_countries */
export type Movie_Production_Countries_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movie_production_countries" */
export enum Movie_Production_Countries_Select_Column {
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id'
}

/** input type for updating data in table "movie_production_countries" */
export type Movie_Production_Countries_Set_Input = {
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "movie_production_countries" */
export type Movie_Production_Countries_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Production_Countries_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Production_Countries_Stream_Cursor_Value_Input = {
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "movie_production_countries" */
export enum Movie_Production_Countries_Update_Column {
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id'
}

export type Movie_Production_Countries_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Production_Countries_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Production_Countries_Bool_Exp;
};

/** columns and relationships of "movie_ratings" */
export type Movie_Ratings = {
  __typename?: 'movie_ratings';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
  rating: Scalars['smallint']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "movie_ratings" */
export type Movie_Ratings_Aggregate = {
  __typename?: 'movie_ratings_aggregate';
  aggregate?: Maybe<Movie_Ratings_Aggregate_Fields>;
  nodes: Array<Movie_Ratings>;
};

export type Movie_Ratings_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Ratings_Aggregate_Bool_Exp_Count>;
};

export type Movie_Ratings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Ratings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Ratings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_ratings" */
export type Movie_Ratings_Aggregate_Fields = {
  __typename?: 'movie_ratings_aggregate_fields';
  avg?: Maybe<Movie_Ratings_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Ratings_Max_Fields>;
  min?: Maybe<Movie_Ratings_Min_Fields>;
  stddev?: Maybe<Movie_Ratings_Stddev_Fields>;
  stddev_pop?: Maybe<Movie_Ratings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Movie_Ratings_Stddev_Samp_Fields>;
  sum?: Maybe<Movie_Ratings_Sum_Fields>;
  var_pop?: Maybe<Movie_Ratings_Var_Pop_Fields>;
  var_samp?: Maybe<Movie_Ratings_Var_Samp_Fields>;
  variance?: Maybe<Movie_Ratings_Variance_Fields>;
};


/** aggregate fields of "movie_ratings" */
export type Movie_Ratings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Ratings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_ratings" */
export type Movie_Ratings_Aggregate_Order_By = {
  avg?: InputMaybe<Movie_Ratings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Ratings_Max_Order_By>;
  min?: InputMaybe<Movie_Ratings_Min_Order_By>;
  stddev?: InputMaybe<Movie_Ratings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Movie_Ratings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Movie_Ratings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Movie_Ratings_Sum_Order_By>;
  var_pop?: InputMaybe<Movie_Ratings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Movie_Ratings_Var_Samp_Order_By>;
  variance?: InputMaybe<Movie_Ratings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "movie_ratings" */
export type Movie_Ratings_Arr_Rel_Insert_Input = {
  data: Array<Movie_Ratings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Ratings_On_Conflict>;
};

/** aggregate avg on columns */
export type Movie_Ratings_Avg_Fields = {
  __typename?: 'movie_ratings_avg_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "movie_ratings" */
export type Movie_Ratings_Avg_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "movie_ratings". All fields are combined with a logical 'AND'. */
export type Movie_Ratings_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Ratings_Bool_Exp>>;
  _not?: InputMaybe<Movie_Ratings_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Ratings_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  rating?: InputMaybe<Smallint_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_ratings" */
export enum Movie_Ratings_Constraint {
  /** unique or primary key constraint on columns "user_id", "movie_id" */
  MovieRatingsMovieIdUserIdKey = 'movie_ratings_movie_id_user_id_key',
  /** unique or primary key constraint on columns "id" */
  MovieRatingsPkey = 'movie_ratings_pkey'
}

/** input type for incrementing numeric columns in table "movie_ratings" */
export type Movie_Ratings_Inc_Input = {
  rating?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "movie_ratings" */
export type Movie_Ratings_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['smallint']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Ratings_Max_Fields = {
  __typename?: 'movie_ratings_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['smallint']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_ratings" */
export type Movie_Ratings_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Ratings_Min_Fields = {
  __typename?: 'movie_ratings_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['smallint']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_ratings" */
export type Movie_Ratings_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_ratings" */
export type Movie_Ratings_Mutation_Response = {
  __typename?: 'movie_ratings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Ratings>;
};

/** on_conflict condition type for table "movie_ratings" */
export type Movie_Ratings_On_Conflict = {
  constraint: Movie_Ratings_Constraint;
  update_columns?: Array<Movie_Ratings_Update_Column>;
  where?: InputMaybe<Movie_Ratings_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_ratings". */
export type Movie_Ratings_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_ratings */
export type Movie_Ratings_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movie_ratings" */
export enum Movie_Ratings_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  Rating = 'rating',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "movie_ratings" */
export type Movie_Ratings_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['smallint']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Movie_Ratings_Stddev_Fields = {
  __typename?: 'movie_ratings_stddev_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "movie_ratings" */
export type Movie_Ratings_Stddev_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Movie_Ratings_Stddev_Pop_Fields = {
  __typename?: 'movie_ratings_stddev_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "movie_ratings" */
export type Movie_Ratings_Stddev_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Movie_Ratings_Stddev_Samp_Fields = {
  __typename?: 'movie_ratings_stddev_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "movie_ratings" */
export type Movie_Ratings_Stddev_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "movie_ratings" */
export type Movie_Ratings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Ratings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Ratings_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['smallint']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Movie_Ratings_Sum_Fields = {
  __typename?: 'movie_ratings_sum_fields';
  rating?: Maybe<Scalars['smallint']['output']>;
};

/** order by sum() on columns of table "movie_ratings" */
export type Movie_Ratings_Sum_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** update columns of table "movie_ratings" */
export enum Movie_Ratings_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  Rating = 'rating',
  /** column name */
  UserId = 'user_id'
}

export type Movie_Ratings_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Movie_Ratings_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Ratings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Ratings_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Movie_Ratings_Var_Pop_Fields = {
  __typename?: 'movie_ratings_var_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "movie_ratings" */
export type Movie_Ratings_Var_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Movie_Ratings_Var_Samp_Fields = {
  __typename?: 'movie_ratings_var_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "movie_ratings" */
export type Movie_Ratings_Var_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Movie_Ratings_Variance_Fields = {
  __typename?: 'movie_ratings_variance_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "movie_ratings" */
export type Movie_Ratings_Variance_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** columns and relationships of "movie_reviews" */
export type Movie_Reviews = {
  __typename?: 'movie_reviews';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
  rating?: Maybe<Scalars['smallint']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "movie_reviews" */
export type Movie_Reviews_Aggregate = {
  __typename?: 'movie_reviews_aggregate';
  aggregate?: Maybe<Movie_Reviews_Aggregate_Fields>;
  nodes: Array<Movie_Reviews>;
};

export type Movie_Reviews_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Reviews_Aggregate_Bool_Exp_Count>;
};

export type Movie_Reviews_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Reviews_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Reviews_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_reviews" */
export type Movie_Reviews_Aggregate_Fields = {
  __typename?: 'movie_reviews_aggregate_fields';
  avg?: Maybe<Movie_Reviews_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Reviews_Max_Fields>;
  min?: Maybe<Movie_Reviews_Min_Fields>;
  stddev?: Maybe<Movie_Reviews_Stddev_Fields>;
  stddev_pop?: Maybe<Movie_Reviews_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Movie_Reviews_Stddev_Samp_Fields>;
  sum?: Maybe<Movie_Reviews_Sum_Fields>;
  var_pop?: Maybe<Movie_Reviews_Var_Pop_Fields>;
  var_samp?: Maybe<Movie_Reviews_Var_Samp_Fields>;
  variance?: Maybe<Movie_Reviews_Variance_Fields>;
};


/** aggregate fields of "movie_reviews" */
export type Movie_Reviews_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Reviews_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_reviews" */
export type Movie_Reviews_Aggregate_Order_By = {
  avg?: InputMaybe<Movie_Reviews_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Reviews_Max_Order_By>;
  min?: InputMaybe<Movie_Reviews_Min_Order_By>;
  stddev?: InputMaybe<Movie_Reviews_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Movie_Reviews_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Movie_Reviews_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Movie_Reviews_Sum_Order_By>;
  var_pop?: InputMaybe<Movie_Reviews_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Movie_Reviews_Var_Samp_Order_By>;
  variance?: InputMaybe<Movie_Reviews_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "movie_reviews" */
export type Movie_Reviews_Arr_Rel_Insert_Input = {
  data: Array<Movie_Reviews_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Reviews_On_Conflict>;
};

/** aggregate avg on columns */
export type Movie_Reviews_Avg_Fields = {
  __typename?: 'movie_reviews_avg_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "movie_reviews" */
export type Movie_Reviews_Avg_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "movie_reviews". All fields are combined with a logical 'AND'. */
export type Movie_Reviews_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Reviews_Bool_Exp>>;
  _not?: InputMaybe<Movie_Reviews_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Reviews_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  rating?: InputMaybe<Smallint_Comparison_Exp>;
  review?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_reviews" */
export enum Movie_Reviews_Constraint {
  /** unique or primary key constraint on columns "id" */
  MovieReviewsPkey = 'movie_reviews_pkey'
}

/** input type for incrementing numeric columns in table "movie_reviews" */
export type Movie_Reviews_Inc_Input = {
  rating?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "movie_reviews" */
export type Movie_Reviews_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['smallint']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Reviews_Max_Fields = {
  __typename?: 'movie_reviews_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['smallint']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_reviews" */
export type Movie_Reviews_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  review?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Reviews_Min_Fields = {
  __typename?: 'movie_reviews_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['smallint']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_reviews" */
export type Movie_Reviews_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  review?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_reviews" */
export type Movie_Reviews_Mutation_Response = {
  __typename?: 'movie_reviews_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Reviews>;
};

/** on_conflict condition type for table "movie_reviews" */
export type Movie_Reviews_On_Conflict = {
  constraint: Movie_Reviews_Constraint;
  update_columns?: Array<Movie_Reviews_Update_Column>;
  where?: InputMaybe<Movie_Reviews_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_reviews". */
export type Movie_Reviews_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  review?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_reviews */
export type Movie_Reviews_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movie_reviews" */
export enum Movie_Reviews_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  Rating = 'rating',
  /** column name */
  Review = 'review',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "movie_reviews" */
export type Movie_Reviews_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['smallint']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Movie_Reviews_Stddev_Fields = {
  __typename?: 'movie_reviews_stddev_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "movie_reviews" */
export type Movie_Reviews_Stddev_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Movie_Reviews_Stddev_Pop_Fields = {
  __typename?: 'movie_reviews_stddev_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "movie_reviews" */
export type Movie_Reviews_Stddev_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Movie_Reviews_Stddev_Samp_Fields = {
  __typename?: 'movie_reviews_stddev_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "movie_reviews" */
export type Movie_Reviews_Stddev_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "movie_reviews" */
export type Movie_Reviews_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Reviews_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Reviews_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['smallint']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Movie_Reviews_Sum_Fields = {
  __typename?: 'movie_reviews_sum_fields';
  rating?: Maybe<Scalars['smallint']['output']>;
};

/** order by sum() on columns of table "movie_reviews" */
export type Movie_Reviews_Sum_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** update columns of table "movie_reviews" */
export enum Movie_Reviews_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  Rating = 'rating',
  /** column name */
  Review = 'review',
  /** column name */
  UserId = 'user_id'
}

export type Movie_Reviews_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Movie_Reviews_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Reviews_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Reviews_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Movie_Reviews_Var_Pop_Fields = {
  __typename?: 'movie_reviews_var_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "movie_reviews" */
export type Movie_Reviews_Var_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Movie_Reviews_Var_Samp_Fields = {
  __typename?: 'movie_reviews_var_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "movie_reviews" */
export type Movie_Reviews_Var_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Movie_Reviews_Variance_Fields = {
  __typename?: 'movie_reviews_variance_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "movie_reviews" */
export type Movie_Reviews_Variance_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** columns and relationships of "movie_soundtrack" */
export type Movie_Soundtrack = {
  __typename?: 'movie_soundtrack';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
  /** An object relationship */
  song: Songs;
  song_id: Scalars['uuid']['output'];
  timestamps?: Maybe<Array<Scalars['String']['output']>>;
};

/** aggregated selection of "movie_soundtrack" */
export type Movie_Soundtrack_Aggregate = {
  __typename?: 'movie_soundtrack_aggregate';
  aggregate?: Maybe<Movie_Soundtrack_Aggregate_Fields>;
  nodes: Array<Movie_Soundtrack>;
};

export type Movie_Soundtrack_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Soundtrack_Aggregate_Bool_Exp_Count>;
};

export type Movie_Soundtrack_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Soundtrack_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_soundtrack" */
export type Movie_Soundtrack_Aggregate_Fields = {
  __typename?: 'movie_soundtrack_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Soundtrack_Max_Fields>;
  min?: Maybe<Movie_Soundtrack_Min_Fields>;
};


/** aggregate fields of "movie_soundtrack" */
export type Movie_Soundtrack_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Soundtrack_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_soundtrack" */
export type Movie_Soundtrack_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Soundtrack_Max_Order_By>;
  min?: InputMaybe<Movie_Soundtrack_Min_Order_By>;
};

/** input type for inserting array relation for remote table "movie_soundtrack" */
export type Movie_Soundtrack_Arr_Rel_Insert_Input = {
  data: Array<Movie_Soundtrack_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Soundtrack_On_Conflict>;
};

/** Boolean expression to filter rows from the table "movie_soundtrack". All fields are combined with a logical 'AND'. */
export type Movie_Soundtrack_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Soundtrack_Bool_Exp>>;
  _not?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Soundtrack_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  song?: InputMaybe<Songs_Bool_Exp>;
  song_id?: InputMaybe<Uuid_Comparison_Exp>;
  timestamps?: InputMaybe<String_Array_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_soundtrack" */
export enum Movie_Soundtrack_Constraint {
  /** unique or primary key constraint on columns "id" */
  MovieSoundtrackPkey = 'movie_soundtrack_pkey'
}

/** input type for inserting data into table "movie_soundtrack" */
export type Movie_Soundtrack_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  song?: InputMaybe<Songs_Obj_Rel_Insert_Input>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  timestamps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** aggregate max on columns */
export type Movie_Soundtrack_Max_Fields = {
  __typename?: 'movie_soundtrack_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  timestamps?: Maybe<Array<Scalars['String']['output']>>;
};

/** order by max() on columns of table "movie_soundtrack" */
export type Movie_Soundtrack_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  timestamps?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Soundtrack_Min_Fields = {
  __typename?: 'movie_soundtrack_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  timestamps?: Maybe<Array<Scalars['String']['output']>>;
};

/** order by min() on columns of table "movie_soundtrack" */
export type Movie_Soundtrack_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  timestamps?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_soundtrack" */
export type Movie_Soundtrack_Mutation_Response = {
  __typename?: 'movie_soundtrack_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Soundtrack>;
};

/** on_conflict condition type for table "movie_soundtrack" */
export type Movie_Soundtrack_On_Conflict = {
  constraint: Movie_Soundtrack_Constraint;
  update_columns?: Array<Movie_Soundtrack_Update_Column>;
  where?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_soundtrack". */
export type Movie_Soundtrack_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
  song?: InputMaybe<Songs_Order_By>;
  song_id?: InputMaybe<Order_By>;
  timestamps?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_soundtrack */
export type Movie_Soundtrack_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movie_soundtrack" */
export enum Movie_Soundtrack_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  SongId = 'song_id',
  /** column name */
  Timestamps = 'timestamps'
}

/** input type for updating data in table "movie_soundtrack" */
export type Movie_Soundtrack_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  timestamps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Streaming cursor of the table "movie_soundtrack" */
export type Movie_Soundtrack_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Soundtrack_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Soundtrack_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  timestamps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** update columns of table "movie_soundtrack" */
export enum Movie_Soundtrack_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  SongId = 'song_id',
  /** column name */
  Timestamps = 'timestamps'
}

export type Movie_Soundtrack_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Soundtrack_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Soundtrack_Bool_Exp;
};

/** columns and relationships of "movie_watchlist" */
export type Movie_Watchlist = {
  __typename?: 'movie_watchlist';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  movie: Movies;
  movie_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "movie_watchlist" */
export type Movie_Watchlist_Aggregate = {
  __typename?: 'movie_watchlist_aggregate';
  aggregate?: Maybe<Movie_Watchlist_Aggregate_Fields>;
  nodes: Array<Movie_Watchlist>;
};

export type Movie_Watchlist_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Watchlist_Aggregate_Bool_Exp_Count>;
};

export type Movie_Watchlist_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Watchlist_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Watchlist_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_watchlist" */
export type Movie_Watchlist_Aggregate_Fields = {
  __typename?: 'movie_watchlist_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Watchlist_Max_Fields>;
  min?: Maybe<Movie_Watchlist_Min_Fields>;
};


/** aggregate fields of "movie_watchlist" */
export type Movie_Watchlist_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Watchlist_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_watchlist" */
export type Movie_Watchlist_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Watchlist_Max_Order_By>;
  min?: InputMaybe<Movie_Watchlist_Min_Order_By>;
};

/** input type for inserting array relation for remote table "movie_watchlist" */
export type Movie_Watchlist_Arr_Rel_Insert_Input = {
  data: Array<Movie_Watchlist_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Watchlist_On_Conflict>;
};

/** Boolean expression to filter rows from the table "movie_watchlist". All fields are combined with a logical 'AND'. */
export type Movie_Watchlist_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Watchlist_Bool_Exp>>;
  _not?: InputMaybe<Movie_Watchlist_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Watchlist_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movies_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_watchlist" */
export enum Movie_Watchlist_Constraint {
  /** unique or primary key constraint on columns "user_id", "movie_id" */
  MovieWatchlistMovieIdUserIdKey = 'movie_watchlist_movie_id_user_id_key',
  /** unique or primary key constraint on columns "id" */
  MovieWatchlistPkey = 'movie_watchlist_pkey'
}

/** input type for inserting data into table "movie_watchlist" */
export type Movie_Watchlist_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Watchlist_Max_Fields = {
  __typename?: 'movie_watchlist_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_watchlist" */
export type Movie_Watchlist_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Watchlist_Min_Fields = {
  __typename?: 'movie_watchlist_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_watchlist" */
export type Movie_Watchlist_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_watchlist" */
export type Movie_Watchlist_Mutation_Response = {
  __typename?: 'movie_watchlist_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Watchlist>;
};

/** on_conflict condition type for table "movie_watchlist" */
export type Movie_Watchlist_On_Conflict = {
  constraint: Movie_Watchlist_Constraint;
  update_columns?: Array<Movie_Watchlist_Update_Column>;
  where?: InputMaybe<Movie_Watchlist_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_watchlist". */
export type Movie_Watchlist_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movies_Order_By>;
  movie_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_watchlist */
export type Movie_Watchlist_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movie_watchlist" */
export enum Movie_Watchlist_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "movie_watchlist" */
export type Movie_Watchlist_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "movie_watchlist" */
export type Movie_Watchlist_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Watchlist_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Watchlist_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "movie_watchlist" */
export enum Movie_Watchlist_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  UserId = 'user_id'
}

export type Movie_Watchlist_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Watchlist_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Watchlist_Bool_Exp;
};

/** columns and relationships of "movies" */
export type Movies = {
  __typename?: 'movies';
  age_rating?: Maybe<Scalars['String']['output']>;
  average_rating?: Maybe<Scalars['Float']['output']>;
  backdrop?: Maybe<Scalars['String']['output']>;
  budget?: Maybe<Scalars['money']['output']>;
  content_score?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "has_favourited_movie" */
  favourited?: Maybe<Scalars['Boolean']['output']>;
  homepage?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  imdb_id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  movie_alternative_titles: Array<Movie_Alternative_Titles>;
  /** An aggregate relationship */
  movie_alternative_titles_aggregate: Movie_Alternative_Titles_Aggregate;
  /** An array relationship */
  movie_cast_members: Array<Movie_Cast>;
  /** An aggregate relationship */
  movie_cast_members_aggregate: Movie_Cast_Aggregate;
  /** An array relationship */
  movie_changes: Array<Movie_Changes>;
  /** An aggregate relationship */
  movie_changes_aggregate: Movie_Changes_Aggregate;
  /** An array relationship */
  movie_crew_members: Array<Movie_Crew>;
  /** An aggregate relationship */
  movie_crew_members_aggregate: Movie_Crew_Aggregate;
  /** An array relationship */
  movie_favourites: Array<Movie_Favourites>;
  /** An aggregate relationship */
  movie_favourites_aggregate: Movie_Favourites_Aggregate;
  /** An array relationship */
  movie_genres: Array<Movie_Genres>;
  /** An aggregate relationship */
  movie_genres_aggregate: Movie_Genres_Aggregate;
  /** An array relationship */
  movie_keywords: Array<Movie_Keywords>;
  /** An aggregate relationship */
  movie_keywords_aggregate: Movie_Keywords_Aggregate;
  /** An array relationship */
  movie_media: Array<Movie_Media>;
  /** An aggregate relationship */
  movie_media_aggregate: Movie_Media_Aggregate;
  /** An array relationship */
  movie_production_companies: Array<Movie_Production_Companies>;
  /** An aggregate relationship */
  movie_production_companies_aggregate: Movie_Production_Companies_Aggregate;
  /** An array relationship */
  movie_production_countries: Array<Movie_Production_Countries>;
  /** An aggregate relationship */
  movie_production_countries_aggregate: Movie_Production_Countries_Aggregate;
  /** An array relationship */
  movie_ratings: Array<Movie_Ratings>;
  /** An aggregate relationship */
  movie_ratings_aggregate: Movie_Ratings_Aggregate;
  /** An array relationship */
  movie_reviews: Array<Movie_Reviews>;
  /** An aggregate relationship */
  movie_reviews_aggregate: Movie_Reviews_Aggregate;
  /** An array relationship */
  movie_soundtracks: Array<Movie_Soundtrack>;
  /** An aggregate relationship */
  movie_soundtracks_aggregate: Movie_Soundtrack_Aggregate;
  /** An array relationship */
  movie_watchlists: Array<Movie_Watchlist>;
  /** An aggregate relationship */
  movie_watchlists_aggregate: Movie_Watchlist_Aggregate;
  overview?: Maybe<Scalars['String']['output']>;
  poster: Scalars['String']['output'];
  /** A computed field, executes function "has_rated_movie" */
  rated?: Maybe<Scalars['Boolean']['output']>;
  release_date?: Maybe<Scalars['date']['output']>;
  revenue?: Maybe<Scalars['money']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  tmdb_id?: Maybe<Scalars['String']['output']>;
  trailer?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  view_count?: Maybe<Scalars['Int']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "has_watchlisted_movie" */
  watchlisted?: Maybe<Scalars['Boolean']['output']>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Alternative_TitlesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Alternative_Titles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Alternative_Titles_Order_By>>;
  where?: InputMaybe<Movie_Alternative_Titles_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Alternative_Titles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Alternative_Titles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Alternative_Titles_Order_By>>;
  where?: InputMaybe<Movie_Alternative_Titles_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Cast_MembersArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Cast_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Changes_Order_By>>;
  where?: InputMaybe<Movie_Changes_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Changes_Order_By>>;
  where?: InputMaybe<Movie_Changes_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Crew_MembersArgs = {
  distinct_on?: InputMaybe<Array<Movie_Crew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Crew_Order_By>>;
  where?: InputMaybe<Movie_Crew_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Crew_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Crew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Crew_Order_By>>;
  where?: InputMaybe<Movie_Crew_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_FavouritesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Favourites_Order_By>>;
  where?: InputMaybe<Movie_Favourites_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Favourites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Favourites_Order_By>>;
  where?: InputMaybe<Movie_Favourites_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_GenresArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Genres_Order_By>>;
  where?: InputMaybe<Movie_Genres_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Genres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Genres_Order_By>>;
  where?: InputMaybe<Movie_Genres_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_KeywordsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Keywords_Order_By>>;
  where?: InputMaybe<Movie_Keywords_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Keywords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Keywords_Order_By>>;
  where?: InputMaybe<Movie_Keywords_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_MediaArgs = {
  distinct_on?: InputMaybe<Array<Movie_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Media_Order_By>>;
  where?: InputMaybe<Movie_Media_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Media_Order_By>>;
  where?: InputMaybe<Movie_Media_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Production_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Production_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Production_Companies_Order_By>>;
  where?: InputMaybe<Movie_Production_Companies_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Production_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Production_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Production_Companies_Order_By>>;
  where?: InputMaybe<Movie_Production_Companies_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Production_CountriesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Production_Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Production_Countries_Order_By>>;
  where?: InputMaybe<Movie_Production_Countries_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Production_Countries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Production_Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Production_Countries_Order_By>>;
  where?: InputMaybe<Movie_Production_Countries_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Ratings_Order_By>>;
  where?: InputMaybe<Movie_Ratings_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Ratings_Order_By>>;
  where?: InputMaybe<Movie_Ratings_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_ReviewsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Reviews_Order_By>>;
  where?: InputMaybe<Movie_Reviews_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Reviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Reviews_Order_By>>;
  where?: InputMaybe<Movie_Reviews_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_SoundtracksArgs = {
  distinct_on?: InputMaybe<Array<Movie_Soundtrack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Soundtrack_Order_By>>;
  where?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Soundtracks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Soundtrack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Soundtrack_Order_By>>;
  where?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_WatchlistsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Watchlist_Order_By>>;
  where?: InputMaybe<Movie_Watchlist_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Watchlists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Watchlist_Order_By>>;
  where?: InputMaybe<Movie_Watchlist_Bool_Exp>;
};

/** aggregated selection of "movies" */
export type Movies_Aggregate = {
  __typename?: 'movies_aggregate';
  aggregate?: Maybe<Movies_Aggregate_Fields>;
  nodes: Array<Movies>;
};

/** aggregate fields of "movies" */
export type Movies_Aggregate_Fields = {
  __typename?: 'movies_aggregate_fields';
  avg?: Maybe<Movies_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Movies_Max_Fields>;
  min?: Maybe<Movies_Min_Fields>;
  stddev?: Maybe<Movies_Stddev_Fields>;
  stddev_pop?: Maybe<Movies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Movies_Stddev_Samp_Fields>;
  sum?: Maybe<Movies_Sum_Fields>;
  var_pop?: Maybe<Movies_Var_Pop_Fields>;
  var_samp?: Maybe<Movies_Var_Samp_Fields>;
  variance?: Maybe<Movies_Variance_Fields>;
};


/** aggregate fields of "movies" */
export type Movies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Movies_Avg_Fields = {
  __typename?: 'movies_avg_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  content_score?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "movies". All fields are combined with a logical 'AND'. */
export type Movies_Bool_Exp = {
  _and?: InputMaybe<Array<Movies_Bool_Exp>>;
  _not?: InputMaybe<Movies_Bool_Exp>;
  _or?: InputMaybe<Array<Movies_Bool_Exp>>;
  age_rating?: InputMaybe<String_Comparison_Exp>;
  average_rating?: InputMaybe<Float_Comparison_Exp>;
  backdrop?: InputMaybe<String_Comparison_Exp>;
  budget?: InputMaybe<Money_Comparison_Exp>;
  content_score?: InputMaybe<Float_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  favourited?: InputMaybe<Boolean_Comparison_Exp>;
  homepage?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imdb_id?: InputMaybe<String_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  movie_alternative_titles?: InputMaybe<Movie_Alternative_Titles_Bool_Exp>;
  movie_alternative_titles_aggregate?: InputMaybe<Movie_Alternative_Titles_Aggregate_Bool_Exp>;
  movie_cast_members?: InputMaybe<Movie_Cast_Bool_Exp>;
  movie_cast_members_aggregate?: InputMaybe<Movie_Cast_Aggregate_Bool_Exp>;
  movie_changes?: InputMaybe<Movie_Changes_Bool_Exp>;
  movie_changes_aggregate?: InputMaybe<Movie_Changes_Aggregate_Bool_Exp>;
  movie_crew_members?: InputMaybe<Movie_Crew_Bool_Exp>;
  movie_crew_members_aggregate?: InputMaybe<Movie_Crew_Aggregate_Bool_Exp>;
  movie_favourites?: InputMaybe<Movie_Favourites_Bool_Exp>;
  movie_favourites_aggregate?: InputMaybe<Movie_Favourites_Aggregate_Bool_Exp>;
  movie_genres?: InputMaybe<Movie_Genres_Bool_Exp>;
  movie_genres_aggregate?: InputMaybe<Movie_Genres_Aggregate_Bool_Exp>;
  movie_keywords?: InputMaybe<Movie_Keywords_Bool_Exp>;
  movie_keywords_aggregate?: InputMaybe<Movie_Keywords_Aggregate_Bool_Exp>;
  movie_media?: InputMaybe<Movie_Media_Bool_Exp>;
  movie_media_aggregate?: InputMaybe<Movie_Media_Aggregate_Bool_Exp>;
  movie_production_companies?: InputMaybe<Movie_Production_Companies_Bool_Exp>;
  movie_production_companies_aggregate?: InputMaybe<Movie_Production_Companies_Aggregate_Bool_Exp>;
  movie_production_countries?: InputMaybe<Movie_Production_Countries_Bool_Exp>;
  movie_production_countries_aggregate?: InputMaybe<Movie_Production_Countries_Aggregate_Bool_Exp>;
  movie_ratings?: InputMaybe<Movie_Ratings_Bool_Exp>;
  movie_ratings_aggregate?: InputMaybe<Movie_Ratings_Aggregate_Bool_Exp>;
  movie_reviews?: InputMaybe<Movie_Reviews_Bool_Exp>;
  movie_reviews_aggregate?: InputMaybe<Movie_Reviews_Aggregate_Bool_Exp>;
  movie_soundtracks?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
  movie_soundtracks_aggregate?: InputMaybe<Movie_Soundtrack_Aggregate_Bool_Exp>;
  movie_watchlists?: InputMaybe<Movie_Watchlist_Bool_Exp>;
  movie_watchlists_aggregate?: InputMaybe<Movie_Watchlist_Aggregate_Bool_Exp>;
  overview?: InputMaybe<String_Comparison_Exp>;
  poster?: InputMaybe<String_Comparison_Exp>;
  rated?: InputMaybe<Boolean_Comparison_Exp>;
  release_date?: InputMaybe<Date_Comparison_Exp>;
  revenue?: InputMaybe<Money_Comparison_Exp>;
  runtime?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  tagline?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  tmdb_id?: InputMaybe<String_Comparison_Exp>;
  trailer?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  view_count?: InputMaybe<Int_Comparison_Exp>;
  vote_average?: InputMaybe<Float_Comparison_Exp>;
  vote_count?: InputMaybe<Int_Comparison_Exp>;
  watchlisted?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "movies" */
export enum Movies_Constraint {
  /** unique or primary key constraint on columns "id" */
  MoviesPkey = 'movies_pkey'
}

/** input type for incrementing numeric columns in table "movies" */
export type Movies_Inc_Input = {
  average_rating?: InputMaybe<Scalars['Float']['input']>;
  budget?: InputMaybe<Scalars['money']['input']>;
  content_score?: InputMaybe<Scalars['Float']['input']>;
  revenue?: InputMaybe<Scalars['money']['input']>;
  runtime?: InputMaybe<Scalars['Int']['input']>;
  view_count?: InputMaybe<Scalars['Int']['input']>;
  vote_average?: InputMaybe<Scalars['Float']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "movies" */
export type Movies_Insert_Input = {
  age_rating?: InputMaybe<Scalars['String']['input']>;
  average_rating?: InputMaybe<Scalars['Float']['input']>;
  backdrop?: InputMaybe<Scalars['String']['input']>;
  budget?: InputMaybe<Scalars['money']['input']>;
  content_score?: InputMaybe<Scalars['Float']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  homepage?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  imdb_id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  movie_alternative_titles?: InputMaybe<Movie_Alternative_Titles_Arr_Rel_Insert_Input>;
  movie_cast_members?: InputMaybe<Movie_Cast_Arr_Rel_Insert_Input>;
  movie_changes?: InputMaybe<Movie_Changes_Arr_Rel_Insert_Input>;
  movie_crew_members?: InputMaybe<Movie_Crew_Arr_Rel_Insert_Input>;
  movie_favourites?: InputMaybe<Movie_Favourites_Arr_Rel_Insert_Input>;
  movie_genres?: InputMaybe<Movie_Genres_Arr_Rel_Insert_Input>;
  movie_keywords?: InputMaybe<Movie_Keywords_Arr_Rel_Insert_Input>;
  movie_media?: InputMaybe<Movie_Media_Arr_Rel_Insert_Input>;
  movie_production_companies?: InputMaybe<Movie_Production_Companies_Arr_Rel_Insert_Input>;
  movie_production_countries?: InputMaybe<Movie_Production_Countries_Arr_Rel_Insert_Input>;
  movie_ratings?: InputMaybe<Movie_Ratings_Arr_Rel_Insert_Input>;
  movie_reviews?: InputMaybe<Movie_Reviews_Arr_Rel_Insert_Input>;
  movie_soundtracks?: InputMaybe<Movie_Soundtrack_Arr_Rel_Insert_Input>;
  movie_watchlists?: InputMaybe<Movie_Watchlist_Arr_Rel_Insert_Input>;
  overview?: InputMaybe<Scalars['String']['input']>;
  poster?: InputMaybe<Scalars['String']['input']>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  revenue?: InputMaybe<Scalars['money']['input']>;
  runtime?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tmdb_id?: InputMaybe<Scalars['String']['input']>;
  trailer?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  view_count?: InputMaybe<Scalars['Int']['input']>;
  vote_average?: InputMaybe<Scalars['Float']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Movies_Max_Fields = {
  __typename?: 'movies_max_fields';
  age_rating?: Maybe<Scalars['String']['output']>;
  average_rating?: Maybe<Scalars['Float']['output']>;
  backdrop?: Maybe<Scalars['String']['output']>;
  budget?: Maybe<Scalars['money']['output']>;
  content_score?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  homepage?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  imdb_id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  poster?: Maybe<Scalars['String']['output']>;
  release_date?: Maybe<Scalars['date']['output']>;
  revenue?: Maybe<Scalars['money']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tmdb_id?: Maybe<Scalars['String']['output']>;
  trailer?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  view_count?: Maybe<Scalars['Int']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Movies_Min_Fields = {
  __typename?: 'movies_min_fields';
  age_rating?: Maybe<Scalars['String']['output']>;
  average_rating?: Maybe<Scalars['Float']['output']>;
  backdrop?: Maybe<Scalars['String']['output']>;
  budget?: Maybe<Scalars['money']['output']>;
  content_score?: Maybe<Scalars['Float']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  homepage?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  imdb_id?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  poster?: Maybe<Scalars['String']['output']>;
  release_date?: Maybe<Scalars['date']['output']>;
  revenue?: Maybe<Scalars['money']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tmdb_id?: Maybe<Scalars['String']['output']>;
  trailer?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  view_count?: Maybe<Scalars['Int']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "movies" */
export type Movies_Mutation_Response = {
  __typename?: 'movies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movies>;
};

/** input type for inserting object relation for remote table "movies" */
export type Movies_Obj_Rel_Insert_Input = {
  data: Movies_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Movies_On_Conflict>;
};

/** on_conflict condition type for table "movies" */
export type Movies_On_Conflict = {
  constraint: Movies_Constraint;
  update_columns?: Array<Movies_Update_Column>;
  where?: InputMaybe<Movies_Bool_Exp>;
};

/** Ordering options when selecting data from "movies". */
export type Movies_Order_By = {
  age_rating?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  backdrop?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  content_score?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  favourited?: InputMaybe<Order_By>;
  homepage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imdb_id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  movie_alternative_titles_aggregate?: InputMaybe<Movie_Alternative_Titles_Aggregate_Order_By>;
  movie_cast_members_aggregate?: InputMaybe<Movie_Cast_Aggregate_Order_By>;
  movie_changes_aggregate?: InputMaybe<Movie_Changes_Aggregate_Order_By>;
  movie_crew_members_aggregate?: InputMaybe<Movie_Crew_Aggregate_Order_By>;
  movie_favourites_aggregate?: InputMaybe<Movie_Favourites_Aggregate_Order_By>;
  movie_genres_aggregate?: InputMaybe<Movie_Genres_Aggregate_Order_By>;
  movie_keywords_aggregate?: InputMaybe<Movie_Keywords_Aggregate_Order_By>;
  movie_media_aggregate?: InputMaybe<Movie_Media_Aggregate_Order_By>;
  movie_production_companies_aggregate?: InputMaybe<Movie_Production_Companies_Aggregate_Order_By>;
  movie_production_countries_aggregate?: InputMaybe<Movie_Production_Countries_Aggregate_Order_By>;
  movie_ratings_aggregate?: InputMaybe<Movie_Ratings_Aggregate_Order_By>;
  movie_reviews_aggregate?: InputMaybe<Movie_Reviews_Aggregate_Order_By>;
  movie_soundtracks_aggregate?: InputMaybe<Movie_Soundtrack_Aggregate_Order_By>;
  movie_watchlists_aggregate?: InputMaybe<Movie_Watchlist_Aggregate_Order_By>;
  overview?: InputMaybe<Order_By>;
  poster?: InputMaybe<Order_By>;
  rated?: InputMaybe<Order_By>;
  release_date?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  runtime?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tagline?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tmdb_id?: InputMaybe<Order_By>;
  trailer?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  view_count?: InputMaybe<Order_By>;
  vote_average?: InputMaybe<Order_By>;
  vote_count?: InputMaybe<Order_By>;
  watchlisted?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movies */
export type Movies_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movies" */
export enum Movies_Select_Column {
  /** column name */
  AgeRating = 'age_rating',
  /** column name */
  AverageRating = 'average_rating',
  /** column name */
  Backdrop = 'backdrop',
  /** column name */
  Budget = 'budget',
  /** column name */
  ContentScore = 'content_score',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Homepage = 'homepage',
  /** column name */
  Id = 'id',
  /** column name */
  ImdbId = 'imdb_id',
  /** column name */
  Language = 'language',
  /** column name */
  Overview = 'overview',
  /** column name */
  Poster = 'poster',
  /** column name */
  ReleaseDate = 'release_date',
  /** column name */
  Revenue = 'revenue',
  /** column name */
  Runtime = 'runtime',
  /** column name */
  Status = 'status',
  /** column name */
  Tagline = 'tagline',
  /** column name */
  Title = 'title',
  /** column name */
  TmdbId = 'tmdb_id',
  /** column name */
  Trailer = 'trailer',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ViewCount = 'view_count',
  /** column name */
  VoteAverage = 'vote_average',
  /** column name */
  VoteCount = 'vote_count'
}

/** input type for updating data in table "movies" */
export type Movies_Set_Input = {
  age_rating?: InputMaybe<Scalars['String']['input']>;
  average_rating?: InputMaybe<Scalars['Float']['input']>;
  backdrop?: InputMaybe<Scalars['String']['input']>;
  budget?: InputMaybe<Scalars['money']['input']>;
  content_score?: InputMaybe<Scalars['Float']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  homepage?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  imdb_id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
  poster?: InputMaybe<Scalars['String']['input']>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  revenue?: InputMaybe<Scalars['money']['input']>;
  runtime?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tmdb_id?: InputMaybe<Scalars['String']['input']>;
  trailer?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  view_count?: InputMaybe<Scalars['Int']['input']>;
  vote_average?: InputMaybe<Scalars['Float']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Movies_Stddev_Fields = {
  __typename?: 'movies_stddev_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  content_score?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Movies_Stddev_Pop_Fields = {
  __typename?: 'movies_stddev_pop_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  content_score?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Movies_Stddev_Samp_Fields = {
  __typename?: 'movies_stddev_samp_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  content_score?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "movies" */
export type Movies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movies_Stream_Cursor_Value_Input = {
  age_rating?: InputMaybe<Scalars['String']['input']>;
  average_rating?: InputMaybe<Scalars['Float']['input']>;
  backdrop?: InputMaybe<Scalars['String']['input']>;
  budget?: InputMaybe<Scalars['money']['input']>;
  content_score?: InputMaybe<Scalars['Float']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  homepage?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  imdb_id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
  poster?: InputMaybe<Scalars['String']['input']>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  revenue?: InputMaybe<Scalars['money']['input']>;
  runtime?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tmdb_id?: InputMaybe<Scalars['String']['input']>;
  trailer?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  view_count?: InputMaybe<Scalars['Int']['input']>;
  vote_average?: InputMaybe<Scalars['Float']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Movies_Sum_Fields = {
  __typename?: 'movies_sum_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['money']['output']>;
  content_score?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['money']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  view_count?: Maybe<Scalars['Int']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "movies" */
export enum Movies_Update_Column {
  /** column name */
  AgeRating = 'age_rating',
  /** column name */
  AverageRating = 'average_rating',
  /** column name */
  Backdrop = 'backdrop',
  /** column name */
  Budget = 'budget',
  /** column name */
  ContentScore = 'content_score',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Homepage = 'homepage',
  /** column name */
  Id = 'id',
  /** column name */
  ImdbId = 'imdb_id',
  /** column name */
  Language = 'language',
  /** column name */
  Overview = 'overview',
  /** column name */
  Poster = 'poster',
  /** column name */
  ReleaseDate = 'release_date',
  /** column name */
  Revenue = 'revenue',
  /** column name */
  Runtime = 'runtime',
  /** column name */
  Status = 'status',
  /** column name */
  Tagline = 'tagline',
  /** column name */
  Title = 'title',
  /** column name */
  TmdbId = 'tmdb_id',
  /** column name */
  Trailer = 'trailer',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ViewCount = 'view_count',
  /** column name */
  VoteAverage = 'vote_average',
  /** column name */
  VoteCount = 'vote_count'
}

export type Movies_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Movies_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movies_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Movies_Var_Pop_Fields = {
  __typename?: 'movies_var_pop_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  content_score?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Movies_Var_Samp_Fields = {
  __typename?: 'movies_var_samp_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  content_score?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Movies_Variance_Fields = {
  __typename?: 'movies_variance_fields';
  average_rating?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  content_score?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete single row from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** delete data from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "storage.virus" */
  deleteVirus?: Maybe<Virus>;
  /** delete data from the table: "storage.virus" */
  deleteViruses?: Maybe<Virus_Mutation_Response>;
  /** delete data from the table: "album_artists" */
  delete_album_artists?: Maybe<Album_Artists_Mutation_Response>;
  /** delete single row from the table: "album_artists" */
  delete_album_artists_by_pk?: Maybe<Album_Artists>;
  /** delete data from the table: "album_songs" */
  delete_album_songs?: Maybe<Album_Songs_Mutation_Response>;
  /** delete single row from the table: "album_songs" */
  delete_album_songs_by_pk?: Maybe<Album_Songs>;
  /** delete data from the table: "albums" */
  delete_albums?: Maybe<Albums_Mutation_Response>;
  /** delete single row from the table: "albums" */
  delete_albums_by_pk?: Maybe<Albums>;
  /** delete data from the table: "auth.migrations" */
  delete_auth_migrations?: Maybe<Auth_Migrations_Mutation_Response>;
  /** delete single row from the table: "auth.migrations" */
  delete_auth_migrations_by_pk?: Maybe<Auth_Migrations>;
  /** delete data from the table: "genres" */
  delete_genres?: Maybe<Genres_Mutation_Response>;
  /** delete single row from the table: "genres" */
  delete_genres_by_pk?: Maybe<Genres>;
  /** delete data from the table: "keywords" */
  delete_keywords?: Maybe<Keywords_Mutation_Response>;
  /** delete single row from the table: "keywords" */
  delete_keywords_by_pk?: Maybe<Keywords>;
  /** delete data from the table: "movie_alternative_titles" */
  delete_movie_alternative_titles?: Maybe<Movie_Alternative_Titles_Mutation_Response>;
  /** delete single row from the table: "movie_alternative_titles" */
  delete_movie_alternative_titles_by_pk?: Maybe<Movie_Alternative_Titles>;
  /** delete data from the table: "movie_cast" */
  delete_movie_cast?: Maybe<Movie_Cast_Mutation_Response>;
  /** delete single row from the table: "movie_cast" */
  delete_movie_cast_by_pk?: Maybe<Movie_Cast>;
  /** delete data from the table: "movie_changes" */
  delete_movie_changes?: Maybe<Movie_Changes_Mutation_Response>;
  /** delete single row from the table: "movie_changes" */
  delete_movie_changes_by_pk?: Maybe<Movie_Changes>;
  /** delete data from the table: "movie_crew" */
  delete_movie_crew?: Maybe<Movie_Crew_Mutation_Response>;
  /** delete single row from the table: "movie_crew" */
  delete_movie_crew_by_pk?: Maybe<Movie_Crew>;
  /** delete data from the table: "movie_favourites" */
  delete_movie_favourites?: Maybe<Movie_Favourites_Mutation_Response>;
  /** delete single row from the table: "movie_favourites" */
  delete_movie_favourites_by_pk?: Maybe<Movie_Favourites>;
  /** delete data from the table: "movie_genres" */
  delete_movie_genres?: Maybe<Movie_Genres_Mutation_Response>;
  /** delete single row from the table: "movie_genres" */
  delete_movie_genres_by_pk?: Maybe<Movie_Genres>;
  /** delete data from the table: "movie_keywords" */
  delete_movie_keywords?: Maybe<Movie_Keywords_Mutation_Response>;
  /** delete single row from the table: "movie_keywords" */
  delete_movie_keywords_by_pk?: Maybe<Movie_Keywords>;
  /** delete data from the table: "movie_media" */
  delete_movie_media?: Maybe<Movie_Media_Mutation_Response>;
  /** delete single row from the table: "movie_media" */
  delete_movie_media_by_pk?: Maybe<Movie_Media>;
  /** delete data from the table: "movie_production_companies" */
  delete_movie_production_companies?: Maybe<Movie_Production_Companies_Mutation_Response>;
  /** delete single row from the table: "movie_production_companies" */
  delete_movie_production_companies_by_pk?: Maybe<Movie_Production_Companies>;
  /** delete data from the table: "movie_production_countries" */
  delete_movie_production_countries?: Maybe<Movie_Production_Countries_Mutation_Response>;
  /** delete single row from the table: "movie_production_countries" */
  delete_movie_production_countries_by_pk?: Maybe<Movie_Production_Countries>;
  /** delete data from the table: "movie_ratings" */
  delete_movie_ratings?: Maybe<Movie_Ratings_Mutation_Response>;
  /** delete single row from the table: "movie_ratings" */
  delete_movie_ratings_by_pk?: Maybe<Movie_Ratings>;
  /** delete data from the table: "movie_reviews" */
  delete_movie_reviews?: Maybe<Movie_Reviews_Mutation_Response>;
  /** delete single row from the table: "movie_reviews" */
  delete_movie_reviews_by_pk?: Maybe<Movie_Reviews>;
  /** delete data from the table: "movie_soundtrack" */
  delete_movie_soundtrack?: Maybe<Movie_Soundtrack_Mutation_Response>;
  /** delete single row from the table: "movie_soundtrack" */
  delete_movie_soundtrack_by_pk?: Maybe<Movie_Soundtrack>;
  /** delete data from the table: "movie_watchlist" */
  delete_movie_watchlist?: Maybe<Movie_Watchlist_Mutation_Response>;
  /** delete single row from the table: "movie_watchlist" */
  delete_movie_watchlist_by_pk?: Maybe<Movie_Watchlist>;
  /** delete data from the table: "movies" */
  delete_movies?: Maybe<Movies_Mutation_Response>;
  /** delete single row from the table: "movies" */
  delete_movies_by_pk?: Maybe<Movies>;
  /** delete data from the table: "notifications" */
  delete_notifications?: Maybe<Notifications_Mutation_Response>;
  /** delete single row from the table: "notifications" */
  delete_notifications_by_pk?: Maybe<Notifications>;
  /** delete data from the table: "people" */
  delete_people?: Maybe<People_Mutation_Response>;
  /** delete single row from the table: "people" */
  delete_people_by_pk?: Maybe<People>;
  /** delete data from the table: "person_changes" */
  delete_person_changes?: Maybe<Person_Changes_Mutation_Response>;
  /** delete single row from the table: "person_changes" */
  delete_person_changes_by_pk?: Maybe<Person_Changes>;
  /** delete data from the table: "person_media" */
  delete_person_media?: Maybe<Person_Media_Mutation_Response>;
  /** delete single row from the table: "person_media" */
  delete_person_media_by_pk?: Maybe<Person_Media>;
  /** delete data from the table: "report_votes" */
  delete_report_votes?: Maybe<Report_Votes_Mutation_Response>;
  /** delete single row from the table: "report_votes" */
  delete_report_votes_by_pk?: Maybe<Report_Votes>;
  /** delete data from the table: "reports" */
  delete_reports?: Maybe<Reports_Mutation_Response>;
  /** delete single row from the table: "reports" */
  delete_reports_by_pk?: Maybe<Reports>;
  /** delete data from the table: "song_artists" */
  delete_song_artists?: Maybe<Song_Artists_Mutation_Response>;
  /** delete single row from the table: "song_artists" */
  delete_song_artists_by_pk?: Maybe<Song_Artists>;
  /** delete data from the table: "song_changes" */
  delete_song_changes?: Maybe<Song_Changes_Mutation_Response>;
  /** delete single row from the table: "song_changes" */
  delete_song_changes_by_pk?: Maybe<Song_Changes>;
  /** delete data from the table: "song_favourites" */
  delete_song_favourites?: Maybe<Song_Favourites_Mutation_Response>;
  /** delete single row from the table: "song_favourites" */
  delete_song_favourites_by_pk?: Maybe<Song_Favourites>;
  /** delete data from the table: "song_genres" */
  delete_song_genres?: Maybe<Song_Genres_Mutation_Response>;
  /** delete single row from the table: "song_genres" */
  delete_song_genres_by_pk?: Maybe<Song_Genres>;
  /** delete data from the table: "song_keywords" */
  delete_song_keywords?: Maybe<Song_Keywords_Mutation_Response>;
  /** delete single row from the table: "song_keywords" */
  delete_song_keywords_by_pk?: Maybe<Song_Keywords>;
  /** delete data from the table: "song_listen_later" */
  delete_song_listen_later?: Maybe<Song_Listen_Later_Mutation_Response>;
  /** delete single row from the table: "song_listen_later" */
  delete_song_listen_later_by_pk?: Maybe<Song_Listen_Later>;
  /** delete data from the table: "song_media" */
  delete_song_media?: Maybe<Song_Media_Mutation_Response>;
  /** delete single row from the table: "song_media" */
  delete_song_media_by_pk?: Maybe<Song_Media>;
  /** delete data from the table: "song_ratings" */
  delete_song_ratings?: Maybe<Song_Ratings_Mutation_Response>;
  /** delete single row from the table: "song_ratings" */
  delete_song_ratings_by_pk?: Maybe<Song_Ratings>;
  /** delete data from the table: "song_reviews" */
  delete_song_reviews?: Maybe<Song_Reviews_Mutation_Response>;
  /** delete single row from the table: "song_reviews" */
  delete_song_reviews_by_pk?: Maybe<Song_Reviews>;
  /** delete data from the table: "songs" */
  delete_songs?: Maybe<Songs_Mutation_Response>;
  /** delete single row from the table: "songs" */
  delete_songs_by_pk?: Maybe<Songs>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert a single row into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** insert data into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "storage.virus" */
  insertVirus?: Maybe<Virus>;
  /** insert data into the table: "storage.virus" */
  insertViruses?: Maybe<Virus_Mutation_Response>;
  /** insert data into the table: "album_artists" */
  insert_album_artists?: Maybe<Album_Artists_Mutation_Response>;
  /** insert a single row into the table: "album_artists" */
  insert_album_artists_one?: Maybe<Album_Artists>;
  /** insert data into the table: "album_songs" */
  insert_album_songs?: Maybe<Album_Songs_Mutation_Response>;
  /** insert a single row into the table: "album_songs" */
  insert_album_songs_one?: Maybe<Album_Songs>;
  /** insert data into the table: "albums" */
  insert_albums?: Maybe<Albums_Mutation_Response>;
  /** insert a single row into the table: "albums" */
  insert_albums_one?: Maybe<Albums>;
  /** insert data into the table: "auth.migrations" */
  insert_auth_migrations?: Maybe<Auth_Migrations_Mutation_Response>;
  /** insert a single row into the table: "auth.migrations" */
  insert_auth_migrations_one?: Maybe<Auth_Migrations>;
  /** insert data into the table: "genres" */
  insert_genres?: Maybe<Genres_Mutation_Response>;
  /** insert a single row into the table: "genres" */
  insert_genres_one?: Maybe<Genres>;
  /** insert data into the table: "keywords" */
  insert_keywords?: Maybe<Keywords_Mutation_Response>;
  /** insert a single row into the table: "keywords" */
  insert_keywords_one?: Maybe<Keywords>;
  /** insert data into the table: "movie_alternative_titles" */
  insert_movie_alternative_titles?: Maybe<Movie_Alternative_Titles_Mutation_Response>;
  /** insert a single row into the table: "movie_alternative_titles" */
  insert_movie_alternative_titles_one?: Maybe<Movie_Alternative_Titles>;
  /** insert data into the table: "movie_cast" */
  insert_movie_cast?: Maybe<Movie_Cast_Mutation_Response>;
  /** insert a single row into the table: "movie_cast" */
  insert_movie_cast_one?: Maybe<Movie_Cast>;
  /** insert data into the table: "movie_changes" */
  insert_movie_changes?: Maybe<Movie_Changes_Mutation_Response>;
  /** insert a single row into the table: "movie_changes" */
  insert_movie_changes_one?: Maybe<Movie_Changes>;
  /** insert data into the table: "movie_crew" */
  insert_movie_crew?: Maybe<Movie_Crew_Mutation_Response>;
  /** insert a single row into the table: "movie_crew" */
  insert_movie_crew_one?: Maybe<Movie_Crew>;
  /** insert data into the table: "movie_favourites" */
  insert_movie_favourites?: Maybe<Movie_Favourites_Mutation_Response>;
  /** insert a single row into the table: "movie_favourites" */
  insert_movie_favourites_one?: Maybe<Movie_Favourites>;
  /** insert data into the table: "movie_genres" */
  insert_movie_genres?: Maybe<Movie_Genres_Mutation_Response>;
  /** insert a single row into the table: "movie_genres" */
  insert_movie_genres_one?: Maybe<Movie_Genres>;
  /** insert data into the table: "movie_keywords" */
  insert_movie_keywords?: Maybe<Movie_Keywords_Mutation_Response>;
  /** insert a single row into the table: "movie_keywords" */
  insert_movie_keywords_one?: Maybe<Movie_Keywords>;
  /** insert data into the table: "movie_media" */
  insert_movie_media?: Maybe<Movie_Media_Mutation_Response>;
  /** insert a single row into the table: "movie_media" */
  insert_movie_media_one?: Maybe<Movie_Media>;
  /** insert data into the table: "movie_production_companies" */
  insert_movie_production_companies?: Maybe<Movie_Production_Companies_Mutation_Response>;
  /** insert a single row into the table: "movie_production_companies" */
  insert_movie_production_companies_one?: Maybe<Movie_Production_Companies>;
  /** insert data into the table: "movie_production_countries" */
  insert_movie_production_countries?: Maybe<Movie_Production_Countries_Mutation_Response>;
  /** insert a single row into the table: "movie_production_countries" */
  insert_movie_production_countries_one?: Maybe<Movie_Production_Countries>;
  /** insert data into the table: "movie_ratings" */
  insert_movie_ratings?: Maybe<Movie_Ratings_Mutation_Response>;
  /** insert a single row into the table: "movie_ratings" */
  insert_movie_ratings_one?: Maybe<Movie_Ratings>;
  /** insert data into the table: "movie_reviews" */
  insert_movie_reviews?: Maybe<Movie_Reviews_Mutation_Response>;
  /** insert a single row into the table: "movie_reviews" */
  insert_movie_reviews_one?: Maybe<Movie_Reviews>;
  /** insert data into the table: "movie_soundtrack" */
  insert_movie_soundtrack?: Maybe<Movie_Soundtrack_Mutation_Response>;
  /** insert a single row into the table: "movie_soundtrack" */
  insert_movie_soundtrack_one?: Maybe<Movie_Soundtrack>;
  /** insert data into the table: "movie_watchlist" */
  insert_movie_watchlist?: Maybe<Movie_Watchlist_Mutation_Response>;
  /** insert a single row into the table: "movie_watchlist" */
  insert_movie_watchlist_one?: Maybe<Movie_Watchlist>;
  /** insert data into the table: "movies" */
  insert_movies?: Maybe<Movies_Mutation_Response>;
  /** insert a single row into the table: "movies" */
  insert_movies_one?: Maybe<Movies>;
  /** insert data into the table: "notifications" */
  insert_notifications?: Maybe<Notifications_Mutation_Response>;
  /** insert a single row into the table: "notifications" */
  insert_notifications_one?: Maybe<Notifications>;
  /** insert data into the table: "people" */
  insert_people?: Maybe<People_Mutation_Response>;
  /** insert a single row into the table: "people" */
  insert_people_one?: Maybe<People>;
  /** insert data into the table: "person_changes" */
  insert_person_changes?: Maybe<Person_Changes_Mutation_Response>;
  /** insert a single row into the table: "person_changes" */
  insert_person_changes_one?: Maybe<Person_Changes>;
  /** insert data into the table: "person_media" */
  insert_person_media?: Maybe<Person_Media_Mutation_Response>;
  /** insert a single row into the table: "person_media" */
  insert_person_media_one?: Maybe<Person_Media>;
  /** insert data into the table: "report_votes" */
  insert_report_votes?: Maybe<Report_Votes_Mutation_Response>;
  /** insert a single row into the table: "report_votes" */
  insert_report_votes_one?: Maybe<Report_Votes>;
  /** insert data into the table: "reports" */
  insert_reports?: Maybe<Reports_Mutation_Response>;
  /** insert a single row into the table: "reports" */
  insert_reports_one?: Maybe<Reports>;
  /** insert data into the table: "song_artists" */
  insert_song_artists?: Maybe<Song_Artists_Mutation_Response>;
  /** insert a single row into the table: "song_artists" */
  insert_song_artists_one?: Maybe<Song_Artists>;
  /** insert data into the table: "song_changes" */
  insert_song_changes?: Maybe<Song_Changes_Mutation_Response>;
  /** insert a single row into the table: "song_changes" */
  insert_song_changes_one?: Maybe<Song_Changes>;
  /** insert data into the table: "song_favourites" */
  insert_song_favourites?: Maybe<Song_Favourites_Mutation_Response>;
  /** insert a single row into the table: "song_favourites" */
  insert_song_favourites_one?: Maybe<Song_Favourites>;
  /** insert data into the table: "song_genres" */
  insert_song_genres?: Maybe<Song_Genres_Mutation_Response>;
  /** insert a single row into the table: "song_genres" */
  insert_song_genres_one?: Maybe<Song_Genres>;
  /** insert data into the table: "song_keywords" */
  insert_song_keywords?: Maybe<Song_Keywords_Mutation_Response>;
  /** insert a single row into the table: "song_keywords" */
  insert_song_keywords_one?: Maybe<Song_Keywords>;
  /** insert data into the table: "song_listen_later" */
  insert_song_listen_later?: Maybe<Song_Listen_Later_Mutation_Response>;
  /** insert a single row into the table: "song_listen_later" */
  insert_song_listen_later_one?: Maybe<Song_Listen_Later>;
  /** insert data into the table: "song_media" */
  insert_song_media?: Maybe<Song_Media_Mutation_Response>;
  /** insert a single row into the table: "song_media" */
  insert_song_media_one?: Maybe<Song_Media>;
  /** insert data into the table: "song_ratings" */
  insert_song_ratings?: Maybe<Song_Ratings_Mutation_Response>;
  /** insert a single row into the table: "song_ratings" */
  insert_song_ratings_one?: Maybe<Song_Ratings>;
  /** insert data into the table: "song_reviews" */
  insert_song_reviews?: Maybe<Song_Reviews_Mutation_Response>;
  /** insert a single row into the table: "song_reviews" */
  insert_song_reviews_one?: Maybe<Song_Reviews>;
  /** insert data into the table: "songs" */
  insert_songs?: Maybe<Songs_Mutation_Response>;
  /** insert a single row into the table: "songs" */
  insert_songs_one?: Maybe<Songs>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update single row of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** update data of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "storage.virus" */
  updateVirus?: Maybe<Virus>;
  /** update data of the table: "storage.virus" */
  updateViruses?: Maybe<Virus_Mutation_Response>;
  /** update data of the table: "album_artists" */
  update_album_artists?: Maybe<Album_Artists_Mutation_Response>;
  /** update single row of the table: "album_artists" */
  update_album_artists_by_pk?: Maybe<Album_Artists>;
  /** update multiples rows of table: "album_artists" */
  update_album_artists_many?: Maybe<Array<Maybe<Album_Artists_Mutation_Response>>>;
  /** update data of the table: "album_songs" */
  update_album_songs?: Maybe<Album_Songs_Mutation_Response>;
  /** update single row of the table: "album_songs" */
  update_album_songs_by_pk?: Maybe<Album_Songs>;
  /** update multiples rows of table: "album_songs" */
  update_album_songs_many?: Maybe<Array<Maybe<Album_Songs_Mutation_Response>>>;
  /** update data of the table: "albums" */
  update_albums?: Maybe<Albums_Mutation_Response>;
  /** update single row of the table: "albums" */
  update_albums_by_pk?: Maybe<Albums>;
  /** update multiples rows of table: "albums" */
  update_albums_many?: Maybe<Array<Maybe<Albums_Mutation_Response>>>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_token_types" */
  update_authRefreshTokenTypes_many?: Maybe<Array<Maybe<AuthRefreshTokenTypes_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update data of the table: "auth.migrations" */
  update_auth_migrations?: Maybe<Auth_Migrations_Mutation_Response>;
  /** update single row of the table: "auth.migrations" */
  update_auth_migrations_by_pk?: Maybe<Auth_Migrations>;
  /** update multiples rows of table: "auth.migrations" */
  update_auth_migrations_many?: Maybe<Array<Maybe<Auth_Migrations_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "genres" */
  update_genres?: Maybe<Genres_Mutation_Response>;
  /** update single row of the table: "genres" */
  update_genres_by_pk?: Maybe<Genres>;
  /** update multiples rows of table: "genres" */
  update_genres_many?: Maybe<Array<Maybe<Genres_Mutation_Response>>>;
  /** update data of the table: "keywords" */
  update_keywords?: Maybe<Keywords_Mutation_Response>;
  /** update single row of the table: "keywords" */
  update_keywords_by_pk?: Maybe<Keywords>;
  /** update multiples rows of table: "keywords" */
  update_keywords_many?: Maybe<Array<Maybe<Keywords_Mutation_Response>>>;
  /** update data of the table: "movie_alternative_titles" */
  update_movie_alternative_titles?: Maybe<Movie_Alternative_Titles_Mutation_Response>;
  /** update single row of the table: "movie_alternative_titles" */
  update_movie_alternative_titles_by_pk?: Maybe<Movie_Alternative_Titles>;
  /** update multiples rows of table: "movie_alternative_titles" */
  update_movie_alternative_titles_many?: Maybe<Array<Maybe<Movie_Alternative_Titles_Mutation_Response>>>;
  /** update data of the table: "movie_cast" */
  update_movie_cast?: Maybe<Movie_Cast_Mutation_Response>;
  /** update single row of the table: "movie_cast" */
  update_movie_cast_by_pk?: Maybe<Movie_Cast>;
  /** update multiples rows of table: "movie_cast" */
  update_movie_cast_many?: Maybe<Array<Maybe<Movie_Cast_Mutation_Response>>>;
  /** update data of the table: "movie_changes" */
  update_movie_changes?: Maybe<Movie_Changes_Mutation_Response>;
  /** update single row of the table: "movie_changes" */
  update_movie_changes_by_pk?: Maybe<Movie_Changes>;
  /** update multiples rows of table: "movie_changes" */
  update_movie_changes_many?: Maybe<Array<Maybe<Movie_Changes_Mutation_Response>>>;
  /** update data of the table: "movie_crew" */
  update_movie_crew?: Maybe<Movie_Crew_Mutation_Response>;
  /** update single row of the table: "movie_crew" */
  update_movie_crew_by_pk?: Maybe<Movie_Crew>;
  /** update multiples rows of table: "movie_crew" */
  update_movie_crew_many?: Maybe<Array<Maybe<Movie_Crew_Mutation_Response>>>;
  /** update data of the table: "movie_favourites" */
  update_movie_favourites?: Maybe<Movie_Favourites_Mutation_Response>;
  /** update single row of the table: "movie_favourites" */
  update_movie_favourites_by_pk?: Maybe<Movie_Favourites>;
  /** update multiples rows of table: "movie_favourites" */
  update_movie_favourites_many?: Maybe<Array<Maybe<Movie_Favourites_Mutation_Response>>>;
  /** update data of the table: "movie_genres" */
  update_movie_genres?: Maybe<Movie_Genres_Mutation_Response>;
  /** update single row of the table: "movie_genres" */
  update_movie_genres_by_pk?: Maybe<Movie_Genres>;
  /** update multiples rows of table: "movie_genres" */
  update_movie_genres_many?: Maybe<Array<Maybe<Movie_Genres_Mutation_Response>>>;
  /** update data of the table: "movie_keywords" */
  update_movie_keywords?: Maybe<Movie_Keywords_Mutation_Response>;
  /** update single row of the table: "movie_keywords" */
  update_movie_keywords_by_pk?: Maybe<Movie_Keywords>;
  /** update multiples rows of table: "movie_keywords" */
  update_movie_keywords_many?: Maybe<Array<Maybe<Movie_Keywords_Mutation_Response>>>;
  /** update data of the table: "movie_media" */
  update_movie_media?: Maybe<Movie_Media_Mutation_Response>;
  /** update single row of the table: "movie_media" */
  update_movie_media_by_pk?: Maybe<Movie_Media>;
  /** update multiples rows of table: "movie_media" */
  update_movie_media_many?: Maybe<Array<Maybe<Movie_Media_Mutation_Response>>>;
  /** update data of the table: "movie_production_companies" */
  update_movie_production_companies?: Maybe<Movie_Production_Companies_Mutation_Response>;
  /** update single row of the table: "movie_production_companies" */
  update_movie_production_companies_by_pk?: Maybe<Movie_Production_Companies>;
  /** update multiples rows of table: "movie_production_companies" */
  update_movie_production_companies_many?: Maybe<Array<Maybe<Movie_Production_Companies_Mutation_Response>>>;
  /** update data of the table: "movie_production_countries" */
  update_movie_production_countries?: Maybe<Movie_Production_Countries_Mutation_Response>;
  /** update single row of the table: "movie_production_countries" */
  update_movie_production_countries_by_pk?: Maybe<Movie_Production_Countries>;
  /** update multiples rows of table: "movie_production_countries" */
  update_movie_production_countries_many?: Maybe<Array<Maybe<Movie_Production_Countries_Mutation_Response>>>;
  /** update data of the table: "movie_ratings" */
  update_movie_ratings?: Maybe<Movie_Ratings_Mutation_Response>;
  /** update single row of the table: "movie_ratings" */
  update_movie_ratings_by_pk?: Maybe<Movie_Ratings>;
  /** update multiples rows of table: "movie_ratings" */
  update_movie_ratings_many?: Maybe<Array<Maybe<Movie_Ratings_Mutation_Response>>>;
  /** update data of the table: "movie_reviews" */
  update_movie_reviews?: Maybe<Movie_Reviews_Mutation_Response>;
  /** update single row of the table: "movie_reviews" */
  update_movie_reviews_by_pk?: Maybe<Movie_Reviews>;
  /** update multiples rows of table: "movie_reviews" */
  update_movie_reviews_many?: Maybe<Array<Maybe<Movie_Reviews_Mutation_Response>>>;
  /** update data of the table: "movie_soundtrack" */
  update_movie_soundtrack?: Maybe<Movie_Soundtrack_Mutation_Response>;
  /** update single row of the table: "movie_soundtrack" */
  update_movie_soundtrack_by_pk?: Maybe<Movie_Soundtrack>;
  /** update multiples rows of table: "movie_soundtrack" */
  update_movie_soundtrack_many?: Maybe<Array<Maybe<Movie_Soundtrack_Mutation_Response>>>;
  /** update data of the table: "movie_watchlist" */
  update_movie_watchlist?: Maybe<Movie_Watchlist_Mutation_Response>;
  /** update single row of the table: "movie_watchlist" */
  update_movie_watchlist_by_pk?: Maybe<Movie_Watchlist>;
  /** update multiples rows of table: "movie_watchlist" */
  update_movie_watchlist_many?: Maybe<Array<Maybe<Movie_Watchlist_Mutation_Response>>>;
  /** update data of the table: "movies" */
  update_movies?: Maybe<Movies_Mutation_Response>;
  /** update single row of the table: "movies" */
  update_movies_by_pk?: Maybe<Movies>;
  /** update multiples rows of table: "movies" */
  update_movies_many?: Maybe<Array<Maybe<Movies_Mutation_Response>>>;
  /** update data of the table: "notifications" */
  update_notifications?: Maybe<Notifications_Mutation_Response>;
  /** update single row of the table: "notifications" */
  update_notifications_by_pk?: Maybe<Notifications>;
  /** update multiples rows of table: "notifications" */
  update_notifications_many?: Maybe<Array<Maybe<Notifications_Mutation_Response>>>;
  /** update data of the table: "people" */
  update_people?: Maybe<People_Mutation_Response>;
  /** update single row of the table: "people" */
  update_people_by_pk?: Maybe<People>;
  /** update multiples rows of table: "people" */
  update_people_many?: Maybe<Array<Maybe<People_Mutation_Response>>>;
  /** update data of the table: "person_changes" */
  update_person_changes?: Maybe<Person_Changes_Mutation_Response>;
  /** update single row of the table: "person_changes" */
  update_person_changes_by_pk?: Maybe<Person_Changes>;
  /** update multiples rows of table: "person_changes" */
  update_person_changes_many?: Maybe<Array<Maybe<Person_Changes_Mutation_Response>>>;
  /** update data of the table: "person_media" */
  update_person_media?: Maybe<Person_Media_Mutation_Response>;
  /** update single row of the table: "person_media" */
  update_person_media_by_pk?: Maybe<Person_Media>;
  /** update multiples rows of table: "person_media" */
  update_person_media_many?: Maybe<Array<Maybe<Person_Media_Mutation_Response>>>;
  /** update data of the table: "report_votes" */
  update_report_votes?: Maybe<Report_Votes_Mutation_Response>;
  /** update single row of the table: "report_votes" */
  update_report_votes_by_pk?: Maybe<Report_Votes>;
  /** update multiples rows of table: "report_votes" */
  update_report_votes_many?: Maybe<Array<Maybe<Report_Votes_Mutation_Response>>>;
  /** update data of the table: "reports" */
  update_reports?: Maybe<Reports_Mutation_Response>;
  /** update single row of the table: "reports" */
  update_reports_by_pk?: Maybe<Reports>;
  /** update multiples rows of table: "reports" */
  update_reports_many?: Maybe<Array<Maybe<Reports_Mutation_Response>>>;
  /** update data of the table: "song_artists" */
  update_song_artists?: Maybe<Song_Artists_Mutation_Response>;
  /** update single row of the table: "song_artists" */
  update_song_artists_by_pk?: Maybe<Song_Artists>;
  /** update multiples rows of table: "song_artists" */
  update_song_artists_many?: Maybe<Array<Maybe<Song_Artists_Mutation_Response>>>;
  /** update data of the table: "song_changes" */
  update_song_changes?: Maybe<Song_Changes_Mutation_Response>;
  /** update single row of the table: "song_changes" */
  update_song_changes_by_pk?: Maybe<Song_Changes>;
  /** update multiples rows of table: "song_changes" */
  update_song_changes_many?: Maybe<Array<Maybe<Song_Changes_Mutation_Response>>>;
  /** update data of the table: "song_favourites" */
  update_song_favourites?: Maybe<Song_Favourites_Mutation_Response>;
  /** update single row of the table: "song_favourites" */
  update_song_favourites_by_pk?: Maybe<Song_Favourites>;
  /** update multiples rows of table: "song_favourites" */
  update_song_favourites_many?: Maybe<Array<Maybe<Song_Favourites_Mutation_Response>>>;
  /** update data of the table: "song_genres" */
  update_song_genres?: Maybe<Song_Genres_Mutation_Response>;
  /** update single row of the table: "song_genres" */
  update_song_genres_by_pk?: Maybe<Song_Genres>;
  /** update multiples rows of table: "song_genres" */
  update_song_genres_many?: Maybe<Array<Maybe<Song_Genres_Mutation_Response>>>;
  /** update data of the table: "song_keywords" */
  update_song_keywords?: Maybe<Song_Keywords_Mutation_Response>;
  /** update single row of the table: "song_keywords" */
  update_song_keywords_by_pk?: Maybe<Song_Keywords>;
  /** update multiples rows of table: "song_keywords" */
  update_song_keywords_many?: Maybe<Array<Maybe<Song_Keywords_Mutation_Response>>>;
  /** update data of the table: "song_listen_later" */
  update_song_listen_later?: Maybe<Song_Listen_Later_Mutation_Response>;
  /** update single row of the table: "song_listen_later" */
  update_song_listen_later_by_pk?: Maybe<Song_Listen_Later>;
  /** update multiples rows of table: "song_listen_later" */
  update_song_listen_later_many?: Maybe<Array<Maybe<Song_Listen_Later_Mutation_Response>>>;
  /** update data of the table: "song_media" */
  update_song_media?: Maybe<Song_Media_Mutation_Response>;
  /** update single row of the table: "song_media" */
  update_song_media_by_pk?: Maybe<Song_Media>;
  /** update multiples rows of table: "song_media" */
  update_song_media_many?: Maybe<Array<Maybe<Song_Media_Mutation_Response>>>;
  /** update data of the table: "song_ratings" */
  update_song_ratings?: Maybe<Song_Ratings_Mutation_Response>;
  /** update single row of the table: "song_ratings" */
  update_song_ratings_by_pk?: Maybe<Song_Ratings>;
  /** update multiples rows of table: "song_ratings" */
  update_song_ratings_many?: Maybe<Array<Maybe<Song_Ratings_Mutation_Response>>>;
  /** update data of the table: "song_reviews" */
  update_song_reviews?: Maybe<Song_Reviews_Mutation_Response>;
  /** update single row of the table: "song_reviews" */
  update_song_reviews_by_pk?: Maybe<Song_Reviews>;
  /** update multiples rows of table: "song_reviews" */
  update_song_reviews_many?: Maybe<Array<Maybe<Song_Reviews_Mutation_Response>>>;
  /** update data of the table: "songs" */
  update_songs?: Maybe<Songs_Mutation_Response>;
  /** update single row of the table: "songs" */
  update_songs_by_pk?: Maybe<Songs>;
  /** update multiples rows of table: "songs" */
  update_songs_many?: Maybe<Array<Maybe<Songs_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update multiples rows of table: "storage.virus" */
  update_virus_many?: Maybe<Array<Maybe<Virus_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypesArgs = {
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteVirusArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteVirusesArgs = {
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Album_ArtistsArgs = {
  where: Album_Artists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Album_Artists_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Album_SongsArgs = {
  where: Album_Songs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Album_Songs_By_PkArgs = {
  album_id: Scalars['uuid']['input'];
  song_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_AlbumsArgs = {
  where: Albums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Albums_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_MigrationsArgs = {
  where: Auth_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Migrations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GenresArgs = {
  where: Genres_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Genres_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_KeywordsArgs = {
  where: Keywords_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Keywords_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_Alternative_TitlesArgs = {
  where: Movie_Alternative_Titles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Alternative_Titles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_CastArgs = {
  where: Movie_Cast_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Cast_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_ChangesArgs = {
  where: Movie_Changes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Changes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_CrewArgs = {
  where: Movie_Crew_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Crew_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_FavouritesArgs = {
  where: Movie_Favourites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Favourites_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_GenresArgs = {
  where: Movie_Genres_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Genres_By_PkArgs = {
  genre_id: Scalars['uuid']['input'];
  movie_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_KeywordsArgs = {
  where: Movie_Keywords_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Keywords_By_PkArgs = {
  keyword_id: Scalars['uuid']['input'];
  movie_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_MediaArgs = {
  where: Movie_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Media_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_Production_CompaniesArgs = {
  where: Movie_Production_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Production_Companies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_Production_CountriesArgs = {
  where: Movie_Production_Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Production_Countries_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_RatingsArgs = {
  where: Movie_Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Ratings_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_ReviewsArgs = {
  where: Movie_Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Reviews_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_SoundtrackArgs = {
  where: Movie_Soundtrack_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Soundtrack_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_WatchlistArgs = {
  where: Movie_Watchlist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Watchlist_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MoviesArgs = {
  where: Movies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_NotificationsArgs = {
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notifications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PeopleArgs = {
  where: People_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_People_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Person_ChangesArgs = {
  where: Person_Changes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_Changes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Person_MediaArgs = {
  where: Person_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_Media_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Report_VotesArgs = {
  where: Report_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Report_Votes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ReportsArgs = {
  where: Reports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reports_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Song_ArtistsArgs = {
  where: Song_Artists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Song_Artists_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Song_ChangesArgs = {
  where: Song_Changes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Song_Changes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Song_FavouritesArgs = {
  where: Song_Favourites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Song_Favourites_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Song_GenresArgs = {
  where: Song_Genres_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Song_Genres_By_PkArgs = {
  genre_id: Scalars['uuid']['input'];
  song_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Song_KeywordsArgs = {
  where: Song_Keywords_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Song_Keywords_By_PkArgs = {
  keyword_id: Scalars['uuid']['input'];
  song_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Song_Listen_LaterArgs = {
  where: Song_Listen_Later_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Song_Listen_Later_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Song_MediaArgs = {
  where: Song_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Song_Media_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Song_RatingsArgs = {
  where: Song_Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Song_Ratings_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Song_ReviewsArgs = {
  where: Song_Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Song_Reviews_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SongsArgs = {
  where: Songs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Songs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypeArgs = {
  object: AuthRefreshTokenTypes_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypesArgs = {
  objects: Array<AuthRefreshTokenTypes_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusArgs = {
  object: Virus_Insert_Input;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusesArgs = {
  objects: Array<Virus_Insert_Input>;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Album_ArtistsArgs = {
  objects: Array<Album_Artists_Insert_Input>;
  on_conflict?: InputMaybe<Album_Artists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Album_Artists_OneArgs = {
  object: Album_Artists_Insert_Input;
  on_conflict?: InputMaybe<Album_Artists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Album_SongsArgs = {
  objects: Array<Album_Songs_Insert_Input>;
  on_conflict?: InputMaybe<Album_Songs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Album_Songs_OneArgs = {
  object: Album_Songs_Insert_Input;
  on_conflict?: InputMaybe<Album_Songs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AlbumsArgs = {
  objects: Array<Albums_Insert_Input>;
  on_conflict?: InputMaybe<Albums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Albums_OneArgs = {
  object: Albums_Insert_Input;
  on_conflict?: InputMaybe<Albums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_MigrationsArgs = {
  objects: Array<Auth_Migrations_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Migrations_OneArgs = {
  object: Auth_Migrations_Insert_Input;
  on_conflict?: InputMaybe<Auth_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GenresArgs = {
  objects: Array<Genres_Insert_Input>;
  on_conflict?: InputMaybe<Genres_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Genres_OneArgs = {
  object: Genres_Insert_Input;
  on_conflict?: InputMaybe<Genres_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_KeywordsArgs = {
  objects: Array<Keywords_Insert_Input>;
  on_conflict?: InputMaybe<Keywords_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Keywords_OneArgs = {
  object: Keywords_Insert_Input;
  on_conflict?: InputMaybe<Keywords_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Alternative_TitlesArgs = {
  objects: Array<Movie_Alternative_Titles_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Alternative_Titles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Alternative_Titles_OneArgs = {
  object: Movie_Alternative_Titles_Insert_Input;
  on_conflict?: InputMaybe<Movie_Alternative_Titles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_CastArgs = {
  objects: Array<Movie_Cast_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Cast_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Cast_OneArgs = {
  object: Movie_Cast_Insert_Input;
  on_conflict?: InputMaybe<Movie_Cast_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_ChangesArgs = {
  objects: Array<Movie_Changes_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Changes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Changes_OneArgs = {
  object: Movie_Changes_Insert_Input;
  on_conflict?: InputMaybe<Movie_Changes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_CrewArgs = {
  objects: Array<Movie_Crew_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Crew_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Crew_OneArgs = {
  object: Movie_Crew_Insert_Input;
  on_conflict?: InputMaybe<Movie_Crew_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_FavouritesArgs = {
  objects: Array<Movie_Favourites_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Favourites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Favourites_OneArgs = {
  object: Movie_Favourites_Insert_Input;
  on_conflict?: InputMaybe<Movie_Favourites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_GenresArgs = {
  objects: Array<Movie_Genres_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Genres_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Genres_OneArgs = {
  object: Movie_Genres_Insert_Input;
  on_conflict?: InputMaybe<Movie_Genres_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_KeywordsArgs = {
  objects: Array<Movie_Keywords_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Keywords_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Keywords_OneArgs = {
  object: Movie_Keywords_Insert_Input;
  on_conflict?: InputMaybe<Movie_Keywords_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_MediaArgs = {
  objects: Array<Movie_Media_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Media_OneArgs = {
  object: Movie_Media_Insert_Input;
  on_conflict?: InputMaybe<Movie_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Production_CompaniesArgs = {
  objects: Array<Movie_Production_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Production_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Production_Companies_OneArgs = {
  object: Movie_Production_Companies_Insert_Input;
  on_conflict?: InputMaybe<Movie_Production_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Production_CountriesArgs = {
  objects: Array<Movie_Production_Countries_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Production_Countries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Production_Countries_OneArgs = {
  object: Movie_Production_Countries_Insert_Input;
  on_conflict?: InputMaybe<Movie_Production_Countries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_RatingsArgs = {
  objects: Array<Movie_Ratings_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Ratings_OneArgs = {
  object: Movie_Ratings_Insert_Input;
  on_conflict?: InputMaybe<Movie_Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_ReviewsArgs = {
  objects: Array<Movie_Reviews_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Reviews_OneArgs = {
  object: Movie_Reviews_Insert_Input;
  on_conflict?: InputMaybe<Movie_Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_SoundtrackArgs = {
  objects: Array<Movie_Soundtrack_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Soundtrack_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Soundtrack_OneArgs = {
  object: Movie_Soundtrack_Insert_Input;
  on_conflict?: InputMaybe<Movie_Soundtrack_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_WatchlistArgs = {
  objects: Array<Movie_Watchlist_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Watchlist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Watchlist_OneArgs = {
  object: Movie_Watchlist_Insert_Input;
  on_conflict?: InputMaybe<Movie_Watchlist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MoviesArgs = {
  objects: Array<Movies_Insert_Input>;
  on_conflict?: InputMaybe<Movies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movies_OneArgs = {
  object: Movies_Insert_Input;
  on_conflict?: InputMaybe<Movies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationsArgs = {
  objects: Array<Notifications_Insert_Input>;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notifications_OneArgs = {
  object: Notifications_Insert_Input;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PeopleArgs = {
  objects: Array<People_Insert_Input>;
  on_conflict?: InputMaybe<People_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_People_OneArgs = {
  object: People_Insert_Input;
  on_conflict?: InputMaybe<People_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_ChangesArgs = {
  objects: Array<Person_Changes_Insert_Input>;
  on_conflict?: InputMaybe<Person_Changes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Changes_OneArgs = {
  object: Person_Changes_Insert_Input;
  on_conflict?: InputMaybe<Person_Changes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_MediaArgs = {
  objects: Array<Person_Media_Insert_Input>;
  on_conflict?: InputMaybe<Person_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Media_OneArgs = {
  object: Person_Media_Insert_Input;
  on_conflict?: InputMaybe<Person_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Report_VotesArgs = {
  objects: Array<Report_Votes_Insert_Input>;
  on_conflict?: InputMaybe<Report_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Report_Votes_OneArgs = {
  object: Report_Votes_Insert_Input;
  on_conflict?: InputMaybe<Report_Votes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReportsArgs = {
  objects: Array<Reports_Insert_Input>;
  on_conflict?: InputMaybe<Reports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reports_OneArgs = {
  object: Reports_Insert_Input;
  on_conflict?: InputMaybe<Reports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_ArtistsArgs = {
  objects: Array<Song_Artists_Insert_Input>;
  on_conflict?: InputMaybe<Song_Artists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_Artists_OneArgs = {
  object: Song_Artists_Insert_Input;
  on_conflict?: InputMaybe<Song_Artists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_ChangesArgs = {
  objects: Array<Song_Changes_Insert_Input>;
  on_conflict?: InputMaybe<Song_Changes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_Changes_OneArgs = {
  object: Song_Changes_Insert_Input;
  on_conflict?: InputMaybe<Song_Changes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_FavouritesArgs = {
  objects: Array<Song_Favourites_Insert_Input>;
  on_conflict?: InputMaybe<Song_Favourites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_Favourites_OneArgs = {
  object: Song_Favourites_Insert_Input;
  on_conflict?: InputMaybe<Song_Favourites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_GenresArgs = {
  objects: Array<Song_Genres_Insert_Input>;
  on_conflict?: InputMaybe<Song_Genres_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_Genres_OneArgs = {
  object: Song_Genres_Insert_Input;
  on_conflict?: InputMaybe<Song_Genres_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_KeywordsArgs = {
  objects: Array<Song_Keywords_Insert_Input>;
  on_conflict?: InputMaybe<Song_Keywords_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_Keywords_OneArgs = {
  object: Song_Keywords_Insert_Input;
  on_conflict?: InputMaybe<Song_Keywords_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_Listen_LaterArgs = {
  objects: Array<Song_Listen_Later_Insert_Input>;
  on_conflict?: InputMaybe<Song_Listen_Later_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_Listen_Later_OneArgs = {
  object: Song_Listen_Later_Insert_Input;
  on_conflict?: InputMaybe<Song_Listen_Later_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_MediaArgs = {
  objects: Array<Song_Media_Insert_Input>;
  on_conflict?: InputMaybe<Song_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_Media_OneArgs = {
  object: Song_Media_Insert_Input;
  on_conflict?: InputMaybe<Song_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_RatingsArgs = {
  objects: Array<Song_Ratings_Insert_Input>;
  on_conflict?: InputMaybe<Song_Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_Ratings_OneArgs = {
  object: Song_Ratings_Insert_Input;
  on_conflict?: InputMaybe<Song_Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_ReviewsArgs = {
  objects: Array<Song_Reviews_Insert_Input>;
  on_conflict?: InputMaybe<Song_Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Song_Reviews_OneArgs = {
  object: Song_Reviews_Insert_Input;
  on_conflict?: InputMaybe<Song_Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SongsArgs = {
  objects: Array<Songs_Insert_Input>;
  on_conflict?: InputMaybe<Songs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Songs_OneArgs = {
  object: Songs_Insert_Input;
  on_conflict?: InputMaybe<Songs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypeArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  pk_columns: AuthRefreshTokenTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypesArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateVirusArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  pk_columns: Virus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateVirusesArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Album_ArtistsArgs = {
  _set?: InputMaybe<Album_Artists_Set_Input>;
  where: Album_Artists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Album_Artists_By_PkArgs = {
  _set?: InputMaybe<Album_Artists_Set_Input>;
  pk_columns: Album_Artists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Album_Artists_ManyArgs = {
  updates: Array<Album_Artists_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Album_SongsArgs = {
  _inc?: InputMaybe<Album_Songs_Inc_Input>;
  _set?: InputMaybe<Album_Songs_Set_Input>;
  where: Album_Songs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Album_Songs_By_PkArgs = {
  _inc?: InputMaybe<Album_Songs_Inc_Input>;
  _set?: InputMaybe<Album_Songs_Set_Input>;
  pk_columns: Album_Songs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Album_Songs_ManyArgs = {
  updates: Array<Album_Songs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AlbumsArgs = {
  _set?: InputMaybe<Albums_Set_Input>;
  where: Albums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Albums_By_PkArgs = {
  _set?: InputMaybe<Albums_Set_Input>;
  pk_columns: Albums_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Albums_ManyArgs = {
  updates: Array<Albums_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokenTypes_ManyArgs = {
  updates: Array<AuthRefreshTokenTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_MigrationsArgs = {
  _inc?: InputMaybe<Auth_Migrations_Inc_Input>;
  _set?: InputMaybe<Auth_Migrations_Set_Input>;
  where: Auth_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Migrations_By_PkArgs = {
  _inc?: InputMaybe<Auth_Migrations_Inc_Input>;
  _set?: InputMaybe<Auth_Migrations_Set_Input>;
  pk_columns: Auth_Migrations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Migrations_ManyArgs = {
  updates: Array<Auth_Migrations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GenresArgs = {
  _set?: InputMaybe<Genres_Set_Input>;
  where: Genres_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Genres_By_PkArgs = {
  _set?: InputMaybe<Genres_Set_Input>;
  pk_columns: Genres_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Genres_ManyArgs = {
  updates: Array<Genres_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_KeywordsArgs = {
  _set?: InputMaybe<Keywords_Set_Input>;
  where: Keywords_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Keywords_By_PkArgs = {
  _set?: InputMaybe<Keywords_Set_Input>;
  pk_columns: Keywords_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Keywords_ManyArgs = {
  updates: Array<Keywords_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Alternative_TitlesArgs = {
  _set?: InputMaybe<Movie_Alternative_Titles_Set_Input>;
  where: Movie_Alternative_Titles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Alternative_Titles_By_PkArgs = {
  _set?: InputMaybe<Movie_Alternative_Titles_Set_Input>;
  pk_columns: Movie_Alternative_Titles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Alternative_Titles_ManyArgs = {
  updates: Array<Movie_Alternative_Titles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_CastArgs = {
  _inc?: InputMaybe<Movie_Cast_Inc_Input>;
  _set?: InputMaybe<Movie_Cast_Set_Input>;
  where: Movie_Cast_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Cast_By_PkArgs = {
  _inc?: InputMaybe<Movie_Cast_Inc_Input>;
  _set?: InputMaybe<Movie_Cast_Set_Input>;
  pk_columns: Movie_Cast_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Cast_ManyArgs = {
  updates: Array<Movie_Cast_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_ChangesArgs = {
  _set?: InputMaybe<Movie_Changes_Set_Input>;
  where: Movie_Changes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Changes_By_PkArgs = {
  _set?: InputMaybe<Movie_Changes_Set_Input>;
  pk_columns: Movie_Changes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Changes_ManyArgs = {
  updates: Array<Movie_Changes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_CrewArgs = {
  _set?: InputMaybe<Movie_Crew_Set_Input>;
  where: Movie_Crew_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Crew_By_PkArgs = {
  _set?: InputMaybe<Movie_Crew_Set_Input>;
  pk_columns: Movie_Crew_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Crew_ManyArgs = {
  updates: Array<Movie_Crew_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_FavouritesArgs = {
  _set?: InputMaybe<Movie_Favourites_Set_Input>;
  where: Movie_Favourites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Favourites_By_PkArgs = {
  _set?: InputMaybe<Movie_Favourites_Set_Input>;
  pk_columns: Movie_Favourites_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Favourites_ManyArgs = {
  updates: Array<Movie_Favourites_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_GenresArgs = {
  _set?: InputMaybe<Movie_Genres_Set_Input>;
  where: Movie_Genres_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Genres_By_PkArgs = {
  _set?: InputMaybe<Movie_Genres_Set_Input>;
  pk_columns: Movie_Genres_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Genres_ManyArgs = {
  updates: Array<Movie_Genres_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_KeywordsArgs = {
  _set?: InputMaybe<Movie_Keywords_Set_Input>;
  where: Movie_Keywords_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Keywords_By_PkArgs = {
  _set?: InputMaybe<Movie_Keywords_Set_Input>;
  pk_columns: Movie_Keywords_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Keywords_ManyArgs = {
  updates: Array<Movie_Keywords_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_MediaArgs = {
  _set?: InputMaybe<Movie_Media_Set_Input>;
  where: Movie_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Media_By_PkArgs = {
  _set?: InputMaybe<Movie_Media_Set_Input>;
  pk_columns: Movie_Media_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Media_ManyArgs = {
  updates: Array<Movie_Media_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Production_CompaniesArgs = {
  _set?: InputMaybe<Movie_Production_Companies_Set_Input>;
  where: Movie_Production_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Production_Companies_By_PkArgs = {
  _set?: InputMaybe<Movie_Production_Companies_Set_Input>;
  pk_columns: Movie_Production_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Production_Companies_ManyArgs = {
  updates: Array<Movie_Production_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Production_CountriesArgs = {
  _set?: InputMaybe<Movie_Production_Countries_Set_Input>;
  where: Movie_Production_Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Production_Countries_By_PkArgs = {
  _set?: InputMaybe<Movie_Production_Countries_Set_Input>;
  pk_columns: Movie_Production_Countries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Production_Countries_ManyArgs = {
  updates: Array<Movie_Production_Countries_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_RatingsArgs = {
  _inc?: InputMaybe<Movie_Ratings_Inc_Input>;
  _set?: InputMaybe<Movie_Ratings_Set_Input>;
  where: Movie_Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Ratings_By_PkArgs = {
  _inc?: InputMaybe<Movie_Ratings_Inc_Input>;
  _set?: InputMaybe<Movie_Ratings_Set_Input>;
  pk_columns: Movie_Ratings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Ratings_ManyArgs = {
  updates: Array<Movie_Ratings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_ReviewsArgs = {
  _inc?: InputMaybe<Movie_Reviews_Inc_Input>;
  _set?: InputMaybe<Movie_Reviews_Set_Input>;
  where: Movie_Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Reviews_By_PkArgs = {
  _inc?: InputMaybe<Movie_Reviews_Inc_Input>;
  _set?: InputMaybe<Movie_Reviews_Set_Input>;
  pk_columns: Movie_Reviews_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Reviews_ManyArgs = {
  updates: Array<Movie_Reviews_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_SoundtrackArgs = {
  _set?: InputMaybe<Movie_Soundtrack_Set_Input>;
  where: Movie_Soundtrack_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Soundtrack_By_PkArgs = {
  _set?: InputMaybe<Movie_Soundtrack_Set_Input>;
  pk_columns: Movie_Soundtrack_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Soundtrack_ManyArgs = {
  updates: Array<Movie_Soundtrack_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_WatchlistArgs = {
  _set?: InputMaybe<Movie_Watchlist_Set_Input>;
  where: Movie_Watchlist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Watchlist_By_PkArgs = {
  _set?: InputMaybe<Movie_Watchlist_Set_Input>;
  pk_columns: Movie_Watchlist_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Watchlist_ManyArgs = {
  updates: Array<Movie_Watchlist_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MoviesArgs = {
  _inc?: InputMaybe<Movies_Inc_Input>;
  _set?: InputMaybe<Movies_Set_Input>;
  where: Movies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movies_By_PkArgs = {
  _inc?: InputMaybe<Movies_Inc_Input>;
  _set?: InputMaybe<Movies_Set_Input>;
  pk_columns: Movies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movies_ManyArgs = {
  updates: Array<Movies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationsArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_By_PkArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  pk_columns: Notifications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_ManyArgs = {
  updates: Array<Notifications_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PeopleArgs = {
  _set?: InputMaybe<People_Set_Input>;
  where: People_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_People_By_PkArgs = {
  _set?: InputMaybe<People_Set_Input>;
  pk_columns: People_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_People_ManyArgs = {
  updates: Array<People_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Person_ChangesArgs = {
  _set?: InputMaybe<Person_Changes_Set_Input>;
  where: Person_Changes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Changes_By_PkArgs = {
  _set?: InputMaybe<Person_Changes_Set_Input>;
  pk_columns: Person_Changes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Changes_ManyArgs = {
  updates: Array<Person_Changes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Person_MediaArgs = {
  _set?: InputMaybe<Person_Media_Set_Input>;
  where: Person_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Media_By_PkArgs = {
  _set?: InputMaybe<Person_Media_Set_Input>;
  pk_columns: Person_Media_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Media_ManyArgs = {
  updates: Array<Person_Media_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Report_VotesArgs = {
  _inc?: InputMaybe<Report_Votes_Inc_Input>;
  _set?: InputMaybe<Report_Votes_Set_Input>;
  where: Report_Votes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Report_Votes_By_PkArgs = {
  _inc?: InputMaybe<Report_Votes_Inc_Input>;
  _set?: InputMaybe<Report_Votes_Set_Input>;
  pk_columns: Report_Votes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Report_Votes_ManyArgs = {
  updates: Array<Report_Votes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ReportsArgs = {
  _set?: InputMaybe<Reports_Set_Input>;
  where: Reports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reports_By_PkArgs = {
  _set?: InputMaybe<Reports_Set_Input>;
  pk_columns: Reports_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reports_ManyArgs = {
  updates: Array<Reports_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Song_ArtistsArgs = {
  _set?: InputMaybe<Song_Artists_Set_Input>;
  where: Song_Artists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Artists_By_PkArgs = {
  _set?: InputMaybe<Song_Artists_Set_Input>;
  pk_columns: Song_Artists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Artists_ManyArgs = {
  updates: Array<Song_Artists_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Song_ChangesArgs = {
  _set?: InputMaybe<Song_Changes_Set_Input>;
  where: Song_Changes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Changes_By_PkArgs = {
  _set?: InputMaybe<Song_Changes_Set_Input>;
  pk_columns: Song_Changes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Changes_ManyArgs = {
  updates: Array<Song_Changes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Song_FavouritesArgs = {
  _set?: InputMaybe<Song_Favourites_Set_Input>;
  where: Song_Favourites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Favourites_By_PkArgs = {
  _set?: InputMaybe<Song_Favourites_Set_Input>;
  pk_columns: Song_Favourites_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Favourites_ManyArgs = {
  updates: Array<Song_Favourites_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Song_GenresArgs = {
  _set?: InputMaybe<Song_Genres_Set_Input>;
  where: Song_Genres_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Genres_By_PkArgs = {
  _set?: InputMaybe<Song_Genres_Set_Input>;
  pk_columns: Song_Genres_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Genres_ManyArgs = {
  updates: Array<Song_Genres_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Song_KeywordsArgs = {
  _set?: InputMaybe<Song_Keywords_Set_Input>;
  where: Song_Keywords_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Keywords_By_PkArgs = {
  _set?: InputMaybe<Song_Keywords_Set_Input>;
  pk_columns: Song_Keywords_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Keywords_ManyArgs = {
  updates: Array<Song_Keywords_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Listen_LaterArgs = {
  _set?: InputMaybe<Song_Listen_Later_Set_Input>;
  where: Song_Listen_Later_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Listen_Later_By_PkArgs = {
  _set?: InputMaybe<Song_Listen_Later_Set_Input>;
  pk_columns: Song_Listen_Later_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Listen_Later_ManyArgs = {
  updates: Array<Song_Listen_Later_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Song_MediaArgs = {
  _set?: InputMaybe<Song_Media_Set_Input>;
  where: Song_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Media_By_PkArgs = {
  _set?: InputMaybe<Song_Media_Set_Input>;
  pk_columns: Song_Media_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Media_ManyArgs = {
  updates: Array<Song_Media_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Song_RatingsArgs = {
  _inc?: InputMaybe<Song_Ratings_Inc_Input>;
  _set?: InputMaybe<Song_Ratings_Set_Input>;
  where: Song_Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Ratings_By_PkArgs = {
  _inc?: InputMaybe<Song_Ratings_Inc_Input>;
  _set?: InputMaybe<Song_Ratings_Set_Input>;
  pk_columns: Song_Ratings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Ratings_ManyArgs = {
  updates: Array<Song_Ratings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Song_ReviewsArgs = {
  _set?: InputMaybe<Song_Reviews_Set_Input>;
  where: Song_Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Reviews_By_PkArgs = {
  _set?: InputMaybe<Song_Reviews_Set_Input>;
  pk_columns: Song_Reviews_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Song_Reviews_ManyArgs = {
  updates: Array<Song_Reviews_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SongsArgs = {
  _set?: InputMaybe<Songs_Set_Input>;
  where: Songs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Songs_By_PkArgs = {
  _set?: InputMaybe<Songs_Set_Input>;
  pk_columns: Songs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Songs_ManyArgs = {
  updates: Array<Songs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Virus_ManyArgs = {
  updates: Array<Virus_Updates>;
};

/** columns and relationships of "notifications" */
export type Notifications = {
  __typename?: 'notifications';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  is_read?: Maybe<Scalars['Boolean']['output']>;
  message: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "notifications" */
export type Notifications_Aggregate = {
  __typename?: 'notifications_aggregate';
  aggregate?: Maybe<Notifications_Aggregate_Fields>;
  nodes: Array<Notifications>;
};

export type Notifications_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Notifications_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Notifications_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Notifications_Aggregate_Bool_Exp_Count>;
};

export type Notifications_Aggregate_Bool_Exp_Bool_And = {
  arguments: Notifications_Select_Column_Notifications_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notifications_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Notifications_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Notifications_Select_Column_Notifications_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notifications_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Notifications_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notifications_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "notifications" */
export type Notifications_Aggregate_Fields = {
  __typename?: 'notifications_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Notifications_Max_Fields>;
  min?: Maybe<Notifications_Min_Fields>;
};


/** aggregate fields of "notifications" */
export type Notifications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "notifications" */
export type Notifications_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notifications_Max_Order_By>;
  min?: InputMaybe<Notifications_Min_Order_By>;
};

/** input type for inserting array relation for remote table "notifications" */
export type Notifications_Arr_Rel_Insert_Input = {
  data: Array<Notifications_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: InputMaybe<Array<Notifications_Bool_Exp>>;
  _not?: InputMaybe<Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<Notifications_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_read?: InputMaybe<Boolean_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "notifications" */
export enum Notifications_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotificationsPkey = 'notifications_pkey'
}

/** input type for inserting data into table "notifications" */
export type Notifications_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Notifications_Max_Fields = {
  __typename?: 'notifications_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "notifications" */
export type Notifications_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Notifications_Min_Fields = {
  __typename?: 'notifications_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "notifications" */
export type Notifications_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "notifications" */
export type Notifications_Mutation_Response = {
  __typename?: 'notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** on_conflict condition type for table "notifications" */
export type Notifications_On_Conflict = {
  constraint: Notifications_Constraint;
  update_columns?: Array<Notifications_Update_Column>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

/** Ordering options when selecting data from "notifications". */
export type Notifications_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_read?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notifications */
export type Notifications_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "notifications" */
export enum Notifications_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsRead = 'is_read',
  /** column name */
  Message = 'message',
  /** column name */
  UserId = 'user_id'
}

/** select "notifications_aggregate_bool_exp_bool_and_arguments_columns" columns of table "notifications" */
export enum Notifications_Select_Column_Notifications_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsRead = 'is_read'
}

/** select "notifications_aggregate_bool_exp_bool_or_arguments_columns" columns of table "notifications" */
export enum Notifications_Select_Column_Notifications_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsRead = 'is_read'
}

/** input type for updating data in table "notifications" */
export type Notifications_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "notifications" */
export type Notifications_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notifications_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notifications_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "notifications" */
export enum Notifications_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsRead = 'is_read',
  /** column name */
  Message = 'message',
  /** column name */
  UserId = 'user_id'
}

export type Notifications_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notifications_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notifications_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "people" */
export type People = {
  __typename?: 'people';
  /** An array relationship */
  album_artists: Array<Album_Artists>;
  /** An aggregate relationship */
  album_artists_aggregate: Album_Artists_Aggregate;
  bio?: Maybe<Scalars['String']['output']>;
  birth_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  death_date?: Maybe<Scalars['date']['output']>;
  headshot?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  movie_casts: Array<Movie_Cast>;
  /** An aggregate relationship */
  movie_casts_aggregate: Movie_Cast_Aggregate;
  /** An array relationship */
  movie_crews: Array<Movie_Crew>;
  /** An aggregate relationship */
  movie_crews_aggregate: Movie_Crew_Aggregate;
  name: Scalars['String']['output'];
  /** An array relationship */
  person_changes: Array<Person_Changes>;
  /** An aggregate relationship */
  person_changes_aggregate: Person_Changes_Aggregate;
  /** An array relationship */
  person_media: Array<Person_Media>;
  /** An aggregate relationship */
  person_media_aggregate: Person_Media_Aggregate;
  /** An array relationship */
  song_artists: Array<Song_Artists>;
  /** An aggregate relationship */
  song_artists_aggregate: Song_Artists_Aggregate;
};


/** columns and relationships of "people" */
export type PeopleAlbum_ArtistsArgs = {
  distinct_on?: InputMaybe<Array<Album_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Artists_Order_By>>;
  where?: InputMaybe<Album_Artists_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeopleAlbum_Artists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Artists_Order_By>>;
  where?: InputMaybe<Album_Artists_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeopleMovie_CastsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeopleMovie_Casts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeopleMovie_CrewsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Crew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Crew_Order_By>>;
  where?: InputMaybe<Movie_Crew_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeopleMovie_Crews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Crew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Crew_Order_By>>;
  where?: InputMaybe<Movie_Crew_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeoplePerson_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Person_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Changes_Order_By>>;
  where?: InputMaybe<Person_Changes_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeoplePerson_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Changes_Order_By>>;
  where?: InputMaybe<Person_Changes_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeoplePerson_MediaArgs = {
  distinct_on?: InputMaybe<Array<Person_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Media_Order_By>>;
  where?: InputMaybe<Person_Media_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeoplePerson_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Media_Order_By>>;
  where?: InputMaybe<Person_Media_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeopleSong_ArtistsArgs = {
  distinct_on?: InputMaybe<Array<Song_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Artists_Order_By>>;
  where?: InputMaybe<Song_Artists_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeopleSong_Artists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Artists_Order_By>>;
  where?: InputMaybe<Song_Artists_Bool_Exp>;
};

/** aggregated selection of "people" */
export type People_Aggregate = {
  __typename?: 'people_aggregate';
  aggregate?: Maybe<People_Aggregate_Fields>;
  nodes: Array<People>;
};

/** aggregate fields of "people" */
export type People_Aggregate_Fields = {
  __typename?: 'people_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<People_Max_Fields>;
  min?: Maybe<People_Min_Fields>;
};


/** aggregate fields of "people" */
export type People_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<People_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "people". All fields are combined with a logical 'AND'. */
export type People_Bool_Exp = {
  _and?: InputMaybe<Array<People_Bool_Exp>>;
  _not?: InputMaybe<People_Bool_Exp>;
  _or?: InputMaybe<Array<People_Bool_Exp>>;
  album_artists?: InputMaybe<Album_Artists_Bool_Exp>;
  album_artists_aggregate?: InputMaybe<Album_Artists_Aggregate_Bool_Exp>;
  bio?: InputMaybe<String_Comparison_Exp>;
  birth_date?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  death_date?: InputMaybe<Date_Comparison_Exp>;
  headshot?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie_casts?: InputMaybe<Movie_Cast_Bool_Exp>;
  movie_casts_aggregate?: InputMaybe<Movie_Cast_Aggregate_Bool_Exp>;
  movie_crews?: InputMaybe<Movie_Crew_Bool_Exp>;
  movie_crews_aggregate?: InputMaybe<Movie_Crew_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  person_changes?: InputMaybe<Person_Changes_Bool_Exp>;
  person_changes_aggregate?: InputMaybe<Person_Changes_Aggregate_Bool_Exp>;
  person_media?: InputMaybe<Person_Media_Bool_Exp>;
  person_media_aggregate?: InputMaybe<Person_Media_Aggregate_Bool_Exp>;
  song_artists?: InputMaybe<Song_Artists_Bool_Exp>;
  song_artists_aggregate?: InputMaybe<Song_Artists_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "people" */
export enum People_Constraint {
  /** unique or primary key constraint on columns "id" */
  PeoplePkey = 'people_pkey'
}

/** input type for inserting data into table "people" */
export type People_Insert_Input = {
  album_artists?: InputMaybe<Album_Artists_Arr_Rel_Insert_Input>;
  bio?: InputMaybe<Scalars['String']['input']>;
  birth_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  death_date?: InputMaybe<Scalars['date']['input']>;
  headshot?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_casts?: InputMaybe<Movie_Cast_Arr_Rel_Insert_Input>;
  movie_crews?: InputMaybe<Movie_Crew_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  person_changes?: InputMaybe<Person_Changes_Arr_Rel_Insert_Input>;
  person_media?: InputMaybe<Person_Media_Arr_Rel_Insert_Input>;
  song_artists?: InputMaybe<Song_Artists_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type People_Max_Fields = {
  __typename?: 'people_max_fields';
  bio?: Maybe<Scalars['String']['output']>;
  birth_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  death_date?: Maybe<Scalars['date']['output']>;
  headshot?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type People_Min_Fields = {
  __typename?: 'people_min_fields';
  bio?: Maybe<Scalars['String']['output']>;
  birth_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  death_date?: Maybe<Scalars['date']['output']>;
  headshot?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "people" */
export type People_Mutation_Response = {
  __typename?: 'people_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<People>;
};

/** input type for inserting object relation for remote table "people" */
export type People_Obj_Rel_Insert_Input = {
  data: People_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<People_On_Conflict>;
};

/** on_conflict condition type for table "people" */
export type People_On_Conflict = {
  constraint: People_Constraint;
  update_columns?: Array<People_Update_Column>;
  where?: InputMaybe<People_Bool_Exp>;
};

/** Ordering options when selecting data from "people". */
export type People_Order_By = {
  album_artists_aggregate?: InputMaybe<Album_Artists_Aggregate_Order_By>;
  bio?: InputMaybe<Order_By>;
  birth_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  death_date?: InputMaybe<Order_By>;
  headshot?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_casts_aggregate?: InputMaybe<Movie_Cast_Aggregate_Order_By>;
  movie_crews_aggregate?: InputMaybe<Movie_Crew_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  person_changes_aggregate?: InputMaybe<Person_Changes_Aggregate_Order_By>;
  person_media_aggregate?: InputMaybe<Person_Media_Aggregate_Order_By>;
  song_artists_aggregate?: InputMaybe<Song_Artists_Aggregate_Order_By>;
};

/** primary key columns input for table: people */
export type People_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "people" */
export enum People_Select_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  BirthDate = 'birth_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeathDate = 'death_date',
  /** column name */
  Headshot = 'headshot',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "people" */
export type People_Set_Input = {
  bio?: InputMaybe<Scalars['String']['input']>;
  birth_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  death_date?: InputMaybe<Scalars['date']['input']>;
  headshot?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "people" */
export type People_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: People_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type People_Stream_Cursor_Value_Input = {
  bio?: InputMaybe<Scalars['String']['input']>;
  birth_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  death_date?: InputMaybe<Scalars['date']['input']>;
  headshot?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "people" */
export enum People_Update_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  BirthDate = 'birth_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeathDate = 'death_date',
  /** column name */
  Headshot = 'headshot',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type People_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<People_Set_Input>;
  /** filter the rows which have to be updated */
  where: People_Bool_Exp;
};

/** columns and relationships of "person_changes" */
export type Person_Changes = {
  __typename?: 'person_changes';
  change_description?: Maybe<Scalars['String']['output']>;
  changed_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  person: People;
  person_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "person_changes" */
export type Person_Changes_Aggregate = {
  __typename?: 'person_changes_aggregate';
  aggregate?: Maybe<Person_Changes_Aggregate_Fields>;
  nodes: Array<Person_Changes>;
};

export type Person_Changes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Person_Changes_Aggregate_Bool_Exp_Count>;
};

export type Person_Changes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Person_Changes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Person_Changes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "person_changes" */
export type Person_Changes_Aggregate_Fields = {
  __typename?: 'person_changes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Person_Changes_Max_Fields>;
  min?: Maybe<Person_Changes_Min_Fields>;
};


/** aggregate fields of "person_changes" */
export type Person_Changes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Changes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "person_changes" */
export type Person_Changes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Person_Changes_Max_Order_By>;
  min?: InputMaybe<Person_Changes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "person_changes" */
export type Person_Changes_Arr_Rel_Insert_Input = {
  data: Array<Person_Changes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Person_Changes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "person_changes". All fields are combined with a logical 'AND'. */
export type Person_Changes_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Changes_Bool_Exp>>;
  _not?: InputMaybe<Person_Changes_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Changes_Bool_Exp>>;
  change_description?: InputMaybe<String_Comparison_Exp>;
  changed_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<People_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "person_changes" */
export enum Person_Changes_Constraint {
  /** unique or primary key constraint on columns "id" */
  PersonChangesPkey = 'person_changes_pkey'
}

/** input type for inserting data into table "person_changes" */
export type Person_Changes_Insert_Input = {
  change_description?: InputMaybe<Scalars['String']['input']>;
  changed_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person?: InputMaybe<People_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Person_Changes_Max_Fields = {
  __typename?: 'person_changes_max_fields';
  change_description?: Maybe<Scalars['String']['output']>;
  changed_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "person_changes" */
export type Person_Changes_Max_Order_By = {
  change_description?: InputMaybe<Order_By>;
  changed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Person_Changes_Min_Fields = {
  __typename?: 'person_changes_min_fields';
  change_description?: Maybe<Scalars['String']['output']>;
  changed_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "person_changes" */
export type Person_Changes_Min_Order_By = {
  change_description?: InputMaybe<Order_By>;
  changed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "person_changes" */
export type Person_Changes_Mutation_Response = {
  __typename?: 'person_changes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Person_Changes>;
};

/** on_conflict condition type for table "person_changes" */
export type Person_Changes_On_Conflict = {
  constraint: Person_Changes_Constraint;
  update_columns?: Array<Person_Changes_Update_Column>;
  where?: InputMaybe<Person_Changes_Bool_Exp>;
};

/** Ordering options when selecting data from "person_changes". */
export type Person_Changes_Order_By = {
  change_description?: InputMaybe<Order_By>;
  changed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<People_Order_By>;
  person_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person_changes */
export type Person_Changes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "person_changes" */
export enum Person_Changes_Select_Column {
  /** column name */
  ChangeDescription = 'change_description',
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "person_changes" */
export type Person_Changes_Set_Input = {
  change_description?: InputMaybe<Scalars['String']['input']>;
  changed_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "person_changes" */
export type Person_Changes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Person_Changes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Changes_Stream_Cursor_Value_Input = {
  change_description?: InputMaybe<Scalars['String']['input']>;
  changed_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "person_changes" */
export enum Person_Changes_Update_Column {
  /** column name */
  ChangeDescription = 'change_description',
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UserId = 'user_id'
}

export type Person_Changes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Person_Changes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Person_Changes_Bool_Exp;
};

/** columns and relationships of "person_media" */
export type Person_Media = {
  __typename?: 'person_media';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  media_type?: Maybe<Scalars['String']['output']>;
  media_url: Scalars['String']['output'];
  /** An object relationship */
  person: People;
  person_id: Scalars['uuid']['output'];
};

/** aggregated selection of "person_media" */
export type Person_Media_Aggregate = {
  __typename?: 'person_media_aggregate';
  aggregate?: Maybe<Person_Media_Aggregate_Fields>;
  nodes: Array<Person_Media>;
};

export type Person_Media_Aggregate_Bool_Exp = {
  count?: InputMaybe<Person_Media_Aggregate_Bool_Exp_Count>;
};

export type Person_Media_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Person_Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Person_Media_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "person_media" */
export type Person_Media_Aggregate_Fields = {
  __typename?: 'person_media_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Person_Media_Max_Fields>;
  min?: Maybe<Person_Media_Min_Fields>;
};


/** aggregate fields of "person_media" */
export type Person_Media_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "person_media" */
export type Person_Media_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Person_Media_Max_Order_By>;
  min?: InputMaybe<Person_Media_Min_Order_By>;
};

/** input type for inserting array relation for remote table "person_media" */
export type Person_Media_Arr_Rel_Insert_Input = {
  data: Array<Person_Media_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Person_Media_On_Conflict>;
};

/** Boolean expression to filter rows from the table "person_media". All fields are combined with a logical 'AND'. */
export type Person_Media_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Media_Bool_Exp>>;
  _not?: InputMaybe<Person_Media_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Media_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  media_type?: InputMaybe<String_Comparison_Exp>;
  media_url?: InputMaybe<String_Comparison_Exp>;
  person?: InputMaybe<People_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "person_media" */
export enum Person_Media_Constraint {
  /** unique or primary key constraint on columns "id" */
  PersonMediaPkey = 'person_media_pkey'
}

/** input type for inserting data into table "person_media" */
export type Person_Media_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  person?: InputMaybe<People_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Person_Media_Max_Fields = {
  __typename?: 'person_media_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  media_type?: Maybe<Scalars['String']['output']>;
  media_url?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "person_media" */
export type Person_Media_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Person_Media_Min_Fields = {
  __typename?: 'person_media_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  media_type?: Maybe<Scalars['String']['output']>;
  media_url?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "person_media" */
export type Person_Media_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "person_media" */
export type Person_Media_Mutation_Response = {
  __typename?: 'person_media_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Person_Media>;
};

/** on_conflict condition type for table "person_media" */
export type Person_Media_On_Conflict = {
  constraint: Person_Media_Constraint;
  update_columns?: Array<Person_Media_Update_Column>;
  where?: InputMaybe<Person_Media_Bool_Exp>;
};

/** Ordering options when selecting data from "person_media". */
export type Person_Media_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  person?: InputMaybe<People_Order_By>;
  person_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person_media */
export type Person_Media_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "person_media" */
export enum Person_Media_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  MediaUrl = 'media_url',
  /** column name */
  PersonId = 'person_id'
}

/** input type for updating data in table "person_media" */
export type Person_Media_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "person_media" */
export type Person_Media_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Person_Media_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Media_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "person_media" */
export enum Person_Media_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  MediaUrl = 'media_url',
  /** column name */
  PersonId = 'person_id'
}

export type Person_Media_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Person_Media_Set_Input>;
  /** filter the rows which have to be updated */
  where: Person_Media_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  album_artists: Array<Album_Artists>;
  /** An aggregate relationship */
  album_artists_aggregate: Album_Artists_Aggregate;
  /** fetch data from the table: "album_artists" using primary key columns */
  album_artists_by_pk?: Maybe<Album_Artists>;
  /** An array relationship */
  album_songs: Array<Album_Songs>;
  /** An aggregate relationship */
  album_songs_aggregate: Album_Songs_Aggregate;
  /** fetch data from the table: "album_songs" using primary key columns */
  album_songs_by_pk?: Maybe<Album_Songs>;
  /** fetch data from the table: "albums" */
  albums: Array<Albums>;
  /** fetch aggregated fields from the table: "albums" */
  albums_aggregate: Albums_Aggregate;
  /** fetch data from the table: "albums" using primary key columns */
  albums_by_pk?: Maybe<Albums>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "auth.migrations" */
  auth_migrations: Array<Auth_Migrations>;
  /** fetch aggregated fields from the table: "auth.migrations" */
  auth_migrations_aggregate: Auth_Migrations_Aggregate;
  /** fetch data from the table: "auth.migrations" using primary key columns */
  auth_migrations_by_pk?: Maybe<Auth_Migrations>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "genres" */
  genres: Array<Genres>;
  /** fetch aggregated fields from the table: "genres" */
  genres_aggregate: Genres_Aggregate;
  /** fetch data from the table: "genres" using primary key columns */
  genres_by_pk?: Maybe<Genres>;
  /** fetch data from the table: "keywords" */
  keywords: Array<Keywords>;
  /** fetch aggregated fields from the table: "keywords" */
  keywords_aggregate: Keywords_Aggregate;
  /** fetch data from the table: "keywords" using primary key columns */
  keywords_by_pk?: Maybe<Keywords>;
  /** An array relationship */
  movie_alternative_titles: Array<Movie_Alternative_Titles>;
  /** An aggregate relationship */
  movie_alternative_titles_aggregate: Movie_Alternative_Titles_Aggregate;
  /** fetch data from the table: "movie_alternative_titles" using primary key columns */
  movie_alternative_titles_by_pk?: Maybe<Movie_Alternative_Titles>;
  /** fetch data from the table: "movie_cast" */
  movie_cast: Array<Movie_Cast>;
  /** fetch aggregated fields from the table: "movie_cast" */
  movie_cast_aggregate: Movie_Cast_Aggregate;
  /** fetch data from the table: "movie_cast" using primary key columns */
  movie_cast_by_pk?: Maybe<Movie_Cast>;
  /** An array relationship */
  movie_changes: Array<Movie_Changes>;
  /** An aggregate relationship */
  movie_changes_aggregate: Movie_Changes_Aggregate;
  /** fetch data from the table: "movie_changes" using primary key columns */
  movie_changes_by_pk?: Maybe<Movie_Changes>;
  /** fetch data from the table: "movie_crew" */
  movie_crew: Array<Movie_Crew>;
  /** fetch aggregated fields from the table: "movie_crew" */
  movie_crew_aggregate: Movie_Crew_Aggregate;
  /** fetch data from the table: "movie_crew" using primary key columns */
  movie_crew_by_pk?: Maybe<Movie_Crew>;
  /** An array relationship */
  movie_favourites: Array<Movie_Favourites>;
  /** An aggregate relationship */
  movie_favourites_aggregate: Movie_Favourites_Aggregate;
  /** fetch data from the table: "movie_favourites" using primary key columns */
  movie_favourites_by_pk?: Maybe<Movie_Favourites>;
  /** An array relationship */
  movie_genres: Array<Movie_Genres>;
  /** An aggregate relationship */
  movie_genres_aggregate: Movie_Genres_Aggregate;
  /** fetch data from the table: "movie_genres" using primary key columns */
  movie_genres_by_pk?: Maybe<Movie_Genres>;
  /** An array relationship */
  movie_keywords: Array<Movie_Keywords>;
  /** An aggregate relationship */
  movie_keywords_aggregate: Movie_Keywords_Aggregate;
  /** fetch data from the table: "movie_keywords" using primary key columns */
  movie_keywords_by_pk?: Maybe<Movie_Keywords>;
  /** An array relationship */
  movie_media: Array<Movie_Media>;
  /** An aggregate relationship */
  movie_media_aggregate: Movie_Media_Aggregate;
  /** fetch data from the table: "movie_media" using primary key columns */
  movie_media_by_pk?: Maybe<Movie_Media>;
  /** An array relationship */
  movie_production_companies: Array<Movie_Production_Companies>;
  /** An aggregate relationship */
  movie_production_companies_aggregate: Movie_Production_Companies_Aggregate;
  /** fetch data from the table: "movie_production_companies" using primary key columns */
  movie_production_companies_by_pk?: Maybe<Movie_Production_Companies>;
  /** An array relationship */
  movie_production_countries: Array<Movie_Production_Countries>;
  /** An aggregate relationship */
  movie_production_countries_aggregate: Movie_Production_Countries_Aggregate;
  /** fetch data from the table: "movie_production_countries" using primary key columns */
  movie_production_countries_by_pk?: Maybe<Movie_Production_Countries>;
  /** An array relationship */
  movie_ratings: Array<Movie_Ratings>;
  /** An aggregate relationship */
  movie_ratings_aggregate: Movie_Ratings_Aggregate;
  /** fetch data from the table: "movie_ratings" using primary key columns */
  movie_ratings_by_pk?: Maybe<Movie_Ratings>;
  /** An array relationship */
  movie_reviews: Array<Movie_Reviews>;
  /** An aggregate relationship */
  movie_reviews_aggregate: Movie_Reviews_Aggregate;
  /** fetch data from the table: "movie_reviews" using primary key columns */
  movie_reviews_by_pk?: Maybe<Movie_Reviews>;
  /** fetch data from the table: "movie_soundtrack" */
  movie_soundtrack: Array<Movie_Soundtrack>;
  /** fetch aggregated fields from the table: "movie_soundtrack" */
  movie_soundtrack_aggregate: Movie_Soundtrack_Aggregate;
  /** fetch data from the table: "movie_soundtrack" using primary key columns */
  movie_soundtrack_by_pk?: Maybe<Movie_Soundtrack>;
  /** fetch data from the table: "movie_watchlist" */
  movie_watchlist: Array<Movie_Watchlist>;
  /** fetch aggregated fields from the table: "movie_watchlist" */
  movie_watchlist_aggregate: Movie_Watchlist_Aggregate;
  /** fetch data from the table: "movie_watchlist" using primary key columns */
  movie_watchlist_by_pk?: Maybe<Movie_Watchlist>;
  /** fetch data from the table: "movies" */
  movies: Array<Movies>;
  /** fetch aggregated fields from the table: "movies" */
  movies_aggregate: Movies_Aggregate;
  /** fetch data from the table: "movies" using primary key columns */
  movies_by_pk?: Maybe<Movies>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  people_aggregate: People_Aggregate;
  /** fetch data from the table: "people" using primary key columns */
  people_by_pk?: Maybe<People>;
  /** An array relationship */
  person_changes: Array<Person_Changes>;
  /** An aggregate relationship */
  person_changes_aggregate: Person_Changes_Aggregate;
  /** fetch data from the table: "person_changes" using primary key columns */
  person_changes_by_pk?: Maybe<Person_Changes>;
  /** An array relationship */
  person_media: Array<Person_Media>;
  /** An aggregate relationship */
  person_media_aggregate: Person_Media_Aggregate;
  /** fetch data from the table: "person_media" using primary key columns */
  person_media_by_pk?: Maybe<Person_Media>;
  /** An array relationship */
  report_votes: Array<Report_Votes>;
  /** An aggregate relationship */
  report_votes_aggregate: Report_Votes_Aggregate;
  /** fetch data from the table: "report_votes" using primary key columns */
  report_votes_by_pk?: Maybe<Report_Votes>;
  /** An array relationship */
  reports: Array<Reports>;
  /** An aggregate relationship */
  reports_aggregate: Reports_Aggregate;
  /** fetch data from the table: "reports" using primary key columns */
  reports_by_pk?: Maybe<Reports>;
  /** An array relationship */
  song_artists: Array<Song_Artists>;
  /** An aggregate relationship */
  song_artists_aggregate: Song_Artists_Aggregate;
  /** fetch data from the table: "song_artists" using primary key columns */
  song_artists_by_pk?: Maybe<Song_Artists>;
  /** An array relationship */
  song_changes: Array<Song_Changes>;
  /** An aggregate relationship */
  song_changes_aggregate: Song_Changes_Aggregate;
  /** fetch data from the table: "song_changes" using primary key columns */
  song_changes_by_pk?: Maybe<Song_Changes>;
  /** An array relationship */
  song_favourites: Array<Song_Favourites>;
  /** An aggregate relationship */
  song_favourites_aggregate: Song_Favourites_Aggregate;
  /** fetch data from the table: "song_favourites" using primary key columns */
  song_favourites_by_pk?: Maybe<Song_Favourites>;
  /** An array relationship */
  song_genres: Array<Song_Genres>;
  /** An aggregate relationship */
  song_genres_aggregate: Song_Genres_Aggregate;
  /** fetch data from the table: "song_genres" using primary key columns */
  song_genres_by_pk?: Maybe<Song_Genres>;
  /** An array relationship */
  song_keywords: Array<Song_Keywords>;
  /** An aggregate relationship */
  song_keywords_aggregate: Song_Keywords_Aggregate;
  /** fetch data from the table: "song_keywords" using primary key columns */
  song_keywords_by_pk?: Maybe<Song_Keywords>;
  /** fetch data from the table: "song_listen_later" */
  song_listen_later: Array<Song_Listen_Later>;
  /** fetch aggregated fields from the table: "song_listen_later" */
  song_listen_later_aggregate: Song_Listen_Later_Aggregate;
  /** fetch data from the table: "song_listen_later" using primary key columns */
  song_listen_later_by_pk?: Maybe<Song_Listen_Later>;
  /** fetch data from the table: "song_media" */
  song_media: Array<Song_Media>;
  /** fetch aggregated fields from the table: "song_media" */
  song_media_aggregate: Song_Media_Aggregate;
  /** fetch data from the table: "song_media" using primary key columns */
  song_media_by_pk?: Maybe<Song_Media>;
  /** An array relationship */
  song_ratings: Array<Song_Ratings>;
  /** An aggregate relationship */
  song_ratings_aggregate: Song_Ratings_Aggregate;
  /** fetch data from the table: "song_ratings" using primary key columns */
  song_ratings_by_pk?: Maybe<Song_Ratings>;
  /** An array relationship */
  song_reviews: Array<Song_Reviews>;
  /** An aggregate relationship */
  song_reviews_aggregate: Song_Reviews_Aggregate;
  /** fetch data from the table: "song_reviews" using primary key columns */
  song_reviews_by_pk?: Maybe<Song_Reviews>;
  /** fetch data from the table: "songs" */
  songs: Array<Songs>;
  /** fetch aggregated fields from the table: "songs" */
  songs_aggregate: Songs_Aggregate;
  /** fetch data from the table: "songs" using primary key columns */
  songs_by_pk?: Maybe<Songs>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
};


export type Query_RootAlbum_ArtistsArgs = {
  distinct_on?: InputMaybe<Array<Album_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Artists_Order_By>>;
  where?: InputMaybe<Album_Artists_Bool_Exp>;
};


export type Query_RootAlbum_Artists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Artists_Order_By>>;
  where?: InputMaybe<Album_Artists_Bool_Exp>;
};


export type Query_RootAlbum_Artists_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAlbum_SongsArgs = {
  distinct_on?: InputMaybe<Array<Album_Songs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Songs_Order_By>>;
  where?: InputMaybe<Album_Songs_Bool_Exp>;
};


export type Query_RootAlbum_Songs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Songs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Songs_Order_By>>;
  where?: InputMaybe<Album_Songs_Bool_Exp>;
};


export type Query_RootAlbum_Songs_By_PkArgs = {
  album_id: Scalars['uuid']['input'];
  song_id: Scalars['uuid']['input'];
};


export type Query_RootAlbumsArgs = {
  distinct_on?: InputMaybe<Array<Albums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Albums_Order_By>>;
  where?: InputMaybe<Albums_Bool_Exp>;
};


export type Query_RootAlbums_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Albums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Albums_Order_By>>;
  where?: InputMaybe<Albums_Bool_Exp>;
};


export type Query_RootAlbums_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuth_MigrationsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Migrations_Order_By>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Query_RootAuth_Migrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Migrations_Order_By>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Query_RootAuth_Migrations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootBucketArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootFileArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootGenresArgs = {
  distinct_on?: InputMaybe<Array<Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genres_Order_By>>;
  where?: InputMaybe<Genres_Bool_Exp>;
};


export type Query_RootGenres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genres_Order_By>>;
  where?: InputMaybe<Genres_Bool_Exp>;
};


export type Query_RootGenres_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootKeywordsArgs = {
  distinct_on?: InputMaybe<Array<Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Keywords_Order_By>>;
  where?: InputMaybe<Keywords_Bool_Exp>;
};


export type Query_RootKeywords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Keywords_Order_By>>;
  where?: InputMaybe<Keywords_Bool_Exp>;
};


export type Query_RootKeywords_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMovie_Alternative_TitlesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Alternative_Titles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Alternative_Titles_Order_By>>;
  where?: InputMaybe<Movie_Alternative_Titles_Bool_Exp>;
};


export type Query_RootMovie_Alternative_Titles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Alternative_Titles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Alternative_Titles_Order_By>>;
  where?: InputMaybe<Movie_Alternative_Titles_Bool_Exp>;
};


export type Query_RootMovie_Alternative_Titles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMovie_CastArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};


export type Query_RootMovie_Cast_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};


export type Query_RootMovie_Cast_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMovie_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Changes_Order_By>>;
  where?: InputMaybe<Movie_Changes_Bool_Exp>;
};


export type Query_RootMovie_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Changes_Order_By>>;
  where?: InputMaybe<Movie_Changes_Bool_Exp>;
};


export type Query_RootMovie_Changes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMovie_CrewArgs = {
  distinct_on?: InputMaybe<Array<Movie_Crew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Crew_Order_By>>;
  where?: InputMaybe<Movie_Crew_Bool_Exp>;
};


export type Query_RootMovie_Crew_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Crew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Crew_Order_By>>;
  where?: InputMaybe<Movie_Crew_Bool_Exp>;
};


export type Query_RootMovie_Crew_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMovie_FavouritesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Favourites_Order_By>>;
  where?: InputMaybe<Movie_Favourites_Bool_Exp>;
};


export type Query_RootMovie_Favourites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Favourites_Order_By>>;
  where?: InputMaybe<Movie_Favourites_Bool_Exp>;
};


export type Query_RootMovie_Favourites_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMovie_GenresArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Genres_Order_By>>;
  where?: InputMaybe<Movie_Genres_Bool_Exp>;
};


export type Query_RootMovie_Genres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Genres_Order_By>>;
  where?: InputMaybe<Movie_Genres_Bool_Exp>;
};


export type Query_RootMovie_Genres_By_PkArgs = {
  genre_id: Scalars['uuid']['input'];
  movie_id: Scalars['uuid']['input'];
};


export type Query_RootMovie_KeywordsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Keywords_Order_By>>;
  where?: InputMaybe<Movie_Keywords_Bool_Exp>;
};


export type Query_RootMovie_Keywords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Keywords_Order_By>>;
  where?: InputMaybe<Movie_Keywords_Bool_Exp>;
};


export type Query_RootMovie_Keywords_By_PkArgs = {
  keyword_id: Scalars['uuid']['input'];
  movie_id: Scalars['uuid']['input'];
};


export type Query_RootMovie_MediaArgs = {
  distinct_on?: InputMaybe<Array<Movie_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Media_Order_By>>;
  where?: InputMaybe<Movie_Media_Bool_Exp>;
};


export type Query_RootMovie_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Media_Order_By>>;
  where?: InputMaybe<Movie_Media_Bool_Exp>;
};


export type Query_RootMovie_Media_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMovie_Production_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Production_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Production_Companies_Order_By>>;
  where?: InputMaybe<Movie_Production_Companies_Bool_Exp>;
};


export type Query_RootMovie_Production_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Production_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Production_Companies_Order_By>>;
  where?: InputMaybe<Movie_Production_Companies_Bool_Exp>;
};


export type Query_RootMovie_Production_Companies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMovie_Production_CountriesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Production_Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Production_Countries_Order_By>>;
  where?: InputMaybe<Movie_Production_Countries_Bool_Exp>;
};


export type Query_RootMovie_Production_Countries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Production_Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Production_Countries_Order_By>>;
  where?: InputMaybe<Movie_Production_Countries_Bool_Exp>;
};


export type Query_RootMovie_Production_Countries_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMovie_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Ratings_Order_By>>;
  where?: InputMaybe<Movie_Ratings_Bool_Exp>;
};


export type Query_RootMovie_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Ratings_Order_By>>;
  where?: InputMaybe<Movie_Ratings_Bool_Exp>;
};


export type Query_RootMovie_Ratings_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMovie_ReviewsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Reviews_Order_By>>;
  where?: InputMaybe<Movie_Reviews_Bool_Exp>;
};


export type Query_RootMovie_Reviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Reviews_Order_By>>;
  where?: InputMaybe<Movie_Reviews_Bool_Exp>;
};


export type Query_RootMovie_Reviews_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMovie_SoundtrackArgs = {
  distinct_on?: InputMaybe<Array<Movie_Soundtrack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Soundtrack_Order_By>>;
  where?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
};


export type Query_RootMovie_Soundtrack_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Soundtrack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Soundtrack_Order_By>>;
  where?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
};


export type Query_RootMovie_Soundtrack_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMovie_WatchlistArgs = {
  distinct_on?: InputMaybe<Array<Movie_Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Watchlist_Order_By>>;
  where?: InputMaybe<Movie_Watchlist_Bool_Exp>;
};


export type Query_RootMovie_Watchlist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Watchlist_Order_By>>;
  where?: InputMaybe<Movie_Watchlist_Bool_Exp>;
};


export type Query_RootMovie_Watchlist_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMoviesArgs = {
  distinct_on?: InputMaybe<Array<Movies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movies_Order_By>>;
  where?: InputMaybe<Movies_Bool_Exp>;
};


export type Query_RootMovies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movies_Order_By>>;
  where?: InputMaybe<Movies_Bool_Exp>;
};


export type Query_RootMovies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPeopleArgs = {
  distinct_on?: InputMaybe<Array<People_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<People_Order_By>>;
  where?: InputMaybe<People_Bool_Exp>;
};


export type Query_RootPeople_AggregateArgs = {
  distinct_on?: InputMaybe<Array<People_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<People_Order_By>>;
  where?: InputMaybe<People_Bool_Exp>;
};


export type Query_RootPeople_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPerson_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Person_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Changes_Order_By>>;
  where?: InputMaybe<Person_Changes_Bool_Exp>;
};


export type Query_RootPerson_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Changes_Order_By>>;
  where?: InputMaybe<Person_Changes_Bool_Exp>;
};


export type Query_RootPerson_Changes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPerson_MediaArgs = {
  distinct_on?: InputMaybe<Array<Person_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Media_Order_By>>;
  where?: InputMaybe<Person_Media_Bool_Exp>;
};


export type Query_RootPerson_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Media_Order_By>>;
  where?: InputMaybe<Person_Media_Bool_Exp>;
};


export type Query_RootPerson_Media_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootReport_VotesArgs = {
  distinct_on?: InputMaybe<Array<Report_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Report_Votes_Order_By>>;
  where?: InputMaybe<Report_Votes_Bool_Exp>;
};


export type Query_RootReport_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Report_Votes_Order_By>>;
  where?: InputMaybe<Report_Votes_Bool_Exp>;
};


export type Query_RootReport_Votes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootReportsArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Query_RootReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Query_RootReports_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSong_ArtistsArgs = {
  distinct_on?: InputMaybe<Array<Song_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Artists_Order_By>>;
  where?: InputMaybe<Song_Artists_Bool_Exp>;
};


export type Query_RootSong_Artists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Artists_Order_By>>;
  where?: InputMaybe<Song_Artists_Bool_Exp>;
};


export type Query_RootSong_Artists_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSong_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Song_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Changes_Order_By>>;
  where?: InputMaybe<Song_Changes_Bool_Exp>;
};


export type Query_RootSong_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Changes_Order_By>>;
  where?: InputMaybe<Song_Changes_Bool_Exp>;
};


export type Query_RootSong_Changes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSong_FavouritesArgs = {
  distinct_on?: InputMaybe<Array<Song_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Favourites_Order_By>>;
  where?: InputMaybe<Song_Favourites_Bool_Exp>;
};


export type Query_RootSong_Favourites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Favourites_Order_By>>;
  where?: InputMaybe<Song_Favourites_Bool_Exp>;
};


export type Query_RootSong_Favourites_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSong_GenresArgs = {
  distinct_on?: InputMaybe<Array<Song_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Genres_Order_By>>;
  where?: InputMaybe<Song_Genres_Bool_Exp>;
};


export type Query_RootSong_Genres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Genres_Order_By>>;
  where?: InputMaybe<Song_Genres_Bool_Exp>;
};


export type Query_RootSong_Genres_By_PkArgs = {
  genre_id: Scalars['uuid']['input'];
  song_id: Scalars['uuid']['input'];
};


export type Query_RootSong_KeywordsArgs = {
  distinct_on?: InputMaybe<Array<Song_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Keywords_Order_By>>;
  where?: InputMaybe<Song_Keywords_Bool_Exp>;
};


export type Query_RootSong_Keywords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Keywords_Order_By>>;
  where?: InputMaybe<Song_Keywords_Bool_Exp>;
};


export type Query_RootSong_Keywords_By_PkArgs = {
  keyword_id: Scalars['uuid']['input'];
  song_id: Scalars['uuid']['input'];
};


export type Query_RootSong_Listen_LaterArgs = {
  distinct_on?: InputMaybe<Array<Song_Listen_Later_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Listen_Later_Order_By>>;
  where?: InputMaybe<Song_Listen_Later_Bool_Exp>;
};


export type Query_RootSong_Listen_Later_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Listen_Later_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Listen_Later_Order_By>>;
  where?: InputMaybe<Song_Listen_Later_Bool_Exp>;
};


export type Query_RootSong_Listen_Later_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSong_MediaArgs = {
  distinct_on?: InputMaybe<Array<Song_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Media_Order_By>>;
  where?: InputMaybe<Song_Media_Bool_Exp>;
};


export type Query_RootSong_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Media_Order_By>>;
  where?: InputMaybe<Song_Media_Bool_Exp>;
};


export type Query_RootSong_Media_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSong_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Song_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Ratings_Order_By>>;
  where?: InputMaybe<Song_Ratings_Bool_Exp>;
};


export type Query_RootSong_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Ratings_Order_By>>;
  where?: InputMaybe<Song_Ratings_Bool_Exp>;
};


export type Query_RootSong_Ratings_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSong_ReviewsArgs = {
  distinct_on?: InputMaybe<Array<Song_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Reviews_Order_By>>;
  where?: InputMaybe<Song_Reviews_Bool_Exp>;
};


export type Query_RootSong_Reviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Reviews_Order_By>>;
  where?: InputMaybe<Song_Reviews_Bool_Exp>;
};


export type Query_RootSong_Reviews_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSongsArgs = {
  distinct_on?: InputMaybe<Array<Songs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Songs_Order_By>>;
  where?: InputMaybe<Songs_Bool_Exp>;
};


export type Query_RootSongs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Songs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Songs_Order_By>>;
  where?: InputMaybe<Songs_Bool_Exp>;
};


export type Query_RootSongs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootVirusArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Query_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** columns and relationships of "report_votes" */
export type Report_Votes = {
  __typename?: 'report_votes';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  report: Reports;
  report_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  vote: Scalars['smallint']['output'];
};

/** aggregated selection of "report_votes" */
export type Report_Votes_Aggregate = {
  __typename?: 'report_votes_aggregate';
  aggregate?: Maybe<Report_Votes_Aggregate_Fields>;
  nodes: Array<Report_Votes>;
};

export type Report_Votes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Report_Votes_Aggregate_Bool_Exp_Count>;
};

export type Report_Votes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Report_Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Report_Votes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "report_votes" */
export type Report_Votes_Aggregate_Fields = {
  __typename?: 'report_votes_aggregate_fields';
  avg?: Maybe<Report_Votes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Report_Votes_Max_Fields>;
  min?: Maybe<Report_Votes_Min_Fields>;
  stddev?: Maybe<Report_Votes_Stddev_Fields>;
  stddev_pop?: Maybe<Report_Votes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Report_Votes_Stddev_Samp_Fields>;
  sum?: Maybe<Report_Votes_Sum_Fields>;
  var_pop?: Maybe<Report_Votes_Var_Pop_Fields>;
  var_samp?: Maybe<Report_Votes_Var_Samp_Fields>;
  variance?: Maybe<Report_Votes_Variance_Fields>;
};


/** aggregate fields of "report_votes" */
export type Report_Votes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Report_Votes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "report_votes" */
export type Report_Votes_Aggregate_Order_By = {
  avg?: InputMaybe<Report_Votes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Report_Votes_Max_Order_By>;
  min?: InputMaybe<Report_Votes_Min_Order_By>;
  stddev?: InputMaybe<Report_Votes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Report_Votes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Report_Votes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Report_Votes_Sum_Order_By>;
  var_pop?: InputMaybe<Report_Votes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Report_Votes_Var_Samp_Order_By>;
  variance?: InputMaybe<Report_Votes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "report_votes" */
export type Report_Votes_Arr_Rel_Insert_Input = {
  data: Array<Report_Votes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Report_Votes_On_Conflict>;
};

/** aggregate avg on columns */
export type Report_Votes_Avg_Fields = {
  __typename?: 'report_votes_avg_fields';
  vote?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "report_votes" */
export type Report_Votes_Avg_Order_By = {
  vote?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "report_votes". All fields are combined with a logical 'AND'. */
export type Report_Votes_Bool_Exp = {
  _and?: InputMaybe<Array<Report_Votes_Bool_Exp>>;
  _not?: InputMaybe<Report_Votes_Bool_Exp>;
  _or?: InputMaybe<Array<Report_Votes_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  report?: InputMaybe<Reports_Bool_Exp>;
  report_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  vote?: InputMaybe<Smallint_Comparison_Exp>;
};

/** unique or primary key constraints on table "report_votes" */
export enum Report_Votes_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReportVotesPkey = 'report_votes_pkey',
  /** unique or primary key constraint on columns "report_id", "user_id" */
  ReportVotesReportIdUserIdKey = 'report_votes_report_id_user_id_key'
}

/** input type for incrementing numeric columns in table "report_votes" */
export type Report_Votes_Inc_Input = {
  vote?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "report_votes" */
export type Report_Votes_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  report?: InputMaybe<Reports_Obj_Rel_Insert_Input>;
  report_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  vote?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate max on columns */
export type Report_Votes_Max_Fields = {
  __typename?: 'report_votes_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  report_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  vote?: Maybe<Scalars['smallint']['output']>;
};

/** order by max() on columns of table "report_votes" */
export type Report_Votes_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vote?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Report_Votes_Min_Fields = {
  __typename?: 'report_votes_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  report_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  vote?: Maybe<Scalars['smallint']['output']>;
};

/** order by min() on columns of table "report_votes" */
export type Report_Votes_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  vote?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "report_votes" */
export type Report_Votes_Mutation_Response = {
  __typename?: 'report_votes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Report_Votes>;
};

/** on_conflict condition type for table "report_votes" */
export type Report_Votes_On_Conflict = {
  constraint: Report_Votes_Constraint;
  update_columns?: Array<Report_Votes_Update_Column>;
  where?: InputMaybe<Report_Votes_Bool_Exp>;
};

/** Ordering options when selecting data from "report_votes". */
export type Report_Votes_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report?: InputMaybe<Reports_Order_By>;
  report_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  vote?: InputMaybe<Order_By>;
};

/** primary key columns input for table: report_votes */
export type Report_Votes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "report_votes" */
export enum Report_Votes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReportId = 'report_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Vote = 'vote'
}

/** input type for updating data in table "report_votes" */
export type Report_Votes_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  report_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  vote?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate stddev on columns */
export type Report_Votes_Stddev_Fields = {
  __typename?: 'report_votes_stddev_fields';
  vote?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "report_votes" */
export type Report_Votes_Stddev_Order_By = {
  vote?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Report_Votes_Stddev_Pop_Fields = {
  __typename?: 'report_votes_stddev_pop_fields';
  vote?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "report_votes" */
export type Report_Votes_Stddev_Pop_Order_By = {
  vote?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Report_Votes_Stddev_Samp_Fields = {
  __typename?: 'report_votes_stddev_samp_fields';
  vote?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "report_votes" */
export type Report_Votes_Stddev_Samp_Order_By = {
  vote?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "report_votes" */
export type Report_Votes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Report_Votes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Report_Votes_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  report_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  vote?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate sum on columns */
export type Report_Votes_Sum_Fields = {
  __typename?: 'report_votes_sum_fields';
  vote?: Maybe<Scalars['smallint']['output']>;
};

/** order by sum() on columns of table "report_votes" */
export type Report_Votes_Sum_Order_By = {
  vote?: InputMaybe<Order_By>;
};

/** update columns of table "report_votes" */
export enum Report_Votes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReportId = 'report_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Vote = 'vote'
}

export type Report_Votes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Report_Votes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Report_Votes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Report_Votes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Report_Votes_Var_Pop_Fields = {
  __typename?: 'report_votes_var_pop_fields';
  vote?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "report_votes" */
export type Report_Votes_Var_Pop_Order_By = {
  vote?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Report_Votes_Var_Samp_Fields = {
  __typename?: 'report_votes_var_samp_fields';
  vote?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "report_votes" */
export type Report_Votes_Var_Samp_Order_By = {
  vote?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Report_Votes_Variance_Fields = {
  __typename?: 'report_votes_variance_fields';
  vote?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "report_votes" */
export type Report_Votes_Variance_Order_By = {
  vote?: InputMaybe<Order_By>;
};

/** columns and relationships of "reports" */
export type Reports = {
  __typename?: 'reports';
  content_id: Scalars['uuid']['output'];
  content_type: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  report_reason?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  report_votes: Array<Report_Votes>;
  /** An aggregate relationship */
  report_votes_aggregate: Report_Votes_Aggregate;
  reporter_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
};


/** columns and relationships of "reports" */
export type ReportsReport_VotesArgs = {
  distinct_on?: InputMaybe<Array<Report_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Report_Votes_Order_By>>;
  where?: InputMaybe<Report_Votes_Bool_Exp>;
};


/** columns and relationships of "reports" */
export type ReportsReport_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Report_Votes_Order_By>>;
  where?: InputMaybe<Report_Votes_Bool_Exp>;
};

/** aggregated selection of "reports" */
export type Reports_Aggregate = {
  __typename?: 'reports_aggregate';
  aggregate?: Maybe<Reports_Aggregate_Fields>;
  nodes: Array<Reports>;
};

export type Reports_Aggregate_Bool_Exp = {
  count?: InputMaybe<Reports_Aggregate_Bool_Exp_Count>;
};

export type Reports_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Reports_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Reports_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "reports" */
export type Reports_Aggregate_Fields = {
  __typename?: 'reports_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Reports_Max_Fields>;
  min?: Maybe<Reports_Min_Fields>;
};


/** aggregate fields of "reports" */
export type Reports_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reports_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "reports" */
export type Reports_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Reports_Max_Order_By>;
  min?: InputMaybe<Reports_Min_Order_By>;
};

/** input type for inserting array relation for remote table "reports" */
export type Reports_Arr_Rel_Insert_Input = {
  data: Array<Reports_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Reports_On_Conflict>;
};

/** Boolean expression to filter rows from the table "reports". All fields are combined with a logical 'AND'. */
export type Reports_Bool_Exp = {
  _and?: InputMaybe<Array<Reports_Bool_Exp>>;
  _not?: InputMaybe<Reports_Bool_Exp>;
  _or?: InputMaybe<Array<Reports_Bool_Exp>>;
  content_id?: InputMaybe<Uuid_Comparison_Exp>;
  content_type?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  report_reason?: InputMaybe<String_Comparison_Exp>;
  report_votes?: InputMaybe<Report_Votes_Bool_Exp>;
  report_votes_aggregate?: InputMaybe<Report_Votes_Aggregate_Bool_Exp>;
  reporter_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "reports" */
export enum Reports_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReportsPkey = 'reports_pkey'
}

/** input type for inserting data into table "reports" */
export type Reports_Insert_Input = {
  content_id?: InputMaybe<Scalars['uuid']['input']>;
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  report_reason?: InputMaybe<Scalars['String']['input']>;
  report_votes?: InputMaybe<Report_Votes_Arr_Rel_Insert_Input>;
  reporter_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Reports_Max_Fields = {
  __typename?: 'reports_max_fields';
  content_id?: Maybe<Scalars['uuid']['output']>;
  content_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  report_reason?: Maybe<Scalars['String']['output']>;
  reporter_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "reports" */
export type Reports_Max_Order_By = {
  content_id?: InputMaybe<Order_By>;
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report_reason?: InputMaybe<Order_By>;
  reporter_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reports_Min_Fields = {
  __typename?: 'reports_min_fields';
  content_id?: Maybe<Scalars['uuid']['output']>;
  content_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  report_reason?: Maybe<Scalars['String']['output']>;
  reporter_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "reports" */
export type Reports_Min_Order_By = {
  content_id?: InputMaybe<Order_By>;
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report_reason?: InputMaybe<Order_By>;
  reporter_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "reports" */
export type Reports_Mutation_Response = {
  __typename?: 'reports_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Reports>;
};

/** input type for inserting object relation for remote table "reports" */
export type Reports_Obj_Rel_Insert_Input = {
  data: Reports_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Reports_On_Conflict>;
};

/** on_conflict condition type for table "reports" */
export type Reports_On_Conflict = {
  constraint: Reports_Constraint;
  update_columns?: Array<Reports_Update_Column>;
  where?: InputMaybe<Reports_Bool_Exp>;
};

/** Ordering options when selecting data from "reports". */
export type Reports_Order_By = {
  content_id?: InputMaybe<Order_By>;
  content_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report_reason?: InputMaybe<Order_By>;
  report_votes_aggregate?: InputMaybe<Report_Votes_Aggregate_Order_By>;
  reporter_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: reports */
export type Reports_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "reports" */
export enum Reports_Select_Column {
  /** column name */
  ContentId = 'content_id',
  /** column name */
  ContentType = 'content_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReportReason = 'report_reason',
  /** column name */
  ReporterId = 'reporter_id'
}

/** input type for updating data in table "reports" */
export type Reports_Set_Input = {
  content_id?: InputMaybe<Scalars['uuid']['input']>;
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  report_reason?: InputMaybe<Scalars['String']['input']>;
  reporter_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "reports" */
export type Reports_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Reports_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Reports_Stream_Cursor_Value_Input = {
  content_id?: InputMaybe<Scalars['uuid']['input']>;
  content_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  report_reason?: InputMaybe<Scalars['String']['input']>;
  reporter_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "reports" */
export enum Reports_Update_Column {
  /** column name */
  ContentId = 'content_id',
  /** column name */
  ContentType = 'content_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReportReason = 'report_reason',
  /** column name */
  ReporterId = 'reporter_id'
}

export type Reports_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Reports_Set_Input>;
  /** filter the rows which have to be updated */
  where: Reports_Bool_Exp;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

/** columns and relationships of "song_artists" */
export type Song_Artists = {
  __typename?: 'song_artists';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  person: People;
  person_id: Scalars['uuid']['output'];
  role?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  song: Songs;
  song_id: Scalars['uuid']['output'];
};

/** aggregated selection of "song_artists" */
export type Song_Artists_Aggregate = {
  __typename?: 'song_artists_aggregate';
  aggregate?: Maybe<Song_Artists_Aggregate_Fields>;
  nodes: Array<Song_Artists>;
};

export type Song_Artists_Aggregate_Bool_Exp = {
  count?: InputMaybe<Song_Artists_Aggregate_Bool_Exp_Count>;
};

export type Song_Artists_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Song_Artists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Song_Artists_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "song_artists" */
export type Song_Artists_Aggregate_Fields = {
  __typename?: 'song_artists_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Song_Artists_Max_Fields>;
  min?: Maybe<Song_Artists_Min_Fields>;
};


/** aggregate fields of "song_artists" */
export type Song_Artists_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Song_Artists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "song_artists" */
export type Song_Artists_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Song_Artists_Max_Order_By>;
  min?: InputMaybe<Song_Artists_Min_Order_By>;
};

/** input type for inserting array relation for remote table "song_artists" */
export type Song_Artists_Arr_Rel_Insert_Input = {
  data: Array<Song_Artists_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Song_Artists_On_Conflict>;
};

/** Boolean expression to filter rows from the table "song_artists". All fields are combined with a logical 'AND'. */
export type Song_Artists_Bool_Exp = {
  _and?: InputMaybe<Array<Song_Artists_Bool_Exp>>;
  _not?: InputMaybe<Song_Artists_Bool_Exp>;
  _or?: InputMaybe<Array<Song_Artists_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<People_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  song?: InputMaybe<Songs_Bool_Exp>;
  song_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "song_artists" */
export enum Song_Artists_Constraint {
  /** unique or primary key constraint on columns "id" */
  SongArtistsPkey = 'song_artists_pkey'
}

/** input type for inserting data into table "song_artists" */
export type Song_Artists_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person?: InputMaybe<People_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  song?: InputMaybe<Songs_Obj_Rel_Insert_Input>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Song_Artists_Max_Fields = {
  __typename?: 'song_artists_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "song_artists" */
export type Song_Artists_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Song_Artists_Min_Fields = {
  __typename?: 'song_artists_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "song_artists" */
export type Song_Artists_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "song_artists" */
export type Song_Artists_Mutation_Response = {
  __typename?: 'song_artists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Song_Artists>;
};

/** on_conflict condition type for table "song_artists" */
export type Song_Artists_On_Conflict = {
  constraint: Song_Artists_Constraint;
  update_columns?: Array<Song_Artists_Update_Column>;
  where?: InputMaybe<Song_Artists_Bool_Exp>;
};

/** Ordering options when selecting data from "song_artists". */
export type Song_Artists_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<People_Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  song?: InputMaybe<Songs_Order_By>;
  song_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: song_artists */
export type Song_Artists_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "song_artists" */
export enum Song_Artists_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  Role = 'role',
  /** column name */
  SongId = 'song_id'
}

/** input type for updating data in table "song_artists" */
export type Song_Artists_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "song_artists" */
export type Song_Artists_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Song_Artists_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Song_Artists_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "song_artists" */
export enum Song_Artists_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  Role = 'role',
  /** column name */
  SongId = 'song_id'
}

export type Song_Artists_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Song_Artists_Set_Input>;
  /** filter the rows which have to be updated */
  where: Song_Artists_Bool_Exp;
};

/** columns and relationships of "song_changes" */
export type Song_Changes = {
  __typename?: 'song_changes';
  change_description?: Maybe<Scalars['String']['output']>;
  changed_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  song: Songs;
  song_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "song_changes" */
export type Song_Changes_Aggregate = {
  __typename?: 'song_changes_aggregate';
  aggregate?: Maybe<Song_Changes_Aggregate_Fields>;
  nodes: Array<Song_Changes>;
};

export type Song_Changes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Song_Changes_Aggregate_Bool_Exp_Count>;
};

export type Song_Changes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Song_Changes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Song_Changes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "song_changes" */
export type Song_Changes_Aggregate_Fields = {
  __typename?: 'song_changes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Song_Changes_Max_Fields>;
  min?: Maybe<Song_Changes_Min_Fields>;
};


/** aggregate fields of "song_changes" */
export type Song_Changes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Song_Changes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "song_changes" */
export type Song_Changes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Song_Changes_Max_Order_By>;
  min?: InputMaybe<Song_Changes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "song_changes" */
export type Song_Changes_Arr_Rel_Insert_Input = {
  data: Array<Song_Changes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Song_Changes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "song_changes". All fields are combined with a logical 'AND'. */
export type Song_Changes_Bool_Exp = {
  _and?: InputMaybe<Array<Song_Changes_Bool_Exp>>;
  _not?: InputMaybe<Song_Changes_Bool_Exp>;
  _or?: InputMaybe<Array<Song_Changes_Bool_Exp>>;
  change_description?: InputMaybe<String_Comparison_Exp>;
  changed_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  song?: InputMaybe<Songs_Bool_Exp>;
  song_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "song_changes" */
export enum Song_Changes_Constraint {
  /** unique or primary key constraint on columns "id" */
  SongChangesPkey = 'song_changes_pkey'
}

/** input type for inserting data into table "song_changes" */
export type Song_Changes_Insert_Input = {
  change_description?: InputMaybe<Scalars['String']['input']>;
  changed_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  song?: InputMaybe<Songs_Obj_Rel_Insert_Input>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Song_Changes_Max_Fields = {
  __typename?: 'song_changes_max_fields';
  change_description?: Maybe<Scalars['String']['output']>;
  changed_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "song_changes" */
export type Song_Changes_Max_Order_By = {
  change_description?: InputMaybe<Order_By>;
  changed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Song_Changes_Min_Fields = {
  __typename?: 'song_changes_min_fields';
  change_description?: Maybe<Scalars['String']['output']>;
  changed_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "song_changes" */
export type Song_Changes_Min_Order_By = {
  change_description?: InputMaybe<Order_By>;
  changed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "song_changes" */
export type Song_Changes_Mutation_Response = {
  __typename?: 'song_changes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Song_Changes>;
};

/** on_conflict condition type for table "song_changes" */
export type Song_Changes_On_Conflict = {
  constraint: Song_Changes_Constraint;
  update_columns?: Array<Song_Changes_Update_Column>;
  where?: InputMaybe<Song_Changes_Bool_Exp>;
};

/** Ordering options when selecting data from "song_changes". */
export type Song_Changes_Order_By = {
  change_description?: InputMaybe<Order_By>;
  changed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  song?: InputMaybe<Songs_Order_By>;
  song_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: song_changes */
export type Song_Changes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "song_changes" */
export enum Song_Changes_Select_Column {
  /** column name */
  ChangeDescription = 'change_description',
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  Id = 'id',
  /** column name */
  SongId = 'song_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "song_changes" */
export type Song_Changes_Set_Input = {
  change_description?: InputMaybe<Scalars['String']['input']>;
  changed_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "song_changes" */
export type Song_Changes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Song_Changes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Song_Changes_Stream_Cursor_Value_Input = {
  change_description?: InputMaybe<Scalars['String']['input']>;
  changed_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "song_changes" */
export enum Song_Changes_Update_Column {
  /** column name */
  ChangeDescription = 'change_description',
  /** column name */
  ChangedAt = 'changed_at',
  /** column name */
  Id = 'id',
  /** column name */
  SongId = 'song_id',
  /** column name */
  UserId = 'user_id'
}

export type Song_Changes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Song_Changes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Song_Changes_Bool_Exp;
};

/** columns and relationships of "song_favourites" */
export type Song_Favourites = {
  __typename?: 'song_favourites';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  song: Songs;
  song_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "song_favourites" */
export type Song_Favourites_Aggregate = {
  __typename?: 'song_favourites_aggregate';
  aggregate?: Maybe<Song_Favourites_Aggregate_Fields>;
  nodes: Array<Song_Favourites>;
};

export type Song_Favourites_Aggregate_Bool_Exp = {
  count?: InputMaybe<Song_Favourites_Aggregate_Bool_Exp_Count>;
};

export type Song_Favourites_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Song_Favourites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Song_Favourites_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "song_favourites" */
export type Song_Favourites_Aggregate_Fields = {
  __typename?: 'song_favourites_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Song_Favourites_Max_Fields>;
  min?: Maybe<Song_Favourites_Min_Fields>;
};


/** aggregate fields of "song_favourites" */
export type Song_Favourites_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Song_Favourites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "song_favourites" */
export type Song_Favourites_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Song_Favourites_Max_Order_By>;
  min?: InputMaybe<Song_Favourites_Min_Order_By>;
};

/** input type for inserting array relation for remote table "song_favourites" */
export type Song_Favourites_Arr_Rel_Insert_Input = {
  data: Array<Song_Favourites_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Song_Favourites_On_Conflict>;
};

/** Boolean expression to filter rows from the table "song_favourites". All fields are combined with a logical 'AND'. */
export type Song_Favourites_Bool_Exp = {
  _and?: InputMaybe<Array<Song_Favourites_Bool_Exp>>;
  _not?: InputMaybe<Song_Favourites_Bool_Exp>;
  _or?: InputMaybe<Array<Song_Favourites_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  song?: InputMaybe<Songs_Bool_Exp>;
  song_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "song_favourites" */
export enum Song_Favourites_Constraint {
  /** unique or primary key constraint on columns "id" */
  SongFavouritesPkey = 'song_favourites_pkey',
  /** unique or primary key constraint on columns "user_id", "song_id" */
  SongFavouritesSongIdUserIdKey = 'song_favourites_song_id_user_id_key'
}

/** input type for inserting data into table "song_favourites" */
export type Song_Favourites_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  song?: InputMaybe<Songs_Obj_Rel_Insert_Input>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Song_Favourites_Max_Fields = {
  __typename?: 'song_favourites_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "song_favourites" */
export type Song_Favourites_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Song_Favourites_Min_Fields = {
  __typename?: 'song_favourites_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "song_favourites" */
export type Song_Favourites_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "song_favourites" */
export type Song_Favourites_Mutation_Response = {
  __typename?: 'song_favourites_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Song_Favourites>;
};

/** on_conflict condition type for table "song_favourites" */
export type Song_Favourites_On_Conflict = {
  constraint: Song_Favourites_Constraint;
  update_columns?: Array<Song_Favourites_Update_Column>;
  where?: InputMaybe<Song_Favourites_Bool_Exp>;
};

/** Ordering options when selecting data from "song_favourites". */
export type Song_Favourites_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  song?: InputMaybe<Songs_Order_By>;
  song_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: song_favourites */
export type Song_Favourites_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "song_favourites" */
export enum Song_Favourites_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SongId = 'song_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "song_favourites" */
export type Song_Favourites_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "song_favourites" */
export type Song_Favourites_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Song_Favourites_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Song_Favourites_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "song_favourites" */
export enum Song_Favourites_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SongId = 'song_id',
  /** column name */
  UserId = 'user_id'
}

export type Song_Favourites_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Song_Favourites_Set_Input>;
  /** filter the rows which have to be updated */
  where: Song_Favourites_Bool_Exp;
};

/** columns and relationships of "song_genres" */
export type Song_Genres = {
  __typename?: 'song_genres';
  /** An object relationship */
  genre: Genres;
  genre_id: Scalars['uuid']['output'];
  /** An object relationship */
  song: Songs;
  song_id: Scalars['uuid']['output'];
};

/** aggregated selection of "song_genres" */
export type Song_Genres_Aggregate = {
  __typename?: 'song_genres_aggregate';
  aggregate?: Maybe<Song_Genres_Aggregate_Fields>;
  nodes: Array<Song_Genres>;
};

export type Song_Genres_Aggregate_Bool_Exp = {
  count?: InputMaybe<Song_Genres_Aggregate_Bool_Exp_Count>;
};

export type Song_Genres_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Song_Genres_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Song_Genres_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "song_genres" */
export type Song_Genres_Aggregate_Fields = {
  __typename?: 'song_genres_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Song_Genres_Max_Fields>;
  min?: Maybe<Song_Genres_Min_Fields>;
};


/** aggregate fields of "song_genres" */
export type Song_Genres_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Song_Genres_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "song_genres" */
export type Song_Genres_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Song_Genres_Max_Order_By>;
  min?: InputMaybe<Song_Genres_Min_Order_By>;
};

/** input type for inserting array relation for remote table "song_genres" */
export type Song_Genres_Arr_Rel_Insert_Input = {
  data: Array<Song_Genres_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Song_Genres_On_Conflict>;
};

/** Boolean expression to filter rows from the table "song_genres". All fields are combined with a logical 'AND'. */
export type Song_Genres_Bool_Exp = {
  _and?: InputMaybe<Array<Song_Genres_Bool_Exp>>;
  _not?: InputMaybe<Song_Genres_Bool_Exp>;
  _or?: InputMaybe<Array<Song_Genres_Bool_Exp>>;
  genre?: InputMaybe<Genres_Bool_Exp>;
  genre_id?: InputMaybe<Uuid_Comparison_Exp>;
  song?: InputMaybe<Songs_Bool_Exp>;
  song_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "song_genres" */
export enum Song_Genres_Constraint {
  /** unique or primary key constraint on columns "genre_id", "song_id" */
  SongGenresPkey = 'song_genres_pkey'
}

/** input type for inserting data into table "song_genres" */
export type Song_Genres_Insert_Input = {
  genre?: InputMaybe<Genres_Obj_Rel_Insert_Input>;
  genre_id?: InputMaybe<Scalars['uuid']['input']>;
  song?: InputMaybe<Songs_Obj_Rel_Insert_Input>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Song_Genres_Max_Fields = {
  __typename?: 'song_genres_max_fields';
  genre_id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "song_genres" */
export type Song_Genres_Max_Order_By = {
  genre_id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Song_Genres_Min_Fields = {
  __typename?: 'song_genres_min_fields';
  genre_id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "song_genres" */
export type Song_Genres_Min_Order_By = {
  genre_id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "song_genres" */
export type Song_Genres_Mutation_Response = {
  __typename?: 'song_genres_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Song_Genres>;
};

/** on_conflict condition type for table "song_genres" */
export type Song_Genres_On_Conflict = {
  constraint: Song_Genres_Constraint;
  update_columns?: Array<Song_Genres_Update_Column>;
  where?: InputMaybe<Song_Genres_Bool_Exp>;
};

/** Ordering options when selecting data from "song_genres". */
export type Song_Genres_Order_By = {
  genre?: InputMaybe<Genres_Order_By>;
  genre_id?: InputMaybe<Order_By>;
  song?: InputMaybe<Songs_Order_By>;
  song_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: song_genres */
export type Song_Genres_Pk_Columns_Input = {
  genre_id: Scalars['uuid']['input'];
  song_id: Scalars['uuid']['input'];
};

/** select columns of table "song_genres" */
export enum Song_Genres_Select_Column {
  /** column name */
  GenreId = 'genre_id',
  /** column name */
  SongId = 'song_id'
}

/** input type for updating data in table "song_genres" */
export type Song_Genres_Set_Input = {
  genre_id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "song_genres" */
export type Song_Genres_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Song_Genres_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Song_Genres_Stream_Cursor_Value_Input = {
  genre_id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "song_genres" */
export enum Song_Genres_Update_Column {
  /** column name */
  GenreId = 'genre_id',
  /** column name */
  SongId = 'song_id'
}

export type Song_Genres_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Song_Genres_Set_Input>;
  /** filter the rows which have to be updated */
  where: Song_Genres_Bool_Exp;
};

/** columns and relationships of "song_keywords" */
export type Song_Keywords = {
  __typename?: 'song_keywords';
  /** An object relationship */
  keyword: Keywords;
  keyword_id: Scalars['uuid']['output'];
  /** An object relationship */
  song: Songs;
  song_id: Scalars['uuid']['output'];
};

/** aggregated selection of "song_keywords" */
export type Song_Keywords_Aggregate = {
  __typename?: 'song_keywords_aggregate';
  aggregate?: Maybe<Song_Keywords_Aggregate_Fields>;
  nodes: Array<Song_Keywords>;
};

export type Song_Keywords_Aggregate_Bool_Exp = {
  count?: InputMaybe<Song_Keywords_Aggregate_Bool_Exp_Count>;
};

export type Song_Keywords_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Song_Keywords_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Song_Keywords_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "song_keywords" */
export type Song_Keywords_Aggregate_Fields = {
  __typename?: 'song_keywords_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Song_Keywords_Max_Fields>;
  min?: Maybe<Song_Keywords_Min_Fields>;
};


/** aggregate fields of "song_keywords" */
export type Song_Keywords_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Song_Keywords_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "song_keywords" */
export type Song_Keywords_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Song_Keywords_Max_Order_By>;
  min?: InputMaybe<Song_Keywords_Min_Order_By>;
};

/** input type for inserting array relation for remote table "song_keywords" */
export type Song_Keywords_Arr_Rel_Insert_Input = {
  data: Array<Song_Keywords_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Song_Keywords_On_Conflict>;
};

/** Boolean expression to filter rows from the table "song_keywords". All fields are combined with a logical 'AND'. */
export type Song_Keywords_Bool_Exp = {
  _and?: InputMaybe<Array<Song_Keywords_Bool_Exp>>;
  _not?: InputMaybe<Song_Keywords_Bool_Exp>;
  _or?: InputMaybe<Array<Song_Keywords_Bool_Exp>>;
  keyword?: InputMaybe<Keywords_Bool_Exp>;
  keyword_id?: InputMaybe<Uuid_Comparison_Exp>;
  song?: InputMaybe<Songs_Bool_Exp>;
  song_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "song_keywords" */
export enum Song_Keywords_Constraint {
  /** unique or primary key constraint on columns "keyword_id", "song_id" */
  SongKeywordsPkey = 'song_keywords_pkey'
}

/** input type for inserting data into table "song_keywords" */
export type Song_Keywords_Insert_Input = {
  keyword?: InputMaybe<Keywords_Obj_Rel_Insert_Input>;
  keyword_id?: InputMaybe<Scalars['uuid']['input']>;
  song?: InputMaybe<Songs_Obj_Rel_Insert_Input>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Song_Keywords_Max_Fields = {
  __typename?: 'song_keywords_max_fields';
  keyword_id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "song_keywords" */
export type Song_Keywords_Max_Order_By = {
  keyword_id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Song_Keywords_Min_Fields = {
  __typename?: 'song_keywords_min_fields';
  keyword_id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "song_keywords" */
export type Song_Keywords_Min_Order_By = {
  keyword_id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "song_keywords" */
export type Song_Keywords_Mutation_Response = {
  __typename?: 'song_keywords_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Song_Keywords>;
};

/** on_conflict condition type for table "song_keywords" */
export type Song_Keywords_On_Conflict = {
  constraint: Song_Keywords_Constraint;
  update_columns?: Array<Song_Keywords_Update_Column>;
  where?: InputMaybe<Song_Keywords_Bool_Exp>;
};

/** Ordering options when selecting data from "song_keywords". */
export type Song_Keywords_Order_By = {
  keyword?: InputMaybe<Keywords_Order_By>;
  keyword_id?: InputMaybe<Order_By>;
  song?: InputMaybe<Songs_Order_By>;
  song_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: song_keywords */
export type Song_Keywords_Pk_Columns_Input = {
  keyword_id: Scalars['uuid']['input'];
  song_id: Scalars['uuid']['input'];
};

/** select columns of table "song_keywords" */
export enum Song_Keywords_Select_Column {
  /** column name */
  KeywordId = 'keyword_id',
  /** column name */
  SongId = 'song_id'
}

/** input type for updating data in table "song_keywords" */
export type Song_Keywords_Set_Input = {
  keyword_id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "song_keywords" */
export type Song_Keywords_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Song_Keywords_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Song_Keywords_Stream_Cursor_Value_Input = {
  keyword_id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "song_keywords" */
export enum Song_Keywords_Update_Column {
  /** column name */
  KeywordId = 'keyword_id',
  /** column name */
  SongId = 'song_id'
}

export type Song_Keywords_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Song_Keywords_Set_Input>;
  /** filter the rows which have to be updated */
  where: Song_Keywords_Bool_Exp;
};

/** columns and relationships of "song_listen_later" */
export type Song_Listen_Later = {
  __typename?: 'song_listen_later';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  song: Songs;
  song_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "song_listen_later" */
export type Song_Listen_Later_Aggregate = {
  __typename?: 'song_listen_later_aggregate';
  aggregate?: Maybe<Song_Listen_Later_Aggregate_Fields>;
  nodes: Array<Song_Listen_Later>;
};

export type Song_Listen_Later_Aggregate_Bool_Exp = {
  count?: InputMaybe<Song_Listen_Later_Aggregate_Bool_Exp_Count>;
};

export type Song_Listen_Later_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Song_Listen_Later_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Song_Listen_Later_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "song_listen_later" */
export type Song_Listen_Later_Aggregate_Fields = {
  __typename?: 'song_listen_later_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Song_Listen_Later_Max_Fields>;
  min?: Maybe<Song_Listen_Later_Min_Fields>;
};


/** aggregate fields of "song_listen_later" */
export type Song_Listen_Later_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Song_Listen_Later_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "song_listen_later" */
export type Song_Listen_Later_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Song_Listen_Later_Max_Order_By>;
  min?: InputMaybe<Song_Listen_Later_Min_Order_By>;
};

/** input type for inserting array relation for remote table "song_listen_later" */
export type Song_Listen_Later_Arr_Rel_Insert_Input = {
  data: Array<Song_Listen_Later_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Song_Listen_Later_On_Conflict>;
};

/** Boolean expression to filter rows from the table "song_listen_later". All fields are combined with a logical 'AND'. */
export type Song_Listen_Later_Bool_Exp = {
  _and?: InputMaybe<Array<Song_Listen_Later_Bool_Exp>>;
  _not?: InputMaybe<Song_Listen_Later_Bool_Exp>;
  _or?: InputMaybe<Array<Song_Listen_Later_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  song?: InputMaybe<Songs_Bool_Exp>;
  song_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "song_listen_later" */
export enum Song_Listen_Later_Constraint {
  /** unique or primary key constraint on columns "id" */
  SongListenLaterPkey = 'song_listen_later_pkey',
  /** unique or primary key constraint on columns "user_id", "song_id" */
  SongListenLaterSongIdUserIdKey = 'song_listen_later_song_id_user_id_key'
}

/** input type for inserting data into table "song_listen_later" */
export type Song_Listen_Later_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  song?: InputMaybe<Songs_Obj_Rel_Insert_Input>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Song_Listen_Later_Max_Fields = {
  __typename?: 'song_listen_later_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "song_listen_later" */
export type Song_Listen_Later_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Song_Listen_Later_Min_Fields = {
  __typename?: 'song_listen_later_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "song_listen_later" */
export type Song_Listen_Later_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "song_listen_later" */
export type Song_Listen_Later_Mutation_Response = {
  __typename?: 'song_listen_later_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Song_Listen_Later>;
};

/** on_conflict condition type for table "song_listen_later" */
export type Song_Listen_Later_On_Conflict = {
  constraint: Song_Listen_Later_Constraint;
  update_columns?: Array<Song_Listen_Later_Update_Column>;
  where?: InputMaybe<Song_Listen_Later_Bool_Exp>;
};

/** Ordering options when selecting data from "song_listen_later". */
export type Song_Listen_Later_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  song?: InputMaybe<Songs_Order_By>;
  song_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: song_listen_later */
export type Song_Listen_Later_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "song_listen_later" */
export enum Song_Listen_Later_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SongId = 'song_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "song_listen_later" */
export type Song_Listen_Later_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "song_listen_later" */
export type Song_Listen_Later_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Song_Listen_Later_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Song_Listen_Later_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "song_listen_later" */
export enum Song_Listen_Later_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SongId = 'song_id',
  /** column name */
  UserId = 'user_id'
}

export type Song_Listen_Later_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Song_Listen_Later_Set_Input>;
  /** filter the rows which have to be updated */
  where: Song_Listen_Later_Bool_Exp;
};

/** columns and relationships of "song_media" */
export type Song_Media = {
  __typename?: 'song_media';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  media_type?: Maybe<Scalars['String']['output']>;
  media_url: Scalars['String']['output'];
  song_id: Scalars['uuid']['output'];
};

/** aggregated selection of "song_media" */
export type Song_Media_Aggregate = {
  __typename?: 'song_media_aggregate';
  aggregate?: Maybe<Song_Media_Aggregate_Fields>;
  nodes: Array<Song_Media>;
};

/** aggregate fields of "song_media" */
export type Song_Media_Aggregate_Fields = {
  __typename?: 'song_media_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Song_Media_Max_Fields>;
  min?: Maybe<Song_Media_Min_Fields>;
};


/** aggregate fields of "song_media" */
export type Song_Media_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Song_Media_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "song_media". All fields are combined with a logical 'AND'. */
export type Song_Media_Bool_Exp = {
  _and?: InputMaybe<Array<Song_Media_Bool_Exp>>;
  _not?: InputMaybe<Song_Media_Bool_Exp>;
  _or?: InputMaybe<Array<Song_Media_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  media_type?: InputMaybe<String_Comparison_Exp>;
  media_url?: InputMaybe<String_Comparison_Exp>;
  song_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "song_media" */
export enum Song_Media_Constraint {
  /** unique or primary key constraint on columns "id" */
  SongMediaPkey = 'song_media_pkey'
}

/** input type for inserting data into table "song_media" */
export type Song_Media_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Song_Media_Max_Fields = {
  __typename?: 'song_media_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  media_type?: Maybe<Scalars['String']['output']>;
  media_url?: Maybe<Scalars['String']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Song_Media_Min_Fields = {
  __typename?: 'song_media_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  media_type?: Maybe<Scalars['String']['output']>;
  media_url?: Maybe<Scalars['String']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "song_media" */
export type Song_Media_Mutation_Response = {
  __typename?: 'song_media_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Song_Media>;
};

/** on_conflict condition type for table "song_media" */
export type Song_Media_On_Conflict = {
  constraint: Song_Media_Constraint;
  update_columns?: Array<Song_Media_Update_Column>;
  where?: InputMaybe<Song_Media_Bool_Exp>;
};

/** Ordering options when selecting data from "song_media". */
export type Song_Media_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: song_media */
export type Song_Media_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "song_media" */
export enum Song_Media_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  MediaUrl = 'media_url',
  /** column name */
  SongId = 'song_id'
}

/** input type for updating data in table "song_media" */
export type Song_Media_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "song_media" */
export type Song_Media_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Song_Media_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Song_Media_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Scalars['String']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "song_media" */
export enum Song_Media_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  MediaUrl = 'media_url',
  /** column name */
  SongId = 'song_id'
}

export type Song_Media_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Song_Media_Set_Input>;
  /** filter the rows which have to be updated */
  where: Song_Media_Bool_Exp;
};

/** columns and relationships of "song_ratings" */
export type Song_Ratings = {
  __typename?: 'song_ratings';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  rating: Scalars['smallint']['output'];
  /** An object relationship */
  song: Songs;
  song_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "song_ratings" */
export type Song_Ratings_Aggregate = {
  __typename?: 'song_ratings_aggregate';
  aggregate?: Maybe<Song_Ratings_Aggregate_Fields>;
  nodes: Array<Song_Ratings>;
};

export type Song_Ratings_Aggregate_Bool_Exp = {
  count?: InputMaybe<Song_Ratings_Aggregate_Bool_Exp_Count>;
};

export type Song_Ratings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Song_Ratings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Song_Ratings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "song_ratings" */
export type Song_Ratings_Aggregate_Fields = {
  __typename?: 'song_ratings_aggregate_fields';
  avg?: Maybe<Song_Ratings_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Song_Ratings_Max_Fields>;
  min?: Maybe<Song_Ratings_Min_Fields>;
  stddev?: Maybe<Song_Ratings_Stddev_Fields>;
  stddev_pop?: Maybe<Song_Ratings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Song_Ratings_Stddev_Samp_Fields>;
  sum?: Maybe<Song_Ratings_Sum_Fields>;
  var_pop?: Maybe<Song_Ratings_Var_Pop_Fields>;
  var_samp?: Maybe<Song_Ratings_Var_Samp_Fields>;
  variance?: Maybe<Song_Ratings_Variance_Fields>;
};


/** aggregate fields of "song_ratings" */
export type Song_Ratings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Song_Ratings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "song_ratings" */
export type Song_Ratings_Aggregate_Order_By = {
  avg?: InputMaybe<Song_Ratings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Song_Ratings_Max_Order_By>;
  min?: InputMaybe<Song_Ratings_Min_Order_By>;
  stddev?: InputMaybe<Song_Ratings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Song_Ratings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Song_Ratings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Song_Ratings_Sum_Order_By>;
  var_pop?: InputMaybe<Song_Ratings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Song_Ratings_Var_Samp_Order_By>;
  variance?: InputMaybe<Song_Ratings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "song_ratings" */
export type Song_Ratings_Arr_Rel_Insert_Input = {
  data: Array<Song_Ratings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Song_Ratings_On_Conflict>;
};

/** aggregate avg on columns */
export type Song_Ratings_Avg_Fields = {
  __typename?: 'song_ratings_avg_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "song_ratings" */
export type Song_Ratings_Avg_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "song_ratings". All fields are combined with a logical 'AND'. */
export type Song_Ratings_Bool_Exp = {
  _and?: InputMaybe<Array<Song_Ratings_Bool_Exp>>;
  _not?: InputMaybe<Song_Ratings_Bool_Exp>;
  _or?: InputMaybe<Array<Song_Ratings_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rating?: InputMaybe<Smallint_Comparison_Exp>;
  song?: InputMaybe<Songs_Bool_Exp>;
  song_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "song_ratings" */
export enum Song_Ratings_Constraint {
  /** unique or primary key constraint on columns "id" */
  SongRatingsPkey = 'song_ratings_pkey',
  /** unique or primary key constraint on columns "user_id", "song_id" */
  SongRatingsSongIdUserIdKey = 'song_ratings_song_id_user_id_key'
}

/** input type for incrementing numeric columns in table "song_ratings" */
export type Song_Ratings_Inc_Input = {
  rating?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "song_ratings" */
export type Song_Ratings_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['smallint']['input']>;
  song?: InputMaybe<Songs_Obj_Rel_Insert_Input>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Song_Ratings_Max_Fields = {
  __typename?: 'song_ratings_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['smallint']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "song_ratings" */
export type Song_Ratings_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Song_Ratings_Min_Fields = {
  __typename?: 'song_ratings_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['smallint']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "song_ratings" */
export type Song_Ratings_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "song_ratings" */
export type Song_Ratings_Mutation_Response = {
  __typename?: 'song_ratings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Song_Ratings>;
};

/** on_conflict condition type for table "song_ratings" */
export type Song_Ratings_On_Conflict = {
  constraint: Song_Ratings_Constraint;
  update_columns?: Array<Song_Ratings_Update_Column>;
  where?: InputMaybe<Song_Ratings_Bool_Exp>;
};

/** Ordering options when selecting data from "song_ratings". */
export type Song_Ratings_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  song?: InputMaybe<Songs_Order_By>;
  song_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: song_ratings */
export type Song_Ratings_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "song_ratings" */
export enum Song_Ratings_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Rating = 'rating',
  /** column name */
  SongId = 'song_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "song_ratings" */
export type Song_Ratings_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['smallint']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Song_Ratings_Stddev_Fields = {
  __typename?: 'song_ratings_stddev_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "song_ratings" */
export type Song_Ratings_Stddev_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Song_Ratings_Stddev_Pop_Fields = {
  __typename?: 'song_ratings_stddev_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "song_ratings" */
export type Song_Ratings_Stddev_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Song_Ratings_Stddev_Samp_Fields = {
  __typename?: 'song_ratings_stddev_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "song_ratings" */
export type Song_Ratings_Stddev_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "song_ratings" */
export type Song_Ratings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Song_Ratings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Song_Ratings_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['smallint']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Song_Ratings_Sum_Fields = {
  __typename?: 'song_ratings_sum_fields';
  rating?: Maybe<Scalars['smallint']['output']>;
};

/** order by sum() on columns of table "song_ratings" */
export type Song_Ratings_Sum_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** update columns of table "song_ratings" */
export enum Song_Ratings_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Rating = 'rating',
  /** column name */
  SongId = 'song_id',
  /** column name */
  UserId = 'user_id'
}

export type Song_Ratings_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Song_Ratings_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Song_Ratings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Song_Ratings_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Song_Ratings_Var_Pop_Fields = {
  __typename?: 'song_ratings_var_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "song_ratings" */
export type Song_Ratings_Var_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Song_Ratings_Var_Samp_Fields = {
  __typename?: 'song_ratings_var_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "song_ratings" */
export type Song_Ratings_Var_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Song_Ratings_Variance_Fields = {
  __typename?: 'song_ratings_variance_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "song_ratings" */
export type Song_Ratings_Variance_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** columns and relationships of "song_reviews" */
export type Song_Reviews = {
  __typename?: 'song_reviews';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  review?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  song: Songs;
  song_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "song_reviews" */
export type Song_Reviews_Aggregate = {
  __typename?: 'song_reviews_aggregate';
  aggregate?: Maybe<Song_Reviews_Aggregate_Fields>;
  nodes: Array<Song_Reviews>;
};

export type Song_Reviews_Aggregate_Bool_Exp = {
  count?: InputMaybe<Song_Reviews_Aggregate_Bool_Exp_Count>;
};

export type Song_Reviews_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Song_Reviews_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Song_Reviews_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "song_reviews" */
export type Song_Reviews_Aggregate_Fields = {
  __typename?: 'song_reviews_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Song_Reviews_Max_Fields>;
  min?: Maybe<Song_Reviews_Min_Fields>;
};


/** aggregate fields of "song_reviews" */
export type Song_Reviews_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Song_Reviews_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "song_reviews" */
export type Song_Reviews_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Song_Reviews_Max_Order_By>;
  min?: InputMaybe<Song_Reviews_Min_Order_By>;
};

/** input type for inserting array relation for remote table "song_reviews" */
export type Song_Reviews_Arr_Rel_Insert_Input = {
  data: Array<Song_Reviews_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Song_Reviews_On_Conflict>;
};

/** Boolean expression to filter rows from the table "song_reviews". All fields are combined with a logical 'AND'. */
export type Song_Reviews_Bool_Exp = {
  _and?: InputMaybe<Array<Song_Reviews_Bool_Exp>>;
  _not?: InputMaybe<Song_Reviews_Bool_Exp>;
  _or?: InputMaybe<Array<Song_Reviews_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  review?: InputMaybe<String_Comparison_Exp>;
  song?: InputMaybe<Songs_Bool_Exp>;
  song_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "song_reviews" */
export enum Song_Reviews_Constraint {
  /** unique or primary key constraint on columns "id" */
  SongReviewsPkey = 'song_reviews_pkey'
}

/** input type for inserting data into table "song_reviews" */
export type Song_Reviews_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  song?: InputMaybe<Songs_Obj_Rel_Insert_Input>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Song_Reviews_Max_Fields = {
  __typename?: 'song_reviews_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "song_reviews" */
export type Song_Reviews_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  review?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Song_Reviews_Min_Fields = {
  __typename?: 'song_reviews_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  song_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "song_reviews" */
export type Song_Reviews_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  review?: InputMaybe<Order_By>;
  song_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "song_reviews" */
export type Song_Reviews_Mutation_Response = {
  __typename?: 'song_reviews_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Song_Reviews>;
};

/** on_conflict condition type for table "song_reviews" */
export type Song_Reviews_On_Conflict = {
  constraint: Song_Reviews_Constraint;
  update_columns?: Array<Song_Reviews_Update_Column>;
  where?: InputMaybe<Song_Reviews_Bool_Exp>;
};

/** Ordering options when selecting data from "song_reviews". */
export type Song_Reviews_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  review?: InputMaybe<Order_By>;
  song?: InputMaybe<Songs_Order_By>;
  song_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: song_reviews */
export type Song_Reviews_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "song_reviews" */
export enum Song_Reviews_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Review = 'review',
  /** column name */
  SongId = 'song_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "song_reviews" */
export type Song_Reviews_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "song_reviews" */
export type Song_Reviews_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Song_Reviews_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Song_Reviews_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  song_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "song_reviews" */
export enum Song_Reviews_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Review = 'review',
  /** column name */
  SongId = 'song_id',
  /** column name */
  UserId = 'user_id'
}

export type Song_Reviews_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Song_Reviews_Set_Input>;
  /** filter the rows which have to be updated */
  where: Song_Reviews_Bool_Exp;
};

/** columns and relationships of "songs" */
export type Songs = {
  __typename?: 'songs';
  album?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  album_songs: Array<Album_Songs>;
  /** An aggregate relationship */
  album_songs_aggregate: Album_Songs_Aggregate;
  artwork?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  duration?: Maybe<Scalars['interval']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  movie_soundtracks: Array<Movie_Soundtrack>;
  /** An aggregate relationship */
  movie_soundtracks_aggregate: Movie_Soundtrack_Aggregate;
  release_date?: Maybe<Scalars['date']['output']>;
  /** An array relationship */
  song_artists: Array<Song_Artists>;
  /** An aggregate relationship */
  song_artists_aggregate: Song_Artists_Aggregate;
  /** An array relationship */
  song_changes: Array<Song_Changes>;
  /** An aggregate relationship */
  song_changes_aggregate: Song_Changes_Aggregate;
  /** An array relationship */
  song_favourites: Array<Song_Favourites>;
  /** An aggregate relationship */
  song_favourites_aggregate: Song_Favourites_Aggregate;
  /** An array relationship */
  song_genres: Array<Song_Genres>;
  /** An aggregate relationship */
  song_genres_aggregate: Song_Genres_Aggregate;
  /** An array relationship */
  song_keywords: Array<Song_Keywords>;
  /** An aggregate relationship */
  song_keywords_aggregate: Song_Keywords_Aggregate;
  /** An array relationship */
  song_listen_laters: Array<Song_Listen_Later>;
  /** An aggregate relationship */
  song_listen_laters_aggregate: Song_Listen_Later_Aggregate;
  /** An array relationship */
  song_ratings: Array<Song_Ratings>;
  /** An aggregate relationship */
  song_ratings_aggregate: Song_Ratings_Aggregate;
  /** An array relationship */
  song_reviews: Array<Song_Reviews>;
  /** An aggregate relationship */
  song_reviews_aggregate: Song_Reviews_Aggregate;
  title: Scalars['String']['output'];
};


/** columns and relationships of "songs" */
export type SongsAlbum_SongsArgs = {
  distinct_on?: InputMaybe<Array<Album_Songs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Songs_Order_By>>;
  where?: InputMaybe<Album_Songs_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsAlbum_Songs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Songs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Songs_Order_By>>;
  where?: InputMaybe<Album_Songs_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsMovie_SoundtracksArgs = {
  distinct_on?: InputMaybe<Array<Movie_Soundtrack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Soundtrack_Order_By>>;
  where?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsMovie_Soundtracks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Soundtrack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Soundtrack_Order_By>>;
  where?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_ArtistsArgs = {
  distinct_on?: InputMaybe<Array<Song_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Artists_Order_By>>;
  where?: InputMaybe<Song_Artists_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_Artists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Artists_Order_By>>;
  where?: InputMaybe<Song_Artists_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Song_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Changes_Order_By>>;
  where?: InputMaybe<Song_Changes_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Changes_Order_By>>;
  where?: InputMaybe<Song_Changes_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_FavouritesArgs = {
  distinct_on?: InputMaybe<Array<Song_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Favourites_Order_By>>;
  where?: InputMaybe<Song_Favourites_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_Favourites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Favourites_Order_By>>;
  where?: InputMaybe<Song_Favourites_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_GenresArgs = {
  distinct_on?: InputMaybe<Array<Song_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Genres_Order_By>>;
  where?: InputMaybe<Song_Genres_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_Genres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Genres_Order_By>>;
  where?: InputMaybe<Song_Genres_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_KeywordsArgs = {
  distinct_on?: InputMaybe<Array<Song_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Keywords_Order_By>>;
  where?: InputMaybe<Song_Keywords_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_Keywords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Keywords_Order_By>>;
  where?: InputMaybe<Song_Keywords_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_Listen_LatersArgs = {
  distinct_on?: InputMaybe<Array<Song_Listen_Later_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Listen_Later_Order_By>>;
  where?: InputMaybe<Song_Listen_Later_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_Listen_Laters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Listen_Later_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Listen_Later_Order_By>>;
  where?: InputMaybe<Song_Listen_Later_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Song_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Ratings_Order_By>>;
  where?: InputMaybe<Song_Ratings_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Ratings_Order_By>>;
  where?: InputMaybe<Song_Ratings_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_ReviewsArgs = {
  distinct_on?: InputMaybe<Array<Song_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Reviews_Order_By>>;
  where?: InputMaybe<Song_Reviews_Bool_Exp>;
};


/** columns and relationships of "songs" */
export type SongsSong_Reviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Reviews_Order_By>>;
  where?: InputMaybe<Song_Reviews_Bool_Exp>;
};

/** aggregated selection of "songs" */
export type Songs_Aggregate = {
  __typename?: 'songs_aggregate';
  aggregate?: Maybe<Songs_Aggregate_Fields>;
  nodes: Array<Songs>;
};

/** aggregate fields of "songs" */
export type Songs_Aggregate_Fields = {
  __typename?: 'songs_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Songs_Max_Fields>;
  min?: Maybe<Songs_Min_Fields>;
};


/** aggregate fields of "songs" */
export type Songs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Songs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "songs". All fields are combined with a logical 'AND'. */
export type Songs_Bool_Exp = {
  _and?: InputMaybe<Array<Songs_Bool_Exp>>;
  _not?: InputMaybe<Songs_Bool_Exp>;
  _or?: InputMaybe<Array<Songs_Bool_Exp>>;
  album?: InputMaybe<String_Comparison_Exp>;
  album_songs?: InputMaybe<Album_Songs_Bool_Exp>;
  album_songs_aggregate?: InputMaybe<Album_Songs_Aggregate_Bool_Exp>;
  artwork?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  duration?: InputMaybe<Interval_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie_soundtracks?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
  movie_soundtracks_aggregate?: InputMaybe<Movie_Soundtrack_Aggregate_Bool_Exp>;
  release_date?: InputMaybe<Date_Comparison_Exp>;
  song_artists?: InputMaybe<Song_Artists_Bool_Exp>;
  song_artists_aggregate?: InputMaybe<Song_Artists_Aggregate_Bool_Exp>;
  song_changes?: InputMaybe<Song_Changes_Bool_Exp>;
  song_changes_aggregate?: InputMaybe<Song_Changes_Aggregate_Bool_Exp>;
  song_favourites?: InputMaybe<Song_Favourites_Bool_Exp>;
  song_favourites_aggregate?: InputMaybe<Song_Favourites_Aggregate_Bool_Exp>;
  song_genres?: InputMaybe<Song_Genres_Bool_Exp>;
  song_genres_aggregate?: InputMaybe<Song_Genres_Aggregate_Bool_Exp>;
  song_keywords?: InputMaybe<Song_Keywords_Bool_Exp>;
  song_keywords_aggregate?: InputMaybe<Song_Keywords_Aggregate_Bool_Exp>;
  song_listen_laters?: InputMaybe<Song_Listen_Later_Bool_Exp>;
  song_listen_laters_aggregate?: InputMaybe<Song_Listen_Later_Aggregate_Bool_Exp>;
  song_ratings?: InputMaybe<Song_Ratings_Bool_Exp>;
  song_ratings_aggregate?: InputMaybe<Song_Ratings_Aggregate_Bool_Exp>;
  song_reviews?: InputMaybe<Song_Reviews_Bool_Exp>;
  song_reviews_aggregate?: InputMaybe<Song_Reviews_Aggregate_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "songs" */
export enum Songs_Constraint {
  /** unique or primary key constraint on columns "id" */
  SongsPkey = 'songs_pkey'
}

/** input type for inserting data into table "songs" */
export type Songs_Insert_Input = {
  album?: InputMaybe<Scalars['String']['input']>;
  album_songs?: InputMaybe<Album_Songs_Arr_Rel_Insert_Input>;
  artwork?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  duration?: InputMaybe<Scalars['interval']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_soundtracks?: InputMaybe<Movie_Soundtrack_Arr_Rel_Insert_Input>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  song_artists?: InputMaybe<Song_Artists_Arr_Rel_Insert_Input>;
  song_changes?: InputMaybe<Song_Changes_Arr_Rel_Insert_Input>;
  song_favourites?: InputMaybe<Song_Favourites_Arr_Rel_Insert_Input>;
  song_genres?: InputMaybe<Song_Genres_Arr_Rel_Insert_Input>;
  song_keywords?: InputMaybe<Song_Keywords_Arr_Rel_Insert_Input>;
  song_listen_laters?: InputMaybe<Song_Listen_Later_Arr_Rel_Insert_Input>;
  song_ratings?: InputMaybe<Song_Ratings_Arr_Rel_Insert_Input>;
  song_reviews?: InputMaybe<Song_Reviews_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Songs_Max_Fields = {
  __typename?: 'songs_max_fields';
  album?: Maybe<Scalars['String']['output']>;
  artwork?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  release_date?: Maybe<Scalars['date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Songs_Min_Fields = {
  __typename?: 'songs_min_fields';
  album?: Maybe<Scalars['String']['output']>;
  artwork?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  release_date?: Maybe<Scalars['date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "songs" */
export type Songs_Mutation_Response = {
  __typename?: 'songs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Songs>;
};

/** input type for inserting object relation for remote table "songs" */
export type Songs_Obj_Rel_Insert_Input = {
  data: Songs_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Songs_On_Conflict>;
};

/** on_conflict condition type for table "songs" */
export type Songs_On_Conflict = {
  constraint: Songs_Constraint;
  update_columns?: Array<Songs_Update_Column>;
  where?: InputMaybe<Songs_Bool_Exp>;
};

/** Ordering options when selecting data from "songs". */
export type Songs_Order_By = {
  album?: InputMaybe<Order_By>;
  album_songs_aggregate?: InputMaybe<Album_Songs_Aggregate_Order_By>;
  artwork?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_soundtracks_aggregate?: InputMaybe<Movie_Soundtrack_Aggregate_Order_By>;
  release_date?: InputMaybe<Order_By>;
  song_artists_aggregate?: InputMaybe<Song_Artists_Aggregate_Order_By>;
  song_changes_aggregate?: InputMaybe<Song_Changes_Aggregate_Order_By>;
  song_favourites_aggregate?: InputMaybe<Song_Favourites_Aggregate_Order_By>;
  song_genres_aggregate?: InputMaybe<Song_Genres_Aggregate_Order_By>;
  song_keywords_aggregate?: InputMaybe<Song_Keywords_Aggregate_Order_By>;
  song_listen_laters_aggregate?: InputMaybe<Song_Listen_Later_Aggregate_Order_By>;
  song_ratings_aggregate?: InputMaybe<Song_Ratings_Aggregate_Order_By>;
  song_reviews_aggregate?: InputMaybe<Song_Reviews_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: songs */
export type Songs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "songs" */
export enum Songs_Select_Column {
  /** column name */
  Album = 'album',
  /** column name */
  Artwork = 'artwork',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  ReleaseDate = 'release_date',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "songs" */
export type Songs_Set_Input = {
  album?: InputMaybe<Scalars['String']['input']>;
  artwork?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  duration?: InputMaybe<Scalars['interval']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "songs" */
export type Songs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Songs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Songs_Stream_Cursor_Value_Input = {
  album?: InputMaybe<Scalars['String']['input']>;
  artwork?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  duration?: InputMaybe<Scalars['interval']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "songs" */
export enum Songs_Update_Column {
  /** column name */
  Album = 'album',
  /** column name */
  Artwork = 'artwork',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  ReleaseDate = 'release_date',
  /** column name */
  Title = 'title'
}

export type Songs_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Songs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Songs_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  album_artists: Array<Album_Artists>;
  /** An aggregate relationship */
  album_artists_aggregate: Album_Artists_Aggregate;
  /** fetch data from the table: "album_artists" using primary key columns */
  album_artists_by_pk?: Maybe<Album_Artists>;
  /** fetch data from the table in a streaming manner: "album_artists" */
  album_artists_stream: Array<Album_Artists>;
  /** An array relationship */
  album_songs: Array<Album_Songs>;
  /** An aggregate relationship */
  album_songs_aggregate: Album_Songs_Aggregate;
  /** fetch data from the table: "album_songs" using primary key columns */
  album_songs_by_pk?: Maybe<Album_Songs>;
  /** fetch data from the table in a streaming manner: "album_songs" */
  album_songs_stream: Array<Album_Songs>;
  /** fetch data from the table: "albums" */
  albums: Array<Albums>;
  /** fetch aggregated fields from the table: "albums" */
  albums_aggregate: Albums_Aggregate;
  /** fetch data from the table: "albums" using primary key columns */
  albums_by_pk?: Maybe<Albums>;
  /** fetch data from the table in a streaming manner: "albums" */
  albums_stream: Array<Albums>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
  authRefreshTokenTypes_stream: Array<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.migrations" */
  auth_migrations: Array<Auth_Migrations>;
  /** fetch aggregated fields from the table: "auth.migrations" */
  auth_migrations_aggregate: Auth_Migrations_Aggregate;
  /** fetch data from the table: "auth.migrations" using primary key columns */
  auth_migrations_by_pk?: Maybe<Auth_Migrations>;
  /** fetch data from the table in a streaming manner: "auth.migrations" */
  auth_migrations_stream: Array<Auth_Migrations>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "genres" */
  genres: Array<Genres>;
  /** fetch aggregated fields from the table: "genres" */
  genres_aggregate: Genres_Aggregate;
  /** fetch data from the table: "genres" using primary key columns */
  genres_by_pk?: Maybe<Genres>;
  /** fetch data from the table in a streaming manner: "genres" */
  genres_stream: Array<Genres>;
  /** fetch data from the table: "keywords" */
  keywords: Array<Keywords>;
  /** fetch aggregated fields from the table: "keywords" */
  keywords_aggregate: Keywords_Aggregate;
  /** fetch data from the table: "keywords" using primary key columns */
  keywords_by_pk?: Maybe<Keywords>;
  /** fetch data from the table in a streaming manner: "keywords" */
  keywords_stream: Array<Keywords>;
  /** An array relationship */
  movie_alternative_titles: Array<Movie_Alternative_Titles>;
  /** An aggregate relationship */
  movie_alternative_titles_aggregate: Movie_Alternative_Titles_Aggregate;
  /** fetch data from the table: "movie_alternative_titles" using primary key columns */
  movie_alternative_titles_by_pk?: Maybe<Movie_Alternative_Titles>;
  /** fetch data from the table in a streaming manner: "movie_alternative_titles" */
  movie_alternative_titles_stream: Array<Movie_Alternative_Titles>;
  /** fetch data from the table: "movie_cast" */
  movie_cast: Array<Movie_Cast>;
  /** fetch aggregated fields from the table: "movie_cast" */
  movie_cast_aggregate: Movie_Cast_Aggregate;
  /** fetch data from the table: "movie_cast" using primary key columns */
  movie_cast_by_pk?: Maybe<Movie_Cast>;
  /** fetch data from the table in a streaming manner: "movie_cast" */
  movie_cast_stream: Array<Movie_Cast>;
  /** An array relationship */
  movie_changes: Array<Movie_Changes>;
  /** An aggregate relationship */
  movie_changes_aggregate: Movie_Changes_Aggregate;
  /** fetch data from the table: "movie_changes" using primary key columns */
  movie_changes_by_pk?: Maybe<Movie_Changes>;
  /** fetch data from the table in a streaming manner: "movie_changes" */
  movie_changes_stream: Array<Movie_Changes>;
  /** fetch data from the table: "movie_crew" */
  movie_crew: Array<Movie_Crew>;
  /** fetch aggregated fields from the table: "movie_crew" */
  movie_crew_aggregate: Movie_Crew_Aggregate;
  /** fetch data from the table: "movie_crew" using primary key columns */
  movie_crew_by_pk?: Maybe<Movie_Crew>;
  /** fetch data from the table in a streaming manner: "movie_crew" */
  movie_crew_stream: Array<Movie_Crew>;
  /** An array relationship */
  movie_favourites: Array<Movie_Favourites>;
  /** An aggregate relationship */
  movie_favourites_aggregate: Movie_Favourites_Aggregate;
  /** fetch data from the table: "movie_favourites" using primary key columns */
  movie_favourites_by_pk?: Maybe<Movie_Favourites>;
  /** fetch data from the table in a streaming manner: "movie_favourites" */
  movie_favourites_stream: Array<Movie_Favourites>;
  /** An array relationship */
  movie_genres: Array<Movie_Genres>;
  /** An aggregate relationship */
  movie_genres_aggregate: Movie_Genres_Aggregate;
  /** fetch data from the table: "movie_genres" using primary key columns */
  movie_genres_by_pk?: Maybe<Movie_Genres>;
  /** fetch data from the table in a streaming manner: "movie_genres" */
  movie_genres_stream: Array<Movie_Genres>;
  /** An array relationship */
  movie_keywords: Array<Movie_Keywords>;
  /** An aggregate relationship */
  movie_keywords_aggregate: Movie_Keywords_Aggregate;
  /** fetch data from the table: "movie_keywords" using primary key columns */
  movie_keywords_by_pk?: Maybe<Movie_Keywords>;
  /** fetch data from the table in a streaming manner: "movie_keywords" */
  movie_keywords_stream: Array<Movie_Keywords>;
  /** An array relationship */
  movie_media: Array<Movie_Media>;
  /** An aggregate relationship */
  movie_media_aggregate: Movie_Media_Aggregate;
  /** fetch data from the table: "movie_media" using primary key columns */
  movie_media_by_pk?: Maybe<Movie_Media>;
  /** fetch data from the table in a streaming manner: "movie_media" */
  movie_media_stream: Array<Movie_Media>;
  /** An array relationship */
  movie_production_companies: Array<Movie_Production_Companies>;
  /** An aggregate relationship */
  movie_production_companies_aggregate: Movie_Production_Companies_Aggregate;
  /** fetch data from the table: "movie_production_companies" using primary key columns */
  movie_production_companies_by_pk?: Maybe<Movie_Production_Companies>;
  /** fetch data from the table in a streaming manner: "movie_production_companies" */
  movie_production_companies_stream: Array<Movie_Production_Companies>;
  /** An array relationship */
  movie_production_countries: Array<Movie_Production_Countries>;
  /** An aggregate relationship */
  movie_production_countries_aggregate: Movie_Production_Countries_Aggregate;
  /** fetch data from the table: "movie_production_countries" using primary key columns */
  movie_production_countries_by_pk?: Maybe<Movie_Production_Countries>;
  /** fetch data from the table in a streaming manner: "movie_production_countries" */
  movie_production_countries_stream: Array<Movie_Production_Countries>;
  /** An array relationship */
  movie_ratings: Array<Movie_Ratings>;
  /** An aggregate relationship */
  movie_ratings_aggregate: Movie_Ratings_Aggregate;
  /** fetch data from the table: "movie_ratings" using primary key columns */
  movie_ratings_by_pk?: Maybe<Movie_Ratings>;
  /** fetch data from the table in a streaming manner: "movie_ratings" */
  movie_ratings_stream: Array<Movie_Ratings>;
  /** An array relationship */
  movie_reviews: Array<Movie_Reviews>;
  /** An aggregate relationship */
  movie_reviews_aggregate: Movie_Reviews_Aggregate;
  /** fetch data from the table: "movie_reviews" using primary key columns */
  movie_reviews_by_pk?: Maybe<Movie_Reviews>;
  /** fetch data from the table in a streaming manner: "movie_reviews" */
  movie_reviews_stream: Array<Movie_Reviews>;
  /** fetch data from the table: "movie_soundtrack" */
  movie_soundtrack: Array<Movie_Soundtrack>;
  /** fetch aggregated fields from the table: "movie_soundtrack" */
  movie_soundtrack_aggregate: Movie_Soundtrack_Aggregate;
  /** fetch data from the table: "movie_soundtrack" using primary key columns */
  movie_soundtrack_by_pk?: Maybe<Movie_Soundtrack>;
  /** fetch data from the table in a streaming manner: "movie_soundtrack" */
  movie_soundtrack_stream: Array<Movie_Soundtrack>;
  /** fetch data from the table: "movie_watchlist" */
  movie_watchlist: Array<Movie_Watchlist>;
  /** fetch aggregated fields from the table: "movie_watchlist" */
  movie_watchlist_aggregate: Movie_Watchlist_Aggregate;
  /** fetch data from the table: "movie_watchlist" using primary key columns */
  movie_watchlist_by_pk?: Maybe<Movie_Watchlist>;
  /** fetch data from the table in a streaming manner: "movie_watchlist" */
  movie_watchlist_stream: Array<Movie_Watchlist>;
  /** fetch data from the table: "movies" */
  movies: Array<Movies>;
  /** fetch aggregated fields from the table: "movies" */
  movies_aggregate: Movies_Aggregate;
  /** fetch data from the table: "movies" using primary key columns */
  movies_by_pk?: Maybe<Movies>;
  /** fetch data from the table in a streaming manner: "movies" */
  movies_stream: Array<Movies>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table in a streaming manner: "notifications" */
  notifications_stream: Array<Notifications>;
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  people_aggregate: People_Aggregate;
  /** fetch data from the table: "people" using primary key columns */
  people_by_pk?: Maybe<People>;
  /** fetch data from the table in a streaming manner: "people" */
  people_stream: Array<People>;
  /** An array relationship */
  person_changes: Array<Person_Changes>;
  /** An aggregate relationship */
  person_changes_aggregate: Person_Changes_Aggregate;
  /** fetch data from the table: "person_changes" using primary key columns */
  person_changes_by_pk?: Maybe<Person_Changes>;
  /** fetch data from the table in a streaming manner: "person_changes" */
  person_changes_stream: Array<Person_Changes>;
  /** An array relationship */
  person_media: Array<Person_Media>;
  /** An aggregate relationship */
  person_media_aggregate: Person_Media_Aggregate;
  /** fetch data from the table: "person_media" using primary key columns */
  person_media_by_pk?: Maybe<Person_Media>;
  /** fetch data from the table in a streaming manner: "person_media" */
  person_media_stream: Array<Person_Media>;
  /** An array relationship */
  report_votes: Array<Report_Votes>;
  /** An aggregate relationship */
  report_votes_aggregate: Report_Votes_Aggregate;
  /** fetch data from the table: "report_votes" using primary key columns */
  report_votes_by_pk?: Maybe<Report_Votes>;
  /** fetch data from the table in a streaming manner: "report_votes" */
  report_votes_stream: Array<Report_Votes>;
  /** An array relationship */
  reports: Array<Reports>;
  /** An aggregate relationship */
  reports_aggregate: Reports_Aggregate;
  /** fetch data from the table: "reports" using primary key columns */
  reports_by_pk?: Maybe<Reports>;
  /** fetch data from the table in a streaming manner: "reports" */
  reports_stream: Array<Reports>;
  /** An array relationship */
  song_artists: Array<Song_Artists>;
  /** An aggregate relationship */
  song_artists_aggregate: Song_Artists_Aggregate;
  /** fetch data from the table: "song_artists" using primary key columns */
  song_artists_by_pk?: Maybe<Song_Artists>;
  /** fetch data from the table in a streaming manner: "song_artists" */
  song_artists_stream: Array<Song_Artists>;
  /** An array relationship */
  song_changes: Array<Song_Changes>;
  /** An aggregate relationship */
  song_changes_aggregate: Song_Changes_Aggregate;
  /** fetch data from the table: "song_changes" using primary key columns */
  song_changes_by_pk?: Maybe<Song_Changes>;
  /** fetch data from the table in a streaming manner: "song_changes" */
  song_changes_stream: Array<Song_Changes>;
  /** An array relationship */
  song_favourites: Array<Song_Favourites>;
  /** An aggregate relationship */
  song_favourites_aggregate: Song_Favourites_Aggregate;
  /** fetch data from the table: "song_favourites" using primary key columns */
  song_favourites_by_pk?: Maybe<Song_Favourites>;
  /** fetch data from the table in a streaming manner: "song_favourites" */
  song_favourites_stream: Array<Song_Favourites>;
  /** An array relationship */
  song_genres: Array<Song_Genres>;
  /** An aggregate relationship */
  song_genres_aggregate: Song_Genres_Aggregate;
  /** fetch data from the table: "song_genres" using primary key columns */
  song_genres_by_pk?: Maybe<Song_Genres>;
  /** fetch data from the table in a streaming manner: "song_genres" */
  song_genres_stream: Array<Song_Genres>;
  /** An array relationship */
  song_keywords: Array<Song_Keywords>;
  /** An aggregate relationship */
  song_keywords_aggregate: Song_Keywords_Aggregate;
  /** fetch data from the table: "song_keywords" using primary key columns */
  song_keywords_by_pk?: Maybe<Song_Keywords>;
  /** fetch data from the table in a streaming manner: "song_keywords" */
  song_keywords_stream: Array<Song_Keywords>;
  /** fetch data from the table: "song_listen_later" */
  song_listen_later: Array<Song_Listen_Later>;
  /** fetch aggregated fields from the table: "song_listen_later" */
  song_listen_later_aggregate: Song_Listen_Later_Aggregate;
  /** fetch data from the table: "song_listen_later" using primary key columns */
  song_listen_later_by_pk?: Maybe<Song_Listen_Later>;
  /** fetch data from the table in a streaming manner: "song_listen_later" */
  song_listen_later_stream: Array<Song_Listen_Later>;
  /** fetch data from the table: "song_media" */
  song_media: Array<Song_Media>;
  /** fetch aggregated fields from the table: "song_media" */
  song_media_aggregate: Song_Media_Aggregate;
  /** fetch data from the table: "song_media" using primary key columns */
  song_media_by_pk?: Maybe<Song_Media>;
  /** fetch data from the table in a streaming manner: "song_media" */
  song_media_stream: Array<Song_Media>;
  /** An array relationship */
  song_ratings: Array<Song_Ratings>;
  /** An aggregate relationship */
  song_ratings_aggregate: Song_Ratings_Aggregate;
  /** fetch data from the table: "song_ratings" using primary key columns */
  song_ratings_by_pk?: Maybe<Song_Ratings>;
  /** fetch data from the table in a streaming manner: "song_ratings" */
  song_ratings_stream: Array<Song_Ratings>;
  /** An array relationship */
  song_reviews: Array<Song_Reviews>;
  /** An aggregate relationship */
  song_reviews_aggregate: Song_Reviews_Aggregate;
  /** fetch data from the table: "song_reviews" using primary key columns */
  song_reviews_by_pk?: Maybe<Song_Reviews>;
  /** fetch data from the table in a streaming manner: "song_reviews" */
  song_reviews_stream: Array<Song_Reviews>;
  /** fetch data from the table: "songs" */
  songs: Array<Songs>;
  /** fetch aggregated fields from the table: "songs" */
  songs_aggregate: Songs_Aggregate;
  /** fetch data from the table: "songs" using primary key columns */
  songs_by_pk?: Maybe<Songs>;
  /** fetch data from the table in a streaming manner: "songs" */
  songs_stream: Array<Songs>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table in a streaming manner: "storage.virus" */
  virus_stream: Array<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
};


export type Subscription_RootAlbum_ArtistsArgs = {
  distinct_on?: InputMaybe<Array<Album_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Artists_Order_By>>;
  where?: InputMaybe<Album_Artists_Bool_Exp>;
};


export type Subscription_RootAlbum_Artists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Artists_Order_By>>;
  where?: InputMaybe<Album_Artists_Bool_Exp>;
};


export type Subscription_RootAlbum_Artists_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAlbum_Artists_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Album_Artists_Stream_Cursor_Input>>;
  where?: InputMaybe<Album_Artists_Bool_Exp>;
};


export type Subscription_RootAlbum_SongsArgs = {
  distinct_on?: InputMaybe<Array<Album_Songs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Songs_Order_By>>;
  where?: InputMaybe<Album_Songs_Bool_Exp>;
};


export type Subscription_RootAlbum_Songs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Album_Songs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Album_Songs_Order_By>>;
  where?: InputMaybe<Album_Songs_Bool_Exp>;
};


export type Subscription_RootAlbum_Songs_By_PkArgs = {
  album_id: Scalars['uuid']['input'];
  song_id: Scalars['uuid']['input'];
};


export type Subscription_RootAlbum_Songs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Album_Songs_Stream_Cursor_Input>>;
  where?: InputMaybe<Album_Songs_Bool_Exp>;
};


export type Subscription_RootAlbumsArgs = {
  distinct_on?: InputMaybe<Array<Albums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Albums_Order_By>>;
  where?: InputMaybe<Albums_Bool_Exp>;
};


export type Subscription_RootAlbums_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Albums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Albums_Order_By>>;
  where?: InputMaybe<Albums_Bool_Exp>;
};


export type Subscription_RootAlbums_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAlbums_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Albums_Stream_Cursor_Input>>;
  where?: InputMaybe<Albums_Bool_Exp>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRefreshTokenTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuth_MigrationsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Migrations_Order_By>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Subscription_RootAuth_Migrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Migrations_Order_By>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Subscription_RootAuth_Migrations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootAuth_Migrations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Migrations_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootGenresArgs = {
  distinct_on?: InputMaybe<Array<Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genres_Order_By>>;
  where?: InputMaybe<Genres_Bool_Exp>;
};


export type Subscription_RootGenres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genres_Order_By>>;
  where?: InputMaybe<Genres_Bool_Exp>;
};


export type Subscription_RootGenres_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGenres_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Genres_Stream_Cursor_Input>>;
  where?: InputMaybe<Genres_Bool_Exp>;
};


export type Subscription_RootKeywordsArgs = {
  distinct_on?: InputMaybe<Array<Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Keywords_Order_By>>;
  where?: InputMaybe<Keywords_Bool_Exp>;
};


export type Subscription_RootKeywords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Keywords_Order_By>>;
  where?: InputMaybe<Keywords_Bool_Exp>;
};


export type Subscription_RootKeywords_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootKeywords_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Keywords_Stream_Cursor_Input>>;
  where?: InputMaybe<Keywords_Bool_Exp>;
};


export type Subscription_RootMovie_Alternative_TitlesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Alternative_Titles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Alternative_Titles_Order_By>>;
  where?: InputMaybe<Movie_Alternative_Titles_Bool_Exp>;
};


export type Subscription_RootMovie_Alternative_Titles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Alternative_Titles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Alternative_Titles_Order_By>>;
  where?: InputMaybe<Movie_Alternative_Titles_Bool_Exp>;
};


export type Subscription_RootMovie_Alternative_Titles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Alternative_Titles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Alternative_Titles_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Alternative_Titles_Bool_Exp>;
};


export type Subscription_RootMovie_CastArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};


export type Subscription_RootMovie_Cast_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};


export type Subscription_RootMovie_Cast_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Cast_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Cast_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};


export type Subscription_RootMovie_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Changes_Order_By>>;
  where?: InputMaybe<Movie_Changes_Bool_Exp>;
};


export type Subscription_RootMovie_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Changes_Order_By>>;
  where?: InputMaybe<Movie_Changes_Bool_Exp>;
};


export type Subscription_RootMovie_Changes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Changes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Changes_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Changes_Bool_Exp>;
};


export type Subscription_RootMovie_CrewArgs = {
  distinct_on?: InputMaybe<Array<Movie_Crew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Crew_Order_By>>;
  where?: InputMaybe<Movie_Crew_Bool_Exp>;
};


export type Subscription_RootMovie_Crew_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Crew_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Crew_Order_By>>;
  where?: InputMaybe<Movie_Crew_Bool_Exp>;
};


export type Subscription_RootMovie_Crew_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Crew_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Crew_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Crew_Bool_Exp>;
};


export type Subscription_RootMovie_FavouritesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Favourites_Order_By>>;
  where?: InputMaybe<Movie_Favourites_Bool_Exp>;
};


export type Subscription_RootMovie_Favourites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Favourites_Order_By>>;
  where?: InputMaybe<Movie_Favourites_Bool_Exp>;
};


export type Subscription_RootMovie_Favourites_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Favourites_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Favourites_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Favourites_Bool_Exp>;
};


export type Subscription_RootMovie_GenresArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Genres_Order_By>>;
  where?: InputMaybe<Movie_Genres_Bool_Exp>;
};


export type Subscription_RootMovie_Genres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Genres_Order_By>>;
  where?: InputMaybe<Movie_Genres_Bool_Exp>;
};


export type Subscription_RootMovie_Genres_By_PkArgs = {
  genre_id: Scalars['uuid']['input'];
  movie_id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Genres_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Genres_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Genres_Bool_Exp>;
};


export type Subscription_RootMovie_KeywordsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Keywords_Order_By>>;
  where?: InputMaybe<Movie_Keywords_Bool_Exp>;
};


export type Subscription_RootMovie_Keywords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Keywords_Order_By>>;
  where?: InputMaybe<Movie_Keywords_Bool_Exp>;
};


export type Subscription_RootMovie_Keywords_By_PkArgs = {
  keyword_id: Scalars['uuid']['input'];
  movie_id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Keywords_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Keywords_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Keywords_Bool_Exp>;
};


export type Subscription_RootMovie_MediaArgs = {
  distinct_on?: InputMaybe<Array<Movie_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Media_Order_By>>;
  where?: InputMaybe<Movie_Media_Bool_Exp>;
};


export type Subscription_RootMovie_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Media_Order_By>>;
  where?: InputMaybe<Movie_Media_Bool_Exp>;
};


export type Subscription_RootMovie_Media_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Media_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Media_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Media_Bool_Exp>;
};


export type Subscription_RootMovie_Production_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Production_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Production_Companies_Order_By>>;
  where?: InputMaybe<Movie_Production_Companies_Bool_Exp>;
};


export type Subscription_RootMovie_Production_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Production_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Production_Companies_Order_By>>;
  where?: InputMaybe<Movie_Production_Companies_Bool_Exp>;
};


export type Subscription_RootMovie_Production_Companies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Production_Companies_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Production_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Production_Companies_Bool_Exp>;
};


export type Subscription_RootMovie_Production_CountriesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Production_Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Production_Countries_Order_By>>;
  where?: InputMaybe<Movie_Production_Countries_Bool_Exp>;
};


export type Subscription_RootMovie_Production_Countries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Production_Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Production_Countries_Order_By>>;
  where?: InputMaybe<Movie_Production_Countries_Bool_Exp>;
};


export type Subscription_RootMovie_Production_Countries_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Production_Countries_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Production_Countries_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Production_Countries_Bool_Exp>;
};


export type Subscription_RootMovie_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Ratings_Order_By>>;
  where?: InputMaybe<Movie_Ratings_Bool_Exp>;
};


export type Subscription_RootMovie_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Ratings_Order_By>>;
  where?: InputMaybe<Movie_Ratings_Bool_Exp>;
};


export type Subscription_RootMovie_Ratings_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Ratings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Ratings_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Ratings_Bool_Exp>;
};


export type Subscription_RootMovie_ReviewsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Reviews_Order_By>>;
  where?: InputMaybe<Movie_Reviews_Bool_Exp>;
};


export type Subscription_RootMovie_Reviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Reviews_Order_By>>;
  where?: InputMaybe<Movie_Reviews_Bool_Exp>;
};


export type Subscription_RootMovie_Reviews_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Reviews_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Reviews_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Reviews_Bool_Exp>;
};


export type Subscription_RootMovie_SoundtrackArgs = {
  distinct_on?: InputMaybe<Array<Movie_Soundtrack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Soundtrack_Order_By>>;
  where?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
};


export type Subscription_RootMovie_Soundtrack_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Soundtrack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Soundtrack_Order_By>>;
  where?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
};


export type Subscription_RootMovie_Soundtrack_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Soundtrack_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Soundtrack_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Soundtrack_Bool_Exp>;
};


export type Subscription_RootMovie_WatchlistArgs = {
  distinct_on?: InputMaybe<Array<Movie_Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Watchlist_Order_By>>;
  where?: InputMaybe<Movie_Watchlist_Bool_Exp>;
};


export type Subscription_RootMovie_Watchlist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Watchlist_Order_By>>;
  where?: InputMaybe<Movie_Watchlist_Bool_Exp>;
};


export type Subscription_RootMovie_Watchlist_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Watchlist_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Watchlist_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Watchlist_Bool_Exp>;
};


export type Subscription_RootMoviesArgs = {
  distinct_on?: InputMaybe<Array<Movies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movies_Order_By>>;
  where?: InputMaybe<Movies_Bool_Exp>;
};


export type Subscription_RootMovies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movies_Order_By>>;
  where?: InputMaybe<Movies_Bool_Exp>;
};


export type Subscription_RootMovies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovies_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movies_Stream_Cursor_Input>>;
  where?: InputMaybe<Movies_Bool_Exp>;
};


export type Subscription_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNotifications_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notifications_Stream_Cursor_Input>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootPeopleArgs = {
  distinct_on?: InputMaybe<Array<People_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<People_Order_By>>;
  where?: InputMaybe<People_Bool_Exp>;
};


export type Subscription_RootPeople_AggregateArgs = {
  distinct_on?: InputMaybe<Array<People_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<People_Order_By>>;
  where?: InputMaybe<People_Bool_Exp>;
};


export type Subscription_RootPeople_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPeople_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<People_Stream_Cursor_Input>>;
  where?: InputMaybe<People_Bool_Exp>;
};


export type Subscription_RootPerson_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Person_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Changes_Order_By>>;
  where?: InputMaybe<Person_Changes_Bool_Exp>;
};


export type Subscription_RootPerson_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Changes_Order_By>>;
  where?: InputMaybe<Person_Changes_Bool_Exp>;
};


export type Subscription_RootPerson_Changes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPerson_Changes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Person_Changes_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Changes_Bool_Exp>;
};


export type Subscription_RootPerson_MediaArgs = {
  distinct_on?: InputMaybe<Array<Person_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Media_Order_By>>;
  where?: InputMaybe<Person_Media_Bool_Exp>;
};


export type Subscription_RootPerson_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Media_Order_By>>;
  where?: InputMaybe<Person_Media_Bool_Exp>;
};


export type Subscription_RootPerson_Media_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPerson_Media_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Person_Media_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Media_Bool_Exp>;
};


export type Subscription_RootReport_VotesArgs = {
  distinct_on?: InputMaybe<Array<Report_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Report_Votes_Order_By>>;
  where?: InputMaybe<Report_Votes_Bool_Exp>;
};


export type Subscription_RootReport_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Report_Votes_Order_By>>;
  where?: InputMaybe<Report_Votes_Bool_Exp>;
};


export type Subscription_RootReport_Votes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootReport_Votes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Report_Votes_Stream_Cursor_Input>>;
  where?: InputMaybe<Report_Votes_Bool_Exp>;
};


export type Subscription_RootReportsArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Subscription_RootReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Subscription_RootReports_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootReports_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Reports_Stream_Cursor_Input>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


export type Subscription_RootSong_ArtistsArgs = {
  distinct_on?: InputMaybe<Array<Song_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Artists_Order_By>>;
  where?: InputMaybe<Song_Artists_Bool_Exp>;
};


export type Subscription_RootSong_Artists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Artists_Order_By>>;
  where?: InputMaybe<Song_Artists_Bool_Exp>;
};


export type Subscription_RootSong_Artists_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSong_Artists_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Song_Artists_Stream_Cursor_Input>>;
  where?: InputMaybe<Song_Artists_Bool_Exp>;
};


export type Subscription_RootSong_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Song_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Changes_Order_By>>;
  where?: InputMaybe<Song_Changes_Bool_Exp>;
};


export type Subscription_RootSong_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Changes_Order_By>>;
  where?: InputMaybe<Song_Changes_Bool_Exp>;
};


export type Subscription_RootSong_Changes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSong_Changes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Song_Changes_Stream_Cursor_Input>>;
  where?: InputMaybe<Song_Changes_Bool_Exp>;
};


export type Subscription_RootSong_FavouritesArgs = {
  distinct_on?: InputMaybe<Array<Song_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Favourites_Order_By>>;
  where?: InputMaybe<Song_Favourites_Bool_Exp>;
};


export type Subscription_RootSong_Favourites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Favourites_Order_By>>;
  where?: InputMaybe<Song_Favourites_Bool_Exp>;
};


export type Subscription_RootSong_Favourites_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSong_Favourites_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Song_Favourites_Stream_Cursor_Input>>;
  where?: InputMaybe<Song_Favourites_Bool_Exp>;
};


export type Subscription_RootSong_GenresArgs = {
  distinct_on?: InputMaybe<Array<Song_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Genres_Order_By>>;
  where?: InputMaybe<Song_Genres_Bool_Exp>;
};


export type Subscription_RootSong_Genres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Genres_Order_By>>;
  where?: InputMaybe<Song_Genres_Bool_Exp>;
};


export type Subscription_RootSong_Genres_By_PkArgs = {
  genre_id: Scalars['uuid']['input'];
  song_id: Scalars['uuid']['input'];
};


export type Subscription_RootSong_Genres_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Song_Genres_Stream_Cursor_Input>>;
  where?: InputMaybe<Song_Genres_Bool_Exp>;
};


export type Subscription_RootSong_KeywordsArgs = {
  distinct_on?: InputMaybe<Array<Song_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Keywords_Order_By>>;
  where?: InputMaybe<Song_Keywords_Bool_Exp>;
};


export type Subscription_RootSong_Keywords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Keywords_Order_By>>;
  where?: InputMaybe<Song_Keywords_Bool_Exp>;
};


export type Subscription_RootSong_Keywords_By_PkArgs = {
  keyword_id: Scalars['uuid']['input'];
  song_id: Scalars['uuid']['input'];
};


export type Subscription_RootSong_Keywords_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Song_Keywords_Stream_Cursor_Input>>;
  where?: InputMaybe<Song_Keywords_Bool_Exp>;
};


export type Subscription_RootSong_Listen_LaterArgs = {
  distinct_on?: InputMaybe<Array<Song_Listen_Later_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Listen_Later_Order_By>>;
  where?: InputMaybe<Song_Listen_Later_Bool_Exp>;
};


export type Subscription_RootSong_Listen_Later_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Listen_Later_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Listen_Later_Order_By>>;
  where?: InputMaybe<Song_Listen_Later_Bool_Exp>;
};


export type Subscription_RootSong_Listen_Later_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSong_Listen_Later_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Song_Listen_Later_Stream_Cursor_Input>>;
  where?: InputMaybe<Song_Listen_Later_Bool_Exp>;
};


export type Subscription_RootSong_MediaArgs = {
  distinct_on?: InputMaybe<Array<Song_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Media_Order_By>>;
  where?: InputMaybe<Song_Media_Bool_Exp>;
};


export type Subscription_RootSong_Media_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Media_Order_By>>;
  where?: InputMaybe<Song_Media_Bool_Exp>;
};


export type Subscription_RootSong_Media_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSong_Media_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Song_Media_Stream_Cursor_Input>>;
  where?: InputMaybe<Song_Media_Bool_Exp>;
};


export type Subscription_RootSong_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Song_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Ratings_Order_By>>;
  where?: InputMaybe<Song_Ratings_Bool_Exp>;
};


export type Subscription_RootSong_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Ratings_Order_By>>;
  where?: InputMaybe<Song_Ratings_Bool_Exp>;
};


export type Subscription_RootSong_Ratings_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSong_Ratings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Song_Ratings_Stream_Cursor_Input>>;
  where?: InputMaybe<Song_Ratings_Bool_Exp>;
};


export type Subscription_RootSong_ReviewsArgs = {
  distinct_on?: InputMaybe<Array<Song_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Reviews_Order_By>>;
  where?: InputMaybe<Song_Reviews_Bool_Exp>;
};


export type Subscription_RootSong_Reviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Reviews_Order_By>>;
  where?: InputMaybe<Song_Reviews_Bool_Exp>;
};


export type Subscription_RootSong_Reviews_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSong_Reviews_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Song_Reviews_Stream_Cursor_Input>>;
  where?: InputMaybe<Song_Reviews_Bool_Exp>;
};


export type Subscription_RootSongsArgs = {
  distinct_on?: InputMaybe<Array<Songs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Songs_Order_By>>;
  where?: InputMaybe<Songs_Bool_Exp>;
};


export type Subscription_RootSongs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Songs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Songs_Order_By>>;
  where?: InputMaybe<Songs_Bool_Exp>;
};


export type Subscription_RootSongs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSongs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Songs_Stream_Cursor_Input>>;
  where?: InputMaybe<Songs_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVirusArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVirus_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Virus_Stream_Cursor_Input>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole: Scalars['String']['output'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean']['output'];
  displayName: Scalars['String']['output'];
  email?: Maybe<Scalars['citext']['output']>;
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['uuid']['output'];
  isAnonymous: Scalars['Boolean']['output'];
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale: Scalars['String']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  /** An array relationship */
  movie_changes: Array<Movie_Changes>;
  /** An aggregate relationship */
  movie_changes_aggregate: Movie_Changes_Aggregate;
  /** An array relationship */
  movie_favourites: Array<Movie_Favourites>;
  /** An aggregate relationship */
  movie_favourites_aggregate: Movie_Favourites_Aggregate;
  /** An array relationship */
  movie_ratings: Array<Movie_Ratings>;
  /** An aggregate relationship */
  movie_ratings_aggregate: Movie_Ratings_Aggregate;
  /** An array relationship */
  movie_reviews: Array<Movie_Reviews>;
  /** An aggregate relationship */
  movie_reviews_aggregate: Movie_Reviews_Aggregate;
  /** An array relationship */
  movie_watchlists: Array<Movie_Watchlist>;
  /** An aggregate relationship */
  movie_watchlists_aggregate: Movie_Watchlist_Aggregate;
  newEmail?: Maybe<Scalars['citext']['output']>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt: Scalars['timestamptz']['output'];
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  person_changes: Array<Person_Changes>;
  /** An aggregate relationship */
  person_changes_aggregate: Person_Changes_Aggregate;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberVerified: Scalars['Boolean']['output'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  report_votes: Array<Report_Votes>;
  /** An aggregate relationship */
  report_votes_aggregate: Report_Votes_Aggregate;
  /** An array relationship */
  reports: Array<Reports>;
  /** An aggregate relationship */
  reports_aggregate: Reports_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  /** An array relationship */
  song_changes: Array<Song_Changes>;
  /** An aggregate relationship */
  song_changes_aggregate: Song_Changes_Aggregate;
  /** An array relationship */
  song_favourites: Array<Song_Favourites>;
  /** An aggregate relationship */
  song_favourites_aggregate: Song_Favourites_Aggregate;
  /** An array relationship */
  song_listen_laters: Array<Song_Listen_Later>;
  /** An aggregate relationship */
  song_listen_laters_aggregate: Song_Listen_Later_Aggregate;
  /** An array relationship */
  song_ratings: Array<Song_Ratings>;
  /** An aggregate relationship */
  song_ratings_aggregate: Song_Ratings_Aggregate;
  /** An array relationship */
  song_reviews: Array<Song_Reviews>;
  /** An aggregate relationship */
  song_reviews_aggregate: Song_Reviews_Aggregate;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt: Scalars['timestamptz']['output'];
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMovie_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Changes_Order_By>>;
  where?: InputMaybe<Movie_Changes_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMovie_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Changes_Order_By>>;
  where?: InputMaybe<Movie_Changes_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMovie_FavouritesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Favourites_Order_By>>;
  where?: InputMaybe<Movie_Favourites_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMovie_Favourites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Favourites_Order_By>>;
  where?: InputMaybe<Movie_Favourites_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMovie_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Ratings_Order_By>>;
  where?: InputMaybe<Movie_Ratings_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMovie_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Ratings_Order_By>>;
  where?: InputMaybe<Movie_Ratings_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMovie_ReviewsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Reviews_Order_By>>;
  where?: InputMaybe<Movie_Reviews_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMovie_Reviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Reviews_Order_By>>;
  where?: InputMaybe<Movie_Reviews_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMovie_WatchlistsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Watchlist_Order_By>>;
  where?: InputMaybe<Movie_Watchlist_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMovie_Watchlists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Watchlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Watchlist_Order_By>>;
  where?: InputMaybe<Movie_Watchlist_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersPerson_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Person_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Changes_Order_By>>;
  where?: InputMaybe<Person_Changes_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersPerson_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Changes_Order_By>>;
  where?: InputMaybe<Person_Changes_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersReport_VotesArgs = {
  distinct_on?: InputMaybe<Array<Report_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Report_Votes_Order_By>>;
  where?: InputMaybe<Report_Votes_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersReport_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Votes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Report_Votes_Order_By>>;
  where?: InputMaybe<Report_Votes_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersReportsArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reports_Order_By>>;
  where?: InputMaybe<Reports_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSong_ChangesArgs = {
  distinct_on?: InputMaybe<Array<Song_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Changes_Order_By>>;
  where?: InputMaybe<Song_Changes_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSong_Changes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Changes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Changes_Order_By>>;
  where?: InputMaybe<Song_Changes_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSong_FavouritesArgs = {
  distinct_on?: InputMaybe<Array<Song_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Favourites_Order_By>>;
  where?: InputMaybe<Song_Favourites_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSong_Favourites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Favourites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Favourites_Order_By>>;
  where?: InputMaybe<Song_Favourites_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSong_Listen_LatersArgs = {
  distinct_on?: InputMaybe<Array<Song_Listen_Later_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Listen_Later_Order_By>>;
  where?: InputMaybe<Song_Listen_Later_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSong_Listen_Laters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Listen_Later_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Listen_Later_Order_By>>;
  where?: InputMaybe<Song_Listen_Later_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSong_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Song_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Ratings_Order_By>>;
  where?: InputMaybe<Song_Ratings_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSong_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Ratings_Order_By>>;
  where?: InputMaybe<Song_Ratings_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSong_ReviewsArgs = {
  distinct_on?: InputMaybe<Array<Song_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Reviews_Order_By>>;
  where?: InputMaybe<Song_Reviews_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSong_Reviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Song_Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Song_Reviews_Order_By>>;
  where?: InputMaybe<Song_Reviews_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  movie_changes?: InputMaybe<Movie_Changes_Bool_Exp>;
  movie_changes_aggregate?: InputMaybe<Movie_Changes_Aggregate_Bool_Exp>;
  movie_favourites?: InputMaybe<Movie_Favourites_Bool_Exp>;
  movie_favourites_aggregate?: InputMaybe<Movie_Favourites_Aggregate_Bool_Exp>;
  movie_ratings?: InputMaybe<Movie_Ratings_Bool_Exp>;
  movie_ratings_aggregate?: InputMaybe<Movie_Ratings_Aggregate_Bool_Exp>;
  movie_reviews?: InputMaybe<Movie_Reviews_Bool_Exp>;
  movie_reviews_aggregate?: InputMaybe<Movie_Reviews_Aggregate_Bool_Exp>;
  movie_watchlists?: InputMaybe<Movie_Watchlist_Bool_Exp>;
  movie_watchlists_aggregate?: InputMaybe<Movie_Watchlist_Aggregate_Bool_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  notifications?: InputMaybe<Notifications_Bool_Exp>;
  notifications_aggregate?: InputMaybe<Notifications_Aggregate_Bool_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  person_changes?: InputMaybe<Person_Changes_Bool_Exp>;
  person_changes_aggregate?: InputMaybe<Person_Changes_Aggregate_Bool_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  report_votes?: InputMaybe<Report_Votes_Bool_Exp>;
  report_votes_aggregate?: InputMaybe<Report_Votes_Aggregate_Bool_Exp>;
  reports?: InputMaybe<Reports_Bool_Exp>;
  reports_aggregate?: InputMaybe<Reports_Aggregate_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  song_changes?: InputMaybe<Song_Changes_Bool_Exp>;
  song_changes_aggregate?: InputMaybe<Song_Changes_Aggregate_Bool_Exp>;
  song_favourites?: InputMaybe<Song_Favourites_Bool_Exp>;
  song_favourites_aggregate?: InputMaybe<Song_Favourites_Aggregate_Bool_Exp>;
  song_listen_laters?: InputMaybe<Song_Listen_Later_Bool_Exp>;
  song_listen_laters_aggregate?: InputMaybe<Song_Listen_Later_Aggregate_Bool_Exp>;
  song_ratings?: InputMaybe<Song_Ratings_Bool_Exp>;
  song_ratings_aggregate?: InputMaybe<Song_Ratings_Aggregate_Bool_Exp>;
  song_reviews?: InputMaybe<Song_Reviews_Bool_Exp>;
  song_reviews_aggregate?: InputMaybe<Song_Reviews_Aggregate_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  movie_changes?: InputMaybe<Movie_Changes_Arr_Rel_Insert_Input>;
  movie_favourites?: InputMaybe<Movie_Favourites_Arr_Rel_Insert_Input>;
  movie_ratings?: InputMaybe<Movie_Ratings_Arr_Rel_Insert_Input>;
  movie_reviews?: InputMaybe<Movie_Reviews_Arr_Rel_Insert_Input>;
  movie_watchlists?: InputMaybe<Movie_Watchlist_Arr_Rel_Insert_Input>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  notifications?: InputMaybe<Notifications_Arr_Rel_Insert_Input>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  person_changes?: InputMaybe<Person_Changes_Arr_Rel_Insert_Input>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  report_votes?: InputMaybe<Report_Votes_Arr_Rel_Insert_Input>;
  reports?: InputMaybe<Reports_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  song_changes?: InputMaybe<Song_Changes_Arr_Rel_Insert_Input>;
  song_favourites?: InputMaybe<Song_Favourites_Arr_Rel_Insert_Input>;
  song_listen_laters?: InputMaybe<Song_Listen_Later_Arr_Rel_Insert_Input>;
  song_ratings?: InputMaybe<Song_Ratings_Arr_Rel_Insert_Input>;
  song_reviews?: InputMaybe<Song_Reviews_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  movie_changes_aggregate?: InputMaybe<Movie_Changes_Aggregate_Order_By>;
  movie_favourites_aggregate?: InputMaybe<Movie_Favourites_Aggregate_Order_By>;
  movie_ratings_aggregate?: InputMaybe<Movie_Ratings_Aggregate_Order_By>;
  movie_reviews_aggregate?: InputMaybe<Movie_Reviews_Aggregate_Order_By>;
  movie_watchlists_aggregate?: InputMaybe<Movie_Watchlist_Aggregate_Order_By>;
  newEmail?: InputMaybe<Order_By>;
  notifications_aggregate?: InputMaybe<Notifications_Aggregate_Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  person_changes_aggregate?: InputMaybe<Person_Changes_Aggregate_Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  report_votes_aggregate?: InputMaybe<Report_Votes_Aggregate_Order_By>;
  reports_aggregate?: InputMaybe<Reports_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  song_changes_aggregate?: InputMaybe<Song_Changes_Aggregate_Order_By>;
  song_favourites_aggregate?: InputMaybe<Song_Favourites_Aggregate_Order_By>;
  song_listen_laters_aggregate?: InputMaybe<Song_Listen_Later_Aggregate_Order_By>;
  song_ratings_aggregate?: InputMaybe<Song_Ratings_Aggregate_Order_By>;
  song_reviews_aggregate?: InputMaybe<Song_Reviews_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "storage.virus" */
export type Virus = {
  __typename?: 'virus';
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  file: Files;
  fileId: Scalars['uuid']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  userSession: Scalars['jsonb']['output'];
  virus: Scalars['String']['output'];
};


/** columns and relationships of "storage.virus" */
export type VirusUserSessionArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "storage.virus" */
export type Virus_Aggregate = {
  __typename?: 'virus_aggregate';
  aggregate?: Maybe<Virus_Aggregate_Fields>;
  nodes: Array<Virus>;
};

export type Virus_Aggregate_Bool_Exp = {
  count?: InputMaybe<Virus_Aggregate_Bool_Exp_Count>;
};

export type Virus_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Virus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Virus_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_Fields = {
  __typename?: 'virus_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Virus_Max_Fields>;
  min?: Maybe<Virus_Min_Fields>;
};


/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Virus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "storage.virus" */
export type Virus_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Virus_Max_Order_By>;
  min?: InputMaybe<Virus_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Virus_Append_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "storage.virus" */
export type Virus_Arr_Rel_Insert_Input = {
  data: Array<Virus_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};

/** Boolean expression to filter rows from the table "storage.virus". All fields are combined with a logical 'AND'. */
export type Virus_Bool_Exp = {
  _and?: InputMaybe<Array<Virus_Bool_Exp>>;
  _not?: InputMaybe<Virus_Bool_Exp>;
  _or?: InputMaybe<Array<Virus_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  fileId?: InputMaybe<Uuid_Comparison_Exp>;
  filename?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userSession?: InputMaybe<Jsonb_Comparison_Exp>;
  virus?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.virus" */
export enum Virus_Constraint {
  /** unique or primary key constraint on columns "id" */
  VirusPkey = 'virus_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Virus_Delete_At_Path_Input = {
  userSession?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Virus_Delete_Elem_Input = {
  userSession?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Virus_Delete_Key_Input = {
  userSession?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "storage.virus" */
export type Virus_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Virus_Max_Fields = {
  __typename?: 'virus_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  virus?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "storage.virus" */
export type Virus_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  fileId?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  virus?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Virus_Min_Fields = {
  __typename?: 'virus_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  virus?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "storage.virus" */
export type Virus_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  fileId?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  virus?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.virus" */
export type Virus_Mutation_Response = {
  __typename?: 'virus_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Virus>;
};

/** on_conflict condition type for table "storage.virus" */
export type Virus_On_Conflict = {
  constraint: Virus_Constraint;
  update_columns?: Array<Virus_Update_Column>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.virus". */
export type Virus_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  fileId?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userSession?: InputMaybe<Order_By>;
  virus?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.virus */
export type Virus_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Virus_Prepend_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.virus" */
export enum Virus_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

/** input type for updating data in table "storage.virus" */
export type Virus_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "virus" */
export type Virus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Virus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Virus_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "storage.virus" */
export enum Virus_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

export type Virus_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Virus_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Virus_Set_Input>;
  /** filter the rows which have to be updated */
  where: Virus_Bool_Exp;
};

export type GetMovieQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetMovieQuery = { __typename?: 'query_root', movies_by_pk?: { __typename?: 'movies', id: any, title: string, overview?: string | null, age_rating?: string | null, average_rating?: number | null, backdrop?: string | null, budget?: any | null, content_score?: number | null, created_at?: any | null, imdb_id?: string | null, language?: string | null, poster: string, release_date?: any | null, revenue?: any | null, runtime?: number | null, status?: string | null, tagline?: string | null, tmdb_id?: string | null, trailer?: string | null, updated_at?: any | null, view_count?: number | null, vote_average?: number | null, vote_count?: number | null, rated?: boolean | null, favourited?: boolean | null, watchlisted?: boolean | null, movie_genres: Array<{ __typename?: 'movie_genres', genre: { __typename?: 'genres', name: string } }>, movie_keywords: Array<{ __typename?: 'movie_keywords', keyword: { __typename?: 'keywords', keyword: string } }>, movie_cast_members: Array<{ __typename?: 'movie_cast', id: any, role?: string | null, person: { __typename?: 'people', id: any, name: string, headshot?: string | null } }>, movie_crew_members: Array<{ __typename?: 'movie_crew', id: any, job?: string | null, department?: string | null, person: { __typename?: 'people', id: any, name: string, headshot?: string | null } }>, movie_reviews: Array<{ __typename?: 'movie_reviews', id: any, rating?: any | null, review?: string | null, created_at?: any | null, user: { __typename?: 'users', id: any, displayName: string, avatarUrl: string } }>, movie_soundtracks: Array<{ __typename?: 'movie_soundtrack', id: any, timestamps?: Array<string> | null, description?: string | null, song: { __typename?: 'songs', title: string, artwork?: string | null, song_artists: Array<{ __typename?: 'song_artists', id: any, person: { __typename?: 'people', name: string } }> } }> } | null };

export type GetMoviesQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Movies_Select_Column> | Movies_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movies_Order_By> | Movies_Order_By>;
  where?: InputMaybe<Movies_Bool_Exp>;
}>;


export type GetMoviesQuery = { __typename?: 'query_root', movies: Array<{ __typename?: 'movies', id: any, title: string, poster: string }> };



export const GetMovieDocument = `
    query GetMovie($id: uuid!) {
  movies_by_pk(id: $id) {
    id
    title
    overview
    age_rating
    average_rating
    backdrop
    budget
    content_score
    created_at
    imdb_id
    language
    poster
    release_date
    revenue
    runtime
    status
    tagline
    tmdb_id
    trailer
    updated_at
    view_count
    vote_average
    vote_count
    rated
    favourited
    watchlisted
    movie_genres {
      genre {
        name
      }
    }
    movie_keywords {
      keyword {
        keyword
      }
    }
    movie_cast_members {
      id
      role
      person {
        id
        name
        headshot
      }
    }
    movie_crew_members {
      id
      job
      department
      person {
        id
        name
        headshot
      }
    }
    movie_reviews {
      id
      rating
      review
      user {
        id
        displayName
        avatarUrl
      }
      created_at
    }
    movie_soundtracks {
      id
      song {
        title
        artwork
        song_artists {
          id
          person {
            name
          }
        }
      }
      timestamps
      description
    }
  }
}
    `;

export const useGetMovieQuery = <
      TData = GetMovieQuery,
      TError = unknown
    >(
      variables: GetMovieQueryVariables,
      options?: Omit<UseQueryOptions<GetMovieQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetMovieQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetMovieQuery, TError, TData>(
      {
    queryKey: ['GetMovie', variables],
    queryFn: fetcher<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, variables),
    ...options
  }
    )};

export const useInfiniteGetMovieQuery = <
      TData = InfiniteData<GetMovieQuery>,
      TError = unknown
    >(
      variables: GetMovieQueryVariables,
      options: Omit<UseInfiniteQueryOptions<GetMovieQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<GetMovieQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<GetMovieQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['GetMovie.infinite', variables],
      queryFn: (metaData) => fetcher<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

export const GetMoviesDocument = `
    query GetMovies($distinct_on: [movies_select_column!], $limit: Int, $offset: Int, $order_by: [movies_order_by!], $where: movies_bool_exp) {
  movies(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    id
    title
    poster
  }
}
    `;

export const useGetMoviesQuery = <
      TData = GetMoviesQuery,
      TError = unknown
    >(
      variables?: GetMoviesQueryVariables,
      options?: Omit<UseQueryOptions<GetMoviesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetMoviesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetMoviesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetMovies'] : ['GetMovies', variables],
    queryFn: fetcher<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, variables),
    ...options
  }
    )};

export const useInfiniteGetMoviesQuery = <
      TData = InfiniteData<GetMoviesQuery>,
      TError = unknown
    >(
      variables: GetMoviesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<GetMoviesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<GetMoviesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<GetMoviesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['GetMovies.infinite'] : ['GetMovies.infinite', variables],
      queryFn: (metaData) => fetcher<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};
