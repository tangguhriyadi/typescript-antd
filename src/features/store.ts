import { configureStore } from "@reduxjs/toolkit";

import  carReducer  from "./cars/cars";

const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
