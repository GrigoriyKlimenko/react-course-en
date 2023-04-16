import 'whatwg-fetch';
import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { CardsContainer } from './CardsContainer';
import image from '@assets/no-image.jpg';
import { mockGetOneCardEndpoint } from '@/utils/mockServer';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';
const store = setupStore();

const TEST_DATA = {
  id: 'id12',
  name: 'Firstname Lastname',
  image: image,
};

const TEST_DATA_ARRAY = new Array(10).fill('').map((_, idx) => {
  return {
    ...TEST_DATA,
    id: TEST_DATA.id + idx,
  };
});

const ONE_CARD_TEST_DATA = {
  id: '1',
  image: image,
  name: 'Nick Qwerty',
  city: 'Unknown',
  gender: 'male',
  date: '1998-01-01',
  raceClass: 'Drag racing',
};

describe('CardsContainer component', () => {
  it('Renders 1 card', () => {
    render(<CardsContainer cards={[TEST_DATA]} />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
  it('Renders 10 card', () => {
    render(<CardsContainer cards={TEST_DATA_ARRAY} />);
    expect(screen.getAllByTestId('card')).toHaveLength(10);
  });
  it('Renders 0 card', () => {
    const { container } = render(<CardsContainer cards={[]} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});

describe('Fetch all card data', async () => {
  it('has all card data', async () => {
    mockGetOneCardEndpoint(
      `https://fake-server-beige.vercel.app/catalog/id12`,
      ONE_CARD_TEST_DATA
    );
    render(
      <Provider store={store}>
        <CardsContainer cards={[TEST_DATA]} />
      </Provider>
    );
    fireEvent(
      screen.getByText('Full name: Firstname Lastname'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(await screen.findByText('Full name: Nick Qwerty')).toBeVisible();
    expect(await screen.findByText('City: Unknown')).toBeVisible();
    expect(await screen.findByText('Date of birth: 1998-01-01')).toBeVisible();
    expect(await screen.findByText('Gender: male')).toBeVisible();
    expect(await screen.findByText('Race class: Drag racing')).toBeVisible();
  });
});
