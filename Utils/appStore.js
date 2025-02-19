import { configureStore, createReducer } from "@reduxjs/toolkit";
import cardReducer from "./cartSlice"

const appStore = configureStore({
    reducer: {
        cart: cardReducer,
    },
});

export default appStore