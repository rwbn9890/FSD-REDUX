import { configureStore } from "@reduxjs/toolkit";
import { alertReducer } from "../features/alertSlice";
import { cartReducer } from "../features/cartSlice";
import { authReducer } from "../features/authSlice";


const store = configureStore({
    reducer:{
        auth: authReducer,
        cart: cartReducer,
    }
})