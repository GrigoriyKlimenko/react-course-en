import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Error } from './Error';

describe('Error page', () => {
  it('Renders home page', () => {
    render(<Error />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not found...');
  });
});
