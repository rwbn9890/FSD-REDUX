import { configureStore } from "@reduxjs/toolkit";
import  countReducer from "./toolkit/counterSlice";


export const store = configureStore({
    reducer: countReducer,
    
})