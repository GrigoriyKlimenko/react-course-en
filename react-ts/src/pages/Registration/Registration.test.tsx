import 'whatwg-fetch';
import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Registration } from './Registration';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
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

  it('Renders registration page', async () => {
    const { container } = render(
      <Provider store={store}>
        <Registration />
      </Provider>
    );
    const inputFirstName = container.querySelector(`input[name="firstName"]`);
    inputFirstName && (await userEvent.type(inputFirstName, 'Nikol'));
    const inputLastName = container.querySelector(`input[name="lastName"]`);
    inputLastName && (await userEvent.type(inputLastName, 'Nikol'));
    const city = container.querySelector(`input[name="city"]`);
    city && (await userEvent.type(city, 'Silent'));
    const birthday = container.querySelector(`input[name="birthday"]`);
    birthday && (await userEvent.type(birthday, '1990-01-01'));
    const radio = container.querySelector(`input[name="female"]`);
    radio && fireEvent.click(radio);
    const select = container.querySelector(`select[name="raceClass"]`);
    const option = screen.getByRole('option', {
      name: 'Drag racing',
    }) as HTMLOptionElement;
    select && (await userEvent.selectOptions(select, option));
    global.URL.createObjectURL = vi.fn();
    const mockedImage = new File(['image'], 'image.jpeg', {
      type: 'image/jpeg',
    });
    const inputFile = container.querySelector(
      `input[name="image"]`
    ) as HTMLInputElement;
    inputFile && (await userEvent.upload(inputFile, mockedImage));
    const checkbox = container.querySelector(`input[name="confirm"]`);
    checkbox && (await userEvent.click(checkbox));
    const submit = container.querySelector(`input[name="submit"]`);
    submit && (await userEvent.click(submit));
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
