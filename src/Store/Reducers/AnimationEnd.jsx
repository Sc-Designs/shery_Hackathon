import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const AnimationSlice = createSlice({
    name:"animation",
    initialState,
    reducers:{
        completeAnimation: (sate,action)=>{
            return action.payload;
        }
    }
})

export const AnimationReducer = AnimationSlice.reducer;
export const {completeAnimation} = AnimationSlice.actions;