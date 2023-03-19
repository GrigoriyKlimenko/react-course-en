import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { AboutUs } from './AboutUs';

describe('AboutUs page', () => {
  it('Renders about us page', () => {
    render(<AboutUs />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About us');
  });
});
