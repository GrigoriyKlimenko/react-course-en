import { describe, it } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import { SearchBar } from './SearchBar';

afterEach(cleanup);

describe('Search component', () => {
  it('Renders empty searchbar', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
  it('Renders non-empty searchbar', () => {
    const testValue = 'some test search';
    window.localStorage.setItem('searchText', testValue);
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).toHaveValue(testValue);
  });

  it('Change input value', () => {
    const testValue = 'another test search';
    const { getByPlaceholderText } = render(<SearchBar />);
    fireEvent.change(getByPlaceholderText('Search...'), {
      target: { value: testValue },
    });
    expect(screen.getByRole('textbox')).toHaveValue(testValue);
  });
});
