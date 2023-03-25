import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { CardsContainer } from './CardsContainer';
import image from '@assets/no-image.jpg';

const TEST_DATA = {
  id: 'id12',
  name: 'Firstname Lastname',
  gender: 'male',
  city: 'Silent',
  image: image,
  raceClass: 'Drag racing',
  date: '1999-02-16',
};

const TEST_DATA_ARRAY = new Array(10).fill('').map((_, idx) => {
  return {
    ...TEST_DATA,
    id: TEST_DATA.id + idx,
  };
});

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
