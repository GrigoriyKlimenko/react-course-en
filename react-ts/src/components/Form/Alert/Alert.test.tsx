import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Alert } from './Alert';

describe('Alert component', () => {
  it('Renders alert modal', () => {
    render(<Alert handleClose={() => {}} />);
    expect(screen.getByText('The card was successfully created')).toBeTruthy();
  });
  it('call function on button press', () => {
    const fn = vi.fn();
    const { getByText } = render(
      <Alert
        handleClose={() => {
          fn('hello world');
        }}
      />
    );
    fireEvent(
      getByText('Ok'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(fn.mock.calls[0][0] === 'hello world').toBeTruthy();
  });
});
