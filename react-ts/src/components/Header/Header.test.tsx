import 'whatwg-fetch';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  it('Renders header component for Home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('Home');
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
  it('Renders header component for About us page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('About us');
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
  it('Renders header component for Error page', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <Header />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('Error');
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
