import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";
// import axios from "axios"

export const getStockThunk = createAsyncThunk(
  "getStock/request",
  async (query, { getState }) => {
    const {cInitCol ,searchBy, search, cInitSort, sortStockBy, sort, limit, page, type} = query

    try {
      const token = getState().auth.data;
      const response = await http(token).get(
        `/stock${searchBy ? "?searchBy=" + searchBy : "?searchBy"}${search ? "&search=" + search : "&search"}${cInitCol ? "&cInitCol=" + cInitCol : "&cInitCol"}${cInitSort ? "&cInitSort=" + cInitSort : "&cInitSort"}${sortStockBy ? "&sortStockBy=" + sortStockBy : "&sortStockBy"}${sort ? "&sort=" + sort : "&sort"}${limit ? "&limit=" + limit : "&limit"}${page ? "&page=" + page : "&page"}${type ? "&type=" + type : "&type"}`
      );
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);
