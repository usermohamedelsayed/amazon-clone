import { configureStore } from "@reduxjs/toolkit";
import produtsSlice from "./produtsSlice";
import categoriesSlice from "./categoriesSlice";
import filterProductsSlice from "./filterProductsSlice";
import cartSlice from "./cartSlice";
import productDetailsSlice from "./productDetailsSlice";
import resultSearchSlice from "./resultSearchSlice";

export const store = configureStore({
  reducer: {
    produtsSlice,
    categoriesSlice,
    filterProductsSlice,
    cartSlice,
    productDetailsSlice,
    resultSearchSlice,
  },
});
