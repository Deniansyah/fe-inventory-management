import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getProductThunk = createAsyncThunk(
  "getProduct/request",
  async (query, { getState }) => {
    const {searchBy, search, sortBy, sort, limit, page} = query

    try {
      const token = getState().auth.data;
      const response = await http(token).get(
        `/product${searchBy ? "?searchBy=" + searchBy : "?searchBy"}${search ? "&search=" + search : "&search"}${sortBy ? "&sortBy=" + sortBy : "&sortBy"}${sort ? "&sort=" + sort : "&sort"}${limit ? "&limit=" + limit : "&limit"}${page ? "&page=" + page : "&page"}`
      );
      return response.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

export const createProductThunk = createAsyncThunk(
  "createProduct/request",
  async (formData, {getState}) => {
    try {
      const token = getState().auth.data;
      const data = await http(token).post(`/product`, formData, {
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

export const getProductByIdThunk = createAsyncThunk(
  "getProductById/request",
  async (id, { getState }) => {
    try {
      const token = getState().auth.data;
      const response = await http(token).get(`/product/${id}`);
      return response.data.results
    } catch (err) {
      throw err.response.data.message;
    }
  }
)

export const updateProductThunk = createAsyncThunk(
  "updateProduct/request",
  async ({formData, id}, { getState }) => {
    try {
      const token = getState().auth.data;
      const data = await http(token).patch(`/product/${id}`, formData, {
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