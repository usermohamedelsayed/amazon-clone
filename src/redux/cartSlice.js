import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: { listDataCart: JSON.parse(localStorage.listDataCart || "[]") },
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      let checkAmount = state.listDataCart.find(
        (item) => +item.id === +action.payload.id
      );
      if (checkAmount) {
        checkAmount.amount++;
      } else {
        state.listDataCart.push(action.payload);
        localStorage.setItem(
          "listDataCart",
          JSON.stringify(state.listDataCart)
        );
      }
    },
    increaceAmount: (state, action) => {
      state.listDataCart.find((item) => item.id === action.payload).amount++;
      localStorage.setItem("listDataCart", JSON.stringify(state.listDataCart));
    },
    deccreaceAmount: (state, action) => {
      let item = state.listDataCart.find((item) => item.id === action.payload);
      if (item.amount > 1) {
        item.amount--;
      }
      localStorage.setItem("listDataCart", JSON.stringify(state.listDataCart));
    },
    removeToCart: (state, action) => {
      state.listDataCart = state.listDataCart.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("listDataCart", JSON.stringify(state.listDataCart));
    },
    clearCart: (state, action) => {
      state.listDataCart = [];
      localStorage.setItem("listDataCart", JSON.stringify(state.listDataCart));
    },
  },
});

export const {
  addToCart,
  increaceAmount,
  deccreaceAmount,
  removeToCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
