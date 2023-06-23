import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
// import http from "../../helpers/http";

export const getListUsersThunk = createAsyncThunk("getListUsers/request", async () => {
  const headers = {}
  const response = await axios.create({ baseURL: "http://localhost:3001", headers }).get("users");
  return response.data;
});
