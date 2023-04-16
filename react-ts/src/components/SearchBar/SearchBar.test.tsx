import 'whatwg-fetch';
import { describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { SearchBar } from './SearchBar';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';
const store = setupStore();

const mockFn = vi.fn().mockImplementation((value) => value);
const wrappedSearchBar = (
  <Provider store={store}>
    <SearchBar getData={mockFn} />
  </Provider>
);

describe('Search component', () => {
  it('Renders empty searchbar', () => {
    render(wrappedSearchBar);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
  it('Change input value', () => {
    const testValue = 'another test search';
    const { getByPlaceholderText } = render(wrappedSearchBar);
    fireEvent.change(getByPlaceholderText('Search...'), {
      target: { value: testValue },
    });
    expect(screen.getByRole('textbox')).toHaveValue(testValue);
  });
});
