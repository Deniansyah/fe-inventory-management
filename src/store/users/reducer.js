import { createSlice } from "@reduxjs/toolkit";
import { getListUsersThunk } from "./actions";
import { initialState } from "./initialState";

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListUsersThunk.pending, (state) => {
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
        }
      }
    })
    builder.addCase(getListUsersThunk.fulfilled, (state, action) => {
      return {
        ...state,
        list: {
          ...state.list,
          iisLoading: false,
          data: action.payload,
        },
      };
    })
    builder.addCase(getListUsersThunk.rejected, (state, action) => {
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          isError: true,
          errorMessage: action.error.message,
        },
      };
    })
  },
});

export const usersAction = {
  ...usersSlice.actions,
  getListUsersThunk,
}
export const usersReducer = usersSlice.reducer;
