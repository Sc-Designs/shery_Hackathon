import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "CartItems",
  initialState,
  reducers: {
    addProduct: (state, action) => {
       const exists = state.find(item => item.id === action.payload.id);
  if (exists) {
    exists.count += 1;
  } else {
    state.push(action.payload);
  }
    },

    removeItems: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
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
    removerAllItem: (state)=>{
      return [];
    }
  },
});

export const cartReducer = CartSlice.reducer;
export const {
  addProduct,
  removeItems,
  increaseItemCount,
  decrementItemCount,
  removerAllItem,
} = CartSlice.actions;
