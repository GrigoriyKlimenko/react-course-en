import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
describe('App', () => {
  it('Renders home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
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
