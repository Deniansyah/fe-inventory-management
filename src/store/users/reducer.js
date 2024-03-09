import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getListUsersThunk, createUserThunk } from "./actions";

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
    builder.addCase(createUserThunk.fulfilled, (state) => {
      return {
        ...state,
      };
    });
  },
});

export const usersAction = {
  ...usersSlice.actions,
  getListUsersThunk,
  createUserThunk
}
export const usersReducer = usersSlice.reducer;
