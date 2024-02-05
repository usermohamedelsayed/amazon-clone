import { createSlice } from "@reduxjs/toolkit";

const resultSearchSlice = createSlice({
  initialState: { products: [], inputVal: "", category: "all" },
  name: "resultSearch",
  reducers: {
    handleSearchWithCategory: (state, action) => {
      state.category = action.payload.toLowerCase();
    },
    handleSearchProducts: (state, action) => {
      if (state.category === "all") {
        state.products = action.payload.filter((item) =>
          item.title.toLowerCase().includes(state.inputVal.toLowerCase())
        );
      } else {
        state.products = action.payload
          .filter(
            (product) =>
              product.category.toLowerCase() === state.category.toLowerCase()
          )
          .filter((item) =>
            item.title.toLowerCase().includes(state.inputVal.toLowerCase())
          );
      }
    },
    handleGetInpValue: (state, action) => {
      state.inputVal = action.payload;
    },
  },
});

export const {
  handleSearchProducts,
  handleGetInpValue,
  handleSearchWithCategory,
} = resultSearchSlice.actions;
export default resultSearchSlice.reducer;
