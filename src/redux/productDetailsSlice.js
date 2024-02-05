import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../api/api";
export const fetchProductDetails = createAsyncThunk(
  "productDetailsSlice/fetchProductDetails",
  async (id) => {
    return (await axios.get(apiUrl + id)).data;
  }
);

export const productDetailsSlice = createSlice({
  initialState: { lodding: false, product: {}, error: false },
  name: "productDetailsSlice",
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetails.pending, (state, action) => {
      state.lodding = true;
      state.error = false;
    });
    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.product = action.payload;
      state.lodding = false;
      state.error = false;
    });
    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      state.error = true;
      state.lodding = false;
    });
  },
});

export const { viewSingleProduct } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
