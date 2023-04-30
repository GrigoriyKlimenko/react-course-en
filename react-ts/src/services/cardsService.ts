import {
  buildCreateApi,
  coreModule,
  fetchBaseQuery,
  reactHooksModule,
} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@data/baseUrl';
import {
  CardType,
  PartialCardType,
} from '@components/CardsContainer/Card/types';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchAllCards: build.query<PartialCardType[], string>({
      query: (searchText = '') => ({
        url: '/catalog',
        params: {
          name_like: searchText,
        },
      }),
    }),
    fetchCardInfo: build.query<CardType, string>({
      query: (id = '') => ({
        url: `/catalog/${id}`,
      }),
    }),
  }),
});
