import { describe, it, Mock, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import image from '@assets/no-image.jpg';

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          id: '1',
          image: image,
          name: 'Nick Qwerty',
        },
        {
          id: '2',
          image: image,
          name: 'Mike Render',
        },
      ]),
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
  it('has two cards', async () => {
    render(<Home />);
    expect(await screen.findByText('Full name: Nick Qwerty')).toBeVisible();
    expect(await screen.findByText('Full name: Mike Render')).toBeVisible();
  });
});
