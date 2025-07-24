import { configureStore } from "@reduxjs/toolkit";
import { preCardInfoReducer } from './Reducers/PreCradInfo';
import { AnimationReducer } from "./Reducers/AnimationEnd";
import { cartReducer } from "./Reducers/CartProduct";
import { OrderReducer } from "./Reducers/OrderList";
import { UserReducer } from "./Reducers/UserReducer";

const store = configureStore({
  reducer: {
    preCardInfoReducer: preCardInfoReducer,
    Animation: AnimationReducer,
    cartReducer: cartReducer,
    OrderReducer: OrderReducer,
    UserReducer: UserReducer,
  },
});

export default store;