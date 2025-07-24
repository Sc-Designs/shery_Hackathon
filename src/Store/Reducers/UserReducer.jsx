import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("authUser");
const initialState = storedUser ? JSON.parse(storedUser) : null;

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = action.payload;
      localStorage.setItem("authUser", JSON.stringify(user));
      return user;
    },
    registerUser: (state, action) => {
      const user = action.payload;
      localStorage.setItem("authUser", JSON.stringify(user));
      return user;
    },
    logOut: () => {
      localStorage.removeItem("authUser");
      return null;
    },
    removeUser:(state)=>{
      return null;
    },
  },
});

export const UserReducer = UserSlice.reducer;
export const { loginUser, registerUser, logOut, removeUser } = UserSlice.actions;
