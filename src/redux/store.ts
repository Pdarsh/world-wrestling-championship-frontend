// store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { createRouterMiddleware } from "connected-next-router";
import wrestlersReducer from './wrestler-slice';

const combinedReducer = combineReducers({
    wrestlers: wrestlersReducer,
});

export const makeStore = (context: any) => {
  const routerMiddleware = createRouterMiddleware();
  return configureStore({
    reducer: (state, action) => {
      if (action.type === HYDRATE) {
        const nextState = {
          ...state, // use previous state
          ...action.payload, // apply delta from hydration
        };
        return nextState;
      } else {
        return combinedReducer(state, action);
      }
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        routerMiddleware,
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);

