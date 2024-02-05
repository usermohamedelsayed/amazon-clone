import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../api/api";
export const fetchCategoriesProducts = createAsyncThunk(
  "categoriesSlice/fetchCategoriesProducts",
  async () => {
    return (await axios.get(apiUrl + "products/categories")).data;
  }
);

const categoriesSlice = createSlice({
  initialState: { lodding: false, categoriesProduct: [], error: false },
  name: "sliceFetchProduts",
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesProducts.pending, (state, action) => {
      state.lodding = true;
      state.error = false;
    });
    builder.addCase(fetchCategoriesProducts.fulfilled, (state, action) => {
      state.categoriesProduct = action.payload;
      state.error = false;
      state.lodding = false;
    });
    builder.addCase(fetchCategoriesProducts.rejected, (state, action) => {
      state.error = true;
      state.lodding = false;
    });
  },
});
export default categoriesSlice.reducer;
