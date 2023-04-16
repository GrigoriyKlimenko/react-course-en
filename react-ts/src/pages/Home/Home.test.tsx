import 'whatwg-fetch';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import image from '@assets/no-image.jpg';
import { mockGetAllCardsEndpoint } from '@/utils/mockServer';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';
const store = setupStore();

const mockData = [
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
];

const wrappedHome = (
  <Provider store={store}>
    <Home />
  </Provider>
);

describe('Home page', () => {
  it('Renders home page', async () => {
    mockGetAllCardsEndpoint('', mockData);
    render(wrappedHome);
    await expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home');
  });
  it('has two cards', async () => {
    mockGetAllCardsEndpoint('', mockData);
    render(wrappedHome);
    expect(await screen.findByText('Full name: Nick Qwerty')).toBeVisible();
    expect(await screen.findByText('Full name: Mike Render')).toBeVisible();
  });
});
