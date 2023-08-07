import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";
// import axios from "axios"

export const getProductThunk = createAsyncThunk(
  "getProduct/request",
  async (args, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get("/product");
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);
