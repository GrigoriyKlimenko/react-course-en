import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  storedSearchText: '',
};

export const searchTextSlice = createSlice({
  name: 'storedSearchText',
  initialState,
  reducers: {
    saveSearchText(state, action: PayloadAction<string>) {
      state.storedSearchText = action.payload;
    },
  },
});

export default searchTextSlice.reducer;
