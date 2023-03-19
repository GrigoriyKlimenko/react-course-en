import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card } from './Card';
import image from '@assets/no-image.jpg';

const TEST_DATA = {
  id: 'id12',
  title: 'Some test title',
  image: image,
  views: 100500,
  city: 'Silent',
  date: '20-03-1909',
};

describe('Card component', () => {
  it('Renders card', () => {
    render(<Card data={TEST_DATA} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(`Title: ${TEST_DATA.title}`)).toBeInTheDocument();
    expect(screen.getByText(`Views: ${TEST_DATA.views}`)).toBeInTheDocument();
    expect(screen.getByText(`City: ${TEST_DATA.city}`)).toBeInTheDocument();
    expect(screen.getByText(`Date: ${TEST_DATA.date}`)).toBeInTheDocument();
  });
});
