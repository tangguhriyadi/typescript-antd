import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from "./cake/cake";
import carReducer from "./cars/cars";

const store = configureStore({
  reducer: {
    car: carReducer,
    cake: cakeReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
