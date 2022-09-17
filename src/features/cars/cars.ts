import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("car/fetchCars", async () => {
  const response = await axios.get(
    "https://bootcamp-rent-car.herokuapp.com/admin/car/"
  );
  return response.data;
});

interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  status: boolean;
  start_rent_at: any;
  finish_rent_at: any;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface BubleWrap {
  cars: Car[];
  carStatus: string;
}

const initialState: BubleWrap = {
  cars: [],
  carStatus: "idle",
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action:PayloadAction<Car[]>) => ({
      ...state,
      cars: action.payload,
      carStatus: 'success'
    }));
    builder.addCase(fetchCars.pending, (state) => ({
      ...state,
      carStatus: 'loading'
    }));
    builder.addCase(fetchCars.rejected, (state) => ({
      ...state,
      carStatus: 'failed'
    }));
  }
});


export default carSlice.reducer