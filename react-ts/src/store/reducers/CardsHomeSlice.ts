import { PartialCardType } from '@components/CardsContainer/Card/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardsHomeSlice {
  searchText: string;
  cards: PartialCardType[];
  isLoading: boolean;
  error: string;
}

const initialState = {
  searchText: '',
  cards: [],
  isLoading: false,
  error: '',
};

export const cardsHomeSlice = createSlice({
  name: 'cardsHome',
  initialState,
  reducers: {
    saveSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
});

export default cardsHomeSlice.reducer;
