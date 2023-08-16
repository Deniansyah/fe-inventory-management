import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";
// import axios from "axios"

export const getStockThunk = createAsyncThunk(
  "getStock/request",
  async (query, { getState }) => {
    // const {searchBy, search, sortBy, sort, limit, page} = query

    try {
      const token = getState().auth.data;
      const response = await http(token).get(
        // `/product${searchBy ? "?searchBy=" + searchBy : "?searchBy"}${search ? "&search=" + search : "&search"}${sortBy ? "&sortBy=" + sortBy : "&sortBy"}${sort ? "&sort=" + sort : "&sort"}${limit ? "&limit=" + limit : "&limit"}${page ? "&page=" + page : "&page"}`
        `/stock`
      );
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);
