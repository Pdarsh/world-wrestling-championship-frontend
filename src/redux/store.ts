// store.ts
import { configureStore } from '@reduxjs/toolkit';
import wrestlersReducer from './wrestler-slice';

const store = configureStore({
  reducer: {
    wrestlers: wrestlersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
