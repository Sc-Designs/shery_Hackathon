import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "CartItems",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },

    removeItems: (state, action) => {
      return state.filter((item) => item.name !== action.payload);
    },

    increaseItemCount: (state, action) => {
      const item = state.find((item) => item.name === action.payload);
      if (item) {
        item.count += 1;
      }
    },

    decrementItemCount: (state, action) => {
      const item = state.find((item) => item.name === action.payload);
      if (item && item.count > 1) {
        item.count -= 1;
      }
    },
  },
});

export const cartReducer = CartSlice.reducer;
export const {
  addProduct,
  removeItems,
  increaseItemCount,
  decrementItemCount,
} = CartSlice.actions;
