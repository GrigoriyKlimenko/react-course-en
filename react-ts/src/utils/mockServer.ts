import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  CardType,
  PartialCardType,
} from '@components/CardsContainer/Card/types';
import { BASE_URL } from '@data/baseUrl';

export const mockServer = setupServer();

export const mockGetAllCardsEndpoint = (
  searchParam: string,
  body: PartialCardType[]
) => {
  mockServer.use(
    rest.get(`${BASE_URL}/catalog`, (req, res, ctx) =>
      res(ctx.status(200), ctx.json(body))
    )
  );
};

export const mockGetOneCardEndpoint = (endpoint: string, body: CardType) => {
  mockServer.use(
    rest.get(endpoint, (req, res, ctx) => res(ctx.status(200), ctx.json(body)))
  );
};
