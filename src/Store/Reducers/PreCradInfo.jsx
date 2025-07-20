import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "WoodY",
    pic: "/OGRed.png",
    description: "Rosemary, Basil & Amber | India’s Strongest Perfume",
    price: 599,
  },
  {
    name: "shadow",
    pic: "/OGBlue.png",
    description: "Lavender, Sage & Amber | India’s Strongest Perfume",
    price: 599,
  },
  {
    name: "gallant",
    pic: "/OGGray.png",
    description: "Petitgrain, Jasmine & Sandalwood | India’s Strongest Perfume",
    price: 599,
  },
  {
    name: "Smokey",
    pic: "/OGOrange.png",
    description: "Whiskey, Oud & Cinnamon | India’s Strongest Perfume",
    price: 599,
  },
];

const preCardInfoSlice = createSlice({
  name: "preCardInfo",
  initialState,
  reducers: {},
});

export const preCardInfoReducer = preCardInfoSlice.reducer;
export const {} = preCardInfoSlice.actions;