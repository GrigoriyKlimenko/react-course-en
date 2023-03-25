import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Registration } from './Registration';

describe('Registration page', () => {
  it('Renders registration page', () => {
    render(<Registration />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Participants registration of the "Race days" event');
  });
});
