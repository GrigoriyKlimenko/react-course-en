import 'whatwg-fetch';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Registration } from './Registration';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';
const store = setupStore();

describe('Registration page', () => {
  it('Renders registration page', () => {
    render(
      <Provider store={store}>
        <Registration />
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Participants registration of the "Race days" event');
  });
});
