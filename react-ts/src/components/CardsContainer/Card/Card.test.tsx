import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card } from './Card';
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

describe('Card component', () => {
  it('Renders card', () => {
    render(<Card data={TEST_DATA} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(
      screen.getByText(`Full name: ${TEST_DATA.name}`)
    ).toBeInTheDocument();
    // expect(screen.getByText(`Gender: ${TEST_DATA.gender}`)).toBeInTheDocument();
    // expect(screen.getByText(`City: ${TEST_DATA.city}`)).toBeInTheDocument();
    // expect(
    //   screen.getByText(`Date of birth: ${TEST_DATA.date}`)
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByText(`Race class: ${TEST_DATA.raceClass}`)
    // ).toBeInTheDocument();
  });
});
