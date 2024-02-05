import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../api/api";
export const fetchProduct = createAsyncThunk(
  "produtsSlice/fetchProduct",
  async () => {
    return (await axios.get(apiUrl + "products")).data;
  }
);

const produtsSlice = createSlice({
  initialState: { lodding: false, productsData: [], error: false },
  name: "sliceFetchProduts",
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.lodding = true;
      state.error = false;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.productsData = action.payload;
      state.error = false;
      state.lodding = false;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.error = true;
      state.lodding = false;
    });
  },
});

export default produtsSlice.reducer;
