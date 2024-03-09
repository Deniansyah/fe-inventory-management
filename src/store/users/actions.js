import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http"
// import axios from "axios"

export const getListUsersThunk = createAsyncThunk(
  "getListUsers/request",
  async (query, { getState }) => {
    const { searchBy, search, sortBy, sort, limit, page, role } = query;

    try {
      const token = getState().auth.data;
      const response = await http(token).get(`/users${searchBy ? "?searchBy=" + searchBy : "?searchBy"}${search ? "&search=" + search : "&search"}${sortBy ? "&sortBy=" + sortBy : "&sortBy"}${sort ? "&sort=" + sort : "&sort"}${limit ? "&limit=" + limit : "&limit"}${page ? "&page=" + page : "&page"}${role ? "&role=" + role : "&role"}`);
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

export const createUserThunk = createAsyncThunk(
  "createUser/request",
  async (formData, {getState}) => {
    try {
      const token = getState().auth.data;
      const data = await http(token).post(`/users`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data
    } catch (err) {
      throw err.response.data.message;
    }
  }
)



