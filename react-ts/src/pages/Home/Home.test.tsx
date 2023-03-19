import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Home } from './Home';

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
