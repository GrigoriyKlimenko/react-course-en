import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Form } from './Form';

describe('Form component', () => {
  it('Renders form', () => {
    render(<Form addCard={() => {}} />);
    expect(screen.getAllByRole('textbox')).toHaveLength(3);
    expect(screen.getAllByRole('radio')).toHaveLength(2);
    expect(screen.getAllByRole('option')).toHaveLength(5);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Validation works', () => {
    const { getByText } = render(<Form addCard={() => {}} />);
    fireEvent(
      getByText('Submit'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getAllByText('Required field, fill it in')).toHaveLength(3);
    expect(screen.getByText('Choose your day of birth')).toBeInTheDocument();
    expect(screen.getByText('Choose your gender')).toBeInTheDocument();
    expect(
      screen.getByText('Choose the racing class in which you will participate')
    ).toBeInTheDocument();
    expect(screen.getByText('Choose your photo')).toBeInTheDocument();
    expect(
      screen.getByText('Confirm, that you have read the competition rules')
    ).toBeInTheDocument();
  });
});
