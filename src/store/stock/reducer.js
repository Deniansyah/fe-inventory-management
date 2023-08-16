import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getStockThunk } from "./actions";


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
  },
});

export const stockAction = {
  ...stockSlice.actions,
  getStockThunk,
};
export const stockReducer = stockSlice.reducer;