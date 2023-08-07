import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http"
// import axios from "axios"

export const getListUsersThunk = createAsyncThunk(
  "getListUsers/request",
  async (args, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get("/users");
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);



