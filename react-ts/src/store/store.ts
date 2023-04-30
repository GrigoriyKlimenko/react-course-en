import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchTextReducer from './reducers/SearchTextSlice';
import cardsFormReducer from './reducers/CardsFormSlice';
import { cardsAPI } from '@/services/cardsService';

const rootReducer = combineReducers({
  searchTextReducer,
  cardsFormReducer,
  [cardsAPI.reducerPath]: cardsAPI.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cardsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
