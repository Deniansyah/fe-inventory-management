import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const loginThunk = createAsyncThunk(
  "login/request",
  async ({ email, password, cb, err }) => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
      cb();
      return response.data.result.data;
    } catch (error) {
      err(error);
      throw error.response.data.result.message;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState : initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      return {
      ...state,
      isLoading: true, 
      }; 
    }),
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        isAuthenticated: true,
      };
    }),
    builder.addCase(loginThunk.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message,
      }
    })
  },
});

export const authAction = {
  ...authSlice.actions,
  loginThunk,
}

export const authReducer = authSlice.reducer;