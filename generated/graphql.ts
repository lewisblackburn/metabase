// @ts-nocheck
import { useMutation, useQuery, useInfiniteQuery, UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';
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
  bpchar: { input: any; output: any; }
  bytea: { input: any; output: any; }
  citext: { input: any; output: any; }
  date: { input: any; output: any; }
  json: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  movies_scalar: { input: any; output: any; }
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

/** columns and relationships of "activity_logs" */
export type Activity_Logs = {
  __typename?: 'activity_logs';
  changes: Scalars['jsonb']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  meta?: Maybe<Scalars['jsonb']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "activity_logs" */
export type Activity_LogsChangesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "activity_logs" */
export type Activity_LogsMetaArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "activity_logs" */
export type Activity_Logs_Aggregate = {
  __typename?: 'activity_logs_aggregate';
  aggregate?: Maybe<Activity_Logs_Aggregate_Fields>;
  nodes: Array<Activity_Logs>;
};

/** aggregate fields of "activity_logs" */
export type Activity_Logs_Aggregate_Fields = {
  __typename?: 'activity_logs_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Activity_Logs_Max_Fields>;
  min?: Maybe<Activity_Logs_Min_Fields>;
};


/** aggregate fields of "activity_logs" */
export type Activity_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Activity_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Activity_Logs_Append_Input = {
  changes?: InputMaybe<Scalars['jsonb']['input']>;
  meta?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "activity_logs". All fields are combined with a logical 'AND'. */
export type Activity_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Activity_Logs_Bool_Exp>>;
  _not?: InputMaybe<Activity_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Activity_Logs_Bool_Exp>>;
  changes?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  meta?: InputMaybe<Jsonb_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "activity_logs" */
export enum Activity_Logs_Constraint {
  /** unique or primary key constraint on columns "id" */
  ActivityLogsPkey = 'activity_logs_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Activity_Logs_Delete_At_Path_Input = {
  changes?: InputMaybe<Array<Scalars['String']['input']>>;
  meta?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Activity_Logs_Delete_Elem_Input = {
  changes?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Activity_Logs_Delete_Key_Input = {
  changes?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "activity_logs" */
export type Activity_Logs_Insert_Input = {
  changes?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meta?: InputMaybe<Scalars['jsonb']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Activity_Logs_Max_Fields = {
  __typename?: 'activity_logs_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Activity_Logs_Min_Fields = {
  __typename?: 'activity_logs_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "activity_logs" */
export type Activity_Logs_Mutation_Response = {
  __typename?: 'activity_logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Activity_Logs>;
};

/** on_conflict condition type for table "activity_logs" */
export type Activity_Logs_On_Conflict = {
  constraint: Activity_Logs_Constraint;
  update_columns?: Array<Activity_Logs_Update_Column>;
  where?: InputMaybe<Activity_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "activity_logs". */
export type Activity_Logs_Order_By = {
  changes?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meta?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: activity_logs */
export type Activity_Logs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Activity_Logs_Prepend_Input = {
  changes?: InputMaybe<Scalars['jsonb']['input']>;
  meta?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "activity_logs" */
export enum Activity_Logs_Select_Column {
  /** column name */
  Changes = 'changes',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "activity_logs" */
export type Activity_Logs_Set_Input = {
  changes?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meta?: InputMaybe<Scalars['jsonb']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "activity_logs" */
export type Activity_Logs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Activity_Logs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Activity_Logs_Stream_Cursor_Value_Input = {
  changes?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meta?: InputMaybe<Scalars['jsonb']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "activity_logs" */
export enum Activity_Logs_Update_Column {
  /** column name */
  Changes = 'changes',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  UserId = 'user_id'
}

export type Activity_Logs_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Activity_Logs_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Activity_Logs_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Activity_Logs_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Activity_Logs_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Activity_Logs_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Activity_Logs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Activity_Logs_Bool_Exp;
};

/** columns and relationships of "audit_logs" */
export type Audit_Logs = {
  __typename?: 'audit_logs';
  action: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  difference?: Maybe<Scalars['jsonb']['output']>;
  id: Scalars['uuid']['output'];
  meta?: Maybe<Scalars['jsonb']['output']>;
  row_id: Scalars['uuid']['output'];
  table: Scalars['String']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "audit_logs" */
export type Audit_LogsDifferenceArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "audit_logs" */
export type Audit_LogsMetaArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "audit_logs" */
export type Audit_Logs_Aggregate = {
  __typename?: 'audit_logs_aggregate';
  aggregate?: Maybe<Audit_Logs_Aggregate_Fields>;
  nodes: Array<Audit_Logs>;
};

/** aggregate fields of "audit_logs" */
export type Audit_Logs_Aggregate_Fields = {
  __typename?: 'audit_logs_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Audit_Logs_Max_Fields>;
  min?: Maybe<Audit_Logs_Min_Fields>;
};


/** aggregate fields of "audit_logs" */
export type Audit_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Audit_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Audit_Logs_Append_Input = {
  difference?: InputMaybe<Scalars['jsonb']['input']>;
  meta?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "audit_logs". All fields are combined with a logical 'AND'. */
export type Audit_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Audit_Logs_Bool_Exp>>;
  _not?: InputMaybe<Audit_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Audit_Logs_Bool_Exp>>;
  action?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  difference?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  meta?: InputMaybe<Jsonb_Comparison_Exp>;
  row_id?: InputMaybe<Uuid_Comparison_Exp>;
  table?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "audit_logs" */
export enum Audit_Logs_Constraint {
  /** unique or primary key constraint on columns "id" */
  AuditLogsPkey = 'audit_logs_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Audit_Logs_Delete_At_Path_Input = {
  difference?: InputMaybe<Array<Scalars['String']['input']>>;
  meta?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Audit_Logs_Delete_Elem_Input = {
  difference?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Audit_Logs_Delete_Key_Input = {
  difference?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "audit_logs" */
export type Audit_Logs_Insert_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  difference?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meta?: InputMaybe<Scalars['jsonb']['input']>;
  row_id?: InputMaybe<Scalars['uuid']['input']>;
  table?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Audit_Logs_Max_Fields = {
  __typename?: 'audit_logs_max_fields';
  action?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  row_id?: Maybe<Scalars['uuid']['output']>;
  table?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Audit_Logs_Min_Fields = {
  __typename?: 'audit_logs_min_fields';
  action?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  row_id?: Maybe<Scalars['uuid']['output']>;
  table?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "audit_logs" */
export type Audit_Logs_Mutation_Response = {
  __typename?: 'audit_logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Audit_Logs>;
};

/** on_conflict condition type for table "audit_logs" */
export type Audit_Logs_On_Conflict = {
  constraint: Audit_Logs_Constraint;
  update_columns?: Array<Audit_Logs_Update_Column>;
  where?: InputMaybe<Audit_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "audit_logs". */
export type Audit_Logs_Order_By = {
  action?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  difference?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meta?: InputMaybe<Order_By>;
  row_id?: InputMaybe<Order_By>;
  table?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: audit_logs */
export type Audit_Logs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Audit_Logs_Prepend_Input = {
  difference?: InputMaybe<Scalars['jsonb']['input']>;
  meta?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "audit_logs" */
export enum Audit_Logs_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Difference = 'difference',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  RowId = 'row_id',
  /** column name */
  Table = 'table',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "audit_logs" */
export type Audit_Logs_Set_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  difference?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meta?: InputMaybe<Scalars['jsonb']['input']>;
  row_id?: InputMaybe<Scalars['uuid']['input']>;
  table?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "audit_logs" */
export type Audit_Logs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Audit_Logs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Audit_Logs_Stream_Cursor_Value_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  difference?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meta?: InputMaybe<Scalars['jsonb']['input']>;
  row_id?: InputMaybe<Scalars['uuid']['input']>;
  table?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "audit_logs" */
export enum Audit_Logs_Update_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Difference = 'difference',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  RowId = 'row_id',
  /** column name */
  Table = 'table',
  /** column name */
  UserId = 'user_id'
}

export type Audit_Logs_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Audit_Logs_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Audit_Logs_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Audit_Logs_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Audit_Logs_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Audit_Logs_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Audit_Logs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Audit_Logs_Bool_Exp;
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
  type: Scalars['String']['output'];
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
  type?: InputMaybe<String_Comparison_Exp>;
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
  type?: InputMaybe<Scalars['String']['input']>;
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
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
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
  type?: InputMaybe<Scalars['String']['input']>;
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
  type?: InputMaybe<Scalars['String']['input']>;
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

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']['input']>;
  _gt?: InputMaybe<Scalars['bpchar']['input']>;
  _gte?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']['input']>;
  _in?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']['input']>;
  _lt?: InputMaybe<Scalars['bpchar']['input']>;
  _lte?: InputMaybe<Scalars['bpchar']['input']>;
  _neq?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']['input']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']['input']>;
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

/** columns and relationships of "certifications" */
export type Certifications = {
  __typename?: 'certifications';
  name: Scalars['String']['output'];
};

/** aggregated selection of "certifications" */
export type Certifications_Aggregate = {
  __typename?: 'certifications_aggregate';
  aggregate?: Maybe<Certifications_Aggregate_Fields>;
  nodes: Array<Certifications>;
};

/** aggregate fields of "certifications" */
export type Certifications_Aggregate_Fields = {
  __typename?: 'certifications_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Certifications_Max_Fields>;
  min?: Maybe<Certifications_Min_Fields>;
};


/** aggregate fields of "certifications" */
export type Certifications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Certifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "certifications". All fields are combined with a logical 'AND'. */
export type Certifications_Bool_Exp = {
  _and?: InputMaybe<Array<Certifications_Bool_Exp>>;
  _not?: InputMaybe<Certifications_Bool_Exp>;
  _or?: InputMaybe<Array<Certifications_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "certifications" */
export enum Certifications_Constraint {
  /** unique or primary key constraint on columns "name" */
  CertificationsPkey = 'certifications_pkey'
}

export enum Certifications_Enum {
  Eighteen = 'EIGHTEEN',
  Fifteen = 'FIFTEEN',
  G = 'G',
  Nc_17 = 'NC_17',
  Nr = 'NR',
  Pg = 'PG',
  PgThirteen = 'PG_THIRTEEN',
  R = 'R',
  REighteen = 'R_EIGHTEEN',
  Twelve = 'TWELVE',
  TwelveA = 'TWELVE_A',
  U = 'U',
  Ur = 'UR'
}

/** Boolean expression to compare columns of type "certifications_enum". All fields are combined with logical 'AND'. */
export type Certifications_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Certifications_Enum>;
  _in?: InputMaybe<Array<Certifications_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Certifications_Enum>;
  _nin?: InputMaybe<Array<Certifications_Enum>>;
};

/** input type for inserting data into table "certifications" */
export type Certifications_Insert_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Certifications_Max_Fields = {
  __typename?: 'certifications_max_fields';
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Certifications_Min_Fields = {
  __typename?: 'certifications_min_fields';
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "certifications" */
export type Certifications_Mutation_Response = {
  __typename?: 'certifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Certifications>;
};

/** on_conflict condition type for table "certifications" */
export type Certifications_On_Conflict = {
  constraint: Certifications_Constraint;
  update_columns?: Array<Certifications_Update_Column>;
  where?: InputMaybe<Certifications_Bool_Exp>;
};

/** Ordering options when selecting data from "certifications". */
export type Certifications_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: certifications */
export type Certifications_Pk_Columns_Input = {
  name: Scalars['String']['input'];
};

/** select columns of table "certifications" */
export enum Certifications_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "certifications" */
export type Certifications_Set_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "certifications" */
export type Certifications_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Certifications_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Certifications_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "certifications" */
export enum Certifications_Update_Column {
  /** column name */
  Name = 'name'
}

export type Certifications_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Certifications_Set_Input>;
  /** filter the rows which have to be updated */
  where: Certifications_Bool_Exp;
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

/** columns and relationships of "collections" */
export type Collections = {
  __typename?: 'collections';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  movies: Array<Movies>;
  /** An aggregate relationship */
  movies_aggregate: Movies_Aggregate;
  name?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "collections" */
export type CollectionsMoviesArgs = {
  distinct_on?: InputMaybe<Array<Movies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movies_Order_By>>;
  where?: InputMaybe<Movies_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsMovies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movies_Order_By>>;
  where?: InputMaybe<Movies_Bool_Exp>;
};

/** aggregated selection of "collections" */
export type Collections_Aggregate = {
  __typename?: 'collections_aggregate';
  aggregate?: Maybe<Collections_Aggregate_Fields>;
  nodes: Array<Collections>;
};

/** aggregate fields of "collections" */
export type Collections_Aggregate_Fields = {
  __typename?: 'collections_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Collections_Max_Fields>;
  min?: Maybe<Collections_Min_Fields>;
};


/** aggregate fields of "collections" */
export type Collections_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Collections_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "collections". All fields are combined with a logical 'AND'. */
export type Collections_Bool_Exp = {
  _and?: InputMaybe<Array<Collections_Bool_Exp>>;
  _not?: InputMaybe<Collections_Bool_Exp>;
  _or?: InputMaybe<Array<Collections_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movies?: InputMaybe<Movies_Bool_Exp>;
  movies_aggregate?: InputMaybe<Movies_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  overview?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "collections" */
export enum Collections_Constraint {
  /** unique or primary key constraint on columns "id" */
  CollectionsPkey = 'collections_pkey'
}

/** input type for inserting data into table "collections" */
export type Collections_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  movies?: InputMaybe<Movies_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Collections_Max_Fields = {
  __typename?: 'collections_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Collections_Min_Fields = {
  __typename?: 'collections_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "collections" */
export type Collections_Mutation_Response = {
  __typename?: 'collections_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Collections>;
};

/** input type for inserting object relation for remote table "collections" */
export type Collections_Obj_Rel_Insert_Input = {
  data: Collections_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};

/** on_conflict condition type for table "collections" */
export type Collections_On_Conflict = {
  constraint: Collections_Constraint;
  update_columns?: Array<Collections_Update_Column>;
  where?: InputMaybe<Collections_Bool_Exp>;
};

/** Ordering options when selecting data from "collections". */
export type Collections_Order_By = {
  id?: InputMaybe<Order_By>;
  movies_aggregate?: InputMaybe<Movies_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  overview?: InputMaybe<Order_By>;
};

/** primary key columns input for table: collections */
export type Collections_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "collections" */
export enum Collections_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Overview = 'overview'
}

/** input type for updating data in table "collections" */
export type Collections_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "collections" */
export type Collections_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Collections_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Collections_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "collections" */
export enum Collections_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Overview = 'overview'
}

export type Collections_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Collections_Set_Input>;
  /** filter the rows which have to be updated */
  where: Collections_Bool_Exp;
};

/** columns and relationships of "countries" */
export type Countries = {
  __typename?: 'countries';
  /** iso_3166_1 */
  code: Scalars['bpchar']['output'];
  english_name?: Maybe<Scalars['String']['output']>;
  native_name?: Maybe<Scalars['bpchar']['output']>;
};

/** aggregated selection of "countries" */
export type Countries_Aggregate = {
  __typename?: 'countries_aggregate';
  aggregate?: Maybe<Countries_Aggregate_Fields>;
  nodes: Array<Countries>;
};

/** aggregate fields of "countries" */
export type Countries_Aggregate_Fields = {
  __typename?: 'countries_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Countries_Max_Fields>;
  min?: Maybe<Countries_Min_Fields>;
};


/** aggregate fields of "countries" */
export type Countries_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Countries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'. */
export type Countries_Bool_Exp = {
  _and?: InputMaybe<Array<Countries_Bool_Exp>>;
  _not?: InputMaybe<Countries_Bool_Exp>;
  _or?: InputMaybe<Array<Countries_Bool_Exp>>;
  code?: InputMaybe<Bpchar_Comparison_Exp>;
  english_name?: InputMaybe<String_Comparison_Exp>;
  native_name?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "countries" */
export enum Countries_Constraint {
  /** unique or primary key constraint on columns "code" */
  CountriesPkey = 'countries_pkey'
}

/** input type for inserting data into table "countries" */
export type Countries_Insert_Input = {
  /** iso_3166_1 */
  code?: InputMaybe<Scalars['bpchar']['input']>;
  english_name?: InputMaybe<Scalars['String']['input']>;
  native_name?: InputMaybe<Scalars['bpchar']['input']>;
};

/** aggregate max on columns */
export type Countries_Max_Fields = {
  __typename?: 'countries_max_fields';
  /** iso_3166_1 */
  code?: Maybe<Scalars['bpchar']['output']>;
  english_name?: Maybe<Scalars['String']['output']>;
  native_name?: Maybe<Scalars['bpchar']['output']>;
};

/** aggregate min on columns */
export type Countries_Min_Fields = {
  __typename?: 'countries_min_fields';
  /** iso_3166_1 */
  code?: Maybe<Scalars['bpchar']['output']>;
  english_name?: Maybe<Scalars['String']['output']>;
  native_name?: Maybe<Scalars['bpchar']['output']>;
};

/** response of any mutation on the table "countries" */
export type Countries_Mutation_Response = {
  __typename?: 'countries_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Countries>;
};

/** on_conflict condition type for table "countries" */
export type Countries_On_Conflict = {
  constraint: Countries_Constraint;
  update_columns?: Array<Countries_Update_Column>;
  where?: InputMaybe<Countries_Bool_Exp>;
};

/** Ordering options when selecting data from "countries". */
export type Countries_Order_By = {
  code?: InputMaybe<Order_By>;
  english_name?: InputMaybe<Order_By>;
  native_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: countries */
export type Countries_Pk_Columns_Input = {
  /** iso_3166_1 */
  code: Scalars['bpchar']['input'];
};

/** select columns of table "countries" */
export enum Countries_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  EnglishName = 'english_name',
  /** column name */
  NativeName = 'native_name'
}

/** input type for updating data in table "countries" */
export type Countries_Set_Input = {
  /** iso_3166_1 */
  code?: InputMaybe<Scalars['bpchar']['input']>;
  english_name?: InputMaybe<Scalars['String']['input']>;
  native_name?: InputMaybe<Scalars['bpchar']['input']>;
};

/** Streaming cursor of the table "countries" */
export type Countries_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Countries_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Countries_Stream_Cursor_Value_Input = {
  /** iso_3166_1 */
  code?: InputMaybe<Scalars['bpchar']['input']>;
  english_name?: InputMaybe<Scalars['String']['input']>;
  native_name?: InputMaybe<Scalars['bpchar']['input']>;
};

/** update columns of table "countries" */
export enum Countries_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  EnglishName = 'english_name',
  /** column name */
  NativeName = 'native_name'
}

export type Countries_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Countries_Set_Input>;
  /** filter the rows which have to be updated */
  where: Countries_Bool_Exp;
};

/** columns and relationships of "credit_types" */
export type Credit_Types = {
  __typename?: 'credit_types';
  credit_type: Scalars['String']['output'];
};

/** aggregated selection of "credit_types" */
export type Credit_Types_Aggregate = {
  __typename?: 'credit_types_aggregate';
  aggregate?: Maybe<Credit_Types_Aggregate_Fields>;
  nodes: Array<Credit_Types>;
};

/** aggregate fields of "credit_types" */
export type Credit_Types_Aggregate_Fields = {
  __typename?: 'credit_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Credit_Types_Max_Fields>;
  min?: Maybe<Credit_Types_Min_Fields>;
};


/** aggregate fields of "credit_types" */
export type Credit_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Credit_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "credit_types". All fields are combined with a logical 'AND'. */
export type Credit_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Credit_Types_Bool_Exp>>;
  _not?: InputMaybe<Credit_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Credit_Types_Bool_Exp>>;
  credit_type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "credit_types" */
export enum Credit_Types_Constraint {
  /** unique or primary key constraint on columns "credit_type" */
  CreditTypesPkey = 'credit_types_pkey'
}

export enum Credit_Types_Enum {
  Cast = 'CAST',
  Crew = 'CREW'
}

/** Boolean expression to compare columns of type "credit_types_enum". All fields are combined with logical 'AND'. */
export type Credit_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Credit_Types_Enum>;
  _in?: InputMaybe<Array<Credit_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Credit_Types_Enum>;
  _nin?: InputMaybe<Array<Credit_Types_Enum>>;
};

/** input type for inserting data into table "credit_types" */
export type Credit_Types_Insert_Input = {
  credit_type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Credit_Types_Max_Fields = {
  __typename?: 'credit_types_max_fields';
  credit_type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Credit_Types_Min_Fields = {
  __typename?: 'credit_types_min_fields';
  credit_type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "credit_types" */
export type Credit_Types_Mutation_Response = {
  __typename?: 'credit_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Credit_Types>;
};

/** on_conflict condition type for table "credit_types" */
export type Credit_Types_On_Conflict = {
  constraint: Credit_Types_Constraint;
  update_columns?: Array<Credit_Types_Update_Column>;
  where?: InputMaybe<Credit_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "credit_types". */
export type Credit_Types_Order_By = {
  credit_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: credit_types */
export type Credit_Types_Pk_Columns_Input = {
  credit_type: Scalars['String']['input'];
};

/** select columns of table "credit_types" */
export enum Credit_Types_Select_Column {
  /** column name */
  CreditType = 'credit_type'
}

/** input type for updating data in table "credit_types" */
export type Credit_Types_Set_Input = {
  credit_type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "credit_types" */
export type Credit_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Credit_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Credit_Types_Stream_Cursor_Value_Input = {
  credit_type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "credit_types" */
export enum Credit_Types_Update_Column {
  /** column name */
  CreditType = 'credit_type'
}

export type Credit_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Credit_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Credit_Types_Bool_Exp;
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

/** columns and relationships of "external_ids" */
export type External_Ids = {
  __typename?: 'external_ids';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id: Scalars['uuid']['output'];
  external_id: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  media_type: Media_Types_Enum;
  source: Sources_Enum;
};

/** aggregated selection of "external_ids" */
export type External_Ids_Aggregate = {
  __typename?: 'external_ids_aggregate';
  aggregate?: Maybe<External_Ids_Aggregate_Fields>;
  nodes: Array<External_Ids>;
};

/** aggregate fields of "external_ids" */
export type External_Ids_Aggregate_Fields = {
  __typename?: 'external_ids_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<External_Ids_Max_Fields>;
  min?: Maybe<External_Ids_Min_Fields>;
};


/** aggregate fields of "external_ids" */
export type External_Ids_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<External_Ids_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "external_ids". All fields are combined with a logical 'AND'. */
export type External_Ids_Bool_Exp = {
  _and?: InputMaybe<Array<External_Ids_Bool_Exp>>;
  _not?: InputMaybe<External_Ids_Bool_Exp>;
  _or?: InputMaybe<Array<External_Ids_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  entity_id?: InputMaybe<Uuid_Comparison_Exp>;
  external_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  media_type?: InputMaybe<Media_Types_Enum_Comparison_Exp>;
  source?: InputMaybe<Sources_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "external_ids" */
export enum External_Ids_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExternalIdsPkey = 'external_ids_pkey',
  /** unique or primary key constraint on columns "media_type", "external_id", "entity_id", "source" */
  ExternalIdsUnique = 'external_ids_unique'
}

/** input type for inserting data into table "external_ids" */
export type External_Ids_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  external_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Media_Types_Enum>;
  source?: InputMaybe<Sources_Enum>;
};

/** aggregate max on columns */
export type External_Ids_Max_Fields = {
  __typename?: 'external_ids_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  external_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type External_Ids_Min_Fields = {
  __typename?: 'external_ids_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  external_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "external_ids" */
export type External_Ids_Mutation_Response = {
  __typename?: 'external_ids_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<External_Ids>;
};

/** on_conflict condition type for table "external_ids" */
export type External_Ids_On_Conflict = {
  constraint: External_Ids_Constraint;
  update_columns?: Array<External_Ids_Update_Column>;
  where?: InputMaybe<External_Ids_Bool_Exp>;
};

/** Ordering options when selecting data from "external_ids". */
export type External_Ids_Order_By = {
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** primary key columns input for table: external_ids */
export type External_Ids_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "external_ids" */
export enum External_Ids_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  Source = 'source'
}

/** input type for updating data in table "external_ids" */
export type External_Ids_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  external_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Media_Types_Enum>;
  source?: InputMaybe<Sources_Enum>;
};

/** Streaming cursor of the table "external_ids" */
export type External_Ids_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: External_Ids_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type External_Ids_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  external_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Media_Types_Enum>;
  source?: InputMaybe<Sources_Enum>;
};

/** update columns of table "external_ids" */
export enum External_Ids_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  Source = 'source'
}

export type External_Ids_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<External_Ids_Set_Input>;
  /** filter the rows which have to be updated */
  where: External_Ids_Bool_Exp;
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
};


/** columns and relationships of "storage.files" */
export type FilesMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
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

/** columns and relationships of "genders" */
export type Genders = {
  __typename?: 'genders';
  gender: Scalars['String']['output'];
};

/** aggregated selection of "genders" */
export type Genders_Aggregate = {
  __typename?: 'genders_aggregate';
  aggregate?: Maybe<Genders_Aggregate_Fields>;
  nodes: Array<Genders>;
};

/** aggregate fields of "genders" */
export type Genders_Aggregate_Fields = {
  __typename?: 'genders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Genders_Max_Fields>;
  min?: Maybe<Genders_Min_Fields>;
};


/** aggregate fields of "genders" */
export type Genders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Genders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "genders". All fields are combined with a logical 'AND'. */
export type Genders_Bool_Exp = {
  _and?: InputMaybe<Array<Genders_Bool_Exp>>;
  _not?: InputMaybe<Genders_Bool_Exp>;
  _or?: InputMaybe<Array<Genders_Bool_Exp>>;
  gender?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "genders" */
export enum Genders_Constraint {
  /** unique or primary key constraint on columns "gender" */
  GendersPkey = 'genders_pkey'
}

export enum Genders_Enum {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

/** Boolean expression to compare columns of type "genders_enum". All fields are combined with logical 'AND'. */
export type Genders_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Genders_Enum>;
  _in?: InputMaybe<Array<Genders_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Genders_Enum>;
  _nin?: InputMaybe<Array<Genders_Enum>>;
};

/** input type for inserting data into table "genders" */
export type Genders_Insert_Input = {
  gender?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Genders_Max_Fields = {
  __typename?: 'genders_max_fields';
  gender?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Genders_Min_Fields = {
  __typename?: 'genders_min_fields';
  gender?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "genders" */
export type Genders_Mutation_Response = {
  __typename?: 'genders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Genders>;
};

/** on_conflict condition type for table "genders" */
export type Genders_On_Conflict = {
  constraint: Genders_Constraint;
  update_columns?: Array<Genders_Update_Column>;
  where?: InputMaybe<Genders_Bool_Exp>;
};

/** Ordering options when selecting data from "genders". */
export type Genders_Order_By = {
  gender?: InputMaybe<Order_By>;
};

/** primary key columns input for table: genders */
export type Genders_Pk_Columns_Input = {
  gender: Scalars['String']['input'];
};

/** select columns of table "genders" */
export enum Genders_Select_Column {
  /** column name */
  Gender = 'gender'
}

/** input type for updating data in table "genders" */
export type Genders_Set_Input = {
  gender?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "genders" */
export type Genders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Genders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Genders_Stream_Cursor_Value_Input = {
  gender?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "genders" */
export enum Genders_Update_Column {
  /** column name */
  Gender = 'gender'
}

export type Genders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Genders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Genders_Bool_Exp;
};

/** columns and relationships of "genres" */
export type Genres = {
  __typename?: 'genres';
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
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
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
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
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Genres_Max_Fields = {
  __typename?: 'genres_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Genres_Min_Fields = {
  __typename?: 'genres_min_fields';
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
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: genres */
export type Genres_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "genres" */
export enum Genres_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "genres" */
export type Genres_Set_Input = {
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
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "genres" */
export enum Genres_Update_Column {
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

export type Get_User_Movie_Activity_Args = {
  hasura_session?: InputMaybe<Scalars['json']['input']>;
  movie_row?: InputMaybe<Scalars['movies_scalar']['input']>;
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

/** columns and relationships of "languages" */
export type Languages = {
  __typename?: 'languages';
  /** iso_639_1 */
  code: Scalars['bpchar']['output'];
  english_name?: Maybe<Scalars['String']['output']>;
  native_name?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "languages" */
export type Languages_Aggregate = {
  __typename?: 'languages_aggregate';
  aggregate?: Maybe<Languages_Aggregate_Fields>;
  nodes: Array<Languages>;
};

/** aggregate fields of "languages" */
export type Languages_Aggregate_Fields = {
  __typename?: 'languages_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Languages_Max_Fields>;
  min?: Maybe<Languages_Min_Fields>;
};


/** aggregate fields of "languages" */
export type Languages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Languages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "languages". All fields are combined with a logical 'AND'. */
export type Languages_Bool_Exp = {
  _and?: InputMaybe<Array<Languages_Bool_Exp>>;
  _not?: InputMaybe<Languages_Bool_Exp>;
  _or?: InputMaybe<Array<Languages_Bool_Exp>>;
  code?: InputMaybe<Bpchar_Comparison_Exp>;
  english_name?: InputMaybe<String_Comparison_Exp>;
  native_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "languages" */
export enum Languages_Constraint {
  /** unique or primary key constraint on columns "code" */
  LanguagesPkey = 'languages_pkey'
}

/** input type for inserting data into table "languages" */
export type Languages_Insert_Input = {
  /** iso_639_1 */
  code?: InputMaybe<Scalars['bpchar']['input']>;
  english_name?: InputMaybe<Scalars['String']['input']>;
  native_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Languages_Max_Fields = {
  __typename?: 'languages_max_fields';
  /** iso_639_1 */
  code?: Maybe<Scalars['bpchar']['output']>;
  english_name?: Maybe<Scalars['String']['output']>;
  native_name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Languages_Min_Fields = {
  __typename?: 'languages_min_fields';
  /** iso_639_1 */
  code?: Maybe<Scalars['bpchar']['output']>;
  english_name?: Maybe<Scalars['String']['output']>;
  native_name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "languages" */
export type Languages_Mutation_Response = {
  __typename?: 'languages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Languages>;
};

/** input type for inserting object relation for remote table "languages" */
export type Languages_Obj_Rel_Insert_Input = {
  data: Languages_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Languages_On_Conflict>;
};

/** on_conflict condition type for table "languages" */
export type Languages_On_Conflict = {
  constraint: Languages_Constraint;
  update_columns?: Array<Languages_Update_Column>;
  where?: InputMaybe<Languages_Bool_Exp>;
};

/** Ordering options when selecting data from "languages". */
export type Languages_Order_By = {
  code?: InputMaybe<Order_By>;
  english_name?: InputMaybe<Order_By>;
  native_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: languages */
export type Languages_Pk_Columns_Input = {
  /** iso_639_1 */
  code: Scalars['bpchar']['input'];
};

/** select columns of table "languages" */
export enum Languages_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  EnglishName = 'english_name',
  /** column name */
  NativeName = 'native_name'
}

/** input type for updating data in table "languages" */
export type Languages_Set_Input = {
  /** iso_639_1 */
  code?: InputMaybe<Scalars['bpchar']['input']>;
  english_name?: InputMaybe<Scalars['String']['input']>;
  native_name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "languages" */
export type Languages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Languages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Languages_Stream_Cursor_Value_Input = {
  /** iso_639_1 */
  code?: InputMaybe<Scalars['bpchar']['input']>;
  english_name?: InputMaybe<Scalars['String']['input']>;
  native_name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "languages" */
export enum Languages_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  EnglishName = 'english_name',
  /** column name */
  NativeName = 'native_name'
}

export type Languages_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Languages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Languages_Bool_Exp;
};

/** columns and relationships of "list_items" */
export type List_Items = {
  __typename?: 'list_items';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  image: Scalars['String']['output'];
  list_id: Scalars['uuid']['output'];
  media_id: Scalars['uuid']['output'];
  media_type: Media_Types_Enum;
  title: Scalars['String']['output'];
};

/** aggregated selection of "list_items" */
export type List_Items_Aggregate = {
  __typename?: 'list_items_aggregate';
  aggregate?: Maybe<List_Items_Aggregate_Fields>;
  nodes: Array<List_Items>;
};

export type List_Items_Aggregate_Bool_Exp = {
  count?: InputMaybe<List_Items_Aggregate_Bool_Exp_Count>;
};

export type List_Items_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<List_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<List_Items_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "list_items" */
export type List_Items_Aggregate_Fields = {
  __typename?: 'list_items_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<List_Items_Max_Fields>;
  min?: Maybe<List_Items_Min_Fields>;
};


/** aggregate fields of "list_items" */
export type List_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<List_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "list_items" */
export type List_Items_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<List_Items_Max_Order_By>;
  min?: InputMaybe<List_Items_Min_Order_By>;
};

/** input type for inserting array relation for remote table "list_items" */
export type List_Items_Arr_Rel_Insert_Input = {
  data: Array<List_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<List_Items_On_Conflict>;
};

/** Boolean expression to filter rows from the table "list_items". All fields are combined with a logical 'AND'. */
export type List_Items_Bool_Exp = {
  _and?: InputMaybe<Array<List_Items_Bool_Exp>>;
  _not?: InputMaybe<List_Items_Bool_Exp>;
  _or?: InputMaybe<Array<List_Items_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  list_id?: InputMaybe<Uuid_Comparison_Exp>;
  media_id?: InputMaybe<Uuid_Comparison_Exp>;
  media_type?: InputMaybe<Media_Types_Enum_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "list_items" */
export enum List_Items_Constraint {
  /** unique or primary key constraint on columns "list_id", "media_id" */
  ListItemsListIdMediaIdKey = 'list_items_list_id_media_id_key',
  /** unique or primary key constraint on columns "id" */
  ListItemsPkey = 'list_items_pkey'
}

/** input type for inserting data into table "list_items" */
export type List_Items_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  list_id?: InputMaybe<Scalars['uuid']['input']>;
  media_id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Media_Types_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type List_Items_Max_Fields = {
  __typename?: 'list_items_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  list_id?: Maybe<Scalars['uuid']['output']>;
  media_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "list_items" */
export type List_Items_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type List_Items_Min_Fields = {
  __typename?: 'list_items_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  list_id?: Maybe<Scalars['uuid']['output']>;
  media_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "list_items" */
export type List_Items_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "list_items" */
export type List_Items_Mutation_Response = {
  __typename?: 'list_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<List_Items>;
};

/** on_conflict condition type for table "list_items" */
export type List_Items_On_Conflict = {
  constraint: List_Items_Constraint;
  update_columns?: Array<List_Items_Update_Column>;
  where?: InputMaybe<List_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "list_items". */
export type List_Items_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  media_id?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: list_items */
export type List_Items_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "list_items" */
export enum List_Items_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  ListId = 'list_id',
  /** column name */
  MediaId = 'media_id',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "list_items" */
export type List_Items_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  list_id?: InputMaybe<Scalars['uuid']['input']>;
  media_id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Media_Types_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "list_items" */
export type List_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: List_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type List_Items_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  list_id?: InputMaybe<Scalars['uuid']['input']>;
  media_id?: InputMaybe<Scalars['uuid']['input']>;
  media_type?: InputMaybe<Media_Types_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "list_items" */
export enum List_Items_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  ListId = 'list_id',
  /** column name */
  MediaId = 'media_id',
  /** column name */
  MediaType = 'media_type',
  /** column name */
  Title = 'title'
}

export type List_Items_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<List_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: List_Items_Bool_Exp;
};

/** columns and relationships of "lists" */
export type Lists = {
  __typename?: 'lists';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  list_items: Array<List_Items>;
  /** An aggregate relationship */
  list_items_aggregate: List_Items_Aggregate;
  private: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "lists" */
export type ListsList_ItemsArgs = {
  distinct_on?: InputMaybe<Array<List_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Items_Order_By>>;
  where?: InputMaybe<List_Items_Bool_Exp>;
};


/** columns and relationships of "lists" */
export type ListsList_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<List_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Items_Order_By>>;
  where?: InputMaybe<List_Items_Bool_Exp>;
};

/** aggregated selection of "lists" */
export type Lists_Aggregate = {
  __typename?: 'lists_aggregate';
  aggregate?: Maybe<Lists_Aggregate_Fields>;
  nodes: Array<Lists>;
};

/** aggregate fields of "lists" */
export type Lists_Aggregate_Fields = {
  __typename?: 'lists_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Lists_Max_Fields>;
  min?: Maybe<Lists_Min_Fields>;
};


/** aggregate fields of "lists" */
export type Lists_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Lists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "lists". All fields are combined with a logical 'AND'. */
export type Lists_Bool_Exp = {
  _and?: InputMaybe<Array<Lists_Bool_Exp>>;
  _not?: InputMaybe<Lists_Bool_Exp>;
  _or?: InputMaybe<Array<Lists_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  list_items?: InputMaybe<List_Items_Bool_Exp>;
  list_items_aggregate?: InputMaybe<List_Items_Aggregate_Bool_Exp>;
  private?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "lists" */
export enum Lists_Constraint {
  /** unique or primary key constraint on columns "id" */
  ListsPkey = 'lists_pkey'
}

/** input type for inserting data into table "lists" */
export type Lists_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  list_items?: InputMaybe<List_Items_Arr_Rel_Insert_Input>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Lists_Max_Fields = {
  __typename?: 'lists_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Lists_Min_Fields = {
  __typename?: 'lists_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "lists" */
export type Lists_Mutation_Response = {
  __typename?: 'lists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Lists>;
};

/** on_conflict condition type for table "lists" */
export type Lists_On_Conflict = {
  constraint: Lists_Constraint;
  update_columns?: Array<Lists_Update_Column>;
  where?: InputMaybe<Lists_Bool_Exp>;
};

/** Ordering options when selecting data from "lists". */
export type Lists_Order_By = {
  id?: InputMaybe<Order_By>;
  list_items_aggregate?: InputMaybe<List_Items_Aggregate_Order_By>;
  private?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: lists */
export type Lists_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "lists" */
export enum Lists_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Private = 'private',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "lists" */
export type Lists_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "lists" */
export type Lists_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Lists_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Lists_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "lists" */
export enum Lists_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Private = 'private',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

export type Lists_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Lists_Set_Input>;
  /** filter the rows which have to be updated */
  where: Lists_Bool_Exp;
};

/** columns and relationships of "media_statuses" */
export type Media_Statuses = {
  __typename?: 'media_statuses';
  name: Scalars['String']['output'];
};

/** aggregated selection of "media_statuses" */
export type Media_Statuses_Aggregate = {
  __typename?: 'media_statuses_aggregate';
  aggregate?: Maybe<Media_Statuses_Aggregate_Fields>;
  nodes: Array<Media_Statuses>;
};

/** aggregate fields of "media_statuses" */
export type Media_Statuses_Aggregate_Fields = {
  __typename?: 'media_statuses_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Media_Statuses_Max_Fields>;
  min?: Maybe<Media_Statuses_Min_Fields>;
};


/** aggregate fields of "media_statuses" */
export type Media_Statuses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Media_Statuses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "media_statuses". All fields are combined with a logical 'AND'. */
export type Media_Statuses_Bool_Exp = {
  _and?: InputMaybe<Array<Media_Statuses_Bool_Exp>>;
  _not?: InputMaybe<Media_Statuses_Bool_Exp>;
  _or?: InputMaybe<Array<Media_Statuses_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "media_statuses" */
export enum Media_Statuses_Constraint {
  /** unique or primary key constraint on columns "name" */
  MediaStatusesPkey = 'media_statuses_pkey'
}

export enum Media_Statuses_Enum {
  Cancelled = 'CANCELLED',
  InProduction = 'IN_PRODUCTION',
  Planned = 'PLANNED',
  PostProduction = 'POST_PRODUCTION',
  Released = 'RELEASED',
  Rumoured = 'RUMOURED'
}

/** Boolean expression to compare columns of type "media_statuses_enum". All fields are combined with logical 'AND'. */
export type Media_Statuses_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Media_Statuses_Enum>;
  _in?: InputMaybe<Array<Media_Statuses_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Media_Statuses_Enum>;
  _nin?: InputMaybe<Array<Media_Statuses_Enum>>;
};

/** input type for inserting data into table "media_statuses" */
export type Media_Statuses_Insert_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Media_Statuses_Max_Fields = {
  __typename?: 'media_statuses_max_fields';
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Media_Statuses_Min_Fields = {
  __typename?: 'media_statuses_min_fields';
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "media_statuses" */
export type Media_Statuses_Mutation_Response = {
  __typename?: 'media_statuses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Media_Statuses>;
};

/** on_conflict condition type for table "media_statuses" */
export type Media_Statuses_On_Conflict = {
  constraint: Media_Statuses_Constraint;
  update_columns?: Array<Media_Statuses_Update_Column>;
  where?: InputMaybe<Media_Statuses_Bool_Exp>;
};

/** Ordering options when selecting data from "media_statuses". */
export type Media_Statuses_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: media_statuses */
export type Media_Statuses_Pk_Columns_Input = {
  name: Scalars['String']['input'];
};

/** select columns of table "media_statuses" */
export enum Media_Statuses_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "media_statuses" */
export type Media_Statuses_Set_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "media_statuses" */
export type Media_Statuses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Media_Statuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Media_Statuses_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "media_statuses" */
export enum Media_Statuses_Update_Column {
  /** column name */
  Name = 'name'
}

export type Media_Statuses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Media_Statuses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Media_Statuses_Bool_Exp;
};

/** columns and relationships of "media_types" */
export type Media_Types = {
  __typename?: 'media_types';
  name: Scalars['String']['output'];
};

/** aggregated selection of "media_types" */
export type Media_Types_Aggregate = {
  __typename?: 'media_types_aggregate';
  aggregate?: Maybe<Media_Types_Aggregate_Fields>;
  nodes: Array<Media_Types>;
};

/** aggregate fields of "media_types" */
export type Media_Types_Aggregate_Fields = {
  __typename?: 'media_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Media_Types_Max_Fields>;
  min?: Maybe<Media_Types_Min_Fields>;
};


/** aggregate fields of "media_types" */
export type Media_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Media_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "media_types". All fields are combined with a logical 'AND'. */
export type Media_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Media_Types_Bool_Exp>>;
  _not?: InputMaybe<Media_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Media_Types_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "media_types" */
export enum Media_Types_Constraint {
  /** unique or primary key constraint on columns "name" */
  MediaTypesPkey = 'media_types_pkey'
}

export enum Media_Types_Enum {
  Book = 'BOOK',
  Episode = 'EPISODE',
  Game = 'GAME',
  Movie = 'MOVIE',
  Person = 'PERSON',
  Song = 'SONG',
  TvShow = 'TV_SHOW'
}

/** Boolean expression to compare columns of type "media_types_enum". All fields are combined with logical 'AND'. */
export type Media_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Media_Types_Enum>;
  _in?: InputMaybe<Array<Media_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Media_Types_Enum>;
  _nin?: InputMaybe<Array<Media_Types_Enum>>;
};

/** input type for inserting data into table "media_types" */
export type Media_Types_Insert_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Media_Types_Max_Fields = {
  __typename?: 'media_types_max_fields';
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Media_Types_Min_Fields = {
  __typename?: 'media_types_min_fields';
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "media_types" */
export type Media_Types_Mutation_Response = {
  __typename?: 'media_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Media_Types>;
};

/** on_conflict condition type for table "media_types" */
export type Media_Types_On_Conflict = {
  constraint: Media_Types_Constraint;
  update_columns?: Array<Media_Types_Update_Column>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "media_types". */
export type Media_Types_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: media_types */
export type Media_Types_Pk_Columns_Input = {
  name: Scalars['String']['input'];
};

/** select columns of table "media_types" */
export enum Media_Types_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "media_types" */
export type Media_Types_Set_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "media_types" */
export type Media_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Media_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Media_Types_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "media_types" */
export enum Media_Types_Update_Column {
  /** column name */
  Name = 'name'
}

export type Media_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Media_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Media_Types_Bool_Exp;
};

/** columns and relationships of "movie_credits" */
export type Movie_Credits = {
  __typename?: 'movie_credits';
  credit_type: Credit_Types_Enum;
  department: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  movie_id: Scalars['uuid']['output'];
  order: Scalars['Int']['output'];
  /** An object relationship */
  person: People;
  person_id: Scalars['uuid']['output'];
  role: Scalars['String']['output'];
};

/** aggregated selection of "movie_credits" */
export type Movie_Credits_Aggregate = {
  __typename?: 'movie_credits_aggregate';
  aggregate?: Maybe<Movie_Credits_Aggregate_Fields>;
  nodes: Array<Movie_Credits>;
};

export type Movie_Credits_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Credits_Aggregate_Bool_Exp_Count>;
};

export type Movie_Credits_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Credits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Credits_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_credits" */
export type Movie_Credits_Aggregate_Fields = {
  __typename?: 'movie_credits_aggregate_fields';
  avg?: Maybe<Movie_Credits_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Credits_Max_Fields>;
  min?: Maybe<Movie_Credits_Min_Fields>;
  stddev?: Maybe<Movie_Credits_Stddev_Fields>;
  stddev_pop?: Maybe<Movie_Credits_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Movie_Credits_Stddev_Samp_Fields>;
  sum?: Maybe<Movie_Credits_Sum_Fields>;
  var_pop?: Maybe<Movie_Credits_Var_Pop_Fields>;
  var_samp?: Maybe<Movie_Credits_Var_Samp_Fields>;
  variance?: Maybe<Movie_Credits_Variance_Fields>;
};


/** aggregate fields of "movie_credits" */
export type Movie_Credits_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Credits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_credits" */
export type Movie_Credits_Aggregate_Order_By = {
  avg?: InputMaybe<Movie_Credits_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Credits_Max_Order_By>;
  min?: InputMaybe<Movie_Credits_Min_Order_By>;
  stddev?: InputMaybe<Movie_Credits_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Movie_Credits_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Movie_Credits_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Movie_Credits_Sum_Order_By>;
  var_pop?: InputMaybe<Movie_Credits_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Movie_Credits_Var_Samp_Order_By>;
  variance?: InputMaybe<Movie_Credits_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "movie_credits" */
export type Movie_Credits_Arr_Rel_Insert_Input = {
  data: Array<Movie_Credits_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Credits_On_Conflict>;
};

/** aggregate avg on columns */
export type Movie_Credits_Avg_Fields = {
  __typename?: 'movie_credits_avg_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "movie_credits" */
export type Movie_Credits_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "movie_credits". All fields are combined with a logical 'AND'. */
export type Movie_Credits_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Credits_Bool_Exp>>;
  _not?: InputMaybe<Movie_Credits_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Credits_Bool_Exp>>;
  credit_type?: InputMaybe<Credit_Types_Enum_Comparison_Exp>;
  department?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  person?: InputMaybe<People_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_credits" */
export enum Movie_Credits_Constraint {
  /** unique or primary key constraint on columns "id", "order" */
  MovieCreditsIdOrderKey = 'movie_credits_id_order_key',
  /** unique or primary key constraint on columns "id" */
  MovieCreditsPkey = 'movie_credits_pkey'
}

/** input type for incrementing numeric columns in table "movie_credits" */
export type Movie_Credits_Inc_Input = {
  order?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "movie_credits" */
export type Movie_Credits_Insert_Input = {
  credit_type?: InputMaybe<Credit_Types_Enum>;
  department?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  person?: InputMaybe<People_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Movie_Credits_Max_Fields = {
  __typename?: 'movie_credits_max_fields';
  department?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "movie_credits" */
export type Movie_Credits_Max_Order_By = {
  department?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Credits_Min_Fields = {
  __typename?: 'movie_credits_min_fields';
  department?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "movie_credits" */
export type Movie_Credits_Min_Order_By = {
  department?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_credits" */
export type Movie_Credits_Mutation_Response = {
  __typename?: 'movie_credits_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Credits>;
};

/** on_conflict condition type for table "movie_credits" */
export type Movie_Credits_On_Conflict = {
  constraint: Movie_Credits_Constraint;
  update_columns?: Array<Movie_Credits_Update_Column>;
  where?: InputMaybe<Movie_Credits_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_credits". */
export type Movie_Credits_Order_By = {
  credit_type?: InputMaybe<Order_By>;
  department?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  person?: InputMaybe<People_Order_By>;
  person_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_credits */
export type Movie_Credits_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movie_credits" */
export enum Movie_Credits_Select_Column {
  /** column name */
  CreditType = 'credit_type',
  /** column name */
  Department = 'department',
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

/** input type for updating data in table "movie_credits" */
export type Movie_Credits_Set_Input = {
  credit_type?: InputMaybe<Credit_Types_Enum>;
  department?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Movie_Credits_Stddev_Fields = {
  __typename?: 'movie_credits_stddev_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "movie_credits" */
export type Movie_Credits_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Movie_Credits_Stddev_Pop_Fields = {
  __typename?: 'movie_credits_stddev_pop_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "movie_credits" */
export type Movie_Credits_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Movie_Credits_Stddev_Samp_Fields = {
  __typename?: 'movie_credits_stddev_samp_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "movie_credits" */
export type Movie_Credits_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "movie_credits" */
export type Movie_Credits_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Credits_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Credits_Stream_Cursor_Value_Input = {
  credit_type?: InputMaybe<Credit_Types_Enum>;
  department?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Movie_Credits_Sum_Fields = {
  __typename?: 'movie_credits_sum_fields';
  order?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "movie_credits" */
export type Movie_Credits_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** update columns of table "movie_credits" */
export enum Movie_Credits_Update_Column {
  /** column name */
  CreditType = 'credit_type',
  /** column name */
  Department = 'department',
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

export type Movie_Credits_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Movie_Credits_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Credits_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Credits_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Movie_Credits_Var_Pop_Fields = {
  __typename?: 'movie_credits_var_pop_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "movie_credits" */
export type Movie_Credits_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Movie_Credits_Var_Samp_Fields = {
  __typename?: 'movie_credits_var_samp_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "movie_credits" */
export type Movie_Credits_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Movie_Credits_Variance_Fields = {
  __typename?: 'movie_credits_variance_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "movie_credits" */
export type Movie_Credits_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** columns and relationships of "movie_genres" */
export type Movie_Genres = {
  __typename?: 'movie_genres';
  /** An object relationship */
  genre?: Maybe<Genres>;
  genre_id: Scalars['uuid']['output'];
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

/** columns and relationships of "movie_production_companies" */
export type Movie_Production_Companies = {
  __typename?: 'movie_production_companies';
  company_id: Scalars['uuid']['output'];
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
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_production_companies" */
export enum Movie_Production_Companies_Constraint {
  /** unique or primary key constraint on columns "movie_id", "company_id" */
  MovieProductionCompaniesPkey = 'movie_production_companies_pkey'
}

/** input type for inserting data into table "movie_production_companies" */
export type Movie_Production_Companies_Insert_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Production_Companies_Max_Fields = {
  __typename?: 'movie_production_companies_max_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_production_companies" */
export type Movie_Production_Companies_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Production_Companies_Min_Fields = {
  __typename?: 'movie_production_companies_min_fields';
  company_id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_production_companies" */
export type Movie_Production_Companies_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
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
  company_id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_production_companies */
export type Movie_Production_Companies_Pk_Columns_Input = {
  company_id: Scalars['uuid']['input'];
  movie_id: Scalars['uuid']['input'];
};

/** select columns of table "movie_production_companies" */
export enum Movie_Production_Companies_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  MovieId = 'movie_id'
}

/** input type for updating data in table "movie_production_companies" */
export type Movie_Production_Companies_Set_Input = {
  company_id?: InputMaybe<Scalars['uuid']['input']>;
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
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "movie_production_companies" */
export enum Movie_Production_Companies_Update_Column {
  /** column name */
  CompanyId = 'company_id',
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
  country_code: Scalars['bpchar']['output'];
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
  country_code?: InputMaybe<Bpchar_Comparison_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_production_countries" */
export enum Movie_Production_Countries_Constraint {
  /** unique or primary key constraint on columns "movie_id", "country_code" */
  MovieProductionCountriesPkey = 'movie_production_countries_pkey'
}

/** input type for inserting data into table "movie_production_countries" */
export type Movie_Production_Countries_Insert_Input = {
  country_code?: InputMaybe<Scalars['bpchar']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Production_Countries_Max_Fields = {
  __typename?: 'movie_production_countries_max_fields';
  country_code?: Maybe<Scalars['bpchar']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_production_countries" */
export type Movie_Production_Countries_Max_Order_By = {
  country_code?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Production_Countries_Min_Fields = {
  __typename?: 'movie_production_countries_min_fields';
  country_code?: Maybe<Scalars['bpchar']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_production_countries" */
export type Movie_Production_Countries_Min_Order_By = {
  country_code?: InputMaybe<Order_By>;
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
  country_code?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_production_countries */
export type Movie_Production_Countries_Pk_Columns_Input = {
  country_code: Scalars['bpchar']['input'];
  movie_id: Scalars['uuid']['input'];
};

/** select columns of table "movie_production_countries" */
export enum Movie_Production_Countries_Select_Column {
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  MovieId = 'movie_id'
}

/** input type for updating data in table "movie_production_countries" */
export type Movie_Production_Countries_Set_Input = {
  country_code?: InputMaybe<Scalars['bpchar']['input']>;
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
  country_code?: InputMaybe<Scalars['bpchar']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "movie_production_countries" */
export enum Movie_Production_Countries_Update_Column {
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  MovieId = 'movie_id'
}

export type Movie_Production_Countries_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Production_Countries_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Production_Countries_Bool_Exp;
};

/** columns and relationships of "movie_spoken_languages" */
export type Movie_Spoken_Languages = {
  __typename?: 'movie_spoken_languages';
  language_code: Scalars['bpchar']['output'];
  movie_id: Scalars['uuid']['output'];
};

/** aggregated selection of "movie_spoken_languages" */
export type Movie_Spoken_Languages_Aggregate = {
  __typename?: 'movie_spoken_languages_aggregate';
  aggregate?: Maybe<Movie_Spoken_Languages_Aggregate_Fields>;
  nodes: Array<Movie_Spoken_Languages>;
};

export type Movie_Spoken_Languages_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movie_Spoken_Languages_Aggregate_Bool_Exp_Count>;
};

export type Movie_Spoken_Languages_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movie_Spoken_Languages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movie_Spoken_Languages_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "movie_spoken_languages" */
export type Movie_Spoken_Languages_Aggregate_Fields = {
  __typename?: 'movie_spoken_languages_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Movie_Spoken_Languages_Max_Fields>;
  min?: Maybe<Movie_Spoken_Languages_Min_Fields>;
};


/** aggregate fields of "movie_spoken_languages" */
export type Movie_Spoken_Languages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Spoken_Languages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "movie_spoken_languages" */
export type Movie_Spoken_Languages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Spoken_Languages_Max_Order_By>;
  min?: InputMaybe<Movie_Spoken_Languages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "movie_spoken_languages" */
export type Movie_Spoken_Languages_Arr_Rel_Insert_Input = {
  data: Array<Movie_Spoken_Languages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movie_Spoken_Languages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "movie_spoken_languages". All fields are combined with a logical 'AND'. */
export type Movie_Spoken_Languages_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Spoken_Languages_Bool_Exp>>;
  _not?: InputMaybe<Movie_Spoken_Languages_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Spoken_Languages_Bool_Exp>>;
  language_code?: InputMaybe<Bpchar_Comparison_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "movie_spoken_languages" */
export enum Movie_Spoken_Languages_Constraint {
  /** unique or primary key constraint on columns "movie_id", "language_code" */
  MovieSpokenLanguagesPkey = 'movie_spoken_languages_pkey'
}

/** input type for inserting data into table "movie_spoken_languages" */
export type Movie_Spoken_Languages_Insert_Input = {
  language_code?: InputMaybe<Scalars['bpchar']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Movie_Spoken_Languages_Max_Fields = {
  __typename?: 'movie_spoken_languages_max_fields';
  language_code?: Maybe<Scalars['bpchar']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "movie_spoken_languages" */
export type Movie_Spoken_Languages_Max_Order_By = {
  language_code?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Spoken_Languages_Min_Fields = {
  __typename?: 'movie_spoken_languages_min_fields';
  language_code?: Maybe<Scalars['bpchar']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "movie_spoken_languages" */
export type Movie_Spoken_Languages_Min_Order_By = {
  language_code?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movie_spoken_languages" */
export type Movie_Spoken_Languages_Mutation_Response = {
  __typename?: 'movie_spoken_languages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movie_Spoken_Languages>;
};

/** on_conflict condition type for table "movie_spoken_languages" */
export type Movie_Spoken_Languages_On_Conflict = {
  constraint: Movie_Spoken_Languages_Constraint;
  update_columns?: Array<Movie_Spoken_Languages_Update_Column>;
  where?: InputMaybe<Movie_Spoken_Languages_Bool_Exp>;
};

/** Ordering options when selecting data from "movie_spoken_languages". */
export type Movie_Spoken_Languages_Order_By = {
  language_code?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movie_spoken_languages */
export type Movie_Spoken_Languages_Pk_Columns_Input = {
  language_code: Scalars['bpchar']['input'];
  movie_id: Scalars['uuid']['input'];
};

/** select columns of table "movie_spoken_languages" */
export enum Movie_Spoken_Languages_Select_Column {
  /** column name */
  LanguageCode = 'language_code',
  /** column name */
  MovieId = 'movie_id'
}

/** input type for updating data in table "movie_spoken_languages" */
export type Movie_Spoken_Languages_Set_Input = {
  language_code?: InputMaybe<Scalars['bpchar']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "movie_spoken_languages" */
export type Movie_Spoken_Languages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movie_Spoken_Languages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movie_Spoken_Languages_Stream_Cursor_Value_Input = {
  language_code?: InputMaybe<Scalars['bpchar']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "movie_spoken_languages" */
export enum Movie_Spoken_Languages_Update_Column {
  /** column name */
  LanguageCode = 'language_code',
  /** column name */
  MovieId = 'movie_id'
}

export type Movie_Spoken_Languages_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movie_Spoken_Languages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movie_Spoken_Languages_Bool_Exp;
};

/** columns and relationships of "movies" */
export type Movies = {
  __typename?: 'movies';
  /** An object relationship */
  backdrop?: Maybe<Files>;
  backdrop_id?: Maybe<Scalars['uuid']['output']>;
  budget?: Maybe<Scalars['bigint']['output']>;
  certification?: Maybe<Certifications_Enum>;
  /** An object relationship */
  collection?: Maybe<Collections>;
  collection_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  genres: Array<Movie_Genres>;
  /** An aggregate relationship */
  genres_aggregate: Movie_Genres_Aggregate;
  homepage?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  /** An object relationship */
  language?: Maybe<Languages>;
  language_code?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  movie_credits: Array<Movie_Credits>;
  /** An aggregate relationship */
  movie_credits_aggregate: Movie_Credits_Aggregate;
  /** An array relationship */
  movie_production_companies: Array<Movie_Production_Companies>;
  /** An aggregate relationship */
  movie_production_companies_aggregate: Movie_Production_Companies_Aggregate;
  /** An array relationship */
  movie_production_countries: Array<Movie_Production_Countries>;
  /** An aggregate relationship */
  movie_production_countries_aggregate: Movie_Production_Countries_Aggregate;
  /** An array relationship */
  movie_spoken_languages: Array<Movie_Spoken_Languages>;
  /** An aggregate relationship */
  movie_spoken_languages_aggregate: Movie_Spoken_Languages_Aggregate;
  overview?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  /** An object relationship */
  poster?: Maybe<Files>;
  poster_id?: Maybe<Scalars['uuid']['output']>;
  production_country_codes?: Maybe<Array<Scalars['String']['output']>>;
  release_date?: Maybe<Scalars['date']['output']>;
  revenue?: Maybe<Scalars['bigint']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Media_Statuses_Enum>;
  tagline?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "get_user_movie_activity" */
  user_movie_activity?: Maybe<Array<User_Movie_Activities>>;
  /** An array relationship */
  user_movie_watches: Array<User_Movie_Watches>;
  /** An aggregate relationship */
  user_movie_watches_aggregate: User_Movie_Watches_Aggregate;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "movies" */
export type MoviesGenresArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Genres_Order_By>>;
  where?: InputMaybe<Movie_Genres_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesGenres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genres_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Genres_Order_By>>;
  where?: InputMaybe<Movie_Genres_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_CreditsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Credits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Credits_Order_By>>;
  where?: InputMaybe<Movie_Credits_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Credits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Credits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Credits_Order_By>>;
  where?: InputMaybe<Movie_Credits_Bool_Exp>;
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
export type MoviesMovie_Spoken_LanguagesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Spoken_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Spoken_Languages_Order_By>>;
  where?: InputMaybe<Movie_Spoken_Languages_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesMovie_Spoken_Languages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Spoken_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Spoken_Languages_Order_By>>;
  where?: InputMaybe<Movie_Spoken_Languages_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesUser_Movie_ActivityArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Activities_Order_By>>;
  where?: InputMaybe<User_Movie_Activities_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesUser_Movie_WatchesArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Watches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Watches_Order_By>>;
  where?: InputMaybe<User_Movie_Watches_Bool_Exp>;
};


/** columns and relationships of "movies" */
export type MoviesUser_Movie_Watches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Watches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Watches_Order_By>>;
  where?: InputMaybe<User_Movie_Watches_Bool_Exp>;
};

/** aggregated selection of "movies" */
export type Movies_Aggregate = {
  __typename?: 'movies_aggregate';
  aggregate?: Maybe<Movies_Aggregate_Fields>;
  nodes: Array<Movies>;
};

export type Movies_Aggregate_Bool_Exp = {
  count?: InputMaybe<Movies_Aggregate_Bool_Exp_Count>;
};

export type Movies_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Movies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Movies_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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

/** order by aggregate values of table "movies" */
export type Movies_Aggregate_Order_By = {
  avg?: InputMaybe<Movies_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movies_Max_Order_By>;
  min?: InputMaybe<Movies_Min_Order_By>;
  stddev?: InputMaybe<Movies_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Movies_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Movies_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Movies_Sum_Order_By>;
  var_pop?: InputMaybe<Movies_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Movies_Var_Samp_Order_By>;
  variance?: InputMaybe<Movies_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "movies" */
export type Movies_Arr_Rel_Insert_Input = {
  data: Array<Movies_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Movies_On_Conflict>;
};

/** aggregate avg on columns */
export type Movies_Avg_Fields = {
  __typename?: 'movies_avg_fields';
  budget?: Maybe<Scalars['Float']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "movies" */
export type Movies_Avg_Order_By = {
  budget?: InputMaybe<Order_By>;
  popularity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  runtime?: InputMaybe<Order_By>;
  vote_average?: InputMaybe<Order_By>;
  vote_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "movies". All fields are combined with a logical 'AND'. */
export type Movies_Bool_Exp = {
  _and?: InputMaybe<Array<Movies_Bool_Exp>>;
  _not?: InputMaybe<Movies_Bool_Exp>;
  _or?: InputMaybe<Array<Movies_Bool_Exp>>;
  backdrop?: InputMaybe<Files_Bool_Exp>;
  backdrop_id?: InputMaybe<Uuid_Comparison_Exp>;
  budget?: InputMaybe<Bigint_Comparison_Exp>;
  certification?: InputMaybe<Certifications_Enum_Comparison_Exp>;
  collection?: InputMaybe<Collections_Bool_Exp>;
  collection_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  genres?: InputMaybe<Movie_Genres_Bool_Exp>;
  genres_aggregate?: InputMaybe<Movie_Genres_Aggregate_Bool_Exp>;
  homepage?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  keywords?: InputMaybe<String_Array_Comparison_Exp>;
  language?: InputMaybe<Languages_Bool_Exp>;
  language_code?: InputMaybe<String_Comparison_Exp>;
  movie_credits?: InputMaybe<Movie_Credits_Bool_Exp>;
  movie_credits_aggregate?: InputMaybe<Movie_Credits_Aggregate_Bool_Exp>;
  movie_production_companies?: InputMaybe<Movie_Production_Companies_Bool_Exp>;
  movie_production_companies_aggregate?: InputMaybe<Movie_Production_Companies_Aggregate_Bool_Exp>;
  movie_production_countries?: InputMaybe<Movie_Production_Countries_Bool_Exp>;
  movie_production_countries_aggregate?: InputMaybe<Movie_Production_Countries_Aggregate_Bool_Exp>;
  movie_spoken_languages?: InputMaybe<Movie_Spoken_Languages_Bool_Exp>;
  movie_spoken_languages_aggregate?: InputMaybe<Movie_Spoken_Languages_Aggregate_Bool_Exp>;
  overview?: InputMaybe<String_Comparison_Exp>;
  popularity?: InputMaybe<Float_Comparison_Exp>;
  poster?: InputMaybe<Files_Bool_Exp>;
  poster_id?: InputMaybe<Uuid_Comparison_Exp>;
  production_country_codes?: InputMaybe<String_Array_Comparison_Exp>;
  release_date?: InputMaybe<Date_Comparison_Exp>;
  revenue?: InputMaybe<Bigint_Comparison_Exp>;
  runtime?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Media_Statuses_Enum_Comparison_Exp>;
  tagline?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_movie_activity?: InputMaybe<User_Movie_Activities_Bool_Exp>;
  user_movie_watches?: InputMaybe<User_Movie_Watches_Bool_Exp>;
  user_movie_watches_aggregate?: InputMaybe<User_Movie_Watches_Aggregate_Bool_Exp>;
  vote_average?: InputMaybe<Float_Comparison_Exp>;
  vote_count?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "movies" */
export enum Movies_Constraint {
  /** unique or primary key constraint on columns "id" */
  MoviesPkey = 'movies_pkey'
}

/** input type for incrementing numeric columns in table "movies" */
export type Movies_Inc_Input = {
  budget?: InputMaybe<Scalars['bigint']['input']>;
  popularity?: InputMaybe<Scalars['Float']['input']>;
  revenue?: InputMaybe<Scalars['bigint']['input']>;
  runtime?: InputMaybe<Scalars['Int']['input']>;
  vote_average?: InputMaybe<Scalars['Float']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "movies" */
export type Movies_Insert_Input = {
  backdrop?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  backdrop_id?: InputMaybe<Scalars['uuid']['input']>;
  budget?: InputMaybe<Scalars['bigint']['input']>;
  certification?: InputMaybe<Certifications_Enum>;
  collection?: InputMaybe<Collections_Obj_Rel_Insert_Input>;
  collection_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  genres?: InputMaybe<Movie_Genres_Arr_Rel_Insert_Input>;
  homepage?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  language?: InputMaybe<Languages_Obj_Rel_Insert_Input>;
  language_code?: InputMaybe<Scalars['String']['input']>;
  movie_credits?: InputMaybe<Movie_Credits_Arr_Rel_Insert_Input>;
  movie_production_companies?: InputMaybe<Movie_Production_Companies_Arr_Rel_Insert_Input>;
  movie_production_countries?: InputMaybe<Movie_Production_Countries_Arr_Rel_Insert_Input>;
  movie_spoken_languages?: InputMaybe<Movie_Spoken_Languages_Arr_Rel_Insert_Input>;
  overview?: InputMaybe<Scalars['String']['input']>;
  popularity?: InputMaybe<Scalars['Float']['input']>;
  poster?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  poster_id?: InputMaybe<Scalars['uuid']['input']>;
  production_country_codes?: InputMaybe<Array<Scalars['String']['input']>>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  revenue?: InputMaybe<Scalars['bigint']['input']>;
  runtime?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Media_Statuses_Enum>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_movie_watches?: InputMaybe<User_Movie_Watches_Arr_Rel_Insert_Input>;
  vote_average?: InputMaybe<Scalars['Float']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Movies_Max_Fields = {
  __typename?: 'movies_max_fields';
  backdrop_id?: Maybe<Scalars['uuid']['output']>;
  budget?: Maybe<Scalars['bigint']['output']>;
  collection_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  homepage?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  language_code?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  poster_id?: Maybe<Scalars['uuid']['output']>;
  production_country_codes?: Maybe<Array<Scalars['String']['output']>>;
  release_date?: Maybe<Scalars['date']['output']>;
  revenue?: Maybe<Scalars['bigint']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "movies" */
export type Movies_Max_Order_By = {
  backdrop_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  homepage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  language_code?: InputMaybe<Order_By>;
  overview?: InputMaybe<Order_By>;
  popularity?: InputMaybe<Order_By>;
  poster_id?: InputMaybe<Order_By>;
  production_country_codes?: InputMaybe<Order_By>;
  release_date?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  runtime?: InputMaybe<Order_By>;
  tagline?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vote_average?: InputMaybe<Order_By>;
  vote_count?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movies_Min_Fields = {
  __typename?: 'movies_min_fields';
  backdrop_id?: Maybe<Scalars['uuid']['output']>;
  budget?: Maybe<Scalars['bigint']['output']>;
  collection_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  homepage?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  language_code?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  poster_id?: Maybe<Scalars['uuid']['output']>;
  production_country_codes?: Maybe<Array<Scalars['String']['output']>>;
  release_date?: Maybe<Scalars['date']['output']>;
  revenue?: Maybe<Scalars['bigint']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "movies" */
export type Movies_Min_Order_By = {
  backdrop_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  homepage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  language_code?: InputMaybe<Order_By>;
  overview?: InputMaybe<Order_By>;
  popularity?: InputMaybe<Order_By>;
  poster_id?: InputMaybe<Order_By>;
  production_country_codes?: InputMaybe<Order_By>;
  release_date?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  runtime?: InputMaybe<Order_By>;
  tagline?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vote_average?: InputMaybe<Order_By>;
  vote_count?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "movies" */
export type Movies_Mutation_Response = {
  __typename?: 'movies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Movies>;
};

/** on_conflict condition type for table "movies" */
export type Movies_On_Conflict = {
  constraint: Movies_Constraint;
  update_columns?: Array<Movies_Update_Column>;
  where?: InputMaybe<Movies_Bool_Exp>;
};

/** Ordering options when selecting data from "movies". */
export type Movies_Order_By = {
  backdrop?: InputMaybe<Files_Order_By>;
  backdrop_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  certification?: InputMaybe<Order_By>;
  collection?: InputMaybe<Collections_Order_By>;
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  genres_aggregate?: InputMaybe<Movie_Genres_Aggregate_Order_By>;
  homepage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  language?: InputMaybe<Languages_Order_By>;
  language_code?: InputMaybe<Order_By>;
  movie_credits_aggregate?: InputMaybe<Movie_Credits_Aggregate_Order_By>;
  movie_production_companies_aggregate?: InputMaybe<Movie_Production_Companies_Aggregate_Order_By>;
  movie_production_countries_aggregate?: InputMaybe<Movie_Production_Countries_Aggregate_Order_By>;
  movie_spoken_languages_aggregate?: InputMaybe<Movie_Spoken_Languages_Aggregate_Order_By>;
  overview?: InputMaybe<Order_By>;
  popularity?: InputMaybe<Order_By>;
  poster?: InputMaybe<Files_Order_By>;
  poster_id?: InputMaybe<Order_By>;
  production_country_codes?: InputMaybe<Order_By>;
  release_date?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  runtime?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tagline?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_movie_activity_aggregate?: InputMaybe<User_Movie_Activities_Aggregate_Order_By>;
  user_movie_watches_aggregate?: InputMaybe<User_Movie_Watches_Aggregate_Order_By>;
  vote_average?: InputMaybe<Order_By>;
  vote_count?: InputMaybe<Order_By>;
};

/** primary key columns input for table: movies */
export type Movies_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "movies" */
export enum Movies_Select_Column {
  /** column name */
  BackdropId = 'backdrop_id',
  /** column name */
  Budget = 'budget',
  /** column name */
  Certification = 'certification',
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Homepage = 'homepage',
  /** column name */
  Id = 'id',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  LanguageCode = 'language_code',
  /** column name */
  Overview = 'overview',
  /** column name */
  Popularity = 'popularity',
  /** column name */
  PosterId = 'poster_id',
  /** column name */
  ProductionCountryCodes = 'production_country_codes',
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
  UpdatedAt = 'updated_at',
  /** column name */
  VoteAverage = 'vote_average',
  /** column name */
  VoteCount = 'vote_count'
}

/** input type for updating data in table "movies" */
export type Movies_Set_Input = {
  backdrop_id?: InputMaybe<Scalars['uuid']['input']>;
  budget?: InputMaybe<Scalars['bigint']['input']>;
  certification?: InputMaybe<Certifications_Enum>;
  collection_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  homepage?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  language_code?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
  popularity?: InputMaybe<Scalars['Float']['input']>;
  poster_id?: InputMaybe<Scalars['uuid']['input']>;
  production_country_codes?: InputMaybe<Array<Scalars['String']['input']>>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  revenue?: InputMaybe<Scalars['bigint']['input']>;
  runtime?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Media_Statuses_Enum>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vote_average?: InputMaybe<Scalars['Float']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Movies_Stddev_Fields = {
  __typename?: 'movies_stddev_fields';
  budget?: Maybe<Scalars['Float']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "movies" */
export type Movies_Stddev_Order_By = {
  budget?: InputMaybe<Order_By>;
  popularity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  runtime?: InputMaybe<Order_By>;
  vote_average?: InputMaybe<Order_By>;
  vote_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Movies_Stddev_Pop_Fields = {
  __typename?: 'movies_stddev_pop_fields';
  budget?: Maybe<Scalars['Float']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "movies" */
export type Movies_Stddev_Pop_Order_By = {
  budget?: InputMaybe<Order_By>;
  popularity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  runtime?: InputMaybe<Order_By>;
  vote_average?: InputMaybe<Order_By>;
  vote_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Movies_Stddev_Samp_Fields = {
  __typename?: 'movies_stddev_samp_fields';
  budget?: Maybe<Scalars['Float']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "movies" */
export type Movies_Stddev_Samp_Order_By = {
  budget?: InputMaybe<Order_By>;
  popularity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  runtime?: InputMaybe<Order_By>;
  vote_average?: InputMaybe<Order_By>;
  vote_count?: InputMaybe<Order_By>;
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
  backdrop_id?: InputMaybe<Scalars['uuid']['input']>;
  budget?: InputMaybe<Scalars['bigint']['input']>;
  certification?: InputMaybe<Certifications_Enum>;
  collection_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  homepage?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  language_code?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
  popularity?: InputMaybe<Scalars['Float']['input']>;
  poster_id?: InputMaybe<Scalars['uuid']['input']>;
  production_country_codes?: InputMaybe<Array<Scalars['String']['input']>>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  revenue?: InputMaybe<Scalars['bigint']['input']>;
  runtime?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Media_Statuses_Enum>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vote_average?: InputMaybe<Scalars['Float']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Movies_Sum_Fields = {
  __typename?: 'movies_sum_fields';
  budget?: Maybe<Scalars['bigint']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['bigint']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "movies" */
export type Movies_Sum_Order_By = {
  budget?: InputMaybe<Order_By>;
  popularity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  runtime?: InputMaybe<Order_By>;
  vote_average?: InputMaybe<Order_By>;
  vote_count?: InputMaybe<Order_By>;
};

/** update columns of table "movies" */
export enum Movies_Update_Column {
  /** column name */
  BackdropId = 'backdrop_id',
  /** column name */
  Budget = 'budget',
  /** column name */
  Certification = 'certification',
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Homepage = 'homepage',
  /** column name */
  Id = 'id',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  LanguageCode = 'language_code',
  /** column name */
  Overview = 'overview',
  /** column name */
  Popularity = 'popularity',
  /** column name */
  PosterId = 'poster_id',
  /** column name */
  ProductionCountryCodes = 'production_country_codes',
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
  UpdatedAt = 'updated_at',
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
  budget?: Maybe<Scalars['Float']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "movies" */
export type Movies_Var_Pop_Order_By = {
  budget?: InputMaybe<Order_By>;
  popularity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  runtime?: InputMaybe<Order_By>;
  vote_average?: InputMaybe<Order_By>;
  vote_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Movies_Var_Samp_Fields = {
  __typename?: 'movies_var_samp_fields';
  budget?: Maybe<Scalars['Float']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "movies" */
export type Movies_Var_Samp_Order_By = {
  budget?: InputMaybe<Order_By>;
  popularity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  runtime?: InputMaybe<Order_By>;
  vote_average?: InputMaybe<Order_By>;
  vote_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Movies_Variance_Fields = {
  __typename?: 'movies_variance_fields';
  budget?: Maybe<Scalars['Float']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "movies" */
export type Movies_Variance_Order_By = {
  budget?: InputMaybe<Order_By>;
  popularity?: InputMaybe<Order_By>;
  revenue?: InputMaybe<Order_By>;
  runtime?: InputMaybe<Order_By>;
  vote_average?: InputMaybe<Order_By>;
  vote_count?: InputMaybe<Order_By>;
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
  /** delete data from the table: "activity_logs" */
  delete_activity_logs?: Maybe<Activity_Logs_Mutation_Response>;
  /** delete single row from the table: "activity_logs" */
  delete_activity_logs_by_pk?: Maybe<Activity_Logs>;
  /** delete data from the table: "audit_logs" */
  delete_audit_logs?: Maybe<Audit_Logs_Mutation_Response>;
  /** delete single row from the table: "audit_logs" */
  delete_audit_logs_by_pk?: Maybe<Audit_Logs>;
  /** delete data from the table: "certifications" */
  delete_certifications?: Maybe<Certifications_Mutation_Response>;
  /** delete single row from the table: "certifications" */
  delete_certifications_by_pk?: Maybe<Certifications>;
  /** delete data from the table: "collections" */
  delete_collections?: Maybe<Collections_Mutation_Response>;
  /** delete single row from the table: "collections" */
  delete_collections_by_pk?: Maybe<Collections>;
  /** delete data from the table: "countries" */
  delete_countries?: Maybe<Countries_Mutation_Response>;
  /** delete single row from the table: "countries" */
  delete_countries_by_pk?: Maybe<Countries>;
  /** delete data from the table: "credit_types" */
  delete_credit_types?: Maybe<Credit_Types_Mutation_Response>;
  /** delete single row from the table: "credit_types" */
  delete_credit_types_by_pk?: Maybe<Credit_Types>;
  /** delete data from the table: "external_ids" */
  delete_external_ids?: Maybe<External_Ids_Mutation_Response>;
  /** delete single row from the table: "external_ids" */
  delete_external_ids_by_pk?: Maybe<External_Ids>;
  /** delete data from the table: "genders" */
  delete_genders?: Maybe<Genders_Mutation_Response>;
  /** delete single row from the table: "genders" */
  delete_genders_by_pk?: Maybe<Genders>;
  /** delete data from the table: "genres" */
  delete_genres?: Maybe<Genres_Mutation_Response>;
  /** delete single row from the table: "genres" */
  delete_genres_by_pk?: Maybe<Genres>;
  /** delete data from the table: "languages" */
  delete_languages?: Maybe<Languages_Mutation_Response>;
  /** delete single row from the table: "languages" */
  delete_languages_by_pk?: Maybe<Languages>;
  /** delete data from the table: "list_items" */
  delete_list_items?: Maybe<List_Items_Mutation_Response>;
  /** delete single row from the table: "list_items" */
  delete_list_items_by_pk?: Maybe<List_Items>;
  /** delete data from the table: "lists" */
  delete_lists?: Maybe<Lists_Mutation_Response>;
  /** delete single row from the table: "lists" */
  delete_lists_by_pk?: Maybe<Lists>;
  /** delete data from the table: "media_statuses" */
  delete_media_statuses?: Maybe<Media_Statuses_Mutation_Response>;
  /** delete single row from the table: "media_statuses" */
  delete_media_statuses_by_pk?: Maybe<Media_Statuses>;
  /** delete data from the table: "media_types" */
  delete_media_types?: Maybe<Media_Types_Mutation_Response>;
  /** delete single row from the table: "media_types" */
  delete_media_types_by_pk?: Maybe<Media_Types>;
  /** delete data from the table: "movie_credits" */
  delete_movie_credits?: Maybe<Movie_Credits_Mutation_Response>;
  /** delete single row from the table: "movie_credits" */
  delete_movie_credits_by_pk?: Maybe<Movie_Credits>;
  /** delete data from the table: "movie_genres" */
  delete_movie_genres?: Maybe<Movie_Genres_Mutation_Response>;
  /** delete single row from the table: "movie_genres" */
  delete_movie_genres_by_pk?: Maybe<Movie_Genres>;
  /** delete data from the table: "movie_production_companies" */
  delete_movie_production_companies?: Maybe<Movie_Production_Companies_Mutation_Response>;
  /** delete single row from the table: "movie_production_companies" */
  delete_movie_production_companies_by_pk?: Maybe<Movie_Production_Companies>;
  /** delete data from the table: "movie_production_countries" */
  delete_movie_production_countries?: Maybe<Movie_Production_Countries_Mutation_Response>;
  /** delete single row from the table: "movie_production_countries" */
  delete_movie_production_countries_by_pk?: Maybe<Movie_Production_Countries>;
  /** delete data from the table: "movie_spoken_languages" */
  delete_movie_spoken_languages?: Maybe<Movie_Spoken_Languages_Mutation_Response>;
  /** delete single row from the table: "movie_spoken_languages" */
  delete_movie_spoken_languages_by_pk?: Maybe<Movie_Spoken_Languages>;
  /** delete data from the table: "movies" */
  delete_movies?: Maybe<Movies_Mutation_Response>;
  /** delete single row from the table: "movies" */
  delete_movies_by_pk?: Maybe<Movies>;
  /** delete data from the table: "people" */
  delete_people?: Maybe<People_Mutation_Response>;
  /** delete single row from the table: "people" */
  delete_people_by_pk?: Maybe<People>;
  /** delete data from the table: "production_companies" */
  delete_production_companies?: Maybe<Production_Companies_Mutation_Response>;
  /** delete single row from the table: "production_companies" */
  delete_production_companies_by_pk?: Maybe<Production_Companies>;
  /** delete data from the table: "sources" */
  delete_sources?: Maybe<Sources_Mutation_Response>;
  /** delete single row from the table: "sources" */
  delete_sources_by_pk?: Maybe<Sources>;
  /** delete data from the table: "user_movie_activities" */
  delete_user_movie_activities?: Maybe<User_Movie_Activities_Mutation_Response>;
  /** delete single row from the table: "user_movie_activities" */
  delete_user_movie_activities_by_pk?: Maybe<User_Movie_Activities>;
  /** delete data from the table: "user_movie_statuses" */
  delete_user_movie_statuses?: Maybe<User_Movie_Statuses_Mutation_Response>;
  /** delete single row from the table: "user_movie_statuses" */
  delete_user_movie_statuses_by_pk?: Maybe<User_Movie_Statuses>;
  /** delete data from the table: "user_movie_watches" */
  delete_user_movie_watches?: Maybe<User_Movie_Watches_Mutation_Response>;
  /** delete single row from the table: "user_movie_watches" */
  delete_user_movie_watches_by_pk?: Maybe<User_Movie_Watches>;
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
  /** insert data into the table: "activity_logs" */
  insert_activity_logs?: Maybe<Activity_Logs_Mutation_Response>;
  /** insert a single row into the table: "activity_logs" */
  insert_activity_logs_one?: Maybe<Activity_Logs>;
  /** insert data into the table: "audit_logs" */
  insert_audit_logs?: Maybe<Audit_Logs_Mutation_Response>;
  /** insert a single row into the table: "audit_logs" */
  insert_audit_logs_one?: Maybe<Audit_Logs>;
  /** insert data into the table: "certifications" */
  insert_certifications?: Maybe<Certifications_Mutation_Response>;
  /** insert a single row into the table: "certifications" */
  insert_certifications_one?: Maybe<Certifications>;
  /** insert data into the table: "collections" */
  insert_collections?: Maybe<Collections_Mutation_Response>;
  /** insert a single row into the table: "collections" */
  insert_collections_one?: Maybe<Collections>;
  /** insert data into the table: "countries" */
  insert_countries?: Maybe<Countries_Mutation_Response>;
  /** insert a single row into the table: "countries" */
  insert_countries_one?: Maybe<Countries>;
  /** insert data into the table: "credit_types" */
  insert_credit_types?: Maybe<Credit_Types_Mutation_Response>;
  /** insert a single row into the table: "credit_types" */
  insert_credit_types_one?: Maybe<Credit_Types>;
  /** insert data into the table: "external_ids" */
  insert_external_ids?: Maybe<External_Ids_Mutation_Response>;
  /** insert a single row into the table: "external_ids" */
  insert_external_ids_one?: Maybe<External_Ids>;
  /** insert data into the table: "genders" */
  insert_genders?: Maybe<Genders_Mutation_Response>;
  /** insert a single row into the table: "genders" */
  insert_genders_one?: Maybe<Genders>;
  /** insert data into the table: "genres" */
  insert_genres?: Maybe<Genres_Mutation_Response>;
  /** insert a single row into the table: "genres" */
  insert_genres_one?: Maybe<Genres>;
  /** insert data into the table: "languages" */
  insert_languages?: Maybe<Languages_Mutation_Response>;
  /** insert a single row into the table: "languages" */
  insert_languages_one?: Maybe<Languages>;
  /** insert data into the table: "list_items" */
  insert_list_items?: Maybe<List_Items_Mutation_Response>;
  /** insert a single row into the table: "list_items" */
  insert_list_items_one?: Maybe<List_Items>;
  /** insert data into the table: "lists" */
  insert_lists?: Maybe<Lists_Mutation_Response>;
  /** insert a single row into the table: "lists" */
  insert_lists_one?: Maybe<Lists>;
  /** insert data into the table: "media_statuses" */
  insert_media_statuses?: Maybe<Media_Statuses_Mutation_Response>;
  /** insert a single row into the table: "media_statuses" */
  insert_media_statuses_one?: Maybe<Media_Statuses>;
  /** insert data into the table: "media_types" */
  insert_media_types?: Maybe<Media_Types_Mutation_Response>;
  /** insert a single row into the table: "media_types" */
  insert_media_types_one?: Maybe<Media_Types>;
  /** insert data into the table: "movie_credits" */
  insert_movie_credits?: Maybe<Movie_Credits_Mutation_Response>;
  /** insert a single row into the table: "movie_credits" */
  insert_movie_credits_one?: Maybe<Movie_Credits>;
  /** insert data into the table: "movie_genres" */
  insert_movie_genres?: Maybe<Movie_Genres_Mutation_Response>;
  /** insert a single row into the table: "movie_genres" */
  insert_movie_genres_one?: Maybe<Movie_Genres>;
  /** insert data into the table: "movie_production_companies" */
  insert_movie_production_companies?: Maybe<Movie_Production_Companies_Mutation_Response>;
  /** insert a single row into the table: "movie_production_companies" */
  insert_movie_production_companies_one?: Maybe<Movie_Production_Companies>;
  /** insert data into the table: "movie_production_countries" */
  insert_movie_production_countries?: Maybe<Movie_Production_Countries_Mutation_Response>;
  /** insert a single row into the table: "movie_production_countries" */
  insert_movie_production_countries_one?: Maybe<Movie_Production_Countries>;
  /** insert data into the table: "movie_spoken_languages" */
  insert_movie_spoken_languages?: Maybe<Movie_Spoken_Languages_Mutation_Response>;
  /** insert a single row into the table: "movie_spoken_languages" */
  insert_movie_spoken_languages_one?: Maybe<Movie_Spoken_Languages>;
  /** insert data into the table: "movies" */
  insert_movies?: Maybe<Movies_Mutation_Response>;
  /** insert a single row into the table: "movies" */
  insert_movies_one?: Maybe<Movies>;
  /** insert data into the table: "people" */
  insert_people?: Maybe<People_Mutation_Response>;
  /** insert a single row into the table: "people" */
  insert_people_one?: Maybe<People>;
  /** insert data into the table: "production_companies" */
  insert_production_companies?: Maybe<Production_Companies_Mutation_Response>;
  /** insert a single row into the table: "production_companies" */
  insert_production_companies_one?: Maybe<Production_Companies>;
  /** insert data into the table: "sources" */
  insert_sources?: Maybe<Sources_Mutation_Response>;
  /** insert a single row into the table: "sources" */
  insert_sources_one?: Maybe<Sources>;
  /** insert data into the table: "user_movie_activities" */
  insert_user_movie_activities?: Maybe<User_Movie_Activities_Mutation_Response>;
  /** insert a single row into the table: "user_movie_activities" */
  insert_user_movie_activities_one?: Maybe<User_Movie_Activities>;
  /** insert data into the table: "user_movie_statuses" */
  insert_user_movie_statuses?: Maybe<User_Movie_Statuses_Mutation_Response>;
  /** insert a single row into the table: "user_movie_statuses" */
  insert_user_movie_statuses_one?: Maybe<User_Movie_Statuses>;
  /** insert data into the table: "user_movie_watches" */
  insert_user_movie_watches?: Maybe<User_Movie_Watches_Mutation_Response>;
  /** insert a single row into the table: "user_movie_watches" */
  insert_user_movie_watches_one?: Maybe<User_Movie_Watches>;
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
  /** update data of the table: "activity_logs" */
  update_activity_logs?: Maybe<Activity_Logs_Mutation_Response>;
  /** update single row of the table: "activity_logs" */
  update_activity_logs_by_pk?: Maybe<Activity_Logs>;
  /** update multiples rows of table: "activity_logs" */
  update_activity_logs_many?: Maybe<Array<Maybe<Activity_Logs_Mutation_Response>>>;
  /** update data of the table: "audit_logs" */
  update_audit_logs?: Maybe<Audit_Logs_Mutation_Response>;
  /** update single row of the table: "audit_logs" */
  update_audit_logs_by_pk?: Maybe<Audit_Logs>;
  /** update multiples rows of table: "audit_logs" */
  update_audit_logs_many?: Maybe<Array<Maybe<Audit_Logs_Mutation_Response>>>;
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
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update data of the table: "certifications" */
  update_certifications?: Maybe<Certifications_Mutation_Response>;
  /** update single row of the table: "certifications" */
  update_certifications_by_pk?: Maybe<Certifications>;
  /** update multiples rows of table: "certifications" */
  update_certifications_many?: Maybe<Array<Maybe<Certifications_Mutation_Response>>>;
  /** update data of the table: "collections" */
  update_collections?: Maybe<Collections_Mutation_Response>;
  /** update single row of the table: "collections" */
  update_collections_by_pk?: Maybe<Collections>;
  /** update multiples rows of table: "collections" */
  update_collections_many?: Maybe<Array<Maybe<Collections_Mutation_Response>>>;
  /** update data of the table: "countries" */
  update_countries?: Maybe<Countries_Mutation_Response>;
  /** update single row of the table: "countries" */
  update_countries_by_pk?: Maybe<Countries>;
  /** update multiples rows of table: "countries" */
  update_countries_many?: Maybe<Array<Maybe<Countries_Mutation_Response>>>;
  /** update data of the table: "credit_types" */
  update_credit_types?: Maybe<Credit_Types_Mutation_Response>;
  /** update single row of the table: "credit_types" */
  update_credit_types_by_pk?: Maybe<Credit_Types>;
  /** update multiples rows of table: "credit_types" */
  update_credit_types_many?: Maybe<Array<Maybe<Credit_Types_Mutation_Response>>>;
  /** update data of the table: "external_ids" */
  update_external_ids?: Maybe<External_Ids_Mutation_Response>;
  /** update single row of the table: "external_ids" */
  update_external_ids_by_pk?: Maybe<External_Ids>;
  /** update multiples rows of table: "external_ids" */
  update_external_ids_many?: Maybe<Array<Maybe<External_Ids_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "genders" */
  update_genders?: Maybe<Genders_Mutation_Response>;
  /** update single row of the table: "genders" */
  update_genders_by_pk?: Maybe<Genders>;
  /** update multiples rows of table: "genders" */
  update_genders_many?: Maybe<Array<Maybe<Genders_Mutation_Response>>>;
  /** update data of the table: "genres" */
  update_genres?: Maybe<Genres_Mutation_Response>;
  /** update single row of the table: "genres" */
  update_genres_by_pk?: Maybe<Genres>;
  /** update multiples rows of table: "genres" */
  update_genres_many?: Maybe<Array<Maybe<Genres_Mutation_Response>>>;
  /** update data of the table: "languages" */
  update_languages?: Maybe<Languages_Mutation_Response>;
  /** update single row of the table: "languages" */
  update_languages_by_pk?: Maybe<Languages>;
  /** update multiples rows of table: "languages" */
  update_languages_many?: Maybe<Array<Maybe<Languages_Mutation_Response>>>;
  /** update data of the table: "list_items" */
  update_list_items?: Maybe<List_Items_Mutation_Response>;
  /** update single row of the table: "list_items" */
  update_list_items_by_pk?: Maybe<List_Items>;
  /** update multiples rows of table: "list_items" */
  update_list_items_many?: Maybe<Array<Maybe<List_Items_Mutation_Response>>>;
  /** update data of the table: "lists" */
  update_lists?: Maybe<Lists_Mutation_Response>;
  /** update single row of the table: "lists" */
  update_lists_by_pk?: Maybe<Lists>;
  /** update multiples rows of table: "lists" */
  update_lists_many?: Maybe<Array<Maybe<Lists_Mutation_Response>>>;
  /** update data of the table: "media_statuses" */
  update_media_statuses?: Maybe<Media_Statuses_Mutation_Response>;
  /** update single row of the table: "media_statuses" */
  update_media_statuses_by_pk?: Maybe<Media_Statuses>;
  /** update multiples rows of table: "media_statuses" */
  update_media_statuses_many?: Maybe<Array<Maybe<Media_Statuses_Mutation_Response>>>;
  /** update data of the table: "media_types" */
  update_media_types?: Maybe<Media_Types_Mutation_Response>;
  /** update single row of the table: "media_types" */
  update_media_types_by_pk?: Maybe<Media_Types>;
  /** update multiples rows of table: "media_types" */
  update_media_types_many?: Maybe<Array<Maybe<Media_Types_Mutation_Response>>>;
  /** update data of the table: "movie_credits" */
  update_movie_credits?: Maybe<Movie_Credits_Mutation_Response>;
  /** update single row of the table: "movie_credits" */
  update_movie_credits_by_pk?: Maybe<Movie_Credits>;
  /** update multiples rows of table: "movie_credits" */
  update_movie_credits_many?: Maybe<Array<Maybe<Movie_Credits_Mutation_Response>>>;
  /** update data of the table: "movie_genres" */
  update_movie_genres?: Maybe<Movie_Genres_Mutation_Response>;
  /** update single row of the table: "movie_genres" */
  update_movie_genres_by_pk?: Maybe<Movie_Genres>;
  /** update multiples rows of table: "movie_genres" */
  update_movie_genres_many?: Maybe<Array<Maybe<Movie_Genres_Mutation_Response>>>;
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
  /** update data of the table: "movie_spoken_languages" */
  update_movie_spoken_languages?: Maybe<Movie_Spoken_Languages_Mutation_Response>;
  /** update single row of the table: "movie_spoken_languages" */
  update_movie_spoken_languages_by_pk?: Maybe<Movie_Spoken_Languages>;
  /** update multiples rows of table: "movie_spoken_languages" */
  update_movie_spoken_languages_many?: Maybe<Array<Maybe<Movie_Spoken_Languages_Mutation_Response>>>;
  /** update data of the table: "movies" */
  update_movies?: Maybe<Movies_Mutation_Response>;
  /** update single row of the table: "movies" */
  update_movies_by_pk?: Maybe<Movies>;
  /** update multiples rows of table: "movies" */
  update_movies_many?: Maybe<Array<Maybe<Movies_Mutation_Response>>>;
  /** update data of the table: "people" */
  update_people?: Maybe<People_Mutation_Response>;
  /** update single row of the table: "people" */
  update_people_by_pk?: Maybe<People>;
  /** update multiples rows of table: "people" */
  update_people_many?: Maybe<Array<Maybe<People_Mutation_Response>>>;
  /** update data of the table: "production_companies" */
  update_production_companies?: Maybe<Production_Companies_Mutation_Response>;
  /** update single row of the table: "production_companies" */
  update_production_companies_by_pk?: Maybe<Production_Companies>;
  /** update multiples rows of table: "production_companies" */
  update_production_companies_many?: Maybe<Array<Maybe<Production_Companies_Mutation_Response>>>;
  /** update data of the table: "sources" */
  update_sources?: Maybe<Sources_Mutation_Response>;
  /** update single row of the table: "sources" */
  update_sources_by_pk?: Maybe<Sources>;
  /** update multiples rows of table: "sources" */
  update_sources_many?: Maybe<Array<Maybe<Sources_Mutation_Response>>>;
  /** update data of the table: "user_movie_activities" */
  update_user_movie_activities?: Maybe<User_Movie_Activities_Mutation_Response>;
  /** update single row of the table: "user_movie_activities" */
  update_user_movie_activities_by_pk?: Maybe<User_Movie_Activities>;
  /** update multiples rows of table: "user_movie_activities" */
  update_user_movie_activities_many?: Maybe<Array<Maybe<User_Movie_Activities_Mutation_Response>>>;
  /** update data of the table: "user_movie_statuses" */
  update_user_movie_statuses?: Maybe<User_Movie_Statuses_Mutation_Response>;
  /** update single row of the table: "user_movie_statuses" */
  update_user_movie_statuses_by_pk?: Maybe<User_Movie_Statuses>;
  /** update multiples rows of table: "user_movie_statuses" */
  update_user_movie_statuses_many?: Maybe<Array<Maybe<User_Movie_Statuses_Mutation_Response>>>;
  /** update data of the table: "user_movie_watches" */
  update_user_movie_watches?: Maybe<User_Movie_Watches_Mutation_Response>;
  /** update single row of the table: "user_movie_watches" */
  update_user_movie_watches_by_pk?: Maybe<User_Movie_Watches>;
  /** update multiples rows of table: "user_movie_watches" */
  update_user_movie_watches_many?: Maybe<Array<Maybe<User_Movie_Watches_Mutation_Response>>>;
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
export type Mutation_RootDelete_Activity_LogsArgs = {
  where: Activity_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Activity_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Audit_LogsArgs = {
  where: Audit_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Audit_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CertificationsArgs = {
  where: Certifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Certifications_By_PkArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CollectionsArgs = {
  where: Collections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Collections_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CountriesArgs = {
  where: Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Countries_By_PkArgs = {
  code: Scalars['bpchar']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Credit_TypesArgs = {
  where: Credit_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Credit_Types_By_PkArgs = {
  credit_type: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_External_IdsArgs = {
  where: External_Ids_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_External_Ids_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GendersArgs = {
  where: Genders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Genders_By_PkArgs = {
  gender: Scalars['String']['input'];
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
export type Mutation_RootDelete_LanguagesArgs = {
  where: Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Languages_By_PkArgs = {
  code: Scalars['bpchar']['input'];
};


/** mutation root */
export type Mutation_RootDelete_List_ItemsArgs = {
  where: List_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_List_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ListsArgs = {
  where: Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Lists_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Media_StatusesArgs = {
  where: Media_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Media_Statuses_By_PkArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Media_TypesArgs = {
  where: Media_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Media_Types_By_PkArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_CreditsArgs = {
  where: Movie_Credits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Credits_By_PkArgs = {
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
export type Mutation_RootDelete_Movie_Production_CompaniesArgs = {
  where: Movie_Production_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Production_Companies_By_PkArgs = {
  company_id: Scalars['uuid']['input'];
  movie_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_Production_CountriesArgs = {
  where: Movie_Production_Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Production_Countries_By_PkArgs = {
  country_code: Scalars['bpchar']['input'];
  movie_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Movie_Spoken_LanguagesArgs = {
  where: Movie_Spoken_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movie_Spoken_Languages_By_PkArgs = {
  language_code: Scalars['bpchar']['input'];
  movie_id: Scalars['uuid']['input'];
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
export type Mutation_RootDelete_PeopleArgs = {
  where: People_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_People_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Production_CompaniesArgs = {
  where: Production_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Production_Companies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SourcesArgs = {
  where: Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sources_By_PkArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Movie_ActivitiesArgs = {
  where: User_Movie_Activities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Movie_Activities_By_PkArgs = {
  movie_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Movie_StatusesArgs = {
  where: User_Movie_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Movie_Statuses_By_PkArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Movie_WatchesArgs = {
  where: User_Movie_Watches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Movie_Watches_By_PkArgs = {
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
export type Mutation_RootInsert_Activity_LogsArgs = {
  objects: Array<Activity_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Activity_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Activity_Logs_OneArgs = {
  object: Activity_Logs_Insert_Input;
  on_conflict?: InputMaybe<Activity_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_LogsArgs = {
  objects: Array<Audit_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Audit_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_Logs_OneArgs = {
  object: Audit_Logs_Insert_Input;
  on_conflict?: InputMaybe<Audit_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CertificationsArgs = {
  objects: Array<Certifications_Insert_Input>;
  on_conflict?: InputMaybe<Certifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Certifications_OneArgs = {
  object: Certifications_Insert_Input;
  on_conflict?: InputMaybe<Certifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CollectionsArgs = {
  objects: Array<Collections_Insert_Input>;
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collections_OneArgs = {
  object: Collections_Insert_Input;
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountriesArgs = {
  objects: Array<Countries_Insert_Input>;
  on_conflict?: InputMaybe<Countries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Countries_OneArgs = {
  object: Countries_Insert_Input;
  on_conflict?: InputMaybe<Countries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Credit_TypesArgs = {
  objects: Array<Credit_Types_Insert_Input>;
  on_conflict?: InputMaybe<Credit_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Credit_Types_OneArgs = {
  object: Credit_Types_Insert_Input;
  on_conflict?: InputMaybe<Credit_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_External_IdsArgs = {
  objects: Array<External_Ids_Insert_Input>;
  on_conflict?: InputMaybe<External_Ids_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_External_Ids_OneArgs = {
  object: External_Ids_Insert_Input;
  on_conflict?: InputMaybe<External_Ids_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GendersArgs = {
  objects: Array<Genders_Insert_Input>;
  on_conflict?: InputMaybe<Genders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Genders_OneArgs = {
  object: Genders_Insert_Input;
  on_conflict?: InputMaybe<Genders_On_Conflict>;
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
export type Mutation_RootInsert_LanguagesArgs = {
  objects: Array<Languages_Insert_Input>;
  on_conflict?: InputMaybe<Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Languages_OneArgs = {
  object: Languages_Insert_Input;
  on_conflict?: InputMaybe<Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_List_ItemsArgs = {
  objects: Array<List_Items_Insert_Input>;
  on_conflict?: InputMaybe<List_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_List_Items_OneArgs = {
  object: List_Items_Insert_Input;
  on_conflict?: InputMaybe<List_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ListsArgs = {
  objects: Array<Lists_Insert_Input>;
  on_conflict?: InputMaybe<Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lists_OneArgs = {
  object: Lists_Insert_Input;
  on_conflict?: InputMaybe<Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_StatusesArgs = {
  objects: Array<Media_Statuses_Insert_Input>;
  on_conflict?: InputMaybe<Media_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_Statuses_OneArgs = {
  object: Media_Statuses_Insert_Input;
  on_conflict?: InputMaybe<Media_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_TypesArgs = {
  objects: Array<Media_Types_Insert_Input>;
  on_conflict?: InputMaybe<Media_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_Types_OneArgs = {
  object: Media_Types_Insert_Input;
  on_conflict?: InputMaybe<Media_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_CreditsArgs = {
  objects: Array<Movie_Credits_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Credits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Credits_OneArgs = {
  object: Movie_Credits_Insert_Input;
  on_conflict?: InputMaybe<Movie_Credits_On_Conflict>;
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
export type Mutation_RootInsert_Movie_Spoken_LanguagesArgs = {
  objects: Array<Movie_Spoken_Languages_Insert_Input>;
  on_conflict?: InputMaybe<Movie_Spoken_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movie_Spoken_Languages_OneArgs = {
  object: Movie_Spoken_Languages_Insert_Input;
  on_conflict?: InputMaybe<Movie_Spoken_Languages_On_Conflict>;
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
export type Mutation_RootInsert_Production_CompaniesArgs = {
  objects: Array<Production_Companies_Insert_Input>;
  on_conflict?: InputMaybe<Production_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Production_Companies_OneArgs = {
  object: Production_Companies_Insert_Input;
  on_conflict?: InputMaybe<Production_Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SourcesArgs = {
  objects: Array<Sources_Insert_Input>;
  on_conflict?: InputMaybe<Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sources_OneArgs = {
  object: Sources_Insert_Input;
  on_conflict?: InputMaybe<Sources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Movie_ActivitiesArgs = {
  objects: Array<User_Movie_Activities_Insert_Input>;
  on_conflict?: InputMaybe<User_Movie_Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Movie_Activities_OneArgs = {
  object: User_Movie_Activities_Insert_Input;
  on_conflict?: InputMaybe<User_Movie_Activities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Movie_StatusesArgs = {
  objects: Array<User_Movie_Statuses_Insert_Input>;
  on_conflict?: InputMaybe<User_Movie_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Movie_Statuses_OneArgs = {
  object: User_Movie_Statuses_Insert_Input;
  on_conflict?: InputMaybe<User_Movie_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Movie_WatchesArgs = {
  objects: Array<User_Movie_Watches_Insert_Input>;
  on_conflict?: InputMaybe<User_Movie_Watches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Movie_Watches_OneArgs = {
  object: User_Movie_Watches_Insert_Input;
  on_conflict?: InputMaybe<User_Movie_Watches_On_Conflict>;
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
export type Mutation_RootUpdate_Activity_LogsArgs = {
  _append?: InputMaybe<Activity_Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Activity_Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Activity_Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Activity_Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<Activity_Logs_Prepend_Input>;
  _set?: InputMaybe<Activity_Logs_Set_Input>;
  where: Activity_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_Logs_By_PkArgs = {
  _append?: InputMaybe<Activity_Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Activity_Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Activity_Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Activity_Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<Activity_Logs_Prepend_Input>;
  _set?: InputMaybe<Activity_Logs_Set_Input>;
  pk_columns: Activity_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Activity_Logs_ManyArgs = {
  updates: Array<Activity_Logs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_LogsArgs = {
  _append?: InputMaybe<Audit_Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Audit_Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Audit_Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Audit_Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<Audit_Logs_Prepend_Input>;
  _set?: InputMaybe<Audit_Logs_Set_Input>;
  where: Audit_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Logs_By_PkArgs = {
  _append?: InputMaybe<Audit_Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Audit_Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Audit_Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Audit_Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<Audit_Logs_Prepend_Input>;
  _set?: InputMaybe<Audit_Logs_Set_Input>;
  pk_columns: Audit_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Logs_ManyArgs = {
  updates: Array<Audit_Logs_Updates>;
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
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CertificationsArgs = {
  _set?: InputMaybe<Certifications_Set_Input>;
  where: Certifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Certifications_By_PkArgs = {
  _set?: InputMaybe<Certifications_Set_Input>;
  pk_columns: Certifications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Certifications_ManyArgs = {
  updates: Array<Certifications_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CollectionsArgs = {
  _set?: InputMaybe<Collections_Set_Input>;
  where: Collections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Collections_By_PkArgs = {
  _set?: InputMaybe<Collections_Set_Input>;
  pk_columns: Collections_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Collections_ManyArgs = {
  updates: Array<Collections_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CountriesArgs = {
  _set?: InputMaybe<Countries_Set_Input>;
  where: Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Countries_By_PkArgs = {
  _set?: InputMaybe<Countries_Set_Input>;
  pk_columns: Countries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Countries_ManyArgs = {
  updates: Array<Countries_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Credit_TypesArgs = {
  _set?: InputMaybe<Credit_Types_Set_Input>;
  where: Credit_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Credit_Types_By_PkArgs = {
  _set?: InputMaybe<Credit_Types_Set_Input>;
  pk_columns: Credit_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Credit_Types_ManyArgs = {
  updates: Array<Credit_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_External_IdsArgs = {
  _set?: InputMaybe<External_Ids_Set_Input>;
  where: External_Ids_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_External_Ids_By_PkArgs = {
  _set?: InputMaybe<External_Ids_Set_Input>;
  pk_columns: External_Ids_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_External_Ids_ManyArgs = {
  updates: Array<External_Ids_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GendersArgs = {
  _set?: InputMaybe<Genders_Set_Input>;
  where: Genders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Genders_By_PkArgs = {
  _set?: InputMaybe<Genders_Set_Input>;
  pk_columns: Genders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Genders_ManyArgs = {
  updates: Array<Genders_Updates>;
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
export type Mutation_RootUpdate_LanguagesArgs = {
  _set?: InputMaybe<Languages_Set_Input>;
  where: Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Languages_By_PkArgs = {
  _set?: InputMaybe<Languages_Set_Input>;
  pk_columns: Languages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Languages_ManyArgs = {
  updates: Array<Languages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_List_ItemsArgs = {
  _set?: InputMaybe<List_Items_Set_Input>;
  where: List_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_List_Items_By_PkArgs = {
  _set?: InputMaybe<List_Items_Set_Input>;
  pk_columns: List_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_List_Items_ManyArgs = {
  updates: Array<List_Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ListsArgs = {
  _set?: InputMaybe<Lists_Set_Input>;
  where: Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Lists_By_PkArgs = {
  _set?: InputMaybe<Lists_Set_Input>;
  pk_columns: Lists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Lists_ManyArgs = {
  updates: Array<Lists_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Media_StatusesArgs = {
  _set?: InputMaybe<Media_Statuses_Set_Input>;
  where: Media_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Statuses_By_PkArgs = {
  _set?: InputMaybe<Media_Statuses_Set_Input>;
  pk_columns: Media_Statuses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Statuses_ManyArgs = {
  updates: Array<Media_Statuses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Media_TypesArgs = {
  _set?: InputMaybe<Media_Types_Set_Input>;
  where: Media_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Types_By_PkArgs = {
  _set?: InputMaybe<Media_Types_Set_Input>;
  pk_columns: Media_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Types_ManyArgs = {
  updates: Array<Media_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_CreditsArgs = {
  _inc?: InputMaybe<Movie_Credits_Inc_Input>;
  _set?: InputMaybe<Movie_Credits_Set_Input>;
  where: Movie_Credits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Credits_By_PkArgs = {
  _inc?: InputMaybe<Movie_Credits_Inc_Input>;
  _set?: InputMaybe<Movie_Credits_Set_Input>;
  pk_columns: Movie_Credits_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Credits_ManyArgs = {
  updates: Array<Movie_Credits_Updates>;
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
export type Mutation_RootUpdate_Movie_Spoken_LanguagesArgs = {
  _set?: InputMaybe<Movie_Spoken_Languages_Set_Input>;
  where: Movie_Spoken_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Spoken_Languages_By_PkArgs = {
  _set?: InputMaybe<Movie_Spoken_Languages_Set_Input>;
  pk_columns: Movie_Spoken_Languages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movie_Spoken_Languages_ManyArgs = {
  updates: Array<Movie_Spoken_Languages_Updates>;
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
export type Mutation_RootUpdate_Production_CompaniesArgs = {
  _inc?: InputMaybe<Production_Companies_Inc_Input>;
  _set?: InputMaybe<Production_Companies_Set_Input>;
  where: Production_Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Production_Companies_By_PkArgs = {
  _inc?: InputMaybe<Production_Companies_Inc_Input>;
  _set?: InputMaybe<Production_Companies_Set_Input>;
  pk_columns: Production_Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Production_Companies_ManyArgs = {
  updates: Array<Production_Companies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SourcesArgs = {
  _set?: InputMaybe<Sources_Set_Input>;
  where: Sources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sources_By_PkArgs = {
  _set?: InputMaybe<Sources_Set_Input>;
  pk_columns: Sources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sources_ManyArgs = {
  updates: Array<Sources_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Movie_ActivitiesArgs = {
  _inc?: InputMaybe<User_Movie_Activities_Inc_Input>;
  _set?: InputMaybe<User_Movie_Activities_Set_Input>;
  where: User_Movie_Activities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Movie_Activities_By_PkArgs = {
  _inc?: InputMaybe<User_Movie_Activities_Inc_Input>;
  _set?: InputMaybe<User_Movie_Activities_Set_Input>;
  pk_columns: User_Movie_Activities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Movie_Activities_ManyArgs = {
  updates: Array<User_Movie_Activities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Movie_StatusesArgs = {
  _set?: InputMaybe<User_Movie_Statuses_Set_Input>;
  where: User_Movie_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Movie_Statuses_By_PkArgs = {
  _set?: InputMaybe<User_Movie_Statuses_Set_Input>;
  pk_columns: User_Movie_Statuses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Movie_Statuses_ManyArgs = {
  updates: Array<User_Movie_Statuses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Movie_WatchesArgs = {
  _set?: InputMaybe<User_Movie_Watches_Set_Input>;
  where: User_Movie_Watches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Movie_Watches_By_PkArgs = {
  _set?: InputMaybe<User_Movie_Watches_Set_Input>;
  pk_columns: User_Movie_Watches_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Movie_Watches_ManyArgs = {
  updates: Array<User_Movie_Watches_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Virus_ManyArgs = {
  updates: Array<Virus_Updates>;
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
  birthdate?: Maybe<Scalars['date']['output']>;
  gender?: Maybe<Genders_Enum>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
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
  birthdate?: InputMaybe<Date_Comparison_Exp>;
  gender?: InputMaybe<Genders_Enum_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "people" */
export enum People_Constraint {
  /** unique or primary key constraint on columns "id" */
  PeoplePkey = 'people_pkey'
}

/** input type for inserting data into table "people" */
export type People_Insert_Input = {
  birthdate?: InputMaybe<Scalars['date']['input']>;
  gender?: InputMaybe<Genders_Enum>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type People_Max_Fields = {
  __typename?: 'people_max_fields';
  birthdate?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type People_Min_Fields = {
  __typename?: 'people_min_fields';
  birthdate?: Maybe<Scalars['date']['output']>;
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
  birthdate?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: people */
export type People_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "people" */
export enum People_Select_Column {
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "people" */
export type People_Set_Input = {
  birthdate?: InputMaybe<Scalars['date']['input']>;
  gender?: InputMaybe<Genders_Enum>;
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
  birthdate?: InputMaybe<Scalars['date']['input']>;
  gender?: InputMaybe<Genders_Enum>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "people" */
export enum People_Update_Column {
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  Gender = 'gender',
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

/** columns and relationships of "production_companies" */
export type Production_Companies = {
  __typename?: 'production_companies';
  id: Scalars['uuid']['output'];
  logo_path?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  origin_country?: Maybe<Scalars['String']['output']>;
  tmdb_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "production_companies" */
export type Production_Companies_Aggregate = {
  __typename?: 'production_companies_aggregate';
  aggregate?: Maybe<Production_Companies_Aggregate_Fields>;
  nodes: Array<Production_Companies>;
};

/** aggregate fields of "production_companies" */
export type Production_Companies_Aggregate_Fields = {
  __typename?: 'production_companies_aggregate_fields';
  avg?: Maybe<Production_Companies_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Production_Companies_Max_Fields>;
  min?: Maybe<Production_Companies_Min_Fields>;
  stddev?: Maybe<Production_Companies_Stddev_Fields>;
  stddev_pop?: Maybe<Production_Companies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Production_Companies_Stddev_Samp_Fields>;
  sum?: Maybe<Production_Companies_Sum_Fields>;
  var_pop?: Maybe<Production_Companies_Var_Pop_Fields>;
  var_samp?: Maybe<Production_Companies_Var_Samp_Fields>;
  variance?: Maybe<Production_Companies_Variance_Fields>;
};


/** aggregate fields of "production_companies" */
export type Production_Companies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Production_Companies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Production_Companies_Avg_Fields = {
  __typename?: 'production_companies_avg_fields';
  tmdb_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "production_companies". All fields are combined with a logical 'AND'. */
export type Production_Companies_Bool_Exp = {
  _and?: InputMaybe<Array<Production_Companies_Bool_Exp>>;
  _not?: InputMaybe<Production_Companies_Bool_Exp>;
  _or?: InputMaybe<Array<Production_Companies_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  logo_path?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  origin_country?: InputMaybe<String_Comparison_Exp>;
  tmdb_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "production_companies" */
export enum Production_Companies_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductionCompaniesPkey = 'production_companies_pkey',
  /** unique or primary key constraint on columns "tmdb_id" */
  ProductionCompaniesTmdbIdKey = 'production_companies_tmdb_id_key'
}

/** input type for incrementing numeric columns in table "production_companies" */
export type Production_Companies_Inc_Input = {
  tmdb_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "production_companies" */
export type Production_Companies_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  logo_path?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  origin_country?: InputMaybe<Scalars['String']['input']>;
  tmdb_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Production_Companies_Max_Fields = {
  __typename?: 'production_companies_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  logo_path?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  origin_country?: Maybe<Scalars['String']['output']>;
  tmdb_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Production_Companies_Min_Fields = {
  __typename?: 'production_companies_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  logo_path?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  origin_country?: Maybe<Scalars['String']['output']>;
  tmdb_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "production_companies" */
export type Production_Companies_Mutation_Response = {
  __typename?: 'production_companies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Production_Companies>;
};

/** on_conflict condition type for table "production_companies" */
export type Production_Companies_On_Conflict = {
  constraint: Production_Companies_Constraint;
  update_columns?: Array<Production_Companies_Update_Column>;
  where?: InputMaybe<Production_Companies_Bool_Exp>;
};

/** Ordering options when selecting data from "production_companies". */
export type Production_Companies_Order_By = {
  id?: InputMaybe<Order_By>;
  logo_path?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  origin_country?: InputMaybe<Order_By>;
  tmdb_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: production_companies */
export type Production_Companies_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "production_companies" */
export enum Production_Companies_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LogoPath = 'logo_path',
  /** column name */
  Name = 'name',
  /** column name */
  OriginCountry = 'origin_country',
  /** column name */
  TmdbId = 'tmdb_id'
}

/** input type for updating data in table "production_companies" */
export type Production_Companies_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  logo_path?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  origin_country?: InputMaybe<Scalars['String']['input']>;
  tmdb_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Production_Companies_Stddev_Fields = {
  __typename?: 'production_companies_stddev_fields';
  tmdb_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Production_Companies_Stddev_Pop_Fields = {
  __typename?: 'production_companies_stddev_pop_fields';
  tmdb_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Production_Companies_Stddev_Samp_Fields = {
  __typename?: 'production_companies_stddev_samp_fields';
  tmdb_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "production_companies" */
export type Production_Companies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Production_Companies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Production_Companies_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  logo_path?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  origin_country?: InputMaybe<Scalars['String']['input']>;
  tmdb_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Production_Companies_Sum_Fields = {
  __typename?: 'production_companies_sum_fields';
  tmdb_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "production_companies" */
export enum Production_Companies_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LogoPath = 'logo_path',
  /** column name */
  Name = 'name',
  /** column name */
  OriginCountry = 'origin_country',
  /** column name */
  TmdbId = 'tmdb_id'
}

export type Production_Companies_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Production_Companies_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Production_Companies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Production_Companies_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Production_Companies_Var_Pop_Fields = {
  __typename?: 'production_companies_var_pop_fields';
  tmdb_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Production_Companies_Var_Samp_Fields = {
  __typename?: 'production_companies_var_samp_fields';
  tmdb_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Production_Companies_Variance_Fields = {
  __typename?: 'production_companies_variance_fields';
  tmdb_id?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "activity_logs" */
  activity_logs: Array<Activity_Logs>;
  /** fetch aggregated fields from the table: "activity_logs" */
  activity_logs_aggregate: Activity_Logs_Aggregate;
  /** fetch data from the table: "activity_logs" using primary key columns */
  activity_logs_by_pk?: Maybe<Activity_Logs>;
  /** fetch data from the table: "audit_logs" */
  audit_logs: Array<Audit_Logs>;
  /** fetch aggregated fields from the table: "audit_logs" */
  audit_logs_aggregate: Audit_Logs_Aggregate;
  /** fetch data from the table: "audit_logs" using primary key columns */
  audit_logs_by_pk?: Maybe<Audit_Logs>;
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
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "certifications" */
  certifications: Array<Certifications>;
  /** fetch aggregated fields from the table: "certifications" */
  certifications_aggregate: Certifications_Aggregate;
  /** fetch data from the table: "certifications" using primary key columns */
  certifications_by_pk?: Maybe<Certifications>;
  /** fetch data from the table: "collections" */
  collections: Array<Collections>;
  /** fetch aggregated fields from the table: "collections" */
  collections_aggregate: Collections_Aggregate;
  /** fetch data from the table: "collections" using primary key columns */
  collections_by_pk?: Maybe<Collections>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch aggregated fields from the table: "countries" */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table: "credit_types" */
  credit_types: Array<Credit_Types>;
  /** fetch aggregated fields from the table: "credit_types" */
  credit_types_aggregate: Credit_Types_Aggregate;
  /** fetch data from the table: "credit_types" using primary key columns */
  credit_types_by_pk?: Maybe<Credit_Types>;
  /** fetch data from the table: "external_ids" */
  external_ids: Array<External_Ids>;
  /** fetch aggregated fields from the table: "external_ids" */
  external_ids_aggregate: External_Ids_Aggregate;
  /** fetch data from the table: "external_ids" using primary key columns */
  external_ids_by_pk?: Maybe<External_Ids>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "genders" */
  genders: Array<Genders>;
  /** fetch aggregated fields from the table: "genders" */
  genders_aggregate: Genders_Aggregate;
  /** fetch data from the table: "genders" using primary key columns */
  genders_by_pk?: Maybe<Genders>;
  /** fetch data from the table: "genres" */
  genres: Array<Genres>;
  /** fetch aggregated fields from the table: "genres" */
  genres_aggregate: Genres_Aggregate;
  /** fetch data from the table: "genres" using primary key columns */
  genres_by_pk?: Maybe<Genres>;
  /** execute function "get_user_movie_activity" which returns "user_movie_activities" */
  get_user_movie_activity?: Maybe<User_Movie_Activities>;
  /** execute function "get_user_movie_activity" and query aggregates on result of table type "user_movie_activities" */
  get_user_movie_activity_aggregate: User_Movie_Activities_Aggregate;
  /** fetch data from the table: "languages" */
  languages: Array<Languages>;
  /** fetch aggregated fields from the table: "languages" */
  languages_aggregate: Languages_Aggregate;
  /** fetch data from the table: "languages" using primary key columns */
  languages_by_pk?: Maybe<Languages>;
  /** An array relationship */
  list_items: Array<List_Items>;
  /** An aggregate relationship */
  list_items_aggregate: List_Items_Aggregate;
  /** fetch data from the table: "list_items" using primary key columns */
  list_items_by_pk?: Maybe<List_Items>;
  /** fetch data from the table: "lists" */
  lists: Array<Lists>;
  /** fetch aggregated fields from the table: "lists" */
  lists_aggregate: Lists_Aggregate;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk?: Maybe<Lists>;
  /** fetch data from the table: "media_statuses" */
  media_statuses: Array<Media_Statuses>;
  /** fetch aggregated fields from the table: "media_statuses" */
  media_statuses_aggregate: Media_Statuses_Aggregate;
  /** fetch data from the table: "media_statuses" using primary key columns */
  media_statuses_by_pk?: Maybe<Media_Statuses>;
  /** fetch data from the table: "media_types" */
  media_types: Array<Media_Types>;
  /** fetch aggregated fields from the table: "media_types" */
  media_types_aggregate: Media_Types_Aggregate;
  /** fetch data from the table: "media_types" using primary key columns */
  media_types_by_pk?: Maybe<Media_Types>;
  /** An array relationship */
  movie_credits: Array<Movie_Credits>;
  /** An aggregate relationship */
  movie_credits_aggregate: Movie_Credits_Aggregate;
  /** fetch data from the table: "movie_credits" using primary key columns */
  movie_credits_by_pk?: Maybe<Movie_Credits>;
  /** fetch data from the table: "movie_genres" */
  movie_genres: Array<Movie_Genres>;
  /** fetch aggregated fields from the table: "movie_genres" */
  movie_genres_aggregate: Movie_Genres_Aggregate;
  /** fetch data from the table: "movie_genres" using primary key columns */
  movie_genres_by_pk?: Maybe<Movie_Genres>;
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
  movie_spoken_languages: Array<Movie_Spoken_Languages>;
  /** An aggregate relationship */
  movie_spoken_languages_aggregate: Movie_Spoken_Languages_Aggregate;
  /** fetch data from the table: "movie_spoken_languages" using primary key columns */
  movie_spoken_languages_by_pk?: Maybe<Movie_Spoken_Languages>;
  /** An array relationship */
  movies: Array<Movies>;
  /** An aggregate relationship */
  movies_aggregate: Movies_Aggregate;
  /** fetch data from the table: "movies" using primary key columns */
  movies_by_pk?: Maybe<Movies>;
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  people_aggregate: People_Aggregate;
  /** fetch data from the table: "people" using primary key columns */
  people_by_pk?: Maybe<People>;
  /** fetch data from the table: "production_companies" */
  production_companies: Array<Production_Companies>;
  /** fetch aggregated fields from the table: "production_companies" */
  production_companies_aggregate: Production_Companies_Aggregate;
  /** fetch data from the table: "production_companies" using primary key columns */
  production_companies_by_pk?: Maybe<Production_Companies>;
  /** fetch data from the table: "sources" */
  sources: Array<Sources>;
  /** fetch aggregated fields from the table: "sources" */
  sources_aggregate: Sources_Aggregate;
  /** fetch data from the table: "sources" using primary key columns */
  sources_by_pk?: Maybe<Sources>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_movie_activities" */
  user_movie_activities: Array<User_Movie_Activities>;
  /** fetch aggregated fields from the table: "user_movie_activities" */
  user_movie_activities_aggregate: User_Movie_Activities_Aggregate;
  /** fetch data from the table: "user_movie_activities" using primary key columns */
  user_movie_activities_by_pk?: Maybe<User_Movie_Activities>;
  /** fetch data from the table: "user_movie_statuses" */
  user_movie_statuses: Array<User_Movie_Statuses>;
  /** fetch aggregated fields from the table: "user_movie_statuses" */
  user_movie_statuses_aggregate: User_Movie_Statuses_Aggregate;
  /** fetch data from the table: "user_movie_statuses" using primary key columns */
  user_movie_statuses_by_pk?: Maybe<User_Movie_Statuses>;
  /** An array relationship */
  user_movie_watches: Array<User_Movie_Watches>;
  /** An aggregate relationship */
  user_movie_watches_aggregate: User_Movie_Watches_Aggregate;
  /** fetch data from the table: "user_movie_watches" using primary key columns */
  user_movie_watches_by_pk?: Maybe<User_Movie_Watches>;
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


export type Query_RootActivity_LogsArgs = {
  distinct_on?: InputMaybe<Array<Activity_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Activity_Logs_Order_By>>;
  where?: InputMaybe<Activity_Logs_Bool_Exp>;
};


export type Query_RootActivity_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activity_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Activity_Logs_Order_By>>;
  where?: InputMaybe<Activity_Logs_Bool_Exp>;
};


export type Query_RootActivity_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAudit_LogsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Logs_Order_By>>;
  where?: InputMaybe<Audit_Logs_Bool_Exp>;
};


export type Query_RootAudit_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Logs_Order_By>>;
  where?: InputMaybe<Audit_Logs_Bool_Exp>;
};


export type Query_RootAudit_Logs_By_PkArgs = {
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


export type Query_RootCertificationsArgs = {
  distinct_on?: InputMaybe<Array<Certifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Certifications_Order_By>>;
  where?: InputMaybe<Certifications_Bool_Exp>;
};


export type Query_RootCertifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Certifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Certifications_Order_By>>;
  where?: InputMaybe<Certifications_Bool_Exp>;
};


export type Query_RootCertifications_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootCollectionsArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Query_RootCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Query_RootCollections_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCountriesArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Query_RootCountries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Query_RootCountries_By_PkArgs = {
  code: Scalars['bpchar']['input'];
};


export type Query_RootCredit_TypesArgs = {
  distinct_on?: InputMaybe<Array<Credit_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Types_Order_By>>;
  where?: InputMaybe<Credit_Types_Bool_Exp>;
};


export type Query_RootCredit_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Credit_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Types_Order_By>>;
  where?: InputMaybe<Credit_Types_Bool_Exp>;
};


export type Query_RootCredit_Types_By_PkArgs = {
  credit_type: Scalars['String']['input'];
};


export type Query_RootExternal_IdsArgs = {
  distinct_on?: InputMaybe<Array<External_Ids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Ids_Order_By>>;
  where?: InputMaybe<External_Ids_Bool_Exp>;
};


export type Query_RootExternal_Ids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<External_Ids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Ids_Order_By>>;
  where?: InputMaybe<External_Ids_Bool_Exp>;
};


export type Query_RootExternal_Ids_By_PkArgs = {
  id: Scalars['uuid']['input'];
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


export type Query_RootGendersArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Query_RootGenders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Query_RootGenders_By_PkArgs = {
  gender: Scalars['String']['input'];
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


export type Query_RootGet_User_Movie_ActivityArgs = {
  args: Get_User_Movie_Activity_Args;
  distinct_on?: InputMaybe<Array<User_Movie_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Activities_Order_By>>;
  where?: InputMaybe<User_Movie_Activities_Bool_Exp>;
};


export type Query_RootGet_User_Movie_Activity_AggregateArgs = {
  args: Get_User_Movie_Activity_Args;
  distinct_on?: InputMaybe<Array<User_Movie_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Activities_Order_By>>;
  where?: InputMaybe<User_Movie_Activities_Bool_Exp>;
};


export type Query_RootLanguagesArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Query_RootLanguages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Query_RootLanguages_By_PkArgs = {
  code: Scalars['bpchar']['input'];
};


export type Query_RootList_ItemsArgs = {
  distinct_on?: InputMaybe<Array<List_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Items_Order_By>>;
  where?: InputMaybe<List_Items_Bool_Exp>;
};


export type Query_RootList_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<List_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Items_Order_By>>;
  where?: InputMaybe<List_Items_Bool_Exp>;
};


export type Query_RootList_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootListsArgs = {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
};


export type Query_RootLists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
};


export type Query_RootLists_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMedia_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Media_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Statuses_Order_By>>;
  where?: InputMaybe<Media_Statuses_Bool_Exp>;
};


export type Query_RootMedia_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Statuses_Order_By>>;
  where?: InputMaybe<Media_Statuses_Bool_Exp>;
};


export type Query_RootMedia_Statuses_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootMedia_TypesArgs = {
  distinct_on?: InputMaybe<Array<Media_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Types_Order_By>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Query_RootMedia_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Types_Order_By>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Query_RootMedia_Types_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootMovie_CreditsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Credits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Credits_Order_By>>;
  where?: InputMaybe<Movie_Credits_Bool_Exp>;
};


export type Query_RootMovie_Credits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Credits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Credits_Order_By>>;
  where?: InputMaybe<Movie_Credits_Bool_Exp>;
};


export type Query_RootMovie_Credits_By_PkArgs = {
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
  company_id: Scalars['uuid']['input'];
  movie_id: Scalars['uuid']['input'];
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
  country_code: Scalars['bpchar']['input'];
  movie_id: Scalars['uuid']['input'];
};


export type Query_RootMovie_Spoken_LanguagesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Spoken_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Spoken_Languages_Order_By>>;
  where?: InputMaybe<Movie_Spoken_Languages_Bool_Exp>;
};


export type Query_RootMovie_Spoken_Languages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Spoken_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Spoken_Languages_Order_By>>;
  where?: InputMaybe<Movie_Spoken_Languages_Bool_Exp>;
};


export type Query_RootMovie_Spoken_Languages_By_PkArgs = {
  language_code: Scalars['bpchar']['input'];
  movie_id: Scalars['uuid']['input'];
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


export type Query_RootProduction_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Production_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Production_Companies_Order_By>>;
  where?: InputMaybe<Production_Companies_Bool_Exp>;
};


export type Query_RootProduction_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Production_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Production_Companies_Order_By>>;
  where?: InputMaybe<Production_Companies_Bool_Exp>;
};


export type Query_RootProduction_Companies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSourcesArgs = {
  distinct_on?: InputMaybe<Array<Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sources_Order_By>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Query_RootSources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sources_Order_By>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Query_RootSources_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_Movie_ActivitiesArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Activities_Order_By>>;
  where?: InputMaybe<User_Movie_Activities_Bool_Exp>;
};


export type Query_RootUser_Movie_Activities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Activities_Order_By>>;
  where?: InputMaybe<User_Movie_Activities_Bool_Exp>;
};


export type Query_RootUser_Movie_Activities_By_PkArgs = {
  movie_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootUser_Movie_StatusesArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Statuses_Order_By>>;
  where?: InputMaybe<User_Movie_Statuses_Bool_Exp>;
};


export type Query_RootUser_Movie_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Statuses_Order_By>>;
  where?: InputMaybe<User_Movie_Statuses_Bool_Exp>;
};


export type Query_RootUser_Movie_Statuses_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootUser_Movie_WatchesArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Watches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Watches_Order_By>>;
  where?: InputMaybe<User_Movie_Watches_Bool_Exp>;
};


export type Query_RootUser_Movie_Watches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Watches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Watches_Order_By>>;
  where?: InputMaybe<User_Movie_Watches_Bool_Exp>;
};


export type Query_RootUser_Movie_Watches_By_PkArgs = {
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

/** columns and relationships of "sources" */
export type Sources = {
  __typename?: 'sources';
  name: Scalars['String']['output'];
};

/** aggregated selection of "sources" */
export type Sources_Aggregate = {
  __typename?: 'sources_aggregate';
  aggregate?: Maybe<Sources_Aggregate_Fields>;
  nodes: Array<Sources>;
};

/** aggregate fields of "sources" */
export type Sources_Aggregate_Fields = {
  __typename?: 'sources_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Sources_Max_Fields>;
  min?: Maybe<Sources_Min_Fields>;
};


/** aggregate fields of "sources" */
export type Sources_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "sources". All fields are combined with a logical 'AND'. */
export type Sources_Bool_Exp = {
  _and?: InputMaybe<Array<Sources_Bool_Exp>>;
  _not?: InputMaybe<Sources_Bool_Exp>;
  _or?: InputMaybe<Array<Sources_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sources" */
export enum Sources_Constraint {
  /** unique or primary key constraint on columns "name" */
  SourcesPkey = 'sources_pkey'
}

export enum Sources_Enum {
  Imdb = 'IMDB',
  Tmdb = 'TMDB'
}

/** Boolean expression to compare columns of type "sources_enum". All fields are combined with logical 'AND'. */
export type Sources_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Sources_Enum>;
  _in?: InputMaybe<Array<Sources_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Sources_Enum>;
  _nin?: InputMaybe<Array<Sources_Enum>>;
};

/** input type for inserting data into table "sources" */
export type Sources_Insert_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Sources_Max_Fields = {
  __typename?: 'sources_max_fields';
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Sources_Min_Fields = {
  __typename?: 'sources_min_fields';
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "sources" */
export type Sources_Mutation_Response = {
  __typename?: 'sources_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sources>;
};

/** on_conflict condition type for table "sources" */
export type Sources_On_Conflict = {
  constraint: Sources_Constraint;
  update_columns?: Array<Sources_Update_Column>;
  where?: InputMaybe<Sources_Bool_Exp>;
};

/** Ordering options when selecting data from "sources". */
export type Sources_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sources */
export type Sources_Pk_Columns_Input = {
  name: Scalars['String']['input'];
};

/** select columns of table "sources" */
export enum Sources_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "sources" */
export type Sources_Set_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "sources" */
export type Sources_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sources_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sources_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "sources" */
export enum Sources_Update_Column {
  /** column name */
  Name = 'name'
}

export type Sources_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sources_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sources_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "activity_logs" */
  activity_logs: Array<Activity_Logs>;
  /** fetch aggregated fields from the table: "activity_logs" */
  activity_logs_aggregate: Activity_Logs_Aggregate;
  /** fetch data from the table: "activity_logs" using primary key columns */
  activity_logs_by_pk?: Maybe<Activity_Logs>;
  /** fetch data from the table in a streaming manner: "activity_logs" */
  activity_logs_stream: Array<Activity_Logs>;
  /** fetch data from the table: "audit_logs" */
  audit_logs: Array<Audit_Logs>;
  /** fetch aggregated fields from the table: "audit_logs" */
  audit_logs_aggregate: Audit_Logs_Aggregate;
  /** fetch data from the table: "audit_logs" using primary key columns */
  audit_logs_by_pk?: Maybe<Audit_Logs>;
  /** fetch data from the table in a streaming manner: "audit_logs" */
  audit_logs_stream: Array<Audit_Logs>;
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
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** fetch data from the table: "certifications" */
  certifications: Array<Certifications>;
  /** fetch aggregated fields from the table: "certifications" */
  certifications_aggregate: Certifications_Aggregate;
  /** fetch data from the table: "certifications" using primary key columns */
  certifications_by_pk?: Maybe<Certifications>;
  /** fetch data from the table in a streaming manner: "certifications" */
  certifications_stream: Array<Certifications>;
  /** fetch data from the table: "collections" */
  collections: Array<Collections>;
  /** fetch aggregated fields from the table: "collections" */
  collections_aggregate: Collections_Aggregate;
  /** fetch data from the table: "collections" using primary key columns */
  collections_by_pk?: Maybe<Collections>;
  /** fetch data from the table in a streaming manner: "collections" */
  collections_stream: Array<Collections>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch aggregated fields from the table: "countries" */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table in a streaming manner: "countries" */
  countries_stream: Array<Countries>;
  /** fetch data from the table: "credit_types" */
  credit_types: Array<Credit_Types>;
  /** fetch aggregated fields from the table: "credit_types" */
  credit_types_aggregate: Credit_Types_Aggregate;
  /** fetch data from the table: "credit_types" using primary key columns */
  credit_types_by_pk?: Maybe<Credit_Types>;
  /** fetch data from the table in a streaming manner: "credit_types" */
  credit_types_stream: Array<Credit_Types>;
  /** fetch data from the table: "external_ids" */
  external_ids: Array<External_Ids>;
  /** fetch aggregated fields from the table: "external_ids" */
  external_ids_aggregate: External_Ids_Aggregate;
  /** fetch data from the table: "external_ids" using primary key columns */
  external_ids_by_pk?: Maybe<External_Ids>;
  /** fetch data from the table in a streaming manner: "external_ids" */
  external_ids_stream: Array<External_Ids>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "genders" */
  genders: Array<Genders>;
  /** fetch aggregated fields from the table: "genders" */
  genders_aggregate: Genders_Aggregate;
  /** fetch data from the table: "genders" using primary key columns */
  genders_by_pk?: Maybe<Genders>;
  /** fetch data from the table in a streaming manner: "genders" */
  genders_stream: Array<Genders>;
  /** fetch data from the table: "genres" */
  genres: Array<Genres>;
  /** fetch aggregated fields from the table: "genres" */
  genres_aggregate: Genres_Aggregate;
  /** fetch data from the table: "genres" using primary key columns */
  genres_by_pk?: Maybe<Genres>;
  /** fetch data from the table in a streaming manner: "genres" */
  genres_stream: Array<Genres>;
  /** execute function "get_user_movie_activity" which returns "user_movie_activities" */
  get_user_movie_activity?: Maybe<User_Movie_Activities>;
  /** execute function "get_user_movie_activity" and query aggregates on result of table type "user_movie_activities" */
  get_user_movie_activity_aggregate: User_Movie_Activities_Aggregate;
  /** fetch data from the table: "languages" */
  languages: Array<Languages>;
  /** fetch aggregated fields from the table: "languages" */
  languages_aggregate: Languages_Aggregate;
  /** fetch data from the table: "languages" using primary key columns */
  languages_by_pk?: Maybe<Languages>;
  /** fetch data from the table in a streaming manner: "languages" */
  languages_stream: Array<Languages>;
  /** An array relationship */
  list_items: Array<List_Items>;
  /** An aggregate relationship */
  list_items_aggregate: List_Items_Aggregate;
  /** fetch data from the table: "list_items" using primary key columns */
  list_items_by_pk?: Maybe<List_Items>;
  /** fetch data from the table in a streaming manner: "list_items" */
  list_items_stream: Array<List_Items>;
  /** fetch data from the table: "lists" */
  lists: Array<Lists>;
  /** fetch aggregated fields from the table: "lists" */
  lists_aggregate: Lists_Aggregate;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk?: Maybe<Lists>;
  /** fetch data from the table in a streaming manner: "lists" */
  lists_stream: Array<Lists>;
  /** fetch data from the table: "media_statuses" */
  media_statuses: Array<Media_Statuses>;
  /** fetch aggregated fields from the table: "media_statuses" */
  media_statuses_aggregate: Media_Statuses_Aggregate;
  /** fetch data from the table: "media_statuses" using primary key columns */
  media_statuses_by_pk?: Maybe<Media_Statuses>;
  /** fetch data from the table in a streaming manner: "media_statuses" */
  media_statuses_stream: Array<Media_Statuses>;
  /** fetch data from the table: "media_types" */
  media_types: Array<Media_Types>;
  /** fetch aggregated fields from the table: "media_types" */
  media_types_aggregate: Media_Types_Aggregate;
  /** fetch data from the table: "media_types" using primary key columns */
  media_types_by_pk?: Maybe<Media_Types>;
  /** fetch data from the table in a streaming manner: "media_types" */
  media_types_stream: Array<Media_Types>;
  /** An array relationship */
  movie_credits: Array<Movie_Credits>;
  /** An aggregate relationship */
  movie_credits_aggregate: Movie_Credits_Aggregate;
  /** fetch data from the table: "movie_credits" using primary key columns */
  movie_credits_by_pk?: Maybe<Movie_Credits>;
  /** fetch data from the table in a streaming manner: "movie_credits" */
  movie_credits_stream: Array<Movie_Credits>;
  /** fetch data from the table: "movie_genres" */
  movie_genres: Array<Movie_Genres>;
  /** fetch aggregated fields from the table: "movie_genres" */
  movie_genres_aggregate: Movie_Genres_Aggregate;
  /** fetch data from the table: "movie_genres" using primary key columns */
  movie_genres_by_pk?: Maybe<Movie_Genres>;
  /** fetch data from the table in a streaming manner: "movie_genres" */
  movie_genres_stream: Array<Movie_Genres>;
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
  movie_spoken_languages: Array<Movie_Spoken_Languages>;
  /** An aggregate relationship */
  movie_spoken_languages_aggregate: Movie_Spoken_Languages_Aggregate;
  /** fetch data from the table: "movie_spoken_languages" using primary key columns */
  movie_spoken_languages_by_pk?: Maybe<Movie_Spoken_Languages>;
  /** fetch data from the table in a streaming manner: "movie_spoken_languages" */
  movie_spoken_languages_stream: Array<Movie_Spoken_Languages>;
  /** An array relationship */
  movies: Array<Movies>;
  /** An aggregate relationship */
  movies_aggregate: Movies_Aggregate;
  /** fetch data from the table: "movies" using primary key columns */
  movies_by_pk?: Maybe<Movies>;
  /** fetch data from the table in a streaming manner: "movies" */
  movies_stream: Array<Movies>;
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  people_aggregate: People_Aggregate;
  /** fetch data from the table: "people" using primary key columns */
  people_by_pk?: Maybe<People>;
  /** fetch data from the table in a streaming manner: "people" */
  people_stream: Array<People>;
  /** fetch data from the table: "production_companies" */
  production_companies: Array<Production_Companies>;
  /** fetch aggregated fields from the table: "production_companies" */
  production_companies_aggregate: Production_Companies_Aggregate;
  /** fetch data from the table: "production_companies" using primary key columns */
  production_companies_by_pk?: Maybe<Production_Companies>;
  /** fetch data from the table in a streaming manner: "production_companies" */
  production_companies_stream: Array<Production_Companies>;
  /** fetch data from the table: "sources" */
  sources: Array<Sources>;
  /** fetch aggregated fields from the table: "sources" */
  sources_aggregate: Sources_Aggregate;
  /** fetch data from the table: "sources" using primary key columns */
  sources_by_pk?: Maybe<Sources>;
  /** fetch data from the table in a streaming manner: "sources" */
  sources_stream: Array<Sources>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_movie_activities" */
  user_movie_activities: Array<User_Movie_Activities>;
  /** fetch aggregated fields from the table: "user_movie_activities" */
  user_movie_activities_aggregate: User_Movie_Activities_Aggregate;
  /** fetch data from the table: "user_movie_activities" using primary key columns */
  user_movie_activities_by_pk?: Maybe<User_Movie_Activities>;
  /** fetch data from the table in a streaming manner: "user_movie_activities" */
  user_movie_activities_stream: Array<User_Movie_Activities>;
  /** fetch data from the table: "user_movie_statuses" */
  user_movie_statuses: Array<User_Movie_Statuses>;
  /** fetch aggregated fields from the table: "user_movie_statuses" */
  user_movie_statuses_aggregate: User_Movie_Statuses_Aggregate;
  /** fetch data from the table: "user_movie_statuses" using primary key columns */
  user_movie_statuses_by_pk?: Maybe<User_Movie_Statuses>;
  /** fetch data from the table in a streaming manner: "user_movie_statuses" */
  user_movie_statuses_stream: Array<User_Movie_Statuses>;
  /** An array relationship */
  user_movie_watches: Array<User_Movie_Watches>;
  /** An aggregate relationship */
  user_movie_watches_aggregate: User_Movie_Watches_Aggregate;
  /** fetch data from the table: "user_movie_watches" using primary key columns */
  user_movie_watches_by_pk?: Maybe<User_Movie_Watches>;
  /** fetch data from the table in a streaming manner: "user_movie_watches" */
  user_movie_watches_stream: Array<User_Movie_Watches>;
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


export type Subscription_RootActivity_LogsArgs = {
  distinct_on?: InputMaybe<Array<Activity_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Activity_Logs_Order_By>>;
  where?: InputMaybe<Activity_Logs_Bool_Exp>;
};


export type Subscription_RootActivity_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activity_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Activity_Logs_Order_By>>;
  where?: InputMaybe<Activity_Logs_Bool_Exp>;
};


export type Subscription_RootActivity_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootActivity_Logs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Activity_Logs_Stream_Cursor_Input>>;
  where?: InputMaybe<Activity_Logs_Bool_Exp>;
};


export type Subscription_RootAudit_LogsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Logs_Order_By>>;
  where?: InputMaybe<Audit_Logs_Bool_Exp>;
};


export type Subscription_RootAudit_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Logs_Order_By>>;
  where?: InputMaybe<Audit_Logs_Bool_Exp>;
};


export type Subscription_RootAudit_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAudit_Logs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Audit_Logs_Stream_Cursor_Input>>;
  where?: InputMaybe<Audit_Logs_Bool_Exp>;
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


export type Subscription_RootCertificationsArgs = {
  distinct_on?: InputMaybe<Array<Certifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Certifications_Order_By>>;
  where?: InputMaybe<Certifications_Bool_Exp>;
};


export type Subscription_RootCertifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Certifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Certifications_Order_By>>;
  where?: InputMaybe<Certifications_Bool_Exp>;
};


export type Subscription_RootCertifications_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootCertifications_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Certifications_Stream_Cursor_Input>>;
  where?: InputMaybe<Certifications_Bool_Exp>;
};


export type Subscription_RootCollectionsArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Subscription_RootCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Subscription_RootCollections_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCollections_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Collections_Stream_Cursor_Input>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Subscription_RootCountriesArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Subscription_RootCountries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Subscription_RootCountries_By_PkArgs = {
  code: Scalars['bpchar']['input'];
};


export type Subscription_RootCountries_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Countries_Stream_Cursor_Input>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Subscription_RootCredit_TypesArgs = {
  distinct_on?: InputMaybe<Array<Credit_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Types_Order_By>>;
  where?: InputMaybe<Credit_Types_Bool_Exp>;
};


export type Subscription_RootCredit_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Credit_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Types_Order_By>>;
  where?: InputMaybe<Credit_Types_Bool_Exp>;
};


export type Subscription_RootCredit_Types_By_PkArgs = {
  credit_type: Scalars['String']['input'];
};


export type Subscription_RootCredit_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Credit_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Credit_Types_Bool_Exp>;
};


export type Subscription_RootExternal_IdsArgs = {
  distinct_on?: InputMaybe<Array<External_Ids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Ids_Order_By>>;
  where?: InputMaybe<External_Ids_Bool_Exp>;
};


export type Subscription_RootExternal_Ids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<External_Ids_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<External_Ids_Order_By>>;
  where?: InputMaybe<External_Ids_Bool_Exp>;
};


export type Subscription_RootExternal_Ids_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootExternal_Ids_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<External_Ids_Stream_Cursor_Input>>;
  where?: InputMaybe<External_Ids_Bool_Exp>;
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


export type Subscription_RootGendersArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Subscription_RootGenders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Subscription_RootGenders_By_PkArgs = {
  gender: Scalars['String']['input'];
};


export type Subscription_RootGenders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Genders_Stream_Cursor_Input>>;
  where?: InputMaybe<Genders_Bool_Exp>;
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


export type Subscription_RootGet_User_Movie_ActivityArgs = {
  args: Get_User_Movie_Activity_Args;
  distinct_on?: InputMaybe<Array<User_Movie_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Activities_Order_By>>;
  where?: InputMaybe<User_Movie_Activities_Bool_Exp>;
};


export type Subscription_RootGet_User_Movie_Activity_AggregateArgs = {
  args: Get_User_Movie_Activity_Args;
  distinct_on?: InputMaybe<Array<User_Movie_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Activities_Order_By>>;
  where?: InputMaybe<User_Movie_Activities_Bool_Exp>;
};


export type Subscription_RootLanguagesArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Subscription_RootLanguages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Subscription_RootLanguages_By_PkArgs = {
  code: Scalars['bpchar']['input'];
};


export type Subscription_RootLanguages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Languages_Stream_Cursor_Input>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Subscription_RootList_ItemsArgs = {
  distinct_on?: InputMaybe<Array<List_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Items_Order_By>>;
  where?: InputMaybe<List_Items_Bool_Exp>;
};


export type Subscription_RootList_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<List_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Items_Order_By>>;
  where?: InputMaybe<List_Items_Bool_Exp>;
};


export type Subscription_RootList_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootList_Items_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<List_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<List_Items_Bool_Exp>;
};


export type Subscription_RootListsArgs = {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
};


export type Subscription_RootLists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
};


export type Subscription_RootLists_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLists_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Lists_Stream_Cursor_Input>>;
  where?: InputMaybe<Lists_Bool_Exp>;
};


export type Subscription_RootMedia_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Media_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Statuses_Order_By>>;
  where?: InputMaybe<Media_Statuses_Bool_Exp>;
};


export type Subscription_RootMedia_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Statuses_Order_By>>;
  where?: InputMaybe<Media_Statuses_Bool_Exp>;
};


export type Subscription_RootMedia_Statuses_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootMedia_Statuses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Media_Statuses_Stream_Cursor_Input>>;
  where?: InputMaybe<Media_Statuses_Bool_Exp>;
};


export type Subscription_RootMedia_TypesArgs = {
  distinct_on?: InputMaybe<Array<Media_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Types_Order_By>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Subscription_RootMedia_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Types_Order_By>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Subscription_RootMedia_Types_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootMedia_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Media_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Subscription_RootMovie_CreditsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Credits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Credits_Order_By>>;
  where?: InputMaybe<Movie_Credits_Bool_Exp>;
};


export type Subscription_RootMovie_Credits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Credits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Credits_Order_By>>;
  where?: InputMaybe<Movie_Credits_Bool_Exp>;
};


export type Subscription_RootMovie_Credits_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Credits_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Credits_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Credits_Bool_Exp>;
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
  company_id: Scalars['uuid']['input'];
  movie_id: Scalars['uuid']['input'];
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
  country_code: Scalars['bpchar']['input'];
  movie_id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Production_Countries_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Production_Countries_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Production_Countries_Bool_Exp>;
};


export type Subscription_RootMovie_Spoken_LanguagesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Spoken_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Spoken_Languages_Order_By>>;
  where?: InputMaybe<Movie_Spoken_Languages_Bool_Exp>;
};


export type Subscription_RootMovie_Spoken_Languages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Spoken_Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Movie_Spoken_Languages_Order_By>>;
  where?: InputMaybe<Movie_Spoken_Languages_Bool_Exp>;
};


export type Subscription_RootMovie_Spoken_Languages_By_PkArgs = {
  language_code: Scalars['bpchar']['input'];
  movie_id: Scalars['uuid']['input'];
};


export type Subscription_RootMovie_Spoken_Languages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Movie_Spoken_Languages_Stream_Cursor_Input>>;
  where?: InputMaybe<Movie_Spoken_Languages_Bool_Exp>;
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


export type Subscription_RootProduction_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<Production_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Production_Companies_Order_By>>;
  where?: InputMaybe<Production_Companies_Bool_Exp>;
};


export type Subscription_RootProduction_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Production_Companies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Production_Companies_Order_By>>;
  where?: InputMaybe<Production_Companies_Bool_Exp>;
};


export type Subscription_RootProduction_Companies_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProduction_Companies_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Production_Companies_Stream_Cursor_Input>>;
  where?: InputMaybe<Production_Companies_Bool_Exp>;
};


export type Subscription_RootSourcesArgs = {
  distinct_on?: InputMaybe<Array<Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sources_Order_By>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Subscription_RootSources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sources_Order_By>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Subscription_RootSources_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootSources_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sources_Stream_Cursor_Input>>;
  where?: InputMaybe<Sources_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Movie_ActivitiesArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Activities_Order_By>>;
  where?: InputMaybe<User_Movie_Activities_Bool_Exp>;
};


export type Subscription_RootUser_Movie_Activities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Activities_Order_By>>;
  where?: InputMaybe<User_Movie_Activities_Bool_Exp>;
};


export type Subscription_RootUser_Movie_Activities_By_PkArgs = {
  movie_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Movie_Activities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Movie_Activities_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Movie_Activities_Bool_Exp>;
};


export type Subscription_RootUser_Movie_StatusesArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Statuses_Order_By>>;
  where?: InputMaybe<User_Movie_Statuses_Bool_Exp>;
};


export type Subscription_RootUser_Movie_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Statuses_Order_By>>;
  where?: InputMaybe<User_Movie_Statuses_Bool_Exp>;
};


export type Subscription_RootUser_Movie_Statuses_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootUser_Movie_Statuses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Movie_Statuses_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Movie_Statuses_Bool_Exp>;
};


export type Subscription_RootUser_Movie_WatchesArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Watches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Watches_Order_By>>;
  where?: InputMaybe<User_Movie_Watches_Bool_Exp>;
};


export type Subscription_RootUser_Movie_Watches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Watches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Movie_Watches_Order_By>>;
  where?: InputMaybe<User_Movie_Watches_Bool_Exp>;
};


export type Subscription_RootUser_Movie_Watches_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Movie_Watches_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Movie_Watches_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Movie_Watches_Bool_Exp>;
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

/** columns and relationships of "user_movie_activities" */
export type User_Movie_Activities = {
  __typename?: 'user_movie_activities';
  comment?: Maybe<Scalars['String']['output']>;
  movie_id: Scalars['uuid']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<User_Movie_Statuses_Enum>;
  user_id: Scalars['uuid']['output'];
};

export type User_Movie_Activities_Aggregate = {
  __typename?: 'user_movie_activities_aggregate';
  aggregate?: Maybe<User_Movie_Activities_Aggregate_Fields>;
  nodes: Array<User_Movie_Activities>;
};

/** aggregate fields of "user_movie_activities" */
export type User_Movie_Activities_Aggregate_Fields = {
  __typename?: 'user_movie_activities_aggregate_fields';
  avg?: Maybe<User_Movie_Activities_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Movie_Activities_Max_Fields>;
  min?: Maybe<User_Movie_Activities_Min_Fields>;
  stddev?: Maybe<User_Movie_Activities_Stddev_Fields>;
  stddev_pop?: Maybe<User_Movie_Activities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Movie_Activities_Stddev_Samp_Fields>;
  sum?: Maybe<User_Movie_Activities_Sum_Fields>;
  var_pop?: Maybe<User_Movie_Activities_Var_Pop_Fields>;
  var_samp?: Maybe<User_Movie_Activities_Var_Samp_Fields>;
  variance?: Maybe<User_Movie_Activities_Variance_Fields>;
};


/** aggregate fields of "user_movie_activities" */
export type User_Movie_Activities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Movie_Activities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_movie_activities" */
export type User_Movie_Activities_Aggregate_Order_By = {
  avg?: InputMaybe<User_Movie_Activities_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Movie_Activities_Max_Order_By>;
  min?: InputMaybe<User_Movie_Activities_Min_Order_By>;
  stddev?: InputMaybe<User_Movie_Activities_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Movie_Activities_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Movie_Activities_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Movie_Activities_Sum_Order_By>;
  var_pop?: InputMaybe<User_Movie_Activities_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Movie_Activities_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Movie_Activities_Variance_Order_By>;
};

/** aggregate avg on columns */
export type User_Movie_Activities_Avg_Fields = {
  __typename?: 'user_movie_activities_avg_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_movie_activities" */
export type User_Movie_Activities_Avg_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_movie_activities". All fields are combined with a logical 'AND'. */
export type User_Movie_Activities_Bool_Exp = {
  _and?: InputMaybe<Array<User_Movie_Activities_Bool_Exp>>;
  _not?: InputMaybe<User_Movie_Activities_Bool_Exp>;
  _or?: InputMaybe<Array<User_Movie_Activities_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  rating?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<User_Movie_Statuses_Enum_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_movie_activities" */
export enum User_Movie_Activities_Constraint {
  /** unique or primary key constraint on columns "user_id", "movie_id" */
  UserMovieActivitiesPkey = 'user_movie_activities_pkey'
}

/** input type for incrementing numeric columns in table "user_movie_activities" */
export type User_Movie_Activities_Inc_Input = {
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_movie_activities" */
export type User_Movie_Activities_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<User_Movie_Statuses_Enum>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Movie_Activities_Max_Fields = {
  __typename?: 'user_movie_activities_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_movie_activities" */
export type User_Movie_Activities_Max_Order_By = {
  comment?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Movie_Activities_Min_Fields = {
  __typename?: 'user_movie_activities_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_movie_activities" */
export type User_Movie_Activities_Min_Order_By = {
  comment?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_movie_activities" */
export type User_Movie_Activities_Mutation_Response = {
  __typename?: 'user_movie_activities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Movie_Activities>;
};

/** on_conflict condition type for table "user_movie_activities" */
export type User_Movie_Activities_On_Conflict = {
  constraint: User_Movie_Activities_Constraint;
  update_columns?: Array<User_Movie_Activities_Update_Column>;
  where?: InputMaybe<User_Movie_Activities_Bool_Exp>;
};

/** Ordering options when selecting data from "user_movie_activities". */
export type User_Movie_Activities_Order_By = {
  comment?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_movie_activities */
export type User_Movie_Activities_Pk_Columns_Input = {
  movie_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "user_movie_activities" */
export enum User_Movie_Activities_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  Rating = 'rating',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_movie_activities" */
export type User_Movie_Activities_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<User_Movie_Statuses_Enum>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type User_Movie_Activities_Stddev_Fields = {
  __typename?: 'user_movie_activities_stddev_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_movie_activities" */
export type User_Movie_Activities_Stddev_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Movie_Activities_Stddev_Pop_Fields = {
  __typename?: 'user_movie_activities_stddev_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_movie_activities" */
export type User_Movie_Activities_Stddev_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Movie_Activities_Stddev_Samp_Fields = {
  __typename?: 'user_movie_activities_stddev_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_movie_activities" */
export type User_Movie_Activities_Stddev_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_movie_activities" */
export type User_Movie_Activities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Movie_Activities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Movie_Activities_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<User_Movie_Statuses_Enum>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type User_Movie_Activities_Sum_Fields = {
  __typename?: 'user_movie_activities_sum_fields';
  rating?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user_movie_activities" */
export type User_Movie_Activities_Sum_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** update columns of table "user_movie_activities" */
export enum User_Movie_Activities_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  Rating = 'rating',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

export type User_Movie_Activities_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Movie_Activities_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Movie_Activities_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Movie_Activities_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Movie_Activities_Var_Pop_Fields = {
  __typename?: 'user_movie_activities_var_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_movie_activities" */
export type User_Movie_Activities_Var_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Movie_Activities_Var_Samp_Fields = {
  __typename?: 'user_movie_activities_var_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_movie_activities" */
export type User_Movie_Activities_Var_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Movie_Activities_Variance_Fields = {
  __typename?: 'user_movie_activities_variance_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_movie_activities" */
export type User_Movie_Activities_Variance_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_movie_statuses" */
export type User_Movie_Statuses = {
  __typename?: 'user_movie_statuses';
  name: Scalars['String']['output'];
};

/** aggregated selection of "user_movie_statuses" */
export type User_Movie_Statuses_Aggregate = {
  __typename?: 'user_movie_statuses_aggregate';
  aggregate?: Maybe<User_Movie_Statuses_Aggregate_Fields>;
  nodes: Array<User_Movie_Statuses>;
};

/** aggregate fields of "user_movie_statuses" */
export type User_Movie_Statuses_Aggregate_Fields = {
  __typename?: 'user_movie_statuses_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Movie_Statuses_Max_Fields>;
  min?: Maybe<User_Movie_Statuses_Min_Fields>;
};


/** aggregate fields of "user_movie_statuses" */
export type User_Movie_Statuses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Movie_Statuses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_movie_statuses". All fields are combined with a logical 'AND'. */
export type User_Movie_Statuses_Bool_Exp = {
  _and?: InputMaybe<Array<User_Movie_Statuses_Bool_Exp>>;
  _not?: InputMaybe<User_Movie_Statuses_Bool_Exp>;
  _or?: InputMaybe<Array<User_Movie_Statuses_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_movie_statuses" */
export enum User_Movie_Statuses_Constraint {
  /** unique or primary key constraint on columns "name" */
  UserMovieStatusesPkey = 'user_movie_statuses_pkey'
}

export enum User_Movie_Statuses_Enum {
  Dropped = 'DROPPED',
  Watched = 'WATCHED',
  Watching = 'WATCHING',
  Watchlist = 'WATCHLIST'
}

/** Boolean expression to compare columns of type "user_movie_statuses_enum". All fields are combined with logical 'AND'. */
export type User_Movie_Statuses_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Movie_Statuses_Enum>;
  _in?: InputMaybe<Array<User_Movie_Statuses_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<User_Movie_Statuses_Enum>;
  _nin?: InputMaybe<Array<User_Movie_Statuses_Enum>>;
};

/** input type for inserting data into table "user_movie_statuses" */
export type User_Movie_Statuses_Insert_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Movie_Statuses_Max_Fields = {
  __typename?: 'user_movie_statuses_max_fields';
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Movie_Statuses_Min_Fields = {
  __typename?: 'user_movie_statuses_min_fields';
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_movie_statuses" */
export type User_Movie_Statuses_Mutation_Response = {
  __typename?: 'user_movie_statuses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Movie_Statuses>;
};

/** on_conflict condition type for table "user_movie_statuses" */
export type User_Movie_Statuses_On_Conflict = {
  constraint: User_Movie_Statuses_Constraint;
  update_columns?: Array<User_Movie_Statuses_Update_Column>;
  where?: InputMaybe<User_Movie_Statuses_Bool_Exp>;
};

/** Ordering options when selecting data from "user_movie_statuses". */
export type User_Movie_Statuses_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_movie_statuses */
export type User_Movie_Statuses_Pk_Columns_Input = {
  name: Scalars['String']['input'];
};

/** select columns of table "user_movie_statuses" */
export enum User_Movie_Statuses_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user_movie_statuses" */
export type User_Movie_Statuses_Set_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_movie_statuses" */
export type User_Movie_Statuses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Movie_Statuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Movie_Statuses_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user_movie_statuses" */
export enum User_Movie_Statuses_Update_Column {
  /** column name */
  Name = 'name'
}

export type User_Movie_Statuses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Movie_Statuses_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Movie_Statuses_Bool_Exp;
};

/** columns and relationships of "user_movie_watches" */
export type User_Movie_Watches = {
  __typename?: 'user_movie_watches';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  movie_id: Scalars['uuid']['output'];
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "user_movie_watches" */
export type User_Movie_Watches_Aggregate = {
  __typename?: 'user_movie_watches_aggregate';
  aggregate?: Maybe<User_Movie_Watches_Aggregate_Fields>;
  nodes: Array<User_Movie_Watches>;
};

export type User_Movie_Watches_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Movie_Watches_Aggregate_Bool_Exp_Count>;
};

export type User_Movie_Watches_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Movie_Watches_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Movie_Watches_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_movie_watches" */
export type User_Movie_Watches_Aggregate_Fields = {
  __typename?: 'user_movie_watches_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Movie_Watches_Max_Fields>;
  min?: Maybe<User_Movie_Watches_Min_Fields>;
};


/** aggregate fields of "user_movie_watches" */
export type User_Movie_Watches_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Movie_Watches_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_movie_watches" */
export type User_Movie_Watches_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Movie_Watches_Max_Order_By>;
  min?: InputMaybe<User_Movie_Watches_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_movie_watches" */
export type User_Movie_Watches_Arr_Rel_Insert_Input = {
  data: Array<User_Movie_Watches_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Movie_Watches_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_movie_watches". All fields are combined with a logical 'AND'. */
export type User_Movie_Watches_Bool_Exp = {
  _and?: InputMaybe<Array<User_Movie_Watches_Bool_Exp>>;
  _not?: InputMaybe<User_Movie_Watches_Bool_Exp>;
  _or?: InputMaybe<Array<User_Movie_Watches_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_movie_watches" */
export enum User_Movie_Watches_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserMovieWatchesPkey = 'user_movie_watches_pkey'
}

/** input type for inserting data into table "user_movie_watches" */
export type User_Movie_Watches_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Movie_Watches_Max_Fields = {
  __typename?: 'user_movie_watches_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_movie_watches" */
export type User_Movie_Watches_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Movie_Watches_Min_Fields = {
  __typename?: 'user_movie_watches_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  movie_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_movie_watches" */
export type User_Movie_Watches_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_movie_watches" */
export type User_Movie_Watches_Mutation_Response = {
  __typename?: 'user_movie_watches_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Movie_Watches>;
};

/** on_conflict condition type for table "user_movie_watches" */
export type User_Movie_Watches_On_Conflict = {
  constraint: User_Movie_Watches_Constraint;
  update_columns?: Array<User_Movie_Watches_Update_Column>;
  where?: InputMaybe<User_Movie_Watches_Bool_Exp>;
};

/** Ordering options when selecting data from "user_movie_watches". */
export type User_Movie_Watches_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_movie_watches */
export type User_Movie_Watches_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_movie_watches" */
export enum User_Movie_Watches_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_movie_watches" */
export type User_Movie_Watches_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_movie_watches" */
export type User_Movie_Watches_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Movie_Watches_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Movie_Watches_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  movie_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_movie_watches" */
export enum User_Movie_Watches_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MovieId = 'movie_id',
  /** column name */
  UserId = 'user_id'
}

export type User_Movie_Watches_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Movie_Watches_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Movie_Watches_Bool_Exp;
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
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt: Scalars['timestamptz']['output'];
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberVerified: Scalars['Boolean']['output'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
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
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
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
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
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
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type Virus_Append_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
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

export type CreateListMutationVariables = Exact<{
  object: Lists_Insert_Input;
  on_conflict?: InputMaybe<Lists_On_Conflict>;
}>;


export type CreateListMutation = { __typename?: 'mutation_root', insert_lists_one?: { __typename?: 'lists', id: any, title: string } | null };

export type CreateMovieMutationVariables = Exact<{
  object: Movies_Insert_Input;
  on_conflict?: InputMaybe<Movies_On_Conflict>;
}>;


export type CreateMovieMutation = { __typename?: 'mutation_root', insert_movies_one?: { __typename?: 'movies', id: any, title: string } | null };

export type CreatePersonMutationVariables = Exact<{
  object: People_Insert_Input;
  on_conflict?: InputMaybe<People_On_Conflict>;
}>;


export type CreatePersonMutation = { __typename?: 'mutation_root', insert_people_one?: { __typename?: 'people', id: any, name: string } | null };

export type InsertActivityLogMutationVariables = Exact<{
  object: Activity_Logs_Insert_Input;
  on_conflict?: InputMaybe<Activity_Logs_On_Conflict>;
}>;


export type InsertActivityLogMutation = { __typename?: 'mutation_root', insert_activity_logs_one?: { __typename?: 'activity_logs', id: any } | null };

export type InsertAuditLogMutationVariables = Exact<{
  object: Audit_Logs_Insert_Input;
  on_conflict?: InputMaybe<Audit_Logs_On_Conflict>;
}>;


export type InsertAuditLogMutation = { __typename?: 'mutation_root', insert_audit_logs_one?: { __typename?: 'audit_logs', id: any } | null };

export type InsertExternalIdMutationVariables = Exact<{
  object: External_Ids_Insert_Input;
  on_conflict?: InputMaybe<External_Ids_On_Conflict>;
}>;


export type InsertExternalIdMutation = { __typename?: 'mutation_root', insert_external_ids_one?: { __typename?: 'external_ids', id: any, entity_id: any, media_type: Media_Types_Enum, source: Sources_Enum, external_id: string } | null };

export type InsertListItemMutationVariables = Exact<{
  object: List_Items_Insert_Input;
  on_conflict?: InputMaybe<List_Items_On_Conflict>;
}>;


export type InsertListItemMutation = { __typename?: 'mutation_root', insert_list_items_one?: { __typename?: 'list_items', id: any, list_id: any } | null };

export type InsertUserMovieWatchesMutationVariables = Exact<{
  object: User_Movie_Watches_Insert_Input;
  on_conflict?: InputMaybe<User_Movie_Watches_On_Conflict>;
}>;


export type InsertUserMovieWatchesMutation = { __typename?: 'mutation_root', insert_user_movie_watches_one?: { __typename?: 'user_movie_watches', id: any, movie_id: any, user_id: any, created_at: any } | null };

export type UpsertUserMovieActivityMutationVariables = Exact<{
  object: User_Movie_Activities_Insert_Input;
  on_conflict?: InputMaybe<User_Movie_Activities_On_Conflict>;
}>;


export type UpsertUserMovieActivityMutation = { __typename?: 'mutation_root', insert_user_movie_activities_one?: { __typename?: 'user_movie_activities', movie_id: any, rating?: number | null, status?: User_Movie_Statuses_Enum | null, comment?: string | null } | null };

export type ActivityLogsQueryVariables = Exact<{
  where?: InputMaybe<Activity_Logs_Bool_Exp>;
  distinct_on?: InputMaybe<Array<Activity_Logs_Select_Column> | Activity_Logs_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Activity_Logs_Order_By> | Activity_Logs_Order_By>;
}>;


export type ActivityLogsQuery = { __typename?: 'query_root', activity_logs: Array<{ __typename?: 'activity_logs', id: any, changes: any, meta?: any | null, created_at?: any | null, user: { __typename?: 'users', id: any, displayName: string, avatarUrl: string } }> };

export type AuditLogsQueryVariables = Exact<{
  where?: InputMaybe<Audit_Logs_Bool_Exp>;
  distinct_on?: InputMaybe<Array<Audit_Logs_Select_Column> | Audit_Logs_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Logs_Order_By> | Audit_Logs_Order_By>;
}>;


export type AuditLogsQuery = { __typename?: 'query_root', audit_logs: Array<{ __typename?: 'audit_logs', id: any, action: string, table: string, row_id: any, difference?: any | null, meta?: any | null, created_at: any, user?: { __typename?: 'users', id: any, displayName: string, avatarUrl: string } | null }> };

export type CreditTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type CreditTypesQuery = { __typename?: 'query_root', credit_types: Array<{ __typename?: 'credit_types', credit_type: string }> };

export type FindEntityByExternalIdQueryVariables = Exact<{
  source: Sources_Enum;
  externalId: Scalars['String']['input'];
  mediaType: Media_Types_Enum;
}>;


export type FindEntityByExternalIdQuery = { __typename?: 'query_root', external_ids: Array<{ __typename?: 'external_ids', entity_id: any, media_type: Media_Types_Enum }> };

export type GendersQueryVariables = Exact<{ [key: string]: never; }>;


export type GendersQuery = { __typename?: 'query_root', genders: Array<{ __typename?: 'genders', gender: string }> };

export type HealthQueryVariables = Exact<{ [key: string]: never; }>;


export type HealthQuery = { __typename: 'query_root' };

export type ListQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type ListQuery = { __typename?: 'query_root', lists_by_pk?: { __typename?: 'lists', id: any, title: string, list_items: Array<{ __typename?: 'list_items', id: any, title: string, description?: string | null, image: string, media_id: any, media_type: Media_Types_Enum }> } | null };

export type ListsQueryVariables = Exact<{
  where?: InputMaybe<Lists_Bool_Exp>;
  distinct?: InputMaybe<Array<Lists_Select_Column> | Lists_Select_Column>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By> | Lists_Order_By>;
}>;


export type ListsQuery = { __typename?: 'query_root', lists: Array<{ __typename?: 'lists', id: any, title: string }> };

export type MediaTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type MediaTypesQuery = { __typename?: 'query_root', media_types: Array<{ __typename?: 'media_types', name: string }> };

export type MovieQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type MovieQuery = { __typename?: 'query_root', movies_by_pk?: { __typename?: 'movies', id: any, poster_id?: any | null, backdrop_id?: any | null, title: string, tagline?: string | null, overview?: string | null, certification?: Certifications_Enum | null, release_date?: any | null, runtime?: number | null, vote_average?: number | null, keywords?: Array<string> | null, movie_credits: Array<{ __typename?: 'movie_credits', id: any, role: string, department: string, credit_type: Credit_Types_Enum, order: number, person: { __typename?: 'people', name: string } }>, genres: Array<{ __typename?: 'movie_genres', genre?: { __typename?: 'genres', id: any, name: string } | null }>, user_movie_activity?: Array<{ __typename?: 'user_movie_activities', comment?: string | null, rating?: number | null, status?: User_Movie_Statuses_Enum | null }> | null, user_movie_watches_aggregate: { __typename?: 'user_movie_watches_aggregate', aggregate?: { __typename?: 'user_movie_watches_aggregate_fields', count: number } | null } } | null };

export type MoviesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type MoviesQuery = { __typename?: 'query_root', movies: Array<{ __typename?: 'movies', id: any, title: string, poster_id?: any | null }> };

export type RootQueryVariables = Exact<{ [key: string]: never; }>;


export type RootQuery = { __typename: 'query_root' };

export type UserMovieStatusesQueryVariables = Exact<{ [key: string]: never; }>;


export type UserMovieStatusesQuery = { __typename?: 'query_root', user_movie_statuses: Array<{ __typename?: 'user_movie_statuses', name: string }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any }> };



export const CreateListDocument = `
    mutation CreateList($object: lists_insert_input!, $on_conflict: lists_on_conflict) {
  insert_lists_one(object: $object, on_conflict: $on_conflict) {
    id
    title
  }
}
    `;

export const useCreateListMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateListMutation, TError, CreateListMutationVariables, TContext>) => {
    
    return useMutation<CreateListMutation, TError, CreateListMutationVariables, TContext>(
      {
    mutationKey: ['CreateList'],
    mutationFn: (variables?: CreateListMutationVariables) => fetcher<CreateListMutation, CreateListMutationVariables>(CreateListDocument, variables)(),
    ...options
  }
    )};


useCreateListMutation.fetcher = (variables: CreateListMutationVariables, options?: RequestInit['headers']) => fetcher<CreateListMutation, CreateListMutationVariables>(CreateListDocument, variables, options);

export const CreateMovieDocument = `
    mutation CreateMovie($object: movies_insert_input!, $on_conflict: movies_on_conflict) {
  insert_movies_one(object: $object, on_conflict: $on_conflict) {
    id
    title
  }
}
    `;

export const useCreateMovieMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateMovieMutation, TError, CreateMovieMutationVariables, TContext>) => {
    
    return useMutation<CreateMovieMutation, TError, CreateMovieMutationVariables, TContext>(
      {
    mutationKey: ['CreateMovie'],
    mutationFn: (variables?: CreateMovieMutationVariables) => fetcher<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument, variables)(),
    ...options
  }
    )};


useCreateMovieMutation.fetcher = (variables: CreateMovieMutationVariables, options?: RequestInit['headers']) => fetcher<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument, variables, options);

export const CreatePersonDocument = `
    mutation CreatePerson($object: people_insert_input!, $on_conflict: people_on_conflict) {
  insert_people_one(object: $object, on_conflict: $on_conflict) {
    id
    name
  }
}
    `;

export const useCreatePersonMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreatePersonMutation, TError, CreatePersonMutationVariables, TContext>) => {
    
    return useMutation<CreatePersonMutation, TError, CreatePersonMutationVariables, TContext>(
      {
    mutationKey: ['CreatePerson'],
    mutationFn: (variables?: CreatePersonMutationVariables) => fetcher<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, variables)(),
    ...options
  }
    )};


useCreatePersonMutation.fetcher = (variables: CreatePersonMutationVariables, options?: RequestInit['headers']) => fetcher<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, variables, options);

export const InsertActivityLogDocument = `
    mutation InsertActivityLog($object: activity_logs_insert_input!, $on_conflict: activity_logs_on_conflict) {
  insert_activity_logs_one(object: $object, on_conflict: $on_conflict) {
    id
  }
}
    `;

export const useInsertActivityLogMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<InsertActivityLogMutation, TError, InsertActivityLogMutationVariables, TContext>) => {
    
    return useMutation<InsertActivityLogMutation, TError, InsertActivityLogMutationVariables, TContext>(
      {
    mutationKey: ['InsertActivityLog'],
    mutationFn: (variables?: InsertActivityLogMutationVariables) => fetcher<InsertActivityLogMutation, InsertActivityLogMutationVariables>(InsertActivityLogDocument, variables)(),
    ...options
  }
    )};


useInsertActivityLogMutation.fetcher = (variables: InsertActivityLogMutationVariables, options?: RequestInit['headers']) => fetcher<InsertActivityLogMutation, InsertActivityLogMutationVariables>(InsertActivityLogDocument, variables, options);

export const InsertAuditLogDocument = `
    mutation InsertAuditLog($object: audit_logs_insert_input!, $on_conflict: audit_logs_on_conflict) {
  insert_audit_logs_one(object: $object, on_conflict: $on_conflict) {
    id
  }
}
    `;

export const useInsertAuditLogMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<InsertAuditLogMutation, TError, InsertAuditLogMutationVariables, TContext>) => {
    
    return useMutation<InsertAuditLogMutation, TError, InsertAuditLogMutationVariables, TContext>(
      {
    mutationKey: ['InsertAuditLog'],
    mutationFn: (variables?: InsertAuditLogMutationVariables) => fetcher<InsertAuditLogMutation, InsertAuditLogMutationVariables>(InsertAuditLogDocument, variables)(),
    ...options
  }
    )};


useInsertAuditLogMutation.fetcher = (variables: InsertAuditLogMutationVariables, options?: RequestInit['headers']) => fetcher<InsertAuditLogMutation, InsertAuditLogMutationVariables>(InsertAuditLogDocument, variables, options);

export const InsertExternalIdDocument = `
    mutation InsertExternalId($object: external_ids_insert_input!, $on_conflict: external_ids_on_conflict) {
  insert_external_ids_one(object: $object, on_conflict: $on_conflict) {
    id
    entity_id
    media_type
    source
    external_id
  }
}
    `;

export const useInsertExternalIdMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<InsertExternalIdMutation, TError, InsertExternalIdMutationVariables, TContext>) => {
    
    return useMutation<InsertExternalIdMutation, TError, InsertExternalIdMutationVariables, TContext>(
      {
    mutationKey: ['InsertExternalId'],
    mutationFn: (variables?: InsertExternalIdMutationVariables) => fetcher<InsertExternalIdMutation, InsertExternalIdMutationVariables>(InsertExternalIdDocument, variables)(),
    ...options
  }
    )};


useInsertExternalIdMutation.fetcher = (variables: InsertExternalIdMutationVariables, options?: RequestInit['headers']) => fetcher<InsertExternalIdMutation, InsertExternalIdMutationVariables>(InsertExternalIdDocument, variables, options);

export const InsertListItemDocument = `
    mutation InsertListItem($object: list_items_insert_input!, $on_conflict: list_items_on_conflict) {
  insert_list_items_one(object: $object, on_conflict: $on_conflict) {
    id
    list_id
  }
}
    `;

export const useInsertListItemMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<InsertListItemMutation, TError, InsertListItemMutationVariables, TContext>) => {
    
    return useMutation<InsertListItemMutation, TError, InsertListItemMutationVariables, TContext>(
      {
    mutationKey: ['InsertListItem'],
    mutationFn: (variables?: InsertListItemMutationVariables) => fetcher<InsertListItemMutation, InsertListItemMutationVariables>(InsertListItemDocument, variables)(),
    ...options
  }
    )};


useInsertListItemMutation.fetcher = (variables: InsertListItemMutationVariables, options?: RequestInit['headers']) => fetcher<InsertListItemMutation, InsertListItemMutationVariables>(InsertListItemDocument, variables, options);

export const InsertUserMovieWatchesDocument = `
    mutation InsertUserMovieWatches($object: user_movie_watches_insert_input!, $on_conflict: user_movie_watches_on_conflict) {
  insert_user_movie_watches_one(object: $object, on_conflict: $on_conflict) {
    id
    movie_id
    user_id
    created_at
  }
}
    `;

export const useInsertUserMovieWatchesMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<InsertUserMovieWatchesMutation, TError, InsertUserMovieWatchesMutationVariables, TContext>) => {
    
    return useMutation<InsertUserMovieWatchesMutation, TError, InsertUserMovieWatchesMutationVariables, TContext>(
      {
    mutationKey: ['InsertUserMovieWatches'],
    mutationFn: (variables?: InsertUserMovieWatchesMutationVariables) => fetcher<InsertUserMovieWatchesMutation, InsertUserMovieWatchesMutationVariables>(InsertUserMovieWatchesDocument, variables)(),
    ...options
  }
    )};


useInsertUserMovieWatchesMutation.fetcher = (variables: InsertUserMovieWatchesMutationVariables, options?: RequestInit['headers']) => fetcher<InsertUserMovieWatchesMutation, InsertUserMovieWatchesMutationVariables>(InsertUserMovieWatchesDocument, variables, options);

export const UpsertUserMovieActivityDocument = `
    mutation UpsertUserMovieActivity($object: user_movie_activities_insert_input!, $on_conflict: user_movie_activities_on_conflict) {
  insert_user_movie_activities_one(object: $object, on_conflict: $on_conflict) {
    movie_id
    rating
    status
    comment
  }
}
    `;

export const useUpsertUserMovieActivityMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpsertUserMovieActivityMutation, TError, UpsertUserMovieActivityMutationVariables, TContext>) => {
    
    return useMutation<UpsertUserMovieActivityMutation, TError, UpsertUserMovieActivityMutationVariables, TContext>(
      {
    mutationKey: ['UpsertUserMovieActivity'],
    mutationFn: (variables?: UpsertUserMovieActivityMutationVariables) => fetcher<UpsertUserMovieActivityMutation, UpsertUserMovieActivityMutationVariables>(UpsertUserMovieActivityDocument, variables)(),
    ...options
  }
    )};


useUpsertUserMovieActivityMutation.fetcher = (variables: UpsertUserMovieActivityMutationVariables, options?: RequestInit['headers']) => fetcher<UpsertUserMovieActivityMutation, UpsertUserMovieActivityMutationVariables>(UpsertUserMovieActivityDocument, variables, options);

export const ActivityLogsDocument = `
    query ActivityLogs($where: activity_logs_bool_exp, $distinct_on: [activity_logs_select_column!], $limit: Int, $offset: Int, $order_by: [activity_logs_order_by!]) {
  activity_logs(
    where: $where
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
  ) {
    id
    changes
    meta
    user {
      id
      displayName
      avatarUrl
    }
    created_at
  }
}
    `;

export const useActivityLogsQuery = <
      TData = ActivityLogsQuery,
      TError = unknown
    >(
      variables?: ActivityLogsQueryVariables,
      options?: Omit<UseQueryOptions<ActivityLogsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ActivityLogsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ActivityLogsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['ActivityLogs'] : ['ActivityLogs', variables],
    queryFn: fetcher<ActivityLogsQuery, ActivityLogsQueryVariables>(ActivityLogsDocument, variables),
    ...options
  }
    )};

useActivityLogsQuery.document = ActivityLogsDocument;

useActivityLogsQuery.getKey = (variables?: ActivityLogsQueryVariables) => variables === undefined ? ['ActivityLogs'] : ['ActivityLogs', variables];

export const useInfiniteActivityLogsQuery = <
      TData = InfiniteData<ActivityLogsQuery>,
      TError = unknown
    >(
      variables: ActivityLogsQueryVariables,
      options: Omit<UseInfiniteQueryOptions<ActivityLogsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<ActivityLogsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<ActivityLogsQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['ActivityLogs.infinite'] : ['ActivityLogs.infinite', variables],
      queryFn: (metaData) => fetcher<ActivityLogsQuery, ActivityLogsQueryVariables>(ActivityLogsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteActivityLogsQuery.getKey = (variables?: ActivityLogsQueryVariables) => variables === undefined ? ['ActivityLogs.infinite'] : ['ActivityLogs.infinite', variables];


useActivityLogsQuery.fetcher = (variables?: ActivityLogsQueryVariables, options?: RequestInit['headers']) => fetcher<ActivityLogsQuery, ActivityLogsQueryVariables>(ActivityLogsDocument, variables, options);

export const AuditLogsDocument = `
    query AuditLogs($where: audit_logs_bool_exp, $distinct_on: [audit_logs_select_column!], $limit: Int, $offset: Int, $order_by: [audit_logs_order_by!]) {
  audit_logs(
    where: $where
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
  ) {
    id
    action
    table
    row_id
    difference
    meta
    user {
      id
      displayName
      avatarUrl
    }
    created_at
  }
}
    `;

export const useAuditLogsQuery = <
      TData = AuditLogsQuery,
      TError = unknown
    >(
      variables?: AuditLogsQueryVariables,
      options?: Omit<UseQueryOptions<AuditLogsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AuditLogsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AuditLogsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['AuditLogs'] : ['AuditLogs', variables],
    queryFn: fetcher<AuditLogsQuery, AuditLogsQueryVariables>(AuditLogsDocument, variables),
    ...options
  }
    )};

useAuditLogsQuery.document = AuditLogsDocument;

useAuditLogsQuery.getKey = (variables?: AuditLogsQueryVariables) => variables === undefined ? ['AuditLogs'] : ['AuditLogs', variables];

export const useInfiniteAuditLogsQuery = <
      TData = InfiniteData<AuditLogsQuery>,
      TError = unknown
    >(
      variables: AuditLogsQueryVariables,
      options: Omit<UseInfiniteQueryOptions<AuditLogsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<AuditLogsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<AuditLogsQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['AuditLogs.infinite'] : ['AuditLogs.infinite', variables],
      queryFn: (metaData) => fetcher<AuditLogsQuery, AuditLogsQueryVariables>(AuditLogsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteAuditLogsQuery.getKey = (variables?: AuditLogsQueryVariables) => variables === undefined ? ['AuditLogs.infinite'] : ['AuditLogs.infinite', variables];


useAuditLogsQuery.fetcher = (variables?: AuditLogsQueryVariables, options?: RequestInit['headers']) => fetcher<AuditLogsQuery, AuditLogsQueryVariables>(AuditLogsDocument, variables, options);

export const CreditTypesDocument = `
    query CreditTypes {
  credit_types {
    credit_type
  }
}
    `;

export const useCreditTypesQuery = <
      TData = CreditTypesQuery,
      TError = unknown
    >(
      variables?: CreditTypesQueryVariables,
      options?: Omit<UseQueryOptions<CreditTypesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CreditTypesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CreditTypesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['CreditTypes'] : ['CreditTypes', variables],
    queryFn: fetcher<CreditTypesQuery, CreditTypesQueryVariables>(CreditTypesDocument, variables),
    ...options
  }
    )};

useCreditTypesQuery.document = CreditTypesDocument;

useCreditTypesQuery.getKey = (variables?: CreditTypesQueryVariables) => variables === undefined ? ['CreditTypes'] : ['CreditTypes', variables];

export const useInfiniteCreditTypesQuery = <
      TData = InfiniteData<CreditTypesQuery>,
      TError = unknown
    >(
      variables: CreditTypesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<CreditTypesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<CreditTypesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<CreditTypesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['CreditTypes.infinite'] : ['CreditTypes.infinite', variables],
      queryFn: (metaData) => fetcher<CreditTypesQuery, CreditTypesQueryVariables>(CreditTypesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteCreditTypesQuery.getKey = (variables?: CreditTypesQueryVariables) => variables === undefined ? ['CreditTypes.infinite'] : ['CreditTypes.infinite', variables];


useCreditTypesQuery.fetcher = (variables?: CreditTypesQueryVariables, options?: RequestInit['headers']) => fetcher<CreditTypesQuery, CreditTypesQueryVariables>(CreditTypesDocument, variables, options);

export const FindEntityByExternalIdDocument = `
    query FindEntityByExternalId($source: sources_enum!, $externalId: String!, $mediaType: media_types_enum!) {
  external_ids(
    where: {source: {_eq: $source}, external_id: {_eq: $externalId}, media_type: {_eq: $mediaType}}
    limit: 1
  ) {
    entity_id
    media_type
  }
}
    `;

export const useFindEntityByExternalIdQuery = <
      TData = FindEntityByExternalIdQuery,
      TError = unknown
    >(
      variables: FindEntityByExternalIdQueryVariables,
      options?: Omit<UseQueryOptions<FindEntityByExternalIdQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<FindEntityByExternalIdQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<FindEntityByExternalIdQuery, TError, TData>(
      {
    queryKey: ['FindEntityByExternalId', variables],
    queryFn: fetcher<FindEntityByExternalIdQuery, FindEntityByExternalIdQueryVariables>(FindEntityByExternalIdDocument, variables),
    ...options
  }
    )};

useFindEntityByExternalIdQuery.document = FindEntityByExternalIdDocument;

useFindEntityByExternalIdQuery.getKey = (variables: FindEntityByExternalIdQueryVariables) => ['FindEntityByExternalId', variables];

export const useInfiniteFindEntityByExternalIdQuery = <
      TData = InfiniteData<FindEntityByExternalIdQuery>,
      TError = unknown
    >(
      variables: FindEntityByExternalIdQueryVariables,
      options: Omit<UseInfiniteQueryOptions<FindEntityByExternalIdQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<FindEntityByExternalIdQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<FindEntityByExternalIdQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['FindEntityByExternalId.infinite', variables],
      queryFn: (metaData) => fetcher<FindEntityByExternalIdQuery, FindEntityByExternalIdQueryVariables>(FindEntityByExternalIdDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteFindEntityByExternalIdQuery.getKey = (variables: FindEntityByExternalIdQueryVariables) => ['FindEntityByExternalId.infinite', variables];


useFindEntityByExternalIdQuery.fetcher = (variables: FindEntityByExternalIdQueryVariables, options?: RequestInit['headers']) => fetcher<FindEntityByExternalIdQuery, FindEntityByExternalIdQueryVariables>(FindEntityByExternalIdDocument, variables, options);

export const GendersDocument = `
    query Genders {
  genders {
    gender
  }
}
    `;

export const useGendersQuery = <
      TData = GendersQuery,
      TError = unknown
    >(
      variables?: GendersQueryVariables,
      options?: Omit<UseQueryOptions<GendersQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GendersQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GendersQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Genders'] : ['Genders', variables],
    queryFn: fetcher<GendersQuery, GendersQueryVariables>(GendersDocument, variables),
    ...options
  }
    )};

useGendersQuery.document = GendersDocument;

useGendersQuery.getKey = (variables?: GendersQueryVariables) => variables === undefined ? ['Genders'] : ['Genders', variables];

export const useInfiniteGendersQuery = <
      TData = InfiniteData<GendersQuery>,
      TError = unknown
    >(
      variables: GendersQueryVariables,
      options: Omit<UseInfiniteQueryOptions<GendersQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<GendersQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<GendersQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['Genders.infinite'] : ['Genders.infinite', variables],
      queryFn: (metaData) => fetcher<GendersQuery, GendersQueryVariables>(GendersDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteGendersQuery.getKey = (variables?: GendersQueryVariables) => variables === undefined ? ['Genders.infinite'] : ['Genders.infinite', variables];


useGendersQuery.fetcher = (variables?: GendersQueryVariables, options?: RequestInit['headers']) => fetcher<GendersQuery, GendersQueryVariables>(GendersDocument, variables, options);

export const HealthDocument = `
    query Health {
  __typename
}
    `;

export const useHealthQuery = <
      TData = HealthQuery,
      TError = unknown
    >(
      variables?: HealthQueryVariables,
      options?: Omit<UseQueryOptions<HealthQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<HealthQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<HealthQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Health'] : ['Health', variables],
    queryFn: fetcher<HealthQuery, HealthQueryVariables>(HealthDocument, variables),
    ...options
  }
    )};

useHealthQuery.document = HealthDocument;

useHealthQuery.getKey = (variables?: HealthQueryVariables) => variables === undefined ? ['Health'] : ['Health', variables];

export const useInfiniteHealthQuery = <
      TData = InfiniteData<HealthQuery>,
      TError = unknown
    >(
      variables: HealthQueryVariables,
      options: Omit<UseInfiniteQueryOptions<HealthQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<HealthQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<HealthQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['Health.infinite'] : ['Health.infinite', variables],
      queryFn: (metaData) => fetcher<HealthQuery, HealthQueryVariables>(HealthDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteHealthQuery.getKey = (variables?: HealthQueryVariables) => variables === undefined ? ['Health.infinite'] : ['Health.infinite', variables];


useHealthQuery.fetcher = (variables?: HealthQueryVariables, options?: RequestInit['headers']) => fetcher<HealthQuery, HealthQueryVariables>(HealthDocument, variables, options);

export const ListDocument = `
    query List($id: uuid!) {
  lists_by_pk(id: $id) {
    id
    title
    list_items {
      id
      title
      description
      image
      media_id
      media_type
    }
  }
}
    `;

export const useListQuery = <
      TData = ListQuery,
      TError = unknown
    >(
      variables: ListQueryVariables,
      options?: Omit<UseQueryOptions<ListQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ListQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ListQuery, TError, TData>(
      {
    queryKey: ['List', variables],
    queryFn: fetcher<ListQuery, ListQueryVariables>(ListDocument, variables),
    ...options
  }
    )};

useListQuery.document = ListDocument;

useListQuery.getKey = (variables: ListQueryVariables) => ['List', variables];

export const useInfiniteListQuery = <
      TData = InfiniteData<ListQuery>,
      TError = unknown
    >(
      variables: ListQueryVariables,
      options: Omit<UseInfiniteQueryOptions<ListQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<ListQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<ListQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['List.infinite', variables],
      queryFn: (metaData) => fetcher<ListQuery, ListQueryVariables>(ListDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteListQuery.getKey = (variables: ListQueryVariables) => ['List.infinite', variables];


useListQuery.fetcher = (variables: ListQueryVariables, options?: RequestInit['headers']) => fetcher<ListQuery, ListQueryVariables>(ListDocument, variables, options);

export const ListsDocument = `
    query Lists($where: lists_bool_exp, $distinct: [lists_select_column!], $limit: Int, $offset: Int, $order_by: [lists_order_by!]) {
  lists(
    where: $where
    distinct_on: $distinct
    limit: $limit
    offset: $offset
    order_by: $order_by
  ) {
    id
    title
  }
}
    `;

export const useListsQuery = <
      TData = ListsQuery,
      TError = unknown
    >(
      variables?: ListsQueryVariables,
      options?: Omit<UseQueryOptions<ListsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ListsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ListsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Lists'] : ['Lists', variables],
    queryFn: fetcher<ListsQuery, ListsQueryVariables>(ListsDocument, variables),
    ...options
  }
    )};

useListsQuery.document = ListsDocument;

useListsQuery.getKey = (variables?: ListsQueryVariables) => variables === undefined ? ['Lists'] : ['Lists', variables];

export const useInfiniteListsQuery = <
      TData = InfiniteData<ListsQuery>,
      TError = unknown
    >(
      variables: ListsQueryVariables,
      options: Omit<UseInfiniteQueryOptions<ListsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<ListsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<ListsQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['Lists.infinite'] : ['Lists.infinite', variables],
      queryFn: (metaData) => fetcher<ListsQuery, ListsQueryVariables>(ListsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteListsQuery.getKey = (variables?: ListsQueryVariables) => variables === undefined ? ['Lists.infinite'] : ['Lists.infinite', variables];


useListsQuery.fetcher = (variables?: ListsQueryVariables, options?: RequestInit['headers']) => fetcher<ListsQuery, ListsQueryVariables>(ListsDocument, variables, options);

export const MediaTypesDocument = `
    query MediaTypes {
  media_types {
    name
  }
}
    `;

export const useMediaTypesQuery = <
      TData = MediaTypesQuery,
      TError = unknown
    >(
      variables?: MediaTypesQueryVariables,
      options?: Omit<UseQueryOptions<MediaTypesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<MediaTypesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<MediaTypesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['MediaTypes'] : ['MediaTypes', variables],
    queryFn: fetcher<MediaTypesQuery, MediaTypesQueryVariables>(MediaTypesDocument, variables),
    ...options
  }
    )};

useMediaTypesQuery.document = MediaTypesDocument;

useMediaTypesQuery.getKey = (variables?: MediaTypesQueryVariables) => variables === undefined ? ['MediaTypes'] : ['MediaTypes', variables];

export const useInfiniteMediaTypesQuery = <
      TData = InfiniteData<MediaTypesQuery>,
      TError = unknown
    >(
      variables: MediaTypesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<MediaTypesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<MediaTypesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<MediaTypesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['MediaTypes.infinite'] : ['MediaTypes.infinite', variables],
      queryFn: (metaData) => fetcher<MediaTypesQuery, MediaTypesQueryVariables>(MediaTypesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteMediaTypesQuery.getKey = (variables?: MediaTypesQueryVariables) => variables === undefined ? ['MediaTypes.infinite'] : ['MediaTypes.infinite', variables];


useMediaTypesQuery.fetcher = (variables?: MediaTypesQueryVariables, options?: RequestInit['headers']) => fetcher<MediaTypesQuery, MediaTypesQueryVariables>(MediaTypesDocument, variables, options);

export const MovieDocument = `
    query Movie($id: uuid!) {
  movies_by_pk(id: $id) {
    id
    poster_id
    backdrop_id
    title
    tagline
    overview
    certification
    release_date
    runtime
    vote_average
    movie_credits {
      id
      role
      department
      credit_type
      order
      person {
        name
      }
    }
    genres {
      genre {
        id
        name
      }
    }
    keywords
    user_movie_activity {
      comment
      rating
      status
    }
    user_movie_watches_aggregate(where: {movie_id: {_eq: $id}}) {
      aggregate {
        count
      }
    }
  }
}
    `;

export const useMovieQuery = <
      TData = MovieQuery,
      TError = unknown
    >(
      variables: MovieQueryVariables,
      options?: Omit<UseQueryOptions<MovieQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<MovieQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<MovieQuery, TError, TData>(
      {
    queryKey: ['Movie', variables],
    queryFn: fetcher<MovieQuery, MovieQueryVariables>(MovieDocument, variables),
    ...options
  }
    )};

useMovieQuery.document = MovieDocument;

useMovieQuery.getKey = (variables: MovieQueryVariables) => ['Movie', variables];

export const useInfiniteMovieQuery = <
      TData = InfiniteData<MovieQuery>,
      TError = unknown
    >(
      variables: MovieQueryVariables,
      options: Omit<UseInfiniteQueryOptions<MovieQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<MovieQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<MovieQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? ['Movie.infinite', variables],
      queryFn: (metaData) => fetcher<MovieQuery, MovieQueryVariables>(MovieDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteMovieQuery.getKey = (variables: MovieQueryVariables) => ['Movie.infinite', variables];


useMovieQuery.fetcher = (variables: MovieQueryVariables, options?: RequestInit['headers']) => fetcher<MovieQuery, MovieQueryVariables>(MovieDocument, variables, options);

export const MoviesDocument = `
    query Movies($limit: Int, $offset: Int) {
  movies(limit: $limit, offset: $offset) {
    id
    title
    poster_id
  }
}
    `;

export const useMoviesQuery = <
      TData = MoviesQuery,
      TError = unknown
    >(
      variables?: MoviesQueryVariables,
      options?: Omit<UseQueryOptions<MoviesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<MoviesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<MoviesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Movies'] : ['Movies', variables],
    queryFn: fetcher<MoviesQuery, MoviesQueryVariables>(MoviesDocument, variables),
    ...options
  }
    )};

useMoviesQuery.document = MoviesDocument;

useMoviesQuery.getKey = (variables?: MoviesQueryVariables) => variables === undefined ? ['Movies'] : ['Movies', variables];

export const useInfiniteMoviesQuery = <
      TData = InfiniteData<MoviesQuery>,
      TError = unknown
    >(
      variables: MoviesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<MoviesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<MoviesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<MoviesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['Movies.infinite'] : ['Movies.infinite', variables],
      queryFn: (metaData) => fetcher<MoviesQuery, MoviesQueryVariables>(MoviesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteMoviesQuery.getKey = (variables?: MoviesQueryVariables) => variables === undefined ? ['Movies.infinite'] : ['Movies.infinite', variables];


useMoviesQuery.fetcher = (variables?: MoviesQueryVariables, options?: RequestInit['headers']) => fetcher<MoviesQuery, MoviesQueryVariables>(MoviesDocument, variables, options);

export const RootDocument = `
    query Root {
  __typename
}
    `;

export const useRootQuery = <
      TData = RootQuery,
      TError = unknown
    >(
      variables?: RootQueryVariables,
      options?: Omit<UseQueryOptions<RootQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<RootQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<RootQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Root'] : ['Root', variables],
    queryFn: fetcher<RootQuery, RootQueryVariables>(RootDocument, variables),
    ...options
  }
    )};

useRootQuery.document = RootDocument;

useRootQuery.getKey = (variables?: RootQueryVariables) => variables === undefined ? ['Root'] : ['Root', variables];

export const useInfiniteRootQuery = <
      TData = InfiniteData<RootQuery>,
      TError = unknown
    >(
      variables: RootQueryVariables,
      options: Omit<UseInfiniteQueryOptions<RootQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<RootQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<RootQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['Root.infinite'] : ['Root.infinite', variables],
      queryFn: (metaData) => fetcher<RootQuery, RootQueryVariables>(RootDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteRootQuery.getKey = (variables?: RootQueryVariables) => variables === undefined ? ['Root.infinite'] : ['Root.infinite', variables];


useRootQuery.fetcher = (variables?: RootQueryVariables, options?: RequestInit['headers']) => fetcher<RootQuery, RootQueryVariables>(RootDocument, variables, options);

export const UserMovieStatusesDocument = `
    query UserMovieStatuses {
  user_movie_statuses {
    name
  }
}
    `;

export const useUserMovieStatusesQuery = <
      TData = UserMovieStatusesQuery,
      TError = unknown
    >(
      variables?: UserMovieStatusesQueryVariables,
      options?: Omit<UseQueryOptions<UserMovieStatusesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<UserMovieStatusesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<UserMovieStatusesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['UserMovieStatuses'] : ['UserMovieStatuses', variables],
    queryFn: fetcher<UserMovieStatusesQuery, UserMovieStatusesQueryVariables>(UserMovieStatusesDocument, variables),
    ...options
  }
    )};

useUserMovieStatusesQuery.document = UserMovieStatusesDocument;

useUserMovieStatusesQuery.getKey = (variables?: UserMovieStatusesQueryVariables) => variables === undefined ? ['UserMovieStatuses'] : ['UserMovieStatuses', variables];

export const useInfiniteUserMovieStatusesQuery = <
      TData = InfiniteData<UserMovieStatusesQuery>,
      TError = unknown
    >(
      variables: UserMovieStatusesQueryVariables,
      options: Omit<UseInfiniteQueryOptions<UserMovieStatusesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<UserMovieStatusesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<UserMovieStatusesQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['UserMovieStatuses.infinite'] : ['UserMovieStatuses.infinite', variables],
      queryFn: (metaData) => fetcher<UserMovieStatusesQuery, UserMovieStatusesQueryVariables>(UserMovieStatusesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteUserMovieStatusesQuery.getKey = (variables?: UserMovieStatusesQueryVariables) => variables === undefined ? ['UserMovieStatuses.infinite'] : ['UserMovieStatuses.infinite', variables];


useUserMovieStatusesQuery.fetcher = (variables?: UserMovieStatusesQueryVariables, options?: RequestInit['headers']) => fetcher<UserMovieStatusesQuery, UserMovieStatusesQueryVariables>(UserMovieStatusesDocument, variables, options);

export const UsersDocument = `
    query Users {
  users {
    id
  }
}
    `;

export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      variables?: UsersQueryVariables,
      options?: Omit<UseQueryOptions<UsersQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<UsersQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<UsersQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Users'] : ['Users', variables],
    queryFn: fetcher<UsersQuery, UsersQueryVariables>(UsersDocument, variables),
    ...options
  }
    )};

useUsersQuery.document = UsersDocument;

useUsersQuery.getKey = (variables?: UsersQueryVariables) => variables === undefined ? ['Users'] : ['Users', variables];

export const useInfiniteUsersQuery = <
      TData = InfiniteData<UsersQuery>,
      TError = unknown
    >(
      variables: UsersQueryVariables,
      options: Omit<UseInfiniteQueryOptions<UsersQuery, TError, TData>, 'queryKey'> & { queryKey?: UseInfiniteQueryOptions<UsersQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useInfiniteQuery<UsersQuery, TError, TData>(
      (() => {
    const { queryKey: optionsQueryKey, ...restOptions } = options;
    return {
      queryKey: optionsQueryKey ?? variables === undefined ? ['Users.infinite'] : ['Users.infinite', variables],
      queryFn: (metaData) => fetcher<UsersQuery, UsersQueryVariables>(UsersDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      ...restOptions
    }
  })()
    )};

useInfiniteUsersQuery.getKey = (variables?: UsersQueryVariables) => variables === undefined ? ['Users.infinite'] : ['Users.infinite', variables];


useUsersQuery.fetcher = (variables?: UsersQueryVariables, options?: RequestInit['headers']) => fetcher<UsersQuery, UsersQueryVariables>(UsersDocument, variables, options);
