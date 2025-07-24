import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const OrderSlice = createSlice({
    name:"Order",
    initialState,
    reducers:{
        productAdd : (state,action)=>{
            action.payload.forEach((items)=>{
                state.push(items);
            })
        }
    }
})

export const OrderReducer = OrderSlice.reducer;

export const {productAdd} = OrderSlice.actions;