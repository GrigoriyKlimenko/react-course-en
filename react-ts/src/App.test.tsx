import 'whatwg-fetch';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import { mockGetAllCardsEndpoint } from '@/utils/mockServer';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';
const store = setupStore();

describe('App', () => {
  it('Renders home page', async () => {
    mockGetAllCardsEndpoint('', []);
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(
      await screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home');
  });

  it('Renders about us page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About us');
  });

  it('Renders not found page, if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/wrong-turn']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not found...');
  });
});
