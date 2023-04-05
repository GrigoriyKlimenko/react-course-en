import { describe, it, vi } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import { SearchBar } from './SearchBar';

afterEach(cleanup);

describe('Search component', () => {
  const mockFn = vi.fn().mockImplementation((value) => value);
  it('Renders empty searchbar', () => {
    render(<SearchBar getData={mockFn} />);
    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(mockFn.mock.calls[0][0] === '').toBeTruthy();
  });
  it('Renders non-empty searchbar', () => {
    const testValue = 'some test search';
    window.localStorage.setItem('searchText', testValue);
    render(<SearchBar getData={(v) => mockFn(v)} />);
    expect(screen.getByRole('textbox')).toHaveValue(testValue);
    expect(mockFn).toHaveBeenCalledWith(testValue);
  });

  it('Change input value', () => {
    const testValue = 'another test search';
    const { getByPlaceholderText } = render(<SearchBar getData={mockFn} />);
    fireEvent.change(getByPlaceholderText('Search...'), {
      target: { value: testValue },
    });
    expect(screen.getByRole('textbox')).toHaveValue(testValue);
  });
});
