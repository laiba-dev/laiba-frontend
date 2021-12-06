import { configureStore, combineReducers } from "@reduxjs/toolkit";
import MenuReducer from "./reducers/MenuReducer";
import { createWrapper } from "next-redux-wrapper";

const store = () =>
  configureStore({
    reducer: combineReducers({
      menu: MenuReducer,
    }),
    preloadedState: {},
    devTools: true,
  });

export const wrapper = createWrapper(store, { debug: true });
