import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  it('Renders header component for Home page', () => {
    render(
      <MemoryRouter>
        <Header currentPageTitle="Home" />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('Home');
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
  it('Renders header component for About us page', () => {
    render(
      <MemoryRouter>
        <Header currentPageTitle="About us" />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('About us');
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
  it('Renders header component for Error page', () => {
    render(
      <MemoryRouter>
        <Header currentPageTitle="Error" />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('Error');
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});
