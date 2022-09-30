import { configureStore } from '@reduxjs/toolkit';
import { stackOverflowapi } from './services/stackOverflowapi';

import questionsReducer from "./features/questionsSlice"

export const store = configureStore({
  reducer: {
    [stackOverflowapi.reducerPath]: stackOverflowapi.reducer,
    questions: questionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stackOverflowapi.middleware),
});