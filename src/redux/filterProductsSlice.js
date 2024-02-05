import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../api/api";
export const fetchFilterPorducts = createAsyncThunk(
  "filterProductsSlice/fetchFilterPorducts",
  async (cat) => {
    return (await axios.get(apiUrl + cat)).data;
  }
);

const filterProductsSlice = createSlice({
  initialState: { lodding: false, products: [], error: false },
  name: "filterProductsSlice",
  extraReducers: (builder) => {
    builder.addCase(fetchFilterPorducts.pending, (state, action) => {
      state.lodding = true;
      state.error = false;
    });
    builder.addCase(fetchFilterPorducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.lodding = false;
      state.error = false;
    });
    builder.addCase(fetchFilterPorducts.rejected, (state, action) => {
      state.error = true;
      state.lodding = false;
    });
  },
});

export default filterProductsSlice.reducer;
