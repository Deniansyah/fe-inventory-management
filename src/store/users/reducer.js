import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getListUsersThunk } from "./actions";

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListUsersThunk.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    })
    builder.addCase(getListUsersThunk.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    })
    builder.addCase(getListUsersThunk.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message,
      };
    })
  },
});

export const usersAction = {
  ...usersSlice.actions,
  getListUsersThunk,
}
export const usersReducer = usersSlice.reducer;
