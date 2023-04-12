import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsHomeReducer from './reducers/CardsHomeSlice';
import cardsFormReducer from './reducers/CardsFormSlice';

const rootReducer = combineReducers({
  cardsHomeReducer,
  cardsFormReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
