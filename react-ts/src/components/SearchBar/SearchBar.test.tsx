import 'whatwg-fetch';
import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { SearchBar } from './SearchBar';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
const store = setupStore();

const wrappedSearchBar = (
  <Provider store={store}>
    <SearchBar />
  </Provider>
);

describe('Search component', () => {
  it('Renders empty searchbar', () => {
    render(wrappedSearchBar);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
  it('Change input value', async () => {
    const testValue = 'another test search';
    const { getByPlaceholderText } = render(wrappedSearchBar);
    fireEvent.change(getByPlaceholderText('Search...'), {
      target: { value: testValue },
    });
    expect(screen.getByRole('textbox')).toHaveValue(testValue);
    const searchButton = screen.getByRole('button', { name: 'Search' });
    await userEvent.click(searchButton);
  });
});
