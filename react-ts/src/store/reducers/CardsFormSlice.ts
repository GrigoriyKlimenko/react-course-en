import { CardType } from '@components/CardsContainer/Card/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  cards: [] as CardType[],
};

export const cardsFormSlice = createSlice({
  name: 'cardsForm',
  initialState,
  reducers: {
    saveCard(state, action: PayloadAction<CardType>) {
      state.cards.push(action.payload);
    },
  },
});

export default cardsFormSlice.reducer;
