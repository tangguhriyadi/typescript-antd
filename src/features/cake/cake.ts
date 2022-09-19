/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BubleWrap {
  cake: number
  extra:number
}

const initialState: BubleWrap = {
  cake: 0,
  extra:0
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    plus: (state) => {
      state.cake += 1;
    },
    addExtra: (state, action: PayloadAction<number>) => {
        state.extra += action.payload
    }
  },
});
export const {plus, addExtra} = cakeSlice.actions
export default cakeSlice.reducer