import { describe, it, Mock, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  })
) as Mock;

describe('Home page', () => {
  it('Renders home page', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home');
  });
});
