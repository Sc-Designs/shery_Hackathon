import { configureStore } from "@reduxjs/toolkit";
import { preCardInfoReducer } from './Reducers/PreCradInfo';
import { AnimationReducer } from "./Reducers/AnimationEnd";

const store = configureStore({
  reducer: {
    preCardInfoReducer: preCardInfoReducer,
    Animation: AnimationReducer,
  },
});

export default store;