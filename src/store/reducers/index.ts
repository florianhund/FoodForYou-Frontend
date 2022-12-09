import { configureStore } from '@reduxjs/toolkit';

import mealReducer from './meal';
import tabReducer from './tab';

const store = configureStore({
  reducer: {
    meals: mealReducer,
    tabs: tabReducer
  }
});

export const rootReducer = store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
