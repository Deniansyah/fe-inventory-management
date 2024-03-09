import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getStockThunk, updateStockThunk } from "./actions";


const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStockThunk.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(getStockThunk.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    });
    builder.addCase(getStockThunk.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message,
      };
    });
    builder.addCase(updateStockThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
  },
});

export const stockAction = {
  ...stockSlice.actions,
  getStockThunk,
  updateStockThunk
};
export const stockReducer = stockSlice.reducer;