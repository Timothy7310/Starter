import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type StartListQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  type?: Types.InputMaybe<Types.MediaType>;
  sort?: Types.InputMaybe<Array<Types.InputMaybe<Types.MediaSort>> | Types.InputMaybe<Types.MediaSort>>;
  seasonYear?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  season?: Types.InputMaybe<Types.MediaSeason>;
}>;


export type StartListQuery = { __typename: 'Query', Page?: { __typename: 'Page', media?: Array<{ __typename: 'Media', id: number, title?: { __typename: 'MediaTitle', english?: string | null, romaji?: string | null } | null, coverImage?: { __typename: 'MediaCoverImage', large?: string | null, extraLarge?: string | null, color?: string | null } | null } | null> | null } | null };


export const StartListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StartListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"6"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MediaType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MediaSort"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"seasonYear"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"season"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MediaSeason"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"media"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"seasonYear"},"value":{"kind":"Variable","name":{"kind":"Name","value":"seasonYear"}}},{"kind":"Argument","name":{"kind":"Name","value":"season"},"value":{"kind":"Variable","name":{"kind":"Name","value":"season"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"english"}},{"kind":"Field","name":{"kind":"Name","value":"romaji"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"}},{"kind":"Field","name":{"kind":"Name","value":"extraLarge"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useStartListQuery__
 *
 * To run a query within a React component, call `useStartListQuery` and pass it any options that fit your needs.
 * When your component renders, `useStartListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStartListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      type: // value for 'type'
 *      sort: // value for 'sort'
 *      seasonYear: // value for 'seasonYear'
 *      season: // value for 'season'
 *   },
 * });
 */
export function useStartListQuery(baseOptions?: Apollo.QueryHookOptions<StartListQuery, StartListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StartListQuery, StartListQueryVariables>(StartListQueryDocument, options);
      }
export function useStartListQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StartListQuery, StartListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StartListQuery, StartListQueryVariables>(StartListQueryDocument, options);
        }
export type StartListQueryHookResult = ReturnType<typeof useStartListQuery>;
export type StartListQueryLazyQueryHookResult = ReturnType<typeof useStartListQueryLazyQuery>;
export type StartListQueryQueryResult = Apollo.QueryResult<StartListQuery, StartListQueryVariables>;