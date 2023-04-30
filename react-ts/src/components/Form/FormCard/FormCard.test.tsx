import 'whatwg-fetch';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { FormCard } from './FormCard';
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
  it('Renders form card', () => {
    render(<FormCard data={TEST_DATA} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(
      screen.getByText(`Full name: ${TEST_DATA.name}`)
    ).toBeInTheDocument();
  });
});
